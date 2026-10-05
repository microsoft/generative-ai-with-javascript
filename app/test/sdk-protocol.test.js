import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import {
  createMessageConnection, StreamMessageReader, StreamMessageWriter
} from 'vscode-jsonrpc/node';
import { RuntimeConnection } from '@github/copilot-sdk';
import { createApp, createClient } from '../app-sdk.js';

test('the installed SDK sends chat-only controls and preserves SDK guardrails', { timeout: 10000 }, async t => {
  const requests = [];
  let rpc;
  let hookResult;
  let resolvePermission;
  const permissionAnswered = new Promise(resolve => { resolvePermission = resolve; });
  const runtime = createServer(socket => {
    rpc = createMessageConnection(
      new StreamMessageReader(socket), new StreamMessageWriter(socket)
    );
    rpc.onRequest(async (method, params) => {
      requests.push({ method, params });
      switch (method) {
        case 'connect':
          return { protocolVersion: 3 };
        case 'session.create':
          return { sessionId: params.sessionId, capabilities: {} };
        case 'session.options.update':
          return { success: true };
        case 'session.send':
          await rpc.sendNotification('session.event', {
            sessionId: params.sessionId,
            event: {
              type: 'permission.requested',
              data: {
                requestId: 'permission-1',
                permissionRequest: { kind: 'shell', commands: [] }
              }
            }
          });
          await permissionAnswered;
          hookResult = await rpc.sendRequest('hooks.invoke', {
            sessionId: params.sessionId,
            hookType: 'preToolUse',
            input: { toolName: 'future-tool', toolArgs: {} }
          });
          await rpc.sendNotification('session.event', {
            sessionId: params.sessionId,
            event: { type: 'assistant.message', data: { content: 'Hello from Ada.' } }
          });
          await rpc.sendNotification('session.event', {
            sessionId: params.sessionId,
            event: { type: 'session.idle', data: { mode: 'interactive' } }
          });
          return { messageId: 'message-1' };
        case 'session.permissions.handlePendingPermissionRequest':
          resolvePermission();
          return { applied: true };
        case 'session.abort':
          return {};
        case 'session.detach':
        case 'session.delete':
          return { success: true };
        default:
          throw new Error(`Unexpected SDK RPC: ${method}`);
      }
    });
    rpc.listen();
  });
  runtime.listen(0, '127.0.0.1');
  await once(runtime, 'listening');
  const directory = path.join(tmpdir(), 'character-chat-protocol-test');
  const client = createClient(directory, RuntimeConnection.forUri(
    `127.0.0.1:${runtime.address().port}`
  ));
  const server = createApp(client).listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(async () => {
    const errors = await client.stop();
    rpc?.dispose();
    await Promise.all([
      new Promise(resolve => runtime.close(resolve)),
      new Promise(resolve => {
        server.close(resolve);
        server.closeAllConnections();
      })
    ]);
    assert.deepEqual(errors, []);
  });

  await assert.rejects(client.createSession({ model: 'gpt-4.1' }), /availableTools/);
  assert.equal(requests.some(item => item.method === 'session.create'), false);
  const response = await fetch(`http://127.0.0.1:${server.address().port}/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Hello', character: { name: 'ada' } })
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { prompt: 'Hello', answer: 'Hello from Ada.' });

  const config = requests.find(item => item.method === 'session.create').params;
  assert.deepEqual(config.availableTools, []);
  assert.deepEqual(config.tools, []);
  assert.equal(config.requestPermission, true);
  const permission = requests.find(item =>
    item.method === 'session.permissions.handlePendingPermissionRequest'
  ).params;
  assert.equal(permission.requestId, 'permission-1');
  assert.deepEqual(permission.result, { kind: 'reject' });
  assert.equal(config.hooks, true);
  assert.equal(config.toolFilterPrecedence, 'excluded');
  assert.equal(config.enableConfigDiscovery, false);
  assert.equal(config.enableFileHooks, false);
  assert.equal(config.enableHostGitOperations, false);
  assert.equal(config.enableSkills, false);
  assert.equal(config.enableSessionStore, false);
  assert.equal(config.enableSessionTelemetry, false);
  assert.deepEqual(config.memory, { enabled: false });
  assert.equal(config.systemMessage.mode, 'customize');
  assert.deepEqual(config.systemMessage.sections.environment_context, { action: 'remove' });
  assert.match(config.systemMessage.content, /Ada Lovelace/);
  assert.equal(hookResult.output.permissionDecision, 'deny');
  const patch = requests.find(item => item.method === 'session.options.update').params;
  assert.equal(patch.skipCustomInstructions, true);
  assert.deepEqual(patch.installedPlugins, []);
  assert.deepEqual(patch.includedBuiltinSkills, []);
  assert.deepEqual(requests.filter(item =>
    ['session.abort', 'session.detach', 'session.delete'].includes(item.method)
  ).map(item => item.method), ['session.abort', 'session.detach', 'session.delete']);
});

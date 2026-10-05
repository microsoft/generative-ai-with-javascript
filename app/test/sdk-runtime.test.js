import assert from 'node:assert/strict';
import { once } from 'node:events';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { RuntimeConnection } from '@github/copilot-sdk';
import { createApp, createClient } from '../app-sdk.js';

test('the packaged runtime advertises no tools and deletes chat sessions', { timeout: 30000 }, async t => {
  const directory = await mkdtemp(path.join(tmpdir(), 'character-chat-test-'));
  const env = {
    PATH: process.env.PATH,
    HOME: directory,
    TMPDIR: directory,
    COPILOT_TELEMETRY_DISABLED: '1'
  };
  for (const name of ['SystemRoot', 'WINDIR', 'TEMP', 'TMP']) {
    if (process.env[name]) env[name] = process.env[name];
  }
  const client = createClient(directory, RuntimeConnection.forStdio({
    env, args: ['--no-auto-login']
  }));
  let inventory;
  const app = createApp({
    async createSession(config) {
      const session = await client.createSession({
        ...config,
        provider: {
          type: 'openai',
          baseUrl: 'http://127.0.0.1:1',
          apiKey: 'local-test-only',
          wireApi: 'completions'
        }
      });
      inventory = await session.rpc.tools.getCurrentMetadata();
      return {
        sessionId: session.sessionId,
        sendAndWait: async () => ({ data: { content: 'A local chat response.' } }),
        abort: () => session.abort(),
        disconnect: () => session.disconnect()
      };
    },
    deleteSession: sessionId => client.deleteSession(sessionId)
  });
  const server = app.listen(0, '127.0.0.1');
  t.after(async () => {
    try {
      await new Promise(resolve => {
        server.close(resolve);
        server.closeAllConnections();
      });
      assert.deepEqual(await client.stop(), []);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
  await once(server, 'listening');
  const response = await fetch(`http://127.0.0.1:${server.address().port}/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Hello', character: { name: 'ada' } })
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { prompt: 'Hello', answer: 'A local chat response.' });
  assert.deepEqual(inventory.tools, []);
  assert.deepEqual(await client.listSessions(), []);
});

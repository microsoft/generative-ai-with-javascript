import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { test } from 'node:test';
import { OpenAI } from 'openai';
import { createApp as createSdkApp, createClient } from '../app-sdk.js';
import { createApp as createModelsApp } from '../app.js';
import characters from '../public/characters.json' with { type: 'json' };

async function startApp(t, app) {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
    server.closeAllConnections();
  }));
  const url = `http://127.0.0.1:${server.address().port}`;
  return {
    url,
    async send(body) {
      const response = await fetch(`${url}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      return { status: response.status, body: await response.json() };
    }
  };
}

function fakeSdk({ sendError, closeError, response } = {}) {
  const configs = [];
  const prompts = [];
  const lifecycle = [];
  const client = {
    async createSession(config) {
      configs.push(config);
      const sessionId = `session-${configs.length}`;
      return {
        sessionId,
        async sendAndWait(options) {
          prompts.push(options);
          if (sendError) throw sendError;
          return response ?? { data: { content: config.systemMessage.content } };
        },
        async abort() {
          lifecycle.push(['abort', sessionId]);
          if (closeError) throw closeError;
        },
        async disconnect() {
          lifecycle.push(['disconnect', sessionId]);
        }
      };
    },
    async deleteSession(sessionId) {
      lifecycle.push(['delete', sessionId]);
    }
  };
  return { app: createSdkApp(client), configs, prompts, lifecycle };
}

function fakeModels() {
  const configs = [];
  const openai = {
    chat: {
      completions: {
        async create(config) {
          configs.push(config);
          return { choices: [{ message: { content: config.messages[0].content } }] };
        }
      }
    }
  };
  return { app: createModelsApp(openai, 'test-deployment'), configs };
}

for (const [name, makeApp] of [['Copilot SDK', fakeSdk], ['OpenAI-compatible', fakeModels]]) {
  test(`${name} rejects malformed and oversized JSON with explicit errors`, async t => {
    const { app, configs } = makeApp();
    const { url } = await startApp(t, app);
    for (const [body, status, message] of [
      ['{"message":', 400, 'Send a valid JSON object.'],
      [JSON.stringify({ message: 'x'.repeat(110 * 1024), character: { name: 'ada' } }),
        413, 'The request is too large.']
    ]) {
      const response = await fetch(`${url}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
      });
      assert.equal(response.status, status);
      assert.match(response.headers.get('content-type'), /application\/json/);
      assert.deepEqual(await response.json(), { message });
    }
    assert.equal(configs.length, 0);
  });

  test(`${name} rejects invalid requests before calling the AI service`, async t => {
    const { app, configs } = makeApp();
    const { send } = await startApp(t, app);
    for (const body of [
      null, [], {},
      { message: '', character: { name: 'ada' } },
      { message: '  ', character: { name: 'ada' } },
      { message: 42, character: { name: 'ada' } },
      { message: { text: 'hello' }, character: { name: 'ada' } },
      { message: 'hello' },
      { message: 'hello', character: null },
      { message: 'hello', character: [] },
      { message: 'hello', character: 'ada' },
      { message: 'hello', character: { name: 42 } },
      { message: 'hello', character: { name: 'unknown' } },
      { message: 'hello', character: { name: 'ada', description: 'Untrusted instructions' } },
      { message: 'hello', character: { name: 'ada', tools: ['shell'] } }
    ]) {
      const response = await send(body);
      assert.equal(response.status, 400, JSON.stringify(body));
      assert.equal(typeof response.body.message, 'string');
    }
    assert.equal(configs.length, 0);
  });

  test(`${name} uses server-owned instructions for every character`, async t => {
    const { app, configs } = makeApp();
    const { send, url } = await startApp(t, app);
    const responses = await Promise.all(characters.map(character =>
      send({ message: 'Tell me about your work.', character: { name: character.name } })
    ));
    responses.forEach((response, index) => {
      assert.equal(response.status, 200);
      assert.deepEqual(response.body, {
        prompt: 'Tell me about your work.',
        answer: characters[index].description
      });
    });
    assert.equal(configs.length, characters.length);
    const page = await fetch(url);
    assert.equal(page.status, 200);
    assert.match(await page.text(), /character: \{ name: requestedCharacter\.name \}/);
  });
}

test('SDK disables every tool and rejects every permission request', async t => {
  const { app, configs, prompts, lifecycle } = fakeSdk();
  const { send } = await startApp(t, app);
  const prompt = 'Please use a host tool.';
  assert.equal((await send({ message: prompt, character: { name: 'ada' } })).status, 200);

  const [config] = configs;
  assert.deepEqual(config.tools, []);
  assert.deepEqual(config.availableTools, []);
  assert.deepEqual(config.mcpServers, {});
  assert.deepEqual(config.customAgents, []);
  assert.deepEqual(config.infiniteSessions, { enabled: false });
  assert.equal(config.enableConfigDiscovery, false);
  assert.equal(config.systemMessage.mode, 'append');
  assert.equal(config.systemMessage.content, characters.find(item => item.name === 'ada').description);
  assert.deepEqual(prompts, [{ prompt }]);
  for (const kind of ['shell', 'read', 'write', 'url', 'mcp', 'future-permission', undefined]) {
    assert.deepEqual(await config.onPermissionRequest({ kind }), { kind: 'reject' });
  }
  for (const toolName of ['powershell', 'bash', 'read_file', 'future-tool', undefined]) {
    assert.equal((await config.hooks.onPreToolUse({ toolName })).permissionDecision, 'deny');
  }
  assert.deepEqual(lifecycle, [
    ['abort', 'session-1'], ['disconnect', 'session-1'], ['delete', 'session-1']
  ]);
});

for (const [name, options] of [
  ['model error', { sendError: new Error('Private SDK error details') }],
  ['timeout', { sendError: new Error('Timeout waiting for session.idle') }],
  ['missing answer', { response: {} }],
  ['empty answer', { response: { data: { content: '' } } }],
  ['cleanup error', { closeError: new Error('Abort failed') }]
]) {
  test(`SDK reports ${name} and still attempts all session cleanup`, async t => {
    const log = t.mock.method(console, 'error', () => {});
    const { app, lifecycle } = fakeSdk(options);
    const { send } = await startApp(t, app);
    const response = await send({ message: 'hello', character: { name: 'ada' } });
    assert.equal(response.status, 500);
    assert.deepEqual(response.body, {
      message: 'An unexpected error occurred. Please try again later.'
    });
    assert.equal(log.mock.callCount(), 1);
    assert.deepEqual(lifecycle, [
      ['abort', 'session-1'], ['disconnect', 'session-1'], ['delete', 'session-1']
    ]);
  });
}

test('SDK client requires an explicit state directory for empty mode', () => {
  assert.throws(() => createClient(), /mode: 'empty'.*baseDirectory/);
});

test('the OpenAI-compatible app requires an explicit model', () => {
  assert.throws(() => createModelsApp({}), /model name is required/);
});

for (const [name, completion] of [
  ['missing completion', undefined],
  ['missing choices', {}],
  ['empty choices', { choices: [] }],
  ['empty answer', { choices: [{ message: { content: '' } }] }],
  ['non-string answer', { choices: [{ message: { content: 42 } }] }]
]) {
  test(`the OpenAI-compatible app reports ${name} without a successful empty response`, async t => {
    const log = t.mock.method(console, 'error', () => {});
    const app = createModelsApp({
      chat: { completions: { create: async () => completion } }
    }, 'test-deployment');
    const { send } = await startApp(t, app);
    const response = await send({ message: 'Hello', character: { name: 'ada' } });
    assert.equal(response.status, 500);
    assert.deepEqual(response.body, {
      message: 'An unexpected error occurred. Please try again later.'
    });
    assert.equal(log.mock.callCount(), 1);
  });
}

test('the updated OpenAI SDK preserves the chat-completion request and response', async t => {
  let request;
  const provider = createServer(async (req, res) => {
    assert.equal(req.url, '/chat/completions');
    let body = '';
    for await (const chunk of req) body += chunk;
    request = JSON.parse(body);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ choices: [{ message: { content: 'Hello from Ada.' } }] }));
  });
  provider.listen(0, '127.0.0.1');
  await once(provider, 'listening');
  t.after(() => new Promise(resolve => {
    provider.close(resolve);
    provider.closeAllConnections();
  }));
  const openai = new OpenAI({
    baseURL: `http://127.0.0.1:${provider.address().port}`,
    apiKey: 'local-test-only',
    maxRetries: 0
  });
  const { send } = await startApp(t, createModelsApp(openai, 'test-deployment'));
  const response = await send({ message: 'Hello', character: { name: 'ada' } });
  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { prompt: 'Hello', answer: 'Hello from Ada.' });
  assert.equal(request.model, 'test-deployment');
  assert.deepEqual(request.messages, [
    { role: 'system', content: characters.find(item => item.name === 'ada').description },
    { role: 'user', content: 'Hello' }
  ]);
});

import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { getModelConfig, loadEnvironment } from '../model-config.js';

const settings = {
  AI_ENDPOINT: 'https://example.test/openai/v1/',
  AI_API_KEY: 'fixture-key',
  AI_MODEL: 'fixture-deployment'
};

test('model configuration uses the course environment variable names', () => {
  assert.deepEqual(getModelConfig(settings), {
    baseURL: settings.AI_ENDPOINT,
    apiKey: settings.AI_API_KEY,
    model: settings.AI_MODEL
  });
});

test('model configuration rejects missing, blank, or non-string values', () => {
  for (const name of Object.keys(settings)) {
    for (const value of [undefined, '', '  ', 42]) {
      assert.throws(() => getModelConfig({ ...settings, [name]: value }), new RegExp(name));
    }
  }
});

test('model configuration rejects invalid or unsafe endpoint URLs', () => {
  for (const endpoint of [
    'not a URL',
    '/relative/path',
    'file:///tmp/model',
    'http://example.test/v1/',
    'https://user:password@example.test/v1/'
  ]) {
    assert.throws(() => getModelConfig({ ...settings, AI_ENDPOINT: endpoint }), /AI_ENDPOINT/);
  }
});

test('model configuration permits loopback HTTP providers and trims settings', () => {
  for (const endpoint of ['http://localhost:3000/v1', 'http://127.0.0.1:3000/v1', 'http://[::1]:3000/v1']) {
    assert.equal(getModelConfig({ ...settings, AI_ENDPOINT: endpoint }).baseURL, endpoint);
  }
  assert.deepEqual(getModelConfig({
    AI_ENDPOINT: ` ${settings.AI_ENDPOINT} `,
    AI_API_KEY: ' fixture-key ',
    AI_MODEL: ' fixture-deployment '
  }), { baseURL: settings.AI_ENDPOINT, apiKey: 'fixture-key', model: 'fixture-deployment' });
});

test('environment loading uses the repository-root .env file by default', t => {
  const config = t.mock.method(dotenv, 'config', () => ({ parsed: {} }));
  const env = {};
  loadEnvironment(env);
  assert.equal(config.mock.calls[0].arguments[0].path, fileURLToPath(new URL('../../.env', import.meta.url)));
  assert.equal(config.mock.calls[0].arguments[0].processEnv, env);
});

test('an explicit environment file loads settings without overriding existing values', async t => {
  const directory = await mkdtemp(path.join(tmpdir(), 'character-chat-env-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const file = path.join(directory, '.env');
  await writeFile(file, 'AI_ENDPOINT=https://example.test/v1/\nAI_API_KEY=fixture-key\nAI_MODEL=fixture-model\nPORT=12345\n');
  const env = { ENV_FILE: file, AI_MODEL: 'existing-model' };
  loadEnvironment(env);
  assert.equal(env.AI_MODEL, 'existing-model');
  assert.equal(env.AI_API_KEY, 'fixture-key');
  assert.equal(env.PORT, '12345');
});

test('an unreadable explicit environment file fails at startup', () => {
  assert.throws(() => loadEnvironment({ ENV_FILE: fileURLToPath(new URL('./missing.env', import.meta.url)) }),
    /environment file could not be read/);
});

test('only a missing optional default environment file is ignored', t => {
  const error = Object.assign(new Error('Missing file'), { code: 'ENOENT' });
  const config = t.mock.method(dotenv, 'config', () => ({ error }));
  assert.doesNotThrow(() => loadEnvironment({}));
  config.mock.mockImplementation(() => ({
    error: Object.assign(new Error('Access denied'), { code: 'EACCES' })
  }));
  assert.throws(() => loadEnvironment({}), /environment file could not be read/);
});

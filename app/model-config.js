import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

export function loadEnvironment(env = process.env) {
  const envFile = env.ENV_FILE;
  const result = dotenv.config({
    path: envFile || fileURLToPath(new URL('../.env', import.meta.url)),
    processEnv: env,
    quiet: true
  });
  if (result.error && (envFile || result.error.code !== 'ENOENT')) {
    throw new Error('The environment file could not be read.', { cause: result.error });
  }
}

export function getModelConfig(env = process.env) {
  for (const name of ['AI_ENDPOINT', 'AI_API_KEY', 'AI_MODEL']) {
    if (typeof env[name] !== 'string' || !env[name].trim()) {
      throw new Error(`${name} is required. Set it in the environment or the repository's .env file.`);
    }
  }

  const baseURL = env.AI_ENDPOINT.trim();
  if (!URL.canParse(baseURL)) {
    throw new Error('AI_ENDPOINT must be an absolute API base URL.');
  }
  const url = new URL(baseURL);
  const localHttp = url.protocol === 'http:' &&
    ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if ((url.protocol !== 'https:' && !localHttp) || url.username || url.password) {
    throw new Error('AI_ENDPOINT must use HTTPS, or HTTP on a loopback address, without URL credentials.');
  }

  return {
    baseURL,
    apiKey: env.AI_API_KEY.trim(),
    model: env.AI_MODEL.trim()
  };
}

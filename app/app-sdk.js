import { CopilotClient } from "@github/copilot-sdk";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdtemp, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { ChatRequestError, getChatRequest, handleBodyError } from './chat-request.js';
import { loadEnvironment } from './model-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createClient(baseDirectory, connection) {
  return new CopilotClient({
    mode: "empty",
    baseDirectory,
    workingDirectory: baseDirectory,
    connection
  });
}

async function closeSession(client, session) {
  const errors = [];
  for (const close of [
    () => session.abort(),
    () => session.disconnect(),
    () => client.deleteSession(session.sessionId)
  ]) {
    try {
      await close();
    } catch (error) {
      errors.push(error);
    }
  }
  if (errors.length) {
    throw new AggregateError(errors, 'The SDK session could not be closed.');
  }
}

export function createApp(client) {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.locals.delimiters = '{{ }}';

  app.post('/send', async (req, res) => {
    try {
      const { prompt, systemMessage } = getChatRequest(req.body);
      const session = await client.createSession({
        model: "gpt-4.1",
        systemMessage: {
          mode: "append",
          content: systemMessage
        },
        // Custom tools and built-in tools have separate SDK controls.
        tools: [],
        availableTools: [],
        onPermissionRequest: () => ({ kind: "reject" }),
        hooks: {
          onPreToolUse: () => ({
            permissionDecision: "deny",
            permissionDecisionReason: "This application supports chat only."
          })
        },
        infiniteSessions: { enabled: false },
        enableConfigDiscovery: false,
        mcpServers: {},
        customAgents: []
      });

      let response;
      try {
        response = await session.sendAndWait({ prompt });
      } finally {
        await closeSession(client, session);
      }

      const answer = response?.data?.content;
      if (typeof answer !== 'string' || !answer.trim()) {
        throw new Error('The SDK session did not return an answer.');
      }

      res.json({ prompt, answer });
    } catch (error) {
      if (error instanceof ChatRequestError) {
        res.status(400).json({ message: error.message });
        return;
      }
      console.error('Error:', error);
      res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
    }
  });
  app.use(handleBodyError);

  return app;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  loadEnvironment();
  const port = process.env.PORT || 3000;
  const baseDirectory = await mkdtemp(path.join(tmpdir(), 'character-chat-'));
  const client = createClient(baseDirectory);
  const app = createApp(client);
  const server = app.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  let stopping = false;
  async function stop() {
    if (stopping) return;
    stopping = true;
    server.close();
    try {
      const errors = await client.stop();
      if (errors.length) {
        throw new AggregateError(errors, 'The SDK client could not be stopped.');
      }
    } catch (error) {
      console.error('Error:', error);
      process.exitCode = 1;
    } finally {
      try {
        await rm(baseDirectory, { recursive: true, force: true });
      } catch (error) {
        console.error('Error:', error);
        process.exitCode = 1;
      }
    }
  }
  server.once('error', error => {
    console.error('Error:', error);
    process.exitCode = 1;
    void stop();
  });
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
}

import express from 'express';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import { ChatRequestError, getChatRequest, handleBodyError } from './chat-request.js';
import { getModelConfig, loadEnvironment } from './model-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createApp(openai, model) {
  if (typeof model !== 'string' || !model.trim()) {
    throw new Error('A model name is required to create the chat app.');
  }
  const app = express();

  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.locals.delimiters = '{{ }}';

  app.post('/send', async (req, res) => {
    try {
      const { prompt, systemMessage } = getChatRequest(req.body);
      const completion = await openai.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: prompt }
        ]
      });

      const answer = completion?.choices?.[0]?.message?.content;
      if (typeof answer !== 'string' || !answer.trim()) {
        throw new Error('The model did not return an answer.');
      }
      res.json({ prompt, answer });
    } catch (error) {
      if (error instanceof ChatRequestError) {
        res.status(400).json({ message: error.message });
        return;
      }
      console.error(`Error: ${error.message}`);
      res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
    }
  });
  app.use(handleBodyError);

  return app;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  loadEnvironment();
  const port = process.env.PORT || 3000;
  const { baseURL, apiKey, model } = getModelConfig();
  const openai = new OpenAI({
    baseURL,
    apiKey,
    timeout: 60000
  });
  const app = createApp(openai, model);
  app.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

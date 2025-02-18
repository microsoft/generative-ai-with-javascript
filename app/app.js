import express from 'express';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import json from './characters.json' assert { type: 'json' };

let systemMessage = json[0].description;
let page = json[0].page;

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on the default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', page));
});

// Route to send the prompt
app.post('/send', async (req, res) => {
  const { message } = req.body;
  const prompt = message;

  const messages = [
    {
      "role": "system",
      "content": systemMessage,
    },
    {
      "role": "user",
      "content": prompt
    }
  ];

  const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_TOKEN,
  });

  try {
    console.log(`sending prompt ${prompt}`)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
    });

    res.json({
      prompt: prompt,
      answer: completion.choices[0]?.message?.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
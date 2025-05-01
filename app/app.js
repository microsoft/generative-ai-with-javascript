import express from 'express';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import json from './public/characters.json' with { type: "json" };

let systemMessage = json[4].description;
let page = json[4].page;

console.log("SERVER systemMessage: ", systemMessage);
console.log("SERVER page: ", page);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.locals.delimiters = '{{ }}';

function getCharacterByName(name) {
  return json.find(character => character.name === name) || null;
}

// Route to send the prompt
app.post('/send', async (req, res) => {
  const { message, character } = req.body;

  systemMessage = character.description;

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
    baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
    apiKey: process.env.GITHUB_TOKEN,
  });

  try {
    console.log(`SERVER sending prompt ${prompt}`)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
    });

    console.log(`SERVER: ${completion.choices[0]?.message?.content}`);
    res.json({
      prompt: prompt,
      answer: completion.choices[0]?.message?.content
    });
  } catch (error) {
    console.error(`Error: ${error.message}`); // Log the error message for debugging
    res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' }); // Send a generic error message
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

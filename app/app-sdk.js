// npm install @github/copilot-sdk tsx

import { CopilotClient } from "@github/copilot-sdk";

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 
import dotenv from 'dotenv';

import json from './public/characters.json' with { type: "json" };

const client = new CopilotClient();


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

  try {
    console.log("SYSTEM MESSAGE: ", systemMessage);
    console.log(`SERVER sending prompt ${prompt}`)
    
    const session = await client.createSession({ 
      model: "gpt-4.1", 
      systemMessage: { 
        mode: "replace",
        content: systemMessage 
      } 
    });

    const response = await session.sendAndWait({ prompt: prompt });
    const data = response?.data.content; 
   
    console.log(`SERVER: ${data}`);
    res.json({
      prompt: prompt,
      answer: data
    });
  } catch (error) {
    console.error(`Error: ${error.message}`); // Log the error message for debugging
    res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' }); // Send a generic error message
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

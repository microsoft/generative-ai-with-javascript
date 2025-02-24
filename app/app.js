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
// console.log("Token: ", process.env.GITHUB_TOKEN)

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// use a template engine to render the page
app.set('view engine', 'ejs');

// do I need to install ejs? a: yes, how? a: npm install ejs
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.locals.delimiters = '{{ }}';

function getCharacterByName(name) {
  for(let i=0; i< json.length; i++) {
    if(json[i].name == name) {
      return json[i];

    }
  }
  return null;
}

// Serve index.html on the default route
app.get('/', (req, res) => {
  // console.log("SERVER, default route");

  let character = req.query.character || "";
  // console.log("SERVER, character", character);
  let title = "Ada Lovelace";
  let name = "ada";
  let image = "ada.jpeg";
  let voice = 2; // see here values in characters.json

  if(character) {
    let ch = getCharacterByName(character);

    systemMessage = ch?.description;

    title = ch?.title;
    name = ch?.name;
    image = ch?.image;
    voice = ch?.voice;
  }

  res.render("index", { title:title, name: name, image: image, voice: voice  });
});

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
    console.log(`Error: ${error}`);
    res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

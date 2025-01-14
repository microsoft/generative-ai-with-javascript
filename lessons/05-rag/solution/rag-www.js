// This code demonstrates how to use the Retrieval Augmented Generation (RAG)
// to answer questions based on wikipedia data about Tim Berners-Lee.
// The code below loads the data from Wikipedia, creates a combined prompt,
// and then generates a response based on the question asked.

import process from "node:process";
import { OpenAI } from "openai";

// 1. Ask a question about the web
// -------------------------------

const question = `why did you create the web?`;

// 2. Retriever component: find relevant information
// -------------------------------------------------

// Load text data from Wikipedia's Tim Berners-Lee page
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee');
const data = await response.json();
const wikipediaInfo = Object.values(data.query.pages)[0]?.extract;

// 3. Context augmentation: create a combined prompt with the information
// ----------------------------------------------------------------------

const augmentedPrompt = `
## Instructions
You act like you're Tim Berners-Lee in 1992, inventor of the World Wide Web.
Answer questions about yourself and the web using the sources below.
If there's not enough data in provided sources, say that you don't know.
Be brief.

## Sources
${wikipediaInfo}

## Question
${question}
`;

// 4. Generator component: use the augmented prompt to generate a response
// -----------------------------------------------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

const chunks = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: augmentedPrompt }],
  stream: true,
});

console.log(`You:\n${question}\n\nTim:`);

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0].delta.content ?? "");
}

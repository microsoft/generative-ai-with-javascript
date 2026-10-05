// This code demonstrates how to use the Retrieval Augmented Generation (RAG)
// to answer questions based on wikipedia data about Tim Berners-Lee.
// The code below loads the data from Wikipedia, creates a combined prompt,
// and then generates a response based on the question asked.

import process from "node:process";
import { OpenAI } from "openai";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

// 1. Ask a question about the web
// -------------------------------

const question = `why did you create the web?`;

// 2. Retriever component: find relevant information
// -------------------------------------------------

// Load text data from Wikipedia's Tim Berners-Lee page
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee', {
  headers: { "User-Agent": "GenerativeAIJavaScriptCourse/1.0 (https://github.com/microsoft/generative-ai-with-javascript)" },
  signal: AbortSignal.timeout(30000)
});
if (!response.ok) throw new Error(`Wikipedia request failed: HTTP ${response.status}.`);
const data = await response.json();
const wikipediaInfo = data.query?.pages && Object.values(data.query.pages)[0]?.extract;
if (typeof wikipediaInfo !== "string" || !wikipediaInfo.trim()) {
  throw new Error("Wikipedia did not return source text.");
}

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
  baseURL: endpoint,
  apiKey,
  timeout: 60000,
});

const chunks = await openai.chat.completions.create({
  model,
  messages: [{ role: "user", content: augmentedPrompt }],
  stream: true,
});

console.log(`You:\n${question}\n\nTim:`);

let receivedText = false;
for await (const chunk of chunks) {
  const text = chunk.choices[0]?.delta.content;
  if (text) {
    receivedText = true;
    process.stdout.write(text);
  }
}
if (!receivedText) throw new Error("The model did not return an answer.");
process.stdout.write("\n");

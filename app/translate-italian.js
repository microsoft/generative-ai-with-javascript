import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const question = "Hello";

const augmentedPrompt = `
## Instructions
Translate the following English text to Italian:
## Question
${question}
`;

// create client
const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
  apiKey: process.env.GITHUB_TOKEN,
});

// send the request
const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: augmentedPrompt }],
});

console.log("Response: ", response.choices[0].message.content);

import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";

// Define the context

const messages = [
  {
    role: "user",
    content: "I want to book a trip to Italy.",
  },
  {
    role: "assistant",
    content: "Sure, when would you like to go?",
  },
  {
    role: "user",
    content: "Next month would be great.",
  },
  {
    role: "assistant",
    content: "Got it, where in Italy would you like to visit?",
  },
  {
    role: "user",
    content: "I'm thinking of Rome. Tell me more about it.",
  },
];

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: messages,
  // temperature: 0.7, // Adjust the temperature for creativity, 0.0 (more deterministic) to 1.0 (more creative)
  // max_completion_tokens: 512, // Limit the response length.
});

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

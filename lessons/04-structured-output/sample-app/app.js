import { OpenAI } from "openai";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const bootSequence = `left left up right`;
// Write a prompt that mirrors bootSequence and applies a Caesar cipher with a shift of 3.
const prompt = `TODO`;

// Call the language model with the prompt

const messages = [
{
    "role": "user",
    "content": prompt
}];

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: endpoint,
  apiKey,
  timeout: 60000,
});

// 3. Send the request
// -----------------------------------

const completion = await openai.chat.completions.create({
    model,
    messages: messages,
});

console.log(`Answer for "${prompt}":`);

// 4. Print the answer
// -----------------------------------

const answer = completion.choices[0]?.message?.content;
if (!answer?.trim()) throw new Error("The model did not return an answer.");
console.log(answer);

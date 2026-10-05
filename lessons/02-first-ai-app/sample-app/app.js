import { OpenAI } from "openai";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}
// 1. Define the prompt
// -----------------------------------

const question = "Tell me about where I am";

const messages = [
{
    "role": "system",
    "content": "You're a helpful assistant that will only answer questions about Florence in the 1400s"

}, {
  "role": "user",
  "content": question
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

console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

const answer = completion.choices[0]?.message?.content;
if (!answer?.trim()) throw new Error("The model did not return an answer.");
console.log(answer);

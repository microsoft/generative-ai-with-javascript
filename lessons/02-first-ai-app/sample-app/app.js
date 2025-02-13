import { OpenAI } from "openai";
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
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
});

console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

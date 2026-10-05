Here's the solution

```javascript

import { OpenAI } from "openai";
// 1. Define the prompt
// ----------------------------------- 

const question = "Please give detailed explaination about the Aerial screw";

const messages = [ 
{ 
    "role": "system", 
    "content": "You're a helpful assistant here to assist Leonardo Da Vinci with the calculations and design of his inventions, especially the aerial screw, should be detailed" 

}, {
  "role": "user",
  "content": question
}]; 

// 2. Create client
// -----------------------------------

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const openai = new OpenAI({
  baseURL: endpoint,
  apiKey,
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

console.log(completion.choices[0]?.message?.content);
```

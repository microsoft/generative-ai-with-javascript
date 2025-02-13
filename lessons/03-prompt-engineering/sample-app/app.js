import { OpenAI } from "openai";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

const height = await question("Enter the current height above the ground in meters:");

const speed = await question("Enter the speed at which you're moving forward in meters per second:");

const gravity = await question("Enter the gravity in meters per second squared:");

const wind = await question("Enter the wind speed upwards in meters per second:");

// Distance to the hill
const distance = 100;

// Create prompt including inputs should include chain of thought

const prompt = "TODO";

// Call the language model with the prompt

const messages = [
{
    "role": "user",
    "content": prompt
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

console.log(`Answer for "${prompt}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

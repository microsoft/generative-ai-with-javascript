import { OpenAI } from "openai";
import readline from "readline";

// User input 
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

async function main() {
  const userPrompt = await question("Enter your prompt: ");

  const messages = [
    {
      role: "user",
      content: userPrompt
    }
  ];

  // OpenAI API setup
  const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_TOKEN,
  });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
  });

  const answer = completion.choices[0]?.message?.content;

  console.log(`\nAI Response:\n`);
  console.log(answer);

  // Easter Egg Check
  if (userPrompt.toLowerCase().includes("time-traveling javascript developer") && answer) {
    console.log("\n Easter Egg Unlocked! You discovered the hidden poem! ");
  }

  rl.close();
}

main();

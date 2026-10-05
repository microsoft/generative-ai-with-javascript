import { OpenAI } from "openai";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });

async function main() {
  const rl = createInterface({ input: stdin, output: stdout });
  try {
    const userPrompt = await rl.question("Enter your prompt: ");
    if (!userPrompt.trim()) throw new Error("Enter a non-empty prompt.");
    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: userPrompt }]
    });
    const answer = completion.choices[0]?.message?.content;
    if (!answer?.trim()) throw new Error("The model did not return an answer.");
    console.log(`\nAI Response:\n${answer}`);
    if (userPrompt.toLowerCase().includes("time-traveling javascript developer")) {
      console.log("\nEaster Egg Unlocked! You discovered the hidden poem!");
    }
  } finally {
    rl.close();
  }
}

main().catch(error => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});

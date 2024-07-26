import process from "node:process";
import { AzureOpenAI as OpenAI } from "openai";

const prompt = `
Assistant helps the user with questions.

## Question
What shoes should I use for running?
`;

const openai = new OpenAI();
const chunks = await openai.chat.completions.create({
  messages: [{ role: "user", content: prompt }],
  model: "gpt-4o",
  stream: true,
});

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0]?.delta.content ?? '');
}

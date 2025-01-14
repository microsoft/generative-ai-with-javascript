import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "__not_needed_by_ollama__",
});

const chunks = await openai.chat.completions.create({
  model: "phi3",
  messages: [{
    role: "user",
    content: "Say hello in pirate style. Be brief with nothing else."
  }],
  stream: true,
});

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0].delta.content);
}

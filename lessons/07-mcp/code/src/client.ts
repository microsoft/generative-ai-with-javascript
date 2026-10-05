import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";
import { fileURLToPath } from "node:url";
import { OpenAI } from "openai";
import { z } from "zod";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const client = new Client({ name: "example-client", version: "1.0.0" });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [fileURLToPath(new URL("./index.js", import.meta.url))]
});

try {
  await client.connect(transport);
  const { tools: serverTools } = await client.listTools();
  const allowedNames = new Set(serverTools.map(tool => tool.name));
  const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = serverTools.map(tool => ({
    type: "function",
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.inputSchema
    }
  }));
  console.log("Available tools:", [...allowedNames]);
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: "user", content: "Use the add tool to add 5 and 10." }
  ];
  const completion = await openai.chat.completions.create({
    model, messages, tools, tool_choice: "required"
  });
  const message = completion.choices[0]?.message;
  if (!message?.tool_calls?.length) throw new Error("The model did not request a tool.");
  messages.push(message);
  for (const call of message.tool_calls) {
    if (call.type !== "function" || !allowedNames.has(call.function.name)) {
      throw new Error("The model requested an unsupported MCP tool.");
    }
    const args = z.record(z.string(), z.unknown()).parse(JSON.parse(call.function.arguments));
    const result = CallToolResultSchema.parse(await client.callTool({
      name: call.function.name,
      arguments: args
    }));
    const text = result.content.filter(item => item.type === "text").map(item => item.text).join("\n");
    if (result.isError) throw new Error(`MCP tool failed: ${text}`);
    if (!text) throw new Error("The MCP tool did not return text.");
    console.log("Result from tool:", text);
    messages.push({ role: "tool", tool_call_id: call.id, content: text });
  }
  const followUp = await openai.chat.completions.create({
    model, messages, tools, tool_choice: "none"
  });
  const answer = followUp.choices[0]?.message?.content;
  if (!answer?.trim()) throw new Error("The model did not return a final answer.");
  console.log(answer);
} finally {
  await client.close();
}

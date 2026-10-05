import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import OpenAI from "openai";
import { z } from "zod";
export class MyClient {
    openai;
    client;
    model;
    constructor() {
        const endpoint = process.env.AI_ENDPOINT?.trim();
        const apiKey = process.env.AI_API_KEY?.trim();
        const model = process.env.AI_MODEL?.trim();
        if (!endpoint || !apiKey || !model) {
            throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
        }
        this.model = model;
        this.openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
        this.client = new Client({ name: "example-client", version: "1.0.0" });
    }
    async connectToServer(transport) {
        try {
            await this.client.connect(transport);
            await this.run();
        }
        finally {
            await this.client.close();
        }
    }
    openAiToolAdapter(tool) {
        return {
            type: "function",
            function: {
                name: tool.name,
                description: tool.description,
                parameters: tool.inputSchema
            }
        };
    }
    async callTools(calls, allowedNames) {
        const results = [];
        for (const call of calls) {
            if (call.type !== "function" || !allowedNames.has(call.function.name)) {
                throw new Error("The model requested an unsupported MCP tool.");
            }
            const args = z.record(z.string(), z.unknown()).parse(JSON.parse(call.function.arguments));
            const result = CallToolResultSchema.parse(await this.client.callTool({
                name: call.function.name,
                arguments: args
            }));
            const text = result.content.filter(item => item.type === "text").map(item => item.text).join("\n");
            if (result.isError)
                throw new Error(`MCP tool failed: ${text}`);
            if (!text)
                throw new Error("The MCP tool did not return text.");
            console.log(`Result from [${call.function.name}]:`, text);
            results.push({ role: "tool", tool_call_id: call.id, content: text });
        }
        return results;
    }
    async run() {
        const { tools: serverTools } = await this.client.listTools();
        const allowedNames = new Set(serverTools.map(tool => tool.name));
        const tools = serverTools.map(tool => this.openAiToolAdapter(tool));
        console.log("Available tools:", [...allowedNames]);
        const messages = [{
                role: "user",
                content: "Use the characterDetails tool to tell me briefly about Ada Lovelace."
            }];
        const completion = await this.openai.chat.completions.create({
            model: this.model, messages, tools, tool_choice: "required"
        });
        const message = completion.choices[0]?.message;
        if (!message?.tool_calls?.length)
            throw new Error("The model did not request a tool.");
        messages.push(message, ...await this.callTools(message.tool_calls, allowedNames));
        const followUp = await this.openai.chat.completions.create({
            model: this.model, messages, tools, tool_choice: "none"
        });
        const answer = followUp.choices[0]?.message?.content;
        if (!answer?.trim())
            throw new Error("The model did not return a final answer.");
        console.log(answer);
    }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const client = new MyClient();
    const transport = new StdioClientTransport({
        command: process.execPath,
        args: [fileURLToPath(new URL("./index.js", import.meta.url))]
    });
    client.connectToServer(transport).catch(error => {
        console.error("Error in client:", error instanceof Error ? error.message : String(error));
        process.exitCode = 1;
    });
}

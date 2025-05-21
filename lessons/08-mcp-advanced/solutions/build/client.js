import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import OpenAI from "openai";
import { z } from "zod"; // Import zod for schema validation
class MyClient {
    openai;
    client;
    constructor() {
        this.openai = new OpenAI({
            baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
            apiKey: process.env.GITHUB_TOKEN,
        });
        this.client = new Client({
            name: "example-client",
            version: "1.0.0"
        }, {
            capabilities: {
                prompts: {},
                resources: {},
                tools: {}
            }
        });
    }
    async connectToServer(transport) {
        await this.client.connect(transport);
        this.run();
        console.error("MCPClient started on stdin/stdout");
    }
    openAiToolAdapter(tool) {
        // Create a zod schema based on the input_schema
        const schema = z.object(tool.input_schema);
        return {
            type: "function", // Explicitly set type to "function"
            function: {
                name: tool.name,
                description: tool.description,
                parameters: {
                    type: "object",
                    properties: tool.input_schema.properties,
                    required: tool.input_schema.required,
                },
            },
        };
    }
    async callTools(tool_calls, toolResults) {
        for (const tool_call of tool_calls) {
            const toolName = tool_call.function.name;
            const args = tool_call.function.arguments;
            console.log(`Calling tool ${toolName} with args ${JSON.stringify(args)}`);
            // 2. Call the server's tool
            const toolResult = await this.client.callTool({
                name: toolName,
                arguments: JSON.parse(args),
            });
            console.log("Tool result: ", toolResult);
            // 3. Do something with the result
            // TODO
        }
    }
    async run() {
        console.log("Asking server for available tools");
        const toolsResult = await this.client.listTools();
        const tools = toolsResult.tools.map((tool) => {
            return this.openAiToolAdapter({
                name: tool.name,
                description: tool.description,
                input_schema: tool.inputSchema,
            });
        });
        const messages = [
            {
                role: "user",
                content: "Tell me about Ada Lovelace",
            },
        ];
        console.log("Querying LLM: ", messages[0].content);
        let response = await this.openai.chat.completions.create({
            model: "gpt-4o-mini",
            max_tokens: 1000,
            messages,
            tools: tools,
        });
        console.log("LLM response: ", response.choices[0].message.content);
        let results = [];
        // 1. Go through the LLM response,for each choice, check if it has tool calls
        response.choices.map(async (choice) => {
            const message = choice.message;
            if (message.tool_calls) {
                console.log("Making tool call");
                await this.callTools(message.tool_calls, results);
            }
        });
    }
}
let client = new MyClient();
const transport = new StdioClientTransport({
    command: "node",
    args: ["./build/index.js"]
});
client.connectToServer(transport);

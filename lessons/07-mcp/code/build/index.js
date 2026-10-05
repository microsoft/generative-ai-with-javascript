import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({ name: "Demo", version: "1.0.0" });
server.registerTool("add", {
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() }
}, async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
}));
server.registerResource("greeting", new ResourceTemplate("greeting://{name}", { list: undefined }), { description: "Greet a named person", mimeType: "text/plain" }, async (uri, { name }) => ({
    contents: [{ uri: uri.href, text: `Hello, ${name}!` }]
}));
server.connect(new StdioServerTransport()).catch(error => {
    console.error("Error in server:", error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
});

// simple mc server
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Create an MCP server
const server = new McpServer({
    name: "Demo",
    version: "1.0.0"
});
// Add an addition tool
// @ts-ignore
server.tool("add", {
    input: z.object({
        a: z.number(),
        b: z.number()
    }),
    output: z.object({
        content: z.array(z.object({ type: z.string(), text: z.string() }))
    })
}, async ({ input }) => ({
    content: [{ type: "text", text: String(input.a + input.b) }]
}));
// Add a dynamic greeting resource
server.resource("greeting", new ResourceTemplate("greeting://{name}", { list: undefined }), async (uri, { name }) => ({
    contents: [{
            uri: uri.href,
            text: `Hello, ${name}!`
        }]
}));
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
async function runServer() {
    await server.connect(transport);
}
runServer().catch((err) => {
    console.error("Error in server:", err);
    process.exit(1);
});

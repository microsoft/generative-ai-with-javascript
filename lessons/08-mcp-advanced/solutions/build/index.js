import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Create an MCP server
const server = new McpServer({
    name: "Demo",
    version: "1.0.0"
});
// Add an addition tool
server.tool("characterDetails", { name: z.string() }, async ({ name }) => {
    console.log(`Received character name: ${name}`);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`; // Changed 'title' to 'name'
    const response = await fetch(url);
    if (!response.ok)
        throw new Error("Failed to fetch character details");
    const data = await response.json();
    const responseText = data.extract; // This contains the summary text
    return {
        content: [{ type: "text", text: `Character: ${responseText}` }]
    };
});
// Start receiving messages on stdin and sending messages on stdout
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCPServer started on stdin/stdout");
}
main().catch((error) => {
    console.error("Fatal error: ", error);
    process.exit(1);
});

import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const server = new McpServer({ name: "Demo", version: "1.0.0" });
const inputSchema = { a: z.number(), b: z.number() };
server.registerTool("add", { description: "Add two numbers", inputSchema },
  async ({ a, b }) => ({ content: [{ type: "text", text: String(a + b) }] }));
server.registerTool("subtract", { description: "Subtract two numbers", inputSchema },
  async ({ a, b }) => ({ content: [{ type: "text", text: String(a - b) }] }));
server.registerTool("multiply", { description: "Multiply two numbers", inputSchema },
  async ({ a, b }) => ({ content: [{ type: "text", text: String(a * b) }] }));
server.registerTool("divide", { description: "Divide two numbers", inputSchema }, async ({ a, b }) => {
  if (b === 0) {
    return { isError: true, content: [{ type: "text", text: "Cannot divide by zero." }] };
  }
  return { content: [{ type: "text", text: String(a / b) }] };
});

server.registerResource("echo",
  new ResourceTemplate("echo://{message}", {
    list: async () => ({
      resources: [{ name: "echo", description: "Echo a message", mimeType: "text/plain", uri: "echo://hello" }]
    })
  }),
  { description: "Echo a message", mimeType: "text/plain" },
  async (uri, { message }) => ({
    contents: [{ uri: uri.href, text: `Resource echo: ${message}` }]
  })
);

const scrollsDirectory = new URL("../scrolls/", import.meta.url);
server.registerResource("scrolls",
  new ResourceTemplate("scrolls://{name}", {
    list: async () => ({
      resources: (await readdir(scrollsDirectory)).filter(name => name.endsWith(".txt")).map(name => ({
        name, description: "A course scroll", mimeType: "text/plain", uri: `scrolls://${encodeURIComponent(name)}`
      }))
    })
  }),
  { description: "Read a course scroll", mimeType: "text/plain" },
  async (uri, { name }) => {
    if (typeof name !== "string" || !/^[a-zA-Z0-9_-]+\.txt$/.test(name)) {
      throw new Error("Select a named .txt scroll from the resource list.");
    }
    const text = await readFile(fileURLToPath(new URL(name, scrollsDirectory)), "utf8");
    return { contents: [{ uri: uri.href, text }] };
  }
);

server.connect(new StdioServerTransport()).catch(error => {
  console.error("Error in server:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});

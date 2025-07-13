import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";


// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// Add an addition tool
server.tool("add",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

server.tool("subtract",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a - b) }]
  })
);

server.tool("divide",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a / b) }]
  })
);

server.tool("multiply",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a * b) }]
  })
);

server.resource(
  "echo",
  new ResourceTemplate("echo://{message}", { list: () => {
    return {
      resources: [
        {
          "name": "echo",
          "description": "Echo a message",
          "mimeType": "text/plain",
          "uri": "echo://{message}"
        }
      ]
    };
  } }),
  async (uri, { message }) => ({
    contents: [{
      uri: uri.href,
      text: `Resource echo: ${message}`
    }]
  })
);

// Add a dynamic greeting resource
server.resource(
  "scrolls",
  new ResourceTemplate("scrolls://{name}", { list: () => {
    return {
      resources: [
        {
          "name": "scrolls",
          "description": "Scrolls resource",
          "mimeType": "text/plain",
          "uri": "scrolls://{name}"
        }
      ]
    };
  }}),
  async (uri, { name }) => {
    // open file to check if it exist
    let fileContent: string;
    let filePath = path.join(process.cwd(), "scrolls", `${name}`);
    try {
      console.log("File path: ", filePath);

      fileContent = await fs.readFile(filePath, "utf-8");
    } catch (err) {
      fileContent = `File ${name} not found in ${filePath}`;
      console.error(fileContent);
    }
    // response with file content

    return {
      contents: [{
        uri: uri.href,
        text: fileContent
      }]
    }
  }
);

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

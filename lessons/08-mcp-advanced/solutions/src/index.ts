import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fileURLToPath } from "node:url";
import path from "node:path";
async function summary(name: string): Promise<string> {
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`, {
    headers: { "User-Agent": "GenerativeAIJavaScriptCourse/1.0 (https://github.com/microsoft/generative-ai-with-javascript)" },
    signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`Wikipedia request failed: HTTP ${response.status}.`);
  const data: unknown = await response.json();
  return z.object({ extract: z.string().min(1) }).parse(data).extract;
}

export function createServer(getSummary: (name: string) => Promise<string> = summary): McpServer {
  const server = new McpServer({ name: "Demo", version: "1.0.0" });
  server.registerTool("characterDetails", {
    description: "Get a Wikipedia summary of a historical character",
    inputSchema: { name: z.string().trim().min(1).max(200) }
  }, async ({ name }) => ({
    content: [{ type: "text", text: `Character: ${await getSummary(name)}` }]
  }));

  server.registerTool("place", {
    description: "Get a Wikipedia summary of a place",
    inputSchema: { name: z.string().trim().min(1).max(200) }
  }, async ({ name }) => ({
    content: [{ type: "text", text: `Place: ${await getSummary(name)}` }]
  }));

  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  createServer().connect(new StdioServerTransport()).catch(error => {
    console.error("Error in server:", error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}

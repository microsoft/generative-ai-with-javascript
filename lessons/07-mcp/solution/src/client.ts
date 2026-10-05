import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { fileURLToPath } from "node:url";

const client = new Client({ name: "example-client", version: "1.0.0" });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [fileURLToPath(new URL("./index.js", import.meta.url))]
});

try {
  await client.connect(transport);
  console.log("Available resources:", await client.listResources());
  const scroll = await client.readResource({ uri: "scrolls://tactics.txt" });
  console.log("Resource contents:", scroll.contents);
  const echo = await client.readResource({ uri: "echo://hello" });
  console.log("Resource contents:", echo.contents);
} finally {
  await client.close();
}

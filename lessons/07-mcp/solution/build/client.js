import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
const transport = new StdioClientTransport({
    command: "node",
    args: ["build/index.js"]
});
const client = new Client({
    name: "example-client",
    version: "1.0.0"
});
await client.connect(transport);
// List resources
const resources = await client.listResources();
console.log("Available resources:", resources);
// read a resource
let resource = await client.readResource({
    uri: "scrolls://tactics.txt",
});
console.log("Resource contents:", resource.contents);
// Read a resource
resource = await client.readResource({
    uri: "echo://hello",
});
console.log("Resource contents:", resource.contents);

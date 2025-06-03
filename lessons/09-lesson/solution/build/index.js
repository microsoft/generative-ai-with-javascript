import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import express from "express";
const server = new McpServer({
    name: "example-server",
    version: "1.0.0"
});
const app = express();
const transports = {};
app.get("/sse", async (_, res) => {
    const transport = new SSEServerTransport('/messages', res);
    transports[transport.sessionId] = transport;
    res.on("close", () => {
        delete transports[transport.sessionId];
    });
    await server.connect(transport);
});
app.post("/messages", async (req, res) => {
    const sessionId = req.query.sessionId;
    const transport = transports[sessionId];
    if (transport) {
        await transport.handlePostMessage(req, res);
    }
    else {
        res.status(400).send('No transport found for sessionId');
    }
});
server.tool("random-joke", "A joke returned by the chuck norris api", {}, async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return {
        content: [
            {
                type: "text",
                text: data.value
            }
        ]
    };
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

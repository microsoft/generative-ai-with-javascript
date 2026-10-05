import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:http";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = fileURLToPath(new URL("../", import.meta.url));
const mcpRequire = createRequire(path.join(root, "lessons/08-mcp-advanced/solutions/package.json"));
const { Client } = await import(mcpRequire.resolve("@modelcontextprotocol/sdk/client/index.js"));
const { StdioClientTransport } = await import(mcpRequire.resolve("@modelcontextprotocol/sdk/client/stdio.js"));
const { InMemoryTransport } = await import(mcpRequire.resolve("@modelcontextprotocol/sdk/inMemory.js"));
const { MyClient } = await import("../lessons/08-mcp-advanced/solutions/build/client.js");
const { createServer: createCharacterServer } = await import("../lessons/08-mcp-advanced/solutions/build/index.js");

async function provider(t) {
  const requests = [];
  const server = createServer(async (req, res) => {
    let raw = "";
    for await (const chunk of req) raw += chunk;
    const body = JSON.parse(raw);
    requests.push(body);
    assert.equal(body.model, "fixture-model");
    assert.equal(Object.hasOwn(body, "functions"), false);
    assert.equal(Object.hasOwn(body, "function_call"), false);
    const toolResult = body.messages.findLast(message => message.role === "tool");
    let message = { role: "assistant", content: toolResult?.content || "A fixture model answer." };
    let finish = "stop";
    if (body.response_format?.type === "json_schema") {
      message.content = JSON.stringify({
        skill: "book_flight", parameters: ["destination", "date"],
        extracted_data: { destination: "Florence", date: "2030-06-15" }
      });
    } else if (body.tools?.length && body.tool_choice !== "none") {
      const definitions = body.tools.map(tool => tool.function);
      const names = definitions.map(tool => tool.name);
      const name = names.includes("add") ? "add" : names.includes("characterDetails") ? "characterDetails"
        : names.includes("get-background-on-character") ? "get-background-on-character" : "get-gps-position";
      const args = name === "add" ? { a: 5, b: 10 } : name === "characterDetails" ? { name: "Ada Lovelace" }
        : name === "get-background-on-character" ? { name: "Amelia Earhart" } : { lat: 7.5, long: 134.5 };
      message = {
        role: "assistant", content: null,
        tool_calls: [{ id: "call_fixture", type: "function", function: { name, arguments: JSON.stringify(args) } }]
      };
      finish = "tool_calls";
    }
    const completion = { id: "fixture", object: "chat.completion", created: 1, model: "fixture-model",
      choices: [{ index: 0, message, finish_reason: finish }] };
    if (body.stream) {
      res.setHeader("Content-Type", "text/event-stream");
      res.write(`data: ${JSON.stringify({ choices: [{ index: 0, delta: { content: "A streamed fixture answer." } }] })}\n\n`);
      res.write(`data: ${JSON.stringify({ choices: [], usage: { total_tokens: 1 } })}\n\n`);
      res.end("data: [DONE]\n\n");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(completion));
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise(resolve => {
    server.close(resolve);
    server.closeAllConnections();
  }));
  return { requests, endpoint: `http://127.0.0.1:${server.address().port}` };
}

async function run(args, environment, input) {
  const env = {
    PATH: process.env.PATH,
    HOME: process.env.HOME,
    ...environment
  };
  for (const key of ["SystemRoot", "WINDIR", "TEMP", "TMP"]) {
    if (process.env[key]) env[key] = process.env[key];
  }
  const child = spawn(process.execPath, args, { cwd: root, env, stdio: ["pipe", "pipe", "pipe"] });
  let stdout = "";
  let stderr = "";
  let sent = false;
  child.stdout.on("data", chunk => {
    stdout += chunk;
    if (input !== undefined && !sent && stdout.includes("Enter your prompt:")) {
      sent = true;
      child.stdin.end(`${input}\n`);
    }
  });
  child.stderr.on("data", chunk => { stderr += chunk; });
  const timer = setTimeout(() => child.kill("SIGTERM"), 30000);
  try {
    const [code, signal] = await once(child, "exit");
    return { code, signal, stdout, stderr };
  } finally {
    clearTimeout(timer);
    child.stdin.destroy();
  }
}

function env(endpoint) {
  return { AI_ENDPOINT: endpoint, AI_API_KEY: "fixture-key", AI_MODEL: "fixture-model" };
}

for (const file of [
  "lessons/02-first-ai-app/sample-app/app.js",
  "lessons/04-structured-output/sample-app/app.js"
]) {
  test(`${file} uses the configured model and emits an answer`, async t => {
    const fake = await provider(t);
    const result = await run([file], env(fake.endpoint));
    assert.equal(result.code, 0, result.stderr);
    assert.match(result.stdout, /fixture model answer/);
    assert.equal(fake.requests.length, 1);
  });
}

test("the prompt lesson closes its input reader and returns a response", async t => {
  const fake = await provider(t);
  const result = await run(["lessons/03-prompt-engineering/sample-app/app.js"], env(fake.endpoint), "Tell me about Florence.");
  assert.equal(result.code, 0, result.stderr);
  assert.match(result.stdout, /fixture model answer/);
  assert.equal(fake.requests[0].messages[0].content, "Tell me about Florence.");
});

test("strict structured output is parsed and matches the required shape", async t => {
  const fake = await provider(t);
  const result = await run(["lessons/04-structured-output/sample-app/structured-json.js"], env(fake.endpoint));
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), {
    skill: "book_flight", parameters: ["destination", "date"],
    extracted_data: { destination: "Florence", date: "2030-06-15" }
  });
  assert.equal(fake.requests[0].response_format.json_schema.strict, true);
});

for (const file of [
  "lessons/05-rag/example/rag-cars.js",
  "lessons/05-rag/solution/rag-www.js"
]) {
  test(`${file} streams text and accepts empty usage-only chunks`, async t => {
    const fake = await provider(t);
    const args = [];
    if (file.includes("rag-www")) args.push("--import", path.join(root, "tests/fixtures/wiki-fetch.mjs"));
    args.push(file);
    const environment = env(fake.endpoint);
    const result = await run(args, environment);
    assert.equal(result.code, 0, result.stderr);
    assert.match(result.stdout, /streamed fixture answer/);
    assert.equal(fake.requests[0].stream, true);
    if (file.includes("rag-www")) assert.match(fake.requests[0].messages[0].content, /share information between researchers/);
  });
}

for (const file of [
  "lessons/06-tool-calling/code/app.js",
  "lessons/06-tool-calling/solution/solution.js",
  "lessons/07-mcp/code/build/client.js"
]) {
  test(`${file} returns the tool result to the model before the final answer`, async t => {
    const fake = await provider(t);
    const result = await run([file], env(fake.endpoint));
    assert.equal(result.code, 0, result.stderr);
    assert.equal(fake.requests.length, 2);
    assert.equal(fake.requests[0].tool_choice, "required");
    assert.equal(fake.requests[1].tool_choice, "none");
    const resultMessage = fake.requests[1].messages.find(message => message.role === "tool");
    assert.equal(resultMessage.tool_call_id, "call_fixture");
    assert.ok(resultMessage.content.trim());
    assert.match(result.stdout, /Result from/);
  });
}

test("lesson entry points fail before inference when configuration is incomplete", async () => {
  for (const file of ["lessons/02-first-ai-app/sample-app/app.js", "lessons/06-tool-calling/code/app.js",
    "lessons/07-mcp/code/build/client.js", "lessons/08-mcp-advanced/solutions/build/client.js"]) {
    const result = await run([file], {});
    assert.equal(result.code, 1);
    assert.match(result.stderr, /Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL/);
  }
});

test("calculator resources work independently of the caller's working directory", async t => {
  const client = new Client({ name: "test-client", version: "1.0.0" });
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [path.join(root, "lessons/07-mcp/solution/build/index.js")]
  });
  t.after(() => client.close());
  await client.connect(transport);
  const tools = await client.listTools();
  assert.deepEqual(tools.tools.map(tool => tool.name).sort(), ["add", "divide", "multiply", "subtract"]);
  const sum = await client.callTool({ name: "add", arguments: { a: 5, b: 10 } });
  assert.equal(sum.content[0].text, "15");
  const divide = await client.callTool({ name: "divide", arguments: { a: 1, b: 0 } });
  assert.equal(divide.isError, true);
  const resources = await client.listResources();
  assert.ok(resources.resources.some(resource => resource.uri === "scrolls://tactics.txt"));
  const scroll = await client.readResource({ uri: "scrolls://tactics.txt" });
  assert.match(scroll.contents[0].text, /Scroll of Tactics/);
  await assert.rejects(client.readResource({ uri: "scrolls://..%2Foutside.txt" }));
});

test("the advanced MCP client awaits tools, obtains a final answer, and closes transport", async t => {
  const fake = await provider(t);
  const original = {};
  for (const key of ["AI_ENDPOINT", "AI_API_KEY", "AI_MODEL"]) original[key] = process.env[key];
  Object.assign(process.env, env(fake.endpoint));
  const server = createCharacterServer(async name => `${name} was a mathematician.`);
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  try {
    await server.connect(serverTransport);
    await new MyClient().connectToServer(clientTransport);
    assert.equal(fake.requests.length, 2);
    assert.match(fake.requests[1].messages.find(message => message.role === "tool").content, /Ada Lovelace/);
  } finally {
    await server.close();
    for (const [key, value] of Object.entries(original)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

# Run the Advanced MCP Solution

This sample exposes `characterDetails` and `place` tools that retrieve Wikipedia summaries. The client converts MCP tool schemas to OpenAI function tools, awaits each call, sends the results back to the model, and prints its final answer.

## Setup

Use Node.js LTS. Configure `AI_ENDPOINT`, `AI_API_KEY`, and `AI_MODEL` in the repository-root `.env` as described in the [course setup guide](/docs/setup/README.md).

From `lessons/08-mcp-advanced/solutions`:

```bash
npm ci
npm run build
```

`build` only compiles the TypeScript. To run the server by itself, use `npm start`. It communicates over stdin/stdout; diagnostic messages must go to stderr.

## Inspect the Tools

```bash
npm run inspect
npm run tool
```

The first command lists the tools. The second calls `characterDetails` for Ada Lovelace. Both commands build the server first. Wikipedia must be reachable.

For the web inspector:

```bash
npm run inspect:web
```

Open the local address printed by the inspector and keep its ports private.

## Run the Model Client

```bash
npm run client
```

The script builds the client and loads the root `.env` when available. It prints the available tools, the Wikipedia result, and a final model response about Ada Lovelace. It closes the transport when finished.

For another environment file, build first and use Node's file option:

```bash
node --env-file="$HOME/.env" build/client.js
```

The sample only dispatches tools advertised by its own MCP server. Invalid arguments, tool failures, and missing model responses produce explicit errors.

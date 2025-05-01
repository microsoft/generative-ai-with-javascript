# MCP part II

In our previous lesson, we learned how to create an MCP Server and how this is a good way to separate an AI app from it's cabilities. We say how we could add capabilities like tools and resources. Additionally, we showed how the server could be consumed by both an inspector tool or a written client. We've only scratched the surface of what MCP can do and in this chapter we'll add an LLM to the client so you can see how this creates a better user experience.

## Narrative: Heddy Lamarr

## Adding a large language model to a client

**Time Beetle**: "Let's talk about how we can create a client that uses a large language model (LLM) to interact with the MCP server. The benefits is that it provides a better user experience and allows you to use natural language to interact with the server."

How it would work on high level then is to have:

- Client interacting with the MCP server to ask about available tools and resources.
- At prompt time, the user would write a natural language prompt, which is then sent to the LLM in the client.
- Client figures out which tool or which resource to call based on the prompt and the available tools and resources.

Sounds doable right?

**You**: "Yes, it does! But how do I do that?"

**Time Beetle**: "Let's improve the client we created earlier, let's describe the code changes in steps:

1. Make a call to the server to ask for available tools and resources.
2. Convert the tools and resources response to a tools schema that can be used by the LLM.
3. Instantiate the OpenAI client.
4. Make a chat completion call to OpenAI, passing the tools schema as a parameter.
5. Figure out what tool to call based on the response from OpenAI.
6. Call the tool on the server using the MCP client.
7. Respond to the user with the result.

Here's all the steps in code:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

// import openai

// create client instance
const transport = new StdioClientTransport({
  command: "node",
  args: ["server.js"]
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

await client.connect(transport);

// 1. make call to server, ask it for tools
const { tools } = await client.listTools();

// convert function
function toToolSchema(method, schema) {
  return {
    name: method,
    description: `This is a tool that does ${method}`,
    parameters: schema,
  };
}

// 2. convert the tools and resources response to a tools schema
const toolsForLLM = tools.map((tool) => {
  return toToolSchema(tool.method, tool.inputSchema);
});

// 3. instantiate openai client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
  temperature: 0.7,
});

// 4. make chat completion call to openai
const response = await openai.chat.completions.create({
  messages: [
    {
      role: "user",
      content: `I want to add 5 and 10. Please use the tool ${toolsForLLM}`,
    },
  ],
  functions: toolsForLLM,
  function_call: "auto",
});

// 5. figure out what tool to call based on the response from openai
const toolName = response.choices[0].message.function_call.name; // add
const args = response.choices[0].message.function_call.arguments; // { a: 5, b: 10 }

// 6. call the tool on the server
const result = await client.callTool({
  name: toolName,
  arguments: args,
});

// 7. respond to user
console.log(result); // 15
```

In the preceding code we (focusing on our additions):

- Created a function `toToolSchema` that converts the tools and resources response to a schema that can be used by the LLM.
- Asked the server for available tools and resources.
- Converted the tools and resources response to a schema that can be used by the LLM.
- Made a chat completion call to our AI, passing the converted tools as a parameter.
- Figured out what tool to call based on the response from OpenAI.
- Called the tool on the server using the MCP client.
- Handed the result back to the user.  

**You**: "I like this, this is much better! I can use natural language without even knowing what tools and resources are available. I can just ask the AI to do it for me."

**Time Beetle**: "Glad you like it. It should be said though, that you might want to decide if you only want to show a tools response or if you want to show a generic response from the LLM as well. So your user might benefit from the following response strategy:

- **Tools only**: If the LLM response is a tool, then call the tool and return the result.
- **LLM only**: If the LLM response is not a tool, then return the LLM response as is.
- **Tools and LLM**: If the LLM response is a tool, then call the tool and make an additional call to the LLM to get the general response. Return both the tool result and the LLM response.  

**You**: "I see. Something to think about. But this is great! I can see how this would be useful."

## MCP Server with SSE, when the server is not on your local machine

TODO

_In the context of model protocols, stdio and sse refer to different methods of communication between a client and a server. Let's break down the differences:

stdio (Standard Input/Output)
Usage: Typically used for local servers or processes running on your machine.
Communication: Involves reading from standard input (stdin) and writing to standard output (stdout).
Implementation: Often simpler and more direct, suitable for scenarios where the client and server are on the same machine.
Example: Running a local script that processes data and outputs results directly to the terminal.
sse (Server-Sent Events)
Usage: Commonly used for servers that run remotely, such as web servers.
Communication: Involves sending events from the server to the client over HTTP.
Implementation: Allows for real-time updates and continuous data streams from the server to the client.
Example: A web application that receives live updates from a remote server, such as stock prices or chat messages.
Comparison
Location: stdio is generally for local processes, while sse is for remote servers.
Data Flow: stdio is synchronous and direct, whereas sse is asynchronous and event-driven.
Use Case: stdio is suitable for simple, local tasks; sse is ideal for real-time, remote communication.
Fairness of the Statement
It is fair to say that stdio is typically used for servers meant to run on your machine, and sse is used for servers that run elsewhere. However, the choice between stdio and sse also depends on the specific requirements of the application, such as the need for real-time updates or the simplicity of implementation.

Would you like to dive deeper into any specific aspect of these protocols or explore how they are implemented in different scenarios?_

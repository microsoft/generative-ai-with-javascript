# MCP, Model Context Protocol

## Introduction

## Narrative: Scipio Africanus

_Our heroes had just learned tools and using tools via tool calling inspired by their meeting with Amelia Earhart and is now returning back to Ada Lovelace's mansion to discuss their new found knowledge. A flash of light envelops our heroes as the time beetle transports them back to the present. They find themselves in the basement of Ada Lovelace's mansion, Charles Babbage is not present, but Ada is there waiting for them. She is excited to hear about their journey and the knowledge they have gained._

**Ada**: "Welcome back! I trust your journey was enlightening."

**You**: "It was! meeting with mrs Earhart was quite the experience. She taught us about the importance of tools and how to use them effectively." 

**Ada**: "There's few people who understand the importance of tools better than Amelia. I trust you also upgraded her time beetle?"

**You**: "Yes, we did! So what's next on the agenda?"

**Ada**: "Tool calling is definitely a powerful concept, one that improves your device. However, it lacks a certain finesse shall we say. We need to learn _how to make it scale_, we need a protocol. I know just the fellow to help us with that. His name is Scipio Africanus, a brilliant military strategist from ancient Rome. Too bad he spent all his time with military strategy, I'm sure he would have been a brilliant engineer. Off you go.

**You**: "Scipio Africanus? I think I remember him from history class.  

**Ada**: "Good then, why are you still here. Time is off the essence."

The swirling of light envelops you again and you find yourself in a large room with a large table in the middle. The walls are adorned with maps and military strategies. Scipio Africanus is standing at the table, deep in thought. He looks up as you enter. "Ada te misit/Ada sent you?" 

## The need for Model Context Protocol (MCP)

**Time beetle**: The protocol Ada spoke of is called the Model Context Protocol (MCP). It's a protocol that allows you to decentralize your application architecture, making it more scalable and resilient by adding resources on a server, or multiple servers even, and offload these from the client. I'll let Scipio explain it to you.

**You**: "Yes, Ada sent us. She said you could help us with a protocol?"

**Scipio**: "Protocol? I've spent my life developing strategies for battle. But I suppose a protocol is like a strategy. It helps you organize and manage your resources effectively and ensures communication between them".

Let's talk about flanking maneuvers, infiltration, and the use of cavalry. 

**You**: "Ok, go on?"

**Scipio**: "In battle, we often use flanking maneuvers to attack the enemy from the sides or rear. This disrupts their formations and gives us an advantage. The reason being that the enemy is not prepared for an attack from the side and tends to focus all their attention on the front.  

**You**: "Hm, I guess that's similar to having an app doing too much work on a single server. Flanking maneuvers would be like distributing the load across multiple servers, right?"

**Scipio**: "Exactly! By distributing the load, you reduce the risk of a single point of failure and improve overall system resilience. It makes it easier to manage and use resources effectively.

## Model Context Protocol (MCP)

**Time beetle**: "To add to Scipio's point, the Model Context Protocol (MCP) is a way to decentralize your application architecture. It allows you to break down your application into smaller, more manageable components that can operate independently. Here are some important concepts to keep in mind:

- **MCP Hosts**: Programs like IDEs or AI tools that want to access data through MCP.
- **MCP Clients**: Protocol clients that maintain 1:1 connections with servers.
- **MCP Servers**: Lightweight programs that expose specific capabilities through MCP.
- **Local Data Sources**: Files, databases, and services on your computer that MCP servers can securely access.
- **Remote Services**: External systems available over the internet (e.g., APIs) that MCP servers can connect to.

and here's a quick overview of the MCP architecture:

![Architecture of MCP](https://softchris.github.io/mcp-workshop/assets/images/diagram-791787b0cac57bc331c20e72b645d4f7.png)

### Discovering tools and resources

**You**: "And what about infiltration?"

**Scipio**: "Infiltration is about using small units to infiltrate enemy lines, that way you find out more about the enemy and cause confusion. 

**You**: "Sounds to me like we can use this way of thinking to find out more about our servers, what tools and resources they have.

To sum things up, I should:

- **Use flanking maneuvers**, or in my case break down by app functionality into several MCP servers so that I can distribute them after area of usage and thereby make it easier to scale and manage the app. Such servers can even be updated independently of each other.
- **Use infiltration**, or in my case, figure out what these servers are doing, in terms of tools and resources. This way I can make sure I'm interacting with the right server and using the right tools for the job.

**You**: "Time beetle, am I understanding things correctly?"

**Time beetle**: "Yes, you are. Scipio's strategies can be applied to your application architecture. If you want, I can teach you the specifics of the Model Context Protocol (MCP) and how to implement it in your application?

**You**: "Yes, please!"

**Time beetle**: "Good, let's start with creating a server"

## Creating an MCP Server

**Time beetle**: "To create your first MCP server, you need two libraries `@modelcontextprotocol/sdk` and `zod`:

- The `@modelcontextprotocol/sdk` library provides the necessary tools to create and manage MCP servers.
- `zod` is a TypeScript-first schema declaration and validation library that helps you define and validate the data structures used in your MCP server. 

```bash
npm install @modelcontextprotocol/sdk zod
```

Here's a simple example on how to create an MCP server using these libraries:

```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
 
// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});
```

The preceding code does the following:

- Imports the necessary classes and functions from the `@modelcontextprotocol/sdk` library.
- Creates a server instance. The `McpServer` class is used to create the server, and it takes an object with the server's name and version as parameters.

**You**: "This doesn't do much right?"

**Time beetle**: "No, not yet. But we can add resources and tools to it. A tool is something that can be used to perform a specific task, while a resource is something that can be used to provide data or functionality to the tool. Let's add some below:

```typescript
server.tool("add",
   { a: z.number(), b: z.number() },
   async ({ a, b }) => ({
     content: [{ type: "text", text: String(a + b) }]
   })
 );
```

In the preceding code, we:

- Defined a tool called "add" that takes two numbers as input and returns their sum as output.
- Described the input parameters and its validation using zod. The `z.number()` function is used to validate the input data, ensuring that both `a` and `b` are numbers.
- The `async` function is used to perform the addition and return the result in a specific format.

**You**: "Interesting, so the tool is like a function that can be called by the MCP client?"

**Time beetle**: "Exactly! The MCP client can call this tool and pass the required parameters. Let's add a resource to the server as well:

```typescript
server.resource(
   "greeting",
   new ResourceTemplate("greeting://{name}", { list: undefined }),
   async (uri, { name }) => ({
     contents: [{
       uri: uri.href,
       text: `Hello, ${name}!`
     }]
   })
 );
```

In this code, we:

- Defined a resource called "greeting" that takes a name as input and returns a greeting message.
- Used a resource template to define how to call the resource `greeting//{name}`. This schema is used to define the resource's URI format, which includes a placeholder for the name.
- The `async` function is used to generate the greeting message based on the provided name.

**You**: "So the resource is like a data source, this could be a database, file or even an API? If this was a for a file I would use a file:// URI?" like so:

```typescript
server.resource(
   "file",
   new ResourceTemplate("file://{path}", { list: undefined }),
   async (uri, { path }) => ({
     // do something with the file at path, e.g., read its contents
     contents: [{
       uri: uri.href,
       text: `File at ${path}`
     }]
   })
 );
```

**Time beetle**: "Yes, exactly! The resource can be anything that provides data or functionality to the MCP server. You can define resources for files, databases, APIs, or any other data source you want to use."

Now, let's add a transport layer to the server so it can communicate with clients."

```typescript
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport); 
```

In this code, we:

- Created a transport layer using the `StdioServerTransport` class, which allows the server to communicate with clients through standard input and output.
- Called the `connect` method to establish the connection between the server and the transport layer.

**You**: "Ok, so now we have a server, how do we run and test it?"

## Running and Testing the MCP Server

**You**: "Scipio, have you tested your tactics?"

**Scipio**: "Of course! Testing is crucial in any strategy. You should always test your tactics before deploying them. In fact, I remember a specific battle where I used a new tactic and it failed miserably called the Battle of the Trebia. I learned my lesson and never made that mistake again."

**You**: "So how do I test my MCP server?"

**Time beetle**: "You can test your MCP server by running it in a terminal by running the inspector like so:

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

Above, we are using the `@modelcontextprotocol/inspector` package to run the MCP server. We provide the argument `node build/index.js` to specify the entry point of the server. This will start the MCP server and allow you to interact with it through the inspector.

**You**: "And how do I interact with it?"

**Time beetle**: "This starts a web server on port 6274. You can access the inspector by opening your web browser and navigating to `http://localhost:6274`. The inspector provides a user-friendly interface for interacting with your MCP server, allowing you to test the tools and resources you've defined."

![Inspector user interface](https://softchris.github.io/mcp-workshop/assets/images/connect-7703c67645f368d51c7b24a5d635d6a0.png)

### -1- Connect to the server

**Time beetle**: Select to "Connect" and you should see the window below:

![Connecting to server](https://softchris.github.io/mcp-workshop/assets/images/connected-7c3570d5d0a8659e27740d2950031cb3.png)

It should say you're connected. Now you can interact with tools or resources next.

### -2- List tools and resources

**Time beetle**: "Next, we want to list the tools and resources available on the server. You can do this by selecting "List tools", to see what tools are available:

![Listing tools](https://softchris.github.io/mcp-workshop/assets/images/tools-listed-630aa49c9d7e4347108419fb83c409f6.png)

Now you should see the "add" tool listed. You can also list the resources by selecting the "Resources" tab.

### -3- Run the tool

**Time beetle**: "To run the tool, select the "add" tool from the list. Fill in the parameters in the dialog that appears on the right side of the screen. For example, you can enter `a=5` and `b=10` to add these two numbers together. Click "Run Tool" to execute the tool. You should see the result in the output area below. The result should be `15`."

![Run the tool](https://softchris.github.io/mcp-workshop/assets/images/ran-tool-271ecd5f84a457462e59789b579ee9d4.png)

**Scipio**: "Interesting, I wish I could test my strategies like this. Seems very useful."

**You**: "Right, it really does**! I can see how this would be useful for testing and debugging."

## Creating a client

**Time Beetle**: "You can also create a client that connects to the MCP server and interacts with it. Here's an example of how to create a simple MCP client using the `@modelcontextprotocol/sdk` library:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

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
```

In the preceding code, we:

- Created a transport layer using the `StdioClientTransport` class, which allows the client to communicate with the MCP server through standard input and output.
- Initiated a new `Client` instance with a name and version.
- Connected the client to the transport layer using the `connect` method.

**You**: "Let me guess, there's a lot more we can do with the client?"

**Time Beetle**: Yes, let's talk about that next. The MCP client can be used to interact with the server, call tools, and access resources. 

### Listing and calling tools and resources

**Time Beetle**: "There's generally two scenarios you want to cover, listing tools and resources, and calling them. Here's how to do that:

```typescript
// List prompts
const prompts = await client.listPrompts();

// List resources
const resources = await client.listResources();

// list tools
const tools = await client.listTools();
```

**You**: This is great, then I know what capabilities the server has. But how do I call them?

**Time Beetle**: "Right, let me dive into a specific example, tools first. So you start by asking for what tools you have, then you can store that response and then call the tool you want. Here's an example:

So when you list tools, you get a response on this format:

```json
  
  {
    "name": "<tool name>",
    "description": "<description>".
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
  }
```

which means, if you have the tools `add` and `subtract`, your response looks like so:

**You**: "Ok, good, I guess I can store that in a variable and then call the tool I want?"

**Time Beetle**: "Exactly! Let's show calling a tool next:"

```typescript
// List tools
const { tools } = await client.listTools();

const addTool = tools[0]; // Assuming the first tool is "add"
const subtractTool = tools[1]; // Assuming the second tool is "subtract"

// Call a tool
const result = await client.callTool({
  name: addTool.name,
  arguments: {
    a: 5,
    b: 10
  }
});
```

**You**: "Ok, makes sense. And what about resources?"

**Time Beetle**: "Resources are similar, but you need to provide the resource URI and any parameters it requires. Here's an example:

```typescript
let resourceUri = "greeting://John"; // Replace with the actual resource URI

// call resource
// Read a resource
const name = "John Doe"; // Replace with the actual name

const resourceResult = await client.readResource({
  uri: `greeting:///${name}`,
});

console.log(resourceResult); // Hi John Doe!
```

**You**: "I get it nice, although, this feels a bit cumbersome. I would like to have a more user friendly way of doing this. Like, I'm speaking or writing to you using a natural language, and I would like to do the same with my MCP server. Is that possible?"

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

## Assignment - creating an inventory and tools management system for Scipio

**Scipio**: "You know, I have so many parchments and scrolls lying around. I could really use a tool to help me organize them. I also have this abacus that I use for calculations. Can you help me create a tool to manage my inventory?"

Here's a complete inventory of my scrolls:

- Scroll of Tactics.
- Scroll of food supply.
- Parchment of troop movements.
- Parchment of battle plans.

Oh, here's a Taxation scroll. Taxation is big thing, the Empire wants their cut of everything we acquire. Have you solved this in your time, don't answer that, I don't want to know.

The abacus tool, I need it to support the following operations:

- Add: Add two numbers together.
- Subtract: Subtract one number from another.
- Multiply: Multiply two numbers together.
- Divide: Divide one number by another.
- Power: Raise a number to the power of another number.

## Solution

## Knowledge Check

## Summary

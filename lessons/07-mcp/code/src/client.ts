import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { CallToolRequest, CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { OpenAI } from 'openai';
import { z } from "zod";

type ChatCompletionMessageParam = {
  role: "system" | "user" | "assistant";
  content: string;
  name?: string;
  function_call?: {
    name: string;
    arguments: string;
  };
};

const transport = new StdioClientTransport({
  command: "node",
  args: ["build/index.js"]
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

await client.connect(transport);

function toToolSchema(method, schema) {
  return {
    name: method,
    description: `This is a tool that does ${method}`,
    parameters: schema,
  };
}

// list tools
const { tools } = await client.listTools();
tools.forEach((tool) => {
  console.log(`Tool: ${tool.name}`);
  console.log(`Description: ${tool.description}`);
  console.log(`Input schema: ${JSON.stringify(tool.inputSchema)}`);
}
);

const toolsForLLM = tools.map((tool) => {
  return toToolSchema(tool.name, tool.inputSchema);
});

console.log("Schema for tool", JSON.stringify(toolsForLLM, null, 2));

// TODO feed this to an llm as functions

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
  apiKey: process.env.GITHUB_TOKEN,
});

const messages: ChatCompletionMessageParam[] = [
  {
      role: "system",
      content: `You are a helpful assistant. You can call functions to perform tasks. Make sure to parse the function call and arguments correctly.`
  }, {
      role: "user",
      content: "Add 5 and 10",
      name: "example-user" // Adding the required 'name' property for user role
  }
];

openai.chat.completions.create({
    model: 'gpt-4o',
    messages: messages,
    functions: toolsForLLM
}).then((result) => {
    console.log("Result", result.choices[0].message);
}).catch((error) => {
    console.error("Error:", error);
})

const result = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: messages,
    functions: toolsForLLM
});

for (const choice of result.choices) {
    // console.log("Result", choice.message);

    let functionCall = choice.message?.function_call;
    let functionName = functionCall?.name;
    console.log("Function call: ", functionName);
    let args = functionCall?.arguments;


    // ALT1
    // 1. create a request
    const request: CallToolRequest = {
        method: "tools/call",
        params: {
            name: functionName ?? "",
            arguments: args
        }
    };

    function createRequest(name: string, args: any): CallToolRequest {
        return {
            method: "tools/call",
            params: {
                name,
                arguments: args
            }
        };
    }

    function callTool<T extends z.ZodType<any, any>>(name: string, args: any,  schema: T): Promise<z.infer<T>> {
      let request = createRequest(name ?? "", args);

      return client.request(
        request,
        schema
      );
    }

    callTool("add", args, CallToolResultSchema).then((result) => {
        console.log("Result from tool: ", result.content[0].text);
        return result; // Ensure the callback returns the result
    });

    // 2. make the request and cast the result to the correct type
    client.request(request, CallToolResultSchema).then((result) => {
        console.log("Result from tool: ", result.content[0].text);
    }); 

    // ALT2
    await client.callTool({
        name: functionName ?? "",
        arguments: typeof args === "string" ? JSON.parse(args) : args ?? {}
    }).then((result) => {
        const toolResult = result as z.infer<typeof CallToolResultSchema>;

        console.log("Converted Result from tool: ", toolResult.content[0].text);
  })





  const AddRequest = {
    name: "add",
    arguments: {
      a: 1,
      b: 2
    }
  };

  // Alt 3, request schema AND reply schema
  await client.callTool(AddRequest, CallToolResultSchema)
  .then((result) => {
      console.log("Result from tool: ", result.content[0].text);
  });


    // await client.callTool({
    //     name: functionName?? "",
    //     arguments: typeof args === "string" ? JSON.parse(args) : args ?? {}
    // }, CallToolResultSchema ).then((result) => {
    //     console.log("Result from tool: ", result);
    //     // TODO: figure out how to cast result to the correct type, i.e { content: [ { type: 'string', text: 'string' } ] }
    //     // Result from tool:  { content: [ { type: 'text', text: '15' } ] };
    // });
}


// call tool
// const result = await client.callTool({
//   name: "add",
//   arguments: {
//     a: 5,
//     b: 10
//   }
// });
// console.log(`Result: ${JSON.stringify(result)}`);

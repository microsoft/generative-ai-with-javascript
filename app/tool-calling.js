import { OpenAI } from "openai";
import "dotenv/config";
// 1: Define the function
function findLandingSpot(lat, long) {
  console.log("[Function] Finding landing spot with coordinates: ", lat, long);
  // Perform the task of finding a suitable landing spot
  // Return the coordinates of the landing spot
  return { lat: 7.5, long: 134.5 };
}

// 2: Define the tool metadata, should include description, parameters, and output
const findLandingSpotJson = {
  name: "find-landing-spot",
  description: "Finds a suitable landing spot",
  parameters: {
    type: "object",
    properties: {
      lat: {
        type: "number",
        description: "The latitude of the location",
      },
      long: {
        type: "number",
        description: "The longitude of the location",
      },
    },
    required: ["lat", "long"],
  },
  output: { type: "object", properties: { lat: "number", long: "number" } },
};

// 3: Add the tool to the tools object that we will use later to invoke the tool
const tools = {
  [findLandingSpotJson.name]: findLandingSpot,
};

// 4: Create an instance of the OpenAI client
const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
  apiKey: process.env.GITHUB_TOKEN,
});

// 5: Define the messages that will be sent to the AI model
const messages = [
  {
    role: "system",
    content: `You are a helpful assistant. You can call functions to perform tasks. Make sure to parse the function call and arguments correctly.`,
  },
  {
    role: "user",
    content: "Find a landing spot given coordinates 8.5, 130.5",
  },
];

async function main() {
  console.log("Making LLM call");

  // 6: Call the AI model with the defined messages and tools
  const result = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages,
    functions: [findLandingSpotJson],
  });

  for (const choice of result.choices) {
    let functionCall = choice.message?.function_call;
    let functionName = functionCall?.name;
    let args = JSON.parse(functionCall?.arguments);

    // 7: Interpret response and call the tool based on the function call provided by the AI model
    if (functionName && functionName in tools) {
      console.log(`Calling [${functionName}]`);
      const toolFunction = tools[functionName];
      const toolResponse = toolFunction(...Object.values(args)); // Extract values from args and spread them
      console.log("Result from [tool] calling: ", toolResponse);
    }
  }
}

main();

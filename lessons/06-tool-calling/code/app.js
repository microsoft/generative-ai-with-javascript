import { OpenAI } from 'openai';

function findLandingSpot(lat, long) {
  console.log("[Function] Finding landing spot with coordinates: ", lat, long);
  // Perform the task of finding a suitable landing spot
  // Return the coordinates of the landing spot
  return { lat: 7.5, long: 134.5 };
}

function getBackgroundOnCharacter(character= "unknown") {
  console.log("[Function] Getting background on character: ", character);
  // Perform the task of getting background information on a character
  // Return the background information
  return `Background information on ${character}`;
}

const getBackgroundOnCharacterJson = {
  name: "get-background-on-character",
  description: "Get background information on a character",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name of the character",
      }
    },
    required: ["name"],
  },
  output: { type: "string" }
};

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
  output: { type: "object", properties: { lat: "number", long: "number" } }
};

const tools = {
  [findLandingSpotJson.name]: findLandingSpot,
  [getBackgroundOnCharacterJson.name]: getBackgroundOnCharacter
};


const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
    apiKey: process.env.GITHUB_TOKEN,
});

/*
// {
//     role: "user",
//     content: `We need to know where to land, here's the coordinates: 7.5, 134.5. `,
// },
*/

const messages = [
{
    role: "system",
    content: `You are a helpful assistant. You can call functions to perform tasks. Make sure to parse the function call and arguments correctly.`
}, {
    role: "user",
    content: "Can you give me some background on the character named Amelia Earhart?"
}
];

async function main(){
  console.log("Making LLM call")

  const result = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
      functions: [getBackgroundOnCharacterJson, findLandingSpotJson]
    });

  for (const choice of result.choices) {
      // console.log("Result", choice.message);

      let functionCall = choice.message?.function_call;
      let functionName = functionCall?.name;
      let args = JSON.parse(functionCall?.arguments);
      // console.log("Wants to call: ", choice.message?.function_call);
      // console.log("With args: ", args);
      if (functionName && functionName in tools) {
          console.log(`Calling [${functionName}]`);
          const toolFunction = tools[functionName];
          const toolResponse = toolFunction(...Object.values(args)); // Extract values from args and spread them
          console.log("Result from [tool] calling: ", toolResponse);
      }
  }

}

main();

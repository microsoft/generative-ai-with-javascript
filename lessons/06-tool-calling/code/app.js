import { OpenAI } from "openai";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

function findLandingSpot(lat, long) {
  console.log("[Function] Finding a simulated landing spot:", lat, long);
  return { lat: 7.5, long: 134.5 };
}

function getBackgroundOnCharacter(name) {
  console.log("[Function] Getting background on character:", name);
  return `Background information on ${name}`;
}

const getBackgroundOnCharacterJson = {
  name: "get-background-on-character",
  description: "Get background information on a character",
  strict: true,
  parameters: {
    type: "object",
    properties: { name: { type: "string", description: "The character's name" } },
    required: ["name"],
    additionalProperties: false
  }
};

const findLandingSpotJson = {
  name: "find-landing-spot",
  description: "Return a simulated landing spot for this fictional exercise",
  strict: true,
  parameters: {
    type: "object",
    properties: {
      lat: { type: "number", description: "Latitude" },
      long: { type: "number", description: "Longitude" }
    },
    required: ["lat", "long"],
    additionalProperties: false
  }
};

const handlers = {
  [getBackgroundOnCharacterJson.name]: args => {
    if (typeof args.name !== "string" || !args.name.trim()) {
      throw new Error("The character name must be a non-empty string.");
    }
    return getBackgroundOnCharacter(args.name);
  },
  [findLandingSpotJson.name]: args => {
    if (!Number.isFinite(args.lat) || !Number.isFinite(args.long)) {
      throw new Error("Landing coordinates must be finite numbers.");
    }
    return findLandingSpot(args.lat, args.long);
  }
};

const tools = [getBackgroundOnCharacterJson, findLandingSpotJson].map(definition => ({
  type: "function",
  function: definition
}));
const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const messages = [
  { role: "system", content: "Use the provided tools to answer the fictional travel request." },
  { role: "user", content: "Use the character tool to give me background on Amelia Earhart." }
];

const completion = await openai.chat.completions.create({
  model, messages, tools, tool_choice: "required"
});
const message = completion.choices[0]?.message;
if (!message?.tool_calls?.length) throw new Error("The model did not request a tool.");
messages.push(message);

for (const call of message.tool_calls) {
  if (call.type !== "function" || !Object.hasOwn(handlers, call.function.name)) {
    throw new Error("The model requested an unsupported tool.");
  }
  const args = JSON.parse(call.function.arguments);
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    throw new Error("Tool arguments must be a JSON object.");
  }
  const result = handlers[call.function.name](args);
  console.log(`Result from [${call.function.name}]:`, result);
  messages.push({ role: "tool", tool_call_id: call.id, content: JSON.stringify(result) });
}

const followUp = await openai.chat.completions.create({
  model, messages, tools, tool_choice: "none"
});
const answer = followUp.choices[0]?.message?.content;
if (!answer?.trim()) throw new Error("The model did not return a final answer.");
console.log(answer);

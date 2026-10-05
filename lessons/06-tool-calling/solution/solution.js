import { OpenAI } from "openai";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

function calculateDistance(lat1, long1, lat2, long2) {
  return Math.hypot(lat2 - lat1, long2 - long1);
}

function getGpsPosition(lat, long) {
  return { lat: 7.5, long: 134.5 };
}

function getWeatherForecast(lat, long) {
  return "Sunny";
}

const calculateDistanceJson = {
  name: "calculate-distance",
  description: "Calculate a demonstration distance in coordinate units",
  strict: true,
  parameters: {
    type: "object",
    properties: {
      lat1: { type: "number" }, long1: { type: "number" },
      lat2: { type: "number" }, long2: { type: "number" }
    },
    required: ["lat1", "long1", "lat2", "long2"],
    additionalProperties: false
  }
};
const getGpsPositionJson = {
  name: "get-gps-position",
  description: "Return simulated GPS coordinates for this fictional exercise",
  strict: true,
  parameters: {
    type: "object",
    properties: { lat: { type: "number" }, long: { type: "number" } },
    required: ["lat", "long"],
    additionalProperties: false
  }
};
const getWeatherForecastJson = {
  name: "get-weather-forecast",
  description: "Return a simulated weather forecast",
  strict: true,
  parameters: {
    type: "object",
    properties: { lat: { type: "number" }, long: { type: "number" } },
    required: ["lat", "long"],
    additionalProperties: false
  }
};

function coordinates(args, names) {
  return names.map(name => {
    if (!Number.isFinite(args[name])) throw new Error(`${name} must be a finite number.`);
    return args[name];
  });
}

const handlers = {
  [calculateDistanceJson.name]: args =>
    calculateDistance(...coordinates(args, ["lat1", "long1", "lat2", "long2"])),
  [getGpsPositionJson.name]: args => getGpsPosition(...coordinates(args, ["lat", "long"])),
  [getWeatherForecastJson.name]: args => getWeatherForecast(...coordinates(args, ["lat", "long"]))
};
const tools = [calculateDistanceJson, getGpsPositionJson, getWeatherForecastJson].map(definition => ({
  type: "function",
  function: definition
}));
const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const messages = [{
  role: "user",
  content: "Use the GPS tool to get the simulated position for coordinates 7.5, 134.5."
}];

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

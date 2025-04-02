// 1: Define the functions

function calculateDistance(lat1, long1, lat2, long2) {
    // Perform the task of calculating the distance between two points
    // Return the distance between the points
    return Math.sqrt((lat2 - lat1) ** 2 + (long2 - long1) ** 2);
}

function getGpsPosition(lat, long) {
    // Perform the task of getting the GPS position of the current location
    // Return the GPS position
    return { lat: 7.5, long: 134.5 };
}

function getWeatherForecast(lat, long) {
    // Perform the task of getting the weather forecast for a given location
    // Return the weather forecast
    return "Sunny";
}

// 2: create metadata for the functions
const calculateDistanceJson = {
    name: "calculate-distance",
    description: "Calculates th distance between two points",
    parameters: {
      type: "object",
      properties: {
        lat1: {
          type: "number",
          description: "The latitude of the first point",
        },
        long1: {
          type: "number",
          description: "The longitude of the first point",
        },
        lat2: {
          type: "number",
          description: "The latitude of the second point",
        },
        long2: {
          type: "number",
          description: "The longitude of the second point",
        },
      },
      required: ["lat1", "long1", "lat2", "long2"],
    },
    output: { type: "number" }
  };

const getGpsPositionJson = {
  name: "get-gps-position",
  description: "Gets the GPS position of the current location",
  parameters: {
    type: "object",
    properties: {
        lat: {
        type: "number",
        description: "The latitude of the first point",
        },
        long: {
        type: "number",
        description: "The longitude of the first point",
        },
    },
    required: ["lat", "long"],
  },
  output: { type: "object", properties: { lat: "number", long: "number" } }
}

const getWeatherForecastJson = {
  name: "get-weather-forecast",
  description: "Gets the weather forecast for a given location",
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
  output: { type: "string" }
}

// 3: create a tools object with the functions
const tools = {
  [calculateDistanceJson.name]: calculateDistance,
  [getGpsPositionJson.name]: getGpsPosition,
  [getWeatherForecastJson.name]: getWeatherForecast
};

// 4: create an OpenAI instance with the tools
const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com", 
    apiKey: process.env.GITHUB_TOKEN,
});

// 5: create messages to test the functions
// enable one of these messages at a time to test the functions
const messages = [
  {
    role: "user",
    content: `We need to know where to land, here's the coordinates: 7.5, 134.5. `,
  },
//   {
//     role: "user",
//     content: `What is the distance between the points 7.5, 134.5 and 8.5, 135.5?`,
//   },
//   {
//     role: "user",
//     content: `What is the weather forecast for the location 7.5, 134.5?`,
//   },
]; 

// 6: make a chat completion
async function main(){
    const result = await openai.chat({ messages, tools });

    // 7: interpret the result
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

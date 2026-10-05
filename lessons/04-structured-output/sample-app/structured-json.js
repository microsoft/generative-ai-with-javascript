import { OpenAI } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const TravelRequest = z.object({
  skill: z.enum(["book_flight", "book_hotel"]),
  parameters: z.array(z.string()),
  extracted_data: z.object({
    destination: z.string(),
    date: z.string()
  })
});

const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const completion = await openai.chat.completions.parse({
  model,
  messages: [
    { role: "system", content: "Extract the travel request. Return the skill, parameter names, destination, and date." },
    { role: "user", content: "Book a flight to Florence on 2030-06-15." }
  ],
  response_format: zodResponseFormat(TravelRequest, "travel_request")
});
const message = completion.choices[0]?.message;
if (message?.refusal) throw new Error(`The model refused the request: ${message.refusal}`);
if (!message?.parsed) throw new Error("The model did not return a structured response.");
console.log(JSON.stringify(message.parsed, null, 2));

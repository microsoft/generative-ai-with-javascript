# Aerial Screw Prompt Solution

This is a fictional, simplified physics exercise, not flight guidance. It demonstrates how clear inputs and assumptions improve a prompt.

Save the code as `solution.js` in the lesson's `sample-app` directory. Run it with `node --env-file=../../../.env solution.js`, or select another environment file with Node's `--env-file` option.

```javascript
import { OpenAI } from "openai";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const rl = createInterface({ input: stdin, output: stdout });
try {
  async function number(question) {
    const text = await rl.question(question);
    const value = Number(text);
    if (!text.trim() || !Number.isFinite(value)) throw new Error("Enter a finite number.");
    return value;
  }
  const height = await number("Height above ground in meters: ");
  const speed = await number("Forward speed in meters per second: ");
  const gravity = await number("Gravity in meters per second squared: ");
  const upwardSpeed = await number("Initial upward speed in meters per second: ");
  if (height < 0 || speed <= 0 || gravity <= 0) {
    throw new Error("Height must be non-negative; speed and gravity must be positive.");
  }
  const prompt = `For this fictional exercise, the hill is 100 meters away.
Height is ${height} meters, forward speed is ${speed} meters per second,
gravity is ${gravity} meters per second squared, and initial upward speed
is ${upwardSpeed} meters per second. Ignore drag.
Use horizontal travel time = 100 / forward speed and vertical height
y(t) = initial height + initial upward speed * t - gravity * t^2 / 2.
State the travel time and whether the machine reaches ground before the hill.
Give a short result and check the units.`;
  const completion = await openai.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }]
  });
  const answer = completion.choices[0]?.message?.content;
  if (!answer?.trim()) throw new Error("The model did not return an answer.");
  console.log(answer);
} finally {
  rl.close();
}
```

For height `100`, forward speed `3`, gravity `9.82`, and initial upward speed `3`, travel time to the hill is about `33.33` seconds. The simplified trajectory reaches ground after about `4.83` seconds, before reaching the hill. Check numerical answers rather than assuming the model is correct.

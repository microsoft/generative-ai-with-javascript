# Aerial Screw Boot Sequence Solution

Use the model settings from the repository-root `.env`. This solution asks for only the encoded result, not an explanation.

```javascript
import { OpenAI } from "openai";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const bootSequence = "left left up right";
const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const completion = await openai.chat.completions.create({
  model,
  messages: [{
    role: "user",
    content: `Reverse the entire string "${bootSequence}", then apply a Caesar cipher with a shift of 3 to each letter. Preserve spaces. Return only the encoded text.`
  }]
});
const answer = completion.choices[0]?.message?.content;
if (!answer?.trim()) throw new Error("The model did not return an answer.");
console.log(answer);
```

## Expected Result

```text
wkjlu sx wiho wiho
```

Reversing the input produces `thgir pu tfel tfel`. Shifting each letter by three gives the result above. Check the result instead of assuming that a model response is correct.

For native, schema-validated JSON output, see [structured-json.js](../sample-app/structured-json.js). Run `npm run structured` in the lesson's `sample-app` directory.

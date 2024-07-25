import process from "node:process";
import { OpenAI } from "openai";

const prompt = `
## Available products
| Product Name | Characteristics |
|--------------|-----------------|
| Contoso Trek | Waterproof hiking boots with advanced grip technology for all terrains. Features include breathable material and ankle support. |
| Contoso Dash | Lightweight running shoes with responsive cushioning. Designed for speed and comfort, with a mesh upper for breathability. |
| Contoso Glide | Slip-on casual shoes with a sleek design. Offers comfort for all-day wear with memory foam insoles and a flexible sole. |
| Contoso Flex | Athletic shoes with a flexible sole designed for a wide range of sports. Features include enhanced durability and support for lateral movements. |
| Contoso Chill | Cozy and stylish winter boots with thermal lining and waterproof exterior. Includes a slip-resistant sole for icy conditions. |

## User details
Name: John Doe

Assistant helps the user with questions about products for the company "Contoso Shoes".
Be brief, answer with 2 lines max. Use a cheerful personalized answer with user's name.

## Question
What shoes should I use for running?

## Answer
{
  "text": "<answer>",
  "product": "<product_name>"
}
`;

const openai = new OpenAI();
const chunks = await openai.chat.completions.create({
  messages: [{ role: "user", content: prompt }],
  model: "gpt-4o-mini",
  // response_format: { type: "json_object" },
  stream: true,
});

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0].delta.content!);
}

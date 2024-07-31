# Demo - Essential prompt engineering techniques

**Prerequisites**:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/) v20+
- [Code runner extension for VS Code](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

Before running the demo, make sure you have the packages installed by running the following command at the root of the repository:

```bash
npm install
```

## Scenario

### Preparation

1. Open the file `demo-complete.ts` in a separate window, so you can copy and paste the code into the file you will be working on.
2. Open the file `demo.ts` in Visual Studio Code and start working from there.

### Demo

We’re building an AI assistant for our company called “Contoso Shoes”, and we want to help our customers to choose the right products for them.

*Before every numbered step, run the code to show the output.*

1. The first the answer is way too long, so lets clarify what kind of answer we want.
  - Add `Be brief, answer with 2 lines max.` to the prompt.
2. We want the answer to be about our Company products, so let’s give it some context.
  - Update the prompt with `Assistant helps the user with questions about products for the company "Contoso Shoes".`
3. It’s better, but now it makes up products that don’t exist. So we’ll provide a list of the product we have and their features.
  - Add the following table to the prompt:
    ```markdown
    ## Available products
    | Product Name | Characteristics |
    |--------------|-----------------|
    | Contoso Trek | Waterproof hiking boots with advanced grip technology for all terrains. Features include breathable material and ankle support. |
    | Contoso Dash | Lightweight running shoes with responsive cushioning. Designed for speed and comfort, with a mesh upper for breathability. |
    | Contoso Glide | Slip-on casual shoes with a sleek design. Offers comfort for all-day wear with memory foam insoles and a flexible sole. |
    | Contoso Flex | Athletic shoes with a flexible sole designed for a wide range of sports. Features include enhanced durability and support for lateral movements. |
    | Contoso Chill | Cozy and stylish winter boots with thermal lining and waterproof exterior. Includes a slip-resistant sole for icy conditions. |
    ```
  - Notice that we’re using markdown table here, which AI models usually understand.
4. Way better, now it looks correct. But the tone is now very friendly, so let’s tell it to be more cheerful.
  - Add `Be cheerful.` to the prompt.
5. Now we could even make it more personal if we could include the user’s name in the answer.
  - Update the prompt with `Be cheerful and mention user's name.`
  - Add these lines to the prompt:
    ```markdown
    ## User details
    Name: John Doe
    ```
6. Ok, this is the kind of results that we want. But we’d like to consume the result in a web UI, so it would be best to get the result as JSON.
  - Add these lines to the prompt:
    ```markdown
    ## Answer
    {
      "text": "<answer>",
      "product": "<product_name>"
    }
    ```
  - I can hint at the format I want, without even the need to say that I want JSON.
7. Now you’ve seen how you can tweak a prompt to get the results you need from AI models.

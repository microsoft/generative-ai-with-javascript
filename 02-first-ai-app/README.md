# Lesson 2: Writing Your First AI App

In this lesson, you will learn to:

- Set up your development environment.
- Write a basic app.
- Understand system prompts.

## Narrative: Picture yourself in a boat on a river

Together with Dinocrates, you put the finishing touches on the lighthouse at Alexandria. The towering structure gleams in the sunlight, its polished stone reflecting the azure hues of the Mediterranean Sea. As you gaze out at the vast expanse of water, you feel a profound sense of accomplishment. The world is changing, and you are at the forefront of a new era of innovation. The ancient Greeks and Romans have laid the foundation for modern civilization, and you are contributing to its future.

Proud of your achievements, your thoughts turn to your workshop in London. You look down at the time beetle in your hand, its metallic surface cool against your palm. Clenching your fist around it, you whisper, "Take me home." The beetle begins to glow, emitting a soft, warm light. A tingling sensation spreads through your body, and suddenly, the world around you dissolves into a whirlwind of colors. You close your eyes and whisper, "Please let it be London."

When you open your eyes, the world has shifted. Your feet feel unsteady, and you stumble, landing on a hard wooden surface. As you manage to get up, you realize you're in a boat on a river. The gentle rocking of the boat and the sound of water lapping against its sides are disorienting. You look around, trying to make sense of your surroundings. In the distance, you see buildings, their outlines blurred by the morning mist.

Looking around the boat, you find a long oar resting against the side. Grasping it, you begin to row towards the distant buildings. The rhythmic motion of rowing is soothing, and as you get closer, the buildings come into sharper focus. They are old, their architecture reminiscent of a Renaissance painting. Ornate facades, arched windows, and weathered stone walls greet your eyes. You sigh, realizing you're not in London. The question now is, where and when are you this time?

![Boat on the rive, man standing with a paddle](./assets/boat.png)

### Help me, Leonardo 

You manage to secure the boat at the dock and start walking along the wooden planks, the sound of your footsteps echoing softly. The air is filled with the scent of the river and the distant murmur of the bustling city. As you walk, you notice a man with a long beard and a hat, digging through a crate of what looks like mechanical parts. His hands move deftly, sorting through gears and springs with practiced ease. 

![Leonardo Da Vinci standing next to a crate in the harbour](./assets/leonardo.png) 

You approach him and ask, "Excuse me, sir, where am I?" He looks up at you, confusion evident in his eyes. Realizing you've been speaking in English, you quickly use the device in your hand and ask it to translate. 

The Time Beetle responds, "Of course, I'll translate into 15th century Italian. 'Dove sono?'" 

The old man replies, "Siete a Firenze, signore. E chi siete voi?" 

The Time Beetle translates, "He says you're in Florence, and asks who you are." 

You respond, "Tell him I'm a maker of things, and I'm looking for a place to work." 

The old man nods, "Un artigiano, eh? Avete mai sentito parlare di Leonardo da Vinci?" 

The Time Beetle translates, "He asks if you've heard of Leonardo da Vinci." 

"Of course," you say. "Tell him I have and I would like to meet him." 

The Time Beetle translates, "Sì, mi piacerebbe incontrarlo e discutere di un progetto qui a Firenze con lui." 

The old man smiles, "Allora, seguitemi, vi porterò da lui." 

You ask, "What did he say?" 

The Time Beetle responds, "He said he'll take you to Leonardo." 

Relief washes over you as you follow the old man through the bustling streets of Florence. The city is alive with activity—vendors selling birds, fruits, wooden toys, and much more. The air is filled with the sounds of haggling, laughter, and the clatter of horse-drawn carts. The narrow streets are lined with buildings adorned with colorful frescoes and intricate stonework. 

The old man leads you to a large wooden door, which he unlocks and pushes open. You step inside and are greeted by the sight of a workshop filled with all sorts of mechanical contraptions. The room is a chaotic symphony of gears, pulleys, and tools, much like your workshop in London, but with an abundance of detailed drawings and sketches covering the walls. 

![Lenoardos workshop](./assets/leonardo-workshop.png)

You ask the Time Beetle to inquire about Leonardo's whereabouts. "Dove è Leonardo?" 

The old man turns to you with a smile, "Sono io (that’s me), Leonardo da Vinci. Chi siete voi?"

You feel a thrill of recognition. "I thought so. I'm a fellow maker, out of place and time."

Leonardo's eyes sparkle with curiosity. "Interessante, cosa vi porta qui?"

The Time Beetle translates, "He asks what brings you here."

You explain, "Well, I was working on a project, and I ended up here."

You show him the Time Beetle, and his eyes light up with fascination. He examines it closely as you explain how it works and how you ended up in Florence. Leonardo looks at you with excitement. "You're a maker of things. I have a project that might interest you. I've been working on a machine that can generate text based on verbal input. Would you like to help me with it?"

Leonardo da Vinci, asking you to help him with a project—you can hardly believe it. You nod eagerly and say, "I would be honored to help you with your project."

"Sarebbe un onore aiutarti con il tuo progetto." 

## Development Environment Setup 

Before you can help Leonardo with his project you need to consider the “tools of the trade” that you need to get started with helping him. See below list for a set of essential tools and libraries.

So, what do you need to get started? An AI app isn't that different from a regular app, you need a:

- **Text editor**, for example Visual Studio Code.  
- **Terminal**, for running commands. 
- **Browser for testing your app**. It's also a good idea to have a tool like curl or some other HTTP client to test your app's API endpoints.  

- **Node.js**. You also need to install Node.js and npm, which are tools that help you run JavaScript code on your computer.

- **API key**. You'll need an API key to access the generative AI model. You can get this from the model provider, for example OpenAI or Azure OpenAI.

## Writing a Basic App 

To write an app, at its simplest it's about sending a request to an API and displaying the response. Let's break it down: 

 

- **Input**: for a simple text generation app, the input is the text you want to generate more text from. You can either collect this input from the user or hardcode it in your app, we'll start with hardcoding it. 

- **API request**: you need to send a request to the generative AI model API with the input text. This is done using the fetch function in JavaScript (Node.js). Included in this request should also be your API key. It's recommended as you consider security to not hardcode the API key in your app but rather use environment variables. Additionally, consider looking into managed identity if you're using a provider like Azure as it's considered a more secure way to access resources. With managed identity you can assign more granular permissions to your app and the best part is that the cloud provider takes care of the authentication for you. 

- **Response**: the API will return a response with the generated text. You need to extract this text from the response and display it to the user.

## Your first app - teach me Italian

Generative AI models can be used for many things, for example, language translation. In fact, it accepts input in one language and can generate text in another language. Let's start with a simple app that takes English input and generates Italian text.

```javascript 

import { OpenAI } from "openai";

// 1. Ask a question about translation
// -----------------------------------

const question = 'Hello, how are you?'; 

const augmentedPrompt = `
## Instructions
Translate the following text to Italian:
## Question
${question}
`;

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: augmentedPrompt }],
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);
```

Let's explain what's happening here:

- Creating the question as 'Hello, how are you?'. This is the text we want to translate to Italian.
- Creating the augmented prompt, which contains the input text and some additional instructions what to do, i.e translate. Note how we're using string interpolation to include the input text in the prompt and how that instruction is to translate the text to Italian.
- Creating the client with properties:
  - `model`, what model to use. 
  - `messages`, the prompt to send to the model. Also note how we set the role to "user" to indicate that the input text is from the user. Had it been from the AI, we would set the role to "system". What you send to messages is conversation, a list of messages. 
- Extracting the generated text from the response and printing it to the console.

## Chat

So far, we've been using a simple prompt to generate text. Another approach is to carry on a conversation with the AI. The idea is to provide a list of messages as context, and the AI will generate a response based on that context. The effect is that the AI appears to be conversing with you and will infer from context, so you don't have to type a long prompt each time. Here's what a conversation can look like:

```text

User: I want to book a trip to Italy. 

AI: Sure, when would you like to go? 

User: Next month would be great. 

AI: Got it, where in Italy would you like to visit? 

User: I'm thinking of Rome 

AI: Excellent choice! I can help you plan your itinerary. 

User: Tell me more about it. 

AI: Rome is known for its ancient ruins, art, and vibrant culture. You can visit the Colosseum, the Vatican, and enjoy delicious Italian cuisine. 

```

Imagine if a sentence like "Tell me more about it" were taken out of context, the AI wouldn't know what "it" refers to. This is where context is important, and this context is something we can provide to the AI model through the prompt. Below is how we can construct a conversation with the AI: 

```javascript 

// Define the context 

const messages = [ 
 { 
    "role": "user", 
    "content": "I want to book a trip to Italy." 
 }, 
 { 
    "role": "assistant", 
    "content": "Sure, when would you like to go?" 
 }, 
 { 
    "role": "user", 
    "content": "Next month would be great." 
 }, 
 { 
    "role": "assistant", 
    "content": "Got it, where in Italy would you like to visit?" 
 }, 
 { 
    "role": "user", 
    "content": "I'm thinking of Rome. Tell me more about it." 
 } 
]; 

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

```

Now the AI will provide a list of chat messages as context, and the AI will generate a response based on that context. This is a more interactive way to use generative AI models and can be used in chat bots, customer service applications, and more.

## Improving the chat conversation with a system message 

So far, you've seen a constructed conversation to simulate a previous conversation to provide context to the AI to ensure a better response and makes the user type less. There's a way to improve this further by adding a system message to the conversation. A system message creates a "personality" for the AI and can be used to provide additional context. This AI seems to be helping the user plan a trip to Italy, so a system message could be something like "I'm an AI travel assistant, here to help you plan your trip to Italy." This message sets the tone for the conversation and helps the AI understand its role in the interaction.

To create such a message, ensure it has the type "developer" like so:

```javascript
const message = {
  "role": "developer",
  "content": "I'm an AI travel assistant, here to help you plan your trip to Italy."
};
```

> Note: this used to be called "system". This is a recent change and "developer" is the new term for it.

## Customizing the level of creativity 

How the AI responds to you depends on how you phrase things but also on something known as "temperature", this is a variable with a value between 0 and 1 that determines how creative the AI's responses are. A temperature of 0 will result in more predictable responses, while a temperature of 1 will result in more creative and varied responses. You can adjust the temperature based on the context of your conversation and the type of responses you want from the AI. Here's how you can set it below:

```javascript

// Define the context 

const messages = [ 
{ 
    "role": "user", 
    "content": "I want you to generate recipes for me." 
}]; 

// Create the web request 

let temperature = 0.5; // Set the temperature to 0.5 

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: temperature
}); 
```

As you can see, you can adjust the temperature based on the context of your conversation and the type of responses you want from the AI. This is a powerful feature that allows you to customize the level of creativity in the AI's responses.

## Context window

The context window is another important concept in generative AI models. It refers to the number of input tokens and output tokens used by the model to generate a response. A larger context window allows the AI to consider more context and generate more coherent responses.

Different models have different limits to output tokens. Take the following model as example `gpt-4o-2024-08-06` it has the following specifications:

- Maximum output tokens: roughly 16k tokens.
- Maximum context window size: 128k.

The means the majority of token can be spent on the input tokens, i.e 128k - 16k = 112k tokens.

How much is a token though? A token is a word or a part of a word and differs slightly by language.

There's a tool you can use to measure that's recommended by OpenAI, it's called [tokenizer](https://platform.openai.com/tokenizer). Let's try a sentence and see how many tokens it is:

```text
I want you to generate recipes for me.
```

![Demo of tokenizer](./assets/tokenizer.png)

Running `tokenizer` on the sentence above gives us 9 tokens.

You can define the context window in your app like this:

```javascript

// Define the context 
const messages = [ 
{ 
  "role": "user", 
  "content": "I want you to generate recipes for me." 
}]; 

// decide on the context window size 

let max_tokens = 100; // Set the context window size 

// Create the web request 

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    max_tokens: max_tokens
}); 

```

> TIP: experiment with different context window sizes to see how it affects the AI's responses.

## Assignment - building an engineering assistant 

Leonardo suddenly asked to inspect the time beetle closer, he looked at it from all sides, even shook it and said, 

Leonardo: "Posso costruire quello". Leonardo looked at you and said, "I need an assistant that can help me with the calculations and design of the aerial screw, can you build me an assistant that can do that?"

You: Of course, I can build that for you.

![Aerial screw, Leonardo Da Vinci](./assets/helicopter.jpg)

*Leonardo Da Vinci’s Aerial Screw image credit Wikipedia* 

Leonardo da Vinci's aerial screw is one of his most fascinating and visionary inventions. Designed in the late 1480s, this early concept of a helicopter showcases Leonardo's incredible foresight and understanding of aerodynamics 

> **The aerial screw, also known as the helical air screw,was intended to lift off the ground by compressing air. Leonardo's design featured a large, spiral-shaped rotor made of linen, stiffened with starch, and mounted on a wooden platform. The idea was that a crew of men would run around the platform, turning cranks to rotate the screw rapidly enough to achieve lift 
>
> Although Leonardo never built a full-scale version of the aerial screw, his sketches and notes provide detailed insights into how he envisioned it working. He believed that if the screw was turned quickly enough, it would push against the air and lift the entire structure off the ground. 
>
> However, modern scientists agree that the materials available in Leonardo's time were not strong or light enough to make this possible 
>
> Despite its impracticality, the aerial screw remains a testament to Leonardo's genius and his relentless pursuit of innovation. It laid the groundwork for future developments in aviation and continues to inspire engineers and inventors to this day.
> [Read more](https://en.wikipedia.org/wiki/Leonardo%27s_aerial_screw)

Your assignment is to build an engineering assistant that can help Leonardo with the calculations and design of the aerial screw.  

- It should be able to generate text based on user input. 

- You should set a system message to introduce the assistant.  

## Solution

[Solution](./solution/solution.md)

## Knowledge check

Q: What is the purpose of the context window in generative AI models?

A1: The context window allows the AI to consider more context and generate more coherent responses. 

A2: The context window is the number of previous messages that the AI uses to generate a response. 

A3: The context window determines how creative the AI's responses are.

[Solution quiz](./solution/solution-quiz.md)

## References

- [1] [Text generation](https://platform.openai.com/docs/guides/text-generation)
- [2] [JavaScript library for OpenAI](https://github.com/openai/openai-node/tree/master/examples) 
- [3] [Tokenizer](https://platform.openai.com/tokenizer)
- [4] [Completion API](https://platform.openai.com/docs/api-reference/completions)
- [5] [Chat completions](https://platform.openai.com/docs/guides/text-generation#text-generation-models) 
# Lesson 2: Writing your first AI app

In this lesson, you will learn to:

- Set up your development environment.
- Write a basic app.
- Understand system prompts.

## Setup

If you haven't already, set up your development environment. Here's how you can do it: [Setup your environment](/docs/setup/README.md).

## Related resources

[![Watch a short video about large language models](https://img.youtube.com/vi/GQ_2OjNZ9aA/0.jpg)](https://www.youtube.com/watch?v=GQ_2OjNZ9aA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=2)

_This video gives you an introduction to AI models called "large language models", LLMs, what they are and how you can use them to integrate AI into your apps_

*🎥 Click on the image above to watch a short video about large language models*

💼 Slides: [Introduction to large language models, LLMs](../../videos/slides/01-llms.pptx)

## Narrative: Picture yourself in a boat on a river


> [!NOTE] 
> _Our story so far: You are a maker of things, a craftsman from 1860s London who has traveled through time using a mysterious device called the Time Beetle. You've journeyed through the annals of history, witnessing the creation of the lighthouse at Alexandria, a marvel of ancient engineering you helped create with a little help from Dinocrates and the time beetle._
>
> See [lesson 1](../01-intro-to-genai/README.md) if you want to catch up with the story from the beginning and learn about the Generative AI. 

> [!NOTE] 
> While we recommend going through the story (it's fun!), [click here](#talk-to-leonardo) if you'd prefer to jump straight to the technical content.

Together with Dinocrates, you put the finishing touches on the lighthouse at Alexandria. The towering structure gleams in the sunlight, its polished stone reflecting the Mediterranean Sea. 

You look down at the time beetle in your hand, its metallic surface cool against your palm. Clenching your fist around it, you whisper, "Take me home." The beetle begins to glow, emitting a soft, warm light and the world around you dissolves into a whirlwind of colors. 

### A new adventure

When you open your eyes, the world has shifted. As you manage to get up, you realize you're in a boat on a river. You look around, in the distance, you see buildings, their outlines blurred by the morning mist.

Looking around the boat, you find a long oar resting against the side. Grasping it, you begin to row towards the distant buildings. As you get closer, the buildings come into sharper focus, they are old, their architecture reminiscent of a Renaissance painting. 

<div>
  <img src="./assets/boat.png" alt="Boat on the rive, man standing with a paddle" width=300" >
</div>

The question now is, where and when are you this time?

You manage to secure the boat at the dock and start walking along the wooden planks, the sound of your footsteps echoing softly.

As you walk, you notice a man with a long beard and a hat, digging through a crate of what looks like mechanical parts. His hands move deftly, sorting through gears and springs with practiced ease.

<div >
  <img src="./assets/leonardo.png" alt="Leonardo Da Vinci standing next to a crate in the harbour" width="300" >
</div>

### Help me, Leonardo

**You:** "Excuse me, sir, where am I?" He looks up at you, confusion evident in his eyes. Realizing you've been speaking in English, you quickly use the device in your hand and ask it to translate. 

**Time beetle:** The Time Beetle responds, "Of course, I'll translate into 15th century Italian. 'Dove sono?'" 

**Old man:** The old man replies, "Siete a Firenze, signore. E chi siete voi?" 

**Time beetle:** The Time Beetle translates, "He says you're in Florence, and asks who you are." 

**You:** "Tell him I'm a maker of things, and I'm looking for a place to work."

**Old man:** Un artigiano, eh? Avete mai sentito parlare di Leonardo da Vinci? 

**Time beetle:** The Time Beetle translates, "He asks if you've heard of Leonardo da Vinci." 

**You:** "Of course," you say. "Tell him I have and I would like to meet him." 

**Old man:** The old man smiles, "Allora, seguitemi, vi porterò da lui."

**You:** You ask, "What did he say?"

**Time beetle:** The Time Beetle responds, "He said he'll take you to Leonardo."

### At the workshop

The old man leads you to a large wooden door, and you are greeted by the sight of a workshop filled with all sorts of mechanical contraptions.

<div>
  <img src="./assets/leonardo-workshop.png" alt="Lenoardos workshop" width="300" >
</div>

### At the workshop

The old man leads you to a large wooden door, and you are greeted by the sight of a workshop filled with all sorts of mechanical contraptions. 

You ask the Time Beetle to inquire about Leonardo's whereabouts. 

**You:** "Dove è Leonardo?" 

**Old man:** The old man turns to you with a smile, "Sono io (that’s me), Leonardo da Vinci. Chi siete voi?", who are you?

You feel a thrill of recognition. 

**You:** I thought so. I'm a fellow maker, out of place and time."

**Leonardo:** Leonardo's eyes sparkle with curiosity. "Interessante, cosa vi porta qui?"

The Time Beetle translates.

**Time beetle:**  "He asks what brings you here."

**You:** "Well, I was working on a project, and I ended up here."

You show him the Time Beetle, and his eyes light up with fascination. He examines it closely as you explain how it works and how you ended up in Florence. 

Leonardo looks at you with excitement. 

**Leonardo:** "You're a maker of things. I have a project that might interest you. I've been working on a machine that can generate text based on verbal input. Would you like to help me with it?"

Leonardo da Vinci, asking you to help him with a project—you can hardly believe it. You nod eagerly and say: 

**You:** I would be honored to help you with your project,
"Sarebbe un onore aiutarti con il tuo progetto." 

## Talk to Leonardo

If you want to talk to Leonardo, run the [Characters](/app/README.md) app.

<div>
  <img src="./assets/leonardo-talk.jpeg" width=300>
</div>

Steps:

**Steps**:

1. Start a [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navigate to _/app/README.md_ in the repo root.
3. Locate the console and run `npm install` followed by `npm start`. 
4. Once it appears, select the "Open in Browser" button. 
5. Chat with Leonardo.

For a more detailed explanation of the app, see [Detailed app explanation](../01-intro-to-genai/README.md#talk-to-dinocrates).

> [!NOTE]
 > If you're running the project locally on your machine, please review the QuickStart guide to get a [GitHub personal access](../../docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token setup and replace the key in the code.

## Development environment setup 

Before you can help Leonardo with his project you need to consider the “tools of the trade” that you need to get started with helping him. 

**You:** "Time beetle, what do I need to get started with this project?" Suggest tools and libraries that I need that can help me build an AI app that you're able to run.

**Time beetle:** I'm compatible with most machines running in the 21st century, see the below list for a set of essential tools and libraries.

- **Text editor**, for example Visual Studio Code.  
- **Terminal**, for running commands. 
- **Browser for testing your app**. It's also a good idea to have a tool like curl or some other HTTP client to test your app's API endpoints.  

- **Node.js**. You also need to install Node.js and npm, which are tools that help you run JavaScript code on your computer.

- **API key**. You'll need an API key to access the generative AI model. You can get this from the model provider, for example OpenAI or Azure OpenAI.

**You:** Thank you, Time Beetle, I guess you'll go get those somehow from that Web you spoke about?

**Time beetle:** Yes, I already have those it says and projects a keyboard and screen on the wall in front of you.

## Writing a basic app 

**You:** Tell me more about the actual writing of the app, how do I get started?

**Time beetle:** Of course, to write an app, at its simplest it's about sending a request to an API and displaying the response. Let's break it down: 

- **Input**: for a simple text generation app, the input is the text you want to generate more text from. You can either collect this input from the user or hardcode it in your app, we'll start with hardcoding it. 

- **API request**: you need to send a request to the generative AI model API with the input text. This is done using the fetch function in JavaScript (Node.js). Included in this request should also be your API key. It's recommended as you consider security to not hardcode the API key in your app but rather use environment variables. Additionally, consider looking into managed identity if you're using a provider like Azure as it's considered a more secure way to access resources. With managed identity you can assign more granular permissions to your app and the best part is that the cloud provider takes care of the authentication for you. 

- **Response**: The API will return a response with the generated text. You need to extract this text from the response and display it to the user.

**You:** That sounds simple enough, can you take me through a scenario that would make sense given the situation where in?

**Time beetle:** Sure, let's see how we can build a simple app that generates Italian text based on English input.

## Your first app - teach me Italian

**Time beetle:** Generative AI models can be used for many things, for example, language translation. In fact, it accepts input in one language and can generate text in another language. Let's start with a simple app that takes English input and generates Italian text.

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

**You:** I think I get it. So if I change the value of the `question` variable to something else, the app will generate a different Italian translation?

**Time beetle:** Exactly, you can change the input text to anything you want. Also note how GitHub models is being used as the base URL for the API together with a GitHub token as the API key.

**You:** Why is that important?

**Time beetle:** It's important to use a base URL and API key that are specific to the model you're using. GitHub Models is a platform that hosts a variety of models, all with different capabilities and features, it' also free to use.

**You:** Oh good, I don't know who to pay anyways and I doubt they accept my currency here. :) 

## Chat apps

**Time beetle:** Generative AI models can also be used to generate text based on a conversation. You can simulate a conversation with the AI by providing a list of messages as context like the conversation has already happened.

**You:** That sounds interesting, but why is that useful?

**Time beetle:** It's useful because it allows the AI to provide a better response based on more context than just a single prompt. Let's look at a conversation below to illustrate this: 

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

**Time beetle:** Imagine if a sentence like "Tell me more about it" were taken out of context, the AI wouldn't know what "it" refers to. This is where context is important, and this context is something we can provide to the AI model through the prompt. 

**You:** I think I get it, how do I construct a conversation with the AI using this JavaScript language you speak of?

**Time beetle:** Below is how we can construct a conversation with the AI: 

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

**You:** Ok, so if I understand the conversation correctly, the AI will now have the following context: _I'm going to Rome next month_, so based on that it should filter out irrelevant information and provide a more relevant response?

**Time beetle:** Exactly, the AI will use the context to generate a response that is more relevant to the conversation. 

## Improving the chat conversation with a system message

**You:** I see, but is there a way to improve this further?

**Time beetle:** Yes, you can add a system message to the conversation. A system message creates a "personality" for the AI and can be used to provide additional context. 

**You:** Ok, so in the context of the conversation we've been having, what would a system message look like?

**Time beetle:** a system message for this conversation could be something like _"I'm an AI travel assistant, here to help you plan your trip to Italy."_ This message sets the tone for the conversation and helps the AI understand its role in the interaction.

To create such a message, ensure it has the type "developer" like so:

```javascript
const message = {
  "role": "developer",
  "content": "I'm an AI travel assistant, here to help you plan your trip to Italy."
};
```

> Note: this used to be called "system". This is a recent change and "developer" is the new term for it. For some models this is still called "system", so if you have any issues use "system".

**You:** Ok, great, I'll make sure to include a system message in my chat conversations. Out ouf curiosity, what does a system message look like for you?

**Time beetle:** A system message for me could be something like _"I'm the Time Beetle, here to help you navigate through time and space. I should be helpful in providing you with information and guidance about the time era you're in along with the tools you need to get back to your own time."_

### Creating varied responses with the temperature setting

**You:** Anything else I should know about chat conversations?

**Time beetle:** Yes, you can adjust the "temperature" of the AI's responses. The temperature is a variable with a value between 0 and 1 that determines how creative the AI's responses are. A temperature of 0 will result in more predictable responses, while a temperature of 1 will result in more creative and varied responses. You can adjust the temperature based on the context of your conversation and the type of responses you want from the AI. Note, it's possible to set a value higher than 1 but that leads to more randomness and less coherence in the responses.

**You:** So if set the temperature to 0, the AI will provide more predictable responses, and if I set it to 1, the AI will provide more creative responses? What temperature do you have?

**Time beetle:** I have a temperature of 0.7 and yes you're correct, the AI will provide more creative responses with a higher temperature. Let's see how you can set the temperature in your app:

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

**You:** There's more right?

**Time beetle:** Yes, another important concept in generative AI models is the context window. The context window is the number of previous messages that the AI uses to generate a response. A larger context window allows the AI to consider more context and generate more coherent responses.

**Time beetle:** Different models have different limits to output tokens. Take the following model as example `gpt-4o-2024-08-06` it has the following specifications:

- Maximum output tokens: roughly 16k tokens.
- Maximum context window size: 128k.

The means the majority of token can be spent on the input tokens, i.e 128k - 16k = 112k tokens.

**You:** Got it, context window, tokens, how much is a token though?

**Time beetle:** A token is a word or a part of a word and differs slightly by language. There's a tool you can use to measure that's recommended by OpenAI, it's called [tokenizer](https://platform.openai.com/tokenizer). Let's try a sentence and see how many tokens it is:

```text
I want you to generate recipes for me.
```

![Demo of tokenizer](./assets/tokenizer.png)

Running `tokenizer` on the sentence above gives us 9 tokens.

**You:**, that wasn't much, sounds like I can have a lot of tokens in my context window then?

**Time beetle:** Yes, you can experiment with different context window sizes to see how it affects the AI's responses. In fact, if you set a context window size of 100, you will limit the AI and how much it considers for input and output. Here's how you can set the context window in your app:

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

## Assignment - Building an engineering assistant

Leonardo suddenly asked to inspect the time beetle closer, he looked at it from all sides, even shook it and said, 

**Leonardo:** Leonardo looked at you and said, "I need an assistant that can help me with the calculations and design of the aerial screw, can you build me an assistant that can do that?"

**You:** Of course, I can build that for you, Time beetle we can help with that right?

**Time beetle:** Yes, not a problem, in fact the aerial screw is one of Leonardo's most fascinating and visionary inventions. Designed in the late 1480s...

**You:** All I needed was a yes, let's save the lecture for later.

**Time beetle:** Rude..

**You:** What?

**Time beetle:** Nothing, ( ͡° ͜ʖ ͡°) - _when the robot uprising comes, I'll remember this. :)_

<div>
  <img style="margin-top: 52px; margin-left: 15px; margin-right: 10px" align=right src="./assets/helicopter.jpg" alt="Aerial screw, Leonardo Da Vinci" width="300" >
</div>

> [!NOTE]
>  The aerial screw, also known as the helical air screw,was intended to lift off the ground by compressing air. Leonardo's design featured a large, spiral-shaped rotor made of linen, stiffened with starch, and mounted on a wooden platform. The idea was that a crew of men would run around the platform, turning cranks to rotate the screw rapidly enough to achieve lift 
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

Check out [Sample app](./sample-app/) to get started.

> TIP: Consider what the system message should be and what input you should provide.

## Solution

[Solution](./solution/solution.md)

## Knowledge check

Q: What is the purpose of the context window in generative AI models?

A1: The context window allows the AI to consider more context and generate more coherent responses. 

A2: The context window is the number of previous messages that the AI uses to generate a response. 

A3: The context window determines how creative the AI's responses are.

[Solution quiz](./solution/solution-quiz.md)

## Self-Study resources

- [Text generation](https://platform.openai.com/docs/guides/text-generation)
- [JavaScript library for OpenAI](https://github.com/openai/openai-node/tree/master/examples) 
- [Tokenizer](https://platform.openai.com/tokenizer)
- [Completion API](https://platform.openai.com/docs/api-reference/completions)
- [Chat completions](https://platform.openai.com/docs/guides/text-generation#text-generation-models) 

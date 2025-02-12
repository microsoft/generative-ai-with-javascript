# Lesson 5: Talk to your data with Retrieval-Augmented Generation (RAG)

In this lesson, you will learn:

- The basics of Retrieval-Augmented Generation (RAG) and how it can be used to enhance the responses of generative AI models.
- How to integrate external data sources into your AI application.
- To leverage your data to improve the relevance and accuracy of the AI-generated content.
## Getting Started

Follow these steps to get started with this curriculum:

1. **Fork the Repository**: Select the _fork_ button in the upper right-hand corner of the repository or this link:
   [![Fork](https://img.shields.io/badge/Fork-Repository-blue)](https://github.com/microsoft/generative-ai-with-javascript/fork)

2. **Clone the Repository**: Select the _clone_ button in the upper right-hand corner of the repository or this link:
   [![Clone](https://img.shields.io/badge/Clone-Repository-blue)](https://github.com/microsoft/generative-ai-with-javascript.git)

3. **Open in GitHub Codespaces**: Starting this repository with GitHub Codespaces will enable you to run the same code as it uses [GitHub Models](https://docs.github.com/en/github-models).

    Click the button below to start a Codespace:
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=832180352)
## Related resources

[![Watch a short video about RAG](https://img.youtube.com/vi/xkFOmx5yxIA/0.jpg)](https://www.youtube.com/watch?v=xkFOmx5yxIA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=4)

*🎥 Click on the image above to watch a short video about RAG*

- **Slides:** [pptx](../../videos/slides/03-rag.pptx) / [pdf](../../videos/slides/pdf/03-rag.pdf)

## Narrative - Genesis

> *Our story so far. You are a mechanic from 1860s London. You were working on your automaton and received a letter from Charles Babbage that ended up taking you to a library where you picked up a time travel device. Throughout your travels in time you've ended up in Alexandria, Florence, where you met Leonardo Da Vinci. You also went to the Aztec empire and this is where the story continues...*

The air was thick with incense and the hum of Aztec chants. The temple walls, adorned with carvings of gods and warriors, captivated Leonardo da Vinci. "Incredibile, the craftsmanship is beyond anything I've seen," he murmured, tracing the lines with his fingers.

You held the time beetle device, its surface warm and pulsating with a faint blue glow. 

**You**: "Leonardo, it's time to go," you said, pressing the button. The device whirred to life, and a mechanical voice echoed, "It's time to go home, it's time for 'genesis'."

**Leonardo:** "Genesis? Che cosa significa?" Leonardo asked, confused. Before you could respond, the world dissolved into a blur of colors and sounds, the temple fading away as you were pulled through time

You land in garden, it's late at night with a thick fog and eerie lights are flickering in the distance. The mansion looms before you, its grandeur casting a shadow over the garden. Leonardo looked around, his eyes wide with wonder. "Mio Dio". 

![Old mansion shown in a deep fog](./assets/mansion.jpeg)

Leonardo looked around, his eyes wide with wonder. "Mio Dio, this place is beautiful!" although a bit, how do you say, spooky?.

### Running from the Dogs

![Running from the dogs](./assets/dogs.jpeg)

Before you could take in more of the scenery, a low growl caught your attention. A pack of large, imposing dogs bounded towards you, teeth bared. "Run!" you shouted, grabbing Leonardo's arm and sprinting towards the mansion.

You just reached the mansion's door, it swung open, and a pair of servants rushed out. They looked you up and down, their expressions a mix of curiosity and suspicion, then gestured for you to follow them.

Inside, the mansion was just as impressive as the garden, with ornate furnishings and gleaming chandeliers. The servants led you through grand halls, down a spiral staircase, and into a dimly lit basement. The air was damp and cool, with a faint scent of mildew. The only light came from a flickering candle, casting long shadows on the stone walls. The servants stopped in front of a heavy wooden door and knocked

The door creaked open, revealing Ada Lovelace, her eyes sparkling with curiosity. "Ah, it's about time you arrived," she said warmly. "We need you to run an errand."

Charles Babbage stepped forward, examining the time beetle in your hand. "This device is remarkable, but it's a bit faulty, isn't it? You've noticed, I'm sure."

![Ada Lovelace and Charles Babbage working on a device](./assets/ada.jpeg)

Leonardo nodded, "Sì, it has been acting strangely."

**Ada:** the device isn't quite ready, we need to give it more capabilities. We need to make it smarter, more aware of the world around it. The idea is for it to be able to retrieve information from different time periods and use it to generate responses that are accurate and relevant. Can you help with that?

**You:** of course, sounds like we need to _augment_ the responses of the device with data, makes sense.

**Ada:** Let's talk about a concept I'd like to call RAG, or Retrieval-Augmented Generation.

## Known Challenges with LLMs

**Ada**, to get us started, we need to talk more about the artificial intelligence we're going to use to power the device. We'll use so called AI models that when paired with a retrieval mechanism to data can improve the quality of the AI's responses.

However, there are some challenges we need to discuss before we talk about the specifics of RAG. Let's take a moment to discuss some of the known challenges. These models are trained on huge amounts of text data and can generate responses that are contextually relevant and grammatically correct. But, just like any data that you can find out there, the information generated by LLMs can sometimes be inaccurate, incomplete, or misleading, because of multiple factors:

- **Out of date sources:** The data used to train the model may be outdated and no longer accurate.
- **Wrong or inaccurate information:** The sources used to train the model may contain incorrect or misleading information, like fake news or biased opinions.
- **Non-authoritative sources:** The model may not be able to distinguish between authoritative and non-authoritative sources in its training data, leading to unreliable information.

This makes it difficult to tell if an information generated by an LLM is correct or not. This is where RAG comes in.

**You:** So I need to make sure the device can provide accurate information, even when it's not sure about the answer?

**Ada:** Yes, that's the idea. By combining the strengths of retrieval-based methods and generative models, we get a better AI system.

## RAG Core Concepts

**Ada:** Ah yes, time to discuss RAG specifically. Let's start with some basics:

Retrieval-Augmented generation (RAG) is a powerful technique that combines the strengths of two different approaches in natural language processing: retrieval-based methods and generative models. This hybrid approach allows for the generation of responses that are both contextually relevant and rich in content, to help alleviate some of the known challenges with LLMs.

At its core, RAG involves two main components: a **retriever** and a **generator**.

- **The retriever:** it's responsible for finding relevant information from external data sources that can be used to enhance the AI-generated responses, like a search engine. This information can be in the form of text, images, or any other type of data that is relevant to the context of the conversation, although text is the most common type of data used.

- **The generator:** it takes the retrieved information and use it to generate a response that is contextually relevant and informative.

Here's a schema illustrating how a RAG system works:

![Schema of a RAG system](assets/rag.png)

1. **User input:** The user asks a question.
2. **Retriever:** The retriever component searches for relevant information using one or more knowledge bases.
3. **Augmented prompt:** The retrieved information is combined with the user question and context, to create an augmented prompt.
4. **Generator:** The LLM uses the augmented prompt to generate a response.

This combination allows for more precise and relevant answers, by using data that you provide instead of relying on the model’s training data.

**Ada:** Questions?

**You:** So the retriever finds the information and the generator uses it to generate a response?

**Ada:** Exactly, you're getting the hang of it.

## Integrating external data sources

**Ada:** Now that we've covered the basics of RAG, let's talk about how you can integrate external data sources into your AI application.

Integrating external data sources into your AI application can be done in a variety of ways, depending on the type of data you want to use and the complexity of the retrieval mechanism. Here are a few common methods:

- **APIs:** Many external data sources provide APIs that allow you to access their data programmatically. You can use these APIs to retrieve information in real-time and use it to enhance the AI-generated responses.

- **Databases:** If you have a large amount of data that you want to use for retrieval, you can store it in a database and query it as needed. This can be useful for structured data that needs to be accessed quickly.

Once you've settled on a method for integrating external data sources, you may also need to consider how to preprocess and format the data so that it can be easily used by the AI model. This can involve cleaning the data, converting it to a suitable format (such as plain text or Markdown), or splitting it into smaller chunks for easier retrieval.

> [!NOTE]
> When integrating external data sources into your AI application, it's important to consider the privacy and security implications of accessing and storing data. Make sure you have the necessary permissions and safeguards in place to protect the data and comply with any relevant regulations.

If you're using a database, you also want to think how you want to *search your data* to retrieve the most relevant information. This can be done using keyword search, full-text search, or more advanced techniques like semantic search or vector search that may need specific indexing. We'll cover advanced search techniques in a future lesson.

**You**: Can you explain terms like API and Databases in more 1860s terms?

**Ada**: Of course, an API is like a messenger that delivers a message from one place to another, and a database is like a library where you store all your books.

**You**: Ah, I see, that makes sense.

## Augmenting the prompt

**Ada:** Are you still with me? Good, let's move on to the next step, let's try improve the prompt our input to the AI model.

**Ada:** After you've implemented a way to retrieve information from your data sources, you can use this information to *augment the prompt* that you provide to the AI model. This can be done by adding the retrieved information to the input text that you pass to the model, along with additional context or instructions to help guide the generation process.

For example, if you're building an app to answer questions about cars, you could have a prompt like this:

```text

## Instructions
Answer questions about cars using only the sources below.
If there's not enough data in provided sources, say that you don't know.
Be brief and straight to the point.

## Sources
<insert the retrieved information here>

## Question
<insert the question here>
```

By providing the AI model with additional context and information, you can help guide the generation process and ensure that the responses are accurate and relevant to the topic at hand.

> [!TIP]
> Note this part of the prompt: `If there's not enough data in provided sources, say that you don't know.`. This is important to avoid the AI generating incorrect information when there's not enough data to provide a reliable answer. This technique is called an *escape hatch* and is a good practice to ensure the quality of the generated content.

With this part it's becoming more obvious how RAG can also be considered as an advanced form of *prompt engineering*.

### Code Example

**Ada:** Practice makes perfect, let's put our knowledge into work with an example. Let's now put this knowledge into practice by integrating a simple retrieval mechanism into a JavaScript application. We'll use a [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) file containing data about hybrid cars, and a simple search algorithm to find relevant information based on a user question.

```javascript
// This example demonstrates how to use the Retrieval Augmented Generation (RAG)
// to answer questions based on a hybrid car data set.
// The code below reads the CSV file, searches for matches to the user question,
// and then generates a response based on the information found.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import process from "node:process";
import fs from "node:fs";
import { OpenAI } from "openai";

// Change the current working directory to the directory of the script
const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

// 1. Ask a question about hybrid cars
// -----------------------------------

const question = `what's the fastest prius`;

// 2. Retriever component: search the data for relevant information
// ----------------------------------------------------------------

// Load CSV data as an array of objects
const rows = fs.readFileSync("./hybrid.csv", "utf8").split("\n");
const columns = rows[0].split(",");

// Search the data using a very naive search
const words = question
  .toLowerCase()
  .replaceAll(/[.?!()'":,]/g, "")
  .split(" ")
  .filter((word) => word.length > 2);
const matches = rows.slice(1).filter((row) => words.some((word) => row.toLowerCase().includes(word)));

// Format as a markdown table, since language models understand markdown
const table =
  `| ${columns.join(" | ")} |\n` +
  `|${columns.map(() => "---").join(" | ")}|\n` +
  matches.map((row) => `| ${row.replaceAll(",", " | ")} |\n`).join("");

console.log(`Found ${matches.length} matches:`);
console.log(table);

// 3. Context augmentation: create a combined prompt with the search results
// --------------------------------------------------------------------------

const augmentedPrompt = `
## Instructions
Answer questions about a time period or characters from said time period using only the sources below.
If there's not enough data in provided sources, say that you don't know.
Be brief and straight to the point.

## Sources
${table}

## Question
${question}
`;

// 4. Generator component: use the search results to generate a response
// ---------------------------------------------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

const chunks = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: augmentedPrompt }],
  stream: true,
});

console.log(`Answer for "${question}":`);

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0].delta.content ?? "");
}
```

> [!IMPORTANT]
> Follow [the dev setup guide](../../docs/dev-setup.md) to see how to setup your environment to run this code.

You can find this code in the `example/rag-cars.js` file along with the `hybrid.csv` file containing the data used for the retrieval.

**Ada:** Once you run this code, you should see the data found by in the CSV file by the retriever, formatted as a markdown table, followed by the AI-generated response to the question. Try changing the question to see how the retrieved data and response changes. You can also try asking questions about unrelated topics to see how the AI model handles them.

```text
Example of the output:

Found 1 matches:
| Person | Time Period | Description |
|---|---|---|
| Leonardo Da Vinci | 15th century | Italian polymath known for his art and inventions. |
| Isaac Newton | 17th century | English mathematician and physicist who formulated the laws of motion and universal gravitation. |
```

**You:** This is great, I can see how this can be useful for when using the device, or rather how it has been already or will be, time travel is confusing *sigh*.

**Ada:** There there, you're doing great. Let's move on to the next step.

## Assignment - helping Ada and Charles

Having learned about RAG, you're now ready to help Ada and Charles with their device. However, upon closer inspection the device is looking familiar. 

**You:** time beetle, do you know what this is?

**Beetle:** of course, it's me, or well it will be. Im missing a few parts though. Come to think of it, I'm missing a lot of parts, I don't even have a shell yet.

**Ada:** The time beetle is a device that allows you to travel through time and space, that is once we get it to work properly. As I was saying, we need to add a new feature to it, a retrieval-augmented generation (RAG) module. This will help us retrieve information and needed context from different time periods as you're traveling. We want to make sure we refer to all sorts of sources, Wikipedia is a good start.

**Marty** where's the flux capacitor?

**Ada:** Who said that? I'm hearing things now...

**You:** Ok, fine I'll help, or it seems I've already helped as I'm here using a functioning version of the device. What do you need me to do?

**Ada:** Here's an example code that retrieves text information about Tim Berners-Lee from Wikipedia, Tim will be very important one day.

```javascript
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee');
const data = await response.json();
const text = Object.values(data.query.pages)[0]?.extract;
```

**You:** I take it I'm not the only one who's been to the future?

**Ada:** ...



## Solution

[Solution](./solution/rag-www.js)

## Knowledge Check

**Question**: What is the role of the retriever in a RAG system?

- [ ] A. The retriever generates responses based on the input data.
- [ ] B. The retriever generates relevant information based on the model's training data.
- [ ] C. The retriever finds relevant information from external data sources.

[](./solution/solution-quiz.md)

## Self-Study Resources

- **Learn docs:** [Retrieval-Augmented Generation and Indexes](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
- **Sample apps**:
  * [Serverless AI Chat with RAG](https://github.com/Azure-Samples/serverless-chat-langchainjs/)
  * [Ask Youtube: A RAG-based Youtube Q&A API](https://github.com/Azure-Samples/langchainjs-quickstart-demo)
- **Full length workshop:** [Create your own ChatGPT with RAG](https://moaw.dev/workshop/gh:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md)

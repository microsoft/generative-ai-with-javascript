# What you need to know about LLMs

## Description

Learn the basics of Large Language Models (LLMs) before you start working with them! We'll explore what LLMs are, how they're created, and their practical applications. You'll learn about the different types of models, the concept of tokenization, the limits of LLMs and why Responsible AI is important.

Links:
- Intro to LLMs training: https://aka.ms/genai/llms
- Responsible AI training: https://aka.ms/genai/rai
- Azure OpenAI quickstart: https://aka.ms/ai/js/azure-quickstart

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #llm #openai

## Script

Hey everyone, in this session, we'll review the essential things that you need to know when you're working with LLMs.

First, what's an LLM? LLM stands for Large Language Model. It's a deep neural network that's trained on a huge amount of data that's able to perform various tasks using natural language. Its main capability is to recognize and generate text.

Next, how do you create an LLM? First, you take as many data as you can from various sources, from the web, a website like Wikipedia, from social networks, from books, from open source repositories, basically everything that you can find, and you feed it to the model. This is a very expensive task that costs a lot of money, and this is how you get what we call the fundamental model. Next, you can fine-tune the model using specialized domain-specific data, and you give it more weight. It's a cheaper task because you use less amount of data, but that's higher quality. You end up with a fine-tuned LLM that may be more useful for a specific use case. To improve the quality of the results, you reinforce the training by having humans ask questions and evaluate the results. This is a long and complicated process, but ultimately, this is what allows you to end up with an LLM that's better suited to follow instructions and basically gets the results that you want.

Now, from a practical standpoint, there are two model types. And just to set things straight, LLMs do not think. At their core, what they do is just text completion. So we send some text as the input for the model, and what you'll get as a result is the completion of the text, just like in a regular IDE when you try to get auto-completion. Let's see a little demo. So here, I'll be using GitHub Copilot as my LLM to test the text completion features. So let's say, for example, I'm setting a command in there that says "print hello to the console". The completion that I will get is what I expect, "console.log hello world".

Now, if I want to try something different and change the input to say, "print hello to a DOM element with the ID root". Now, the completion that I will get from the model is also what I expect, "document.element by ID ...". So yeah, just by changing the input text, I get a different completion.

Next, we also have chat models that are tuned to follow instructions. This is most likely what you've been more familiar with. So if I go back to VS Code, we can have an example with the Copilot chat window in there. This time, I can try to create something a bit more complicated. Let's say, for example, I want to create a function that prints hello to a DOM element with the ID root. And here, I get the function that I need as a result, along with some explanation. So I gave an instruction, and the chat model generated the answer for me.

Chat models integrate special tokens to mark the specific parts of the prompt, as you can see in there with the im_start and im_end tokens. But what's a token?

LLM don't work directly using the text that you provide. Instead, what they use is called tokens. This means that before being able to understand your request, there's a processing step that transforms the input text into tokens, and we call that tokenization. Here, you can see how a piece of code is split into multiple tokens. So okay, the text is split into small pieces, but why do we do that?

Tokens are in fact just numbers, and that's great because AI models can only work with numbers. For example, the word function corresponds to this number here. And in the end, every AI model is trained on specific vocabulary of tokens that they use to understand the input text, but also to generate the output.

Now, let's talk a bit about the limits. LLMs currently only have a limited amount of tokens that you can use to define the context of your prompts. This is basically how much text that you can use as input. AI models commonly use 2,000 to 4,000 tokens as their context window, which fits about 3,000 words or said otherwise, it's about six pages of documents. We also have newer models that can use more than 100,000 tokens, which means you can fit entire books in there. But you have to keep in mind that the less context that you use, the more attention that you will get, which means you will get more accuracy with your results.

Another limit that you have to keep in mind is while these AI models are powerful to achieve many tasks, just like humans, they have biases. Statistical biases, to be precise. Because the models have been trained on content created by humans, they can sometimes exhibit the same biases as for the training content. And that's also why you should not rely on LLMs for any critical judgment or decision without taking some mitigation measures.

It's also why at Microsoft, we've been deeply committed to responsible AI. Responsible AI is a framework for building AI systems according to six principles. Fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. For Microsoft, these principles are the cornerstone of a responsible and trustworthy approach to AI, especially as intelligent technology becomes more and more present in products and services that people use every day. And this is not only for us. It's something that you also have to keep in mind when using AI models to build your own applications.

In the next session, we'll talk about essential prompt engineering techniques that will help you get the best out of AI models.

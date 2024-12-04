# Speed up your AI development with LangChain.js

## Description

Discover how the open-source framework LangChain.js can help you kickstart your AI development with JavaScript. We'll cover the core concepts and explore the components you can use to build your AI applications. Watch as we build an API to pull insights from YouTube videos using GPT-4, and learn how to scale your projects seamlessly.

Links:
- LangChain.js docs: https://js.langchain.com
- Ask YouTube API demo: https://aka.ms/ai/js/ask-yt
- Create your AI chat with RAG workshop: https://aka.ms/ws/openai-rag-qdrant

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #langchain #openai

## Script

In this session, we'll see how you can speed up your AI development using the LangChain.js framework.

The generative AI field is evolving very fast, and there's still so much to explore. When things move fast like this, you need to be able to experiment and iterate quickly. First, to validate your ideas with a prototype, then to scale up to production if it works.

Now let me introduce you to LangChain.js, a JavaScript library for working with large language models. If the name sounds familiar, it's because it's the sister project of LangChain, which is made for Python, and it's one of the most popular open source projects in the AI community. It's a great tool for experimenting and building generative AI apps very quickly.

So, what's LangChain.js? It's an open source JavaScript library for working with NLMs. It provides high-level abstraction for all the components you might need when creating your AI application. And thanks to the compatibility layer, it makes it easy to swap components like models or vector databases, allowing you to quickly switch from local to cloud resources. It also gives you all the tools that you need to create complex workflows that use your own data, like RAG applications.

Now, let's take a look at some of the core concepts of the framework. LangChain includes helpers to create prompt templates. It allows you to inject user input and parameters or augment the context of your prompt dynamically. In this simple example, we have a chat prompt template to generate jokes on a specific topic. And when invoking the template, we can set which topic we want and the placeholder in the prompt will be updated. This is especially useful when you're building complex workflows where the prompt is augmented in different steps.

Now, speaking of workflows, LangChain was built to compose complex AI workflows made from multiple processing sequences. Here we're using a prompt template with a few components. Let's detail how it works. First, we define a type for the output object that we want. We initialize a chat model. Here we're using OpenAI's GPT-4o-mini. Next, we define our prompt template where we also ask the output format that we want. Then, we create a parser to transform JSON into an object conforming to the joke type that we define. And we define our workflow called a chain. We take our template, pipe it to the chat model to generate the response, and pipe the response to the output parser. Finally, we invoke our chain with our parameter and we'll get our object as a result.

LangChain provides many components that you can use to build your AI application, and we've already seen a few. We have chat models that provide a compatibility layer allowing you to switch between AI models from different providers easily. It makes it very easy to compare different models' results or to switch from local to cloud models. And it's the same for embeddings when you need to transform text into vectors. There are all sorts of document helpers to load data from various sources and formats like office documents, YouTube videos, web pages, GitHub repos, and more. You also have everything you need to process the text from these documents like splitting it into smaller pieces or automatically tagging the content to add metadata.

Then we have the stores and retrievers. Vector stores allow you to store documents and perform vector searches, while the regular store is used as a memory to save your chat sessions. Retrievers can be used to load documents from various sources, including a vector store to implement the rack pattern. And finally, we have tools which are functions that can be called by agents to perform various tasks like generating an image, executing code, creating an API, and more.

Let's see a practical example of how you can use LangChain.js to quickly create an application prototype that works locally first and then deploy it to Azure. For this demo, I wanted to build an API where I can send a link to a YouTube video and ask a question so I can get an answer without having to watch the video. Let's see how we implemented that with LangChain.js.

So first, because we're working on a prototype, we'll just hard code the YouTube video URL here and the question. This video was the last Microsoft Ignite keynote, which was about an hour long. I would like to get an answer to a simple question. What were the news about GPT-4 models that were announced during this video? So let's see how to implement our prototype.

First, we'll use the YouTube loader component to load the transcript of the video. We specify that we want it in English. Once we've loaded the text from the YouTube video, we'll use the recursive character text splitter component to split this huge amount of text. Remember, it's more than one hour of video. That means we have a lot of text. We want to split it into smaller pieces of text so the right process that we implement will be able to more accurately process the content that it needs to answer the question. Here, we use chunks of 1,000 and a half characters with some overlap. We run the splitter on the raw text to get our set of documents.

Next, we initialize the model and database. Here I'm using Ollama with local models that I'm running on my local machine. So I'm using this very small embedding model to convert the text into vectors and I'm using the Llama3 model to generate the answer. For the vector store, I'm using this local store. Next, to create my knowledge base, I can do that in one simple call on my vector store. Add documents. What it will do behind the scenes is for every piece of text that we generated above, we will create a vector and store the vector along with the text into our vector store.

Next, we create our processing chain. Here we have our template first: Answer the user's question using only the sources below. We put a context placeholder where we will inject the result from our vector search, and then we inject the human question here in the input placeholder. Next, we create a retriever from our vector store so we're able to search for matching documents. We implement the right chain using a LangChain component where we simply give in our prompt and the model we want to use to generate the answer. Finally, we invoke our chain by passing in our user question and the documents, invoking the retriever to perform a vector search that will return the best matching documents that might be able to help answer that question. Finally, we just print the result to the console.

So let's see how it works. Now I get the answer to my question, what are the news about GPT-4 models? According to the text, there is an announcement about GPT-4 Turbo model being available in Azure OpenAI service. Additionally, there's GPT-4 Turbo with Vision, allowing prompts with video images. It's the same price as OpenAI. It's also mentioning that fine-tuning of GPT-4 in the OpenAI service will be introduced. So, yeah, that sounds about right.

Now the next thing is that I have a working prototype that works entirely locally. But what do I need to change if I want to take this prototype and make it a production application that will be able to run on Azure? Let's see the changes that are needed to the code.

First, we'll update the imports. Instead of the Ollama and local database, we'll be using Azure components. As for loading documents, nothing has to change. Next, we'll see what we have to change in the model initialization. Instead of Ollama embeddings, I want to be able to use Azure OpenAI embeddings. Same for the chat model, and again the same for the Azure AI Vector Store. We will be using Azure AI Search as our vector database. Before embedding the documents, since we are going to production, we'll just add a simple step to search if documents are already indexed in our database before running the process again. That sounds about right. I take the video ID from the YouTube URL and search if I already have some documents inside my database. If I don't have documents, I run the embedding process. Just a simple change.

Next, regarding running the chain, I don't have to change anything because of the LangChain abstraction layer. I can just swap in the components like I just did with the models and vector stores and everything else is basically the same. So now let's try running this again. Here I get my answer with slightly more details because it's using a GPT-4 turbo model to answer a question about GPT-4 turbo. We get more details about the introduction of GPT-4 turbo with some features about the pricing we've seen, GPT-4 turbo with vision, and fine-tuning. So basically the same answer with slightly different wording.

This time, I have code that is able to use Azure components, so the only thing I would need to do to be able to run this code on Azure is basically put all that code inside the serverless function so I can run it as an API. If you want to take a closer look at this demo, you'll find a link to the GitHub repo in the video description.

In the next session, we'll detail how you can install and use local AI models on your machine using Ollama like I just did in the demo.

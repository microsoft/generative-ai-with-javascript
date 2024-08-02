# Run AI models on your local machine with Ollama

## Description

Learn how to seamlessly integrate local AI models into your development workflow using Ollama. You'll see how to download, run, and interact with powerful AI models on your machine, and keep compatibility with OpenAI’s API. We'll explore the Phi-3 model family, and discover how you can use it to build prototypes and experiment with AI applications.

Links:
- Phi-3 cookbook: https://aka.ms/phi3/cookbook
- AI JavaScript playground: https://aka.ms/ai/js/play
- Ollama website: https://ollama.com

Watch this series' playlist: https://aka.ms/genai-js
All slides and code sample: https://aka.ms/genai-js/content

#ai #phi3 #openai

## Script

In this session, we'll see how you can download and use local AI models on your machine using Ollama. 

But first, why use local models at all? It allows you to experiment with AI and build prototypes of your application at no cost. Because everything runs locally on your machine and you don’t have to set up cloud resources and access, you can have a fast inner development loop. Additionally, since everything is local, you can develop without requiring an internet connection. It also makes testing your application easier and cheaper, especially when you have to evaluate your AI outputs against many different metrics.

Now, the question that usually comes next is, what are my options if I want a high-quality local model? We've released the Phi-3 model family, which is a series of small language models (SLM) that provides great performance, especially for their size. Tests show that their performance is on par with much larger models such as GPT-3.5. They include responsible AI safety alignment to prevent harmful content from being generated, and they’re also tuned to follow instructions, just like your regular chat models. In particular, the mini model version is especially interesting as it can run even on devices with moderate specs, like mobile devices. They are available on many platforms, but the easiest way to run Phi-3 is using Ollama.

So, what’s Ollama? Ollama is an open-source tool that uses the llama.cpp server under the hood, which is one of the most active inference servers in the open-source community. It allows you to run SLMs and LLMs on your local machine and is optimized for both CPUs and GPUs. You can use it to download models directly. It provides a library of quantized models, which are optimized versions of the models at the cost of some quality loss. This means you can choose your trade-off between speed and quality, depending on your needs. Finally, it comes with an OpenAI-compatible API, so it can work with existing applications and makes it easy to swap in the model you’re using when working locally or deploying to production.

Now let’s see how it works in practice. The first thing you want to do is go to the ollama.com website to download Ollama and install it on your machine. You can also have a look at the model library it provides. If you select a model, you can get more details about it and see all the versions that are available. 

One of the first things you might want to do after downloading and installing Ollama on your machine is to download a model. You can do that by running the command `ollama pull` followed by the model name. In our case, we’ll be using the Phi-3 model. You can also use the command `ollama list` to see all the models that you’ve installed and downloaded on your local machine.

Now, what can you do with Ollama? Maybe you want to run a UI to play with the model. By running this Docker command, it starts a UI on my local machine that shows Ollama as its backend to run a chatGPT-like interface. 

Going back to the browser, if I open localhost on port 3000, the first thing I’ll see is this web UI. So first, you have to create an account. You can say just about anything because it’s all local on your machine. So, let’s proceed. The first thing you need to do is pick a model. Let’s use Phi-3 to see what it can do. Then, let’s try one of the example prompts. For example, “Give me some ideas of what to do with my kid’s art.” Now, as you can see, I get an answer from the model, with everything, including the AI and the model, running fully locally on my machine.

Okay, this is great, but I’m a developer and I want to develop applications using that. So, let’s switch back to VS Code and play a bit with the HTTP API. 

First, Ollama provides an endpoint to generate text completions. For example, I can send in a prompt, choose the model, and specify a few options. Then, if I send in the request, I get a result. For instance, “Hello World” in Japanese.

Next, I have a more conventional chat completion API. Using something that looks like the OpenAI API, you can send your system prompt and your user prompt to get an answer right from the API. For instance, in French, you say “bonjour,” in Japanese “konnichiwa,” and so on.

You also have an API to generate embeddings. For this, you use a dedicated model to transform text into vectors. I can send a few texts, send them to the model, and get back the vectors as a result. For example, this is my first vector, and this is my second vector.

One of the best things about Ollama is that it also provides an API that's compatible with OpenAI. This means that using existing tools and SDKs, you can query Ollama just like you would with the OpenAI API. You can even set it to use JSON mode. You’ll see that I get an answer similar to the one you would get from the OpenAI API. This also means that you can use the regular OpenAI SDK to connect to Ollama, just like you would in your application. Here, I can set the base URL to my Ollama local server. The v1 is the OpenAI-compatible endpoint. I still need to provide an API key, even though it’s not used by Ollama. Then, I can use my familiar OpenAI SDK to create completions. 

So, let’s see some talk in pirate style. Let’s run this example. And yeah, here we get the answer.

In the next session, we’ll experiment a bit more with Ollama and the Phi-3 model using an online playground that you can use for free directly from your browser.

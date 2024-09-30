# Introduction to Azure AI Studio

## Description

Kickstart your GenAI journey with Azure AI Studio in this hands-on walkthrough! Learn how to organize projects with hubs, explore the model catalog, and deploy your first GPT model. Perfect for developers looking to integrate generative AI into their applications quickly and efficiently.

Links:
- Azure AI Studio: https://ai.azure.com
- Generative AI course: https://aka.ms/genai/beginners
- Azure OpenAI quickstart: https://aka.ms/ai/js/azure-quickstart

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #llm #javascript

## Script

If we think of generative AI with JavaScript as a journey or a trip into the world of building generative AI applications, I think the Azure AI Studio is a bit like the airport for that journey. It allows us to go to the places we really want to go, but without all the things that make airports not fun, like long lines and delays. Let's really get into this.

As an agenda for today's lesson, we're going to look at first how we organize things within the Azure AI Studio. This is called hubs and projects. Then we're going to explore the model catalog, where we keep all of the large and small language models available in the Azure AI Studio, and give you relevant information on how to work with them. After that, we’re going to deploy a model, test that model in the playground, and then lastly, explore some of the other tools within the Azure AI Studio that might be relevant to you as you start building. Let’s get into it!

I'll start by saying that we continue to improve the Azure AI Studio. If you're looking at the AI Studio now, it might look slightly different from what you see on your screen. But never fear! Many of the main concepts are going to be the same, though the UI may have been adjusted a little.

The first thing we’ll do when we enter the Azure AI Studio is check for recent projects. If this is your first time setting up, you might also need to set up a hub. To continue the airport analogy, think of a hub as an airport terminal where we can share different resources. In an airport, we have runways, gates, and things like that. A project is like a plane: it uses some of the shared resources, but it also has its own specific purpose.

The first thing we'll do is start a new project by clicking on the “New Project” button. You will see a project name, which is assigned by default. You can change it to anything you like; let’s call this one "JSGenAI." Then you’ll select a hub. Like I said, the hub is where you're sharing resources, even if you're working with other team members. You can have one hub to manage everything, while still having different projects that you're working on. If you ever get confused by this, there are tooltips to give you a better explanation. In this case, a hub is providing a hosting environment. You can also create a new hub right here on this page.

I'm going to go ahead and create a project here. What this process does is launch the various services needed for building with this application. I promised you no long wait times like at airports, but I’m actually going to cancel this because I already have a project running. Here is my project, and I can click on it to access details. I can also see the hub I’m working with, the resource group that’s attached to this project, as well as the subscriptions linked to the hub. This information is important for understanding how this project connects to the larger Azure resources we’re using.

The first thing we’ll do when building generative AI applications is choose a model. If I go to "Getting Started" and then to the model catalog, this is where you’ll find all the models available in Azure AI Studio. Right now, we have 1,757 models. If you check tomorrow, there might be more or fewer models because we continuously add models based on feedback and industry innovations. 

You might be wondering how to find the right model from so many options. I like to start by using the filters in the middle of the screen. We can filter models by collections, which are primarily the model providers—whether it’s the Azure OpenAI service, Microsoft research models, or smaller language models like Phi-3 and Phi-3.5. There are also meta models, such as those from the Llama family and Mistral models. You can select specific models by their provider or collection.

In addition, there are different deployment options within Azure AI Studio. You can choose between managed compute and serverless API options. The managed compute option has a hosted reference, while the serverless API operates on a pay-as-you-go billing model. Knowing these differences is important when selecting your models.

Another key filter is the inference task. Many models can perform multiple tasks like generating responses, but some are specialized. For example, if you’re building a chat-based application, you might look for models designed for chat completion. Or, for text generation tasks, you can filter accordingly. There are even models that specialize in embeddings, which are useful for tasks like retrieval-augmented generation (RAG) frameworks.

We won't go into too much detail about fine-tuning today, but that’s also an option. Fine-tuning involves training a model on specific tasks using large datasets that you provide.

For now, let’s go ahead and explore the Azure OpenAI Collections, and we’ll deploy a GPT-4o model. In the model catalog, you’ll see descriptions of each model. This is important if you’re unfamiliar with a model or need to understand what it does. You’ll also see information about version numbers and additional features. For example, some models offer a "JSON mode," where responses are always formatted in JSON, which can be useful if you’re integrating with applications.

We’ll go ahead and deploy the GPT-4o model. I already have one deployed, so it will add a prefix to distinguish this deployment. You’ll also see details like the version number, deployment type, and resource location, which is important for understanding where the model is hosted. For the deployment type, I’ll choose "Global Standard" which is recommended for development. You can customize these options if needed, but I’ll stick with the defaults for now. 

Once the model is deployed, we can start using it. You’ll have access to the API endpoint and key. But I prefer testing it in the playground, which is also within Azure AI Studio. Clicking on the playground brings us to the chat playground, where we can interact with the model in a chat context. 

In the chat playground, you can define the system message, which sets the rules for the application, and start chatting with the model. Since this is a multimodal model, I’ll attach an image to demonstrate its vision capabilities. The model will understand the image and explain it to me. For example, I can upload an image of some JavaScript code, and the model will not only identify the code but also explain it, which is great for learners.

This proves that the model is working. You can also view the code samples, like JSON and cURL examples, and use these for further development. 

That was a brief overview of how to deploy a model, choose it from the catalog, and test it out. There are many other tools in Azure AI Studio, such as Prompt Flow for managing the interaction between the model and your application, and tools for evaluation and fine-tuning. We’ll cover these in later lessons.

Good luck, and keep building!

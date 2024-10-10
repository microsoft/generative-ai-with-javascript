<div align="center">

<img src="./docs/images/logo.png" alt="" align="center" height="128" />

# Generative AI with JavaScript

[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/microsoft/generative-ai-with-javascript?hide_repo_select=true&ref=main&quickstart=true)
[![Watch the video series](https://img.shields.io/badge/YouTube-d95652.svg?style=flat-square&logo=youtube)](https://aka.ms/genai-js)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat-square&logo=javascript&logoColor=white)
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](LICENSE)

⭐ If you like this repo, star it on GitHub — it helps a lot!

[Overview](#overview) • [Videos](#videos) • [Quickstart](#quickstart) • [Tutorials](#tutorials) • [Code samples](#code-samples) • [Community](#community) • [More resources](#more-resources)

</div>

## Overview

The repository centralize all our content related to the *Generative AI with JavaScript* topic. You'll find code samples, tutorials as well all the resources from the video series, with best practices and tips to supercharge your AI skills. If you're a JavaScript developer looking to get started with AI, or if you already have some experience and want to learn more, you've come to the right place!

We cover the basics of generative AI and how to build AI applications using JavaScript, from local development to deployment on Azure, up to running and scaling your AI models. This is a living repository, so come back often to check for new content! ✨

[📺 Watch the video series](https://aka.ms/genai-js)

> [!IMPORTANT]
> All the content in this repository is open-source, so feel free to **reuse it, adapt it to make it your own, and share it with others!**

### How to use this repository?

You'll find here all everything associated with the video series, including slides, demos, scripts, as well as additional code samples, tutorials, and resources.
You can use it to follow along with the series, run the demos, replay the sessions or reuse the content in your own presentations. Once you've learned what you need, you can use the code samples and tutorials to kickstart your own AI applications.

It's organized as follows:
- [**Sessions**](sessions/): Contains the description, abstracts, resources links and scripts for each session.
- [**Slides**](slides/): Contains the slides for each session.
- [**Demos**](demos/): Contains the demos associated with each session.
- [**Tutorials**](#tutorials): Contains hands-on tutorials that you can follow to learn more about AI and JavaScript.
- [**Code samples**](#code-samples): Contains code samples that you can use as a starting point for your own projects.
- [**Community**](#community): How to join the Azure AI community on Discord.

## Videos series

| # | Session | Description | Slides | Demo | Script | Video |
|---|---------|-------------|--------|------|--------|-------|
| 0 | Series introduction | Introduces the series and its content. | [pptx](slides/00-intro.pptx) / [pdf](slides/pdf/00-intro.pdf) | - | [Script](sessions/00-intro.md) |  |
| 1 | What you need to know about LLMs | Explores what are LLMs, how they're trained, how they work and their limits. | [pptx](slides/01-llms.pptx) / [pdf](slides/pdf/01-llms.pdf) | [Demo](demos/01-llms/) | [Script](sessions/01-llms.md) |  |
| 2 | Essential prompt engineering techniques | Practical prompt engineering techniques to get the best out of AI models. | [pptx](slides/02-prompt-engineering.pptx) / [pdf](slides/pdf/02-prompt-engineering.pdf) | [Demo](demos/02-prompt-engineering/) | [Script](sessions/02-prompt-engineering.md) |  |
| 3 | Improve AI accuracy and reliability with RAG | Introduces Retrieval-Augmented Generation, to use AI with your own data. | [pptx](slides/03-rag.pptx) / [pdf](slides/pdf/03-rag.pdf) | [Demo](demos/03-rag/) | [Script](sessions/03-rag.md) |  |
| 4 | Speed up your AI development with LangChain.js | Covers LangChain.js framework core concepts, and how to use it to accelerate AI developments. | [pptx](slides/04-langchainjs.pptx) / [pdf](slides/pdf/04-langchainjs.pdf) | [Demo](demos/04-langchainjs/) | [Script](sessions/04-langchainjs.md) |  |
| 5 | Run AI models on your local machine with Ollama | Shows how to integrate local AI models into your development workflow. | [pptx](slides/05-local-models.pptx) / [pdf](slides/pdf/05-local-models.pdf) | [Demo](demos/05-local-models/) | [Script](sessions/05-local-models.md) |  |
| 6 | Get started with AI for free using Phi-3 | Experiments with Ollama and Phi-3 model directly from your browser. | [pptx](slides/06-playground.pptx) / [pdf](slides/pdf/06-playground.pdf) | [Demo](demos/06-playground/) | [Script](sessions/06-playground.md) |  |
| 7 | Introduction to Azure AI Studio | Kickstart your journey with Azure AI Studio. | [pptx](slides/07-ai-studio.pptx) / [pdf](slides/pdf/07-ai-studio.pdf) | [Demo](demos/07-ai-studio/) | [Script](sessions/07-ai-studio.md) |  |
| 8 | Building Generative AI Apps with Azure Cosmos DB | Build generative AI apps with Azure Cosmos DB and vector search. | [pptx](slides/08-cosmos-db.pptx) / [pdf](slides/pdf/08-cosmos-db.pdf) | [Demo](demos/08-cosmos-db/) | [Script](sessions/08-cosmos-db.md) |  |
| 9 | Azure tools & services for hosting and storing AI apps | Build, deploy, and scale AI applications using Azure tools. | [pptx](slides/08-azure-tools.pptx) / [pdf](slides/pdf/08-azure-tools.pdf) | - | [Script](sessions/08-azure-tools.md) |  |
| 10 | Streaming Generative AI output with the AI Chat Protocol | Integrate streaming easily into your apps with the AI Chat Protocol. | [pptx](slides/10-chat-protocol.pptx) / [pdf](slides/pdf/10-chat-protocol.pdf) | [Demo](demos/10-chat-protocol/) | [Script](sessions/10-chat-protocol.md) |  |

New segments will be added to the series over time, so stay tuned!

### Run the demos

Demos are located in the [demo/](demos/) folder and organized by sessions. Each session has a folder with a `readme.md` file that explains the demo, its prerequisites and how to run it.

## Quickstart

TODO

- Ollama
- GitHub Models
- Azure OpenAI

## Tutorials

| Name | Description | Duration | Level | Links |
| ---- | ----------- | -------- | ----- | ----- |
| Azure OpenAI RAG workshop - Qdrant version | Explore the fundamentals of custom ChatGPT experiences based on a corpus of documents. We will create a vector database and fill-in with data from PDF documents, and then build a chat website and API to be able to ask questions about information contained in these documents. | 3h | Beginner | [Tutorial](https://moaw.dev/workshop/gh:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md) / [Repo](https://github.com/Azure-Samples/azure-openai-rag-workshop) |
| Azure OpenAI RAG workshop - AI Search version | Explore the fundamentals of custom ChatGPT experiences based on a corpus of documents. We will create a vector database and fill-in with data from PDF documents, and then build a chat website and API to be able to ask questions about information contained in these documents. | 3h | Beginner | [Tutorial](https://moaw.dev/workshop/?src=gh:azure-samples/azure-openai-rag-workshop/docs/) / [Repo](https://github.com/Azure-Samples/azure-openai-rag-workshop) |
| Integrate OpenAI, Communication, and Organizational Data Features into a Line of Business App | This tutorial demonstrates how Azure OpenAI, Azure Communication Services, and Microsoft Graph/Microsoft Graph Toolkit can be integrated into a Line of Business (LOB) application to enhance user productivity, elevate the user experience, and take LOB apps to the next level | 3h | Beginner | [Tutorial](https://learn.microsoft.com/microsoft-cloud/dev/tutorials/openai-acs-msgraph) / [Repo](https://github.com/microsoft/MicrosoftCloud) |

## Code samples

| Name | Description | GitHub Repo | Technologies |
| ---- | ----------- | ----------- | ------------ |
| Serverless AI Chat with RAG using LangChain.js | This sample shows how to build a serverless AI chat experience with Retrieval-Augmented Generation using LangChain.js and Azure. |  [Repo](https://github.com/Azure-Samples/serverless-chat-langchainjs) | <sub>LangChain.js, Lit, Vite, Azure OpenAI, Azure Cosmos DB, Azure Blob Storage, Azure Functions, Azure Static Web Apps, AZD</sub> |
| Serverless Azure OpenAI Quick Start with LlamaIndex | This sample shows how to quickly get started with LlamaIndex.ai on Azure |  [Repo](https://github.com/Azure-Samples/llama-index-javascript) | <sub>LlamaIndex.ts, Next.js, Azure OpenAI, Azure Container Apps, Docker, AZD</sub> |
| Serverless Azure OpenAI Assistant Quick Start | Azure OpenAI Assistants allows you to create AI assistants tailored to your needs through custom instructions and augmented by advanced tools. |  [Repo](https://github.com/Azure-Samples/azure-openai-assistant-javascript) | <sub>HTML-CSS-JavaScript, Azure Static Web Apps, Azure Blob Storage, Azure Functions, Azure OpenAI, AZD</sub> |
| Serverless RAG application with LlamaIndex and code interpreter on Azure Container Apps | This is a LlamaIndex project using Next.js bootstrapped with create-llama. It uses Azure Container Apps as a serverless deployment platform. |  [Repo](https://github.com/Azure-Samples/llama-index-azure-code-interpreter) | <sub>Azure OpenAI, LlamaIndex, Azure Container Apps, Next.js, GitHub Actions, TypeScript, AZD</sub> |
| Azure OpenAI keyless deployment | Example Azure OpenAI deployment and RBAC role for your user account for keyless access. |  [Repo](https://github.com/Azure-Samples/azure-openai-keyless-js) | <sub>Azure OpenAI, AZD, JavaScript</sub> |
| Azure OpenAI secure UI starter | Reusable OpenAI secure UI and infrastructure for AI Chat with Azure. |  [Repo](https://github.com/Azure-Samples/openai-secure-ui-js) | <sub>Lit, Vite, Web Components, Azure OpenAI, Azure Blob Storage, Azure Functions, Azure Static Web Apps, AZD</sub> |
| Azure OpenAI with LangChain.js | Demonstrates how to use Azure OpenAI with LangChain.js. |  [Repo](https://github.com/Azure-Samples/openai-langchainjs) | <sub>LangChain.js, Azure OpenAI, TypeScript</sub> |
| Azure API Management with Azure Open AI | Demonstrates how to add Azure API Management on top of your Azure Open AI endpoints. |  [Repo](https://github.com/Azure-Samples/genai-gateway-apim) | <sub>Azure Open AI, Azure API Management, Express, Node.js, AZD</sub> |
| Ask YouTube: LangChain.js + Azure Quickstart | Build a generative AI application using LangChain.js from local to Azure. |  [Repo](https://github.com/Azure-Samples/langchainjs-quickstart-demo) | <sub>LangChain.js, Azure OpenAI, Azure AI Search, Azure Functions</sub> |
| Ollama JavaScript Playground | Generative AI playground using Ollama OpenAI API and JavaScript. Try AI models in your browser! |  [Repo](https://github.com/sinedied/ollama-javascript-playground/) | <sub>TypeScript, Ollama, Azure OpenAI, GitHub Codespaces</sub> |
| Copilot / Node.js + OpenAI Todo app | Discover how to use GitHub Copilot to quickly build a Node.js application with OpenAI and Azure. |  [Repo](https://github.com/Azure-Samples/copilot-openai-todo) | <sub>Azure OpenAI, Azure App Service, Azure CosmosDB, Express, TypeScript, TypeChat, GitHub Actions</sub> |
| ChatGPT + Enterprise data with Azure OpenAI and Azure AI Search | A TypeScript sample app for the Retrieval Augmented Generation pattern running on Azure. |  [Repo](https://github.com/Azure-Samples/azure-search-openai-javascript) | <sub>LangChain.js, Lit, Vite, Azure OpenAI, Azure Cosmos DB, Azure Blog Storage, Azure Container Apps, Azure Static Web Apps, Docker, AZD</sub> |
| Azure OpenAI Chat Frontend | The Chat App Protocol compliant user-interface building block for your chat-gpt like RAG pattern applications built with Azure OpenAI and Azure AI Search. |  [Repo](https://github.com/Azure-Samples/azure-openai-chat-frontend) | <sub>Chat Protocol, Lit, Azure Static Web Apps, AZD</sub> |
| Enterprise-grade Reference Architecture for JavaScript | Intelligent enterprise-grade reference architecture for JavaScript featuring OpenAI integration, Azure Developer CLI template, and Playwright tests. |  [Repo](https://github.com/Azure-Samples/contoso-real-estate) | <sub>Azure Container Apps, Azure Functions, Azure Cosmos DB, SWA, Fastify, Next.js, Angular, AZD</sub> |

## Community

**Join the Azure AI community on Discord: https://aka.ms/genai-discord**

If you're looking to connect with others, we have a community of AI enthusiasts, developers, and experts who are passionate about AI and are always willing to help. 

There's even a dedicated [#JavaScript channel](https://discordapp.com/channels/1113626258182504448/1237357005555892225) where you can ask questions, share your projects, and discuss your about your favorite topics.

## More resources

Here are some additional resources that you might find useful on your AI journey:

- Generative AI for Beginners: https://github.com/microsoft/generative-ai-for-beginners
- Phi-3 cookbook: https://aka.ms/phi3/cookbook

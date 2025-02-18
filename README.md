<div align="center">

<img src="./docs/images/logo.png" alt="" align="center" height="128" />

# Generative AI with JavaScript

This curriculum aims to take you through a series of lessons so that you can integrate Generative AI in your JavaScript apps. 

To make it a fun learning experience, we've added a narrative to each lesson. 
It's a time travelling adventure where you will encounter famous characters throughout history.

[![GitHub license](https://img.shields.io/github/license/microsoft/generative-ai-with-javascript.svg)](https://github.com/microsoft/generative-ai-with-javascript/blob/main/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/microsoft/generative-ai-with-javascript.svg)](https://github.com/microsoft/generative-ai-with-javascript/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/microsoft/generative-ai-with-javascript.svg)](https://github.com/microsoft/generative-ai-with-javascript/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/microsoft/generative-ai-with-javascript.svg)](https://github.com/microsoft/generative-ai-with-javascript/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![GitHub watchers](https://img.shields.io/github/watchers/microsoft/generative-ai-with-javascript.svg?style=social&label=Watch)](https://github.com/microsoft/generative-ai-with-javascript/watchers/)
[![GitHub forks](https://img.shields.io/github/forks/microsoft/generative-ai-with-javascript.svg?style=social&label=Fork)](https://github.com/microsoft/generative-ai-with-javascript/network/)
[![GitHub stars](https://img.shields.io/github/stars/microsoft/generative-ai-with-javascript.svg?style=social&label=Star)](https://github.com/microsoft/generative-ai-with-javascript/stargazers/)


⭐ If you like this repo, star it on GitHub — it helps a lot!

[Overview](#overview) • [Quickstart](#quickstart) • [Video series](#video-series) • [Tutorials](#tutorials) • [Code samples](#code-samples) • [Community](#community) • [More resources](#more-resources)

</div>

## Overview

The repository aims to centralize our content related to the **Generative AI with JavaScript** topic. You'll find code samples, tutorials as well all the resources from the video series, with best practices and tips to supercharge your AI skills. If you're a JavaScript developer looking to get started with AI, or if you already have some experience and want to learn more, you've come to the right place!

We cover the basics of generative AI and how to build AI applications using JavaScript, from local development to deployment on Azure, up to running and scaling your AI models. This is a living repository, so come back often to check for new content! ✨

[📺 Watch the video series](https://aka.ms/genai-js)

> [!IMPORTANT]
> All the content in this repository is open-source, so feel free to **reuse it, adapt it to make it your own, and share it with others!**

## Getting Started

You're recommended to fork and clone this repository even if it's not strictly necessary. 

Here's how you can fork and clone should you choose to do so:

1. **Fork the Repository**: Select the _fork_ button in the upper right-hand corner of the repository or select this button:
   [![Fork](https://img.shields.io/badge/Fork-Repository-blue)](https://github.com/microsoft/generative-ai-with-javascript/fork)

2. **Clone the Repository**: Navigate to your forked repository and select the clone button in the upper right-hand corner or select this button: [![Clone](https://img.shields.io/badge/Clone-Repository-blue)](https://github.com/microsoft/generative-ai-with-javascript.git)

To run the code provided in each chapter, you will need to start a Codespaces as the code is written to interact with GitHub Models a great way to try LLMs for free.

### How to use this repository?

The repo is organized in a series of lessons. Each lesson comes with the following:

- A written lesson with an assignment and quiz.
- A video, each lesson has a video embedded to help further your learning.
- Solution for assignment and quiz.
- Character app, running this app demonstrates Generative AI but gives you a chance to have conversation with a historical figure.

## Video series

| # | Lesson | Link | 
| ---- | ----------- |----- |
| Lesson 1 | Introduction to Generative AI and LLMs for JavaScript Developers | [Lesson 1](./01-intro-to-genai)
| Lesson 2 | Build your first AI app | [Lesson 2](./02-first-ai-app) |
| Lesson 3 | Prompt engineering | [Lesson 3](./03-prompt-engineering) |
| Lesson 4 | Structured output | [Lesson 4](./04-structured-output) |
| Lesson 5 | Retrieval augmented generation (RAG) | [Lesson 5](./05-rag) |


New segments will be added to the curriculum over time, so stay tuned!

## Tutorials

You can find here hands-on tutorials to put your AI skills into practice, with step-by-step instructions that will guide you through the process of building applications making use of AI with JavaScript.

| Name | Description | Duration | Level | Links |
| ---- | ----------- | -------- | ----- | ----- |
| Azure OpenAI RAG workshop - Qdrant version | Explore the fundamentals of custom ChatGPT experiences based on a corpus of documents. We will create a vector database and fill-in with data from PDF documents, and then build a chat website and API to be able to ask questions about information contained in these documents. | 3h | Beginner | [Tutorial](https://moaw.dev/workshop/gh:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md) / [Repo](https://github.com/Azure-Samples/azure-openai-rag-workshop) |
| Azure OpenAI RAG workshop - AI Search version | Explore the fundamentals of custom ChatGPT experiences based on a corpus of documents. We will create a vector database and fill-in with data from PDF documents, and then build a chat website and API to be able to ask questions about information contained in these documents. | 3h | Beginner | [Tutorial](https://moaw.dev/workshop/?src=gh:azure-samples/azure-openai-rag-workshop/docs/) / [Repo](https://github.com/Azure-Samples/azure-openai-rag-workshop) |
| Integrate OpenAI, Communication, and Organizational Data Features into a Line of Business App | This tutorial demonstrates how Azure OpenAI, Azure Communication Services, and Microsoft Graph/Microsoft Graph Toolkit can be integrated into a Line of Business (LOB) application to enhance user productivity, elevate the user experience, and take LOB apps to the next level | 3h | Beginner | [Tutorial](https://learn.microsoft.com/microsoft-cloud/dev/tutorials/openai-acs-msgraph) / [Repo](https://github.com/microsoft/MicrosoftCloud) |

## Code samples

The following code samples are available to help you get started with building your own AI applications. Use them to learn how to architect your applications, experiment with different features, or use them as a starting point for your own projects.

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
- Try Azure Cosmos DB for free: https://aka.ms/trycosmosdb

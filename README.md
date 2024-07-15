# Generative AI with JavaScript

## Series outline

- Series Introduction
  * Series intro; explain what will be covered and why JS is important for AI apps

### AI Basics and Core Tools for Building AI apps

- LLM basics
  * What’s an LLM; What data is used to train models; Model completion and tokenization

- Prompt Engineering Techniques
  * Cover basics of prompt engineering: 0-shot, few shot, CoT

- Retrieval Augmented Generation
  * Embeddings, Vector Search, RAG

- LangChain.js Core Concepts
  * Cover what is LangChain.js and its core concepts: Models, Memory, Vector Store, Agents

- LLM on my local machine with Ollama
  * Cover what is Ollama; Requirements; How to download and run models; How to use API with REST + LangChain.js

- Using Ollama playground to learn generative AI
  * Cover how to use Ollama playground to learn generative AI
  * https://github.com/sinedied/ollama-javascript-playground/


### Azure AI Components

- Azure AI Services tour
  * AI Studio, OpenAI

- Azure Vector Search services
  * AI Search + all other DB supporting Vectors: MongoDB vCore, PostgreSQL, Redis, Qdrant…

- Azure Tools for AI apps
  * AZD, SWA, Azure Functions, App Service, ACA, Blob Storage, CosmosDB…

- AI Building Block: Chat Protocol
  * AI Chat Protocol; +NPM package; +Usage demo

- AI Building Block: UI Components
  * UI Component building block; how it work, how to use it, demo

### Building your own AI Chat app with RAG

- Building your own AI Chat app with RAG
  * Intro: show what we’ll create, the architecture and the different components

- Creating the ingestion API 
  * Detail the steps to create the ingestion API, and how to ingest the PDFs documents

- Creating the Chat API
  * Detail the steps to create the chat API

- Creating the frontend app
  * Detail how we built the frontend app using lit, and how to connect it to the chat API using the AI Chat protocol NPM package

- Deploying the app on Azure
  * Explain what is AZD and Bicep/IaC, detail our app Azure architecture and show deployment and prerequisites

- [maybe] Evaluating your AI app
  * TBD

- [maybe] Deploying with App Spaces
  * TBD

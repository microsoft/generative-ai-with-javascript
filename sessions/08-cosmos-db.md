# Building Generative AI Apps with Azure Cosmos DB

## Description

Learn how to build generative AI applications with Azure Cosmos DB and JavaScript! We'll cover vector indexing, use cases like Retrieval-Augmented Generation (RAG), and see a hands-on LangChain.js demo. Perfect for developers looking to integrate AI with fast, scalable databases with vector search capabilities.

Links:
- Vector search with Cosmos DB: https://aka.ms/CosmosVectorSearch
- Docs, demos, videos and more: https://aka.ms/CosmosAISamples
- Serverless AI chat demo: https://aka.ms/ai/js/chat

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #cosmosdb #javascript

## Script

In this session, we're going to be talking about building generative AI applications with Azure Cosmos DB in JavaScript. Let's get into it.

We'll start by talking about vector indexing options in Azure, then dive into Azure Cosmos DB for AI apps. We'll look at some generative AI use cases with Cosmos DB, followed by a JavaScript demo.

You have many options for choosing vector indexes or a vector search solution in Azure today. You can use any of the Azure database offerings. These are preferable when you have semi-structured or operational data or if you want a single source of truth for your data, performing vector search and retrieval augmented generation for your AI applications using one database. 

We also have Azure AI Search, a very powerful service that can be used for vector search, full-text search, or hybrid search. It offers advanced capabilities for better relevancy in the search process and can index files, documents, or data items from multiple sources, such as Cosmos DB, web storage, or Postgres. Azure AI Search can serve as a single indexer over all your data, allowing flexibility across multiple sources. 

So, if you want a single source of truth, you can use the database. If you need multiple sources, Azure AI Search is a great choice. These are powerful options for every scenario your application might encounter.

Now, let’s talk a bit about Azure Cosmos DB. We offer two flavors: Cosmos DB for NoSQL, which is our core offering, and Cosmos DB for MongoDB. Both have vector search capabilities and are great for AI applications. Today, we’ll focus on Cosmos DB for NoSQL, which offers multiple options, including serverless and provisioned throughput with auto-scale. You pay for the compute you use, and when demand increases, Cosmos DB automatically scales out and back in as needed.

Cosmos DB for NoSQL also provides low-latency data transactions, often enabling reads and writes in under 10 milliseconds. It offers mission-critical reliability and vector search with a new indexing type called DiskANN, which provides cost-efficient and high-performance vector search at any scale. There are many different scenarios where customers are already building AI applications using Cosmos DB for NoSQL.

Some common use cases include maintaining chat history for large language models or chatbot applications. This is useful for auditing or providing context in future conversations. Another key use case is retrieval-augmented generation, where the right data is brought in at the right time to personalize your large language model for specific scenarios using vector search. Other examples include multi-tenant apps, real-time recommendations, anomaly detection, and multi-agent AI systems.

Many companies are already using Azure Cosmos DB for NoSQL to build incredible AI applications. For example, OpenAI, TomTom, KPMG, ASOS, and MasterCard, among others.

Let’s zoom in on the OpenAI scenario. ChatGPT scales very well with Azure Cosmos DB. All of the chat history for ChatGPT is stored in Cosmos DB to maintain session consistency between conversations. OpenAI chose Cosmos DB for its low latency, high availability, and scalable architecture, seamlessly meeting the demands of ChatGPT.

We touched on high-level use cases earlier, but let’s look at some specific examples. One is using Cosmos DB as a vector and operational database in one, meaning you don’t need to store your data in a separate vector database. You can store vectors and data together in Cosmos DB for NoSQL, reducing the complexity and cost of your AI architecture.

Retrieval-augmented generation is another example, where you can bring your own data into a large language model and personalize it for your scenario. Chat history is also valuable for auditing and improving AI models.

Another exciting use case is semantic caching, which plays off retrieval generation and chat history. You can vectorize logged user questions and responses, so if the same or a similar question comes up later, you can use a cached response instead of making a costly API call to a large language model.

Now, let’s talk more about vector search in Cosmos DB. With Cosmos DB, you can store both your data and vectors in one place, simplifying your application architecture and reducing costs. You can also apply query filters supported by Cosmos DB’s NoSQL language, such as equality or range filters. 

Cosmos DB offers multiple indexing types, from flat or brute-force search to compressed or quantized flat search, and even DiskANN, a new algorithm we're excited to offer. This algorithm was developed by Microsoft Research and is being used in a Microsoft product for the first time, providing very efficient vector search at scale.

The way DiskANN works is that vectors are compressed and stored in an in-memory index, while full-fidelity vectors and the graph data structure are stored on high-speed SSDs. This hybrid approach allows for fast, cost-effective vector search, using both RAM and SSDs.

I’ve spoken a lot about the benefits of Cosmos DB. Let's see it in action in JavaScript with LangChain.js. 

Now let’s look at a practical example of using Azure Cosmos DB for a RAG (retrieval-augmented generation) application. You may have seen this support chat application in previous videos, where support questions are asked, and answers come from PDF data ingested and vectorized in Cosmos DB.

Here’s how we implemented it. First, we extract text from the PDF using a component from LangChain.js. Then, we split the text into smaller chunks to improve accuracy and fit more data into the LLM context. Next, we transform the text into vectors and store them in the database.

To do this, we initialize the embedding model by creating an Azure OpenAI embeddings object. Then, with a single line of code, we convert all the chunks into vectors and store them in Cosmos DB, thanks to a built-in integration for Cosmos DB in LangChain.js.

To perform retrieval, we go to the chat API implementation, where we initialize everything we need, including embeddings, the chat model, and the Cosmos DB vector store integration. We pass the embedding model to convert the question into a vector for search.

Next, we use Cosmos DB as our retriever, specifying that we want to retrieve the top three documents. When a search is performed, it vectorizes the question, does the search, and returns matching text, which is injected into the context.

Of course, you can go further and fully customize the process, like choosing which algorithm you want to use. But if you're okay with the defaults, it's as simple as that to use it in your RAG application.

Before we wrap up, we’re excited to announce the continuation of the Azure AI Advantage free offer. If you're using Azure AI services or GitHub Copilot, you may be eligible for up to $6,000 of free Azure Cosmos DB credits for 90 days. Check out the link for more details. 

Cosmos DB is already very cost-effective, but this offer makes it even easier to bring your AI applications to production. 

In the next session, we’ll explore more Azure services and tools for your AI applications. Thanks!

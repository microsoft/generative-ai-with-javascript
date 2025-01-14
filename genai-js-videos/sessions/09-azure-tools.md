# Azure tools & services for hosting and storing AI apps

## Description

Learn how to build, deploy, and scale AI applications using Azure's powerful tools. You'll discover how to combine Azure OpenAI, Cosmos DB, and Azure Functions, and explore key concepts like serverless vs. container-based architecture. Plus, get hands-on with Azure Developer CLI to streamline your app's journey from local dev to the cloud!

Links:
- APIM with OpenAI sample: https://aka.ms/genai-apim
- GenAI gateway with APIM: https://aka.ms/genai/apim-ai-gateway
- Azure for JS developers: https://aka.ms/js/azure

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #azure #javascript

## Script

In this session, we'll cover generative AI with JavaScript. We'll walk through the Azure tools you'll likely need, along with the various Azure services that make sense to use together with your AI, so you can host and store your AI apps. 

Let's look at the agenda for this video and presentation. First off, we'll look into AI apps—what they are and the different types of AI apps you can build, because there is more than one. Then we'll talk about tooling, specifically the Azure Developer CLI (AZD), which is our recommended CLI tool. We'll also discuss architecture, as there are a few different choices. We'll go through container-based and serverless options, without taking a strong stance either way, but explaining where one of them may or may not fit your needs.

Then, we'll talk about managing APIs in production. Getting them into production is great, but you need to track them for cost, fair usage, scaling, security, and a lot of other factors, which we’ll explain in this video.

Let's dive into AI apps. There are three major types of apps you could be building as an application developer. First, you might be building a chat app, where you integrate OpenAI—or in this case, Azure OpenAI—with your app. You send a prompt, and you get a response. This works for a lot of use cases.

Often though, you'll want to explore RAG (retrieval augmented generation) apps. This is where you want the ability to interact with your own data and make it searchable. First, you need to identify which part of your data should be searchable, then convert it into vectorized form for search. To handle this, we recommend using Azure AI Search for indexing, Azure Cosmos DB for storing vectorized content, and Azure Blob Storage for your static content like PDFs, Word files, and CSVs. Of course, Azure OpenAI plays a key role in this as well.

Thirdly, you might be building a more advanced AI app—an assistant or agent. Agents can range from simple to complex, goal-oriented, and autonomous. They combine different AI apps' skills, can run functions on your behalf, and do retrieval-augmented generation (RAG). To implement this, you'll be using services like Azure AI Search, Azure Cosmos DB, Azure Blob Storage, Azure Functions, and perhaps an agent-based framework.

Now, taking your AI to production is an interesting conversation. First, you want to deploy your solution to the cloud. Moving from local environment to cloud is a win. We think the Azure Developer CLI (AZD) makes this process nearly frictionless by deploying an entire solution. But architecture is a key consideration because the architecture you select dictates which services you can use. Most services can be combined, but the main choices are serverless or container-based platforms.

For those unfamiliar with serverless, think of it as event-driven architecture—code runs in response to something happening. Containers, on the other hand, are lightweight, programmatic environments that ensure a consistent experience across development and production. Containers can reduce the risk of bad surprises in production.

Next, let's discuss monitoring, scaling, and protecting your APIs. You're doing this as a business, so security matters. We recommend managed identity over API keys, which lack fine-grained control and flexibility. Managed identity allows Azure to manage identity and access for you.

Scaling is also important, particularly load balancing to ensure the load is distributed evenly. Additionally, you need to plan for resilience. For example, using a circuit breaker pattern can prevent calls to a failing resource for a short period, allowing it to recover.

Lastly, let's talk about monitoring. Deploying to production is great, but you need to stay on top of things. Monitoring logs, tracking token usage, and ensuring you don't overspend are crucial.

Let’s revisit tooling. The Azure Developer CLI (AZD) accelerates your move from local to Azure. It’s an open-source CLI tool that helps you deploy an entire solution—front-end, back-end, storage, and more. It offers developer-friendly commands and support across terminal, editor, and CICD environments.

Here’s a basic workflow. First, open your terminal and run `azd init` to scaffold your project. You’ll answer some questions about the project, and infrastructure files will be created for you. Then, run `azd up` to package, provision, and deploy your app. Lastly, use `azd deploy` to update code and infrastructure, and deploy those changes live to production. AZD makes it easier to get started by using a template library, so leverage that before doing everything from scratch.

Let’s dive into architecture. You have two main options: serverless and container-based. Serverless, like Azure Functions, is event-driven. For example, when you get a new customer, that event might trigger database updates, email notifications, and more. Containers, on the other hand, are programmatic environments that are consistent between development and production. They scale easily, and tools like Azure Kubernetes Service or Azure Container Apps can support millions of users.

Now that we’ve covered serverless, let’s touch on some key concepts with Azure Functions. A trigger defines when an event happens (like uploading a file to blob storage). Bindings simplify how your function communicates with other Azure services, like inserting data into a database. You can combine Azure Functions with other services, like Azure Container Apps.

For example, a user uploads a file to blob storage. This triggers an Azure Function, which processes the file, then adds data to a queue or sends an email. The point is: an important event occurs, and the function responds.

Azure Static Apps is another great option, especially if you start with something simple, like an `index.html` file. As your app grows, Static Apps can support more complex features, including back-end integration with Azure Functions. A great feature of Static Apps is the built-in CICD pipeline with GitHub Actions. Once set up, you can deploy changes through Git and GitHub without needing to interact with Azure again.

Speaking of combinations, you can combine Azure Functions with Azure OpenAI. Triggers and bindings simplify this process, making it easier to build robust AI-driven solutions.

Next, let’s talk about Azure Container Apps. This serverless platform allows you to run container-based apps while reducing infrastructure management and saving costs. It’s great for API endpoints, background processing, event-driven processing, and microservices. Container Apps scale automatically based on traffic, CPU, or memory load. It also supports Dapr for microservice communication and provides observability, PubSub, and retries. Choose your runtime and language, and Azure Container Apps will handle the rest.

Let’s wrap up with scaling, monitoring, and protecting your apps. Azure API Management is a great solution for managing multiple APIs, providing a gateway between user requests and your API. It allows you to set policies for access control, rate limiting, and scaling. When working with Azure OpenAI, we recommend putting API Management in front of it. This helps enforce token limits, ensures fair resource distribution, and provides metrics for monitoring usage.

To sum up, Azure Developer CLI (AZD) is our top recommendation for deploying entire solutions. Whether you choose serverless (Azure Static Web Apps or Azure Functions) or container-based architecture (Azure Container Apps), you now have a mental model of both options. And once your app is in production, we recommend putting API Management in front of Azure OpenAI to secure it, manage costs, and track usage effectively.

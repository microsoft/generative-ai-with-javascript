# Streaming Generative AI output with the AI Chat Protocol 

## Description

Integrating Streaming Generative AI Output into your application is easier than ever with the AI Chat Protocol. This video covers the benefits of streaming AI responses, showcases practical code samples, and demonstrates how to streamline your back-end logic.

Links:
- AI Chat Protocol GitHub: https://aka.ms/aichat
- AI Chat Protocol API Spec: https://aka.ms/chatprotocol
- Serverless AI Chat sample: https://aka.ms/ai/js/chat

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #chatbot #javascript

## Script

In this session, we'll cover Streaming Generative AI Output with the AI Chat Protocol.

In terms of what we'll cover, first, we'll discuss Streaming Gen AI Output as a whole. Then we'll introduce the AI Chat Protocol, and lastly, we'll dive into a usage sample.

First, let's cover Streaming Generative AI Output in your application. You might be wondering, why use streaming to begin with? Simply put, it's the expectation for Gen AI apps these days. It results in reduced latency from seeing the output from the model and also an enhanced user experience.

When it comes to streaming, there are two options for implementing it. First, you can use a Gen AI inference SDK directly in the browser. Alternatively, you could use an AI inference server to stream to your client. We'll cover both of them.

The first option for streaming is inference in the browser, and this is the simplest one. It's done by using the inference SDK in the Edge device. For example, you could use the Azure OpenAI SDK for JavaScript in the front-end. The front-end would run the inference SDK and directly call the AI model service. This results in easy streaming to the UI, but unfortunately, it ends there.

Browser-side inference is unsafe and not the best practice. From a security standpoint, there's API key exposure in the browser and no sanitization of the input, meaning that users can potentially send malicious content to your model. Additionally, if you have data compliance requirements, there's no integration with that. From an application standpoint, there's also no rate limiting or quota handling, and no caching, which means performance and costs can go up. There's no integration with business logic since you're directly calling the AI model, and as such, no handling of excess data, which can result in more costs.

The best alternative to running inference in the browser is to have an AI inference service in the middle. This means the server would sit between the user's device and the AI model service. This gives a clean separation of concerns between AI inference and back-end logic. The added challenge here is that streaming to the client and UI becomes tricky.

For example, the client's browser could send a POST request giving the chat. The inference service would then handle the call to the AI model service using something like an inference SDK. While getting this stream is easy, we now face the issue of sending something back to the user, which turns out to be very tricky.

First, you need to select a network protocol for streaming, such as HTTP, WebSockets, or Server-Sent Events. From here, you need to define the exchange format of what things will look like when you're sending things back and forth. Lastly, you need to parse the output, which could involve writing hundreds of lines of browser-side JavaScript specifically for your application.

Fortunately, we have the AI Chat Protocol, which is designed to solve this problem. The AI Chat Protocol is designed to make streaming easy. There are only two requirements. First, your server needs to use the API specification defined by the AI Chat Protocol. From there, the front-end would use a lightweight parsing SDK that we've created.

There's one client, the AI Chat Protocol client, and two methods you can use: the `getCompletion` method and the `getStreamedCompletion` method. The `getCompletion` method is synchronous, while the `getStreamedCompletion` method gives an asynchronous stream that you can iterate through. This provides easy streaming along with TypeScript models. Additionally, if you have any application context you'd like to pass back and forth, we have an options bag for any other data you might need.

Here at Microsoft, we create a lot of AI samples, and using the AI Chat Protocol has helped us build things even faster. Yohan Lasorsa, one of our Cloud Advocates, estimates that the AI Chat Protocol removed something like 200-400 lines of code in one of our samples.

When building with the AI Chat Protocol, it's important to note that it's a server-to-client-only design pattern, not server-to-AI model. This means that all of your AI back-end choices are flexible. You can use any orchestration service such as LangChain or Semantic Kernel. You can use any RAG option, such as Azure AI Search or something like pg-vector. You can use any programming language and any language model you'd like.

The way it works is simple. Your client browser would use the lightweight SDK we've discussed. It would send a request to the server that you run, which adheres to the API spec we've defined. Your AI service would then handle any orchestration or RAG or anything else you'd want, receive that output, and send it back according to the AI Chat Protocol. Your front-end browser would then have an easy way to iterate through all of the messages coming through.

Adding the AI Chat Protocol to your application is actually very simple. On the right, we see a diagram with a serverless API that calls Azure OpenAI Service, Azure AI Search, and Azure Blob Storage. The serverless API performs retrieval augmented generation (RAG). We also have a web app that calls this serverless API and handles the content being sent back and forth via a chat interface.

To add the AI Chat Protocol to this example, first, ensure that the service API conforms to the chat protocol spec. Second, incorporate the SDK into your front-end code to easily parse the output. That's it. You can now enjoy streamed output to the client.

Let's dive into a sample. If you'd like to see the sample, it'll be linked at the end of this presentation. The sample we'll be using is a serverless RAG with LangChain.js sample, following the same architecture pattern we saw in the previous slides. The sample uses the AI Chat Protocol for streaming to the UI.

There are two core pieces of the sample. First, there's the RAG Service API, which conforms to the AI Chat Protocol API spec. The web app is the second component, which uses the AI Chat Protocol library. Below, we can see what the UI would look like for a user using this application.

First, let's look at the RAG Service API. This function creates a new line-delimited JSON stream, which is what the AI Chat Protocol uses for streaming. It takes response chunks from either a RAG call or an AI model call and transforms them into the stream we'd like. On line 109, we create an AI Chat Completion Delta for each of the response chunks we receive. On line 118, we turn those into JSON strings and send them back one at a time in a generator pattern.

Next, let's look at the POST endpoint of our API. On line 86, we create a response stream from our RAG chain, which uses LangChain.js underneath. This response stream is formatted into the JSON stream that the AI Chat Protocol API spec uses. On line 92, we return that with the content type application/x-newline-delimited-json, and we set the transfer encoding to chunked. This API now conforms to the AI Chat Protocol.

Now, let's jump into the web app. On line 1, we import AI Chat Message, Chat Completion Delta, and AI Chat Protocol Client from the AI Chat Protocol library. On line 5, we set our chat request options. First, we set our messages, which are of the AI Chat Message type. We then set a chunk interval and the API URL for the endpoint that we want to target.

Next, the web app has a function for getting completions, which uses the AI Chat Protocol underneath. On line 13, we take the API URL from our chat request options and set our endpoint URL. On line 14, we use the getStreamCompletion method and iterate over the result on line 16. We ignore everything that's not a delta, and on line 21, we yield a promise. Now, whenever we send a message to the AI endpoint, we get a streamed response in real time. Additionally, it can pass anything we want, such as application logic or context.

That's all it takes to stream generative AI output to your application!

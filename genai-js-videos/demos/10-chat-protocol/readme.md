# Demo - Streaming Generative AI output with the AI Chat Protocol 

## Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)

All prerequisites from this [sample](https://github.com/Azure-Samples/serverless-chat-langchainjs/) are required, so you can either deploy it on Azure or run it locally.

## Scenario

### Preparation

1. Clone the sample repo on your machine: https://github.com/Azure-Samples/langchainjs-quickstart-demo
2. Open the code in VS Code
3. Either deploy the sample to Azure or run it locally, following the instructions in the sample's README.

### Demo

The sample we'll be using is a serverless RAG with LangChain.js sample, following the same architecture pattern we saw in the previous slides. The sample uses the AI Chat Protocol for streaming to the UI.


1. There are two core pieces of the sample:
  - *Open `chat-post.ts`*
  - First, there's the RAG Service API, which conforms to the AI Chat Protocol API spec.
2. *Open `api.ts`*
  - The web app is the second component, which uses the AI Chat Protocol library.
3. *Show the chat application in action*
  - We can see what the UI would look like for a user using this application.
4. *Open `chat-post.ts`* again.
  - First, let's look at the RAG Service API. This function creates a new line-delimited JSON stream, which is what the AI Chat Protocol uses for streaming. It takes response chunks from either a RAG call or an AI model call and transforms them into the stream we'd like.
  - On line 109, we create an AI Chat Completion Delta for each of the response chunks we receive.
  - On line 118, we turn those into JSON strings and send them back one at a time in a generator pattern.
5. Next, let's look at the POST endpoint of our API.
  - On line 86, we create a response stream from our RAG chain, which uses LangChain.js underneath. This response stream is formatted into the JSON stream that the AI Chat Protocol API spec uses.
  - On line 92, we return that with the content type `application/x-newline-delimited-json`, and we set the transfer encoding to chunked. This API now conforms to the AI Chat Protocol.
6. Now, let's jump into the web app.
  - *Open `api.ts`*
  - On line 1, we import AI Chat Message, Chat Completion Delta, and AI Chat Protocol Client from the AI Chat Protocol library.
  - On line 5, we set our chat request options. First, we set our messages, which are of the AI Chat Message type. We then set a chunk interval and the API URL for the endpoint that we want to target.
7. Next, the web app has a function for getting completions, which uses the AI Chat Protocol underneath.
  - On line 13, we take the API URL from our chat request options and set our endpoint URL.
  - On line 14, we use the getStreamCompletion method and iterate over the result on line 16.
  - We ignore everything that's not a delta, and on line 21, we yield a promise.
  - Now, whenever we send a message to the AI endpoint, we get a streamed response in real time. Additionally, it can pass anything we want, such as application logic or context.

That's all it takes to stream generative AI output to your application!

# Demo - Building Generative AI Apps with Azure Cosmos DB

## Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)

All prerequisites from this [sample](https://github.com/Azure-Samples/serverless-chat-langchainjs/) are required, so you can either deploy it on Azure or run it locally.

## Scenario

### Preparation

1. Clone the sample repo on your machine: https://github.com/Azure-Samples/langchainjs-quickstart-demo
2. Open the code in VS Code
3. Either deploy the sample to Azure or run it locally, following the instructions in the sample's README.

### Demo

1. Let’s have a look at a practical example of using Azure Cosmos DB for RAG using LangChain.js. 
  - *Show the chat application in action*
  - Here we’re asking support questions, and all the answers comes from PDF data that was ingested and vectorized in Cosmos DB.Let’s take a quick look at how we implemented this.
2. *Switch to VS Code, and open `documents-post.ts`*
  - Here we have the function that ingest the PDF documents. Let’s skip to the most interesting part.
3. *Select the part where we load the PDF. Move in to the code to explain the different parts that are following.*
  - *Start from this code:*
      ```ts
      const loader = new PDFLoader(file, {
        splitPages: false,
      });
      ```
  - So first we extract the text from the PDF using this component from LangChain.js.
  - Next, we split the text into smaller chunks, to improve the accuracy and allow multiple chunks to fit into the LLM context.
  - Then, we need to transform this text into vector, and store them into the database.
4. *Select the part where we initialize the models*
  - *Start from this code:*
      ```ts
      const embeddings = new AzureOpenAIEmbeddings({ azureADTokenProvider });
      await AzureCosmosDBNoSQLVectorStore.fromDocuments(documents, embeddings, { credentials });
      ```
  - To do so, first we initialize the embedding model using Azure OpenAI, then we only need a single line to convert all the chunks into vectors, and store them into Cosmos DB.
  - That’s because there's an integration for Cosmos DB right into LangChain.js, to make it easier to use it.
5. Now, to use these documents to perform the RAG process, we go to the implementation of our chat API
6. *Open `chat-post.ts`, and move to the part where we initialize the models*
  - *Start from this code:*
      ```ts
      embeddings = new AzureOpenAIEmbeddings({ azureADTokenProvider });
      model = new AzureChatOpenAI({
        // Controls randomness. 0 = deterministic, 1 = maximum randomness
        temperature: 0.7,
        azureADTokenProvider,
      });
      store = new AzureCosmosDBNoSQLVectorStore(embeddings, { credentials });
      ```
  - First, we initialize everything we need: the embeddings and chat models, then our Cosmos DB vector store integration. We still need to pass the embeddings model here, to be able to convert a question into a vector, so we can perform the vector search.
7. *Select the part where we init the retriever*
  - *Start from this code:*
      ```ts
      const retriever = store.asRetriever(3);
      ```
  - Next, to use Cosmos DB as our retriever component, we make this call here to say that we want to retrieve the top 3 documents when performing a vector search.
8. *Select the part where we call the chain*
  - *Start from this code:*
      ```ts
      const responseStream = await ragChain.stream({
        input: question,
        context: await retriever.invoke(question),
      });
      ```
  - And finally, we invoke the retrieve with the question to do the search, and it will take care of vectorizing the question, doing the search and returning the matching text that we can inject into our context.
9. Of course you can go further and fully customize the process, like choosing which algorithm you want to use. But if you’re ok with the defaults, it’s as simple as that to use it in your RAG applications.

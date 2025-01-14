# Improve AI accuracy and reliability with RAG

## Description

Enhance your AI's accuracy and reliability with Retrieval Augmented Generation (RAG)! Learn how combining retrievers and generators provides precise, up-to-date answers using your own data. You'll see how using sourced data instead of relying on the model's training data can improve user trust, while also making your AI more grounded in the context you provide.

Links:
- Serverless AI chat demo: https://aka.ms/ai/js/chat
- Implement RAG training: https://aka.ms/genai/rag
- Create your AI chat with RAG workshop: https://aka.ms/ws/openai-rag-qdrant

Watch this series' playlist: https://aka.ms/genai-js
All slides and code samples: https://aka.ms/genai-js/content

#ai #rag #openai

## Script

In this session we'll discuss how you can improve the accuracy and reliability of your AI outputs using RAG, an advanced prompt engineering technique.

When working with AI models, there are some challenges that we're facing. LLM sometimes makes mistakes when generating information, and the data that has been used to train the models may be out of date or may come from shady or untrustworthy sources. This makes it difficult to tell if the generated information is correct.

To solve these issues, we can use a technique called Retrieval Augmented Generation, or RAG for short. RAG is a combination of two components: a retriever that fetches relevant information from a knowledge base that you control, and a generator that creates the answer. This combination allows for more precise and relevant answers by using data that you provide instead of relying on the model's training data.

Now, why is RAG useful? It's cheap because you don't have to spend money to train expensive models; you can use the existing ones. You maintain the knowledge base separately from the AI model, and you can even use multiple data sources. That means the data used is always up to date. It generates factual responses using a specific context made of information that you provide instead of relying on the AI training. Answers are grounded in your context and not the model's knowledge. And because you're able to show what documents were used to generate the response, users can check it themselves if needed and see that they can trust the answers.

Now, how does RAG work? First, the user asks a question. The retriever searches for information in the knowledge base and returns documents that are relevant to answer the question. Then, you send both the question and the documents to the generator, which creates the answer based on the information provided.

How do you implement that? First, you have to create the knowledge base. You extract text from documents, then send it to a special AI model called an embedding model that converts your text into a vector. Vectors capture the semantic information of the text as opposed to just capturing the lexical information using the words. To say it differently, the meaning of the text is retained regardless of the language used. Next, you put together the vector along with the original text to create a document and store it inside a vector database. You repeat this process for every document that you want to include in your knowledge base.

Once you've built your knowledge base, you can perform the retrieval and context augmentation process. This process is done in three steps. First, we transform the user query into a vector by sending it to the same embedding model that we used while creating the knowledge base. After that, we use the vector to search in our vector database for relevant documents and pick the N best results. Finally, we take the text from the most relevant documents as well as the initial user question and use it to craft a prompt. It should be something along the lines of: "Answer the user's question using the provided documents." Then you send the prompt to the LLM to get your answer.

Let's have a look at a practical example of using RAG for a support chat application. For the Contoso real estate company, we've built this experience that allows customers to ask support questions about the usage of its product. Here, you're looking at the final deployed version on Azure that uses a set of company documents in PDF format to answer the questions. For example, let's ask a question about the refund policy. Great, we have an answer. But the important part is that the answer cites the documents that were used to generate that answer. And I can even open that document to check it myself if I want. So, let's look for refunds. Then you can see the information that was used to generate the answer.

Now, if we try to ask something that's not in the provided documents, let's see what happens. For example, how to deploy this app on Azure. It simply says, "I don't know," because that's what we told the model to say when it can't answer a question using the documents that we provide.

If you're interested in this sample, you can have a look at the links in the video description or here, and be sure to take a look at the other videos in the series to learn how we made it.

In the next session, we'll see how you can speed up your AI developments using the Langchain JS framework.

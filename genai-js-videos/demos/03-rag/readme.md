# Demo - Improve AI accuracyand reliability with RAG

## Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)

All prerequisites from this [sample](https://github.com/Azure-Samples/serverless-chat-langchainjs/) are required, so you can either deploy it on Azure or run it locally.

## Scenario

### Preparation

Either deploy the sample to Azure or run it locally, following the instructions in the sample's README.

### Demo

For the Contoso Real Estate company, we’ve built this experience that allows customers to ask support questions about the usage of its products.

Here you’re looking at the final deployed version on Azure, that use a set of company documents in PDF format to answer the questions.

1. For example, if I ask a question about how the refund policy, we’ll get an answer citing the source documents used to generate this answer.
2. I can open the document to check it by myself if I want. Let’s search for “refund”, and here we can the information used to generate the answer.
3. Now if we try to ask something that’s not in the provided documents, let’s see what happens. “How to deploy this app on Azure?"
It simply says “I don’t know”, because that’s what we told the model to say when it can’t answer a question using the documents we provide.

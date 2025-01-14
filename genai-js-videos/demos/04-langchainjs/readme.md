# Demo - Speed up your AI development with LangChain.js

## Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)

All prerequisites from this [sample](https://github.com/Azure-Samples/langchainjs-quickstart-demo) are required, so you can run it both locally and using Azure OpenAI.

## Scenario

### Preparation

1. Clone the sample repo on your machine: https://github.com/Azure-Samples/langchainjs-quickstart-demo
2. Open the code in VS Code
3. Create the Azure resources needed for the sample, following the instructions in the README file, and fill in the `.env` file with the required information.
4. Open the `local.js` file in the editor.

### Demo

1. Open the code from this repo in VS Code: https://github.com/Azure-Samples/langchainjs-quickstart-demo
2. Open `local.js`, and explain the code step by step.
3. Run the demo using play button
4. Update the prototype to use Azure:
  - Replace model/db imports (use the `imp` snippet)
  - Replace the model init section (use Copilot or `newai` snippet for the AI Search part
  - Explain that the models are defined in `.env` file
  - Replace the embeddings part
  - Use the `sea` snippet to first need to check if documents are already indexed
  - Use `add` snippet (or use Copilot) to complete the embedding part
  - Run the demo again using play button

We did not have to change any of the workflow logic, as you’ve seen the migration is quite straightforward. Now I can take this code and wrap it in a serverless function to deploy it to Azure.

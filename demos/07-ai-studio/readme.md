# Demo - Introduction to Azure AI Studio

## Prerequisites
- [Azure account](https://azure.microsoft.com/free)
- Access permissions to [create Azure OpenAI resources and to deploy models](https://learn.microsoft.com/azure/ai-services/openai/how-to/role-based-access-control)

## Scenario

### Preparation

1. Open the AI Studio website: https://ai.azure.com in a full screen browser

### Demo

1. Provide a brief overview of what Azure AI Studio is, comparing it to an airport for generative AI applications.
2. Look for recent projects or initiate the setup of a hub if this is your first visit.
3. **Understand hubs and projects**:
  - Explain that a hub functions as an airport terminal for resource sharing, while a project is akin to a plane with its own specific purpose.
4. Click the “New Project” button and change the default project name to "JSGenAI." Select an existing hub or create a new one if necessary.
5. After creating the project, various services required for building the application will begin to launch.
6. Click on the project to view details about the hub, resource group, and subscriptions associated with it.
7. **Choose a model:**
  - Navigate to the "Getting Started" section and then to the model catalog to browse the available models.
8. Apply filters based on model providers, collections, deployment options, and inference tasks to narrow down the list of models.
9. Explore the Azure OpenAI Collections and choose a GPT-4o model, reviewing its description, version numbers, and features such as "JSON mode."
10. Click to deploy the GPT-4o model, taking note of details like version number, deployment type, and resource location.
11. After deployment, retrieve the API endpoint and key for further integration.
12. **Test in the playground:**
  - Open the playground feature to interact with the model in a chat context, defining the system message and starting a conversation.
13. Utilize the multimodal capabilities of the model by uploading an image, allowing the model to interpret and explain it. Ask the model to describe the image.
14. Access and review code samples, including JSON and cURL examples, for future development purposes.
15. Briefly mention other available tools in Azure AI Studio, such as prompt flow, evaluation, and fine-tuning, which will be covered in later lessons. 

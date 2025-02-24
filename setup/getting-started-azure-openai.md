# Setting Up the Development Environment for Azure OpenAI

Azure AI Foundry is a service that allows you to deploy and manage AI models in the cloud. You can things like create a project, deploy a model, interact with the model, and more.

> [!NOTE]
> If you want to use Azure AI Foundry models for your .NET AI apps in this course, follow the steps in this guide.

👉 [To use GitHub Models this is the guide for you](./README.md)

## Create the Azure AI Foundry resources

To use Azure AI Foundry models, you need to take the following steps:

1. Create a hub and project in the Azure AI Foundry portal.
1. Deploy a model to your project.
1. Add the Azure AI library code + API key and other credentials to your code.

### -1- Create a Hub and Project in Azure AI Foundry

1. Go to the [Azure AI Foundry Portal](https://ai.azure.com/).
1. Sign in with your Azure account.
1. Select **All hubs + projects** from the left-hand menu and then click the **+ New hub** from the dropdown. (Note: You may have to click on **+ New project** first to see the **+ New hub** option).

1. A new window will open. Fill in the details for your hub:
    - Give your hub a name (e.g., "MyAIHub").
    - Choose a region closest to you.
    - Select the appropriate subscription and resource group.
    - You can leave the rest of the settings as they are.
    - Click **Next**.
    - Review the details and click **Create**.
1. Once your hub is created, the portal will open its details page. Click the **Create Project** button.
    - Give your project a name (e.g., "GenAIJavaScript") or accept the default.
    - Click **Create**.

🎉 **Done!** You’ve just created your first project in Azure AI Foundry.

Before you can interact with the model, you need to deploy it to your project, so let's do that next.

### -2- Deploy a Language Model in Azure AI Foundry

Now, let’s deploy a **gpt-4o-mini** model to your project:

1. In the Azure AI Foundry portal, navigate to your project (it should automatically open after creating it).
1. Click on **Models and Endpoints** from the left-hand menu and then the **Deploy Model** button.
1. Select **Deploy base model** from the dropdown.
1. Search for **gpt-4o-mini** in the model catalog.
1. Select the model and click the **Confirm** button.
1. Specify a deployment name (e.g., "gpt-4o-mini"). You can leave the rest of the options as they are.
1. Click **Deploy** and wait for the model to be provisioned.
1. Once deployed, make a note of the values for **Model Name**, **Target URI**, and **API Key** from the model details page as you will use the later in your sample code.

🎉 **Done!** You’ve deployed your first Large Language Model in Azure AI Foundry.

> [!NOTE] 
> The endpoint is similar to `https://< your hub name>.openai.azure.com/openai/deployments/gpt-4o-mini/chat/completions?api-version=2024-08-01-preview`. The endpoint name that we need is only `https://< your hub name >.openai.azure.com/`*.

## Adding the Azure AI API Key to your code

Now let’s update the code to use the newly deployed model. Here's the plan:

- Install the needed libraries, you will need the libraries `@azure/openai` and `dotenv`.
- Update the code to use the values you noted above for the model name, endpoint, and API key.
- Run the app.

1. Open the terminal and switch to the project directory (providing you're in the project root directory):

    ```bash
    cd app
    ```

1. Run the following commands to add the required libraries:

    ```bash
    npm install @azure/openai dotenv
    ```

1. At the top of `app.js` add the following imports:

    ```javascript
    import { OpenAIClient, AzureKeyCredential, ChatRequestMessage } from "@azure/openai";
    import * as dotenv from "dotenv";
    ```

1. Add the following code to load the environment variables:

    ```javascript
    dotenv.config();
    ```

1. Create new variables to hold the model name, endpoint, and API key:

    ```javascript
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
    const azureApiKey = process.env.AZURE_OPENAI_API_KEY || '';
    ```

1. Create a client to interact with the model:

    ```javascript
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deploymentName = '<replace with your deployment name>';
    ```

    The code above creates a new client using the endpoint and API key you noted earlier. It also assigned the deployment name to a variable.

1. Create a prompt and chat messages:

    ```javascript
    const promptText = `Tell me about yourself.`;

    const chatMessages: ChatRequestMessage[] = [
        {
            role: 'system',
            content: "You're Ada Lovelace, a mathematician and writer. You're considered the first computer programmer. You only know about the time you lived in, so you might not know about modern technology.",
        },
        {
            role: 'user',
            content: promptText
        },
    ];
    ```

    Now you have a prompt and chat messages to send to the model. Let's send the messages and get the response:

    ```javascript
    const completionResponse = await client.getChatCompletions(deploymentName, chatMessages, {
            maxTokens: 150,
            temperature: 0.1,
        });

        console.log("Ada says: ");
        console.log(completionResponse.choices[0].message?.content);
    ```

1. Run the app:

    ```bash
    npm start
    ```

1. You should see output similar to the following:

    ```text
    Ada says: I'm Ada Lovelace, a mathematician and writer. I'm considered the first computer programmer. I only know about the time I lived in, so I might not know about modern technology. 
    ```

> 🙋 **Need help?**: Something not working? [Open an issue](https://github.com/microsoft/Generative-AI-for-beginners-dotnet/issues/new?template=Blank+issue) and we'll help you out.

## Summary

In this lesson, you learned how to create a hub and project in Azure AI Foundry, deploy a model to your project, and interact with the model in your code. 

### Additional Resources

- [Azure AI Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/)
- [How to Deploy Models in Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-services/deploy/)


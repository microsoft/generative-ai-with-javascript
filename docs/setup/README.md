# Course Setup

Set up your tools, deploy a chat model in Microsoft Foundry, and configure this course's companion app. The app lets you speak with historical characters while you learn generative AI with JavaScript.

Microsoft Foundry is a cloud service for deploying and using AI models. An application programming interface (API) lets your code send requests to that service. This course's companion app uses the Azure OpenAI-compatible API through the `openai` JavaScript package. You do not need an additional Foundry software development kit (SDK) or changes to the app's source code.

If you already have another OpenAI-compatible provider, use its API base URL, key, and model name with the same configuration variables. The Foundry resource steps below apply only to the Foundry option.

## Prerequisites

- A GitHub account for Codespaces or forking the course.
- For Foundry, an Azure account with an active subscription and permission to create a resource, deploy a model, and read its API key.
- Node.js Long Term Support (LTS).
- Git and a text editor for local development. [Visual Studio Code](https://code.visualstudio.com/) is recommended.
- Basic JavaScript and command line knowledge.

> [!IMPORTANT]
> Model usage can incur charges. Check deployment pricing, region availability, and quota (service usage limits) before creating resources. A GitHub account or Codespace does not supply your Foundry API key.

## Choose Your Development Environment

Use GitHub Codespaces or your local machine. Both options use the same model provider and `.env` configuration.

### Option 1 : Creating a GitHub Codespace

1. Open [this repository](https://github.com/microsoft/generative-ai-with-javascript).
2. Select **Fork** to create your own copy.
3. In your fork, select **Code**, then **Codespaces**, then **Create codespace**.
4. Wait for the environment to start. Open its terminal.
5. Check the Node.js and npm versions:

   ```bash
   node --version
   npm --version
   ```

Use the LTS release, not the Current release. If you use nvm, run `nvm install` and `nvm use` from the repository root; `.nvmrc` selects the active LTS release. Continue with [Install Dependencies](#install-dependencies).

### Option 2 : Running the app locally

1. Install [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads) if needed.
2. Check your tools:

   ```bash
   node --version
   npm --version
   git --version
   ```

3. Clone the repository, or use the clone URL of your fork:

   ```bash
   git clone https://github.com/microsoft/generative-ai-with-javascript.git
   cd generative-ai-with-javascript
   ```

Continue with the commands below from the repository root.

## Install Dependencies

Install the root packages and the companion app packages:

```bash
npm ci
npm ci --prefix app
```

The app already includes `openai` and `dotenv`. Do not install `@azure/openai` or copy older Azure client code into `app.js`.

Lesson packages are independent. Install their dependencies in the lesson directory when its instructions require it. TypeScript lessons have their own build commands. A global `tsx` installation is not required to run the companion app.

## Set Up Microsoft Foundry

### 1. Create a Project

1. Sign in to the [Microsoft Foundry portal](https://ai.azure.com/).
2. Use the new Foundry experience. Open the project selector and select **Create new project**.
3. Enter a project name, such as `genai-javascript-course`.
4. Open **Advanced options**. Select your subscription, resource group, and a region that supports your chosen model.
5. Select **Create project** and wait for the project to be ready.

If your account cannot create the resource or project, ask your Azure administrator for the required access. See the [official resource setup guide](https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources) for current portal steps and permissions.

### 2. Deploy a Chat Model

A deployment is a hosted model with a name that your application uses in API requests.

1. Open **Discover**, then **Models**, and search for **gpt-5-mini**.
2. Check the model's availability, deployment pricing, and quota.
3. Select **Deploy**, then **Default settings**, or customize the deployment settings if needed.
4. Wait for deployment to complete.
5. Open the deployment details and record its deployment name. Use `gpt-5-mini` to match the example configuration, or use your own name and set `AI_MODEL` to that exact name.

In the classic portal, model deployment is under **Models + endpoints**. Portal labels can change; use the official setup guide linked above if your screen differs.

If `gpt-5-mini` is not available, select another model that supports chat completions, such as `gpt-4.1`, and use its deployment name in `AI_MODEL`.

**Models needed for this course:** One chat deployment is enough for the companion app and the basic CSV retrieval example in Lesson 5. Unlike the LangChain.js course, this setup does not require a second comparison model or a hosted embedding model. Deploy additional models only when your chosen exercise needs them.

### 3. Get the API Key and Endpoint

1. Open the Foundry resource associated with your project. Use its **Keys and Endpoint** page in the Azure portal, or the resource's endpoint and key details in Foundry.
2. Copy an API key for that resource.
3. Find its **Azure OpenAI resource endpoint**.
4. Add `/openai/v1` to the resource endpoint if it is not already present.

The API base URL must look like:

```text
https://your-resource.openai.azure.com/openai/v1
```

Use the resource endpoint and key from the same resource.

> [!IMPORTANT]
> Do not use a project URL ending in `/api/projects/...`, or a full `/chat/completions` request URL, as `AI_ENDPOINT`. The companion app needs the OpenAI-compatible API base URL. It adds the request path itself.

This sample uses API-key authentication. If your organization does not permit it, ask your administrator for an approved learning resource or authentication approach. Do not disable organization security controls.

## Configure Environment Variables

Environment variables are configuration values that a running program can read. This app can load them from a private `.env` file instead of storing them in its source code.

### Create the File

Create `.env` in the repository root, not in `app/`. If you already have a `.env` file, edit it instead of overwriting it.

On macOS, Linux, WSL, or Codespaces:

```bash
cp .env.example .env
```

In Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

In Windows Command Prompt:

```cmd
copy .env.example .env
```

### Set Your Values

Open `.env` in your editor:

```dotenv
AI_API_KEY=your_microsoft_foundry_api_key
AI_ENDPOINT=https://your-resource.openai.azure.com/openai/v1
AI_MODEL=gpt-5-mini
```

Replace the key and resource name. Set `AI_MODEL` to your actual deployment name, which can differ from the model's catalog name.

The app reads the repository-root file automatically. Existing environment variables take priority over the file. Missing or blank settings stop the app with an error.

The `.env` file is excluded from Git. Keep it private. Do not put keys in browser code, screenshots, issue reports, or commits. A GitHub personal access token is not a Foundry API key.

### Use an Existing Environment File

You can select another file with `ENV_FILE`. From the repository root on macOS, Linux, WSL, or Codespaces:

```bash
ENV_FILE="$HOME/.env" npm --prefix app start
```

In PowerShell:

```powershell
$env:ENV_FILE = "$HOME\.env"
npm --prefix app start
```

An unreadable explicit file stops the app. Do not copy shared credentials into the repository when you can use the existing file.

## Test Your Setup

### Start the Companion App

From the repository root:

```bash
npm --prefix app start
```

The terminal should show:

```text
Server is running on http://localhost:3000
```

1. Open `http://localhost:3000` locally. In Codespaces, open port 3000 from the **Ports** panel.
2. Keep the forwarded port **Private**. The sample does not authenticate HTTP callers.
3. Select Ada Lovelace from the character images.
4. Send a short message, such as `Tell me about your work in mathematics.`
5. Check that a response appears in the chat panel.

A successful response confirms that your endpoint, key, and deployment work together. The response text can vary. The terminal startup message alone does not verify model access.

Use **Ctrl+C** to stop the app.

### Run the Local Regression Tests

From the repository root:

```bash
npm --prefix app test
```

These tests check request validation, chat behavior, and SDK restrictions. They use local test services and do not verify your Foundry credentials.

## Use the Configuration in Lesson Samples

> [!NOTE]
> The companion app and lesson AI clients use `AI_ENDPOINT`, `AI_API_KEY`, and `AI_MODEL`. Lesson package scripts load the repository-root `.env` when it exists. Existing environment variables take priority. Standalone scripts need the same variables before they start.

The lesson clients validate the required variables before creating an OpenAI client. This is the connection pattern:

```javascript
import { OpenAI } from 'openai';

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const openai = new OpenAI({
  baseURL: endpoint,
  apiKey
});

const completion = await openai.chat.completions.create({
  model,
  messages: [{ role: 'user', content: 'Tell me about Ada Lovelace.' }]
});

console.log(completion.choices[0]?.message?.content);
```

For Lesson 2, install its own dependencies and run its start script:

```bash
cd lessons/02-first-ai-app/sample-app
npm ci
npm start
```

For an existing home environment file, run `node --env-file="$HOME/.env" app.js` in that lesson directory instead. Use the lesson's build and run instructions for TypeScript or MCP examples. `ENV_FILE` is the companion app's file-selection option; Node's `--env-file` selects a file for a standalone lesson script.

Lesson 5 has an independent package. Run `npm ci --prefix lessons/05-rag` from the repository root, then use `npm --prefix lessons/05-rag run cars` or `npm --prefix lessons/05-rag run wikipedia`.

Lesson 4 includes a native JSON Schema example. Run `npm --prefix lessons/04-structured-output/sample-app run structured` to parse a validated travel request with the current OpenAI SDK and Zod.

For MCP lessons, `npm run build` only compiles the code. `npm run client` builds and runs the client, while `npm start` runs the compiled server. Clients close their transport after completing their work.

Models can support different request parameters. If a lesson sets parameters that your deployment rejects, such as `temperature` or `max_tokens`, use a compatible model or update the request for that model.

## Optional: Use GitHub Copilot for Companion Chat

The companion app also has a Copilot SDK backend. This option requires GitHub Copilot access rather than a Foundry deployment.

From the repository root:

```bash
npm --prefix app run start:sdk
```

Use a Copilot-compatible token or GitHub CLI authentication as described in the [app guide](../../app/README.md#run). This option is for companion chat; it does not configure the independent lesson samples.

The SDK backend is chat-only. Do not enable host tools or approve tool permissions to make chat work. Keep its forwarded port private.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Node.js version error | Select Node.js LTS. Use `nvm use` if nvm is installed. |
| `Cannot find module` | Run `npm ci` in the package directory. Root and app dependencies are separate. |
| `AI_ENDPOINT`, `AI_API_KEY`, or `AI_MODEL` is required | Check the repository-root `.env`, spelling, and whether an existing environment variable overrides the file. |
| The environment file could not be read | Check the `ENV_FILE` path and file permissions. |
| HTTP 401 or invalid API key | Use a complete key from the same resource as the endpoint. Ask your administrator whether API-key authentication is allowed. |
| HTTP 404 or deployment not found | Check the `/openai/v1` base URL and exact deployment name in `AI_MODEL`. |
| HTTP 400 or unsupported parameter | Confirm that the chosen model supports the lesson's API and request parameters. |
| HTTP 429 or a rate limit error | Wait before retrying. Check deployment quota and usage in Foundry. |
| A generic error appears in the chat | Read the server terminal for the provider error. Remove keys and private resource details before sharing it. |
| Port 3000 is in use | Stop your own earlier app instance, or set another `PORT` value before starting the app. |

## Setup Checklist

- [ ] Node.js LTS is available.
- [ ] Root and companion app dependencies are installed.
- [ ] A chat model is deployed in Microsoft Foundry.
- [ ] The deployment name, API key, and `/openai/v1` endpoint are in `.env` or a selected `ENV_FILE`.
- [ ] The companion app returns a real model response.
- [ ] Local regression tests pass.
- [ ] Credentials remain private and any forwarded app port is private.

When you finish using the Azure resources, remove only deployments or resources that you created for this course. Do not delete shared resources without their owner's approval.

## Next Steps and Resources

- Continue with [Lesson 1: Introduction to Generative AI](../../lessons/01-intro-to-genai/README.md).
- Read the [companion app guide](../../app/README.md).
- See [Microsoft Foundry resource setup](https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources) and [Azure OpenAI-compatible endpoint guidance](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/how-to/switching-endpoints).
- Read [GitHub Codespaces documentation](https://docs.github.com/en/codespaces).
- For course problems, use this repository's [issues page](https://github.com/microsoft/generative-ai-with-javascript/issues).

The setup flow follows the [LangChain.js course setup](https://github.com/microsoft/langchainjs-for-beginners/blob/main/00-course-setup/README.md), with this course's repository, packages, model requirements, and companion app commands.

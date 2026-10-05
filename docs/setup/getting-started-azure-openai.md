# Microsoft Foundry and Azure OpenAI Setup

Use the [course setup guide](README.md) for the complete instructions. It covers local development and Codespaces, Foundry project creation, model deployment, API keys, environment variables, and a live companion app check.

## Connection Settings

The companion app already uses the `openai` JavaScript package. You do not need to install `@azure/openai`, create a hub, or replace the app's client code.

Create `.env` in the repository root with these values from your Foundry resource:

```dotenv
AI_API_KEY=your_microsoft_foundry_api_key
AI_ENDPOINT=https://your-resource.openai.azure.com/openai/v1
AI_MODEL=gpt-5-mini
```

`AI_MODEL` must be your deployment name. `AI_ENDPOINT` must be the Azure OpenAI-compatible API base URL, not the Foundry project URL or a full chat-completion request URL.

Follow [Set Up Microsoft Foundry](README.md#set-up-microsoft-foundry) to obtain these values, then [Configure Environment Variables](README.md#configure-environment-variables).

## Run and Verify

From the repository root:

```bash
npm ci
npm ci --prefix app
npm --prefix app start
```

Open `http://localhost:3000`, select a character, and send a message. In Codespaces, keep port 3000 private.

For an existing environment file:

```bash
ENV_FILE="$HOME/.env" npm --prefix app start
```

See [Test Your Setup](README.md#test-your-setup) and [Troubleshooting](README.md#troubleshooting) for verification and error handling.

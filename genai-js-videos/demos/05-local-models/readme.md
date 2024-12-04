# Demo - Speed up your AI development with LangChain.js

## Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/) v20+
- [Ollama](https://ollama.com)
- [Docker](https://www.docker.com/)
- [Code runner extension for VS Code](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- [REST client extension for VS Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

Before running the demo, make sure you have the packages installed by running the following command at the root of the repository:

```bash
npm install
```

Open a terminal to download these models with Ollama:

```bash
ollama pull phi3
ollama pull all-minilm:l6-v2
```

## Scenario

### Preparation

1. Open the ollama website: https://ollama.com in a full screen browser
2. Open the files `ollama.http` and `openai.js` in VS Code
3. Open the terminal in VS Code and expand it to full screen

### Demo

1. Show the Ollama website, how to download and install Ollama.
2. Show the list of models available with Ollama, scroll down to Phi-3 and show that there are multiple versions of the model available.
3. Switch to VS Code terminal.
4. Explain that you can use Ollama to download models and use them locally using this command: `ollama pull phi3`
5. Show the list of models installed locally using this command: `ollama list`
6. Explain that you can use Ollama with a web UI to interact with the models.
7. Run this command to start Open WebUI, a local ChatGPT clone: `docker run -p 3000:8080 --add-host=host.docker.internal:host-gateway --rm ghcr.io/open-webui/open-webui:main`
  * Open the browser and go to http://localhost:3000
  * Create an account
  * Select `phi3` model in the list at the top
  * Use one of the examples prompt to test the model
8. Switch back to VS Code and show `ollama.http` file to explore the API.
  * Explain and run each request to show the Ollama API
9. Open `openai.js` to show that you can directly use Ollama with the OpenAI SDK.
  * Run the code to show the response.

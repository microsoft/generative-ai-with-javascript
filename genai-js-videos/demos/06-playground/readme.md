# Demo - Speed up your AI development with LangChain.js

## Prerequisites
- A GitHub account

## Scenario

### Preparation

1. Make sure you're logged in to your GitHub account.
2. Open a browser to the Ollama Playground: https://aka.ms/ai/js/play
3. If you're doing this demo live, make sure to create the Codespaces before the demo starts, as it can take a few minutes to create the environment (see **step 1** of the demo).

### Demo

1. To open the playground, click on the “Open Codespaces button” here. It will create a Codespace, which is an online development environment that you can use directly from your browser. You need a GitHub account for that, so if you don’t have one you can create one for free.
2. It will take a few minutes the first time to create the environment, so you can just grab a cup of coffee to wait till it’s ready.
3. Now we have something familiar: it’s the very same VS Code editor that you know, but right in your browser.
4. First let’s open a terminal and check that everything works: `ollama run phi3`
  * By running this command, I can chat with the model, it’s like a minimal chatgpt in my terminal.
  * Let’s say: “Create an haiku about an hungry cat”
  * Use `Ctrl+D` to close the chat
5. Open the `ollama.ipynb` notebook.
  * This is a Jupyter notebook, and it allows to mix markdown text with code to create interactive experiences.
6. First, we define the model name here. If you want to play with different models, you can do it by changing the constant here, just make sure that you download the model with ollama first.
  * For every code block you can modify the code if you want, and you get this button on the left that you can use to run the code. * Make sure to run it at least once every time you see one, to make sure you set the context right.
7. Next we set up the OpenAI client, so that we can make calls to the model.
  * Ollama provides a compatible API, we just have to set the baseURL here and put an API key, even though Ollama don’t need it.
  * Notice the `npm` prefix here in the import, it’s because we’re use Deno as our runtime to run TypeScript in the notebook here, it would not be needed if you’re using Node.js.
8. Let’s run the code, and we’re now ready to create a simple chat completion here.
  * *Explain*
  * Run the code
10. Now it’s your turn to play with the notebook, we have more more examples with prompt engineering, few shot learning and even RAG.
11. Once you’ve completed the notebook, we also have code samples in the `samples` folder here.
  * You can open any of them, like this classifier example here and run it directly by click on the run button at the top.
  * This can be a great starting point to experiment with your own use cases.

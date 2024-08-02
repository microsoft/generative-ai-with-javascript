# Get started with AI for free using Phi3

## Description

Time for some hands-on AI experimentation with our latest tutorial! Learn how to use the Ollama tool and Phi-3 model directly from your browser, with no need for a high-end GPU. Explore interactive Jupyter notebooks, tweak models, and run code examples to elevate your AI skills.

Links:
- AI JavaScript playground: https://aka.ms/ai/js/play
- Phi-3 cookbook: https://aka.ms/phi3/cookbook
- Azure OpenAI quickstart: https://aka.ms/ai/js/azure-quickstart

Watch this series' playlist: https://aka.ms/genai-js
All slides and code sample: https://aka.ms/genai-js/content

#ai #phi3 #ollama

## Script

In this session, we'll experiment with AI models using the Ollama tool and the Phi-3 model directly from a browser.

For that, we've built an online playground that you can use for free on any machine that can run a web browser, so you don't even need a fast GPU or CPU. This is meant to be interactive, so go ahead and open the link that you also find in the video description so we can play along.

If you open this link, it will direct you to a GitHub repository. From there, select the "Codespace" button, and it will ask you to create a codespace. A codespace is an online development environment that you can use directly from your browser. You need a GitHub account for that, so if you don't have one, you can create one for free. Next, select "Create Codespace," and then it will take a few minutes the first time to create the environment. You can just go grab a cup of coffee and wait till it's ready.

Now we have something familiar: it's the very same VS Code editor that you know but right in your browser. First, let's use the terminal to check that everything works. Type in `ollama run phi3`. By running this command, I can chat with the model. It's like a minimal ChatGPT right in my terminal.

Let's say, create an haiku about a hungry cat. And there I get the response from the model. Everything looks good in there. You can play a bit with the model, and once you're done, you can use `Ctrl+D` to close the chat.

Next, let's open this ollama notebook. This is a Jupyter notebook, which allows you to mix Markdown text with code to create interactive experiences. First, we define the model there. If you want to play with different models, you can do it by changing the constant. Just make sure that you download the model with Ollama first.

For every code block that you see, you can modify the code if you want. You can use the button on the left to run the code. Make sure to run it at least once every time you see one to ensure you set the context right for the notebook. Next, we set up the OpenAI client so that we can make calls to the model. Ollama provides a compatible API, so we just have to set the base URL and put in an API key, even though Ollama doesn't need it.

Let's run it, and now we can play with the SDK. Just notice the `npm` prefix here in the import. It's because we're using Deno as our runtime to run TypeScript in the notebook. It wouldn't be needed if you were using Node.js. Now that we have set up the OpenAI client, we can use it to generate a chat completion. Again, we use the SDK, specify the model name, and send it our prompt. Let's run it, and here we get the result.

Now it's your turn to play with the notebook. We have more examples here with prompt engineering, few-shot learning, and even retrieval-augmented generation. Once you've completed the notebook, you also have a few samples in this folder. You can open any of them, like, for example, this classifier one, and then run the example directly using the run button at the top. Here, what I'm trying to do is extract the sentiment of a text using JSON format, and here we get the result. This is mostly positive, not too aggressive, and in French.

Now it's your turn to play with generative AI, and the best thing is that you don't even have to set up anything.

Stay tuned for the next session; we have plenty more content coming for you to learn more about how you can use AI more effectively and deploy your apps when it's time to shine.

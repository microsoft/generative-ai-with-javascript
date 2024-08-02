# Essential prompt engineering techniques

## Description

DUnlock the full potential of AI with practical prompt engineering tips! Learn how to craft precise, effective prompts that deliver accurate results. Perfect for developers aiming to elevate their AI projects!

Links:
- Prompt engineering training: https://aka.ms/genai/prompts
- Generative AI course: https://aka.ms/genai/beginners
- Awesome GPTs prompts: https://github.com/ai-boost/awesome-prompts

Watch this series' playlist: https://aka.ms/genai-js
All slides and code sample: https://aka.ms/genai-js/content

#ai #prompt-engineering #openai

## Script

In this session, we'll talk about practical prompt engineering techniques that you can use in your apps to get more effective prompts. Let's start by defining what exactly is prompt engineering. Prompt engineering is the process of designing and optimizing prompts to get better results from AI models. You'll often hear some fancy names when talking about prompt engineering techniques, but behind the fancy names, there are simple concepts that you can easily understand and apply.

Let's start with zero-shot. It simply means that you can generate results without providing any specific example, just using the general training data of the model. Here I'm trying to translate text from English to French. "Hello world" in French is "bonjour le monde." Because there were enough texts that were provided in the training material of the model, both in French and English, I don't need anything more to get the result that I want.

Next, we have few-shot learning. By adding examples in your prompt context, you can condition the output to be what you want it to be. For example, here I have a phrase in the French language followed by a colon and the language name in English. You provide three examples and then a new phrase followed by a colon as input. This will hint the model into giving the result that we want. Okay, this phrase we provided is in Swedish.

As we've seen in the previous video, LLMs do not think: they just complete text. So when you're asking a question that requires some reasoning, very often they'll get it wrong. Like with this simple problem here: "When I was six years old, my sister was twice my age. Now I'm 30. How old is my sister?" And yeah, most of the time, if you're trying to get a straight answer, it will be wrong. 

But we can use a technique called chain of thought to force the model to simulate human-like reasoning. If I add this simple phrase, "let's think step by step," in the prompt, this time it will make the model decompose the steps needed to get to the results. By doing that, it will augment the context used to get to the answer. And you're more likely to get the correct results.

Now let's cover a few tips that you can use to improve your prompts. The most important one is to always be as clear as possible when writing your prompts. For example, if you want to get a short product description, add as much detail as you can regarding what you want it to say, like saying here that the bottle is 100% recycled and that it comes with no dyes. The more precise your instructions are, the more accurate is the result.

When designing a prompt, try to always think about the context to set it right. For example, if you want to extract the key points from an email, define what topics you're interested in so the model will know what to prioritize. For example, here I can say that I'm interested in AI webinars and submission deadlines. Sometimes you do not need complex descriptions to get what you want. Instead, you can use simple cues to lead the model in the right direction. Like here, adding the keyword SELECT will make the model generate a SQL query, even though we did not specify the query language anywhere.

When you need the output of your prompt to follow a specific format, you can define it in the prompt directly. For example, here I want to perform sentiment analysis on a text. If I add that I want JSON output and provide the shape of the JSON, I can get exactly the format I need for my purpose. Remember the few-shot learning techniques we've just seen? Sometimes the easiest way to get the results you want is simply to provide a few examples instead of a long description. So here I want to generate three brief follow-up questions following an existing user query. Just instead of describing what I want, I can just provide an example. And with the example, I can also specify the format.

If you're trying to ask a complex task that needs some reasoning, or if you explicitly want to know how you get to the generated results, then you can use the chain of thought technique. By asking the model to use a step-by-step approach, you will make it decompose the task and simulate reasoning. Like here in this example, I'm trying to know what sport is easiest to learn but hardest to master. And I'm not really interested in the result by itself, but more into the reasoning and how you get to that answer. Why did you pick one specific sport instead of another?

Now let's put these tips in practice with an example scenario. Here we are building an AI assistant for our company called Contoso Shoes, and we want to help our customers choose the right products for them. So I've created first this simple prompt here: OK, we have an assistant that helps the user with questions. The question is, what shoes should I use for running? Let's try that for now.

So now I already see that there's some issue there. The answer is way too long. So the first thing, I will try to be precise in the prompt to say, OK, be brief and answer with two lines max. OK, I want the answer to be more compact, more brief. So yeah, it looks a bit better.

But we want the answer to be our company products. So let's give it some context. Let's say this time I want to help the users with questions about products for the company Contoso Shoes. Let's try again. OK, it's a bit better.

But now it makes products that don't exist. So what we'll do is just provide a list of the products that we have and their features. So what I will do is add in the context in there, using Markdown, a list of the products that we provide at the Contoso Shoes company, along with some characteristics. Note that we're using a Markdown table here, which AI models usually understand. You could use CSV or JSON also. Now the result is way better. It's saying that we should use Contoso Dash, which is the correct answer for that specific question.

But let's be honest, the tone is not very friendly here. So let's tell it to be more cheerful. And to do that, I will just say, be cheerful. OK, a bit better. And I even get some emojis in there.

And you know what? Now we could even make it more personal, if we could include the user's name in the answer. So let's do just that. So I will say, OK, be cheerful, and mention the user's name. And of course, we need to provide it somewhere. So let's say somewhere in the prompt, user details, and I give it the name of the user. Let's try it again. And now this time, we get a personalized answer. Now this is the kind of result that we want.

But we would like to consume the results in a web UI. So it will be best to get the results as JSON. So what I can do is that I can hint at the format I want in there, without even the need to say that I want JSON. As you can see, I'm just putting the form, the shape of the answer that I want. Let's try it again. And yeah, perfect. I get both the product name and the answer to show in the UI. And now you've seen how you can tweak a prompt to get the results you need from AI models.

Let's quickly recap the tips we've just seen to get more effective prompts. First, be clear in the instructions that you provide. When you can, provide additional context to make sure that the AI model has everything it needs to better understand your request. Use cues to tip the model into the direction you want the answers to be. You can also define the output format explicitly if you have special needs. Sometimes using examples is the best way to get the result that you want. And if you have complex tasks, you can ask explicitly to break it down step by step. Note that you don't need to use all of these all the time. Only use what makes sense for your use case.

In the next session, we'll talk about RAG, a more complex prompt engineering technique to improve the AI accuracy and reliability.

# Lesson 1: Introduction to Generative AI and LLMs for JavaScript Developers

In this lesson, you will learn to:

- Understand the basics of generative AI and Large Language Models (LLMs).
- Identify the potential applications and limitations of LLMs in JavaScript development.
- Explore how generative AI can enhance user experience in JavaScript applications.


By now, I'm sure you've heard of a tool like ChatGPT or generative AI. The idea is that you provide a prompt, a sentence and as output you get a full paragraph or even a full page of text. This text can be used for a variety of purposes, from generating creative writing to answering questions or even writing code.

Additionally, this has all gone multi modal so you can now provide an image or a video as input and get all sorts of outputs.

The advent of generative AI has improved a lot of people's workflows in that it can generate text but also can summarize text, translate text and much much more. 

> *In short, natural language prompts is the new interface on a lot of apps and it's what your customers are expecting.* 

## Narrative: A journey through time

Throughout this curriculum, you will also experience a journey through time and meet some of the greatest minds in history. You will solve problems with them and learn how to apply generative AI to your JavaScript applications.

### Into the maelstrom

***London 1860***

![image of London 1860, the workshop of a robot builder, robot torso sitting on a workbench](./london.png)

*You stand by your work desk in your workshop, the desk is covered in dust, and cluttered springs, gears, and tools. In the middle of the desk is a torso of a robot. You're looking out the window, it looks like a sunny day for once. You reflect on the last few months, struggling to get your wooden based automaton to work when there's a knock on the door.* 

*You're pulled from your daydream and you wonder who it can be as you usually don't get deliveries this time of day.  You open the door and there's no one there and your eyes are drawn to a piece of paper on the ground, in fact it's an envelope with some writing on it. You pick it up and read it, it says: "Dear friend, I'm sending you this letter to help you in your endeavors with your automaton. It's important you continue this important work. I've enclosed a key to the library, meet me there at 3pm today. Yours, Charles Babbage". You're stunned, Charles Babbage, the great mathematician and inventor of the difference engine, wants to meet you. You quickly grab your coat and head out the door.*

*You've been walking for a good 20 minutes passing by the Thames and you finally arrive at the library. Strange, you think to yourself, it looks like it's closed up, there's even a wooden board blocking access.*

*You grab hold of the wooden board and it gives way and falls to the ground with a large thump. The door doesn't seems locked and glides open as you give it a gentle push. It's dark and gloomy inside, no one has been there for years it seems. Light is shining in from the windows and you see a figure in the distance waving at you. You assume it's Charles Babbage and you walk towards him. It does indeed look like Charles (from what you can tell of photos of him in the newspaper) as you approach him but as you get closer and stretch out your hands to greet him he disappears in a flash of light and the only thing remaining is tiny metallic device on the floor spinning around. You pick it up and it's a small metallic beetle with 3 buttons, an up arrow, a down arrow and red button. You're taken aback by the sudden turn of events and you wonder what to do next.* 

*Your fingers are strangely drawn to the red button and you see yourself like in a dream push it. What follows next is best described as a maelstrom of colors and shapes and then everything goes black.*

***Alexandria 300 BC***   

*You come to, you still feel a bit disoriented but as you slowly open your eyes you see a bustling city in front of you. That's not all, what you see defies belief, it looks like an ancient city, with a big temple right in front of you and people walking around in togas. Surely, I must have hit my head and you close your eyes and open them again but the scene is still the same, whatever that device was, I'm definitely not in London anymore, question is where am I and when?*

![image of Alexandria](./alexandria.png)

*An elderly gentleman wearing a toga waves at you, he's standing on the steps of the temple. You walk closer trying to make out what he's saying. He's gesturing for you to come closer. You notice the device with the three buttons is in your pocket and you pull it out. The up arrow is glowing and you decide to press it. Suddenly the old mans voice is clear and you can understand him. He introduces himself as Dinocrates and that he built this city. He proceeds to welcome you and explains that you're arrival is foretold. You're stunned by this trying to make sense of it all and most importantly what to do next.*

*I need your help he says, our ships needs help with navigating the seas and we need to build a lighthouse to guide them, do you know anything of lighthouses?* 

*You are a mechanic you say, I build automata, let me see what I can do. You get this sudden thought, I've tried pressing the buttons of the device, can it understand me? You start talking out loud, device can you understand 
- Device: of course, what can I do for you?
- You: can you help me build a lighthouse?
- Device: Why of course, not a problem, I can help you with that.*
- You: Btw, do you have a name?
- Device: I'm called the Time Beetle, I can help you with anything you need, just ask. My creator calls me George, he says it's a good name for a beetle.*

>  In 300 BC, Alexandria was a thriving city founded by Alexander the Great in 331 BC. It quickly became one of the greatest cities of the Hellenistic world. The city was designed by Alexander's chief architect, Dinocrates, and was intended to be a major port and commercial centre.
>
> Alexandria was known for its impressive structures, including the Pharos (lighthouse), which was one of the Seven Wonders of the Ancient World, and the legendary Library of Alexandria, which was a major centre of learning and culture. The city was strategically located on the Mediterranean Sea, making it a vital hub for trade and cultural exchange between Egypt and the rest of the Mediterranean world.
>
>The city also served as the seat of the Ptolemaic Kingdom, which was established after Alexander's death. Under the Ptolemies, Alexandria continued to grow in size and wealth, rivaling even Rome in its splendour.


## What can Generative AI do for me and my apps?

Imagine how the following examples can revamp the user experience in your app:

- **A chatbot** that can generate human-like responses to user queries. Instead of a static FAQ page, users can interact with a chatbot that provides dynamic responses, this makes for a more engaging user experience and less frustrating user experience.
- **A content creation tool** that can generate blog posts, social media posts. Imagine creating campaigns in minutes instead of hours when an e-commerce site has a black friday sale.
- **A code completion tool** that can generate code snippets based on user input. This can be a huge time saver for developers, especially when working on repetitive tasks.

As you can see, these improvements can both help the front office and the back office of your app and company.

In this curriculum, we'll focus on integrating these type of experiences in your app and workflows while focusing specifically on the JavaScript ecosystem.

![Image of chat app](https://camo.githubusercontent.com/76f2ad7cd754a2de2b9957d2070448e130e5ba228084b9b4b128e3af9c9f5239/68747470733a2f2f6c6561726e2e6d6963726f736f66742e636f6d2f656e2d75732f73656d616e7469632d6b65726e656c2f6d656469612f636861742d636f70696c6f742d696e2d616374696f6e2e676966)

## Gen AI and the JavaScript Ecosystem

When talking about any programming language ecosystem, what do we mean and let's explore the JavaScript ecosystem specifically.

In a programming language ecosystem, we're usually talking about the following:

| What                             | Description                                                                                                           |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| The programming language itself  | Including its syntax and features.                                                                                     |
| What libraries and frameworks    | Available libraries to interact with the generative AI models.                                                         |
| Community supporting the language| Community matters, especially when trying to learn something new. The community around libraries and frameworks helps decide what libraries to use. It also affects how easy it is to find help when you're stuck. |

### JavaScript Ecosystem

So what about JavaScript and how is it different from other ecosystems?

| What                             | Description                                                                                                           |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Potential for full-stack development | JavaScript is one of the few languages that can be used for both front-end and back-end development.                    |
| Rich library ecosystem           | JavaScript has a vast library ecosystem, with frameworks like React, Angular, and Vue. There's NPM, the package manager, which is one of the largest package repositories in the world. |
| Strong community support         | JavaScript has a large and active community, with many resources available for learning and development. It also just works in the browser, which is a huge advantage. |
| IDE, integrated development environment | JavaScript has a variety of IDEs available, such as Visual Studio Code, WebStorm, and Atom. These IDEs have extensions built by companies and the community helping you with various aspects of development. |


We've given reasons above why JavaScript and its ecosystem is a good fit in general but why specifically for Generative AI? The answer is that it's a supported language by many cloud vendors and AI frameworks and tools. We also believe that even though Python might be top of mind for things AI, a lot of developers are using JavaScript and Typescript, in this survey by Statista, [62.5% of developers says they're using JavaScript](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) so therefore it's important to support these developers.

> *We couldn't be more excited to see what you'll build with this Generative AI and JavaScript curriculum*.

## Assignment

Research and write a brief report on how LLMs can be integrated into a JavaScript application to enhance user experience.

TIP: use an AI assistant for this task.

## Knowledge Check

Which of the following statements are true on Generative AI and JavaScript?

1. Generative AI can only generate text.
2. JavaScript is one of the few languages that can be used for both front-end and back-end development.
3. Python is the only language that can be used for AI development.

[Solution Quiz](./solution-quiz.md)
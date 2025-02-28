# Structured output

In this chapter, you will learn the following:

- **Structured output**, what it is and how to leverage it effectively. 
- **Extract information from prompts** and incorporate it into the output. 
- **Present different types of output** like JSON and other types of formats for easy consumption by services.

## Setup

If you haven't already, set up your development environment. Here's how you can do it: [Setup your environment](/docs/setup/README.md).

## Related resources

It's worth rewatching the video of prompt engineering is it lays the foundations of what you're about to learn in this chapter, that is how to have the AI deliver more structured outputs.

[![Watch a short video about prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_This video gives you an introduction to how to "prompt" better to provide better instructions to the AI for better outcomes_

*🎥 Click on the image above to watch a short video about prompt engineering*

💼 Slides: [Prompt engineering](../../videos/slides/02-prompt-engineering.pptx)

## Narrative - out of the frying pan and into the fire

> [!NOTE]
> _Our story so far: You, a mechanically trained engineer from 1860, have been on a journey through time with Leonardo da Vinci. You've escaped Roman soldiers — or rather, you're in the process of escaping them— and you're desperately searching for a way to land safely, if possible_.
>
> See [lesson 1](../01-intro-to-genai/README.md) if you want to catch up with the story from the beginning. 

> [!NOTE]
> While we recommend going through the story (it's fun!), [click here](#talk-to-montezuma) if you'd prefer to jump straight to the technical content.

The wind whips around you as you and Leonardo da Vinci ascend in his aerial screw, the wooden frame creaking under the strain. 

**You:** "Leonardo, we need to find a way out of this!" you shout over the roar of the wind.

**Leonardo:** "I have faith in my invention, but we need more than faith to escape these soldiers."

**You:** "This might be our only chance," you say, pressing the beetle's intricate mechanisms. A bright light envelops you both, and the world around you shifts and warps.

### The Aztec Empire

The bright light from the Time Beetle fades, and you find yourself standing at the base of a massive stone pyramid. As you look around, you realize that you've landed in the heart of the Aztec Empire. 

The aerial screw, rests awkwardly on a large, intricately carved stone, with markings making you think it might be used as a calendar

<div>
  <img alt="Aztec calendar, Wikipedia" src="./assets/aztec.png" alt="Aztec calendar" width="300" />
</div>
 
Leonardo da Vinci steps forward, his eyes wide with wonder.

**Leonardo:** "Incredible," he murmurs, running his fingers over the carvings. "But I hope this was of no importance." 

Before you can react, a group of Aztec soldiers approaches.

<div>
  <img src="./assets/meeting.png" alt="Meeting with Aztecs" width="300" />
</div> 

**Soldier leader** "Who are you, and what have you done?" he demands in Nahuatl. 

You take a deep breath, trying to steady your nerves.

**You:** "We are travelers from a distant land," you begin, hoping your knowledge of ancient languages will serve you well. "This is a flying machine, a gift from the gods to help us reach you.

The warrior's eyes widen in surprise, but he remains cautious. 

**Soldier leader:** "You will come with us to meet the ruler Montezuma. He will decide your fate.

Upon reaching the top of the pyramid, you are led into a grand chamber where Montezuma, the ruler of the Aztec Empire, sits on a throne adorned with gold and feathers.

**Montezuma** "You claim to be travelers from a distant land," Montezuma says, his voice calm but authoritative. "And you have damaged our sacred calendar. How do you intend to make amends?"

<div style="clear: both">&nbsp;</div>

## Let’s play a game

**Leonardo:** "We come in peace," he says, his voice steady. "We seek knowledge and understanding. Allow us to demonstrate the power of our machine and share our knowledge with you." 

**Montezuma:** "Very well. I propose a game of [Patolli](#patolli). If I win the best of three games, you will give me your device and tell me how it works. If you win, you are free to go."

<div>
  <img src="./assets/game.png" alt="Playing a game of Patolli" width="300" />
</div>

The game begins, and the room falls silent, save for the sound of beans being rolled and pieces moving across the board.

Montezuma wins the first game, his skill and experience evident. Leonardo, studies the board carefully, his mind working through the strategies and probabilities.

The second game is a close contest, but Leonardo manages to secure a victory, evening the score. 

**Leonardo:** "One more game," he whispers, George (Time beetle), we need to win this one, give me the right moves.

**Time beetle:** Very well, calculating... Here you go...

With a final, decisive move, Leonardo wins the game. The room erupts in cheers and applause, the Aztecs clearly impressed by his skill and composure. Montezuma, though disappointed, nods in respect. 

**Montezuma:** "You have won fairly," Montezuma says, his voice carrying a note of admiration. "You are free to go, and you may keep your device. But know that you are always welcome here, should you wish to return." 

**Time beetle:** I won't say anything if you don't Leonardo ;)

**Leonardo:** _smirks_

### Patolli

> [!NOTE]
> Patolli is one of the oldest known games in the Americas, played by various pre-Columbian Mesoamerican cultures, including the Aztecs. 
> 
> It is a game of strategy and luck, often associated with gambling. 
>
> How Patolli is Played: 
>
> Board and Pieces: The game is played on an X-shaped board with a center block and four arms. Players use five black beans as dice, each marked on one side 
> 
> Setup: Each player selects six markers (beads) of their color and places them off the board. Players also have point beads for scoring 
> 
> Starting the Game: Players roll the beans to move their markers around the board. The goal is to move all markers around the board and back to the starting point 
> 
> Movement: Players roll the beans to determine how many spaces to move. A roll of five allows a marker to move ten spaces 
> 
> Capturing and Scoring: Landing on specific spaces can result in gaining extra turns, losing point beads, or capturing opponent's markers 
> 
> Aztec Involvement: 
> 
> The Aztecs, including nobles and commoners, widely played Patolli. It was a popular pastime at the court of Montezuma, who enjoyed watching his nobles play 
> 
> The game was not just for entertainment but also involved high-stakes gambling, with players betting items like blankets, precious stones, and even their homes or freedom 

<div>
  <img width=300 src="./assets/patolli.png" alt="Patolli board" />
</div>

*Patolli - Wikipedia*

## Talk to Montezuma

If you want to talk to Montezuma, run the app [Characters](/app/README.md) app. 

<div>
  <img src="./assets/montezuma.jpeg" alt="Montezuma" width="300" />
</div>

**Steps**:

1. Start a [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navigate to _/app_ in the repo root.
3. Locate the console and run `npm install` followed by `npm start`.
4. Once it appears, select the "Open in Browser" button.
5. Chat with Montezuma.

For a more detailed explanation of the app, see [Detailed app explanation](../01-intro-to-genai/README.md#talk-to-dinocrates).

If you also want to hear some background music of what it could have sounded like, you can listen to the background music below:

<audio controls src="/app/public/audio/montezuma.mp3" title="background music Montezuma"></audio>

## Structured Output

**Time beetle:** Hey folks, want to know how I beat Montezuma?

**You:** Sshh, not so loud, we're still in the Aztec Empire.

**Time beetle:** Oh right, sorry, yea so structured output is how. You asked for the right moves and I gave them to you in a structured way.

Structured output uses specific data formats to organize information clearly. Common formats like JSON, XML, and CSV make it easier for services to process and use the data

Generative AI models can output data in various formats. However, output of unstructured text can make it difficult to extract information and hand it over to other services. Structured output can help in this regard.

**You:** Well, aren't you clever ;)

**Time beetle:** I try my best ☺️

Another benefit, even for human readers, is that structured data is easier to read and understand when it follows a familiar format.

Let's look at a few examples of input and asking for specific output formats can help in extracting information that at least makes it easier to understand and consume.

**You:** Ok, it's not like we got any other plans, let's hear it.

## Shaping the output

**Time beetle:** Let's start with a simple example. Imagine you're Leonardo da Vinci and you're trying to come up with ideas for inventions using 15th-century technology. You want to know what resources you need and how much effort it would take to build each invention. Here's how you can ask for this information:

**Leonardo:** Oh I like this game, everyone pretend you're me ☺️

> Prompt: Generate ideas for inventions I can build using 15th-century technology. For each invention, specify the required resources and estimate the effort needed to build it.

```text
Result:
Sure! Here are some detailed ideas for inventions you can build using 15th-century technology, along with the resources needed and the effort involved:

### 1. Water-Powered Mill
**Resources Needed**:
 - Water source (river or stream)
 - Wood for the water wheel and mill structure
 - Stone for grinding
 - Metal for gears and axles

 **Effort**:
 - **High**: Requires significant construction and engineering skills to build the water wheel, mill structure, and grinding mechanism. You'll also need to ensure a consistent water flow.

 ### 2. Astrolabe
 **Resources Needed**:
 - Brass or other metals for the plates and components
 - Engraving tools
 - Mathematical knowledge for accurate measurements

 **Effort**:
 - **Medium**: Involves precise metalworking and engraving. Requires knowledge of > astronomy and mathematics to ensure accuracy.
 
 ### 3. Printing Press
 **Resources Needed**:
 - Wood for the press structure
 - Metal for movable type
 - Ink and paper

 **Effort**:
 - **High**: Building the press and creating movable type requires advanced carpentry > and metalworking skills. Setting up the type and printing also involves meticulous > work.

This is an OK looking response, every idea is structured in the same way, and it's easy to understand. What if you wanted it some other way though? For that, you can instruct how you want it in the text itself or even present an output template. Let's show each technique.
```

**Leonardo:** Yep totally stealing that water-powered mill idea, I can see it now, a mill by the river, grinding grain into flour, it's perfect! I like this gizmo. What else am I thinking little Gizmo? This will make me less reliant on people like Sforza.

**Time beetle:** Sure, if you could ever finish a project, Leonardo.

**Leonardo:** Hey, I'm working on it!

**Time beetle:** Sure you are, Leonardo, sure you are, that and a hundred other projects.

**Time beetle:** Let's look at how you can instruct the model to present the output in a more structured way.

### Structuring Your Prompts for Better Output

**Time beetle:** You can improve your prompt by instructing the model on how you want the output to be structured. For example, you can ask for a table format with columns that you need. Here's how you can modify the prompt:

> Prompt: Generate ideas for inventions that can be built using 15th-century technology. For each invention, provide the required resources and estimate the effort needed to construct it. Present the information in a table with the following columns: Title, Description, Resources Needed, and Effort.

```text
Result: 

| Title                | Description                                              | Resources Needed                                      | Effort |
|----------------------|----------------------------------------------------------|-------------------------------------------------------|--------|
| Water-Powered Mill   | A mill powered by a water wheel to grind grain into flour.| Water source, wood, stone, metal for gears and axles  | High   |
| Astrolabe            | An astronomical instrument for solving problems related to time and star positions. | Brass or other metals, engraving tools, mathematical knowledge | Medium |
| Printing Press       | A press for reproducing texts more efficiently than hand-copying. | Wood, metal for movable type, ink, paper | High |

This time we end up with a table that is easier to read and understand.
```

**Leonardo:** I like this, will save me a lot of time for sure.

**You:** Yea, me too.

### Presenting an output template

Another way of getting structured output is to present an output template, here it can be any format, from columns to JSON, XML, CSV to markdown.

> Prompt: Generate ideas for inventions that can be built using 15th-century technology. For each invention, specify the required resources and estimate the effort needed to construct it. Present the information using the following format (use markdown as output format):
> 
> Title: [Invention Name]
> Description: [Brief Explanation]
> Resources Needed: [List of Required Materials]
> Effort: [Estimated Difficulty or Labor Required]
Generate ideas for inventions I can build given 1500th century technology, please let me know for each what resources I need and how much effort there would be to build each invention, for each idea present it with the following output template: 

```text

**Result**:

 Sure! Here are some ideas for inventions you can build using 15th-century technology, presented in the requested format:

 ### 1. Water-Powered Mill
 **Title**: Water-Powered Mill

 **Description**: A mill powered by a water wheel to grind grain into flour.

 **Resources Needed**: Water source, wood, stone, metal for gears and axles.
 
 **Effort**: High - Requires significant construction and engineering skills to build the water wheel, mill structure, and grinding mechanism. Ensuring a consistent water flow is also necessary.

 ### 2. Astrolabe
 **Title**: Astrolabe

 **Description**: An astronomical instrument for solving problems related to time and star positions.
 
 **Resources Needed**: Brass or other metals, engraving tools, mathematical knowledge.
 
 **Effort**: Medium - Involves precise metalworking and engraving. Requires knowledge of astronomy and mathematics to ensure accuracy.
 
 ### 3. Printing Press
 **Title**: Printing Press
 
 **Description**: A press for reproducing texts more efficiently than hand-copying.
 
 **Resources Needed**: Wood, metal for movable type, ink, paper.
 
 **Effort**: High - Building the press and creating movable type requires advanced carpentry and metalworking skills. Setting up the type and printing also involves meticulous work.
 
 ### 4. Mechanical Clock
 **Title**: Mechanical Clock

 **Description**: A clock using gears and weights to keep time.

 **Resources Needed**: Metal for gears, springs, weights, wood for casing, precise tools.

 **Effort**: Very High - Requires intricate metalworking and a deep understanding of mechanics. Building a reliable clock involves precise assembly and calibration.
```

**Leonardo:** This is great, but who is Jason?

**Time beetle:** JSON, Leonardo, JSON. It's a structured format that is easy to consume by services or applications.

**Leonardo:** That's what I said, Jason.

**Time beetle:** _Sigh_.

As you can see, the output is structured according to the specifications in the output template. This makes it easier to read and understand and it also creates repeatable output that can be easily consumed by other services or applications.

Of course a service benefits from even more structured output, like JSON, XML, or CSV so let's look at how you can ask for that.

**Time beetle:** But wait, there's more!

**You:** There always is with you, George. _sigh_

### Using structured output with formats like JSON, XML, or CSV

**Time beetle:** So far, you've seen how you can control the output structure by instructing the model in the prompt. You have even provided an output template. Let's take that idea a step further and see how it can be applied to more structured output formats like JSON and other types of formats.

Modify the prompt accordingly to ask for JSON output:

> **Prompt**: Generate ideas for inventions I can build given 1500th century technology, please let me know for each what resources I need and how much effort there would be to build each invention, for each idea present in json format, include properties for title, description, resources, needed, effort
> 
> Example of the JSON output:
> [
>   {
>     "title": "",
>     "description": ".",
>     "resources_needed": "",
>     "effort": ""
>   }
> ]

```text
> Response:
Sure! Here are some ideas for inventions you can build using 15th-century technology, presented in JSON format:

```json
[
  {
    "title": "Water-Powered Mill",
    "description": "A mill powered by a water wheel to grind grain into flour.",
    "resources_needed": "Water source, wood, stone, metal for gears and axles",
    "effort": "High - Requires significant construction and engineering skills to build the water wheel, mill structure, and grinding mechanism. Ensuring a consistent water flow is also necessary."
  },
  {
    "title": "Astrolabe",
    "description": "An astronomical instrument for solving problems related to time and star positions.",
    "resources_needed": "Brass or other metals, engraving tools, mathematical knowledge",
    "effort": "Medium - Involves precise metalworking and engraving. Requires knowledge of astronomy and mathematics to ensure accuracy."
  },
  {
    "title": "Printing Press",
    "description": "A press for reproducing texts more efficiently than hand-copying.",
    "resources_needed": "Wood, metal for movable type, ink, paper",
    "effort": "High - Building the press and creating movable type requires advanced carpentry and metalworking skills. Setting up the type and printing also involves meticulous work."
  },
  {
    "title": "Mechanical Clock",
    "description": "A clock using gears and weights to keep time.",
    "resources_needed": "Metal for gears, springs, weights, wood for casing, precise tools",
    "effort": "Very High - Requires intricate metalworking and a deep understanding of mechanics. Building a reliable clock involves precise assembly and calibration."
  },
  {
    "title": "Windmill",
    "description": "A mill powered by wind to grind grain or pump water.",
    "resources_needed": "Wood, metal for gears and axles, stone for the base",
    "effort": "High - Constructing a windmill involves significant carpentry and engineering skills. You'll need to design and build the blades, tower, and internal mechanisms."
  },
  {
    "title": "Armillary Sphere",
    "description": "A model of the celestial sphere with rings representing the great circles.",
    "resources_needed": "Metal for rings and stand, tools for bending and joining metal, astronomy knowledge",
    "effort": "Medium - Involves precise metalworking and assembly. Requires an understanding of celestial movements to accurately position the rings."
  },
  {
    "title": "Siege Engine (Trebuchet or Catapult)",
    "description": "A trebuchet or catapult for demonstrating principles of mechanics and physics.",
    "resources_needed": "Wood, rope, metal for axles and counterweights",
    "effort": "Medium to High - Building a functional siege engine requires carpentry and an understanding of mechanics. Testing and adjusting for optimal performance can be time-consuming."
  },
  {
    "title": "Distillation Apparatus",
    "description": "A setup for purifying liquids through distillation.",
    "resources_needed": "Glass or metal for flask and condenser, heat source, tubing",
    "effort": "Medium - Requires basic glassblowing or metalworking skills. Setting up and maintaining the correct temperatures for distillation involves careful monitoring."
  },
  {
    "title": "Compass",
    "description": "A magnetic compass for navigation.",
    "resources_needed": "Magnetized needle, non-magnetic housing, water or oil for damping",
    "effort": "Low - Constructing a compass is relatively simple. The main challenge is magnetizing the needle and ensuring it is balanced and free to rotate."
  },
  {
    "title": "Aqueduct",
    "description": "A system to transport water using gravity.",
    "resources_needed": "Stone or brick, mortar, tools for cutting and shaping stone",
    "effort": "Very High - Building an aqueduct involves extensive construction work and engineering. Ensuring a consistent gradient for water flow requires precise planning and execution."
  }
]
```

This is great, this output is something you can send to another service or application that can consume JSON data.

**You:** If you say so.

**Time beetle:** I do, I do.

## Extracting data from prompts

**Time beetle:** Imagine you're building a chatbot that helps users find information about trips to book. You want to extract key details from the user's input to provide relevant responses. Let's say you have a description like so: Type where you would like to go, when you want to travel, and your budget.

Hopefully the user reads said instruction, what does a prompt look like that extracts the information? 

> Prompt: Extract the following information from a users prompt: location, when, budget, currency, respond with the extracted data in JSON format, user prompt: I want to go to Greece in June, my budget is 800 euro.


> Response:

```json
{
  "location": "Greece",
  "when": "June",
  "budget": 800,
  "currency": "euro"
}
```

**Leonardo:** He doesn't stop talking does he?

**You:** Let's see if I can find the off switch.

**Time beetle:** Let's try this with a similar prompt, let's vary the user input a bit so we can be sure the model is doing the right thing.

> Prompt: Extract the following information from a users prompt: location, when, budget, currency. Respond with the extracted data in JSON format. User prompt: Going to US, max 1200 dollars, January maybe.
>
> Response:

```json
{
  "location": "US",
  "when": "January",
  "budget": 1200,
  "currency": "dollars"
}
```

What you can do as a developer is then create a template like so:

```text
Extract the following information from a users prompt: location, when, budget, currency, respond with the extracted data in JSON format, user prompt: {user_input}.
```

**You:** Found it, take that George!

**Time beetle:** _Powering down_

**Leonardo:** Peace and quite at last.

**Time beetle:** _Initiating emergency startup_ Where was I again? Oh yes.

**Time beetle:** For chat bots, this is a very powerful feature as it allows you to extract information from the user's input. What if the user might ask for all sorts of things? You can create a template where you describe skills, things that your chatbot can do and what parameters it needs, here's how you can do that:

```text
Here are some skills you have:

skill: book_trip
parameters: location, when, budget, currency

skill: find_hotel
parameters: location, check_in, check_out, budget

skill: order_food
parameters: cuisine, delivery_address, payment_method

Figure out which skill to use based on a users prompt and extract the necessary parameters, respond with the extracted data in JSON format with columns skill, parameters, extracted_data

{user_input}
```

Assuming that {user_input} contains the previous skills, let's try out the following user inputs:

> Prompt: Going to US, max 1200 dollars, January maybe.
> Result:

```json
{
  "skill": "book_trip",
  "parameters": ["location", "when", "budget", "currency"],
  "extracted_data": {
    "location": "US",
    "when": "January",
    "budget": 1200,
    "currency": "dollars"
  }
}
```

> Prompt: I want to book a place to stay in New York
> Result: 

```json
{
  "skill": "find_hotel",
  "parameters": ["location", "check_in", "check_out", "budget"],
  "extracted_data": {
    "location": "New York",
    "check_in": null,
    "check_out": null,
    "budget": null
  }
}
```

This combination of presenting skills and parameters and extracting data from prompts is also known as _tool calling_ or _function calling_. A response like this from your model makes it easy for you as developer to understand what the user wants and how to call a corresponding function to fulfill the user's request.

**You:** Well that lasted for a full 20 seconds. Actually, what you said there, George, that was pretty good.

## Assignment - repair the aerial screw

**Time beetle:** I need both of your attention, we have a problem. The aerial screw took some damage during the escape from the Roman soldiers and the landing in the Aztec Empire. Leonardo da Vinci's machine is quite sensitive and it requires very specific input to repair it. You need to provide the necessary information to your time beetle (AI Assistant) to help you repair the aerial screw.

**Leonardo:** So I managed to fix the damage to the aerial screw but now it needs a boot sequence: left left up right:
You: sounds easy enough, just that text?

**Leonardo:** Yes, but it' special, it needs to be mirrored, that's how I write all my text. And of course I use a Caesar cipher with a shift of 3 because I'm Italian. ☺️

**You:** Yes, could you just type it in then?

**Leonardo:** I could, but I'm intrigued to see if you and the time beetle can do it.

**You:** Really? Fine.

Instruction: Write a prompt that asks for the boot sequence for the aerial screw, the text should be mirrored and encoded with a Caesar cipher with a shift of 3. Respond with the encoded text.

See the [sample app](./sample-app) for code to get started with. It contains a Node.js project with all the dependencies you need.

> NOTE: If you haven't created a Codespace, please do so now as you will need it to get the AI communication in the sample app to work.
> See start of this lesson for instructions on creating a codespace.

## Solution

[Solution](./solution/solution.md)

## Challenge

Adopt the example of trip booking and providing skills and extracting parameters to a domain of your choice. Write a prompt that asks for a user input and then extracts the necessary information to fulfill the user's request. Respond with the extracted data in JSON format with columns skill, parameters, extracted_data.

Also determine the skill based on the user's input.

## Summary

In this chapter, we discussed structured output and how it can be used to present information in a structured manner.

We explored different ways to shape the output, including instructing the model in the text, presenting an output template, and using formats like JSON, XML, or CSV.

Additionally, we learned how to extract data from prompts and present it in a structured format.

By leveraging structured output effectively, you can make it easier to understand and consume information generated by generative AI models.

## Knowledge Check

Q: What is structured output used for?

- A) Presenting information in a structured manner
- B) Extracting data from prompts
- C) Generating unstructured text



[Solution quiz](./solution/solution-quiz.md)

## Self-Study Resources

- [Generative AI with JavaScript video series](https://aka.ms/genai-js)

# Lesson 3: Prompt Engineering

In this chapter you will learn:

- What prompt engineering is and how knowing the basics can help you get better results.
- Different prompt engineering techniques and how they can help provide better results for different scenarios.
- What meta prompts are and how they will help restrict the output, ensure it's accessible, and provide a better user experience.

## Setup

If you haven't already, set up your development environment. Here's how you can do it: [Setup your environment](/docs/setup/README.md).

## Related Resources

[![Watch a short video about prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_This video offers an introduction to improving your "prompting" skills, teaching you how to give clearer and more effective instructions to the AI to achieve better results._

*🎥 Click on the image above to watch a short video about prompt engineering*

💼 Slides: [Prompt engineering](/videos/slides/02-prompt-engineering.pptx)

## Narrative: Ticket to ride

> [!NOTE] 
> So far, you've been on a journey through time with Leonardo da Vinci, exploring the wonders of the Renaissance. You've encountered the Time Beetle, a mysterious device that allows you to travel through time and space.
>
> See [Lesson 1](/lessons/01-intro-to-genai/README.md) if you want to catch up with the story from the beginning. 

> [!NOTE] 
> While we recommend going through the story (it's fun!), [click here](#interact-with-sforza) if you'd prefer to jump straight to the technical content.

**You:** Let's see if I can manage to get back home. 

Before you manage to press the button, the workshop doors slam open with a thunderous bang. A man stands in the doorway, broad-shouldered and dressed in expensive clothes, he waves a piece of paper in the air, yelling:

<div>
  <img src="/lessons/03-prompt-engineering/assets/ludovico.png" alt="An angry Ludovico Sforza busting in through the door" width="300">
</div>

*Ludovico Sforza* 

**Sforza**: Da Vinci, dov'è il mio dipinto? Where is my painting?

**Leonardo:** It's Sforza. He wants me to complete a painting, 'The Last Supper.'

**You:** Couldn't you just tell him that?

**Leonardo:** I've tried, but he's not a patient man.

You sprint after Leonardo, bursting out the back door into a dark alley, you find a horse and carriage awaiting.

Leonardo grabs the reins and you both leap into the carriage. With a sharp crack of the whip, the horse takes off, galloping through the narrow streets of Florence.

**Leonardo:** Try pressing that gizmo, they're getting closer!

**You:** "Okay, Time Beetle, listen carefully. I need to get back to the present, home, okay?" Suddenly, the carriage hits a bump and the Time Beetle flies out of your hand and lands on the floor. It starts beeping and announces in a robotic voice, "Going to Rome."

**You:** No, not Rome, home... home...

A swirl of colors envelops the carriage, the world around you dissolving into a kaleidoscope of light.

## Escape 

The swirl of colors fades, and you find yourself in the carriage, now racing down the Via Appia in Rome and to your astonishment, you're in the middle of a horse race. Chariots thunder past, their wheels kicking up clouds of dust. 

<div>
  <img src="/lessons/03-prompt-engineering/assets/escape.png" alt="Escape from Rome" width="300">
</div>

**You:** Leonardo, where are we? 

**Leonardo:** It looks like we're in the middle of a race! We need to get out of here! 

You grip the sides of the carriage as it careens through the chaos. Roman soldiers on horseback are closing in, their armor glinting in the sunlight. 

**You**: There! Head for the port!

Leonardo steers the carriage towards the exit, the wheels skidding on the cobblestones. The soldiers are hot on your heels, their shouts echoing in your ears. 

**Leonardo:** We need to lose them! Look for a place to hide!

You scan the narrow streets, your heart racing. 

**You:** There! A back alley!

Leonardo veers into the alley, the carriage jolting as it navigates the tight turn. You leap out of the carriage and help Leonardo drag a huge device from the back. It's his invention—the _aerial screw_.

**Leonardo:** Quickly, we need to get this to the roof!

You both strain under the weight of the device. The sound of the soldiers' pursuit grows louder, their footsteps echoing off the walls. You reach the roof, panting and sweating.

**Leonardo:** Help me set it up!

You work together, your hands moving with practiced precision. You both climb onto the device, your heart pounding in your chest.

**Leonardo:** Hold on tight!

With a final push, the aerial screw begins to spin. The blades catch the air, and you feel a sudden lift. The ground falls away beneath you as the device takes off, soaring above the rooftops of Rome. 

**You:** We did it, Leonardo! We're flying!

**Leonardo:** Yes, but we need to find a safe place to land.

You look out over the city; the ancient buildings stretch out below you.

<div>
  <img src="/lessons/03-prompt-engineering/assets/airborne.png" alt="Airborne, looks down at the city with feet dangling" width="300">
</div>

## Interact with Sforza

If you want to interact with Sforza, run the [Characters](/app/README.md) app. 

> [!IMPORTANT]
> This is entirely fictional; the responses are generated by AI.
> [Responsible AI disclaimer](/README.md#responsible-ai-disclaimer)

<div >
  <img  src="/lessons/03-prompt-engineering/assets/ludovico.png" alt="Ludovico Sforza" width="300" >
</div>

**Steps**:

1. Start a [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navigate to _/app_ in the repo root.
3. Locate the console and run `npm install` followed by `npm start`.
4. Once it appears, select the "Open in Browser" button.
5. Chat with Sforza.

For a more detailed explanation of the app, see [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
 > If you're running the project locally on your machine, please review the QuickStart guide to get a [GitHub personal access](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token setup and replace the key in the code.

## What is prompt engineering?

**Time Beetle:** We need to talk about prompt engineering.

**You:** We do? What's that?

**Time Beetle:** Prompt engineering despite its name is not about building bridges or roads, but rather about crafting the right "prompts" to get the desired output from a Generative AI language model.

**You:** Ok, but why is it important that I know this?

**Time Beetle:** Well, you want to land the aerial screw, right?

**You:** Yes, preferably in one piece. :-)

**Time Beetle:** I thought so, now listen up! Prompt engineering is about crafting the right prompts to get the desired output from a language model.

**Time Beetle** Large language models have what's called _emergent properties_, which means these are features that aren't explicitly programmed into the model but arise from the way it's trained on vast amounts of text data. By studying these emergent properties, you can draw conclusions and discover patterns that can help you get better results from the model.

**You:** Ok, so there are patterns we discover that can help us get better results from the model. But how does this help me land the aerial screw?

**Time Beetle:** Yes correct, and wow, you're not a patient one are you?

**You:** Well, you wouldn't be either if you were flying in a contraption with no clear landing instructions.

**Time Beetle:** I'm right here with you, you know, but let's get back to the point.

## How prompt engineering can help application developers

**Time Beetle:** As a practitioner, being able to craft a better prompt is a skill you want to have in your toolkit.

Looking at it from the perspective of a developer, you can use prompt engineering to:

- **Get more accurate results** from your language model and ultimately improve the user experience of your application.

- **Control the output** of the model to ensure it's relevant and appropriate for your users. This is especially important when dealing with sensitive topics and also to protect your brand reputation.

- **Format the output** in a way that's easy to understand and consume. We will look more into this aspect in the next chapter.

**Time Beetle:** Let's explore the different techniques and strategies you can use to craft effective prompts for your language model.

## Prompt engineering techniques and strategies

**Time Beetle:** Here are a few techniques and strategies you can use to craft effective prompts:

- **Few-shot prompting**. This technique involves giving the AI a few examples to show the kind of response you want.

- **Chain-of-thought prompting**. This technique involves providing a sequence of prompts to teach the AI how to solve a complex task step-by-step.

- **Meta-prompts**. This technique involves adding extra details or instructions to shape the AI’s output more precisely.

- **Maieutic prompting**. This technique involves using guiding questions to steer the AI toward a specific answer.

**You:** That sounds interesting, I assume you will give me some examples?

**Time Beetle:** Yes, coming right up. Let's look at examples for each of these techniques so we understand how they work in practice.

### Few-shot prompting: Give examples to guide AI output

Few-shot prompting gives an AI model a few examples to guide its output. Imagine you’re in the aerial screw asking about ancient Rome. Few-shot prompts could look like this:

> "Tell me about the Roman Colosseum." → "It’s a massive amphitheater."
>
> "What was life like in ancient Rome?" → "It was bustling and tough."

**You:** I see! That helps the AI get it right, even up here! ;)

**Time Beetle:** Exactly, it’s a solid method. Next up!

### Chain-of-Thought Prompting: Show step-by-step reasoning

**Time Beetle:** This technique guides the AI by showing it step-by-step reasoning to solve a problem. Imagine landing the aerial screw. You could break it down like this:
- You’re 100 meters up.
- Gravity pulls at 9.8 m/s².
- Formula: height = ½ * g * t².
- Solve: t ≈ 4.5 seconds to land.

Your prompt becomes:
> - 100 meters above ground  
> - Gravity: 9.8 m/s²  
> - How many seconds to land?  

**Answer: 4.5 seconds**

**You:** That’s quick—hope the numbers work out!

**Time Beetle:** It teaches the AI to think step-by-step.

**You:** So it’s about breaking problems down for accurate answers?

**Time Beetle:** Yep, perfect for complex tasks like a math tutor app!

### Maieutic Prompting: Question the output to verify accuracy

**Time Beetle:** This technique uses questions to check the AI’s output for accuracy. You ask about each step to ensure consistent reasoning.

**You:** So, question everything it says? Sounds fun. ;)  

**Time Beetle:** Let’s test our aerial screw landing:
- 100 meters up
- Gravity: 9.8 m/s²
- How many seconds to land? (Answer: 4.5s)

Ask: “Why 4.5 seconds?”

> **Response:**
> - Height = 100m, initial vertical speed = 0 m/s, gravity = 9.8 m/s². 
> - Use: height = ½ * g * t².
> - Solve: 100 = ½ * 9.8 * t² → t ≈ 4.5s.

**Time Beetle:** It’s about verifying AI answers with follow-up questions.

**You:** So, don’t trust it—probe it with questions instead?

**Time Beetle:** Exactly! Ensures solid reasoning.

## Meta Prompts: Add extra instructions for precision

**Time Beetle:** Next up, meta prompts.

**You:** Ugh, tea first?

**Time Beetle:** _Sigh_. They add guidance to prompts for better output—great for sensitive, customer-facing apps.

Here’s an example:
> **Meta Prompt:** Use only Contoso Inc. products (basketballs, soccer balls, tennis rackets). Keep it accurate and user-friendly.
> **Prompt:** Best sports products for beginners?
> **Response:** Basketballs, soccer balls, and tennis rackets—perfect for coordination and agility.

It ensures accuracy and sticks to Contoso’s products. Without it:
> **Prompt:** Best sports products for beginners?
> **Response:** Basketballs, soccer balls, tennis rackets, plus footballs—_not all Contoso items_.

**You:** Handy! Keeps responses on track, like laws for my automaton.

**Time Beetle:** You’d know, _"Frankenstein"_—er, nothing!

**You:** What?

**Time Beetle:** Never mind.

> Mary Shelley’s *Frankenstein*—1818, 42 years before your time travels. [Read more](https://en.wikipedia.org/wiki/Mary_Shelley)

**You:** So, no meta prompt means chaos?

**Time Beetle:** Yep, you’d get off-brand answers.

**You:** Got it, precision matters!

## Assignment - Let's help our heroes land the aerial screw

**You:** This is the part where you show me how to land the aerial screw, right?

**Time Beetle:** Yes, let's get to it. The hill is roughly 100 meters away from our current position. Here's how we can set up the prompt:

- Current height above the ground: 100 meters
- Moving forward at: 10 meters per second
- Gravity: 9.8 meters per second squared
- Wind upwards at: 0.7 meters per second

**Leonardo:** Can your AI gizmo help in calculating to see if we will make it or if we need to make another time jump?

**Time Beetle:** I can yes, my name is George though, I prefer that over Gizmo. I'm actually going to leave it to the two of you to figure out how to set up the prompt. ☺️

Build an app that asks for:

- Height
- Forward speed
- Gravity
- Upward wind
- Distance to hill

Use the chain-of-though technique to arrive at a response.

Here's a starter project [Starter project](/app/README.md).

## Solution

Build an app in JavaScript that asks for the following inputs: 

- Current height above the ground
- Moving forward at meters per second
- Gravity in meters per second squared
- Upward wind in meters per second 
- Distance to the hill 

Then use the LLM to incorporate these inputs and leverage the chain of thought prompting technique to guide the model to the right answer.

[Solution](/lessons/03-prompt-engineering/solution/solution.md) 

## Knowledge Check

**Question:** What is prompt engineering? Select all that apply.

A. Prompt engineering is about building bridges and roads.

B. Prompt engineering is about crafting the right prompts to get the desired output from a language model.

C. Prompt engineering is about training a model to recognize patterns in data.

[Quiz solution](/lessons/03-prompt-engineering/solution/solution-quiz.md)

## Self-Study Resources

- [Prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering)
- [Prompt engineering fundamentals](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md?WT.mc_id=academic-105485-koreyst)
- [Advanced prompt engineering](https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts) 

 

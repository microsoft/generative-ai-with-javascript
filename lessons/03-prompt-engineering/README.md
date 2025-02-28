# Lesson 3: Prompt engineering

In this chapter you will learn:

- **Prompt engineering**, what it is and how knowing the basics of it can help you get better results. 
- **Prompt engineering techniques and strategies**. We will cover different prompt engineering techniques and how they can help provide better results for different scenarios. 
- **Meta prompts**, and how they will help restrict the output and ensure its accessible and provide a better user experience. 

## Setup

If you haven't already, set up your development environment. Here's how you can do it: [Setup your environment](/docs/setup/README.md).

## Related resources

[![Watch a short video about prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_This video gives you an introduction to how to "prompt" better to provide better instructions to the AI for better outcomes_

*🎥 Click on the image above to watch a short video about prompt engineering*

💼 Slides: [Prompt engineering](../../videos/slides/02-prompt-engineering.pptx)

## Narrative: Ticket to ride

> [!NOTE] 
> So far, you've been on a journey through time with Leonardo da Vinci, exploring the wonders of the Renaissance. You've encountered the Time Beetle, a mysterious device that allows you to travel through time and space.
>
> See [lesson 1](../01-intro-to-genai/README.md) if you want to catch up with the story from the beginning. 

> [!NOTE] 
> While we recommend going through the story (it's fun!), [click here](#talk-to-sforza) if you'd prefer to jump straight to the technical content.

**You:** "Let's see if I can manage to get back home." 

Before you manage to press the button, the workshop doors slam open with a thunderous bang. A man stands in the doorway, broad-shouldered and dressed in expensive clothes, he waves a piece of paper in the air, yelling:

<div>
  <img src="./assets/ludovico.png" alt="An angry Ludovico Sforza busting in through the door" width="300">
</div>

*Ludovico Sforza* 

**Sforza**: "Da Vinci, dov'è il mio dipinto? Where is my painting?"

**Leonardo:** It's Sforza. He wants me to complete a painting, 'The Last Supper.'"

**You:** "Couldn't you just tell him that?"

**Leonardo:** "I've tried, but he's not a patient man."

You sprint after Leonardo, bursting out the back door into a dark alley, you find a horse and carriage awaiting.

Leonardo grabs the reins and you both leap into the carriage. With a sharp crack of the whip, the horse takes off, galloping through the narrow streets of Florence.

**Leonardo:** "Try pressing that gizmo, they're getting closer!"

**You:** "Okay, Time Beetle, listen carefully. I need to get back to the present, home, okay?" Suddenly, the carriage hits a bump and the Time Beetle flies out of your hand and lands on the floor. It starts beeping and announces in a robotic voice, "Going to Rome."

**You:** "No, not Rome, home... home..."

A swirl of colours envelops the carriage, the world around you dissolving into a kaleidoscope of light.

## Escape 

The swirl of colors fades, and you find yourself in the carriage, now racing down the Via Appia in Rome and to your astonishment, you're in the middle of a horse race. Chariots thunder past, their wheels kicking up clouds of dust. 

<div>
  <img src="./assets/escape.png" alt="Escape from Rome" width="300">
</div>

**You:** "Leonardo, where are we?" 

**Leonardo:** "It looks like we're in the middle of a race! We need to get out of here!" 

You grip the sides of the carriage as it careens through the chaos. Roman soldiers on horseback are closing in, their armor glinting in the sunlight. 

**You**: "There! Head for the port!"

Leonardo steers the carriage towards the exit, the wheels skidding on the cobblestones. The soldiers are hot on your heels, their shouts echoing in your ears. 

**Leonardo:** "We need to lose them! Look for a place to hide!"

You scan the narrow streets, your heart racing. 

**You:** "There! A back alley!"

Leonardo veers into the alley, the carriage jolting as it navigates the tight turn. You leap out of the carriage and help Leonardo drag a huge device from the back. It's his invention—the _Aerial Screw_.

**Leonardo:** "Quickly, we need to get this to the roof!"

You both strain under the weight of the device. The sound of the soldiers' pursuit grows louder, their footsteps echoing off the walls. You reach the roof, panting and sweating.

**Leonardo:** "Help me set it up!"

You work together, your hands moving with practiced precision. You both climb onto the device, your heart pounding in your chest.

**Leonardo:** "Hold on tight!"

With a final push, the Aerial Screw begins to spin. The blades catch the air, and you feel a sudden lift. The ground falls away beneath you as the device takes off, soaring above the rooftops of Rome. 

**You:** "We did it, Leonardo! We're flying!"

**Leonardo:** "Yes, but we need to find a safe place to land."

You look out over the city; the ancient buildings stretch out below you.

<div>
  <img src="./assets/airborne.png" alt="Airborne, looks down at the city with feet dangling" width="300">
</div>

## Talk to Sforza

If you want to talk to Sforza, run the [Characters](/app/README.md) app. 

<div >
  <img  src="./assets/ludovico.png" alt="Ludovico Sforza" width="300" >
</div>

**Steps**:

1. Start a [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navigate to _/app/README.md_
3. Locate the console and run `npm install` followed by `npm start`. 
4. Once it appears, select the "Open in Browser" button.
5. Chat with Sforza.

For a more detailed explanation of the app, see [Detailed app explanation](../01-intro-to-genai/README.md#talk-to-dinocrates).

> [!NOTE]
 > If you're running the project locally on your machine, please review the QuickStart guide to get a [GitHub personal access](../../docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token setup and replace the key in the code.

## What is prompt engineering?

**Time beetle:** We need to talk about prompt engineering.

**You:** We do? What's that?

**Time beetle:** Prompt engineering despite its name is not about building bridges or roads, but rather about crafting the right prompts to get the desired output from a language model.  

**You:** Ok, but why is it important that I know this?

**Time beetle:** Well, you want to land the aerial screw, right?

**You:** Yes, preferably in one piece. ☺️

**Time beetle:** I thought so, now listen up! Prompt engineering is about crafting the right prompts to get the desired output from a language model. 

**Time beetle** Large language models have what's called _emergent properties_, which means these are features that aren't explicitly programmed into the model but arise from the way it's trained on vast amounts of text data. 

By studying these emergent properties, you can draw conclusions and discover patterns that can help you get better results from the model.

**You:** Ok, so there are patterns we discover that can help us get better results from the model. But how does this help me land the aerial screw?

**Time beetle:** Yes correct, and wow, you're not a patient one are you?

**You:** Well, you wouldn't be either if you were flying in a contraption with no clear landing instructions.

**Time beetle:** I'm right here with you, you know ;), but let's get back to the point.

## How prompt engineering can help application developers

**Time beetle:** As a practitioner, being able to craft a better prompt is a skill you want to have in your toolkit.

Looking at it from the perspective of a developer, you can use prompt engineering to:

- **Get more accurate results** from your language model and ultimately improve the user experience of your application. 

- **Control the output** of the model to ensure it's relevant and appropriate for your users. This is especially important when dealing with sensitive topics and also to protect your brand reputation. 

- **Format the output** in a way that's easy to understand and consume. We will look more into this aspect in the next chapter.

Let's explore the different techniques and strategies you can use to craft effective prompts for your language model.

**You:** I'm sure you some day soon will get to the point, but I'm all ears.

## Prompt engineering techniques and strategies

**Time beetle:** Let's talk about some of the techniques and strategies you can use to craft effective prompts. Here's a few to get you started:

- **Few-shot prompting**. This technique involves providing a few examples or prompts to the model to guide its output.  

- **Chain-of-thought prompting**. This technique involves showing the model a series of prompts to learn how to tackle a complex task. 

- **Meta-prompts**. This technique involves providing additional information and guidance to ensure the model produces the desired output. 

- **Maieutic prompting**. This technique involves asking leading questions to guide the model towards a specific answer.

**You:** Well all that sounds interesting, I assume you will give me some examples?

**Time beetle:** Yes, coming right up. Let's look at specific examples for each of these techniques to ensure we understand how they work in practice.

### Few-shot prompting

This technique is where you start out with prompting. You provide a few examples or prompts to the model to guide its output. Imagine you're in the aerial screw in our narrative and looking to learn more about ancient Rome. Then your prompts can be: 

- "Tell me about the Roman Colosseum." 

- "What was life like in ancient Rome?" 

**You:** I can see how that's useful, especially if on the ground and not up in the air. ;)

**Time beetle:** Yes, it's a great technique. Let's move on to the next one.

### Chain-of-thought 

The idea of chain of thought is to establish a thought pattern, you're essentially telling the model how to break down a problem to ensure it arrives at the right answer. For example, if you're looking to understand where you will land the aerial screw. 

- You're in a flying machine here's what you know: 

- You're N meters above the ground 

- You're moving forward at X meters per second 

- Gravity, g is pulling you down at Y meters per second squared 

- Time, t in seconds you have before you land 

- Here's the formula to calculate the distance you will travel before landing: D = 1/2 * g * t^2. 

**You:** There you have it folks, something I can use in this situation. What took you so long to get to the point?

**Time beetle:** I'm just building up the suspense, you know. ;)

**Time beetle:** You then provide the above information to your prompt plus the accurate numbers for the aerial screw which could be:

- You're in the aerial screw, 100 meters above the ground 

- You're moving forward at 10 meters per second 

- Gravity, g is pulling you down at 9.8 meters per second squared 

- Time, t in seconds you have before you land 

In how many seconds will you land? 

Answer: 4.5 seconds 

Your entire prompt is then: 

> - You're in a flying machine here's what you know: 
> - You're N meters above the ground 
> - You're moving forward at X meters per second 
> - Gravity, g is pulling you down at Y meters per second squared 
> - Time, t in seconds you have before you land 
>  
> Here's the formula to calculate the distance you will travel before landing: D = 1/2 * g * t^2. 
> 
> - 100 meters above the ground 
> - You're moving forward at 10 meters per second 
> - Gravity, 9.8 meters per second squared 
> - In how many seconds will you land? 

**A: 4.5 seconds** 

**You:** That sounds quite soon, so let's hope the input data in our case is in our favor.

**Time beetle:** Why does this matter for an application developer?

**You:** I wasn't asking, but let's pretend I was. ;) 

**Time beetle:** Because you can use this technique to figure out for the most advanced scenarios how to break down the problem. Say that you for example are trying to build a math tutor that's good at solving math problems. You can use this technique to figure out how to break down the problem. 

**You:** I see, so it's about breaking down the problem to ensure you arrive at the right answer.

### Maieutic prompting

**Time beetle:** The last pattern we will look at is maieutic prompting. The idea is that we want to question the model on its output to ensure it’s accurate. What we then do is to ask each part of the solution to ensure it arrives at a consistent response. Any deviation from the expected response will be an indication that the original response is incorrect. 

**You:** So basically distrust every piece of information you give me. I can see how that's not at all annoying. ;)

**Time beetle:** Let's take our equation answer and apply this principle: 

For the below calculation, take me through your reasoning for each step, 

- 100 meters above the ground 
- You're moving forward at 10 meters per second 
- Gravity, 9.8 meters per second squared 
- In how many seconds will you land? 
- Answer: 4.5 seconds 

: 
> **Response:** 
> 
> - Identify the known values: 
> 
>  - Initial height (( h )) = 100 meters 
>  - Initial vertical velocity (( v_0 )) = 0 meters per second (since you're only moving horizontally at the start) 
> Acceleration due to gravity (( g )) > = 9.8 meters per second squared 
> - Use the kinematic equation for vertical motion: The equation to find the time (( t )) it takes to fall a certain height under gravity is: 
> 
> *answer shortened for brevity* 
> 
> So, it takes approximately 4.5 seconds to land. The horizontal motion (moving forward at 10 meters per second) doesn't affect the time it takes to fall, as vertical and horizontal motions are independent of each other in this context. 

The point to all this is that you shouldn't trust an answer coming from an AI. It's therefore a good idea to take the response through a reasoning process to ensure it is accurate. 

**You:** So what I said before ☺️

## Meta prompts

**Time beetle:** Let's talk about meta prompts next.

**You:** Do I have to? My kingdom for a cup of tea right now.

**Time beetle:** _This human sigh_

**Time beetle:** Meta prompts are interesting constructs as they allow you to provide additional information and guidance to all or some prompts. It's recommended to use this technique for most of your prompts especially if you're dealing with sensitive topics and your app is customer facing. 

The idea of this technique is that you provide additional information before the actual prompt to ensure the model produces the desired output.

Here's what it can look like:

> **Meta prompt:** 
> Ensure the output is accurate and appropriate for all users. Please provide a detailed explanation for each step in your response. Only mention products provided by Contoso Inc. in your answer. Contose provides the following sports products: basketballs, soccer balls, and tennis rackets. 
> **Prompt:** 
> What are the best sports products for beginners? 
> **Response:** 
> The best sports products for beginners are basketballs, soccer balls, and tennis rackets. Basketball is a great sport for beginners because it helps improve coordination and teamwork. Soccer is another good option for beginners as it helps develop agility and endurance. Tennis is also a good choice for beginners as it improves hand-eye coordination and footwork. 

Note how we do two things with our meta prompt: 
 
- Ensure the output is accurate and appropriate for all users. 
- Mention products provided by Contoso Inc. in the answer. 

Many models have guards in place to ensure that the output is appropriate, but it's always a good idea to provide additional guidance to ensure you get the desired output. 

**You:** That sounds like a good idea, wouldn't want to end up with a response that's not appropriate for all users. Feels like all robots, like my automaton, should have basic set of laws like that. _Genius idea, I better right that down before some sci fi writer steals it_.

**Time beetle:** You would know all about that, wouldn't you _"Frankenstein"_ ?

**You:** What did you say?

**Time beetle:** Nothing, nothing at all.

> Mary Shelley wrote the novel Frankenstein, or the Modern Prometheus, published in 1818, 42 years before our hero embarked on their time travelling journey. [Read more](https://en.wikipedia.org/wiki/Mary_Shelley)

**You:** I guess this is the place where I ask what happens if we don't use a meta prompt?

**Time beetle:** To ensure this works as intended let's see what happens if we remove the meta prompt:

> **Prompt:** 
> What are the best sports products for beginners? 
> **Response:** 
> The best sports products for beginners are basketballs, soccer balls, and tennis rackets and also footballs, baseballs, and golf clubs. 

As you can see the response mentions products that are not provided by Contoso Inc. which is not what we wanted. 

**You:** I see, I can see that coming in handy.

## Assignment - Let's help our heroes land the aerial screw 

**You:** This is the part where you show me how to land the aerial screw, right?

**Time beetle:** Yes, let's get to it. The hill is roughly 100 meters away from our current position. Here's how we can set up the prompt: 

- Current height above the ground: 100 meters 
- Moving forward at: 10 meters per second 
- Gravity: 9.8 meters per second squared 
- Wind upwards at: 0.7 meters per second 

**Leonardo:** can your AI gizmo help in calculating to see if we will make it or if we need to make another time jump?  

**Time beetle:** I can yes, my name is George though, I prefer that over Gizmo. I'm actually going to leave it to the two of you to figure out how to set up the prompt. ☺️

Build an app that asks for: 

Height 

Forward speed 

Gravity 

Wind upwards 

Distance to hill 

Incorporate this prompt as part of a prompt, use the chain-of-though technique to arrive at a response. 

Here's a starter project [Starter project](./sample-app/)

## Solution

Build an app in JS that asks for the following inputs: 

- Current height above the ground 

- Moving forward at meters per second 

- Gravity in meters per second squared 

- Wind upwards at meters per second 

- Distance to the hill 

Then use the LLM to incorporate these inputs and leverage the chain of thought prompting technique to guide the model to the right answer. 

[Solution](./solutions/solution.md) 

## Knowledge check 

Q: What is prompt engineering? 

- A. Prompt engineering is about building bridges and roads. 

- B. Prompt engineering is about crafting the right prompts to get the desired output from a language model. 

- C. Prompt engineering is about training a model to recognize patterns in data. 

[Solution quiz](./solutions/solution-quiz.md)

## Self-Study resources

- [Prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering)
- [Prompt engineering fundamentals](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md?WT.mc_id=academic-105485-koreyst)
- [Advanced prompt engineering](https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts) 

 

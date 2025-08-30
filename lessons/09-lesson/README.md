## Lesson 9: MCP Server with SSE

In our previous lessons on MCP, we learned how to create an MCP Server, a client and we were introduced to some tooling that make developing things for MCP protocol a bit easier. Additionally we learned to improve the client with an LLM. So far, you've been using stdio as transport for your server, but in reality a server may run anywhere on a specific URL for example. For this type of situation there's another transport SSE.

In this chapter you will learn to:

- Create an MCP Server using the SSE transport. 
- Learn to test said server with our Inspector tool.
- Consume an SSE server using Visual Studio Code.

## Setup

If you haven't already, set up your development environment. Here's how you can do it: [Setup your environment](/docs/setup/README.md).

## Related resources

[![Watch a short video about MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_This video explains Model Context Protocol LLM usage._

*🎥 Click on the image above to watch a short video about MCP*

## Narrative: Guardians of Time

> [!NOTE] 
> _Our story so far. You are a mechanic from 1860s London. You were working on your automaton and received a letter from Charles Babbage that ended up taking you to a library where you picked up a time travel device. Throughout your travels in time you've ended up in Florence, where you met Leonardo Da Vinci. You also went to the Aztec empire and this is where the story continues._
>
> See [Lesson 1](../01-intro-to-genai/README.md) if you want to catch up with the story from the beginning. 

> [!NOTE] 
> While we recommend going through the story (it's fun!), [click here](#interact-with-hypatia) if you'd prefer to jump straight to the technical content.

**Ada Lovelace**: Nice work on implementing AI on the client, that's really a much better experience I think. I almost forgot, we have a meeting to get to.

**Ada Lovelace**: Goodbye, Hedy dearest, see you shortly.

**You**: See you shortly?

**Ada Lovelace**: Ada Lovelace suddenly smiled at you, before using the Time Beetle.

Back in Ada Lovelace's mansion, you followed Ada as she, with very determined steps, passed through a number of ornate and impressive rooms, and then pulled the doors open to what looked like a meeting in procession. The scene facing you was incredible. A long oval table was at the center of the room and at the table at least 20 people were sitting as you quickly counted them. You couldn't see their faces as they were wearing robes with hoods. 

**You**: Who are these people Ada Lovelace?

**Ada Lovelace**: Why the Guardians of course, the Guardians of Time. Quiet down please everyone, we're making good progress, but there's a missing piece, or should I say a missing member.

All heads were directed at Ada Lovelace now as she continued.

**Ada Lovelace**: As you know, our effort to protect the timeline and humanities knowledge is not without its challenges and our enemies are on to us. It's therefore imperative that we secure some important intel safeguarded at the moment by Hypatia.

**Hooded figure**: We can't send anyone on such an important mission, I volunteer, the hooded figure said, and you recognized that voice, as you literally spoke minutes ago, Hedy Lamarr. How did she get here before you though?

**Ada Lovelace**: Alright, it's settled then, Hedy Lamarr, the two of you must secure both the knowledge and ensure Hypatia joins as well in this endeavour. Is that clear?

**Hedy Lamarr**: Quite clear.

**Hedy Lamarr**: Come on then, no time like the present, let's go.

Hedy Lamarr turned around and walked out of the room, you followed her, but not before you heard Ada Lovelace say:

**Ada Lovelace**: Good luck, and remember, Hypatia is key to our success, so make sure you bring her back with you and the knowledge she holds.

**Hedy Lamarr**: I will, don't worry, she will be safe with us. Here we go she said pressing the Time Beetle, and you felt the familiar sensation of being pulled through time and space.

### Alexandria Library

You find yourself in a large room, with high ceilings and marble columns. The room is filled with bookshelves, and the smell of old books fills the air.

**Hedy Lamarr**: Quickly, change into these robes, we need to blend in. Hedy walks over to a door opening peering out, then she turns to you and whispers, there she is, Hypatia, almost done with her teachings, let's wait for her to finish and then we can approach her.

Hypatia comes walking through the door opening and looks at the two of you with a curious look on her face.
**Hypatia**: Did you want something? My consultation hours are on Thursday afternoons.

**Hedy Lamarr**: No, no, we're here in a different capacity, we are here for you and the Atlantean scrolls you protect.

**Hypatia**: Hypatia suddenly backs up, looking at you both with suspicion. Then she suddenly makes a running motion towards the door, but Hedy Lamarr is faster and grabs her arm.

**Hedy Lamarr**: Please, Hypatia, we mean you no harm, we're Guardians and we need your help and Hedy shows her the Time Beetle and presses the button, and you all are pulled into a time vortex. 

You find yourself appearing almost right in front of Ada Lovelace, who is standing in the same room as before, but now with a big smile on her face. "Hypatia!" she exclaims, and then she turns to you and Hedy Lamarr, and says:

**Ada Lovelace**: You did it, you brought Hypatia back with you, and the Atlantean scrolls I assume? This is a great day for all of us, and for humanity.

**Hedy Lamarr**: Yes, well, we didn't get the scrolls, but we did get Hypatia, I think some convincing is in order.

**Ada Lovelace**: *Looking a bit frustrated, but then smiling again* Well, okay, one step at a time. Let's get Hypatia settled in, and then we can talk about the scrolls. Come on, let me introduce you to the other Guardians, *she says as she walks away with Hypatia and Hedy Lamarr following her.*


<div>
  <img src="./assets/guardians.jpeg" alt="guardians around a table" width=600 />
</div>

## Interact with Hypatia

If you want to interact with Hypatia, run the [Characters](/app/README.md) app. 

> [!IMPORTANT]
> This is entirely fictional; the responses are generated by AI.
> [Responsible AI disclaimer](/README.md#responsible-ai-disclaimer)

<div>
  <img src="./assets/hypatia.jpeg" alt="Hypatia" width="300">
</div>

**Steps**:

1. Start a [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navigate to _/app_ in the repo root.
3. Locate the console and run `npm install` followed by `npm start`.
4. Once it appears, select the "Open in Browser" button.
5. Chat with Hypatia.

For a more detailed explanation of the app, see [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
 > If you're running the project locally on your machine, please review the QuickStart guide to get a [GitHub personal access](../../docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token setup and replace the key in the code.

## SSE transport

**Ada Lovelace**: As I was saying before, we need some help with the Time Beetles, they need to be able to communicate with each other and with us. Can you make that happen?

**You**: Time Beetle, can we do that?

**Time Beetle**: Yes, there's a way, we can use Server-Sent Events (SSE) to communicate with each other and with the Guardians.

**You**: Server-Sent Events? What are those?

**Time Beetle**: Server-Sent Events (SSE) is a technology that allows a server to push updates to a client over HTTP. It serves two purposes actually, it both allow you to connect to a remote server and it allows you to stream data from the server to the client.

**You**: Stream data? What's that about?

**Time Beetle**: Streaming is a way to send data in chunks, rather than waiting for the entire response to be ready. This is particularly useful for large responses or when you want to send updates in real-time, like when you're interacting with an LLM.

**You**: I see, so we use SSE for all this instead of the stdio transport we've been using so far? And what you said about large responses, that makes sense.

## SSE Example

**Time Beetle**: Exactly, the stdio transport is great for local development and testing, but when you want to run a server that can be accessed remotely, SSE is the way to go. Here's some code to illustrate the difference:

- **Select SSE as transport**: First, you need to import the necessary modules and set up your server to use SSE as the transport.

    ```typescript
    import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
    import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
    
    const server = new McpServer({
      name: "example-server",
      version: "1.0.0"
    });
    
    const app = express();
    
    const transports: {[sessionId: string]: SSEServerTransport} = {};
    ```

    In the preceding code we've:

    - Imported the `McpServer` and `SSEServerTransport` classes from the MCP SDK.
    - Created an instance of `McpServer` with a name and version.
    - Defined an Express application and a dictionary to hold the transports. 

- **Set up routes**: Next, you need to set up the routes for your server. The `/sse` route will handle the SSE connection, and the `/messages` route will handle incoming messages.

    ```typescript
    app.get("/sse", async (_: Request, res: Response) => {
        const transport = new SSEServerTransport('/messages', res);
        transports[transport.sessionId] = transport;
        res.on("close", () => {
            delete transports[transport.sessionId];
        });
        await server.connect(transport);
    });
    
    app.post("/messages", async (req: Request, res: Response) => {
        const sessionId = req.query.sessionId as string;
        const transport = transports[sessionId];
        if (transport) {
            await transport.handlePostMessage(req, res);
        } else {
            res.status(400).send('No transport found for sessionId');
        }
    });
    ```

    In the preceding code we've:

    - Defined a `/sse` route that creates a new `SSEServerTransport` instance and connects it to the `McpServer`. What happens here is that once a client connects to the `/sse` route, it will create a new transport instance of type SSEServerTransport, which is responsible for handling the SSE connection. The session ID is stored in the `transports` dictionary, allowing you to manage multiple connections.
    - Defined a `/messages` route that handles incoming messages. When a message is received, it checks if the session ID exists in the `transports` dictionary and calls the `handlePostMessage` method on the corresponding transport instance. If no transport is found for the session ID, it returns a 400 status code.

**You**: So, ok, we handle two new routes, to handle the SSE connection and the messages, but what about the tools and resources?

**Time Beetle**: Good question! That still happens in the same way as before. You can add tools and resources to your server just like you did with the stdio transport. The only difference is that now you're using SSE to communicate with the server.

## Assignment

**Ada Lovelace**: We need all the Time Beetles upgraded to use SSE as the transport, and we need to fit Hypatia with a Time Beetle as well, so she can communicate with us. You've got that covered, right?

**You**: Yes, I'm on it.

> Task: For this assignment, you will create an MCP Server that uses SSE as the transport. The server should be able to handle the following features:

The server should be able to handle the following features:

> [!TIP]
> Use an LLM to implement the first three tools. 

- A tool that given a character name, returns the character's description, for example Leonardo da Vinci, Hypatia, Ada Lovelace, Hedy Lamarr, etc.

- Another tool that given a place's name and time period, returns a description of the place, for example Florence in 1500, or Aztec Empire in 1400.

- A third tool that takes the parameters `from` and `to` and `text` and translates the text from one language to another, for example from English to Spanish. Here's how it could work:

  - `text`: "Hello, how are you?"
  - `from`: "en"
  - `to`: "es"

- Finally a tool that can list all Time Beetles and should respond with a list of all the Time Beetles that are currently connected to the server it should respond with the following format:

    ```json
    {
      "content": [{
        "name": "Time Beetle 1",
        "location": "Florence",
        "year": 1500,
      }, 
      {
        "name": "Time Beetle 2",
        "location": "Aztec Empire",
        "year": 1400,
      }]
    }
    ```

    **Time Beetle**: You can stub out the data on this one. 

## Solution

[Solution](./solution/README.md)

## Knowledge Check

TODO

## Summary

TODO

## Self-Study Resources

TODO
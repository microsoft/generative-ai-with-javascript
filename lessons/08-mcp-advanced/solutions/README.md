
# Running the solution

In this chapter you will learn:

- How to use the Model Context Protocol, MCP to split up your server capabilities in a server and a client
- Create tools, resources and prompts on the server.
- Consume the server using both the inspector tool and a written client.

## Setup

If you haven't already, set up your development environment. Here's how you can do it: [Setup your environment](/docs/setup/README.md).

## Related resources

[![Watch a short video about MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_This video explains Model Context Protocol._

*🎥 Click on the image above to watch a short video about MCP*

## Install

```sh
npm i
```

## Run the sample

1. Build the server

  ```sh
  npm run build
  ```

  This compiles and runs the server, once you see the text "MCPServer started on stdin/stdout" you can type Ctrl-C to take it down.

## Test the sample

It's a good idea to check if your features are working as intended. Try below command to quickly check your server responds.

  1. List all tools on the server like so:

    ```sh
    npx @modelcontextprotocol/inspector --cli node build/index.js --method tools/call --tool-name characterDetails --tool-arg name=Ada
    ```

    You should see response similar to:

    ```json
    {
      "content": [
        {
          "type": "text",
          "text": "Character: ...response from API"
        }
      ]
    }
    ```

    Let's proceed to running the client.

## Running the client

1. Run the client

  ```sh
  npm run client
  ```

  You should see the following tool response:

  ```text
  Tool result:  {
    content: [
      {
        type: 'text',
        text: "Character: Augusta Ada King, Countess of Lovelace, also known as Ada Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation."
      }
    ]
  }
  ```

  Great, it all works as intended.

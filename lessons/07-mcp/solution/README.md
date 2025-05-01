# Running the solution

## Install

```sh
npm i
```

## Run the sample

```sh
npm run build
```

## Test the sample

1. Make sure your server is up and running `npm run build`.

1. To test the server works as intended run the inspector tool like so:

  ```sh
  npm run inspect
  ```

  Type `y` to proceed if prompted, if running in a Codespace, make sure to click "make public".

  You should see a JSON output like so, i.e showing all your created tools:

  ```json
    {
    "tools": [
      {
        "name": "add",
        "inputSchema": {
          "type": "object",
          "properties": {
            "a": {
              "type": "number"
            },
            "b": {
              "type": "number"
            }
          },
          "required": [
            "a",
            "b"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
      },
      {
        "name": "subtract",
        "inputSchema": {
          "type": "object",
          "properties": {
            "a": {
              "type": "number"
            },
            "b": {
              "type": "number"
            }
          },
          "required": [
            "a",
            "b"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
      },
      {
        "name": "divide",
        "inputSchema": {
          "type": "object",
          "properties": {
            "a": {
              "type": "number"
            },
            "b": {
              "type": "number"
            }
          },
          "required": [
            "a",
            "b"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
      },
      {
        "name": "multiply",
        "inputSchema": {
          "type": "object",
          "properties": {
            "a": {
              "type": "number"
            },
            "b": {
              "type": "number"
            }
          },
          "required": [
            "a",
            "b"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
      }
    ]
  }
  ```

  1. Run a tool with a command like so:

    ```sh
    npx @modelcontextprotocol/inspector --cli node build/index.js --method tools/call --tool-name add --tool-arg a=1 --tool-arg b=3
    ```

    This command calls the tool `add` with arguments `a=1` and `b=3`. 

    You should see a response like so:

    ```json
    "content": [
        {
        "type": "text",
        "text": "4"
        }
      ]
    }
    ```

    Great, everything is working as intended.

  1. Let's ensure we see all resources too:

    ```sh
    npx @modelcontextprotocol/inspector --cli node build/index.js --method resources/list
    ```

    You should see a response like so:

    ```json
    {
    "resources": [
      {
        "uri": "echo://{message}",
        "name": "echo",
        "description": "Echo a message",
        "mimeType": "text/plain"
      },
      {
        "uri": "scrolls://{name}",
        "name": "scrolls",
        "description": "Scrolls resource",
        "mimeType": "text/plain"
      }
     ]
   }
    ```

  1. To call the `scrolls` resource, we can run:

    ```sh
    npm run client
    ```

    You should see the content from `scrolls/tactics.txt` in the terminal response.

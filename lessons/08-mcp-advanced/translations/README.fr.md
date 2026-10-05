# Leçon 8 : Améliorer les clients MCP avec des modèles de langage à grande échelle

Dans la leçon précédente, vous avez créé un serveur MCP et exploré comment il contribue à découpler la logique d'une application IA de ses capacités. Nous avons démontré comment ajouter des outils et des ressources en tant que capacités, et comment le serveur pouvait être accessible via un outil d'inspection ou un client personnalisé. Ce n'était que le début. Dans ce chapitre, vous allez aller plus loin en intégrant un modèle de langage à grande échelle (LLM) dans le client, ouvrant ainsi la voie à une expérience utilisateur plus puissante et intuitive.

Dans ce chapitre, vous apprendrez à :

* Augmenter votre client avec un LLM.
* Utiliser votre client amélioré pour convertir une réponse de serveur MCP en un outil.
* Exploiter votre client amélioré pour créer une interaction utilisateur plus naturelle.

## Configuration

Si ce n'est pas déjà fait, configurez votre environnement de développement. Voici comment faire : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Regardez une courte vidéo sur MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

*Cette vidéo explique l'utilisation des LLM avec le protocole Model Context.*

*🎥 Cliquez sur l'image ci-dessus pour regarder une courte vidéo sur MCP*

## Narrative: Hedwig "Hedy" Lamarr

> [!NOTE]
> *Notre histoire jusqu'à présent. Vous êtes un mécanicien du Londres des années 1860. Vous travailliez sur votre automate et avez reçu une lettre de Charles Babbage qui vous a finalement conduit dans une bibliothèque où vous avez récupéré un dispositif de voyage dans le temps. Au cours de vos voyages dans le temps, vous vous êtes retrouvé à divers moments de l'histoire. Vous travaillez désormais en étroite collaboration avec Ada Lovelace depuis son manoir en tant que base d'opérations, et c'est là que l'histoire continue.*
>
> Reportez-vous à [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début.

> [!NOTE]
> Bien que nous vous recommandions de suivre l'histoire (c'est amusant !), [cliquez ici](#interact-with-hedy-lamarr) si vous préférez passer directement au contenu technique.

Vous êtes une nouvelle fois retourné au manoir d’Ada. Cette fois-ci, Ada vous rencontrait à la porte principale.

**Ada Lovelace** : Eh bien, comment cela s’est-il passé ?

**Vous** : Bien je pense, nous avons réussi à faire fonctionner cette application. "Tenez, voyez par vous-même", dites-vous en tendant l'appareil à Ada.

**Ada Lovelace** : Elle ramasse l’appareil, l’examine attentivement et murmure pour elle-même. "Mmm hm, ah je vois, oui, oui non, cela ne va pas. Il manque une certaine finesse."

**Vous** : Je pensais la même chose, nous devons pouvoir taper ou parler à l’appareil, n'est-ce pas ?

**Ada Lovelace** : Exactement, je connais justement la personne qui pourra nous aider. En fait, je vais vous accompagner pour celle-ci, cela fait bien trop longtemps que nous ne nous sommes pas vus. *Coléoptère Temporel, Hollywood s'il vous plaît, 1940, résidence d'Hedy Lamarr.*

Tout devient noir. Des couleurs tourbillonnent rapidement, et quelques instants plus tard, votre vision commence à se préciser. Vous voyez un homme assis au piano, parlant avec animation à une femme aux cheveux bruns foncés et bouclés. Tous deux gesticulent avec excitation en parlant.

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedy-invention.jpeg)

La femme se retourne vers Ada, debout à côté de vous, et s’exclame : « Ada, c'est toi, cela fait bien trop longtemps. »

**Ada Lovelace** : Hedwig ma chère, vous travaillez sur votre dernière invention je suppose ?

**Hedy Lamarr** : Oui, en fait George et moi pensons que nous tenons quelque chose — le "saut de fréquence". Je ne devrais probablement pas en dire plus, on ne sait jamais qui écoute.

**Ada Lovelace** : Oh vous parlez de lui, en me désignant. Il est en pleine aventure de son côté.

**Hedy Lamarr** : Je vois, que puis-je faire pour vous ?

**Ada Lovelace** : En fait, nous avons besoin que cet appareil fonctionne un peu mieux. Des idées ?

**Hedy Lamarr** : Elle ramasse l’appareil et l’examine sous différents angles. "Vous dites que vous avez déjà séparé les fonctionnalités de la partie communication ?"

**Ada Lovelace** : Oui, oui, c'est fait.

**Hedy Lamarr** : Eh bien dans ce cas, je rendrais simplement la partie communication un peu plus intelligente. Cela me rappelle une conversation que j’ai eue avec un cadet de la marine alors que j’essayais de vendre des bons de guerre. Minsky, je crois que c'était son nom. "À quoi ressemble l'intelligence humaine dans une machine ?" était le sujet. J’ai l’impression qu’il fera quelque chose de grandiose dans ce domaine un jour. Donc oui, donnez-lui plus d’intelligence.

**Ada Lovelace** : Très bien, vous avez entendu Mme Lamarr, au travail.

**Vous** : Coléoptère Temporel, comment fait-on cela ?

**Coléoptère Temporel** : Vous pouvez améliorer le client que vous avez créé précédemment en intégrant un modèle de langage à grande échelle, ou LLM.

> Hedy Lamarr était une figure extraordinaire, connue à la fois pour sa célébrité à Hollywood et pour ses remarquables contributions à la technologie.
>
> Cependant, au-delà de sa carrière d'actrice, Lamarr était aussi une brillante inventrice. Pendant la Seconde Guerre mondiale, elle a co-inventé avec le compositeur George Antheil un système de guidage radio pour les torpilles alliées. Ce système utilisait la technologie de spectre étalé et de saut de fréquence pour empêcher les puissances de l'Axe de brouiller les signaux. Bien qu'il n'ait pas été utilisé pendant la guerre, cette technologie est ensuite devenue la base des communications sans fil modernes, y compris le Wi-Fi, le Bluetooth et le GPS.
>
> Les contributions de Lamarr à la technologie n’ont pas été pleinement reconnues de son vivant, mais aujourd’hui, elle est célébrée comme une pionnière dans ce domaine. Son histoire est un mélange fascinant de glamour et de génie, prouvant que l’innovation peut provenir des endroits les plus inattendus.\
> Lisez-en plus ici à propos de [Hedy Lamarr](https://en.wikipedia.org/wiki/Hedy_Lamarr) et ici au sujet de [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky)

## Interagir avec Hedy Lamarr

Si vous souhaitez interagir avec Hedy, exécutez l'application [Characters](/app/README.md).

> [!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedylamarr.jpeg)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm ci` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discuter avec Hedy.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Configurez `AI_ENDPOINT`, `AI_API_KEY` et `AI_MODEL` dans le fichier `.env` à la racine du dépôt, en local comme dans Codespaces. Consultez le [guide de configuration](/docs/setup/README.md#configure-environment-variables).

## Ajouter un modèle de langage à grande échelle à un client

**Coléoptère Temporel** : "Comme je le disais, parlons de la façon dont vous pouvez créer un client qui utilise un modèle de langage à grande échelle (LLM) pour interagir avec le serveur MCP. Les avantages sont qu’il offre une meilleure expérience utilisateur et vous permet d’utiliser le langage naturel pour interagir avec le serveur."

Voici comment cela fonctionnerait à un niveau élevé :

1. Le client interagit avec le serveur MCP pour demander les outils et ressources disponibles.

2. Au moment de l'invite, l'utilisateur rédige une invite en langage naturel, qui est ensuite envoyée au LLM dans le client.

3. Le client détermine quel outil ou quelle ressource appeler en fonction de l'invite et des outils et ressources disponibles.

Ça semble faisable, non ?

**Vous** : "Oui, c’est faisable ! Mais comment faire ?"

**Coléoptère Temporel** : "Améliorons le client que vous avez créé précédemment, décrivons les modifications de code par étapes :

1. Effectuer un appel au serveur pour demander les outils et ressources disponibles.
2. Convertir la réponse des outils et ressources en un schéma d’outils utilisable par le LLM.
3. Instancier le client OpenAI.
4. Effectuer un appel de complétion de chat à OpenAI, en passant le schéma d'outils en paramètre.
5. Déterminer quel outil appeler en fonction de la réponse d’OpenAI.
6. Appeler l'outil sur le serveur à l'aide du client MCP.
7. Répondre à l'utilisateur avec le résultat.

Voici toutes les étapes en code :

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";
import { fileURLToPath } from "node:url";
import { OpenAI } from "openai";
import { z } from "zod";

const endpoint = process.env.AI_ENDPOINT?.trim();
const apiKey = process.env.AI_API_KEY?.trim();
const model = process.env.AI_MODEL?.trim();
if (!endpoint || !apiKey || !model) {
  throw new Error("Set AI_ENDPOINT, AI_API_KEY, and AI_MODEL before running the sample.");
}

const openai = new OpenAI({ baseURL: endpoint, apiKey, timeout: 60000 });
const client = new Client({ name: "example-client", version: "1.0.0" });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [fileURLToPath(new URL("./index.js", import.meta.url))]
});

try {
  await client.connect(transport);
  const { tools: serverTools } = await client.listTools();
  const allowedNames = new Set(serverTools.map(tool => tool.name));
  const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = serverTools.map(tool => ({
    type: "function",
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.inputSchema
    }
  }));
  console.log("Available tools:", [...allowedNames]);
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: "user", content: "Use the add tool to add 5 and 10." }
  ];
  const completion = await openai.chat.completions.create({
    model, messages, tools, tool_choice: "required"
  });
  const message = completion.choices[0]?.message;
  if (!message?.tool_calls?.length) throw new Error("The model did not request a tool.");
  messages.push(message);
  for (const call of message.tool_calls) {
    if (call.type !== "function" || !allowedNames.has(call.function.name)) {
      throw new Error("The model requested an unsupported MCP tool.");
    }
    const args = z.record(z.string(), z.unknown()).parse(JSON.parse(call.function.arguments));
    const result = CallToolResultSchema.parse(await client.callTool({
      name: call.function.name,
      arguments: args
    }));
    const text = result.content.filter(item => item.type === "text").map(item => item.text).join("\n");
    if (result.isError) throw new Error(`MCP tool failed: ${text}`);
    if (!text) throw new Error("The MCP tool did not return text.");
    console.log("Result from tool:", text);
    messages.push({ role: "tool", tool_call_id: call.id, content: text });
  }
  const followUp = await openai.chat.completions.create({
    model, messages, tools, tool_choice: "none"
  });
  const answer = followUp.choices[0]?.message?.content;
  if (!answer?.trim()) throw new Error("The model did not return a final answer.");
  console.log(answer);
} finally {
  await client.close();
}
```

Dans le code précédent, nous avons (en nous concentrant sur nos ajouts) :

* Créé une fonction `tools.map` qui convertit la réponse des outils et ressources en un schéma utilisable par le LLM.
* Demandé au serveur les outils et ressources disponibles.
* Converti la réponse des outils et ressources en un schéma utilisable par le LLM.
* Effectué un appel de complétion au modèle d'IA, en passant les outils convertis en paramètre.
* Déterminé quel outil appeler en fonction de la réponse d’OpenAI.
* Appelé l'outil sur le serveur à l'aide du client MCP.
* Transmis le résultat à l'utilisateur.

**Vous** : "C’est intéressant, c’est bien mieux ! Je peux utiliser le langage naturel sans même savoir quels outils et ressources sont disponibles. Je peux simplement demander à l'IA de le faire pour moi."

**Coléoptère Temporel** : "Content que cela vous plaise. Cependant, il faudrait décider si vous souhaitez uniquement afficher une réponse par outil ou également une réponse générique du LLM. Voici une stratégie de réponse potentiellement bénéfique pour votre utilisateur :

* **Outils uniquement** : Si la réponse du LLM est un outil, alors appelez l'outil et renvoyez le résultat.
* **LLM uniquement** : Si la réponse du LLM n'est pas un outil, renvoyez simplement la réponse du LLM "telle quelle".
* **Outils et LLM** : Si la réponse du LLM est un outil, alors appelez l'outil et effectuez un appel supplémentaire au LLM pour obtenir une réponse générale. Renvoyez à la fois le résultat de l'outil et la réponse du LLM.

**Vous** : "Je vois. C’est à réfléchir. Mais c’est génial ! Je vois bien à quel point cela peut être utile."

## Devoir

**Ada Lovelace** : Il semble que vous avez apporté une belle amélioration. Pour rendre cela vraiment utile, j’ai besoin que vous créiez un serveur et un client avec les spécifications suivantes :

* Le serveur doit fournir les outils suivants :
  * `characterDetails` avec l'argument `name`
  * `place` avec l'argument `name`
* Le client doit utiliser un LLM.

> [!TIP]
> Par exemple, vous pouvez donner au serveur la capacité de récupérer des informations d'une API web externe, comme Wikipedia :\
> `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`

## Solution

[Solution](/lessons/08-mcp-advanced/solutions/README.md)

## Vérification des connaissances

**Question :** Quel est un avantage d’ajouter un LLM au client ?

A. C'est plus facile à maintenir.

B. Cela crée une conversation plus naturelle entre l’utilisateur et le serveur.

C. Il est préférable d'avoir le LLM sur le serveur.

[Solution quiz](/lessons/08-mcp-advanced/solutions/solution-quiz.md)

## Résumé

Dans ce chapitre, vous avez appris les points suivants :

* Les clients augmentés d'un LLM offrent une meilleure expérience utilisateur.
* Les réponses d’un serveur doivent être converties dans un format que le LLM peut comprendre comme un outil.

## Ressources d'auto-apprentissage

* [Construire des serveurs MCP](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server/README.md)
* [Construire un client](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/02-client/README.md)
* [Construire un client avec un LLM](https://github.com/microsoft/mcp-for-beginners/blob/main/03-GettingStarted/03-llm-client/README.md)

# Leçon 7 : MCP, Protocole de Contexte Modèle

Dans ce chapitre, vous apprendrez :

* Comment utiliser le Protocole de Contexte Modèle (MCP) pour diviser vos capacités serveur en un serveur et un client.
* Créer des outils, des ressources et des invites sur le serveur.
* Consommer le serveur en utilisant à la fois l'outil d'inspection et un client écrit.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Watch a short video about MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

*Cette vidéo explique le Protocole de Contexte Modèle.*

*🎥 Cliquez sur l'image ci-dessus pour regarder une courte vidéo sur MCP*

## Narratif - Scipion l'Africain

> \[!NOTE]
> *Notre histoire jusqu'à présent. Vous êtes un mécanicien de Londres des années 1860. Vous travailliez sur votre automate et avez reçu une lettre de Charles Babbage qui vous a finalement conduit dans une bibliothèque où vous avez pris un appareil de voyage dans le temps. À travers vos voyages dans le temps, vous vous êtes retrouvé à Florence, où vous avez rencontré Léonard de Vinci. Vous êtes également allé dans l'empire aztèque, et c'est là que l'histoire continue.*
>
> Reportez-vous à [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début.

> \[!NOTE]
> Bien que nous vous recommandions de suivre l'histoire (c'est amusant !), [cliquez ici](#interact-with-scipio) si vous préférez passer directement au contenu technique.

*Nos héros, ayant tout juste appris l'importance des outils et de l'« appel d'outils » lors de leur rencontre avec Amelia Earhart, retournent maintenant au manoir d'Ada Lovelace pour discuter de leurs nouvelles connaissances. Un éclair de lumière enveloppe nos héros alors que le scarabée temporel les transporte dans le présent d'Ada. Ils se retrouvent dans le sous-sol du manoir d'Ada Lovelace. Charles Babbage n'est pas présent, mais Ada les attend. Elle est enthousiaste à l'idée d'entendre parler de leur voyage et des connaissances qu'ils ont acquises.*

**Ada Lovelace**: "Bienvenue ! J'espère que votre voyage a été enrichissant."

**Vous** : "Ça l'était ! Rencontrer Mme Earhart a été toute une expérience. Elle nous a appris l'importance des outils et comment les utiliser efficacement."

**Ada Lovelace**: "Peu de gens comprennent mieux qu'Amelia l'importance des outils. Je suppose que vous avez également mis à jour son Scarabée Temporel ?"

**Vous** : "Oui, nous l'avons fait ! Alors, quel est le programme maintenant ?"

**Ada Lovelace** : "L'appel d'outils est certainement un concept puissant, qui améliore votre appareil. Toutefois, il manque un certain 'raffinement', disons-nous. Nous devons apprendre *comment le faire évoluer*. Nous avons besoin d'un protocole. Je connais quelqu'un qui pourra vous aider. Il s'appelle Scipion l'Africain, un grand stratège militaire de la Rome antique. Dommage qu'il ait passé tout son temps à des stratégies militaires, je suis certaine qu'il aurait été un brillant ingénieur. Allez-y."

**Vous** : "Scipion l'Africain ? Je crois me souvenir de lui dans mes cours d'histoire."

**Ada Lovelace** : "Bien alors, pourquoi êtes-vous encore là ? Le temps presse. Au revoir."

La lumière tourbillonnante vous transporte à nouveau, et vous vous retrouvez dans une vaste pièce avec une grande table au centre. Les murs sont décorés de cartes et de stratégies militaires. Scipion l'Africain est debout près de la table, profondément plongé dans ses pensées. Il lève les yeux lorsque vous entrez : "Ada te misit/Ada vous a envoyé(e) ?"

![Scipio Africanus](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/07-mcp/assets/scipio.png)

> Scipion l'Africain, également connu sous le nom de Publius Cornelius Scipion Africanus, était un général et homme d'État romain éminent ayant vécu de 236 av. J.-C. à 183 av. J.-C. Il est surtout connu pour son rôle décisif dans la Deuxième Guerre Punique contre Carthage et pour avoir vaincu Hannibal lors de la bataille de Zama en 202 av. J.-C.
> Sa vie et sa carrière illustrent des qualités de leadership, de génie stratégique et de résilience. Ses contributions aux sphères militaires et politiques de Rome ont laissé une empreinte durable sur l'Empire romain.

## Interagir avec Scipion

Si vous souhaitez interagir avec Scipion, exécutez l'application [Characters](/app/README.md).

> \[!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Scipio Africanus](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/07-mcp/assets/scipio.png)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm install` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discuter avec Scipion.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> \[!NOTE]
> Si vous exécutez le projet localement sur votre machine, veuillez consulter le guide de démarrage rapide pour configurer un [token d'accès personnel GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) et remplacer la clé dans le code.

## Le besoin du Protocole de Contexte Modèle (MCP)

**Time Beetle** : Le protocole dont Ada a parlé s'appelle le Protocole de Contexte Modèle (MCP). C'est un protocole qui permet de décentraliser l'architecture de votre application, la rendant plus évolutive et résiliente en ajoutant des ressources sur un serveur, voire plusieurs serveurs, et en déchargeant ces ressources du client. Je vais laisser Scipion vous expliquer le concept.

**Vous** : "Oui, Ada nous a envoyés. Elle a dit que vous pourriez nous aider avec un protocole ?"

**Scipio** : "Un protocole ? J'ai passé ma vie à développer des stratégies pour la bataille. Mais je suppose qu'un protocole est comme une stratégie. Il vous aide à organiser et gérer vos ressources efficacement et assure la communication entre elles."

Parlons des manœuvres de contournement, de l'infiltration et de l'utilisation de la cavalerie.

**Vous** : "D'accord, continuez ?"

**Scipion** : "En bataille, nous utilisons souvent des manœuvres de contournement pour attaquer l'ennemi sur les côtés ou par l'arrière. Cela perturbe leurs formations et nous donne un avantage. La raison en est que l'ennemi n'est pas préparé à une attaque latérale et tend à concentrer toute son attention sur l'avant."

**Vous** : "Hm, je suppose que c'est un peu comme si une application faisait trop de travail en amont sur un seul serveur. Les manœuvres de contournement seraient comme répartir la charge sur plusieurs serveurs, n'est-ce pas ?"

**Scipion** : "Exactement ! En répartissant la charge, vous réduisez le risque de point de défaillance unique et améliorez la résilience globale du système. Cela facilite également la gestion et l'utilisation des ressources de manière efficace.

## Protocole de Contexte Modèle (MCP)

**Time Beetle** : "Pour compléter ce que dit Scipion, le Protocole de Contexte Modèle (MCP) est un moyen de décentraliser l'architecture de votre application. Il vous permet de diviser votre application en composants plus petits, plus faciles à gérer, qui peuvent fonctionner de manière indépendante. Voici quelques concepts importants à garder en tête :

* **Hôtes MCP**: Programmes comme les EDI, par exemple GitHub Copilot dans Visual Studio Code ou Claude Desktop, qui initient une connexion au serveur ou aux serveurs.
* **Clients MCP**: Clients du protocole qui maintiennent une connexion 1:1 avec les serveurs MCP.
* **Serveurs MCP**: Programmes légers qui exposent des capacités spécifiques via MCP.
* **Sources de données locales** : Fichiers, bases de données et services sur votre ordinateur auxquels les serveurs MCP peuvent accéder en toute sécurité.
* **Services distants** : Systèmes externes accessibles via Internet (par exemple, des API) auxquels les serveurs MCP peuvent se connecter.

et voici un aperçu rapide de l'architecture MCP :

![Architecture of MCP](https://softchris.github.io/mcp-workshop/assets/images/diagram-791787b0cac57bc331c20e72b645d4f7.png)

## Les éléments de base du MCP

Pour construire un serveur, vous devez connaître les éléments de base suivants :

* **Outils** : Les outils sont des fonctionnalités qui effectuent un calcul ou une tâche spécifique pour vous. Ils prennent une entrée, effectuent une computation et produisent une sortie. Typiquement, il peut s'agir d'un calcul, de la passation d'une commande, ou toute action similaire.

* **Ressources** : Une ressource correspond à des données statiques. Cela inclut souvent des paramètres d'application, des schémas de base de données ou d'autres fichiers statiques sur un serveur, par exemple.

* **Prompts** : Les prompts, ou modèles de prompts, fonctionnent comme une recette que vous pouvez réutiliser. L'idée est qu'en utilisant une telle recette, vous pourriez alors lui envoyer des paramètres et l'alimenter dans un LLM pour accomplir une tâche, comme par exemple générer une description de produit.

### Découvrir des outils, des ressources et des invites

**Vous** : "Et qu'en est-il de l'infiltration ?"

**Scipion** : "L'infiltration consiste à utiliser de petites unités pour pénétrer les lignes ennemies, permettant ainsi d'en apprendre davantage sur l'ennemi et de semer la confusion."

**Vous** : "Cela me semble similaire à utiliser cette manière de penser pour mieux comprendre nos serveurs, notamment quels outils, prompts et ressources ils possèdent."

Pour résumer, je devrais :

* **Utiliser des manœuvres de contournement**, ou dans mon cas diviser les fonctionnalités par fonctionnalités d'application dans plusieurs serveurs MCP différents afin que je puisse distribuer les serveurs en fonction de leur domaine d'utilisation. Ainsi, il devient plus facile d'évoluer et de gérer l'application. Ces serveurs peuvent même être mis à jour de manière indépendante les uns des autres.
* **Utiliser l'infiltration**, ou dans mon cas, comprendre ce que font ces serveurs, en termes d'outils, de prompts et de ressources. De cette manière, je peux m'assurer que j'interagis avec le bon serveur et que j'utilise les bons outils pour le travail.

**Vous** : "Time Beetle, est-ce que je comprends bien ce concept ?"

**Time Beetle** : "Oui, c'est exact. Les stratégies de Scipion peuvent être appliquées à l'architecture de votre application. Si vous le souhaitez, je peux vous enseigner les spécificités du Protocole de Contexte Modèle (MCP) et comment l'implémenter dans votre application."

**Vous** : "Oui, je veux bien !"

**Time Beetle** : "Bien, commençons par créer un serveur."

## Créer un serveur MCP

**Time Beetle**: "Pour créer votre premier serveur MCP, vous avez besoin de deux bibliothèques : `@modelcontextprotocol/sdk` et `zod` :

* La bibliothèque `@modelcontextprotocol/sdk` fournit les outils nécessaires pour créer et gérer des serveurs MCP.
* `zod` est une bibliothèque de déclaration et de validation de schéma orientée TypeScript, qui vous aide à définir et valider les structures de données utilisées dans votre serveur MCP.

```bash
npm install @modelcontextprotocol/sdk zod
```

Voici un exemple simple de création d'un serveur MCP à l'aide de ces bibliothèques :

```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
 
// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});
```

Le code précédent effectue les actions suivantes :

* Importe les classes et fonctions nécessaires depuis la bibliothèque `@modelcontextprotocol/sdk`.
* Crée une instance de serveur. La classe `McpServer` est utilisée pour créer le serveur, et prend un objet avec le nom du serveur et sa version en tant que paramètres.

**Vous** : "Cela ne fait pas grand-chose pour l'instant, n'est-ce pas ?"

**Time Beetle** : "Non, pas encore. Mais nous pouvons y ajouter des ressources et des outils. Un outil est quelque chose qui peut être utilisé pour accomplir une tâche spécifique, tandis qu'une ressource est quelque chose qui peut fournir des données ou une fonctionnalité à l'outil. Ajoutons-en quelques exemples ci-dessous :

```typescript
server.tool("add",
   { a: z.number(), b: z.number() },
   async ({ a, b }) => ({
     content: [{ type: "text", text: String(a + b) }]
   })
 );
```

Dans le code précédent, nous :

* Avons défini un outil nommé « add » qui prend deux nombres en entrée et retourne leur somme en sortie.
* Décrit les paramètres d'entrée et leur validation en utilisant zod. La fonction `z.number()` est utilisée pour valider les données d'entrée, en garantissant que `a` et `b` sont des nombres.
* La fonction `async` est utilisée pour effectuer l'addition et retourner le résultat dans un format spécifique.

**Vous** : "Intéressant, donc l'outil est comme une fonction qui peut être appelée par le client MCP ?"

**Time Beetle** : "Exactement ! Le client MCP peut appeler cet outil et fournir les paramètres requis. Ajoutons également une ressource au serveur :

```typescript
server.resource(
   "greeting",
   new ResourceTemplate("greeting://{name}", { list: undefined }),
   async (uri, { name }) => ({
     contents: [{
       uri: uri.href,
       text: `Hello, ${name}!`
     }]
   })
 );
```

Dans ce code, nous :

* Défini une ressource nommée "greeting" qui prend un nom en entrée et retourne un message de salutation.
* Utilise un modèle de ressource pour définir comment appeler la ressource `greeting://{name}`. Ce schéma est utilisé pour définir le format de l'URI de la ressource, qui inclut un espace réservé pour le nom.
* La fonction `async` est utilisée pour générer le message de salutation basé sur le nom fourni.

**Vous** : "Donc, la ressource est comme une source de données, cela pourrait être une base de données, un fichier ou même une API ? Si c'était pour un fichier, j'utiliserais un URI file:// ? Comme ceci :

```typescript
server.resource(
   "file",
   new ResourceTemplate("file://{path}", { list: undefined }),
   async (uri, { path }) => ({
     // do something with the file at path, e.g., read its contents
     contents: [{
       uri: uri.href,
       text: `File at ${path}`
     }]
   })
 );
```

**Time Beetle** : "Oui, exactement ! La ressource peut être tout ce qui fournit des données ou des fonctionnalités au serveur MCP. Vous pouvez définir des ressources pour des fichiers, des bases de données, des API ou toute autre source de données que vous souhaitez utiliser."

Ajoutons maintenant une couche de transport au serveur afin qu'il puisse communiquer avec des clients.

```typescript
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport); 
```

Dans ce code, nous :

* Créé une couche de transport en utilisant la classe `StdioServerTransport`, permettant au serveur de communiquer avec des clients via l'entrée et la sortie standards et fonctionne sur votre machine locale. Il existe également d'autres transports comme SSE et HTTP streaming, qui permettent de fonctionner à distance sur un serveur. Nous en parlerons plus tard.
* Appelé la méthode `connect` pour établir la connexion entre le serveur et la couche de transport.

**Vous** : "Ok, donc maintenant que nous avons un serveur, comment le lancer et le tester ?"

## Exécution et test du serveur MCP

**Vous** : "Scipion, avez-vous testé vos tactiques ?"

**Scipion** : "Bien sûr ! Le test est crucial dans n'importe quelle stratégie. Vous devez toujours tester vos tactiques avant de les déployer. En fait, je me souviens d'une bataille spécifique où j'ai utilisé une nouvelle tactique et elle a échoué lamentablement, appelée la Bataille de la Trébie. J'ai appris ma leçon et je n'ai jamais refait cette erreur."

**Vous** : "Alors, comment puis-je tester mon serveur MCP ?"

**Time Beetle** : "Vous pouvez tester votre serveur MCP en l'exécutant dans un terminal via l'inspecteur comme suit :

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

Ici, nous utilisons le package `@modelcontextprotocol/inspector` pour exécuter le serveur MCP. Nous fournissons l'argument `node build/index.js` pour spécifier le point d'entrée du serveur. Cela démarrera le serveur MCP et vous permettra d'interagir avec lui via l'inspecteur.

**Vous** : "Et comment puis-je interagir avec le serveur ?"

**Time Beetle** : "Cela démarre un serveur web sur le port 6274. Vous pouvez accéder à l'inspecteur en ouvrant votre navigateur web et en vous rendant sur `http://localhost:6274`. L'inspecteur fournit une interface conviviale pour interagir avec votre serveur MCP, vous permettant de tester les outils et les ressources que vous avez définis."

![Inspector user interface](https://softchris.github.io/mcp-workshop/assets/images/connect-7703c67645f368d51c7b24a5d635d6a0.png)

### -1- Connexion au serveur

**Time Beetle** : Sélectionnez "Connecter" et vous devriez voir la fenêtre ci-dessous :

![Connecting to server](https://softchris.github.io/mcp-workshop/assets/images/connected-7c3570d5d0a8659e27740d2950031cb3.png)

Il devrait indiquer que vous êtes connecté. Vous pouvez ensuite interagir avec les outils ou les ressources.

### -2- Lister les outils et ressources

**Time Beetle** : "Ensuite, nous voulons lister les outils et ressources disponibles sur le serveur. Vous pouvez le faire en sélectionnant "Lister les outils" pour voir les outils disponibles :

![Listing tools](https://softchris.github.io/mcp-workshop/assets/images/tools-listed-630aa49c9d7e4347108419fb83c409f6.png)

Vous devriez maintenant voir l'outil « add » dans la liste. Vous pouvez également afficher les ressources en sélectionnant l'onglet « Ressources ».

### -3- Exécuter l'outil

**Time Beetle** : "Pour exécuter l'outil, sélectionnez l'outil "add" dans la liste. Renseignez les paramètres dans la boîte de dialogue qui apparaît sur le côté droit de l'écran. Par exemple, vous pouvez entrer `a=5` et `b=10` pour additionner ces deux nombres. Cliquez sur "Exécuter l'outil" pour exécuter l'outil. Vous devriez voir le résultat dans la zone de sortie ci-dessous. Le résultat devrait être `15`."

![Run the tool](https://softchris.github.io/mcp-workshop/assets/images/ran-tool-271ecd5f84a457462e59789b579ee9d4.png)

**Scipion** : "Intéressant, j'aurais aimé pouvoir tester mes stratégies comme cela. Cela semble très utile."

**Vous** : "Oui, vraiment ! Je vois à quel point cela serait utile pour tester et déboguer."

## Créer un client

**Time Beetle** : "Vous pouvez également créer un client qui se connecte au serveur MCP et interagit avec lui. Voici un exemple de création d'un client MCP simple en utilisant la bibliothèque `@modelcontextprotocol/sdk` :

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["server.js"]
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

await client.connect(transport);
```

Dans le code précédent, nous :

* Créé une couche de transport en utilisant la classe `StdioClientTransport`, permettant au client de communiquer avec le serveur MCP via l'entrée et la sortie standards.
* Initie une nouvelle instance de `Client` avec un nom et une version.
* Connecté le client à la couche de transport en utilisant la méthode `connect`.

**Vous** : "Laissez-moi deviner, il y a beaucoup plus à faire avec le client, n'est-ce pas ?"

**Time Beetle** : Oui, parlons-en ensuite. Le client MCP peut être utilisé pour interagir avec le serveur, appeler des outils et accéder à des ressources.

### Lister et appeler les outils et ressources

**Time Beetle** : "Il y a généralement deux scénarios que vous souhaitez couvrir : lister les outils et ressources, et les appeler. Voici comment faire :

```typescript
// List prompts
const prompts = await client.listPrompts();

// List resources
const resources = await client.listResources();

// list tools
const tools = await client.listTools();
```

**Vous** : C'est super, ainsi je sais quelles capacités le serveur a. Mais comment puis-je les appeler ?

**Time Beetle** : "D'accord, laissez-moi vous expliquer un exemple spécifique, à commencer par les outils. Vous commencez par demander quels outils sont disponibles, puis vous pouvez stocker cette réponse et ensuite appeler l'outil que vous souhaitez. Voici un exemple :

Ainsi, lorsque vous listez les outils, vous obtenez une réponse au format suivant :

```json
  
  {
    "name": "<tool name>",
    "description": "<description>".
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
  }
```

ce qui signifie que, si vous avez un outil `add`, votre réponse, en listant les outils, ressemble à ceci :

```json
{
    "name": "add",
    "description": "Adding two numbers".
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
}
```

**Vous** : "D'accord, je peux donc stocker cela dans une variable, puis appeler l'outil que je veux ?"

**Time Beetle** : "Exactement ! Regardons comment appeler un outil ensuite :

```typescript
// List tools
const { tools } = await client.listTools();

const addTool = tools[0]; // Assuming the first tool is "add"
const subtractTool = tools[1]; // Assuming the second tool is "subtract"

// Call a tool
const result = await client.callTool({
  name: addTool.name,
  arguments: {
    a: 5,
    b: 10
  }
});
```

**Vous** : "D'accord, cela a du sens. Et qu'en est-il des ressources ?"

**Time Beetle** : "Les ressources sont similaires, mais vous devez fournir l'URI de la ressource et les paramètres qu'elle nécessite. Voici un exemple :

```typescript
let resourceUri = "greeting://John"; // Replace with the actual resource URI

// call resource
// Read a resource
const name = "John Doe"; // Replace with the actual name

const resourceResult = await client.readResource({
  uri: `greeting:///${name}`,
});

console.log(resourceResult); // Hi John Doe!
```

**Vous** : "Je vois, intéressant, mais vous pensez à vous-même, je parie qu'on pourrait encore améliorer cela, non ? Time Beetle, nous pouvons améliorer cela, n'est-ce pas ?"

**Time Beetle** : Oui, mais d'abord, faisons plaisir à Scipion. Nous devons discuter avec une certaine Mme Lamarr lors de notre prochaine étape.

## Exercice - Création d'un système de gestion d'inventaire et d'outils pour Scipion

**Scipion** : "Vous savez, j'ai tellement de parchemins et de rouleaux qui traînent. J'aimerais vraiment un outil pour m'aider à les organiser. J'ai aussi cet abaque que j'utilise pour les calculs. Pouvez-vous m’aider à créer un outil pour gérer mon inventaire ?"

Voici un inventaire complet de mes parchemins :

* Parchemin de tactiques.
* Parchemin d'approvisionnement alimentaire.

Oh, voici un parchemin d'imposition. La taxation est un sujet capital, l'Empire veut sa part de tout ce que nous acquérons. Avez-vous résolu cela à votre époque ? Ne répondez pas, je ne veux pas savoir.

Pour l'outil abaque, j'ai besoin qu'il prenne en charge les opérations suivantes :

* Add: Add two numbers together.
* Subtract: Subtract one number from another.
* Multiply: Multiply two numbers together.
* Divide: Divide one number by another.

## Solution

[Solution](/lessons/07-mcp/solution/README.md)

## Vérification des connaissances

**Question** : Quels sont les différents types de ressources qu'un serveur MCP peut exposer ?

A. Outils et point d'accès Web

B. Outils et Ressources

C. Outils, Ressources et Invites

**Question** : Quels sont les moyens de tester un serveur MCP ?

A. Inspector

B. Un client MCP personnalisé

C. Visual Studio Code

D. curl

E. Toutes les réponses ci-dessus

[Solution Quiz](/lessons/07-mcp/solution/solution-quiz.md)

## Résumé

Dans ce chapitre, nous avons appris les points suivants :

* Le Protocole de Contexte Modèle, MCP, est un excellent moyen de déléguer des capacités à des serveurs, plutôt que de concentrer toutes vos fonctionnalités en un seul endroit. Cela permet à vos applications de rester petites et ciblées. L'avantage supplémentaire est que différentes équipes peuvent également gérer différents serveurs. Grâce au fait que MCP est un protocole, cela signifie en outre que quiconque souhaitant partager des capacités peut le faire dans un format commun.
* De plus, nous avons vu comment consommer un serveur MCP à l'aide de l'outil d'inspection ou d'un client écrit.

## Ressources d'auto-apprentissage

* [Construire des serveurs MCP](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server)

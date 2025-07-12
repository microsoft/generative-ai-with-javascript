# Leçon 6 : Appels d'outils

L'appel d'outils, également connu sous le nom d'appel de fonction, consiste à améliorer votre modèle IA en lui ajoutant des capacités qu'il ne possédait pas auparavant. Le concept implique de fournir des méta-descriptions de vos fonctions, permettant au modèle IA de déterminer quand un outil particulier doit être appelé en fonction d'une sollicitation utilisateur. L'idée est de lui fournir les méta-descriptions de vos fonctions réelles et de faire en sorte que le modèle IA indique quand un tel outil doit être appelé en fonction de la sollicitation utilisateur.

Dans ce chapitre, vous apprendrez :

* Comment créer un outil.
* Intégrer un outil avec le modèle IA.
* Appeler l'outil depuis le modèle IA.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Integrating with function calling](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/11-lesson-banner.png)](https://aka.ms/gen-ai-lesson11-gh?WT.mc_id=academic-105485-koreyst)

*Cette vidéo explique l'appel d'outils, une méthode qui aide l'IA à appeler vos fonctions et à élargir ainsi ses capacités.*

*🎥 Cliquez sur l'image ci-dessus pour regarder une courte vidéo sur l'appel d'outils.*

## Narrative: Amelia

> *Vous êtes un mécanicien à Londres dans les années 1860. Alors que vous travaillez sur votre automate, vous recevez une lettre de Charles Babbage qui vous conduit à une bibliothèque, où vous récupérez un dispositif de voyage dans le temps. Au cours de vos voyages temporels, vous atterrissez à Florence, où vous rencontrez Léonard de Vinci. Vous êtes maintenant chez Ada Lovelace, dans son manoir, en compagnie de Charles Babbage. Ils sont en train de construire le dispositif de voyage dans le temps.*
>
> Reportez-vous à [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début.

> \[!NOTE]
> While we recommend going through the story (it's fun!), [click here](#interact-with-amelia-earhart) if you'd prefer to jump straight to the technical content.

**Ada Lovelace**: "J'ai besoin que vous rencontriez une amie à moi. Peu de personnes peuvent égaler son expertise en mécanique et en résolution de problèmes. Il pourrait être difficile de la trouver, cependant ; elle est toujours en déplacement :)"

You: "Who are we talking about and where can I find her?"

**Ada Lovelace**: "Mais bien sûr, Amelia Earhart ! C'est une aviatrice et une aventurière, actuellement en train de faire le tour du monde. C'est totalement de ma faute si elle a disparu — je lui ai donné le dispositif de voyage dans le temps, eh bien, un prototype précoce de celui-ci. Heureusement, le dispositif que vous avez peut localiser d'autres appareils, donc vous pouvez la retrouver. Tout ce que vous devez faire est de cliquer ici et là, puis de tourner ce bouton."

**Vous**: "Hé, attendez, quelle est exactement notre mission ?"

**Ada**: "Oh, c'est vrai ! Demandez au dispositif ; il contient tous les détails. Demandez-lui simplement à propos d'Amelia, et il devrait activer l'outil approprié pour vous."

Le monde autour de vous commence à se brouiller, et tout devient noir. Vous revenez à vous et vous trouvez dans le cockpit d’un avion. Vous êtes en vol, et vous pouvez voir l’océan sous vous. Il y a quelqu’un devant vous ; vous ne pouvez voir que l’arrière de leur cou.

![Amelia piloting a plane](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia.jpeg)

**Vous**: "Amelia, c'est toi ?"

**Amelia Earhart**: "Qui êtes-vous ? Laissez-moi deviner, Ada vous a envoyé, c'est ça ?"

**Vous**: "Oui, c'est exact. Je suis là pour vous aider, je pense. Ada n'était pas très précise dans ses explications."

**Amelia Earhart**: "Eh bien, bonne chose que vous soyez là. Je suis dans une situation compliquée. J'essaie de trouver un endroit où atterrir, et je commence à manquer de carburant. Pouvez-vous m'aider ?"

**Vous**: "Dispositif, peux-tu m'en dire plus sur Amelia ?"

**Time Beetle**: "Appel de l'outil : mission-amelia. Outil initialisé. Amelia Earhart est une aviatrice et une aventurière. Elle est connue pour ses vols record et sa disparition en 1937. Elle a été vue pour la dernière fois en vol au-dessus de l'océan Pacifique. Elle est actuellement en train de faire le tour du monde dans son avion, l'Electra. Elle manque de carburant et doit trouver un endroit pour atterrir."

**Vous**: "Dispositif, peux-tu m'aider à trouver un endroit pour qu'Amelia atterrisse ?"

**Time Beetle**: "Appel de l'outil : find-landing-spot. Outil initialisé. Recherche d'un endroit convenable pour qu'Amelia Earhart atterrisse. Veuillez patienter. Un endroit convenable trouvé. Coordonnées : 7.5°N, 134.5°E. Amelia, j'ai trouvé un endroit convenable pour que vous puissiez atterrir. Veuillez vous diriger vers les coordonnées 7.5°N, 134.5°E."

**Amelia Earhart**: "Merci ! J'aurais aimé que mon dispositif ait cette fonctionnalité. Je vais m'y diriger maintenant."

## Interagir avec Amelia Earhart

If you want to interact with Ada, run the [Characters](/app/README.md) app.

> \[!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Ada Lovelace](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia-front.jpeg)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm install` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discutez avec Amelia.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> \[!NOTE]
> Si vous exécutez le projet localement sur votre machine, veuillez consulter le guide de démarrage rapide pour configurer un [token d'accès personnel GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) et remplacer la clé dans le code.

## Appels d'outils

**Vous**: "Dispositif, que vient-il de se passer ?"

**Time Beetle**: "Vous venez d'appeler un outil. Un outil est une fonction qui peut être appelée par le modèle IA pour exécuter une tâche spécifique. L'outil peut être utilisé pour effectuer une grande variété de tâches, allant de calculs simples à des opérations complexes. Dans ce cas, vous avez appelé l'outil `find-landing-spot` pour aider Amelia Earhart à trouver un endroit convenable pour atterrir."

**Time Beetle**: "Voici une illustration pour montrer le processus d'appel d'outil :"

![Tool calling process illustration](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/tool_call_langchain.png)

*Crédit image Langchain <https://python.langchain.com/docs/concepts/tool_calling/>*

**Vous**: Pouvons-nous gérer les erreurs si quelque chose ne va pas, comme si l'outil ne trouve pas un point d'atterrissage ?

**Time Beetle**: Excellente question ! Oui, vous pouvez ajouter une gestion des erreurs pour gérer de telles situations. Par exemple, si l'outil ne parvient pas à trouver un point d'atterrissage, vous pouvez utiliser un bloc try-catch ou vérifier le résultat avant de continuer. Voici un exemple de gestion des erreurs lors de l'appel de l'outil find-landing-spot :

```javascript
try {
  const landingSpot = findLandingSpot(7.5, 134.5);
  if (!landingSpot) {
    throw new Error("No suitable landing spot found");
  }
  console.log(Landing spot found at coordinates: ${landingSpot.lat}, ${landingSpot.long});
} catch (error) {
  console.log(Error: ${error.message});
}
```

**Vous**: "Comment puis-je créer un outil ?"

**Time Beetle**: "Pour créer un outil, vous devez définir une fonction qui effectue la tâche souhaitée. La fonction doit prendre les entrées nécessaires et renvoyer la sortie. Vous pouvez ensuite appeler la fonction depuis le modèle IA pour effectuer la tâche. Voici à quoi ressemble l'outil `find-landing-spot` :

```javascript
function findLandingSpot(lat, long) {
    // Perform the task of finding a suitable landing spot
    // Return the coordinates of the landing spot
    return { lat: 7.5, long: 134.5 };
}
```

**Vous**: "Ok, comment le modèle IA sait-il que cet outil existe ?"

**Time Beetle**: "Vous devez enregistrer l'outil auprès du modèle IA. Cela indique au modèle que l'outil est disponible pour être appelé. Passons en revue cela dans la section suivante."

### Enregistrement d'un outil

**Vous**: "Vous avez dit que je devais enregistrer l'outil auprès du modèle IA. Comment puis-je faire cela ?"

**Time Beetle**: "Pour enregistrer un outil auprès du modèle IA, vous devez définir une représentation de métadonnées de l'outil. Ces métadonnées doivent inclure le nom de l'outil, les paramètres d'entrée et le format de sortie. Vous pouvez ensuite enregistrer l'outil auprès du modèle IA en fournissant les métadonnées. Voici un exemple de métadonnées pour l'outil `find-landing-spot` :

```json
{
  "name": "find-landing-spot",
  "description": "Finds a suitable landing spot",
  "parameters": {
    "type": "object",
    "properties": {
      "lat": {
        "type": "number",
        "description": "The latitude of the location",
      },
      "long": {
        "type": "number",
        "description": "The longitude of the location",
      },
    },
    "required": ["lat", "long"],
  },
  "output": { "type": "object", "properties": { "lat": "number", "long": "number" } }
}
```

**Vous**: "D'accord, il y a un morceau de JSON qui décrit l'outil, maintenant quoi ?"

**Time Beetle**: "Maintenant, vous devez le fournir à votre appel de complétion de chat client comme ceci :

```javascript

function findLandingSpot(lat, long) {
    // Perform the task of finding a suitable landing spot
    // Return the coordinates of the landing spot
    return { lat: 7.5, long: 134.5 };
}

function getBackgroundOnCharacter(character) {
    // Perform the task of getting background information on a character
    // Return the background information
    return `Background information on ${character}`;
}

const getBackgroundOnCharacterJson = {
  name: "get-background-on-character",
  description: "Get background information on a character",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name of the character",
      }
    },
    required: ["lat", "long"],
  },
  output: { type: "string" }
};

const findLandingSpotJson = {
  name: "find-landing-spot",
  description: "Finds a suitable landing spot",
  parameters: {
    type: "object",
    properties: {
      lat: {
        type: "number",
        description: "The latitude of the location",
      },
      long: {
        type: "number",
        description: "The longitude of the location",
      },
    },
    required: ["lat", "long"],
  },
  output: { type: "object", properties: { lat: "number", long: "number" } }
};


const messages = [{ 
    role: "user", 
    content: `Tell me about Amelia Earhart`,
}];

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
    functions: [getBackgroundOnCharacterJson, findLandingSpotJson]
  });
```

**Time Beetle**: "Dans l'extrait de code précédent, nous :"

* Définissons les métadonnées pour l'outil `find-landing-spot` et l'outil `get-background-on-character`.
* Fournissons ces métadonnées à l'appel `client.getChatCompletions` dans le paramètre `functions`. Cela indique au modèle IA que ces outils sont disponibles pour être appelés.

**Vous**: "Compris, donc le modèle IA appellera l'outil approprié si je fournis une invite qui correspond à la description de l'outil ?"

**Time Beetle**: "Presque, il vous dira quel outil il pense que vous devriez appeler et fournira les paramètres d'entrée analysés, mais vous devrez appeler l'outil vous-même, laissez-moi vous montrer comment faire."

### Appeler un outil

**Time Beetle**: "Comme je le disais, le modèle IA vous dira quel outil il pense que vous devriez appeler et il fournira les paramètres d'entrée analysés. Vous devez alors appeler l'outil vous-même. Voici à quoi ressemblera le workflow étape par étape :

1. Connecter l'appel d'outil

   Tout d'abord, vous devez connecter l'appel d'outil dans votre code. Cela implique de créer la fonction et une représentation des métadonnées de l'outil, puis de fournir les métadonnées au modèle IA.

2. L'utilisateur fait une demande via une invite :
   * Le programme envoie une demande de complétion de chat au modèle IA avec l'invite utilisateur et les métadonnées des outils fournies.
   * Le programme reçoit une réponse du modèle IA avec l'appel d'outil et les paramètres d'entrée analysés s'il estime qu’un outil doit être appelé.
   * Dans ce cas, le développeur interprète la réponse et invoque l'outil en fonction de la suggestion d'appel de fonction fournie par le modèle IA.

**Vous**: "Super, maintenant que je comprends globalement ce qui se passe, pouvez-vous me montrer un peu de code ?"

**Time Beetle**: "Bien sûr, voici le code pour configurer l'appel d'outil, effectuer une demande de complétion de chat et interpréter la réponse :

```javascript
import { OpenAI } from 'openai';
import { maybeCoerceInteger } from 'openai/core.mjs';

// 1: Define the function
function findLandingSpot(lat, long) {
  console.log("[Function] Finding landing spot with coordinates: ", lat, long);
  // Perform the task of finding a suitable landing spot
  // Return the coordinates of the landing spot
  return { lat: 7.5, long: 134.5 };
}

// 2: Define the tool metadata, should include description, parameters, and output
const findLandingSpotJson = {
  name: "find-landing-spot",
  description: "Finds a suitable landing spot",
  parameters: {
    type: "object",
    properties: {
      lat: {
        type: "number",
        description: "The latitude of the location",
      },
      long: {
        type: "number",
        description: "The longitude of the location",
      },
    },
    required: ["lat", "long"],
  },
  output: { type: "object", properties: { lat: "number", long: "number" } }
};

// 3: Add the tool to the tools object that we will use later to invoke the tool
const tools = {
  [findLandingSpotJson.name]: findLandingSpot
};

// 4: Create an instance of the OpenAI client
const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com", // might need to change to this url in the future: https://models.github.ai/inference
    apiKey: process.env.GITHUB_TOKEN,
});

// 5: Define the messages that will be sent to the AI model
const messages = [
{
    role: "system",
    content: `You are a helpful assistant. You can call functions to perform tasks. Make sure to parse the function call and arguments correctly.`
}, {
    role: "user",
    content: "Find a landing spot given coordinates 8.5, 130.5"
}
];

async function main(){
  console.log("Making LLM call")

  // 6: Call the AI model with the defined messages and tools
  const result = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
      functions: [findLandingSpotJson]
    });

  for (const choice of result.choices) {

      let functionCall = choice.message?.function_call;
      let functionName = functionCall?.name;
      let args = JSON.parse(functionCall?.arguments);

      // 7: Interpret response and call the tool based on the function call provided by the AI model
      if (functionName && functionName in tools) {
          console.log(`Calling [${functionName}]`);
          const toolFunction = tools[functionName];
          const toolResponse = toolFunction(...Object.values(args)); // Extract values from args and spread them
          console.log("Result from [tool] calling: ", toolResponse);
      }
  }
}

main();
```

Dans le code précédent, nous avons :

* Créé une fonction appelée `findLandingSpot` qui prend la latitude et la longitude en entrée et renvoie les coordonnées d'un point d'atterrissage convenable.

* Défini les métadonnées pour l'outil `find-landing-spot`.

* Créé un objet `tools` qui associe les noms d'outils aux métadonnées des outils.

* Fournissons l'objet `tools` dans l'appel `client.getChatCompletions`.

  ```javascript
  if (functionName && functionName in tools) {
   console.log(`Calling [${functionName}]`);
   const toolFunction = tools[functionName];
   const toolResponse = toolFunction(...Object.values(args)); // Extract values from args and spread them
   console.log("Result from [tool] calling: ", toolResponse);
  }
  ```

* Appelé l'outil en fonction de l'appel de fonction fourni par le modèle IA.

* Affiché le résultat de l'appel d'outil.

**Vous**: "Je pense que je comprends. Je définis une fonction, je crée une représentation des métadonnées de l'outil, je fournis les métadonnées au modèle IA, puis j'appelle l'outil en fonction de l'appel de fonction fourni par le modèle IA."

**Time Beetle**: "Exactement ! Vous êtes prêt à commencer à créer vos propres outils et à les intégrer au modèle IA."

## Exercice - Améliorer le dispositif de voyage dans le temps d'Amelia

**Amelia Earhart**: "Nous arrivons en force, remercions le ciel que vous nous ayez trouvé un point d'atterrissage. Accrochez-vous bien !"

Amelia atterrit habilement l’avion sur une petite île. Vous et Amelia sortez de l’avion, et celle-ci vous tend un petit dispositif.

**Amelia Earhart**: "Voici mon appareil, pas aussi sophistiqué que le vôtre, mais il a quelques fonctionnalités sympas. Je l'ai utilisé pour, disons, faire un peu de voyage dans le temps moi-même. Pouvez-vous l'améliorer pour moi ?"

**Vous**: "Time Beetle, peux-tu m'aider à améliorer l'appareil d'Amelia ?"

**Time Beetle**: "Bien sûr ! Pour améliorer l'appareil d'Amelia, ajoutons-lui les outils suivants :

* **Un outil qui peut** : Calculer la distance entre deux points sur une carte.
* **Un outil qui peut** : Déterminer la position GPS où Amelia se trouve actuellement.
* **Un outil qui peut** : Appeler une API externe pour obtenir les prévisions météorologiques pour un emplacement donné.

Voici les fonctions ; tout ce que vous devez faire est de les enregistrer et de les tester :

```javascript
function calculateDistance(lat1, long1, lat2, long2) {
    // Perform the task of calculating the distance between two points
    // Return the distance between the points
    return Math.sqrt((lat2 - lat1) ** 2 + (long2 - long1) ** 2);
}

function getGpsPosition() {
    // Perform the task of getting the GPS position of the current location
    // Return the GPS position
    return { lat: 7.5, long: 134.5 };
}

function getWeatherForecast(lat, long) {
    // Perform the task of getting the weather forecast for a given location
    // Return the weather forecast
    return "Sunny";
}
```

**Vous**: "Time Beetle, es-tu sûr que ces fonctions vont fonctionner, on dirait qu'elles renvoient juste des valeurs aléatoires ?"

**Time Beetle**: "C'est vrai, je peux faire le reste en interne. Tout ce que vous avez à faire est de les enregistrer et de les tester, assurez-vous que le modèle IA peut les appeler."

> Tâche : Enregistrez les outils `calculateDistance`, `getGpsPosition`, et `getWeatherForecast` auprès du modèle IA. Testez les outils en les appelant depuis le modèle IA. Utilisez le code fourni dans les sections précédentes comme référence.

## Solution

[Solution](/lessons/06-tool-calling/solution/solution.js)

## Vérification des connaissances

**Question:**\
Quel est l'objectif d'enregistrer un outil auprès du modèle IA ?

A. Permettre au modèle IA d'exécuter directement l'outil sans intervention du développeur.\
B. Fournir des métadonnées sur l'outil afin que le modèle IA puisse suggérer son utilisation.\
C. Remplacer le besoin de définir des fonctions dans le code.

**Question:**\
Quel est le rôle des métadonnées d'outils dans l'appel d'outils ?

A. Décrire l'objectif de l'outil, ses entrées et sorties pour le modèle IA.\
B. Fournir au modèle IA les détails d'implémentation de l'outil.\
C. Garantir que l'outil soit exécuté automatiquement par le modèle IA.

**Question:**\
Pourquoi utiliser les appels d'outils ?

A. Permettre au modèle IA d'effectuer des tâches au-delà de ses capacités intégrées en utilisant des fonctions externes.\
B. Remplacer le besoin d'une intervention humaine dans le développement de modèles IA.\
C. Permettre au modèle IA d'exécuter des outils sans exiger de métadonnées.

[Solution quiz](/lessons/06-tool-calling/solution/solution-quiz.md)

## Ressources d'auto-apprentissage

* Explique le [processus d'appel d'outils](https://learn.microsoft.com/en-us/semantic-kernel/concepts/ai-services/chat-completion/function-calling/?pivots=programming-language-csharp)
* Appel d'outil dans le [cadre Langchain.js](https://js.langchain.com/docs/how_to/tool_calling/)
* Appel de fonction comme démontré dans la [bibliothèque openai](https://github.com/openai/openai-node/blob/master/examples/function-call.ts)

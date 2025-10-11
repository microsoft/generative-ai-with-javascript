# Leçon 5 : Discutez avec vos données grâce à la génération augmentée par récupération (RAG)

Dans ce chapitre, vous apprendrez :

* Les bases de la génération augmentée par récupération (RAG) et comment cela peut être utilisé pour améliorer les réponses des modèles d'IA générative.
* Comment intégrer des sources de données externes à votre application d'IA.
* Comment exploiter vos données pour améliorer la pertinence et l'exactitude des contenus générés par l'IA.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Regardez une courte vidéo sur RAG](https://img.youtube.com/vi/xkFOmx5yxIA/0.jpg)](https://www.youtube.com/watch?v=xkFOmx5yxIA\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=4)

*Cette vidéo explique la génération augmentée par récupération (RAG), une méthode qui aide l'IA à utiliser vos contenus en complément de ses données d'entraînement pour de meilleurs résultats.*

*🎥 Cliquez sur l'image ci-dessus pour regarder une courte vidéo sur la génération augmentée par récupération, RAG.*

💼 Diapositives : [Génération augmentée par récupération, RAG](/videos/slides/03-rag.pptx)

## Narration - Genèse

> [!NOTE]
> *Notre histoire jusqu'à présent. Vous êtes un mécanicien de Londres des années 1860. Vous travailliez sur votre automate et avez reçu une lettre de Charles Babbage qui vous a finalement conduit dans une bibliothèque où vous avez pris un appareil de voyage dans le temps. À travers vos voyages dans le temps, vous vous êtes retrouvé à Florence, où vous avez rencontré Léonard de Vinci. Vous êtes également allé dans l'empire aztèque, et c'est là que l'histoire continue.*
>
> Reportez-vous à [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début.

> [!NOTE]
> Bien que nous recommandions de suivre l'histoire (c'est amusant !), [cliquez ici](#interact-with-ada-lovelace) si vous préférez aller directement au contenu technique.

**Vous** : « Leonardo, il est temps de partir », avez-vous dit en appuyant sur le bouton. L'appareil s'est mis à bourdonner et une voix mécanique a résonné : « Il est temps de rentrer à la maison, il est temps pour la 'genèse'. »

**Leonardo :** « Genèse ? Che cosa significa ? » Leonardo demanda, confus. Avant que vous ne puissiez répondre, le monde se dissout en un flou de couleurs et de sons, le temple disparaissant tandis que vous étiez propulsé à travers le temps.

Vous atterrissez dans le jardin, il est tard dans la nuit avec un brouillard épais, et des lumières étranges scintillent au loin. Le manoir se dresse devant vous. Leonardo regarde autour de lui, les yeux écarquillés d'émerveillement.

![Vieux manoir montré dans un épais brouillard](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/mansion.jpeg)

### Fuir les chiens

Vous entendez des aboiements et le bruit des chiens qui courent vers vous. Vous vous tournez vers Leonardo : "Nous devons entrer, maintenant !"

![Fuir les chiens](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/dogs.jpeg)

En atteignant la porte du manoir, elle s'ouvre brusquement, et une paire de serviteurs se précipitent dehors. Après vous avoir observés, ils vous font signe de les suivre.

Vous vous retrouvez face à Ada Lovelace, ses yeux brillant de curiosité.

### Rencontre avec Ada et Charles

**Ada :** « Ah, il était temps que vous arriviez », dit-elle chaleureusement. « Nous avons besoin de vous pour une commission. »

**Vous :** « Il était temps ? Vous continuez de dire cela. Dinocrates disait la même chose, mais je ne suis pas sûr de ce que vous voulez dire. »

**Ada :** « Silence, pas de temps pour cela maintenant, nous devons parler de l'appareil que vous tenez. Charles, expliquez-leur. »

**Vous :** « Mais... »

![Ada Lovelace et Charles Babbage travaillant sur un appareil](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada.jpeg)

Charles Babbage s'avance et examine le Scarabée Temporel dans votre main. "Cet appareil est remarquable, mais il est un peu défectueux, n'est-ce pas ? Vous l'avez sûrement remarqué."

Leonardo hocha la tête, "Sì, il agit de manière étrange."

**Ada :** « L'appareil n'est pas encore prêt, nous devons lui donner plus de capacités. Nous devons le rendre plus intelligent, plus conscient du monde qui l'entoure. L'idée est qu'il puisse récupérer des informations de différentes périodes et les utiliser pour produire des réponses précises et pertinentes. Pouvez-vous nous aider ? »

**Vous :** « Bien sûr, on dirait que nous devons *augmenter* les réponses de l'appareil avec des données, cela semble logique. »

**Ada :** « Parlons d'un concept que j'aimerais appeler RAG, ou génération augmentée par récupération. »

## Interagir avec Ada Lovelace

If you want to interact with Ada, run the [Characters](/app/README.md) app.

> [!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Ada Lovelace](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada-2.jpeg)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm install` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discutez avec Ada.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Si vous exécutez le projet localement sur votre machine, veuillez consulter le guide de démarrage rapide pour configurer un [token d'accès personnel GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) et remplacer la clé dans le code.

## Défis connus avec les modèles de langage à grande échelle (LLMs)

**Ada :** « Commençons par discuter de l'IA que nous utiliserons pour alimenter l'appareil. Nous nous appuierons sur des “modèles d'IA” associés à un système de récupération de données pour améliorer la qualité des réponses. »

Tout d'abord, vous devez traiter certaines difficultés avant d'entrer dans les détails de RAG. Ces modèles, entraînés sur de vastes ensembles de données textuelles, peuvent produire des réponses pertinentes et correctes. Mais, comme toute source de données, leurs sorties peuvent être inexactes, incomplètes ou trompeuses en raison de divers facteurs.

* **Sources obsolètes :** Les données utilisées pour entraîner le modèle peuvent être dépassées et ne plus être exactes.
* **Informations erronées ou inexactes :** Les sources utilisées pour entraîner le modèle peuvent contenir des informations incorrectes ou trompeuses, telles que des fake news ou des opinions biaisées.
* **Sources non autoritaires :** Le modèle peut ne pas être en mesure de distinguer entre les sources autoritaires et non autoritaires dans ses données d'entraînement, ce qui conduit à des informations peu fiables.

Cela rend difficile de déterminer si les informations générées par un LLM sont correctes ou non. C'est là qu'intervient RAG.

**Vous :** « Donc, je dois m'assurer que l'appareil peut fournir des informations exactes, même quand il n'est pas sûr de la réponse ? »

**Ada :** « Oui, c'est l'idée. En combinant les forces des méthodes basées sur la récupération et des modèles génératifs, nous obtenons un système d'IA meilleur. »

## Génération augmentée par récupération, concepts de base

**Ada :** « Ah oui, il est temps de discuter spécifiquement de RAG. Commençons par quelques bases : »

La génération augmentée par récupération (RAG) est une technique puissante qui combine les forces de deux approches différentes en traitement du langage naturel : les méthodes basées sur la récupération et les modèles génératifs. Cette approche hybride permet de générer des réponses à la fois contextuellement pertinentes et riches en contenu, aidant ainsi à atténuer certains des défis connus avec les LLMs.

Au cœur de RAG, il y a deux composants principaux : un **récupérateur** et un **générateur**.

* **Le récupérateur :** il est responsable de trouver des informations pertinentes à partir de sources de données externes qui peuvent être utilisées pour améliorer les réponses générées par l'IA, comme un moteur de recherche. Ces informations peuvent prendre la forme de texte, d'images ou de tout autre type de données pertinentes pour le contexte de la conversation, bien que le texte soit le type de données le plus couramment utilisé.

* **Le générateur :** il prend les informations récupérées et les utilise pour produire une réponse contextuellement pertinente et informative.

Voici un schéma illustrant le fonctionnement d'un système RAG :

![Schéma d'un système RAG](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/rag.png)

1. **Entrée utilisateur :** L'utilisateur pose une question.
2. **Récupérateur :** Le composant récupérateur recherche des informations pertinentes en utilisant une ou plusieurs bases de connaissances.
3. **Prompt augmenté :** Les informations récupérées sont combinées avec la question et le contexte utilisateur pour créer un prompt augmenté.
4. **Générateur :** Le LLM utilise le prompt augmenté pour produire une réponse.

Cette combinaison permet d'obtenir des réponses plus précises et pertinentes en utilisant des données que vous fournissez plutôt que de se fier uniquement aux données d'entraînement du modèle.

**Ada :** « Des questions ? »

**Vous :** « Donc le récupérateur trouve les informations et le générateur les utilise pour générer une réponse ? »

**Ada :** « Exactement, vous commencez à comprendre. »

## Intégration de sources de données externes

**Ada :** « Maintenant que nous avons couvert les bases de RAG, parlons de la manière dont vous pouvez intégrer des sources de données externes dans votre application d'IA. »

L'intégration de sources de données externes dans votre application d'IA peut être réalisée de différentes manières, en fonction du type de données que vous souhaitez utiliser et de la complexité du mécanisme de récupération. Voici quelques méthodes courantes :

* **APIs :** De nombreuses sources de données externes fournissent des APIs qui vous permettent d'accéder à leurs données de manière programmatique. Vous pouvez utiliser ces APIs pour récupérer des informations en temps réel et les utiliser pour améliorer les réponses générées par l'IA.

* **Bases de données :** Si vous disposez d'un grand volume de données que vous souhaitez utiliser pour la récupération, vous pouvez les stocker dans une base de données et les interroger selon les besoins. Cela peut être utile pour les données structurées devant être accessibles rapidement.

Une fois que vous avez choisi une méthode pour intégrer des sources de données externes, vous devrez peut-être également envisager comment prétraiter et formater les données afin qu'elles puissent être facilement utilisées par le modèle d'IA. Cela peut impliquer de nettoyer les données, de les convertir dans un format approprié (comme du texte brut ou Markdown) ou de les diviser en segments plus petits pour une récupération plus facile.

> [!NOTE]
> Lorsque vous intégrez des sources de données externes dans votre application d'IA, il est important de prendre en compte les implications en termes de confidentialité et de sécurité liées à l'accès et au stockage des données. Assurez-vous de disposer des autorisations et des protections nécessaires pour protéger les données et de respecter les réglementations en vigueur.

Si vous utilisez une base de données, vous devez également réfléchir à la manière dont vous souhaitez *rechercher vos données* pour récupérer les informations les plus pertinentes. Cela peut se faire via une recherche par mot-clé, une recherche en texte intégral ou via des techniques plus avancées comme la recherche sémantique ou vectorielle qui peuvent nécessiter un indexage spécifique. Nous aborderons les techniques de recherche avancées dans une leçon ultérieure.

**Vous :** « Pouvez-vous expliquer des termes comme API et Bases de données dans des termes plus proches des années 1860 ? »

**Ada :** « Bien sûr, une API est comme un messager qui transmet un message d'un endroit à un autre, et une base de données est comme une bibliothèque où vous stockez tous vos livres. »

**Vous :** « Ah, je vois, cela a du sens. »

## Augmenter le prompt

**Ada :** « Vous êtes toujours avec moi ? Bien, passons à l'étape suivante, essayons d'améliorer le prompt envoyé au modèle d'IA. »

**Ada :** « Une fois que vous avez mis en place un moyen d'extraire des informations de vos données, vous pouvez les ajouter au prompt du modèle d'IA. Mélangez simplement les informations récupérées avec le texte d'entrée en ajoutant un contexte ou des directives supplémentaires pour orienter la réponse de l'IA. »

Par exemple, si vous construisez une application pour répondre à des questions sur les voitures, vous pourriez avoir un prompt comme celui-ci :

```text

## Instructions
Answer questions about cars using only the sources below.
If there's not enough data in provided sources, say that you don't know.
Be brief and straight to the point.

## Sources
<insert the retrieved information here>

## Question
<insert the question here>
```

En fournissant au modèle d'IA un contexte supplémentaire et des informations, vous pouvez aider à orienter le processus de génération et à garantir que les réponses soient précises et pertinentes par rapport au sujet abordé.

> [!TIP]
> Notez cette partie du prompt : `If there's not enough data in provided sources, say that you don't know.`. Cela est important pour éviter que l'IA génère des informations incorrectes lorsqu'il n'y a pas suffisamment de données pour fournir une réponse fiable. Cette technique est appelée une *échappatoire* et constitue une bonne pratique pour garantir la qualité du contenu généré.

La RAG peut être considérée comme une forme avancée de *conception de prompt*.

### Exemple de code

**Ada :** La pratique rend parfait, alors appliquons ce que nous avons appris avec un exemple. Nous allons intégrer un système de récupération simple dans une application JavaScript en utilisant un fichier [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) contenant des données sur les voitures hybrides et un algorithme de recherche basique pour extraire des informations pertinentes en fonction d'une question posée par l'utilisateur.

```javascript
// This example demonstrates how to use the Retrieval Augmented Generation (RAG)
// to answer questions based on a hybrid car data set.
// The code below reads the CSV file, searches for matches to the user question,
// and then generates a response based on the information found.

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import process from "node:process";
import fs from "node:fs";
import { OpenAI } from "openai";

// Change the current working directory to the directory of the script
const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

// 1. Ask a question about hybrid cars
// -----------------------------------

const question = `what's the fastest prius`;

// 2. Retriever component: search the data for relevant information
// ----------------------------------------------------------------

// Load CSV data as an array of objects
const rows = fs.readFileSync("./hybrid.csv", "utf8").split("\n");
const columns = rows[0].split(",");

// Search the data using a very naive search
const words = question
  .toLowerCase()
  .replaceAll(/[.?!()'":,]/g, "")
  .split(" ")
  .filter((word) => word.length > 2);
const matches = rows.slice(1).filter((row) => words.some((word) => row.toLowerCase().includes(word)));

// Format as a markdown table, since language models understand markdown
const table =
  `| ${columns.join(" | ")} |\n` +
  `|${columns.map(() => "---").join(" | ")}|\n` +
  matches.map((row) => `| ${row.replaceAll(",", " | ")} |\n`).join("");

console.log(`Found ${matches.length} matches:`);
console.log(table);

// 3. Context augmentation: create a combined prompt with the search results
// --------------------------------------------------------------------------

const augmentedPrompt = `
## Instructions
Answer questions about a time period or characters from said time period using only the sources below.
If there's not enough data in provided sources, say that you don't know.
Be brief and straight to the point.

## Sources
${table}

## Question
${question}
`;

// 4. Generator component: use the search results to generate a response
// ---------------------------------------------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

const chunks = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: augmentedPrompt }],
  stream: true,
});

console.log(`Answer for "${question}":`);

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0].delta.content ?? "");
}
```

Vous pouvez trouver ce code dans le fichier [`example/rag-cars.js`](/lessons/05-rag/example/rag-cars.js) accompagné du fichier [`hybrid.csv`](/lessons/05-rag/example/hybrid.csv) contenant les données utilisées pour la récupération.

**Ada :** « Une fois que vous exécutez ce code, vous devriez voir les données trouvées dans le fichier CSV par le récupérateur, formatées sous forme d'une table Markdown, suivies de la réponse générée par l'IA à la question. Essayez de changer la question pour voir comment les données récupérées et la réponse évoluent. Vous pouvez également poser des questions sur des sujets non liés pour voir comment le modèle d'IA les gère. »

```text
Example of the output:

Found 1 matches:
| Person | Time Period | Description |
|---|---|---|
| Leonardo Da Vinci | 15th century | Italian polymath known for his art and inventions. |
| Isaac Newton | 17th century | English mathematician and physicist who formulated the laws of motion and universal gravitation. |
```

**Vous :** « C'est génial, je vois comment cela peut être utile lorsque l'on utilise l'appareil, ou plutôt comment cela l'a déjà été ou le sera : le voyage dans le temps est déroutant *soupir*. »

**Ada :** « Voilà, voilà, vous vous en sortez très bien. Passons à l'étape suivante. »

## Exercice - Aider Ada et Charles

Maintenant que vous avez appris sur RAG, vous êtes prêt à aider Ada et Charles avec leur appareil. Cependant, en examinant de plus près l'appareil, il semble familier.

**Vous :** « Scarabée Temporel, sais-tu ce que c'est ? »

**Scarabée Temporel :** « Bien sûr, c'est moi, ou ce sera moi. Il me manque quelques pièces cependant. En y repensant, il me manque beaucoup de pièces, je n'ai même pas encore de carapace. »

**Ada :** « Le Scarabée Temporel est un appareil qui vous permet de voyager dans le temps et l'espace, une fois que nous l'aurons fait fonctionner correctement. Comme je le disais, nous devons lui ajouter une nouvelle fonctionnalité, un module de génération augmentée par récupération (RAG). Cela nous aidera à récupérer des informations et le contexte nécessaire à partir de différentes époques au fur et à mesure de vos voyages. Nous voulons nous assurer de référencer toutes sortes de sources, Wikipédia est un bon point de départ. »

**Vous :** « Que voulez-vous que je fasse ? »

**Ada :** « Voici un exemple de code qui récupère des informations textuelles sur Tim Berners-Lee depuis Wikipédia. Tim sera très important un jour. »

```javascript
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee');
const data = await response.json();
const text = Object.values(data.query.pages)[0]?.extract;
```

**Vous :** « Je suppose que je ne suis pas le seul à être allé dans le futur ? »

**Ada :** « ... »

## Solution

[Solution](/lessons/05-rag/solution/rag-www.js)

## Vérification des connaissances

**Question** : Quel est le rôle du récupérateur dans un système RAG ?

A. Le récupérateur génère des réponses en fonction des données entrées.

B. Le récupérateur génère des informations pertinentes en se basant sur les données d'entraînement du modèle.

C. Le récupérateur trouve des informations pertinentes à partir de sources de données externes.

[Quiz solution](/lessons/05-rag/solution/solution-quiz.md)

## Ressources d'auto-apprentissage

* [Génération augmentée par récupération et Indexes](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
* **Exemples d'applications** :
  * [Chat IA sans serveur avec RAG](https://github.com/Azure-Samples/serverless-chat-langchainjs/)
  * [Demandez à Youtube : Une API de questions-réponses basée sur RAG pour Youtube](https://github.com/Azure-Samples/langchainjs-quickstart-demo)
* [Atelier complet : Créez votre propre ChatGPT avec RAG](https://moaw.dev/workshop/gh\:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md)

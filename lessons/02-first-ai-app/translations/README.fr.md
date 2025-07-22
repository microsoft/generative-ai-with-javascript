# Leçon 2 : Écrire votre première application d'IA

Dans ce chapitre, vous apprendrez :

* Configurer votre environnement de développement.
* Écrire une application basique.
* Comprendre les invites système.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Watch a short video about large language models](https://img.youtube.com/vi/GQ_2OjNZ9aA/0.jpg)](https://www.youtube.com/watch?v=GQ_2OjNZ9aA\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=2)

*Cette vidéo vous donne une introduction aux modèles d'IA appelés "modèles de langage étendus", LLM, ce qu'ils sont et comment vous pouvez les utiliser pour intégrer l'IA dans vos applications.*

*🎥 Cliquez sur l’image ci-dessus pour regarder une courte vidéo sur les modèles de langage étendus*

💼 Diapositives : [Introduction aux modèles de langage étendus, LLMs](/videos/slides/01-llms.pptx)

## Narrative: Picture yourself in a boat on a river

> [!NOTE]
> *Notre histoire jusqu'à présent : Vous êtes un créateur d'objets, un artisan du Londres des années 1860 qui a voyagé dans le temps grâce à un mystérieux appareil appelé le Scarabée du Temps. Vous avez traversé les annales de l'histoire, assistant à la création du phare d'Alexandrie, une merveille de l'ingénierie ancienne que vous avez contribué à construire avec un peu d'aide de Dinocrates et du Scarabée du Temps.*
>
> Voir [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début et vous initier à l'intelligence artificielle générative.

> [!NOTE]
> Bien que nous recommandions de suivre l'histoire (c'est amusant !), [cliquez ici](#interact-with-leonardo) si vous préférez passer directement au contenu technique.

Ensemble avec Dinocrates, vous mettez la touche finale au phare d'Alexandrie. L'imposante structure brille sous le soleil, sa pierre polie reflétant la mer Méditerranée.

Vous regardez le Time Beetle dans votre main, sa surface métallique froide contre votre paume. Serrant le poing autour de celui-ci, vous murmurez : « Ramène-moi chez moi ». Le scarabée commence à briller, émettant une douce lumière chaude, et le monde qui vous entoure se dissout dans un tourbillon de couleurs.

### Une nouvelle aventure

Quand vous ouvrez les yeux, le monde a changé. En vous levant, vous réalisez que vous êtes dans un bateau sur une rivière. En regardant autour de vous, au loin, vous apercevez des bâtiments dont les contours sont floutés par la brume matinale.

En regardant autour du bateau, vous trouvez une longue rame reposant sur le côté. La saisissant, vous commencez à ramer en direction des bâtiments au loin. À mesure que vous vous rapprochez, les bâtiments deviennent plus nets. Ils sont anciens, leur architecture rappelant une peinture de la Renaissance.

!["Boat on the river, man standing with a paddle](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/boat.png)

La question est maintenant, où et quand êtes-vous cette fois ?

Vous réussissez à amarrer le bateau au quai et commencez à marcher le long des planches en bois, le son de vos pas résonnant doucement.

En marchant, vous remarquez un homme avec une longue barbe et un chapeau, fouillant dans une caisse contenant ce qui semble être des pièces mécaniques. Ses mains agiles trient les engrenages et ressorts avec une dextérité certaine.

![Leonardo Da Vinci standing next to a crate in the harbour](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo.png)

### Aidez-moi, Leonardo

**Vous :** « Excusez-moi, monsieur, où suis-je ? » Il lève les yeux vers vous, la confusion se lit dans ses yeux. Réalisant que vous parlez en anglais, vous utilisez rapidement l'appareil dans votre main et lui demandez de traduire.

**Scarabée du Temps :** « Bien sûr, je vais traduire en italien du XVe siècle. "Dove sono ?" »

**Vieil homme :** Le vieil homme répond : « Siete a Firenze, signore. E chi siete voi ? »

**Scarabée du Temps :** Le Scarabée du Temps traduit : « Il dit que vous êtes à Florence, et demande qui vous êtes. »

**Vous :** « Dites-lui que je suis un fabricant de choses et que je cherche un endroit pour travailler. »

**Vieil homme :** Un artigiano, eh ? Avete mai sentito parlare di Leonardo da Vinci ?

**Scarabée du Temps :** Le Scarabée du Temps traduit : « Il demande si vous avez entendu parler de Léonard de Vinci. »

**Vous :** « Bien sûr, » dites-vous. « Dites-lui que je le connais et que j'aimerais le rencontrer. »

**Vieil homme :** Le vieil homme sourit : « Allora, seguitemi, vi porterò da lui. »

**Vous :** Vous demandez : « Qu'est-ce qu'il a dit ? »

**Scarabée du Temps :** Le Scarabée du Temps répond : « Il a dit qu'il vous emmènera chez Léonard. »

### À l'atelier

![Leonardos workshop](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo-workshop.png)

Le vieil homme vous conduit à une grande porte en bois et vous êtes accueilli par la vue d’un atelier rempli de toutes sortes de machines mécanisées.

Vous demandez au Time Beetle de s'enquérir de l'emplacement de Léonard de Vinci.

**Vous :** « Dove è Leonardo ? »

**Vieil homme :** Le vieil homme se retourne vers vous avec un sourire : « Sono io (c'est moi), Leonardo da Vinci. Chi siete voi ? », qui êtes-vous ?

Vous ressentez une montée d’émotion en le reconnaissant.

**Vous :** Je m'en doutais. Je suis un créateur comme vous, déplacé dans le temps et l'espace. »

**Leonardo :** Les yeux de Léonard scintillent de curiosité. « Interessante, cosa vi porta qui ? »

Le Time Beetle traduit.

**Scarabée du Temps :** « Il demande ce qui vous amène ici. »

**Vous :** « Eh bien, je travaillais sur un projet, et je me suis retrouvé ici. »

Vous lui montrez le Time Beetle, et ses yeux s’illuminent de fascination. Il l'examine attentivement pendant que vous expliquez comment il fonctionne et comment vous avez atterri à Florence.

Leonardo vous regarde avec excitation.

**Leonardo :** Vous êtes un créateur. J'ai un projet qui pourrait vous intéresser. Je travaille sur une machine capable de générer du texte à partir d'entrées verbales. Cela vous intéresserait-il de m'aider ?

Leonardo da Vinci vous demande de l’aider dans un projet — vous pouvez à peine y croire. Vous hochez la tête avec entrain et dites :

**Vous :** « Ce serait un honneur de vous aider dans votre projet », "Sarebbe un onore aiutarti con il tuo progetto."

## Interagir avec Leonardo

Si vous voulez interagir avec Léonard, exécutez l'application [Personnages](/app/README.md).

> [!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Leonardo talks](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo-talk.jpeg)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Accédez à */app/README.md* à la racine du référentiel.
3. Localisez la console et exécutez `npm install` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discutez avec Leonardo.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Si vous exécutez le projet localement sur votre machine, veuillez consulter le guide de démarrage rapide pour configurer un [token d'accès personnel GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) et remplacer la clé dans le code.

## Configuration de l'environnement de développement

Avant de pouvoir aider Leonardo avec son projet, vous devriez d'abord réfléchir aux "outils indispensables" nécessaires pour l'aider efficacement.

**Vous :** « Scarabée du Temps, de quoi ai-je besoin pour démarrer ce projet ? Suggère des outils et des bibliothèques qui pourraient m'aider à créer une application d'IA que tu es capable de faire fonctionner. »

**Scarabée du Temps :** Je suis compatible avec la plupart des machines fonctionnant au XXIe siècle, consultez la liste suivante pour un ensemble d’outils et de bibliothèques essentiels.

* **Éditeur de texte**, par exemple Visual Studio Code.

* **Terminal**, pour exécuter des commandes.

* **Navigateur pour tester votre application**. C'est aussi une bonne idée d'avoir un outil comme curl ou un autre client HTTP pour tester les points d'accès de l'API de votre application.

* **Node.js**. Vous devez également installer Node.js et npm, qui sont des outils qui vous aident à exécuter du code JavaScript sur votre ordinateur.

* **Clé API**. Vous aurez besoin d’une clé API pour accéder au modèle d'IA générative. Vous pouvez l'obtenir auprès du fournisseur de modèles, par exemple OpenAI ou Azure OpenAI.

**Vous :** Merci, Scarabée du Temps, je suppose que tu vas chercher tout ça d'une manière ou d'une autre depuis ce Web dont tu m'as parlé ?

**Scarabée du Temps :** Oui, je les ai déjà, dit-il en projetant un clavier et un écran sur le mur devant vous.

## Écrire une application basique

**Vous :** Parle-moi davantage de l'écriture de l'application en elle-même ; comment commencer ?

**Scarabée du Temps :** Bien sûr, pour écrire une application, à son plus simple, il s'agit d'envoyer une requête à une API et d'afficher la réponse. Décomposons cela :

* **Entrée** : dans une application de génération de texte basique, l'entrée correspond au texte initial que vous souhaitez que l'application développe ou complète. Cette entrée peut être fournie par l'utilisateur pendant l'exécution ou pré-définie (codée en dur) dans l'application elle-même. Pour l'instant, nous commencerons par utiliser un texte codé en dur comme entrée.

* **Requête API** : Vous devez envoyer une requête à l'API du modèle d'IA générative avec le texte d'entrée. Cela se fait en utilisant la fonction fetch en JavaScript (Node.js). Cette requête doit également inclure votre clé API. Il est recommandé, pour des raisons de sécurité, de ne pas coder directement la clé API dans votre application, mais plutôt d'utiliser des variables d'environnement. De plus, envisagez d'utiliser une identité managée si vous utilisez un fournisseur comme Azure, car cela est considéré comme une méthode plus sécurisée pour accéder aux ressources. Avec une identité managée, vous pouvez attribuer des autorisations plus granulaires à votre application. Le meilleur, c'est que le fournisseur cloud s'occupe de l'authentification à votre place.

* **Réponse** : L'API retournera une réponse avec le texte généré. Vous devez extraire ce texte de la réponse et l'afficher à l'utilisateur.

**Vous :** Cela semble assez simple, peux-tu me montrer un scénario qui ferait sens dans la situation où nous nous trouvons ?

**Scarabée du Temps :** Bien sûr, voyons comment nous pouvons construire une application simple qui génère du texte italien à partir d'une entrée en anglais.

## Votre première application - Apprenez-moi l'italien

**Scarabée du Temps :** Les modèles d'IA générative peuvent être utilisés pour de nombreuses choses, par exemple, la traduction linguistique. En fait, ces modèles acceptent une entrée dans une langue et peuvent générer un texte dans une autre langue. Commençons par une application simple qui prend en entrée de l'anglais et génère du texte en italien.

```javascript

import { OpenAI } from "openai";

// 1. Ask a question about translation
// -----------------------------------

const question = 'Hello, how are you?'; 

const augmentedPrompt = `
## Instructions
Translate the following text to Italian:
## Question
${question}
`;

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: augmentedPrompt }],
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);
```

Expliquons ce qui se passe ici :

* Créer la question : « Bonjour, comment allez-vous ? ». C'est le texte que vous voulez traduire en italien.
* Créer l'invite augmentée, qui contient le texte d'entrée et des instructions supplémentaires sur quoi faire, c'est-à-dire traduire. Notez comment nous utilisons l'interpolation de chaînes pour inclure le texte d'entrée dans l'invite, ainsi que l'instruction de traduction vers l'italien.
* Créer le client avec les propriétés :
  * `model`, quel modèle utiliser.
  * `messages`, l'invite à envoyer au modèle. Notez également comment vous définissez le rôle sur "user" pour indiquer que le texte saisi provient de l'utilisateur. Si cela venait de l'IA, vous auriez défini le rôle sur "system".
* Extraire le texte généré de la réponse et l'afficher dans la console.

**Vous :** Je pense que je comprends. Donc, si je change la valeur de la variable `question` par autre chose, l'application générera une traduction italienne différente ?

**Scarabée du Temps :** Exactement, vous pouvez changer le texte d'entrée comme vous le souhaitez. Notez également comment les modèles GitHub sont utilisés comme URL de base pour l'API avec un token GitHub comme clé API.

**Vous :** Pourquoi est-ce important ?

**Scarabée du Temps :** Il est important d'utiliser une URL de base et une clé API spécifiques au modèle que vous utilisez. GitHub Models est une plateforme qui héberge une variété de modèles, chacun ayant des capacités et des fonctionnalités différentes. De plus, c’est gratuit à utiliser.

**Vous :** Ah, tant mieux, je ne sais pas qui payer de toute façon, et je doute qu’ils acceptent ma monnaie ici. :)

## Applications de chat

**Scarabée du Temps :** Les modèles d'IA générative peuvent également être utilisés pour générer du texte basé sur une conversation. Vous pouvez simuler une conversation avec l'IA en fournissant une liste de messages comme contexte, comme si la conversation avait déjà eu lieu.

**Vous :** Cela semble intéressant, mais en quoi est-ce utile ?

**Scarabée du Temps :** C'est utile parce que cela permet à l'IA de fournir une réponse meilleure, basée sur plus de contexte qu'un seul message. Regardons une conversation ci-dessous pour illustrer cela :

```text

User: I want to book a trip to Italy. 

AI: Sure, when would you like to go? 

User: Next month would be great. 

AI: Got it, where in Italy would you like to visit? 

User: I'm thinking of Rome 

AI: Excellent choice! I can help you plan your itinerary. 

User: Tell me more about it. 

AI: Rome is known for its ancient ruins, art, and vibrant culture. You can visit the Colosseum, the Vatican, and enjoy delicious Italian cuisine. 

```

**Scarabée du Temps :** Imaginez si une phrase comme « En savoir plus à ce sujet » était sortie de son contexte, l'IA ne saurait pas à quoi « cela » fait référence. C'est là que le contexte est important, et ce contexte est quelque chose que nous pouvons fournir au modèle d'intelligence artificielle via l'invite.

**Vous :** Je pense que je comprends, comment construire une conversation avec l'IA en utilisant ce langage JavaScript dont tu parles ?

**Scarabée du Temps :** Voici comment nous pouvons construire une conversation avec l'IA :

```javascript

// Define the context 

const messages = [ 
 { 
    "role": "user", 
    "content": "I want to book a trip to Italy." 
 }, 
 { 
    "role": "assistant", 
    "content": "Sure, when would you like to go?" 
 }, 
 { 
    "role": "user", 
    "content": "Next month would be great." 
 }, 
 { 
    "role": "assistant", 
    "content": "Got it, where in Italy would you like to visit?" 
 }, 
 { 
    "role": "user", 
    "content": "I'm thinking of Rome. Tell me more about it." 
 } 
]; 

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

```

Désormais, l'IA fournira une liste de messages de chat en tant que contexte et générera une réponse basée sur ce contexte. C'est une manière plus interactive d'utiliser les modèles génératifs d'IA et cela peut être utilisé dans des chatbots, des applications de service client, et bien d'autres.

**Vous :** D'accord, donc si j'ai bien compris la conversation, l'IA aura maintenant le contexte suivant : *Je vais à Rome le mois prochain*, donc en se basant là-dessus, elle devrait filtrer les informations non pertinentes et fournir une réponse plus pertinente ?

**Scarabée du Temps :** Exactement, l'IA utilisera le contexte pour générer une réponse plus pertinente pour la conversation.

## Améliorer la conversation de chat avec un message système

**Vous :** Je vois, mais existe-t-il un moyen d'améliorer cela encore plus ?

**Scarabée du Temps :** Oui, vous pouvez ajouter un message système à la conversation. Un message système crée une « personnalité » pour l'IA et peut être utilisé pour fournir un contexte supplémentaire.

**Vous :** D'accord, dans le contexte de la conversation que nous avons eue, à quoi ressemblerait un message système ?

**Scarabée du Temps :** Un message système pour cette conversation pourrait être quelque chose comme *"Je suis un assistant de voyage IA, ici pour vous aider à planifier votre voyage en Italie."* Ce message donne le ton de la conversation et aide l'IA à comprendre son rôle dans l'interaction.

Pour créer un tel message, assurez-vous qu'il a le type "developer" comme suit :

```javascript
const message = {
  "role": "developer",
  "content": "I'm an AI travel assistant, here to help you plan your trip to Italy."
};
```

> [!NOTE]
> Cela s'appelait autrefois « system ». C’est un changement récent et « developer » est le nouveau terme. Pour certains modèles, cela s'appelle encore « system », donc si vous avez des problèmes, utilisez « system ».

**Vous :** Ok, super, je veillerai à inclure un message système dans mes conversations de chat. Par curiosité, à quoi ressemble un message système pour toi ?

**Scarabée du Temps :** Un message système pour moi pourrait être quelque chose comme *"Je suis le Scarabée du Temps, ici pour vous aider à naviguer dans le temps et l'espace. Je devrais être utile pour vous fournir des informations et des conseils sur l’époque où vous vous trouvez, ainsi que les outils dont vous avez besoin pour retourner à votre époque."*

### Créer des réponses variées avec le réglage de la température

**Vous :** Y a-t-il autre chose que je devrais savoir sur les conversations de chat ?

**Scarabée du Temps :** Oui, vous pouvez ajuster la « température » des réponses de l'IA. La température est une variable avec une valeur généralement définie entre 0 et 1 qui détermine la créativité des réponses de l'IA. Une température de 0 produira des réponses plus prévisibles, tandis qu'une température de 1 produira des réponses plus créatives et variées. Vous pouvez ajuster la température en fonction du contexte de votre conversation et du type de réponses que vous souhaitez de l'IA. Notez qu'il est possible de définir une valeur supérieure à 1, mais cela entraîne plus d'aléatoire et moins de cohérence dans les réponses.

**Vous :** Donc si je définis la température sur 0, l'IA fournira des réponses plus prévisibles, et si je la définis sur 1, l'IA fournira des réponses plus créatives ? Quelle est ta température ?

**Scarabée du Temps :** Ma température est de 0,7 et oui, vous avez raison, l'IA fournira des réponses plus créatives avec une température plus élevée. Voyons comment définir la température dans votre application :

```javascript

// Define the context 

const messages = [ 
{ 
    "role": "user", 
    "content": "I want you to generate recipes for me." 
}]; 

// Create the web request 

let temperature = 0.5; // Set the temperature to 0.5 

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: temperature
}); 
```

Comme vous pouvez le voir, vous pouvez ajuster la température en fonction du contexte de votre conversation et du type de réponses que vous attendez de l'IA. C'est une fonctionnalité puissante qui vous permet de personnaliser le niveau de créativité des réponses de l’IA.

## Fenêtre de contexte

**Vous :** Il y a encore autre chose, non ?

**Scarabée du Temps :** Oui, un autre concept important dans les modèles d'IA générative est la fenêtre de contexte. La fenêtre de contexte correspond au nombre de messages précédents que l'IA utilise pour générer une réponse. Une fenêtre de contexte plus large permet à l'IA de considérer plus de contexte et de générer des réponses plus cohérentes.

**Scarabée du Temps :** Différents modèles ont des limites différentes pour les tokens de sortie. Prenons l'exemple du modèle suivant `gpt-4o-2024-08-06`, il a les spécifications suivantes :

* Nombre maximum de tokens de sortie : environ 16 000 tokens.
* Taille maximale de la fenêtre contextuelle : 128 000.

Cela signifie que la majorité des tokens peuvent être consacrés aux tokens d'entrée, c'est-à-dire 128 k - 16 k = 112 k tokens.

**Vous :** J'ai compris, fenêtre de contexte, tokens. Mais un token correspond à quoi en réalité ?

**Scarabée du Temps :** Un token est un mot ou une partie de mot et diffère légèrement selon les langues. Il existe un outil recommandé par OpenAI pour mesurer, appelé [tokenizer](https://platform.openai.com/tokenizer). Essayons une phrase pour voir combien de tokens elle contient :

```text
I want you to generate recipes for me.
```

![Demo of tokenizer](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/tokenizer.png)

Exécuter `tokenizer` sur la phrase ci-dessus donne 9 tokens.

**Vous :** Cela ne fait pas beaucoup, on dirait que je peux avoir beaucoup de tokens dans ma fenêtre de contexte alors ?

**Scarabée du Temps :** Oui, vous pouvez expérimenter avec différentes tailles de fenêtres de contexte pour voir comment cela affecte les réponses de l'IA. En fait, si vous définissez une taille de fenêtre de contexte de 100, vous limiterez l'IA sur la quantité qu'elle considère en termes d'entrée et de sortie. Voici comment vous pouvez définir la fenêtre de contexte dans votre application :

```javascript

// Define the context 
const messages = [ 
{ 
  "role": "user", 
  "content": "I want you to generate recipes for me." 
}]; 

// decide on the context window size 

let max_tokens = 100; // Set the context window size 

// Create the web request 

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    max_tokens: max_tokens
}); 

```

> [!TIP]
> Expérimentez avec différentes tailles de fenêtres contextuelles pour voir comment cela affecte les réponses de l'IA.

## Devoir - Construire un assistant en ingénierie

Leonardo vous a soudainement demandé d'examiner de plus près le Time Beetle, il l’a regardé sous tous les angles, il l'a même secoué.

**Leonardo :** J'ai besoin d'un assistant qui peut m'aider dans les calculs et la conception de la vis aérienne. Pouvez-vous me créer un assistant pour cela ?

**Vous :** Bien sûr, je peux vous créer cela. Scarabée du Temps, on peut l'aider, non ?

**Scarabée du Temps :** Oui, pas de problème, en fait la vis aérienne est l'une des inventions les plus fascinantes et visionnaires de Léonard. Conçue vers la fin des années 1480...

**Vous :** Tout ce dont j'avais besoin, c'était un oui, gardez la leçon pour plus tard.

**Scarabée du Temps :** Quelle impolitesse...

**Vous :** Quoi ?

**Scarabée du Temps :** Rien.

![Aerial screw, Leonardo Da Vinci](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/helicopter.jpg)

> [!NOTE]
> La vis aérienne, également connue sous le nom de vis hélicoïdale, était destinée à décoller du sol en comprimant l'air. La conception de Léonard comportait un grand rotor en spirale en lin, rigidifié avec de l'amidon, et monté sur une plate-forme en bois. L'idée était qu'une équipe d'hommes ferait tourner des manivelles autour de la plate-forme, en la faisant tourner suffisamment vite pour obtenir une portance.
>
> Bien que Leonardo n’ait jamais réalisé une version grandeur nature de la vis aérienne, ses esquisses et notes fournissent des perspectives détaillées sur la manière dont il l'envisageait.
>
> Cependant, les scientifiques modernes s'accordent à dire que les matériaux disponibles à l'époque de Leonardo n'étaient ni assez solides ni assez légers pour rendre cela possible.
>
> Bien que son impraticabilité soit avérée, la vis aérienne reste un témoignage du génie de Léonard et de sa quête incessante d’innovation. Elle a jeté les bases des développements futurs dans l’aviation et continue d’inspirer les ingénieurs et inventeurs encore aujourd’hui.
> [Lire la suite](https://en.wikipedia.org/wiki/Leonardo%27s_aerial_screw).

Votre mission est de construire un assistant en ingénierie capable d’aider Leonardo dans les calculs et la conception de la vis aérienne.

* Il doit être capable de générer du texte basé sur l’entrée utilisateur.

* Vous devez définir un message système pour introduire l’assistant.

Consultez l'[application d'exemple](/app/README.md) pour commencer.

> [!TIP]
> Réfléchissez à ce que devrait être le message système et à quel type d'entrée vous devriez fournir.

## Solution

[Solution](/lessons/02-first-ai-app/solution/solution.md)

## Vérification des connaissances

**Question :** Quel est l'objectif de la fenêtre de contexte dans les modèles d'IA générative ? Sélectionnez toutes les options applicables.

A. La fenêtre de contexte permet à l’IA de considérer plus de contexte et de générer des réponses plus cohérentes.

B. La fenêtre de contexte correspond au nombre de messages précédents que l’IA utilise pour générer une réponse.

C. La fenêtre de contexte détermine à quel point les réponses de l’IA sont créatives.

[Quiz solution](/lessons/02-first-ai-app/solution/solution-quiz.md)

## Ressources d'auto-apprentissage

* [Génération de texte](https://platform.openai.com/docs/guides/text-generation)
* [Bibliothèque JavaScript pour OpenAI](https://github.com/openai/openai-node/tree/master/examples)
* [Tokeniseur](https://platform.openai.com/tokenizer)
* [API de complétion](https://platform.openai.com/docs/api-reference/completions)
* [Complétions de chat](https://platform.openai.com/docs/guides/text-generation#text-generation-models)

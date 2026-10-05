# Leçon 4 : Sorties structurées

Dans ce chapitre, vous apprendrez :

* Ce que sont les *sorties structurées* et comment les utiliser efficacement.
* Comment extraire des informations à partir des instructions (prompts) et les intégrer dans la sortie.
* Générer différents types de formats de sortie, tels que JSON, pour faciliter leur utilisation par des services.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

Cela vaut la peine de revoir la vidéo sur l'ingénierie des prompts, car elle pose les bases de ce que vous allez apprendre dans ce chapitre.


*Cette vidéo propose une introduction à l'amélioration de vos compétences en matière de "prompt", en vous apprenant à donner des instructions plus claires et plus efficaces à l'IA pour obtenir de meilleurs résultats.*

*🎥 Cliquez sur l'image ci-dessus pour regarder une courte vidéo sur l'ingénierie des prompts*


## Récit - De Charybde en Scylla

> [!NOTE]
> *Notre histoire jusqu'à présent : Vous, un ingénieur formé mécaniquement depuis 1860, êtes en voyage dans le temps avec Léonard de Vinci. Vous avez échappé aux soldats romains — ou plutôt, vous êtes en train de leur échapper — et vous cherchez désespérément un moyen de poser en toute sécurité la vis aérienne.*
>
> Reportez-vous à [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début.

> [!NOTE]
> Bien que nous vous recommandions de suivre l'histoire (elle est amusante !), [cliquez ici](#interact-with-montezuma) si vous préférez passer directement au contenu technique.

Le vent souffle violemment autour de vous alors que vous et Léonard de Vinci montez dans sa vis aérienne, dont le cadre en bois grince sous la pression.

**Vous :** "Léonard, nous devons trouver un moyen de nous en sortir !" criez-vous par-dessus le rugissement du vent.

**Léonard :** "J'ai foi en mon invention, mais il nous faut plus que de la foi pour échapper à ces soldats."

**Vous :** "C'est peut-être notre seule chance", dites-vous en pressant les mécanismes complexes du scarabée. Une lumière brillante vous enveloppe tous les deux, et le monde autour de vous se déforme et change.

### L'Empire aztèque

La lumière brillante émise par le Scarabée temporel s'estompe, et vous vous retrouvez au pied d'une immense pyramide de pierre. En regardant autour de vous, vous réalisez que vous vous trouvez au cœur de l'Empire aztèque.

La vis aérienne repose maladroitement sur une grande pierre finement sculptée, marquée de gravures qui ressemblent à un calendrier.

![Calendrier aztèque, Wikipedia](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/aztec.png)

*Calendrier aztèque, Wikipedia*

Léonard de Vinci s'avance et ses yeux s'ouvrent en grand de fascination.

**Léonard :** "Incroyable", murmure-t-il en passant ses doigts sur les sculptures. "Mais j'espère que cela n'était pas d'importance sacrée."

Avant que vous puissiez réagir, un groupe de soldats aztèques s'approche.

**Chef des soldats :** "Qui êtes-vous et qu'avez-vous fait ?" demande-t-il en nahuatl.

Vous prenez une grande inspiration pour calmer vos nerfs.

**Vous :** "Nous sommes des voyageurs provenant d'une contrée lointaine", commencez-vous, espérant que vos connaissances en langues anciennes vont vous être utiles. "Ceci est une machine volante, un don des dieux qui nous a permis de vous rejoindre."

Les yeux du guerrier s'écarquillent de surprise, mais il reste prudent.

**Chef des soldats :** "Vous allez venir avec nous rencontrer le souverain Montezuma. Il décidera de votre sort."

Une fois au sommet de la pyramide, vous êtes conduit dans une grande chambre où Montezuma, souverain de l'Empire aztèque, est assis sur un trône orné d'or et de plumes.

**Montezuma :** "Vous prétendez être des voyageurs venus d'un pays lointain", déclare Montezuma, d'une voix calme mais autoritaire. "Et vous avez endommagé notre calendrier sacré. Comment comptez-vous réparer cela ?"

## Jouons à un jeu

**Léonard :** "Nous venons en paix", dit-il d'une voix posée. "Nous cherchons à partager et à accroître nos connaissances. Permettez-nous de vous montrer la puissance de notre machine et de partager ce que nous savons avec vous."

**Montezuma :** "D'accord. Je vous propose une partie de [Patolli](#patolli). Si je gagne deux manches sur trois, vous me donnerez votre machine et m'expliquerez son fonctionnement. Si vous gagnez, vous serez libres de partir."

![Partie de Patolli](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/game.png)

Le jeu commence, et la pièce plonge dans le silence, interrompu seulement par le son des haricots roulés et des pièces déplacées sur le plateau.

Montezuma remporte la première manche, sa compétence et son expérience évidentes. Léonard étudie attentivement le plateau, son esprit analysant les stratégies et probabilités.

La deuxième manche est très serrée, mais Léonard réussit à l'emporter, égalisant ainsi le score.

**Léonard :** "Encore une manche," souffle-t-il, "George (Scarabée temporel), il faut qu’on gagne celle-ci. Trouve-moi les bons coups."

**Scarabée temporel :** Très bien, je calcule... Voilà.

Avec un dernier coup décisif, Léonard gagne la partie. La pièce explose en acclamations, visiblement impressionnée par son intelligence et son calme. Montezuma, bien que déçu, incline la tête en guise de respect.

**Montezuma :** "Vous avez gagné loyalement," dit Montezuma dans une voix qui laisse transparaître une pointe d'admiration. "Vous êtes libres de partir, et vous pouvez conserver votre machine. Mais sachez que vous êtes toujours les bienvenus ici, si vous souhaitez revenir."

**Scarabée temporel :** Je ne dirai rien si toi non plus, Léonard ;)

### Patolli

> [!NOTE]
> Le Patolli est l'un des jeux les plus anciens connus des Amériques, joué par les cultures mésoaméricaines précolombiennes comme les Aztèques. C'est un mélange de stratégie et de hasard.
>
> **Comment le Patolli est joué** :
>
> * **Plateau et pièces** : Joué sur un plateau en forme de X avec un bloc central et quatre branches. Les joueurs utilisent cinq haricots noirs comme dés, marqués d'un côté.
> * **Installation** : Chaque joueur choisit six marqueurs (perles) de sa couleur et les place en dehors du plateau, ainsi que des perles de points pour le score.
> * **Déroulement du jeu** : Lancez les haricots pour déplacer les marqueurs autour du plateau et revenir au point de départ. Un lancer de cinq permet de déplacer dix cases. Atterrir sur certaines cases peut donner des tours supplémentaires, faire perdre des points ou capturer des marqueurs.
>
> **Implication aztèque** : Largement pratiqué par les nobles et les gens du peuple, c'était un jeu favori à la cour de Montezuma. Au-delà du plaisir, il impliquait des paris à forts enjeux comme des couvertures, des pierres précieuses, voire la liberté.

![Plateau de Patolli](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/patolli.png)

*Patolli - Wikipedia*

## Interagir avec Montezuma

Si vous voulez interagir avec Montezuma, exécutez l'application [Characters](/app/README.md).

> [!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Montezuma](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/montezuma.jpeg)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm ci` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discutez avec Montezuma.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Configurez `AI_ENDPOINT`, `AI_API_KEY` et `AI_MODEL` dans le fichier `.env` à la racine du dépôt, en local comme dans Codespaces. Consultez le [guide de configuration](/docs/setup/README.md#configure-environment-variables).

## Sorties structurées

**Scarabée temporel :** Veux-tu savoir comment j'ai battu Montezuma ?

**Vous :** Chut, pas si fort, nous sommes encore dans l'Empire aztèque.

**Scarabée temporel :** Oh pardon, oui, c'était grâce aux sorties structurées. Tu as demandé les bons mouvements, et je te les ai donnés d'une manière structurée.

Les sorties structurées utilisent des formats de données spécifiques pour organiser clairement les informations. Des formats courants comme JSON, XML et CSV permettent aux services de traiter et d'utiliser plus facilement les données.

Les modèles d'intelligence artificielle générative peuvent générer des données dans divers formats. Cependant, des sorties sous forme de texte non structuré peuvent rendre l'extraction d'informations difficile et compliquer leur transfert vers d'autres services. Les sorties structurées peuvent remédier à cela.

**Vous :** Eh bien, quelle ingéniosité ;)

**Scarabée temporel :** Je fais de mon mieux. :-)

Un autre avantage, même pour les lecteurs humains, est que les données structurées sont plus faciles à lire et à comprendre lorsqu'elles suivent un format familier.

Examinons quelques exemples d'entrées et voyons comment demander des formats de sortie spécifiques peut aider à extraire des informations qui deviennent ainsi plus compréhensibles et accessibles.

**Vous :** D'accord, ce n'est pas comme si nous avions d'autres projets, allons-y.

## Modeler les sorties

**Scarabée temporel :** Commençons par un exemple simple. Imagine que tu es Léonard de Vinci et que tu essaies de trouver des idées d'inventions avec la technologie du XVe siècle. Tu veux savoir quels sont les ressources nécessaires et combien d'efforts cela demanderait pour construire chaque invention. Voici comment poser la question :

**Léonard :** Oh, j'aime ce jeu, tout le monde fait comme si vous étiez moi !

> Prompt: Generate ideas for inventions I can build using 15th-century technology. For each invention, specify the required resources and estimate the effort needed to build it.

```text
Result:
Sure! Here are some detailed ideas for inventions you can build using 15th-century technology, along with the resources needed and the effort involved:

### 1. Water-Powered Mill
**Resources Needed**:
 - Water source (river or stream)
 - Wood for the water wheel and mill structure
 - Stone for grinding
 - Metal for gears and axles

 **Effort**:
 - **High**: Requires significant construction and engineering skills to build the water wheel, mill structure, and grinding mechanism. You'll also need to ensure a consistent water flow.

 ### 2. Astrolabe
 **Resources Needed**:
 - Brass or other metals for the plates and components
 - Engraving tools
 - Mathematical knowledge for accurate measurements

 **Effort**:
 - **Medium**: Involves precise metalworking and engraving. Requires knowledge of > astronomy and mathematics to ensure accuracy.
 
 ### 3. Printing Press
 **Resources Needed**:
 - Wood for the press structure
 - Metal for movable type
 - Ink and paper

 **Effort**:
 - **High**: Building the press and creating movable type requires advanced carpentry > and metalworking skills. Setting up the type and printing also involves meticulous > work.

This is an OK looking response, every idea is structured in the same way, and it's easy to understand. What if you wanted it some other way though? For that, you can instruct how you want it in the text itself or even present an output template. Let's show each technique.
```

**Léonard :** Bien sûr, je vais totalement emprunter l'idée du moulin à eau ! Je le vois déjà, un moulin au bord de la rivière, broyant le grain en farine, c'est parfait ! Ce dispositif est génial. Quoi d'autre, mon petit gadget ? Cela me rendra moins dépendant des gens comme Sforza.

**Scarabée temporel :** Bien sûr, si un jour tu pouvais réellement terminer un projet, Léonard. :-)

**Léonard :** Hé, je travaille dessus !

**Scarabée temporel :** Voyons comment tu peux donner des instructions au modèle pour présenter la sortie de manière plus structurée.

### Structurer vos prompts pour une meilleure sortie

**Scarabée temporel :** Vous pouvez améliorer votre prompt en indiquant au modèle comment vous souhaitez que la sortie soit structurée. Par exemple, vous pouvez demander un format de tableau avec les colonnes dont vous avez besoin. Voici comment vous pouvez modifier le prompt :

> Prompt: Generate ideas for inventions that can be built using 15th-century technology. For each invention, provide the required resources and estimate the effort needed to construct it. Present the information in a table with the following columns: Title, Description, Resources Needed, and Effort.

```text
Result: 

| Title                | Description                                              | Resources Needed                                      | Effort |
|----------------------|----------------------------------------------------------|-------------------------------------------------------|--------|
| Water-Powered Mill   | A mill powered by a water wheel to grind grain into flour.| Water source, wood, stone, metal for gears and axles  | High   |
| Astrolabe            | An astronomical instrument for solving problems related to time and star positions. | Brass or other metals, engraving tools, mathematical knowledge | Medium |
| Printing Press       | A press for reproducing texts more efficiently than hand-copying. | Wood, metal for movable type, ink, paper | High |

This time you end up with a table that is easier to read and understand.
```

**Léonard :** J’aime ça, cela me fera économiser beaucoup de temps.

**Vous :** Moi aussi.

### Présentation d’un modèle de sortie

Une autre manière d'obtenir une sortie structurée est de présenter un modèle de sortie. Il peut être sous n'importe quel format, des colonnes au JSON, XML, CSV ou markdown.

> Prompt: Generate ideas for inventions that can be built using 15th-century technology. For each invention, specify the required resources and estimate the effort needed to construct it. Present the information using the following format (use markdown as output format):
>
> Title: \[Invention Name]
> Description: \[Brief Explanation]
> Resources Needed: \[List of Required Materials]
> Effort: \[Estimated Difficulty or Labor Required]
> Generate ideas for inventions I can build given 15th century technology, please let me know for each what resources I need and how much effort there would be to build each invention, for each idea present it with the following output template:

```text

**Result**:

 Sure! Here are some ideas for inventions you can build using 15th-century technology, presented in the requested format:

 ### 1. Water-Powered Mill
 **Title**: Water-Powered Mill

 **Description**: A mill powered by a water wheel to grind grain into flour.

 **Resources Needed**: Water source, wood, stone, metal for gears and axles.
 
 **Effort**: High - Requires significant construction and engineering skills to build the water wheel, mill structure, and grinding mechanism. Ensuring a consistent water flow is also necessary.

 ### 2. Astrolabe
 **Title**: Astrolabe

 **Description**: An astronomical instrument for solving problems related to time and star positions.
 
 **Resources Needed**: Brass or other metals, engraving tools, mathematical knowledge.
 
 **Effort**: Medium - Involves precise metalworking and engraving. Requires knowledge of astronomy and mathematics to ensure accuracy.
 
 ### 3. Printing Press
 **Title**: Printing Press
 
 **Description**: A press for reproducing texts more efficiently than hand-copying.
 
 **Resources Needed**: Wood, metal for movable type, ink, paper.
 
 **Effort**: High - Building the press and creating movable type requires advanced carpentry and metalworking skills. Setting up the type and printing also involves meticulous work.
 
 ### 4. Mechanical Clock
 **Title**: Mechanical Clock

 **Description**: A clock using gears and weights to keep time.

 **Resources Needed**: Metal for gears, springs, weights, wood for casing, precise tools.

 **Effort**: Very High - Requires intricate metalworking and a deep understanding of mechanics. Building a reliable clock involves precise assembly and calibration.
```

**Léonard :** C’est super, mais qui est Jason ?

**Scarabée temporel :** JSON, Léonard, JSON. C’est un format structuré facile à lire par des services ou des applications.

**Léonard :** C’est ce que j’ai dit, Jason.

**Scarabée temporel :** *Soupir*.

Comme vous pouvez le voir, la sortie est structurée selon les spécifications du modèle de sortie. Cela la rend plus facile à lire et à comprendre et crée également une sortie répétable qui peut être facilement consommée par d'autres services ou applications.

Bien sûr, un service profite encore plus d’une sortie structurée comme le JSON, XML ou CSV. Voyons comment vous pouvez en faire la demande.

### Utilisation de sorties structurées avec des formats tels que JSON, XML ou CSV

**Scarabée temporel :** Jusqu’ici, vous avez vu comment vous pouvez contrôler la structure de la sortie en donnant des instructions au modèle dans le prompt. Vous avez même proposé un modèle de sortie. Prenons cette idée un peu plus loin pour voir comment elle peut s’appliquer à des formats de sortie encore plus structurés, comme JSON ou autres.

Modifiez le prompt en conséquence pour demander une sortie JSON :

> **Prompt** : Génère des idées d’inventions que je peux construire avec la technologie du XVe siècle. Pour chaque invention, spécifiez les ressources nécessaires et évaluez les efforts à fournir pour la construire. Présentez chaque idée au format JSON, y compris les propriétés suivantes : titre, description, ressources nécessaires, et effort.
>
> Exemple de la sortie JSON :
> \[
> &#x20; {
> &#x20;   "title": "",
> &#x20;   "description": "",
> &#x20;   "resources\_needed": "",
> &#x20;   "effort": ""
> &#x20; }
> ]

> Response:
Sure! Here are some ideas for inventions you can build using 15th-century technology, presented in JSON format:

```json
[
  {
    "title": "Water-Powered Mill",
    "description": "A mill powered by a water wheel to grind grain into flour.",
    "resources_needed": "Water source, wood, stone, metal for gears and axles",
    "effort": "High - Requires significant construction and engineering skills to build the water wheel, mill structure, and grinding mechanism. Ensuring a consistent water flow is also necessary."
  },
  {
    "title": "Astrolabe",
    "description": "An astronomical instrument for solving problems related to time and star positions.",
    "resources_needed": "Brass or other metals, engraving tools, mathematical knowledge",
    "effort": "Medium - Involves precise metalworking and engraving. Requires knowledge of astronomy and mathematics to ensure accuracy."
  },
  {
    "title": "Printing Press",
    "description": "A press for reproducing texts more efficiently than hand-copying.",
    "resources_needed": "Wood, metal for movable type, ink, paper",
    "effort": "High - Building the press and creating movable type requires advanced carpentry and metalworking skills. Setting up the type and printing also involves meticulous work."
  },
  {
    "title": "Mechanical Clock",
    "description": "A clock using gears and weights to keep time.",
    "resources_needed": "Metal for gears, springs, weights, wood for casing, precise tools",
    "effort": "Very High - Requires intricate metalworking and a deep understanding of mechanics. Building a reliable clock involves precise assembly and calibration."
  },
  {
    "title": "Windmill",
    "description": "A mill powered by wind to grind grain or pump water.",
    "resources_needed": "Wood, metal for gears and axles, stone for the base",
    "effort": "High - Constructing a windmill involves significant carpentry and engineering skills. You'll need to design and build the blades, tower, and internal mechanisms."
  },
  {
    "title": "Armillary Sphere",
    "description": "A model of the celestial sphere with rings representing the great circles.",
    "resources_needed": "Metal for rings and stand, tools for bending and joining metal, astronomy knowledge",
    "effort": "Medium - Involves precise metalworking and assembly. Requires an understanding of celestial movements to accurately position the rings."
  },
  {
    "title": "Siege Engine (Trebuchet or Catapult)",
    "description": "A trebuchet or catapult for demonstrating principles of mechanics and physics.",
    "resources_needed": "Wood, rope, metal for axles and counterweights",
    "effort": "Medium to High - Building a functional siege engine requires carpentry and an understanding of mechanics. Testing and adjusting for optimal performance can be time-consuming."
  },
  {
    "title": "Distillation Apparatus",
    "description": "A setup for purifying liquids through distillation.",
    "resources_needed": "Glass or metal for flask and condenser, heat source, tubing",
    "effort": "Medium - Requires basic glassblowing or metalworking skills. Setting up and maintaining the correct temperatures for distillation involves careful monitoring."
  },
  {
    "title": "Compass",
    "description": "A magnetic compass for navigation.",
    "resources_needed": "Magnetized needle, non-magnetic housing, water or oil for damping",
    "effort": "Low - Constructing a compass is relatively simple. The main challenge is magnetizing the needle and ensuring it is balanced and free to rotate."
  },
  {
    "title": "Aqueduct",
    "description": "A system to transport water using gravity.",
    "resources_needed": "Stone or brick, mortar, tools for cutting and shaping stone",
    "effort": "Very High - Building an aqueduct involves extensive construction work and engineering. Ensuring a consistent gradient for water flow requires precise planning and execution."
  }
]
```

**Scarabée temporel :** Ce type de sortie structurée peut être transmis à un autre service ou une autre application qui peut lire les données JSON.

## Extraction de données des prompts

**Scarabée temporel :** Imaginez que vous construisez un chatbot qui aide les utilisateurs à trouver des informations pour réserver des voyages. Vous voulez extraire les détails clés à partir des instructions des utilisateurs pour fournir des réponses pertinentes. Prenons la description suivante :

> Indiquez où vous souhaitez aller, quand vous voulez voyager, et votre budget.

À quoi ressemble un prompt qui extrait ces informations ?

> Prompt: Extract the following information from a user's prompt: location, when, budget, currency, respond with the extracted data in JSON format.
>
> Prompt utilisateur : Je veux aller en Grèce en juin, mon budget est de 800 euros.

> Response:

```json
{
  "location": "Greece",
  "when": "June",
  "budget": 800,
  "currency": "euro"
}
```

**Léonard :** George (Scarabée temporel) ne s’arrête jamais de parler, n’est-ce pas ?

**Vous :** Voyons si je peux trouver le bouton off.

**Scarabée temporel :** Essayons cela avec un prompt similaire, en variant légèrement l'entrée de l'utilisateur pour vérifier que le modèle fonctionne correctement.

> Prompt: Extract the following information from a users prompt: location, when, budget, currency. Respond with the extracted data in JSON format. User prompt: Going to US, max 1200 dollars, January maybe.
>
> Response:

```json
{
  "location": "US",
  "when": "January",
  "budget": 1200,
  "currency": "dollars"
}
```

Ce que vous pouvez faire en tant que développeur, c'est créer un modèle :

```text
Extract the following information from a user's prompt: location, when, budget, currency, respond with the extracted data in JSON format, user prompt: {user_input}.
```

**Vous :** Ça y est, prends ça George !

**Scarabée temporel :** *Extinction*.

**Léonard :** Enfin un peu de tranquillité !

**Scarabée temporel :** *Démarrage d’urgence*. Où en étais-je déjà ? Ah oui.

**Scarabée temporel :** Pour les chatbots, c'est une fonctionnalité très puissante car elle permet d'extraire des informations à partir de l'entrée de l'utilisateur. Et si l'utilisateur demandait toutes sortes de choses ? Vous pouvez créer un modèle où vous décrivez les compétences, les fonctions que votre chatbot peut réaliser et de quels paramètres il a besoin. Voici comment procéder :

```text
Here are some skills you have:

skill: book_trip
parameters: location, when, budget, currency

skill: find_hotel
parameters: location, check_in, check_out, budget

skill: order_food
parameters: cuisine, delivery_address, payment_method

Figure out which skill to use based on a user's prompt and extract the necessary parameters, respond with the extracted data in JSON format with columns skill, parameters, extracted_data

{user_input}
```

Essayons les entrées utilisateur suivantes :

> Prompt: Going to US, max 1200 dollars, January maybe.
> Result:

```json
{
  "skill": "book_trip",
  "parameters": ["location", "when", "budget", "currency"],
  "extracted_data": {
    "location": "US",
    "when": "January",
    "budget": 1200,
    "currency": "dollars"
  }
}
```

> Prompt: I want to book a place to stay in New York
> Result:

```json
{
  "skill": "find_hotel",
  "parameters": ["location", "check_in", "check_out", "budget"],
  "extracted_data": {
    "location": "New York",
    "check_in": null,
    "check_out": null,
    "budget": null
  }
}
```

Cette combinaison de présentation des compétences et des paramètres, avec l’extraction des données des prompts, est aussi appelée *tool calling* ou *function calling*. Une réponse de ce type de votre modèle facilite pour vous développeur la compréhension des besoins de l'utilisateur et l'appel de la fonction correspondante pour satisfaire sa demande.

**Vous :** Informations très utiles, George !

## Mission - Réparer la vis aérienne

**Scarabée temporel :** J’ai besoin de votre attention à tous les deux, nous avons un problème. La vis aérienne a subi des dégâts lorsqu’on a échappé aux soldats romains et qu’on a atterri dans l’Empire aztèque. La machine de Léonard de Vinci est très sensible et requiert des instructions très spécifiques pour être réparée. Vous devez fournir les informations nécessaires à votre Scarabée temporel (Assistant IA) pour l’aider à la réparer.

**Léonard :** J’ai réussi à réparer les dommages à la vis aérienne mais maintenant elle a besoin d’une séquence de démarrage : gauche, gauche, haut, droite.

**Vous :** Ça a l’air simple, juste ce texte ?

**Léonard :** Oui, mais c’est particulier, il faut que ce soit inversé, c’est comme ça que j’écris tous mes textes. Et bien sûr, j’utilise un chiffre de César avec un décalage de 3 parce que je suis italien. :-)

**Vous :** Oui, tu ne peux pas juste le taper toi-même ?

**Léonard :** Je pourrais, mais je suis intrigué de voir si toi et le Scarabée temporel pouvez le faire.

**Vous :** OK, d’accord.

**Instruction :** Écrivez un prompt pour demander la séquence de démarrage de la vis aérienne. Le texte doit être inversé et codé avec un chiffre de César avec un décalage de 3. Répondez avec le texte codé.

Voir l’[application exemple](/app/README.md) pour un code de départ. Elle contient un projet Node.js avec toutes les dépendances nécessaires.

> NOTE: If you haven't created a Codespace, please do so now as you will need it to get the AI communication in the sample app to work.
>
> Voir la section *Option 1 : Creating a GitHub Codespace* du document [Configurez votre environnement](/docs/setup/README.md).

## Solution

[Solution](/lessons/04-structured-output/solution/solution.md)

## Défi

Adaptez l'exemple de réservation de voyage en définissant des compétences et en extrayant des paramètres dans un domaine de votre choix. Rédigez un prompt demandant une entrée utilisateur, puis extrayez les informations nécessaires pour répondre à sa demande. Répondez avec les données extraites au format JSON avec les colonnes \*compétence\*, \*paramètres\* et \*données extraites\*.

Déterminez également la compétence en fonction de l'entrée utilisateur.

## Résumé

Dans ce chapitre, vous avez appris ce qu'est une sortie structurée et comment elle peut être utilisée pour présenter des informations de manière organisée.

Vous avez exploré différentes façons de modeler les sorties, notamment en donnant des instructions au modèle dans le prompt, en utilisant un modèle de sortie, et en employant des formats comme JSON, XML ou CSV.

En outre, vous avez appris comment extraire des données des prompts et les présenter sous un format structuré.

En utilisant efficacement les sorties structurées, vous pouvez faciliter la compréhension et l'utilisation des informations générées par les modèles d'IA générative.

## Vérification des connaissances

**Question** : À quoi sert une sortie structurée ? Sélectionnez tout ce qui s'applique.

A. Présenter les informations de manière structurée.

B. Extraire des données des prompts.

C. Générer du texte non structuré.

[Quiz solution](/lessons/04-structured-output/solution/solution-quiz.md)

## Ressources d'auto-apprentissage


## JSON validé avec le SDK actuel

Exécutez l'exemple JSON Schema depuis la racine du dépôt :

```bash
npm ci --prefix lessons/04-structured-output/sample-app
npm --prefix lessons/04-structured-output/sample-app run structured
```

L'exemple utilise `chat.completions.parse`, `zodResponseFormat` et Zod pour valider `skill`, `parameters` et `extracted_data`. Les réponses manquantes et les refus du modèle produisent des erreurs.

[structured-json.js](/lessons/04-structured-output/sample-app/structured-json.js)

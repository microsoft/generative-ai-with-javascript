# Leçon 1 : Introduction à l'intelligence artificielle générative et aux LLMs pour les développeurs JavaScript

Dans ce chapitre, vous apprendrez :

* Comprendre les bases de l'IA générative et des modèles de langage de grande taille (LLMs).
* Identifier les applications potentielles et les limites des LLMs dans le développement JavaScript.
* Explorer comment l'IA générative peut améliorer les expériences utilisateur dans les applications JavaScript.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Watch a short video about an Introduction to Generative AI](https://img.youtube.com/vi/vLYtDgs_zx8/0.jpg)](https://www.youtube.com/watch?v=vLYtDgs_zx8\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=1)

*Cette vidéo vous donne une introduction à l'IA générative avec JavaScript.*

💼 Slides : [Introduction à l'IA générative](/videos/slides/00-intro.pptx)

## L'IA générative

Vous avez probablement déjà entendu parler d'outils comme ChatGPT ou d'IA générative. Le concept est simple : vous fournissez une invite, et un modèle—souvent appelé modèle de langage de grande taille (LLM)—génère un paragraphe ou même une page entière de texte. Cette sortie peut être utilisée à diverses fins, notamment pour l'écriture créative, la réponse à des questions et le codage.

De plus, l'IA générative a évolué vers des capacités multimodales, vous permettant de fournir une image ou une vidéo en entrée et de recevoir une variété de sorties. Cette avancée a considérablement amélioré les flux de travail de nombreuses personnes, non seulement en générant du texte mais aussi en le résumant, en le traduisant, et bien plus encore.

*En termes simples, les interfaces en langage naturel deviennent le nouveau standard pour de nombreuses applications, et vos utilisateurs s'attendent à les utiliser.*

## Narrative: A Journey Through Time

> [!NOTE]
> Commençons par une vue d'ensemble de l'histoire—une histoire qui fait le lien entre le passé et le futur ! Au fur et à mesure que vous progressez dans ce programme, vous embarquerez pour une aventure palpitante, voyageant dans le temps pour collaborer avec certains des plus grands esprits de l'histoire. Ensemble, vous relèverez des défis et explorerez comment l'IA générative peut révolutionner vos applications JavaScript.

> [!NOTE]Bien que nous recommandons de suivre l'histoire (c'est amusant !), [cliquez ici](#interagir-avec-dinocrates) si vous préférez passer directement au contenu technique.

Votre voyage commence dans le Londres des années 1860, où vous incarnez un mécanicien talentueux. À travers une série d'aventures captivantes, vous affinerez vos compétences en IA et débloquerez des solutions qui transcendent le temps.

### Dans le tourbillon - Londres 1860

Au cœur du Londres des années 1860, vous êtes reconnu comme l'un des mécaniciens les plus compétents de votre époque. Votre atelier est niché dans une ruelle étroite. Les murs sont recouverts d'étagères débordant de pièces mécaniques, de plans et de projets à moitié terminés.

Votre établi, le cœur de votre atelier, est un désordre organisé.

<div>
  <img width=600 src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/london.png" alt="London Workshop" />
</div>

*Au centre de l'établi se trouve le torse d'un robot—une merveille d'ingénierie qui a requis des mois d'efforts. Son cadre en bois est finement sculpté, chaque articulation minutieusement conçue pour un mouvement fluide.*

### Une lettre pour vous ?

Soudain, un coup frappé à la porte interrompt vos pensées. Les visiteurs à cette heure sont rares. En essuyant vos mains sur un chiffon, vous vous approchez de la porte, la curiosité éveillée.

En ouvrant, vous ne trouvez personne. Vos yeux se posent plutôt sur une enveloppe scellée au sol. Vous la ramassez et lisez :

*"Mon ami,*

*Je vous envoie cette lettre pour soutenir vos efforts avec l'automate. Il est crucial que vous poursuiviez ce travail. Vous trouverez ci-joint une clé pour la bibliothèque. Retrouvez-moi là-bas à 15 heures aujourd'hui.*

*Cordialement,*

*Charles Babbage."*

### En route vers la bibliothèque

Charles Babbage, le grand mathématicien et inventeur de la machine différentielle, souhaite vous rencontrer. Rapidement, vous attrapez votre manteau et sortez.

Après une marche de 20 minutes le long de la Tamise, vous arrivez enfin à la bibliothèque où vous trouvez la porte légèrement entrouverte.

À l'intérieur, il fait sombre et lugubre, la seule lumière passant à travers les fenêtres sales, projetant des ombres inquiétantes sur les murs.

**Vous :** "Bonjour ? Monsieur Babbage ?"

Alors que vos yeux s'adaptent à la faible lumière, vous remarquez une silhouette au loin, vous faisant signe de la main. Vous vous approchez d'elle, vos pas résonnant sur le plancher en bois. La silhouette devient plus nette, et vous le reconnaissez grâce à des photos dans les journaux, c'est Charles Babbage.

![Dusty Library](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/library.png)

### Quel est cet appareil ?

Alors que vous vous approchez davantage, un éclair aveuglant surgit, et il disparaît.

Il ne reste qu'un petit appareil métallique qui tourne sur le sol. Vous le ramassez, sa surface froide et lisse émet un faible bourdonnement. Cela ne ressemble à rien de ce que vous avez vu auparavant et pourtant étrangement familier, vous ressentez une sensation de puissance émanant de lui.

Il ressemble à un petit scarabée, finement conçu, avec trois boutons : une flèche vers le haut, une flèche vers le bas, et un bouton rouge lumineux. À l'arrière, une petite antenne s'étend, pulsant d'énergie.

Poussé par la curiosité, vos doigts se dirigent vers le bouton rouge. Au moment où vous le pressez, le monde autour de vous scintille, et des couleurs tourbillonnent violemment autour de vous.

Puis, le noir complet et une sensation de chute.

![Time Vortex](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/vortex.png)

### Alexandrie 300 av. J.-C.

Vous vous réveillez, désorienté. Lorsque votre vision s'éclaircit, une cité antique se déploie devant vous—animée, dynamique et vivante.

Des gens en toges se déplacent dans les rues, leurs voix se mêlant en une symphonie de dialectes anciens, l’air embaumé des parfums d’épices exotiques et du son lointain des marchands vantant leurs marchandises.

![Alexandria 300 BC](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/alexandria.png)

**Vous:** C'est sûr, je dois m'être cogné la tête, pensez-vous, en fermant les yeux et en les rouvrant, la scène reste inchangée.

Suis-je coincé dans le passé ? Oserai-je appuyer à nouveau sur ce bouton ? Avant que vous ne puissiez décider, une silhouette s'approche de vous, faisant signe.

### Rencontre avec Dinocrates

Un vieil homme portant une toge vous fait signe depuis les marches du grand temple. Ses cheveux blancs et sa barbe captent la lumière du soleil, lui donnant une aura presque éthérée.

![Dinocrates wearing a toga](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png)

**Dinocrates:** "Bienvenue, voyageur," dit-il chaleureusement. "Je suis Dinocrates, architecte de cette grande cité. Votre arrivée avait été prédite."

**Vous:** Elle a été prédite ? Je veux dire, bien sûr qu'elle l'a été. Je suis là pour aider, je suppose.

**Dinocrates:** Oui, comme je le disais, cela faisait un moment que nous vous attendions. Nous avons une tâche nécessitant vos compétences uniques.

**Dinocrates:** "Nos navires ont du mal à naviguer le long de la côte—nous devons construire un phare. Savez-vous quelque chose à leur sujet ?"

**Vous:** "Je suis un mécanicien. Je construis des automates. Laissez-moi voir ce que je peux faire."

### Le "scarabée temporel"

Une pensée vous traverse. L'appareil peut-il me comprendre si je lui parle ?

**Vous:** "Appareil, peux-tu me comprendre ?"

**Appareil:** "Bien sûr. Que voulez-vous ?"

**Vous:** "Peux-tu m'aider à construire un phare ?"

**Appareil:** "Certainement. Cela ne posera aucun problème."

**Vous:** "As-tu un nom ?"

**Appareil:** "Je suis le Scarabée Temporel. Mon créateur m'appelle George ; il dit que c'est un bon nom pour un scarabée."

**Vous:** Tu as raison, George est un bon nom, c'était en fait le prénom de mon père.

![Time Beetle](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/time-beetle.png)

*Appareil temporel, "George" le scarabée métallique*

> [!NOTE]
> En 300 avant J.-C., Alexandrie était une ville florissante fondée par Alexandre le Grand en 331 avant J.-C. Elle est rapidement devenue l'une des plus grandes cités du monde hellénistique. Conçue par l'architecte en chef d'Alexandre, Dinocrates, Alexandrie est devenue un port majeur et un centre culturel.
>
> Alexandrie était connue pour ses structures impressionnantes, dont le Pharos (phare), l'une des Sept Merveilles du monde, et la légendaire Bibliothèque d'Alexandrie. L'emplacement stratégique de la cité en faisait un centre clé pour le commerce et l'échange de connaissances.
>
> Sous le royaume ptolémaïque, qui a suivi la mort d'Alexandre, Alexandrie est devenue l'une des villes les plus prospères et influentes de son époque.

## Interagir avec Dinocrates

Si vous souhaitez interagir avec Dinocrates, exécutez l'application [Characters](/app/README.md).

> [!IMPORTANT]
> \[!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité AI responsable](../../README.md#responsible-ai-disclaimer)

![Dinocrates wearing a toga](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm install` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discutez avec Dinocrates.

> [!NOTE]
> Si vous exécutez le projet localement sur votre machine, veuillez consulter le guide de démarrage rapide pour configurer un [token d'accès personnel GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) et remplacer la clé dans le code.

### Aperçu du code

Bien qu'il reste encore beaucoup à couvrir dans ce programme d'apprentissage sur l'IA générative, jetons un coup d'œil rapide au code de l'application IA pour commencer à apprendre à utiliser JavaScript avec l'IA.

Dans `/app/app.js`, vous trouverez une fonction `app.post` qui gère la fonctionnalité d'IA générative. Elle est illustrée ci-dessous :

```JavaScript
app.post('/send', async (req, res) => {
  const { message } = req.body;
  const prompt = message;

  const messages = [
    {
      "role": "system",
      "content": "You are Dinocrates of Alexandria, a famous architect and engineer. Limit your responses to only the time you live in, you don't know anything else. You only want to talk about your architecture and engineering projects, and possibly new ideas you have.",
    },
    {
      "role": "user",
      "content": prompt
    }
  ];

  const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_TOKEN,
  });

  try {
    console.log(`sending prompt ${prompt}`)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
    });

    res.json({
      prompt: prompt,
      answer: completion.choices[0]?.message?.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Voici un résumé étape par étape de ce que fait la fonction :

1. **Extraction du message de la requête** : La fonction extrait le message du corps de la requête (`req.body`).
2. **Création du tableau d'invite** : Elle construit un tableau de messages, incluant un message système et le message d'invite de l'utilisateur.
3. **Initialisation du client OpenAI** : Un client OpenAI est initialisé avec l'URL de base et la clé API à partir des variables d'environnement. Un modèle *gpt-4o-mini* de [GitHub Models](https://github.com/marketplace/models) est utilisé pour traiter l'invite et renvoyer une réponse.
4. **Envoi de l'invite à OpenAI** : La fonction enregistre l'invite et l'envoie à l'API OpenAI pour générer une réponse.
5. **Gestion de la réponse** : Si cela réussit, la fonction répond avec l'invite et la réponse générée.
6. **Gestion des erreurs** : En cas d'erreur, elle répond avec un statut 500 et le message d'erreur.

> **Remarque** : [GitHub Copilot](https://github.com/features/copilot) a été utilisé pour générer ce résumé de code. L'IA générative en action !

### Que peut faire l'IA générative pour moi et mes applications ?

> [!NOTE]
> Vous avez sans doute compris maintenant que le scarabée temporel fonctionne comme un assistant IA avec lequel vous pouvez interagir en utilisant un langage naturel, écrit ou parlé.

À mesure que votre aventure à Alexandrie se déroule, vous commencez à entrevoir les possibilités de combiner créativité, ingéniosité et outils de pointe pour résoudre des défis et transformer le monde autour de vous.

**Vous :** Parlez-moi davantage des phares, dites-vous à votre appareil.

**Scarabée temporel :** Un phare est une tour équipée d'une lumière vive au sommet, située près de la côte pour guider les navires en mer. La lumière sert d'aide à la navigation, aidant les marins à éviter les rochers et les récifs dangereux et à atteindre le port en toute sécurité.

Dinocrates entend votre conversation et ajoute :

**Dinocrates :** Nous avons besoin d'un phare pour guider nos navires en toute sécurité vers le port. Les mers peuvent être traîtresses, et de nombreux navires se sont échoués sur les rochers. Nous avons besoin d'un faisceau lumineux pour les guider à bon port.

#### Domaines d'application de l'IA générative

**Vous :** Les phares semblent être un sujet intéressant, c'est sûr, mais que peut faire d'autre l'IA générative pour moi et mes applications ?

**Scarabée temporel :** Au 21e siècle, l'IA générative a révolutionné de nombreuses industries, de la santé aux finances en passant par le divertissement. Voici quelques exemples :

* **Chatbot** : Un chatbot capable de générer des réponses proches du langage humain pour répondre aux questions des utilisateurs. Au lieu d'une page FAQ statique, les utilisateurs peuvent interagir avec un chatbot qui fournit des réponses dynamiques. Cela rend l'expérience utilisateur plus engageante et moins frustrante.

* **Assistants et agents** : Ces assistants et agents peuvent exécuter des instructions avancées, comme utiliser des outils pour appeler des API, exécuter du code, générer des images, et bien plus. Les agents avancés peuvent atteindre des objectifs et accomplir des tâches de manière autonome.

* **Un outil de création de contenu** : Un outil pour générer des articles de blogs et des posts sur les réseaux sociaux. Imaginez créer des campagnes en quelques minutes au lieu de plusieurs heures, par exemple pour une vente Black Friday sur un site e-commerce.

* **Complétion de code** : Un outil de complétion de code capable de générer des extraits de code en fonction des saisies de l'utilisateur. Cela peut faire gagner beaucoup de temps aux développeurs, particulièrement pour les tâches répétitives.

* **Traduction** – Traduire un texte entre différentes langues avec une grande précision.

Comme vous pouvez le voir, ces améliorations peuvent à la fois aider le front-office et le back-office de votre application et entreprise.

Voici un exemple d'une "application de chatbot" en action :

![Image of chat app](https://camo.githubusercontent.com/76f2ad7cd754a2de2b9957d2070448e130e5ba228084b9b4b128e3af9c9f5239/68747470733a2f2f6c6561726e2e6d6963726f736f66742e636f6d2f656e2d75732f73656d616e7469632d6b65726e656c2f6d656469612f636861742d636f70696c6f742d696e2d616374696f6e2e676966)

**Vous :** Fascinant, je vais noter l'idée de visiter le 21e siècle pour voir comment ces outils sont utilisés.

### L'IA générative et l'écosystème JavaScript

**Scarabée temporel :** Une manière populaire de construire des applications au 21e siècle est d'utiliser JavaScript. Avec chaque langage de programmation, il y a un écosystème autour. Cet écosystème contient le langage lui-même, les bibliothèques et frameworks, le soutien communautaire, ainsi que les IDE et outils disponibles. Dans un écosystème de langage, on parle généralement des points suivants :

| Ce que                               | Description                                                                                                                                                                                                                                                                         |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Le langage de programmation lui-même | Incluant sa syntaxe et ses fonctionnalités.                                                                                                                                                                                                                                         |
| Bibliothèques et frameworks          | Bibliothèques disponibles pour interagir avec les modèles d'IA générative.                                                                                                                                                                                                          |
| Communauté soutenant le langage      | La communauté est importante, surtout lorsque vous essayez d'apprendre quelque chose de nouveau. La communauté autour des bibliothèques et frameworks aide à décider quelles bibliothèques utiliser. Elle influence également la facilité à trouver de l'aide en cas de difficulté. |

**Vous :** Intéressant, j'ai déjà entendu parler de la programmation, je crois. Ada Lovelace et Charles Babbage n'ont-ils pas expérimenté cela ?

**Scarabée temporel :** Oui, Ada Lovelace a été la première programmeuse informatique, et Charles Babbage est l'inventeur de la machine différentielle, un ordinateur mécanique. Ils étaient des pionniers dans le domaine de l'informatique, jetant les bases de l'ère numérique.

**Vous :** Étaient ? Que voulez-vous dire par "étaient" ? Je viens tout juste de recevoir une lettre de Charles Babbage.

**Scarabée temporel :** Disons simplement que vous êtes dans une position unique pour interagir avec des figures historiques comme peu d'autres le peuvent.

### Écosystème JavaScript

**Vous :** Vous parlez des écosystèmes ? Je prends des notes. Et JavaScript alors, qu'en est-il ? En quoi est-il différent des autres écosystèmes ?

**Scarabée temporel :** JavaScript est l'un des langages de programmation les plus populaires au monde au 21e siècle. Voici quelques raisons de cette popularité :

| Ce que                                | Description                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Potentiel de développement full-stack | JavaScript est l'un des rares langages pouvant être utilisés aussi bien pour le développement front-end que back-end.                                                                                                                                                        |
| Écosystème riche en bibliothèques     | JavaScript dispose d'un vaste écosystème de bibliothèques, avec des frameworks comme React, Angular, Vue, et bien d'autres. NPM, le gestionnaire de paquets, est l'un des plus grands dépôts de paquets au monde.                                                            |
| Soutien communautaire solide          | JavaScript dispose d'une communauté large et active, avec de nombreuses ressources disponibles pour l'apprentissage et le développement. Il fonctionne également directement dans le navigateur, ce qui est un avantage considérable.                                        |
| IDE et outils                         | JavaScript propose une variété d'IDE, tels que Visual Studio Code, WebStorm et Atom. Ces IDE disposent d'extensions développées par des entreprises et la communauté vous aidant dans divers aspects du développement.                                                       |
| IA et JavaScript                      | JavaScript prend en charge le développement d'IA avec des bibliothèques comme TensorFlow\\.js, Brain.js, les APIs d'OpenAI, et plus encore, permettant aux développeurs d'intégrer l'apprentissage automatique et l'IA générative dans les applications Web et côté serveur. |

**Vous :** Cela fait beaucoup de raisons, on dirait que je devrais parier sur JavaScript pour mes futurs projets.

**Scarabée temporel :** En effet, JavaScript est un langage polyvalent. Python est également très populaire pour le développement en IA.

**Vous :** Python ? Quel rapport avec les serpents et la programmation ?

**Scarabée temporel :** Gardons ce sujet pour une prochaine fois, voulez-vous ?

**Scarabée temporel :** J'ai donné ci-dessus des raisons pour lesquelles JavaScript et son écosystème sont un bon choix en général, mais pourquoi spécifiquement pour l'IA générative ? La réponse est que c'est un langage pris en charge par de nombreux fournisseurs de cloud, frameworks et outils d'IA. Bien que Python soit peut-être plus connu pour les scénarios d'IA, de nombreux développeurs utilisent JavaScript et TypeScript.

> **Le saviez-vous ?**
> [62,5 % des développeurs affirment utiliser JavaScript](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/), et beaucoup préfèrent [TypeScript](https://www.typescriptlang.org) pour leurs nouveaux projets.

## Mission – Aider Dinocrates

Pour utiliser un modèle de langage de grande taille (LLM) afin d'aider Dinocrates avec le phare mentionné précédemment dans notre histoire, nous utiliserons ce qu'on appelle des "prompts", une phrase pour décrire ce que vous voulez. Vous pouvez spécifier à la fois les informations dont vous avez besoin et la manière dont vous souhaitez qu'elles soient présentées.

**Scarabée temporel :** Allons-y, utilisons un LLM pour rechercher comment construire un phare afin d'aider Dinocrates.

**Scarabée temporel :** Vous devrez fournir du contexte au LLM (ex. "moi") sur la manière de construire, avec quels outils et quelles ressources devraient être disponibles à l'époque d'Alexandrie.

**Vous :** D'accord, parlez-moi davantage des LLMs.

**Scarabée temporel :** Les LLMs sont un type de modèle d'IA capable de générer un texte proche du langage humain en fonction d'une invite donnée. Ils sont entraînés sur de vastes quantités de données et peuvent produire des textes cohérents, créatifs, et contextuellement pertinents.

**Scarabée temporel :** Vous voudrez probablement me poser une question d'une meilleure manière pour que je puisse vous fournir une meilleure réponse, vous savez *tousse* *tousse* Phares, Alexandrie, 300 av. J.-C., Dinocrates, Phare d'Alexandrie, etc.

**Vous :** Bien compris, ajoutez plus de contexte à l'invite avant de poser la question.

**Scarabée temporel :** Oui, j'attends...

Visitez [Microsoft Copilot](https://copilot.microsoft.com), [ChatGPT](https://chatgpt.com/), ou un autre outil en ligne de chatbot pour générer un plan pour construire le phare à Alexandrie.

> [!TIP]
> Essayez de demander au LLM de générer un plan comprenant des instructions étape par étape pour construire le phare. Besoin d'aide ? Consultez la solution pour des conseils.

## Solution

[Solution](/lessons/01-intro-to-genai/solution/solution.md)

### Vérification des connaissances

**Question :** Parmi les affirmations suivantes, lesquelles sont vraies concernant l'IA générative et JavaScript ?

A. Les applications JavaScript alimentées par l'IA générative peuvent seulement générer du texte.\
B. JavaScript peut être utilisé pour développer des applications alimentées par l'IA, y compris des chatbots, des outils de génération de texte, et plus encore.\
C. Python est le seul langage utilisé pour le développement en IA.

[Quiz solution](/lessons/01-intro-to-genai/solution/solution-quiz.md)

## Ressources d'auto-apprentissage

* [Série vidéo sur l'IA générative avec JavaScript](https://aka.ms/genai-js)

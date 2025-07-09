<div align="center">  

<img src="/docs/images/logo.png" alt="" align="center" height="128" />

# IA générative pour les débutants avec JavaScript

[![Licence](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/microsoft/generative-ai-with-javascript/blob/main/LICENSE)
[![Regarder la série de vidéos](https://img.shields.io/badge/Videos-d95652.svg?style=flat-square\&logo=youtube)](https://aka.ms/genai-js)
[![PRs Bienvenue](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Discord Azure AI](https://dcbadge.limes.pink/api/server/kzRShWzttr)](https://discord.gg/kzRShWzttr)

[![Forum des développeurs Azure AI Foundry](https://img.shields.io/badge/GitHub-Azure_AI_Foundry_Developer_Forum-blue?style=for-the-badge\&logo=github\&color=000000\&logoColor=fff)](https://aka.ms/foundry/forum)

⭐ Si vous aimez ce dépôt, donnez-lui une étoile sur GitHub — cela aide énormément !

[Commencer](#getting-started) • [Leçons](#lessons) • [Continuer à apprendre](#keep-learning)

</div>

Prêt à intégrer l'IA générative dans vos applications JavaScript ?

Ce cours vous plonge dans une *aventure temporelle*—rencontrez les légendes de l'histoire avec une touche amusante, tout en apprenant les technologies d'IA générative ✨

> \[!IMPORTANT]\
> Ambiance open-source ! Réutilisez, modifiez et partagez librement ce contenu.

![Aperçu de l'application pour les personnages](/docs/images/background.png)

## NOUVEAU - Leçons MCP juste ajoutées

* Apprenez comment [créer et tester votre premier serveur](/lessons/07-mcp/README.md)
* Améliorez votre client MCP en [intégrant un LLM](/lessons/08-mcp-advanced/README.md)

## Appel à l'aide - aidez-nous à traduire !

Aidez-nous à traduire ce cours. Chaque leçon dans le dossier `lessons/` possède un répertoire `translations/`. Ajoutez votre fichier de traduction comme suit : `README.<code langue>.md`, par exemple *README.es.md*. - Merci.

## Plongez dans l'histoire avec la magie de l'IA !

Lancez-vous dans une expérience d'apprentissage immersive propulsée par l'IA générative :

* **Apprenez les technologies d'IA générative**. Si vous avez voulu comprendre l'IA générative et son potentiel pour vos applications, vous êtes au bon endroit !

* **Histoires épiques de voyage dans le temps**. Plongez dans une histoire amusante, en discutant avec des icônes comme Léonard de Vinci, Ada Lovelace ou Montezuma dans chaque leçon.

* **Application compagnon**. Interagissez avec des personnages historiques en utilisant les technologies d'IA générative ([voir notre clause de non-responsabilité sur l'IA responsable](#responsible-ai-disclaimer)).

  ![Interagissez avec l'histoire à travers une conversation](/docs/images/character-chat.png)

  Consultez le répertoire [*app*](/app/README.md) pour exécuter [l'application localement](/docs/setup/README.md#option-2--running-the-app-locally) ou utilisez [GitHub Codespaces](/docs/setup/README.md) pour l'exécuter en ligne.

* **Accessibilité FTW**. Lisez-le, écoutez-le—les balises audio donnent vie au contenu.

> « C'est comme une bande dessinée avec du code ! » — Utilisateur satisfait

## Pour commencer

Tout au long de ce cours, vous trouverez de nombreux exemples de code et exercices, alors nous vous encourageons à exécuter et expérimenter le code dans votre propre copie de ce dépôt :

1. Sélectionnez le bouton **Fork** dans le coin supérieur droit du dépôt ou sélectionnez ce bouton :
   [![Fork](https://img.shields.io/badge/Fork-Repository-blue?style=flat-square)](https://github.com/microsoft/generative-ai-with-javascript/fork)

2. Cliquez sur le bouton **Code** dans votre dépôt forké, accédez à l'onglet **Codespaces** et choisissez **Créer un codespace**.

   Cela créera un environnement en ligne préconfiguré pour vous. Vous pourrez ensuite utiliser [GitHub Models](https://github.com/marketplace/models) pour exécuter des exemples de code et interagir avec des modèles d'IA gratuitement, sans installation supplémentaire.

> \[!NOTE]
>
> Alors que GitHub Codespaces offre un point de départ rapide et facile, vous pouvez également exécuter les exemples de code [localement](/docs/setup/README.md#option-2--running-the-app-locally).
>
> En savoir plus sur les [concepts GitHub Codespaces et GitHub Models ici](/docs/setup/README.md).

### Description des leçons

📦 Chaque leçon comprend :

* Une **leçon écrite** avec un devoir et un quiz.
* Une courte **vidéo** pour approfondir votre apprentissage.
* **Solutions** pour chaque devoir et quiz.
* **Personnages** avec lesquels vous pouvez interagir en utilisant notre [application compagnon](/app/README.md), démontrant l'IA générative.

## Leçons

🗃️ Table des matières

| N° | Lien de la leçon                                                                                                   | Description                                                                                                                                                                 |
| -- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [Introduction à l'IA générative et aux LLM pour les développeurs JavaScript](/lessons/01-intro-to-genai/README.md) | Comprenez les bases de l'IA générative et des LLM, leurs applications et limites en JavaScript, et comment utiliser l'IA pour améliorer les expériences utilisateur.        |
| 2  | [Créez votre première application d'IA](/lessons/02-first-ai-app/README.md)                                        | Configurez votre environnement de développement, écrivez une application de base et comprenez les invites système.                                                          |
| 3  | [Ingénierie des invites](/lessons/03-prompt-engineering/README.md)                                                 | Apprenez les bases de l'ingénierie des invites, des techniques et des méta-invites pour de meilleurs résultats avec l'IA.                                                   |
| 4  | [Sortie structurée](/lessons/04-structured-output/README.md)                                                       | Découvrez les sorties structurées, comment extraire des données à partir d'invites et les présenter sous différents formats, comme JSON, pour une consommation plus facile. |
| 5  | [Génération augmentée par récupération (RAG)](/lessons/05-rag/README.md)                                           | Apprenez les bases de la RAG, comment intégrer des données externes et les utiliser pour des réponses de l'IA plus pertinentes et précises.                                 |
| 6  | [Appel d'outils / Appel de fonctions](/lessons/06-tool-calling/README.md)                                          | Apprenez à donner des capacités supplémentaires à vos LLM en intégrant vos propres fonctions.                                                                               |
| 7  | [MCP, Protocole de Contexte de Modèle ](/lessons/07-mcp/README.md)                                                 | Apprenez à démarrer avec MCP pour standardiser l'exposition des invites, des ressources et des outils.                                                                      |
| 8  | [Amélioration des clients MCP avec des modèles de langage étendu](/lessons/08-mcp-advanced/README.md)              | Apprenez à améliorer votre application MCP en optimisant les clients avec des LLM et bien plus encore.                                                                      |

De nouvelles leçons seront ajoutées au cours au fil du temps, restez à l'écoute !

## Continuez à apprendre

🙌 Après avoir terminé ce cours, vous pouvez continuer à apprendre en explorant nos ressources supplémentaires.

<details>
<summary>🎬Video Series</summary>

| N° | Session                                                               | Description                                                                                                                    | Diapositives                                                                                           | Démo                                         | Script                                              | Vidéo                                                                                                |
| -- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 0  | Introduction à la série                                               | Introduction à la série et son contenu.                                                                                        | [pptx](/videos/slides/00-intro.pptx)/ [pdf](/videos/slides/pdf/00-intro.pdf)                           | -                                            | [Script](/videos/sessions/00-intro.md)              | [📺](https://www.youtube.com/watch?v=vLYtDgs_zx8\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=1)  |
| 1  | Ce que vous devez savoir sur les LLM                                  | Découvrez ce que sont les LLM, comment ils sont entraînés, comment ils fonctionnent et leurs limites.                          | [pptx](/videos/slides/01-llms.pptx)/ [pdf](/videos/slides/pdf/01-llms.pdf)                             | [Démo](/videos/demos/01-llms/)               | [Script](/videos/sessions/01-llms.md)               | [📺](https://www.youtube.com/watch?v=GQ_2OjNZ9aA\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=2)  |
| 2  | Techniques essentielles d'ingénierie des invites                      | Techniques pratiques d'ingénierie des invites pour tirer le meilleur parti des modèles d'IA.                                   | [pptx](/videos/slides/02-prompt-engineering.pptx)/ [pdf](/videos/slides/pdf/02-prompt-engineering.pdf) | [Démo](/videos/demos/02-prompt-engineering/) | [Script](/videos/sessions/02-prompt-engineering.md) | [📺](https://www.youtube.com/watch?v=gQ6TlyxBmWs\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=3)  |
| 3  | Améliorez la précision et la fiabilité de l'IA avec RAG               | Introduction à la génération augmentée par récupération pour utiliser l'IA avec vos propres données.                           | [pptx](/videos/slides/03-rag.pptx)/ [pdf](/videos/slides/pdf/03-rag.pdf)                               | [Démo](/videos/demos/03-rag/)                | [Script](/videos/sessions/03-rag.md)                | [📺](https://www.youtube.com/watch?v=xkFOmx5yxIA\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=4)  |
| 4  | Accélérez votre développement IA avec LangChain.js                    | Couvre les concepts de base du framework LangChain.js et comment l'utiliser pour accélérer le développement d'applications IA. | [pptx](/videos/slides/04-langchainjs.pptx)/ [pdf](/videos/slides/pdf/04-langchainjs.pdf)               | [Démo](/videos/demos/04-langchainjs/)        | [Script](/videos/sessions/04-langchainjs.md)        | [📺](https://www.youtube.com/watch?v=02IDU8eCX8o\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=5)  |
| 5  | Exécutez des modèles d'IA sur votre machine locale avec Ollama        | Montre comment intégrer des modèles d'IA locaux dans votre flux de travail de développement.                                   | [pptx](/videos/slides/05-local-models.pptx)/ [pdf](/videos/slides/pdf/05-local-models.pdf)             | [Démo](/videos/demos/05-local-models/)       | [Script](/videos/sessions/05-local-models.md)       | [📺](https://www.youtube.com/watch?v=dLfNnoPv4AQ\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=6)  |
| 6  | Démarrez avec l'IA gratuitement en utilisant Phi-3                    | Expérimentez avec Ollama et le modèle Phi-3 directement depuis votre navigateur.                                               | [pptx](/videos/slides/06-playground.pptx)/ [pdf](/videos/slides/pdf/06-playground.pdf)                 | [Démo](/videos/demos/06-playground/)         | [Script](/videos/sessions/06-playground.md)         | [📺](https://www.youtube.com/watch?v=Ds32MS9SHzU\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=7)  |
| 7  | Introduction à Azure AI Foundry                                       | Lancez votre parcours avec Azure AI Foundry.                                                                                   | [pptx](/videos/slides/07-ai-foundry.pptx)/ [pdf](/videos/slides/pdf/07-ai-foundry.pdf)                 | [Démo](/videos/demos/07-ai-foundry/)         | [Script](/videos/sessions/07-ai-foundry.md)         | [📺](https://www.youtube.com/watch?v=9Mo-VOGk8ng\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=8)  |
| 8  | Création d'applications IA générative avec Azure Cosmos DB            | Créez des applications IA générative avec Azure Cosmos DB et la recherche vectorielle.                                         | [pptx](/videos/slides/08-cosmos-db.pptx)/ [pdf](/videos/slides/pdf/08-cosmos-db.pdf)                   | [Démo](/videos/demos/08-cosmos-db/)          | [Script](/videos/sessions/08-cosmos-db.md)          | [📺](https://www.youtube.com/watch?v=-GQyaLbeqxQ\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=9)  |
| 9  | Outils Azure et services pour héberger et stocker des applications IA | Concevez, déployez et évoluez des applications d'IA en utilisant les outils Azure.                                             | [pptx](/videos/slides/09-azure-tools.pptx)/ [pdf](/videos/slides/pdf/09-azure-tools.pdf)               | -                                            | [Script](/videos/sessions/09-azure-tools.md)        | [📺](https://www.youtube.com/watch?v=WB6Fpzhwyug\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=10) |
| 10 | Diffusion de résultats d'IA générative avec le protocole AI Chat      | Intégrez facilement la diffusion continue dans vos applications avec le protocole AI Chat.                                     | [pptx](/videos/slides/10-chat-protocol.pptx)/ [pdf](/videos/slides/pdf/10-chat-protocol.pdf)           | [Démo](/videos/demos/10-chat-protocol/)      | [Script](/videos/sessions/10-chat-protocol.md)      | [📺](https://www.youtube.com/watch?v=fzDCW-6hMtU\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=11) |

Pour voir la page complète des ressources, rendez-vous sur cette [page d'aperçu vidéo](/videos/README.md).

</details>

<details>
<summary>🎒 Other Courses</summary>

* IA générative pour les débutants
* IA générative pour les débutants .NET
* IA générative avec JavaScript
* IA pour les débutants
* Agents IA pour les débutants - Un cours
* Science des données pour les débutants
* Apprentissage automatique pour les débutants
* Cybersécurité pour les débutants
* Développement Web pour les débutants
* IoT pour les débutants
* Développement XR pour les débutants
* Maîtriser GitHub Copilot pour la programmation en binôme
* Maîtriser GitHub Copilot pour les développeurs C#/.NET
* Choisissez votre propre aventure Copilot

</details>

Vous trouverez également des ressources supplémentaires sous forme de [tutoriels, exemples de code et plus](/docs/additional-resources.md).

## Clause de non-responsabilité sur l'IA responsable

> \[!IMPORTANT]
> AVERTISSEMENT : Ce dépôt contient du contenu fictif généré par IA. Les personnages historiques représentés ici génèrent des réponses grâce à l'IA générative, basée sur des données d'entraînement. Toute réponse générée par ces personnages ne représente pas leurs véritables opinions ou citations. Ce contenu est exclusivement destiné à des fins de divertissement. [Principes de l'IA responsable de Microsoft ici](https://www.microsoft.com/en-us/ai/principles-and-approach/)

## Interagissez avec la communauté

[![Discord Azure AI](https://dcbadge.limes.pink/api/server/kzRShWzttr)](https://discord.gg/kzRShWzttr)

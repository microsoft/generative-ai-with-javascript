<div align="center">  

<img src="/docs/images/logo.png" alt="" align="center" height="128" />

# Intelligence Artificielle Générative pour débutants avec JavaScript

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/microsoft/generative-ai-with-javascript/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Azure AI Discord](https://dcbadge.limes.pink/api/server/kzRShWzttr)](https://discord.gg/kzRShWzttr)

[![Azure AI Foundry Developer Forum](https://img.shields.io/badge/GitHub-Azure_AI_Foundry_Developer_Forum-blue?style=for-the-badge\&logo=github\&color=000000\&logoColor=fff)](https://aka.ms/foundry/forum)

⭐ Si vous appréciez ce dépôt, donnez-lui une étoile sur GitHub — cela aide beaucoup !

[Commencer](#getting-started) • [Leçons](#lessons) • [Continuez à apprendre](#keep-learning)

</div>

Prêt à intégrer l'Intelligence Artificielle Générative dans vos applications JavaScript ?

Ce cours vous emmène dans une *aventure à travers le temps*—rencontrez les légendes de l'histoire avec une touche amusante, tout en apprenant les technologies d'IA Générative ✨

> [!IMPORTANT]
> Ambiance open-source ! Réutilisez, modifiez et partagez librement ce contenu.

![Character App Sneak Peek](/docs/images/background.png)

## NOUVEAU - Leçons sur MCP ajoutées

* Apprenez à [créer et tester votre premier serveur](/lessons/07-mcp/README.md)
* Améliorez votre client MCP en [intégrant un LLM](/lessons/08-mcp-advanced/README.md)

## Appel à l'aide - aidez-nous à traduire !

Aidez-nous à traduire ce cours. Chaque leçon dans le dossier `lessons/` contient un répertoire `translations/`. Ajoutez votre fichier traduit de cette manière : `README.<code langue>.md`, par exemple *README.fr.md*.  - Merci.

## Plongez dans l'histoire avec la magie de l'IA !

Plongez dans une expérience d'apprentissage immersive grâce à l'IA Générative :

* **Découvrez les technologies d'IA Générative**. Si vous avez toujours voulu comprendre l'IA Générative et son potentiel pour vos applications, vous êtes au bon endroit !

* **Histoires épiques de voyage dans le temps**.\
  Plongez dans un récit amusant, en dialoguant avec des icônes telles que Léonard de Vinci, Ada Lovelace ou Montezuma dans chaque leçon.

* **Application compagnon**. Interagissez avec des personnages historiques grâce aux technologies d'IA Générative ([voir notre avertissement sur l'IA Responsable](#responsible-ai-disclaimer)).

  ![Interact with History through conversation](/docs/images/character-chat.png)

  Consultez le répertoire [*app*](/app/README.md) pour exécuter l'[application localement](/docs/setup/README.md#option-2--running-the-app-locally) ou utilisez [GitHub Codespaces](/docs/setup/README.md) pour l'exécuter en ligne.

* **Accessibilité au top**. Lisez-le, écoutez-le—les balises audio lui donnent vie.

> « C'est comme une bande dessinée avec du code ! » — Utilisateur Heureux

## Commencer

Tout au long de ce cours, vous trouverez de nombreux exemples de code et exercices, alors nous vous encourageons à exécuter et expérimenter avec le code dans votre propre copie de ce dépôt :

1. Sélectionnez le bouton **Fork** dans le coin supérieur droit du dépôt ou cliquez sur ce bouton :\
   [![Fork](https://img.shields.io/badge/Fork-Repository-blue?style=flat-square)](https://github.com/microsoft/generative-ai-with-javascript/fork)

2. Cliquez sur le bouton **Code** dans votre dépôt forké, accédez à l'onglet **Codespaces**, puis choisissez **Créer un codespace**.

   Cet environnement permet de travailler sur les exemples. Suivez le [guide de configuration](/docs/setup/README.md) pour déployer un modèle Microsoft Foundry et configurer `.env`.

> [!NOTE]
>
> Bien que GitHub Codespaces offre un point de départ rapide et facile, vous pouvez également exécuter les exemples de code [localement](/docs/setup/README.md#option-2--running-the-app-locally).
>
> Consultez le [guide de configuration](/docs/setup/README.md) pour les options locales, Codespaces et Microsoft Foundry.

### Description de la leçon

📦 Chaque leçon inclut :

* Une **leçon écrite** avec un exercice et un quiz.

* **Solutions** pour chaque exercice et quiz.
* **Personnages** avec lesquels vous pouvez interagir grâce à notre [application compagnon](/app/README.md), démontrant l'IA Générative.

## Leçons

🗃️ Table des matières

| # | Lien de la leçon                                                                                                   | Description                                                                                                                                                                  |
| - | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | [Introduction à l'IA Générative et aux LLM pour les développeurs JavaScript](/lessons/01-intro-to-genai/README.md) | Comprenez les bases de l'IA Générative et des LLM, leurs applications et leurs limites en JavaScript, et comment utiliser l'IA pour améliorer les expériences utilisateur.   |
| 2 | [Créez votre première application d'IA](/lessons/02-first-ai-app/README.md)                                        | Configurez votre environnement de développement, écrivez une application basique et comprenez les prompts système.                                                           |
| 3 | [Conception de prompts](/lessons/03-prompt-engineering/README.md)                                                  | Apprenez les bases de la conception de prompts, des techniques et des méta-prompts pour de meilleurs résultats d'IA.                                                         |
| 4 | [Sortie structurée](/lessons/04-structured-output/README.md)                                                       | Apprenez à produire des sorties structurées, à extraire des données des prompts et à les présenter sous différents formats, comme le JSON, pour une consommation simplifiée. |
| 5 | [Génération augmentée par la récupération (RAG)](/lessons/05-rag/README.md)                                        | Découvrez les bases de RAG, comment intégrer des données externes et comment les exploiter pour des réponses d'IA plus pertinentes et précises.                              |
| 6 | [Appels d'outils/Appels de fonctions](/lessons/06-tool-calling/README.md)                                          | Apprenez à donner des capacités supplémentaires à votre LLM et à intégrer vos propres fonctions                                                                              |
| 7 | [MCP, Model Context Protocol ](/lessons/07-mcp/README.md)                                                          | Apprenez à débuter avec MCP pour standardiser l'exposition des prompts, ressources et outils                                                                                 |
| 8 | [Amélioration des clients MCP avec des modèles de langage larges](/lessons/08-mcp-advanced/README.md)              | Découvrez comment améliorer votre application MCP en enrichissant les clients avec LLM et bien plus                                                                          |

De nouvelles leçons seront ajoutées au cours au fil du temps, restez connecté !

## Continuez à apprendre

🙌 Une fois ce cours terminé, vous pouvez continuer à apprendre en explorant nos ressources additionnelles.


<details>
<summary>🎒 Other Courses</summary>

* [IA générative pour les débutants](https://aka.ms/genai-beginners)
* [IA Générative pour Débutants .NET](https://github.com/microsoft/Generative-AI-for-beginners-dotnet)
* [IA Générative avec JavaScript](https://github.com/microsoft/generative-ai-with-javascript)
* [IA pour les débutants](https://aka.ms/ai-beginners)
* [Agents IA pour Débutants - Un cours](https://github.com/microsoft/ai-agents-for-beginners)
* [Science des données pour les débutants](https://aka.ms/datascience-beginners)
* [Apprentissage automatique pour les débutants](https://aka.ms/ml-beginners)
* [Cybersécurité pour les débutants](https://github.com/microsoft/Security-101)
* [Développement Web pour les débutants](https://aka.ms/webdev-beginners)
* [IoT pour les débutants](https://aka.ms/iot-beginners)
* [Développement XR pour les débutants](https://github.com/microsoft/xr-development-for-beginners)
* [Maîtriser GitHub Copilot pour la programmation en binôme](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming)
* [Maîtriser GitHub Copilot pour les développeurs C#/.NET](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers)
* [Choisissez votre propre aventure Copilot](https://github.com/microsoft/CopilotAdventures)

</details>

Vous trouverez également des ressources supplémentaires sous forme de [tutoriels, exemples de code et plus](/docs/additional-resources.md).

## Clause de non-responsabilité pour l'IA Responsable

> [!IMPORTANT]
> AVERTISSEMENT : Ce dépôt contient du contenu fictif généré par l'IA. Les personnages historiques représentés ici génèrent des réponses grâce à l'IA générative, basée sur des données d'entraînement. Les réponses générées par ces personnages ne représentent pas leurs véritables opinions ou citations. Ce contenu est uniquement destiné à des fins de divertissement. [Principes de l'IA Responsable de Microsoft ici](https://www.microsoft.com/fr-fr/ai/principles-and-approach/)

## Interagissez avec la communauté

[![Azure AI Discord](https://dcbadge.limes.pink/api/server/kzRShWzttr)](https://discord.gg/kzRShWzttr)

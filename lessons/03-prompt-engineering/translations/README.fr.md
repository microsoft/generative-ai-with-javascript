# Leçon 3 : Ingénierie des prompts

Dans ce chapitre, vous apprendrez :

* Ce qu'est l'ingénierie des prompts et comment connaître les bases peut vous aider à obtenir de meilleurs résultats.
* Différentes techniques d'ingénierie des prompts et comment elles peuvent fournir de meilleurs résultats selon divers scénarios.
* Ce que sont les méta-prompts et comment ils contribuent à restreindre les sorties, garantir leur accessibilité et offrir une meilleure expérience utilisateur.

## Configuration

Si ce n'est pas encore fait, configurez votre environnement de développement. Voici comment procéder : [Configurez votre environnement](/docs/setup/README.md).

## Ressources associées

[![Watch a short video about prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs\&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk\&index=3)

*Cette vidéo propose une introduction à l'amélioration de vos compétences en matière de "prompt", en vous apprenant à donner des instructions plus claires et plus efficaces à l'IA pour obtenir de meilleurs résultats.*

*🎥 Cliquez sur l'image ci-dessus pour regarder une courte vidéo sur l'ingénierie des prompts*

💼 Présentation : [Ingénierie des prompts](/videos/slides/02-prompt-engineering.pptx)

## Narrative: Ticket to ride

> [!NOTE]
> Jusqu'à présent, vous avez voyagé dans le temps avec Léonard de Vinci, explorant les merveilles de la Renaissance. Vous avez rencontré le Scarabée temporel, un dispositif mystérieux qui vous permet de voyager dans le temps et l'espace.
>
> Reportez-vous à [Leçon 1](/lessons/01-intro-to-genai/README.md) si vous souhaitez reprendre l'histoire depuis le début.

> [!NOTE]
> Bien que nous recommandions de suivre l'histoire (c'est amusant !), [cliquez ici](#interact-with-sforza) si vous préférez passer directement au contenu technique.

**Vous :** Voyons si je peux réussir à rentrer chez moi.

Avant que vous ne puissiez appuyer sur le bouton, les portes de l'atelier s'ouvrent en claquant avec fracas. Un homme se tient dans l'encadrement, large d'épaules et vêtu de vêtements coûteux, brandissant un morceau de papier en l'air et criant :

!["An angry Ludovico Sforza busting in through the door](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png)

*Ludovico Sforza*

**Sforza** : Da Vinci, dov'è il mio dipinto ? Où est mon tableau ?

**Léonard :** C'est Sforza. Il veut que je termine une peinture, « La Cène ».

**Vous :** Tu ne pouvais pas simplement lui dire ça ?

**Léonard :** J'ai essayé, mais ce n'est pas un homme patient.

Vous vous précipitez à la suite de Leonardo, sortant par la porte arrière dans une ruelle sombre, où vous trouvez un cheval et une calèche qui vous attendent.

Leonardo s'empare des rênes et vous sautez tous les deux dans la calèche. Avec un coup sec du fouet, le cheval s'élance, galopant à travers les étroites rues de Florence.

**Léonard :** Essaie d’appuyer sur ce bidule, ils se rapprochent !

**Vous :** "D'accord, Scarabée temporel, écoute attentivement. Je dois retourner au présent, chez moi, d'accord ?" Soudain, la calèche heurte une bosse et le Scarabée temporel s'échappe de vos mains et tombe au sol. Il commence à biper et annonce d'une voix robotique : "Destination : Rome."

**Vous :** Non, pas Rome, maison... maison...

Un tourbillon de couleurs enveloppe la calèche, dissolvant le monde autour de vous en un kaléidoscope de lumières.

## Évasion

Le tourbillon de couleurs s'estompe, et vous vous retrouvez dans la calèche, désormais lancée à toute vitesse sur la Via Appia à Rome. À votre grande surprise, vous êtes en plein milieu d'une course de chars. Les roues des chars tonnent, soulevant des nuages de poussière.

![Escape from Rome](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/escape.png)

**Vous :** Léonard, où sommes-nous ?

**Léonard :** On dirait qu'on est en pleine course ! On doit sortir d'ici !

Vous vous agrippez aux côtés de la calèche alors qu'elle traverse le chaos. Les soldats romains à cheval se rapprochent, leurs armures étincelant sous la lumière du soleil.

**Vous :** Là ! Prends la direction du port !

Leonardo dirige la calèche vers la sortie, les roues dérapant sur les pavés. Les soldats sont juste derrière vous, leurs cris résonnant dans vos oreilles.

**Léonard :** On doit les semer ! Trouve un endroit où se cacher !

Vous scrutez les ruelles étroites, le cœur battant la chamade.

**Vous :** Là ! Une ruelle !

Léonard s'engouffre dans la ruelle, la calèche bondissant tandis qu'elle prend le virage serré. Vous sautez hors de la calèche et aidez Léonard à extraire un énorme appareil à l'arrière. C'est son invention : l'**hélice volante**.

**Léonard :** Vite, on doit l'emmener sur le toit !

Vous vous efforcez tous deux de porter l'appareil. Le bruit de la poursuite des soldats se fait plus fort, leurs pas résonnent contre les murs. Vous atteignez le toit, haletant et en sueur.

**Léonard :** Aide-moi à l'installer !

Vous travaillez ensemble, vos mains bougeant avec précision. Vous grimpez tous deux sur l'appareil, le cœur battant à tout rompre.

**Léonard :** Accroche-toi bien !

Avec une dernière poussée, l'hélice commence à tourner. Les pales attrapent l'air et vous ressentez une soudaine élévation. Le sol s'éloigne sous vous alors que l'appareil s'élève au-dessus des toits de Rome.

**Vous :** On l'a fait, Léonard ! On vole !

**Léonard :** Oui, mais il faut trouver un endroit sûr pour atterrir.

Vous regardez la ville en contrebas ; les bâtiments antiques s'étendent sous vos pieds.

![Airborne, looks down at the city with feet dangling](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/airborne.png)

## Interagir avec Sforza

Si vous souhaitez interagir avec Sforza, exécutez l'application [Personnages](/app/README.md).

> [!IMPORTANT]
> Ceci est entièrement fictif ; les réponses sont générées par une IA.
> [Clause de non-responsabilité sur l'IA responsable](/README.md#responsible-ai-disclaimer)

![Ludovico Sforza](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png)

**Étapes** :

1. Lancez un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Naviguez vers */app* à la racine du dépôt.
3. Localisez la console et exécutez `npm install` suivi de `npm start`.
4. Une fois que l'application est ouverte, sélectionnez le bouton "Ouvrir dans le navigateur".
5. Discutez avec Sforza.

Pour une explication plus détaillée de l'application, voir [Explication détaillée de l'application](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Si vous exécutez le projet localement sur votre machine, veuillez consulter le guide de démarrage rapide pour configurer un [token d'accès personnel GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) et remplacer la clé dans le code.

## Qu'est-ce que l'ingénierie des prompts ?

**Scarabée temporel :** Nous devons parler d'ingénierie des prompts.

**Vous :** Vraiment ? Qu'est-ce que c'est ?

**Scarabée temporel :** L'ingénierie des prompts, malgré son nom, n'a rien à voir avec la construction de ponts ou de routes, mais consiste à créer les bons "prompts" pour obtenir le résultat souhaité d'un modèle de langage génératif IA.

**Vous :** D'accord, mais pourquoi est-ce important que je sache ça ?

**Scarabée temporel :** Eh bien, tu veux faire atterrir l'hélice volante, n'est-ce pas ?

**Vous :** Oui, de préférence en un seul morceau. :-)

**Scarabée temporel :** C'est bien ce que je pensais. Maintenant, écoute ! L'ingénierie des prompts consiste à créer les bons prompts pour obtenir le résultat que tu souhaites d'un modèle de langage.

**Scarabée temporel :** Les modèles de langage à grande échelle possèdent ce qu'on appelle des *propriétés émergentes*. Cela signifie qu'il s'agit de caractéristiques non explicitement programmées dans le modèle, mais qui émergent de la manière dont il est entraîné sur de vastes quantités de données textuelles. En étudiant ces propriétés émergentes, tu peux tirer des conclusions et découvrir des modèles pour obtenir de meilleurs résultats du modèle.

**Vous :** D'accord, donc il existe des modèles qu'on peut découvrir qui nous aident à obtenir de meilleurs résultats du modèle. Mais comment cela m'aide-t-il à faire atterrir l'hélice volante ?

**Scarabée temporel :** Oui, c'est vrai. Et, wow, tu n'es vraiment pas patient, toi, hein ?

**Vous :** Eh bien, toi non plus tu ne le serais pas si tu volais dans une machine avec des instructions d'atterrissage pas claires.

**Scarabée temporel :** Je suis là avec toi, tu sais, mais revenons-en au sujet principal.

## Comment l'ingénierie des prompts peut aider les développeurs d'applications

**Scarabée temporel :** En tant que praticien, savoir créer de meilleurs prompts est une compétence que tu veux avoir dans ton arsenal.

Dans une perspective de développeur, vous pouvez utiliser l'ingénierie des prompts pour :

* **Obtenir des résultats plus précis** de ton modèle de langage et améliorer finalement l'expérience utilisateur de ton application.

* **Contrôler la sortie** du modèle pour s'assurer qu'elle est pertinente et appropriée à tes utilisateurs. Cela est particulièrement important dans les discussions sur des sujets sensibles et pour protéger la réputation de ta marque.

* **Formatage des sorties** de manière à ce qu'elles soient faciles à comprendre et à utiliser. Nous approfondirons cet aspect dans le prochain chapitre.

**Scarabée temporel :** Explorons les différentes techniques et stratégies que tu peux utiliser pour rédiger des prompts efficaces pour ton modèle de langage.

## Techniques et stratégies d'ingénierie des prompts

**Scarabée temporel :** Voici quelques techniques et stratégies que tu peux utiliser pour rédiger des prompts efficaces :

* **Prompting avec quelques exemples**. Cette technique consiste à donner à l'IA quelques exemples pour montrer le type de réponse qu'on attend.

* **Prompting chaîne-de-pensée**. Cette technique implique de fournir une séquence de prompts pour apprendre à l'IA comment résoudre une tâche complexe étape par étape.

* **Méta-prompts**. Cette technique consiste à ajouter des détails ou des instructions supplémentaires pour façonner la sortie de l'IA de manière plus précise.

* **Prompting maïeutique**. Cette technique implique d'utiliser des questions guidantes pour orienter l'IA vers une réponse spécifique.

**Vous :** Ça a l'air intéressant. Je suppose que tu vas me donner des exemples ?

**Scarabée temporel :** Oui, ils arrivent tout de suite. Regardons des exemples pour chacune de ces techniques afin de comprendre comment elles fonctionnent en pratique.

### Prompting avec quelques exemples : Fournir des exemples pour guider les réponses de l'IA

Le prompting avec quelques exemples donne au modèle IA quelques exemples pour guider ses réponses. Imaginez que vous êtes dans l'hélice volante en train de poser des questions sur la Rome antique. Les prompts avec quelques exemples pourraient ressembler à ceci :

> "Parle-moi du Colisée romain." → "C'est un amphithéâtre massif."
>
> "À quoi ressemblait la vie dans la Rome antique ?" → "C'était à la fois animée et difficile."

Je vois ! Cela aide l'IA à donner des réponses correctes, même ici en haut ! ;)

Exactement, c'est une méthode solide. Passons à la suite !

### Prompting chaîne-de-pensée : Montrer un raisonnement étape par étape

Cette technique guide l'IA en lui montrant un raisonnement étape par étape pour résoudre un problème. Imaginez atterrir avec l'hélice volante. Vous pourriez décomposer cela ainsi :

* Vous êtes à 100 mètres de hauteur.
* La gravité agit à 9,8 m/s².
* Formula: height = ½ \* g \* t².
* Solve: t ≈ 4.5 seconds to land.

Votre prompt devient :

> * * 100 mètres au-dessus du sol
> * Gravity: 9.8 m/s²
> * * Combien de secondes pour atterrir ?

**Answer: 4.5 seconds**

C'est rapide—j'espère que les calculs sont corrects !

Cela apprend à l'IA à réfléchir étape par étape.

Donc, il s'agit de décomposer les problèmes pour obtenir des réponses précises ?

Oui, parfait pour des tâches complexes comme une application de tutorat en maths !

### Prompting maïeutique : Questionner les réponses pour vérifier leur exactitude

Cette technique utilise des questions pour vérifier l'exactitude des réponses de l'IA. Vous interrogez chaque étape pour assurer un raisonnement cohérent.

Donc, remettre en question tout ce qu'elle dit ? Ça a l'air amusant. ;)

Testons notre atterrissage avec l'hélice volante :

* 100 mètres de hauteur
* Gravity: 9.8 m/s²
* Combien de secondes pour atterrir ? (Réponse : 4,5 s)

Ask: “Why 4.5 seconds?”

> **Response:**
>
> * Hauteur = 100m, vitesse verticale initiale = 0 m/s, gravité = 9,8 m/s².
> * Use: height = ½ \* g \* t².
> * Solve: 100 = ½ \* 9.8 \* t² → t ≈ 4.5s.

Il s'agit de vérifier les réponses de l'IA avec des questions de suivi.

Donc, il ne faut pas lui faire confiance—il faut la sonder avec des questions ?

Exactement ! Cela garantit un raisonnement solide.

## Méta-prompts : Ajouter des instructions supplémentaires pour plus de précision

Passons maintenant aux méta-prompts.

Ugh, d'abord du thé ?

*Soupir*. Ils ajoutent des directives aux prompts pour de meilleurs résultats—parfait pour des applications sensibles et orientées client.

Voici un exemple :

> **Méta-prompt :** Utilisez uniquement les produits Contoso Inc. (ballons de basket, ballons de football, raquettes de tennis). Restez précis et convivial.
> **Prompt :** Meilleurs produits de sport pour les débutants ?
> **Réponse :** Ballons de basket, ballons de football et raquettes de tennis—parfait pour la coordination et l'agilité.

Cela garantit l'exactitude et le respect des produits de Contoso. Sans cela :

> **Prompt :** Meilleurs produits de sport pour les débutants ?
> **Réponse :** Ballons de basket, ballons de football, raquettes de tennis, plus ballons de rugby—*pas tous des articles Contoso.*

Pratique ! Cela maintient les réponses sur la bonne voie, comme des lois pour mon automate.

Tu le saurais, *"Frankenstein"*—euh, rien !

**Vous :** Quoi ?

Quoi ?

> *Frankenstein* de Mary Shelley—1818, 42 ans avant tes voyages dans le temps. [En savoir plus](https://en.wikipedia.org/wiki/Mary_Shelley)

Donc, sans méta-prompt, c'est le chaos ?

Oui, tu obtiendrais des réponses hors marque.

Compris, la précision compte !

## Mission - Aidons nos héros à atterrir l'hélice volante

C'est ici que tu me montres comment faire atterrir l'hélice volante, non ?

Oui, passons à ça. La colline est à environ 100 mètres de notre position actuelle. Voici comment nous pouvons configurer le prompt :

* Hauteur actuelle par rapport au sol : 100 mètres
* Avance à : 10 mètres par seconde
* Gravity: 9.8 meters per second squared
* Vent ascendant de : 0,7 mètre par seconde

Ton gadget IA peut-il aider à calculer si on va y arriver ou s'il faut refaire un saut temporel ?

Je peux oui, mais mon nom est George, je préfère cela à Gadget. Je vais en fait vous laisser tous les deux réfléchir à la façon de configurer le prompt. ☺️

Créez une application qui demande :

* * La hauteur
* * La vitesse en avant
* * La gravité
* * Le vent ascendant
* * La distance jusqu'à la colline

Utilisez la technique de chaîne-de-pensée pour arriver à une réponse.

Voici un projet de démarrage [Projet de démarrage](/app/README.md).

## Solution

Créez une application en JavaScript qui demande les entrées suivantes :

* Hauteur actuelle par rapport au sol
* Avance en mètres par seconde
* Gravité en mètres par seconde au carré
* Vent ascendant en mètres par seconde
* Distance jusqu'à la colline

Ensuite, utilisez le LLM pour intégrer ces entrées et exploitez la technique de chaîne-de-pensée pour guider le modèle vers la bonne réponse.

[Solution](/lessons/03-prompt-engineering/solution/solution.md)

## Vérification des connaissances

**Question :** Qu'est-ce que l'ingénierie des prompts ? Sélectionnez tout ce qui s'applique.

A. L'ingénierie des prompts concerne la construction de ponts et de routes.

B. L'ingénierie des prompts consiste à créer les bons prompts pour obtenir le résultat souhaité d'un modèle de langage.

C. L'ingénierie des prompts consiste à entraîner un modèle à reconnaître des motifs dans les données.

[Quiz solution](/lessons/03-prompt-engineering/solution/solution-quiz.md)

## Ressources d'auto-apprentissage

* [Conception de prompts](https://en.wikipedia.org/wiki/Prompt_engineering)
* [Fondamentaux de l'ingénierie des prompts](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md?WT.mc_id=academic-105485-koreyst)
* [Ingénierie des prompts avancée](https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts)

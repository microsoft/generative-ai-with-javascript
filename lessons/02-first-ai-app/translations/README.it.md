# Lezione 2: Scrivere la tua prima app AI

In questo capitolo imparerai a:

- configurare il tuo ambiente di sviluppo;
- scrivere un'app di base;
- comprendere i prompt di sistema.

## Configurazione

Se non l'hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi farlo: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Guarda un breve video sui large language model](https://img.youtube.com/vi/GQ_2OjNZ9aA/0.jpg)](https://www.youtube.com/watch?v=GQ_2OjNZ9aA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=2)

_Questo video offre un'introduzione ai modelli di IA denominati "Large Language Model" (LLM), spiegando che cosa sono e come è possibile utilizzarli per integrare l'IA nelle proprie app._

*🎥 Clicca sull'immagine qui sopra per guardare un breve video sui large language model*

💼 Slide: [Introduzione ai Large Language Model (LLM)](/videos/slides/01-llms.pptx)

## Storia: "Immaginati su una barca su un fiume"

> [!NOTE]
> _La nostra storia finora: sei un inventore, un artigiano della Londra del 1860 che ha viaggiato nel tempo usando un misterioso dispositivo chiamato Scarabeo del tempo. Hai viaggiato attraverso gli annali della storia, assistendo alla creazione del Faro di Alessandria, una meraviglia dell'ingegneria antica che hai contribuito a creare con un piccolo aiuto da Dinocrate e dallo Scarabeo del tempo._
>
> Vedi [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall'inizio e iniziare a usare l'IA generativa.

> [!NOTE] 
> Sebbene consigliamo di leggere la storia (è divertente!), [clicca qui](#interagisci-con-leonardo) se preferisci passare direttamente al contenuto tecnico.

Insieme a Dinocrate hai dato gli ultimi ritocchi al Faro di Alessandria. L'imponente struttura risplende alla luce del sole e la sua pietra levigata riflette il Mar Mediterraneo.

Guardi lo Scarabeo del tempo che hai in mano, la sua superficie metallica fredda contro il palmo. Stringendo il pugno, sussurri: «Portami a casa». Lo scarabeo inizia a brillare, emettendo una luce morbida e calda e il mondo intorno a te si dissolve in un turbine di colori.

### Una nuova avventura

Quando apri gli occhi, il mondo è cambiato. Mentre riesci ad alzarti, ti rendi conto di essere su una barca su un fiume. Ti guardi intorno: in lontananza vedi degli edifici i cui contorni sono sfumati dalla nebbia mattutina.

Guardando intorno alla barca, trovi un lungo remo appoggiato al bordo. Afferrandolo, inizi a remare verso gli edifici lontani. Avvicinandoti, gli edifici diventano più nitidi: sono antichi, la loro architettura ricorda un dipinto rinascimentale.

![Barca sul fiume, uomo in piedi con una pagaia](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/boat.png)

La domanda è: dove e quando ti trovi questa volta?

Riesci ad ormeggiare la barca al molo e inizi a camminare lungo le assi di legno, il suono dei tuoi passi echeggia dolcemente.

Mentre cammini, noti un uomo con una lunga barba e un cappello che fruga in una cassa contenente quelli che sembrano componenti meccanici. Le sue mani si muovono abilmente, sistemando ingranaggi e molle con esperta facilità.

![Leonardo Da Vinci in piedi accanto a una cassa nel porto](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo.png)

### Aiutami, Leonardo

**Tu:** «Mi scusi, signore, dove mi trovo?» Ti guarda, la confusione è evidente nei suoi occhi. Rendendoti conto che stavi parlando in inglese, usi rapidamente il dispositivo che hai in mano e gli chiedi di tradurre.

**Scarabeo del tempo:** «Certo, lo tradurrò nell'italiano del XV secolo. "Dove sono?"»

**Anziano:** L'anziano risponde: «Siete a Firenze, signore. E chi siete voi?»

**Scarabeo del tempo:** Lo Scarabeo del tempo traduce: «Ha detto che ti trovi a Firenze e chiede chi sei.» 

**Tu:** «Digli che sono un inventore e che sto cercando un posto di lavoro.»

**Anziano:** «Un artigiano, eh? Avete mai sentito parlare di Leonardo da Vinci?»

**Scarabeo del tempo:** Lo Scarabeo del tempo traduce: «Chiede se hai mai sentito parlare di Leonardo da Vinci.»

**Tu:** «Certo», rispondi. «Digli che ne ho sentito parlare e che mi piacerebbe conoscerlo.»

**Anziano:** L'anziano sorride: «Allora seguitemi, vi porterò da lui.»

**Tu:** Chiedi: «Che cosa ha detto?»

**Scarabeo del tempo:** Lo Scarabeo del tempo risponde: «Ha detto che ti porterà da Leonardo.»

### In officina

![Officina di Leonardo](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo-workshop.png)

Chiedi allo Scarabeo del tempo di informarsi su dove si trovi Leonardo.

**Tu:** «Dove è Leonardo?»

**Anziano:** L'anziano si gira verso di te con un sorriso: «Sono io Leonardo da Vinci. Chi siete voi?»

Provi un brivido di riconoscimento.

**Tu:** «Lo immaginavo. Sono un inventore, fuori dallo spazio e fuori dal tempo.»

**Leonardo:** Gli occhi di Leonardo brillano di curiosità. «Interessante, cosa vi porta qui?»

Lo Scarabeo del tempo traduce.

**Scarabeo del tempo:**  «Chiede che cosa ti porti qui.»

**Tu:** «Beh, stavo lavorando a un progetto e sono finito qui.»

Gli mostri lo Scarabeo del tempo e i suoi occhi si illuminano di fascino. Lo esamina attentamente, mentre gli spieghi come funziona e come sei finito a Firenze.

Leonardo ti guarda con entusiasmo.

**Leonardo:** You're a maker of things. I have a project that might interest you. I've been working on a machine that can generate text based on verbal input. Would you like to help me with it?

Leonardo da Vinci, asking you to help him with a project—you can hardly believe it. You nod eagerly and say: 

**You:** I would be honored to help you with your project,
"Sarebbe un onore aiutarti con il tuo progetto."

**Leonardo:** «Sei un inventore. Ho un progetto che potrebbe interessarti: sto lavorando a una macchina in grado di generare testo in base a input verbali. Ti piacerebbe aiutarmi?»

Leonardo da Vinci che ti chiede di aiutarlo con un progetto… stenti a crederci. Annuisci con entusiasmo e dici:

**Tu:** «Sarebbe un onore aiutarti con il tuo progetto.»

## Interagisci con Leonardo

Se vuoi interagire con Leonardo, esegui la app [Personaggi](/app/README.md).

> [!IMPORTANT]
> Questo è interamente frutto di fantasia: le risposte sono generate dall'intelligenza artificiale.
> [Dichiarazione di responsabilità sull'IA](../../README.md#responsible-ai-disclaimer)

![Leonardo talks](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo-talk.jpeg)

**Passaggi**:

1. Start a [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante "Open in Browser".
5. Chatta con Leonardo.

For a more detailed explanation of the app, see [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l'[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## Configurazione dell'ambiente di sviluppo

Prima di poter aiutare Leonardo nel suo progetto, dovresti innanzitutto pensare agli "strumenti del mestiere" essenziali necessari per iniziare ad aiutarlo in modo efficace.

**Tu:** «Scarabeo del tempo, di che cosa ho bisogno per iniziare questo progetto? Suggeriscimi gli strumenti e le librerie di cui ho bisogno che possono aiutarmi a creare un'app di IA che tu possa eseguire.»

**Scarabeo del tempo:** «Sono compatibile con la maggior parte delle macchine in funzione nel 21° secolo; consulta l'elenco seguente per un set di strumenti e librerie essenziali.»

- **Editor di testo**, per esempio Visual Studio Code.
- **Terminale**, per eseguire i comandi.
- **Browser per testare la tua app**. È anche una buona idea avere uno strumento come cURL o un altro client HTTP per testare gli endpoint API della tua app.
- **Node.js**. Devi anche installare Node.js e npm, strumenti che ti aiutano a eseguire codice JavaScript sul tuo computer.
- **Chiave API**. Avrai bisogno di una chiave API per accedere al modello di IA generativa. Puoi ottenerla dal fornitore del modello, ad esempio OpenAI o Azure OpenAI.

**Tu:** «Grazie, Scarabeo del tempo, Immagino che andrai a prenderli in qualche modo da quel web di cui hai parlato?»

**Time Beetle:** «Sì, li ho già presi» dice e proietta una tastiera e uno schermo sul muro di fronte a te.

## Scrivere una app di base

**Tu:** «Dimmi di più sulla scrittura vera e propria della app: come posso iniziare?»

**Scarabeo del tempo:** «Certo! Per scrivere un'app, nella sua forma più semplice, si tratta di inviare una richiesta a un'API e visualizzarne la risposta. Analizziamolo nel dettaglio.»

- **Input**: In un'app di generazione di testo di base, l'input si riferisce al testo iniziale da cui si desidera espandere o sviluppare la app. Questo input può essere fornito dall'utente durante l'esecuzione o preimpostato (hardcoded) all'interno dell'app stessa. Per ora, inizieremo utilizzando il testo hardcoded come input.
- **Richiesta API**: È necessario inviare una richiesta all'API del modello di IA generativa con il testo di input. Questa operazione viene eseguita utilizzando la funzione fetch in JavaScript (Node.js). In questa richiesta dovrebbe essere inclusa anche la chiave API. Per motivi di sicurezza, si consiglia di non inserire la chiave API hardcoded nell'app, ma di utilizzare variabili di ambiente. Inoltre, se si utilizza un provider come Azure, si consiglia di valutare l'identità gestita, poiché è considerata un modo più sicuro per accedere alle risorse. Con l'identità gestita è possibile assegnare autorizzazioni più granulari alla propria app. Il vantaggio principale è che il provider cloud si occupa dell'autenticazione per conto dell'utente.
- **Risposta**: L'API restituirà una risposta con il testo generato. È necessario estrarre questo testo dalla risposta e mostrarlo all'utente.

**Tu:** «Sembra abbastanza semplice, puoi illustrarmi uno scenario che avrebbe senso data la situazione in cui ci troviamo?»

**Scarabeo del tempo:** «Certo, vediamo come possiamo creare una semplice app che generi testo in italiano partendo da un input in inglese.»

## La tua prima app: insegnami l'italiano

**Scarabeo del tempo:** «I modelli di IA generativa possono essere utilizzati per molti scopi, ad esempio per la traduzione. Infatti, accettano input in una lingua e possono generare testo in un'altra. Iniziamo con una semplice app che accetta input in inglese e genera testo in italiano.»

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

«Spieghiamo cosa sta succedendo qui.»

- Creazione della domanda "Hello, how are you?". Questo è il testo che vuoi tradurre in italiano.
- Creazione del prompt aumentato, che contiene il testo di input e alcune istruzioni aggiuntive su cosa fare, ovvero tradurre. Nota come utilizziamo l'interpolazione di stringhe per includere il testo di input nel prompt e come tale istruzione traduca il testo in italiano.
- Creazione del client con le proprietà:
  - `model`, quale modello utilizzare.
  - `messages`, il prompt da inviare al modello. Nota anche come imposti il ​​ruolo su "user" per indicare che il testo di input proviene dall'utente. Se provenisse dall'IA, avresti impostato il ruolo su "system".
- Estrazione del testo generato dalla risposta e stampa sulla console.

**Tu:** «Penso di aver capito. Quindi se io cambio il valore della variabile `question` con qualcos'altro, la app genererà una diversa traduzione in italiano?»

**Scarabeo del tempo:** «Esatto, puoi modificare il testo di input come preferisci. Nota anche come i modelli GitHub vengano utilizzati come URL di base per l'API, insieme a un token GitHub come chiave API.»

**Tu:** «Perché è importante?»

**Scarabeo del tempo:** «È importante utilizzare un URL di base e una chiave API specifici per il modello che si sta utilizzando. GitHub Models è una piattaforma che ospita una varietà di modelli, tutti con funzionalità e caratteristiche diverse, ed è gratuita.»

**Tu:** «Oh cielo, comunque non so chi pagare e dubito che accettino la mia valuta qui. :)»

## App di chat

**Scarabeo del tempo:** «I modelli di IA generativa possono essere utilizzati anche per generare testo basato su una conversazione. È possibile simulare una conversazione con l'intelligenza artificiale fornendo un elenco di messaggi come contesto, come se la conversazione fosse già avvenuta.»

**You:** «Sembra interessante, ma perché è utile?»

**Scarabeo del tempo:** «È utile perché permette alla IA di fornire una risposta migliore basata su più contesto, anziché un singolo prompt. Per illustrare questo concetto, prendiamo in esame la conversazione qui sotto:»

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

**Scarabeo del tempo:** «Immagina se una frase come "Tell me more about this" fosse decontestualizzata: l'IA non saprebbe a cosa si riferisce "this". È qui che il contesto è importante e questo contesto è qualcosa che possiamo fornire al modello di IA tramite il prompt.»

**Tu:** «Credo di aver capito, come faccio a costruire una conversazione con l'intelligenza artificiale usando questo linguaggio JavaScript di cui parli?»

**Time Beetle:** «Qui di seguito è illustrato come possiamo costruire una conversazione con l'IA.»

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

Ora l'IA fornirà un elenco di messaggi di chat come contesto e genererà una risposta basata su tale contesto. Questo è un modo più interattivo di utilizzare modelli di IA generativa e può essere utilizzato in chatbot, applicazioni di assistenza clienti e altro ancora.

**Tu:** «Ok, quindi se ho capito bene la conversazione, l'IA avrà ora il seguente contesto: _I'm going to Rome next month_, quindi in base a questo dovrebbe filtrare le informazioni irrilevanti e fornire una risposta più pertinente?»

**Scarabeo del tempo:** «Esatto, l'IA utilizzerà il contesto per generare una risposta più pertinente alla conversazione.»

## Migliorare la conversazione in chat con un messaggio di sistema

**Tu:** «Capisco, ma c'è un modo per migliorare ulteriormente la situazione?»

**Scarabeo del tempo:** «Sì, puoi aggiungere un messaggio di sistema alla conversazione. Un messaggio di sistema crea una "personalità" per l'IA e può essere utilizzato per fornire ulteriore contesto.»

**Tu:** «Ok, quindi nel contesto della conversazione che abbiamo avuto, come apparirebbe un messaggio di sistema?»

**Scarabeo del tempo:** «Un messaggio di sistema per questa conversazione potrebbe essere qualcosa del tipo _"I'm an AI travel assistant, here to help you plan your trip to Italy."_ Questo messaggio stabilisce il tono della conversazione e aiuta l'IA a comprendere il suo ruolo nell'interazione.»

Per creare un messaggio di questo tipo, assicurati che abbia il tipo "developer" in questo modo:

```javascript
const message = {
  "role": "developer",
  "content": "I'm an AI travel assistant, here to help you plan your trip to Italy."
};
```

> [!NOTE] 
> In passato si chiamava "system". Si tratta di una modifica recente e il nuovo termine è "developer". Per alcuni modelli si chiama ancora "system", quindi in caso di problemi usa "system".

**Tu:** «Ok, perfetto, mi assicurerò di includere un messaggio di sistema nelle mie conversazioni in chat. Per curiosità, come si presenta un messaggio di sistema per te?»

**Scarabeo del tempo:** «Un messaggio di sistema per me potrebbe essere qualcosa del tipo _"I'm the Time Beetle, here to help you navigate through time and space. I should be helpful in providing you with information and guidance about the time era you're in along with the tools you need to get back to your own time."»_

### Creazione di risposte diverse con l'impostazione della temperatura

**Tu:** «C'è qualcos'altro che dovrei sapere sulle conversazioni in chat?»

**Scarabeo del tempo:** «Sì, puoi regolare la "temperatura" delle risposte dell'IA. La temperatura è una variabile con un valore normalmente impostato tra 0 e 1 che determina il livello di creatività delle risposte dell'IA. Una temperatura pari a 0 si tradurrà in risposte più prevedibili, mentre una temperatura pari a 1 si tradurrà in risposte più creative e varie. Puoi regolare la temperatura in base al contesto della conversazione e al tipo di risposte che desideri dall'IA. Nota: è possibile impostare un valore superiore a 1, ma ciò comporta una maggiore casualità e una minore coerenza nelle risposte.»

**Tu:** «Quindi se imposto la temperatura a 0, l'IA fornirà risposte più prevedibili, mentre se la imposto a 1, l'IA fornirà risposte più creative? Che temperatura hai tu?»

**Scarabeo del tempo:** «Ho una temperatura di 0,7 e sì, hai ragione, l'IA fornirà risposte più creative con una temperatura più alta. Vediamo come puoi impostare la temperatura nella tua app:»

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

Come puoi vedere, puoi regolare la temperatura in base al contesto della conversazione e al tipo di risposte che desideri dall'IA. Questa è una funzionalità potente che ti permette di personalizzare il livello di creatività nelle risposte dell'IA.

## Finestra di contesto

**Tu:** «C'è dell'altro, giusto?»

**Scarabeo del tempo:** «Sì, un altro concetto importante nei modelli di intelligenza artificiale generativa è la finestra di contesto. La finestra di contesto è il numero di messaggi precedenti che l'intelligenza artificiale utilizza per generare una risposta. Una finestra di contesto più ampia consente all'intelligenza artificiale di considerare più contesto e generare risposte più coerenti.»

**Scarabeo del tempo:** «Modelli diversi hanno limiti diversi per i token in uscita. Prendiamo come esempio il modello `gpt-4o-2024-08-06`, che ha le seguenti specifiche.»

- Numero massimo di token in uscita: circa 16k.
- Dimensione massima della finestra di contesto: 128k.

«Ciò significa che la maggior parte dei token può essere spesa sui token di input, ovvero 128k - 16k = 112k token.»

**Tu:** «Capito: finestra di contesto, token… quanto costa un token?»

**Scarabeo del tempo:** «Un token è una parola o una parte di parola e varia leggermente a seconda della lingua. Esiste uno strumento di misurazione consigliato da OpenAI, chiamato [tokenizer](https://platform.openai.com/tokenizer). Proviamo a scrivere una frase e vediamo quanti token contiene.»

```text
I want you to generate recipes for me.
```

![Demo di tokenizer](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/tokenizer.png)

Eseguendo `tokenizer` sulla frase qui sopra abbiamo generato 9 token.

**Tu:** «Non è molto, quindi sembra che potrei avere molti token nella mia finestra di contesto?»

**Time Beetle:** «Sì, puoi sperimentare diverse dimensioni della finestra di contesto per vedere come influiscono sulle risposte dell'IA. Infatti, impostando una dimensione della finestra di contesto pari a 100, limiterai l'IA e la quantità di dati che considera per input e output. Ecco come puoi impostare la finestra di contesto nella tua app.»

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
> Sperimenta diverse finestre di contesto per vedere come cambiano le risposte dell'IA.

## Compito - Costruire un assistente tecnico

Leonardo chiede improvvisamente di poter esaminare più da vicino lo Scarabeo del Tempo, lo guarda da tutti i lati, lo scuote perfino.

**Leonardo:** «Ho bisogno di un assistente che mi aiuti con i calcoli e la progettazione della vite aerea. Puoi costruirmi un assistente che possa farlo?»

**Tu:** «Certo, posso costruirtelo. Scarabeo del tempo, possiamo aiutarlo, vero?»

**Scarabeo del tempo:** «Sì, nessun problema, anzi, la vite aerea è una delle invenzioni più affascinanti e visionarie di Leonardo. Progettata alla fine degli anni '80 del Quattrocento…»

**Tu:** «Tutto ciò di cui avevo bisogno era un sì, teniamo la lezione per dopo.»

**Scarabeo del tempo:** «Maleducato…»

**Tu:** «Cosa?»

**Scarabeo del tempo:** «Niente»

![Vite aerea, Leonardo da Vinci](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/helicopter.jpg)

> [!NOTE]
> La vite aerea, nota anche come vite elicoidale, era progettata per sollevare da terra comprimendo l'aria. Il progetto di Leonardo prevedeva un grande rotore a spirale in lino, irrigidito con amido e montato su una piattaforma di legno. L'idea era che un gruppo di uomini corresse intorno alla piattaforma, azionando delle manovelle per far ruotare la vite abbastanza rapidamente da ottenere la portanza.
>
> Sebbene Leonardo non abbia mai costruito una versione a grandezza naturale della vite aerea, i suoi schizzi e appunti forniscono informazioni dettagliate su come ne immaginava il funzionamento. Credeva che se la vite fosse stata ruotata abbastanza velocemente, avrebbe spinto contro l'aria e sollevato l'intera struttura da terra.
>
> Tuttavia, gli scienziati moderni concordano sul fatto che i materiali disponibili all'epoca di Leonardo non fossero sufficientemente resistenti o leggeri per rendere ciò possibile.
>
> Nonostante la sua impraticabilità, la vite aerea rimane una testimonianza del genio di Leonardo e della sua instancabile ricerca dell'innovazione. Ha gettato le basi per i futuri sviluppi dell'aviazione e continua a ispirare ingegneri e inventori ancora oggi.
> [Leggi tutto](https://en.wikipedia.org/wiki/Leonardo%27s_aerial_screw)

Il tuo compito è creare un assistente tecnico che possa aiutare Leonardo nei calcoli e nella progettazione della vite aerea.

- Dovrebbe essere in grado di generare testo in base all'input dell'utente.
- Dovresti impostare un messaggio di sistema per introdurre l'assistente.

Dai un'occhiata alla [App di esempio](/app/README.md) per iniziare.

> [!TIP]
> Considera quale dovrebbe essere il messaggio di sistema e quale input dovresti fornire.

## Soluzione

[Soluzione](/lessons/02-first-ai-app/solution/solution.md)

## Verifica delle conoscenze

**Domanda:** Qual è lo scopo della finestra di contesto nei modelli di IA generativa? Seleziona tutte le risposte pertinenti.

A. La finestra di contesto consente all'IA di considerare più contesto e generare risposte più coerenti.
B. La finestra di contesto è il numero di messaggi precedenti che l'IA utilizza per generare una risposta.
C. La finestra di contesto determina il livello di creatività delle risposte dell'IA.

[Soluzione del quiz](/lessons/02-first-ai-app/solution/solution-quiz.md)

## Risorse per lo studio autonomo

- [Text generation](https://platform.openai.com/docs/guides/text-generation)
- [JavaScript library for OpenAI](https://github.com/openai/openai-node/tree/master/examples) 
- [Tokenizer](https://platform.openai.com/tokenizer)
- [Completion API](https://platform.openai.com/docs/api-reference/completions)
- [Chat completions](https://platform.openai.com/docs/guides/text-generation#text-generation-models) 

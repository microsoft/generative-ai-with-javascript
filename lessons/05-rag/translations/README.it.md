# Lezione 5: Parla ai tuoi dati con la Retrieval-Augmented Generation (RAG)

In questo capitolo imparerai:
- le basi della Retrieval-Augmented Generation (RAG) e come può essere utilizzata per migliorare le risposte dei modelli di IA generativa;
- come integrare fonti di dati esterne nella tua applicazione di IA;
- come sfruttare i tuoi dati per migliorare la pertinenza e l'accuratezza dei contenuti generati dall’IA.

## Configurazione

Se non l’hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi fare: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Guarda un breve video sulla RAG](https://img.youtube.com/vi/xkFOmx5yxIA/0.jpg)](https://www.youtube.com/watch?v=xkFOmx5yxIA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=4)

_Questo video spiega la Retrieval-Augmented Generation (RAG), un metodo che aiuta la IA a usare i tuoi contenuti insieme ai relativi dati di training per risultati migliori._

*🎥 Clicca sull’immagine qui sopra per guardare un breve video sul Retrieval-Augmented Generation (RAG)*

💼 Slide: [Retrieval-Augmented Generation (RAG)](/videos/slides/03-rag.pptx)

## Storia: “La genesi”

> [!NOTE] 
> _La nostra storia finora: sei un inventore della Londra del 1860. Stavi lavorando al tuo automa e hai ricevuto una lettera da Charles Babbage che ti ha portato in una biblioteca, dove hai trovato un dispositivo per viaggiare nel tempo. Durante i tuoi viaggi nel tempo sei arrivato a Firenze, dove hai incontrato Leonardo da Vinci. Sei anche stato nell’Impero azteco ed è qui che la storia continua._
>
> Vedi [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall’inizio e iniziare a usare l’IA generativa.

> [!NOTE]
> Anche se consigliamo di leggere la storia (è divertente!), [clicca qui](#interagisci-con-ada-lovelace) se preferisci passare direttamente al contenuto tecnico.

**Tu**: «Leonardo, è ora di andare», dissi, premendo il pulsante. Il dispositivo si accese ronzando e una voce meccanica echeggiò: «È ora di tornare a casa, è ora della “genesi”.»

**Leonardo:** «Genesi? Che cosa significa?» chiese Leonardo, confuso. Prima che potessi rispondere, il mondo si dissolse in una macchia di colori e suoni, e il tempio svanì mentre venivi trascinato nel tempo.

Atterri nel giardino, è notte fonda, c’è una fitta nebbia e luci inquietanti tremolano in lontananza. La villa incombe davanti a te. Leonardo si guarda intorno, con gli occhi spalancati per la meraviglia.

![Vecchia villa mostrata in una fitta nebbia](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/mansion.jpeg)


### Fuga dai cani

Senti abbaiare e il rumore di cani che corrono verso di te. Ti rivolgi a Leonardo: «Dobbiamo entrare, subito!»

![In fuga dai cani](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/dogs.jpeg)

Quando raggiungi la porta della villa, questa si spalanca e due inservienti escono di corsa. Dopo averti squadrato, ti fanno cenno di seguirli.

Ti trovi faccia a faccia con Ada Lovelace, i cui occhi brillano di curiosità.

### L’incontro con Ada e Charles

**Ada:** «Ah, era ora che arrivassi», disse calorosamente. «Abbiamo bisogno che tu faccia una commissione.»

**Tu:** «Era ora», continui a ripetere. «Dinocrate ha detto lo stesso, ma non capisco cosa intendi.»

**Ada:** «Zitto, non c’è tempo per questo ora, dobbiamo parlare del dispositivo che hai in mano. Charles, raccontagli tutto…»

**Tu:** «Ma…»

![Ada Lovelace e Charles Babbage che lavorano a un dispositivo](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada.jpeg)

Charles Babbage si fa avanti, esaminando lo Scarabeo del Tempo che hai in mano. «Questo dispositivo è notevole, ma è un po’ difettoso, vero? L’avrai notato, ne sono sicuro.»

Leonardo annuì: «Sì, si comporta in modo strano.»

**Ada:** «Il dispositivo non è ancora pronto, dobbiamo dotarlo di maggiori funzionalità. Dobbiamo renderlo più intelligente, più consapevole del mondo che lo circonda. L’idea è che sia in grado di recuperare informazioni da diversi periodi temporali e utilizzarle per generare risposte accurate e pertinenti. Puoi aiutarci?»

**Tu:** «Certo, sembra che dobbiamo _aumentare_ le risposte del dispositivo con i dati, ha senso.»

**Ada:** «Parliamo di un concetto che vorrei chiamare RAG, ovvero Retrieval-Augmented Generation.»

## Interagisci con Ada Lovelace

Se vuoi interagire con Ada, esegui la app [Personaggi](/app/README.md). 

> [!IMPORTANT]
> Questo è interamente frutto di fantasia: le risposte sono generate dall’intelligenza artificiale.
> [Dichiarazione di responsabilità sull’IA](../../README.md#responsible-ai-disclaimer)

![Ada Lovelace](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada-2.jpeg)

**Passaggi**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante "Open in Browser".
5. Chatta con Montezuma.

Per una spiegazione più dettagliata della app, vedi [Spiegazione dettagliata della app](/lessons/01-intro-to-genai/translations/README.it.md#interagisci-con-dinocrate).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l’[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## Sfide note coi Large Language Model (LLM)

**Ada:** «Iniziamo parlando dell’IA che utilizzeremo per alimentare il dispositivo. Ci affideremo a “modelli di IA” abbinati a un sistema di recupero dati per migliorare la qualità della risposta.»

Innanzitutto, è necessario affrontare alcune sfide prima di addentrarsi nei dettagli dei RAG. Questi modelli, addestrati su vasti dati testuali, possono produrre risposte pertinenti e corrette. Tuttavia, come qualsiasi fonte di dati, il loro output può essere impreciso, incompleto o fuorviante a causa di vari fattori.

- **Fonti obsolete:** i dati utilizzati per addestrare il modello potrebbero essere obsoleti e non più accurati.
- **Informazioni errate o imprecise:** le fonti utilizzate per addestrare il modello potrebbero contenere informazioni errate o fuorvianti, come fake news od opinioni di parte.
- **Fonti non autorevoli:** il modello potrebbe non essere in grado di distinguere tra fonti autorevoli e non autorevoli nei suoi dati di addestramento, il che porta a informazioni inaffidabili.

Questo rende difficile stabilire se le informazioni generate da un LLM siano corrette o meno. È qui che entra in gioco il RAG.

**Tu:** «Quindi devo assicurarmi che il dispositivo possa fornire informazioni accurate, anche quando non è sicuro della risposta?»

**Ada:** «Sì, l’idea è questa. Combinando i punti di forza dei metodi basati sul recupero e dei modelli generativi, otteniamo un sistema di IA migliore.»

## Concetti fondamentali del Retrieval-Augmented Generation (RAG)

**Ada:** «Ah sì, è il momento di parlare specificamente di RAG. Cominciamo con alcune nozioni di base.»

La Retrieval-Augmented Generation (RAG) è una tecnica potente che combina i punti di forza di due diversi approcci all’elaborazione del linguaggio naturale: metodi basati sul recupero e modelli generativi. Questo approccio ibrido consente la generazione di risposte contestualmente rilevanti e ricche di contenuto, contribuendo ad alleviare alcune delle sfide note degli LLM.

Al suo interno, la RAG si basa su due componenti principali: un **retriever** e un **generator**.

- **Il retriever:** è responsabile della ricerca di informazioni rilevanti da fonti di dati esterne che possono essere utilizzate per migliorare le risposte generate dall’IA, come un motore di ricerca. Queste informazioni possono essere sotto forma di testo, immagini o qualsiasi altro tipo di dato pertinente al contesto della conversazione, sebbene il testo sia il tipo di dati più comunemente utilizzato.
- **Il generator:** prende le informazioni recuperate e le usa per generare una risposta contestualmente rilevante e informativa.

Ecco uno schema che illustra come funziona un sistema RAG:

![Schema di un sistema RAG](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/rag.png)

1. **Input utente:** L’utente pone una domanda.
2. **Retriever:** Il componente retriever cerca informazioni rilevanti utilizzando una o più basi di conoscenza.
3. **Prompt aumentato:** Le informazioni recuperate vengono combinate con la domanda dell’utente e il contesto per creare un prompt aumentato.
4. **Generator:** l’LLM utilizza il prompt aumentato per generare una risposta.

Questa combinazione consente di ottenere risposte più precise e pertinenti, utilizzando i dati forniti dall’utente anziché basarsi sui dati di training del modello.

**Ada:** «Domande?»

**Tu:** «Quindi il retriever trova le informazioni e il generator le usa per generare una risposta?»

**Ada:** «Esatto, ci stai prendendo la mano.»

## Integrazione di fonti di dati esterne

**Ada:** «Ora che abbiamo trattato le basi di RAG, parliamo di come integrare fonti di dati esterne nella tua applicazione di IA.»

L’integrazione di fonti di dati esterne nella tua applicazione di intelligenza artificiale può essere effettuata in diversi modi, a seconda del tipo di dati che desideri utilizzare e della complessità del meccanismo di recupero. Ecco alcuni metodi comuni:

- **API:** Molte fonti di dati esterne forniscono API che consentono di accedere ai dati in modo programmatico. È possibile utilizzare queste API per recuperare informazioni in tempo reale e utilizzarle per migliorare le risposte generate dall’IA.
- **Database:** Se si dispone di una grande quantità di dati da utilizzare per il recupero, è possibile memorizzarli in un database ed eseguirne le query in base alle esigenze. Questo può essere utile per i dati strutturati a cui è necessario accedere rapidamente.

Una volta scelto un metodo per integrare fonti di dati esterne, potrebbe essere necessario valutare anche come preelaborare e formattare i dati in modo che possano essere facilmente utilizzati dal modello di IA. Questo può comportare la pulizia dei dati, la loro conversione in un formato appropriato (come testo normale o Markdown) o la loro suddivisione in blocchi più piccoli per facilitarne il recupero.

> [!NOTE]
> Quando si integrano fonti di dati esterne nella propria applicazione di IA, è importante considerare le implicazioni in termini di privacy e sicurezza legate all’accesso e all’archiviazione dei dati. Assicurati di disporre delle autorizzazioni e delle misure di sicurezza necessarie per proteggere i dati e rispettare tutte le normative pertinenti.

Se si utilizza un database, è opportuno riflettere anche su come *cercare i dati* per recuperare le informazioni più rilevanti. Questo può essere fatto utilizzando la ricerca per parole chiave, la ricerca full-text o tecniche più avanzate come la ricerca semantica o la ricerca vettoriale, che potrebbero richiedere un’indicizzazione specifica. Parleremo delle tecniche di ricerca avanzate in una lezione futura.

**Tu**: «Puoi spiegare termini come API e database in termini più adatti agli anni ’60 dell’Ottocento?»

**Ada**: «Naturalmente, un’API è come un messaggero che consegna un messaggio da un posto all’altro, mentre un database è come una biblioteca in cui archivi tutti i tuoi libri.»

**Tu**: «Ah, capisco, ha senso.»

## Aumentare il prompt

**Ada:** «Mi segui ancora? Bene, passiamo al passaggio successivo: proviamo a migliorare il prompt inviato al modello di IA.»

**Ada:** «Una volta impostato un modo per estrarre informazioni dai dati, è possibile aggiungerlo al prompt del modello di IA. Basta combinare le informazioni recuperate nel testo di input con un contesto o una guida aggiuntivi per guidare la risposta dell’IA.»

Ad esempio, se stai creando un’app per rispondere a domande sulle automobili, potresti avere un prompt come il seguente:

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

Fornendo al modello di IA contesto e informazioni aggiuntive, è possibile contribuire a guidare il processo di generazione e garantire che le risposte siano accurate e pertinenti all’argomento in questione.

> [!TIP]
> Nota questa parte del prompt: `If there's not enough data in provided sources, say that you don't know.`. Questo è importante per evitare che l’IA generi informazioni errate quando non ci sono dati sufficienti per fornire una risposta affidabile. Questa tecnica è chiamata “escape hatch” ed è una buona pratica per garantire la qualità del contenuto generato.

La RAG può essere considerata come una forma avanzata di *prompt engineering*.

### Codice di esempio

**Ada:** «La pratica rende perfetti, quindi applichiamo ciò che abbiamo imparato con un esempio. Costruiremo un semplice sistema di recupero dati in un’app JavaScript utilizzando un file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) di dati di auto ibride e un algoritmo di ricerca di base per estrarre informazioni rilevanti in base alla domanda di un utente.»

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

Puoi trovare questo codice nel file [`example/rag-cars.js`](/lessons/05-rag/example/rag-cars.js) insieme al file [`hybrid.csv`](/lessons/05-rag/example/hybrid.csv) contenente i dati utilizzati per il recupero.

**Ada:** «Una volta eseguito questo codice, dovresti vedere i dati trovati nel file CSV dal retriever, formattati come una tabella Markdown, seguiti dalla risposta generata dall’IA alla domanda. Prova a modificare la domanda per vedere come cambiano i dati recuperati e la risposta. Puoi anche provare a porre domande su argomenti non correlati per vedere come il modello di IA le gestisce.»

```text
Example of the output:

Found 1 matches:
| Person | Time Period | Description |
|---|---|---|
| Leonardo Da Vinci | 15th century | Italian polymath known for his art and inventions. |
| Isaac Newton | 17th century | English mathematician and physicist who formulated the laws of motion and universal gravitation. |
```

**You:** «Fantastico, capisco come possa essere utile quando si usa il dispositivo, o meglio, come lo è già stato o lo sarà, il viaggio nel tempo è fonte di confusione *sigh*.»

**Ada:** «Bene, stai andando alla grande. Passiamo al passaggio successivo.»

## Compito - Aiuta Ada e Charles

Dopo aver scoperto RAG, sei pronto ad aiutare Ada e Charles con il loro dispositivo. Tuttavia, a un esame più attento, il dispositivo ti sembrerà familiare.

**Tu:** «Scarabeo del Tempo, sai che cos’è questo?»

**Scarabeo del Tempo:** «Certo, sono io, o lo sarò. Però mi mancano alcune parti. A pensarci bene, mi mancano un sacco di parti, non ho ancora nemmeno un guscio.»

**Ada:** «Lo Scarabeo del Tempo è un dispositivo che permette di viaggiare nel tempo e nello spazio, una volta che lo avremo fatto funzionare correttamente. Come dicevo, dobbiamo aggiungergli una nuova funzionalità, un modulo di Retrieval-Augmented Generation (RAG). Questo ci aiuterà a recuperare informazioni e il contesto necessario da diversi periodi storici durante il viaggio. Vogliamo assicurarci di fare riferimento a ogni tipo di fonte, Wikipedia è un buon punto di partenza.»

**Tu:** «Cosa vuoi che faccia?»

**Ada:** «Ecco un codice di esempio che recupera informazioni testuali su Tim Berners-Lee da Wikipedia. Tim un giorno sarà molto importante.»

```javascript
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee');
const data = await response.json();
const text = Object.values(data.query.pages)[0]?.extract;
```

**You:** «Immagino di non essere l’unico ad essere stato nel futuro?»

**Ada:** «...»

## Soluzione

[Soluzione](/lessons/05-rag/solution/rag-www.js)

## Verifica delle conoscenze

**Domanda**: Qual è il ruolo del retriever in un sistema RAG?

A. Il retriever genera risposte in base ai dati di input.
B. Il retriever genera informazioni rilevanti in base ai dati di training del modello.
C. Il retriever trova informazioni rilevanti da fonti di dati esterne.

[Soluzione del quiz](/lessons/05-rag/solution/solution-quiz.md)

## Risorse per lo studio autonomo

- [Retrieval-Augmented Generation and Indexes](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
- **App di esempio**:
  * [Serverless AI Chat with RAG](https://github.com/Azure-Samples/serverless-chat-langchainjs/)
  * [Ask Youtube: A RAG-based Youtube Q&A API](https://github.com/Azure-Samples/langchainjs-quickstart-demo)
- [Full-length workshop: Create your own ChatGPT with RAG](https://moaw.dev/workshop/gh:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md)

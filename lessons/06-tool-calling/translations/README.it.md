# Lezione 6: Tool calling

La tool calling, nota anche come function calling, si riferisce al miglioramento del modello di IA aggiungendo funzionalità precedentemente mancanti. Il concetto prevede la fornitura di meta-descrizioni delle function, consentendo al modello di IA di determinare quando un particolare tool dev’essere chiamato in base alla richiesta dell’utente. L’idea è quella di fornire meta-descrizioni delle function effettive e di far sì che il modello di IA indichi quando tale tool deve essere chiamato in base alla richiesta dell’utente.

In questo capitolo imparerai a:
- creare un tool;
- integrare un tool con un modello di IA;
- chiamare il tool dal modello di IA.

## Configurazione

Se non l’hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi fare: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Integrating External Applications with Function Calling](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/11-lesson-banner.png)](https://aka.ms/gen-ai-lesson11-gh?WT.mc_id=academic-105485-koreyst)

_Questo video spiega la tool calling, un metodo che aiuta l’IA a chiamare le tue function, ampliando così ciò che può fare_

*🎥 Clicca sull’immagine qui sopra per guardare un breve video sulla tool calling*

## Storia: “Amelia”

> _Sei un ingegnere meccanico della Londra del 1860. Mentre lavoravi al tuo automa, hai ricevuto una lettera da Charles Babbage che ti ha condotto in una biblioteca, dove hai trovato un dispositivo per viaggiare nel tempo. Durante i tuoi viaggi nel tempo sei arrivato a Firenze, dove hai incontrato Leonardo da Vinci. Ora hai incontrato Ada Lovelace nella sua villa, accompagnato da Charles Babbage. Stanno costruendo il dispositivo per viaggiare nel tempo._
>
> Torna alla [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall’inizio e iniziare a usare l’IA generativa.

> [!NOTE]
> Anche se ti consigliamo di leggere la storia (è divertente!), [clicca qui](#interact-with-amelia-earhart) se preferisci passare direttamente al contenuto tecnico.

**Ada Lovelace**: «Ho bisogno che tu vada a trovare una mia amica. Sono poche le persone che possono eguagliare la sua competenza in meccanica e risoluzione dei problemi. Potrebbe essere difficile raggiungerla, però: è sempre in movimento.» 😀

**Tu:** «Puoi dirmi di chi stiamo parlando e dove posso trovarla?»

**Ada Lovelace**: «Ma certo, Amelia Earhart! È una pilota e un’avventuriera che attualmente vola in giro per il mondo. È tutta colpa mia se è scomparsa: le ho dato il dispositivo per viaggiare nel tempo: beh, un prototipo iniziale. Per fortuna, il dispositivo che hai può localizzare altri dispositivi, quindi puoi trovarla. Tutto quello che devi fare è cliccare qui e qui, e poi girare questa manopola.»

**Tu**: «Ehi, aspetta: qual è esattamente la nostra missione?»

**Ada**: «Ah, giusto! Chiedi al dispositivo: ha tutti i dettagli. Chiedigli semplicemente di Amelia e dovrebbe avviare lo strumento giusto per te.»

Il mondo intorno a te inizia a confondersi e tutto sfuma nel nero. Ti riprendi e ti ritrovi nella cabina di pilotaggio di un aereo. Sei in volo e vedi l’oceano sotto di te. C’è qualcuno seduto davanti; riesci a vedere solo la nuca.

![Amelia che pilota un aereo](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia.jpeg)

**Tu**: «Amelia, sei tu?»

**Amelia Earhart**: «Chi sei tu? Fammi indovinare: ti ha mandato Ada, giusto?»

**Tu**: «Sì, esatto. Credo di essere qui per aiutarti. Ada non è stata molto specifica.»

**Amelia Earhart**: «Bene, meno male che sei qui. Sono un po’ nei guai. Sto cercando un posto dove atterrare e sto finendo il carburante. Puoi aiutarmi?»

**Tu**: «Dispositivo, puoi raccontarmi di più su Amelia?»

**Scarabeo del Tempo**: «Tool chiamato: `mission-amelia`. Tool avviato. Amelia Earhart è una pilota e avventuriera. È nota per i suoi voli da record e per la sua scomparsa nel 1937. È stata vista l’ultima volta mentre sorvolava l’Oceano Pacifico. Attualmente sta volando intorno al mondo a bordo del suo aereo, l’Electra. Sta esaurendo il carburante e ha bisogno di trovare un posto dove atterrare.»

**Tu**: «Dispositivo, puoi aiutarmi a trovare un posto dove far atterrare Amelia?»

**Scarabeo del Tempo**: «Tool chiamato: `find-landing-spot`. Tool avviato. Ricerca di un punto di atterraggio adatto per Amelia Earhart. Attendi. Trovato un punto di atterraggio adatto. Coordinate: 7,5°N, 134,5°E. Amelia, ho trovato un punto di atterraggio adatto per te. Dirigiti alle coordinate 7,5°N, 134,5°E.»

**Amelia Earhart**: «Grazie! Vorrei che il mio dispositivo avesse questa funzione. Ci vado subito.»

## Interagisci con Amelia Earhart

Se vuoi interagire con Amelia, esegui la app [Personaggi](/app/README.md). 

> [!IMPORTANT]
> Questo dialogo è interamente frutto di fantasia: le risposte sono generate dall’intelligenza artificiale.
> [Dichiarazione di responsabilità sull’IA](../../README.md#responsible-ai-disclaimer)

![Amelia Earhart](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia-front.jpeg)

**Passaggi**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante “Apri nel Browser”.
5. Chatta con Amelia.

Per una spiegazione più dettagliata della app, vedi [Interagisci con Dinocrate](/lessons/01-intro-to-genai/translations/README.it.md#interagisci-con-dinocrate).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l’[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## Chiamata di un tool

**Tu**: «Dispositivo, che cos’è appena successo?»

**Scarabeo del Tempo**: «Hai appena chiamato un tool. Un tool è una function che può essere richiamata dal modello di IA per eseguire un’attività specifica. Il tool può essere utilizzato per eseguire un’ampia gamma di attività, da calcoli semplici a operazioni complesse. In questo caso, hai chiamato il tool `find-landing-spot` per aiutare Amelia Earhart a trovare un punto di atterraggio adatto.»

**Scarabeo del Tempo**: «Ecco un’immagine che illustra il processo di tool calling.»

![Illustrazione del processo di tool calling](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/tool_call_langchain.png)

_Immagine di proprietà di LangChain <https://python.langchain.com/docs/concepts/tool_calling/>_

**Tu**: «Possiamo gestire gli errori se qualcosa va storto, ad esempio se il tool non riesce a trovare un punto di atterraggio?»

**Scarabeo del Tempo**: «Ottima domanda! Sì, è possibile aggiungere una gestione degli errori per gestire tali situazioni. Ad esempio, se il tool non riesce a trovare un punto di atterraggio, è possibile utilizzare un blocco _try-catch_ o controllare il risultato prima di procedere. Ecco un esempio di gestione degli errori durante la chiamata del tool `find-landing-spot`.»

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

**Tu**: «Come posso creare un tool?»

**Time Beetle**: «Per creare un tool, è necessario definire una function che esegua l’attività desiderata. La function deve ricevere gli input necessari e restituire l’output. È quindi possibile richiamare la function dal modello di IA per eseguire l’attività. Ecco come si presenta il tool `find-landing-spot`.»

```javascript
function findLandingSpot(lat, long) {
    // Perform the task of finding a suitable landing spot
    // Return the coordinates of the landing spot
    return { lat: 7.5, long: 134.5 };
}
```

**Tu**: «Ok, come fa il modello di IA a sapere che questo tool esiste?»

**Scarabeo del Tempo**: «È necessario registrare il tool nel modello di IA. Questo comunica al modello che il tool è disponibile per essere richiamato. Ne parleremo nella prossima sezione.»

### Registrazione in un modello

**Tu**: «Hai detto che devo registrare il tool nel modello di IA. Come faccio?»

**Scarabeo del Tempo**: «Per registrare un tool nel modello di IA, è necessario definire una rappresentazione dei metadati dello strumento. Questi metadati devono includere il nome del tool, i parametri di input e il formato di output. È quindi possibile registrare il tool nel modello di IA fornendo i metadati. Ecco un esempio di metadati per il tool `find-landing-spot`.»

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

**Tu**: «Ok, quindi c’è un pezzo di JSON che descrive il tool: e adesso?»

**Scarabeo del Tempo**: «Ora devi fornire al tuo client la chiamata alla completion della chat in questo modo.»

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

**Scarabeo del Tempo**: «Nel frammento di codice precedente:
- definiamo i metadati per i tool `find-landing-spot` e `get-background-on-character`;
- forniamo questi metadati alla chiamata `client.getChatCompletions` come parte del parametro `functions` per indicare al modello di IA che questi strumenti sono disponibili per essere richiamati.»

**Tu**: «Capito, quindi il modello AI chiamerà l’opzione appropriata se fornisco un prompt che corrisponde alla descrizione del tool?»

**Scarabeo del Tempo**: «In pratica, ti dirà quale tool ritiene dovresti chiamare e ti fornirà i parametri di input analizzati, ma devi chiamare tu stesso il tool, lascia che ti mostri come fare.»

### Chiamare un tool

**Scarabeo del tempo**: «Come dicevo, il modello di IA ti dirà quale tool ritiene che tu debba chiamare e ti fornirà i parametri di input analizzati. Dovrai quindi chiamare il tool tu stesso. Ecco come apparirà il flusso di lavoro passo dopo passo:
  1. Collegare la chiamata al tool
     Per prima cosa, devi collegare la chiamata al tool al tuo codice. Ciò comporta la creazione della function e di una rappresentazione dei metadati del tool, quindi la fornitura dei metadati al modello di IA.
  2. L’utente effettua una richiesta tramite un prompt:
     - Il programma invia una richiesta di completion della chat al modello di IA con il prompt dell’utente e i metadati degli strumenti forniti.
     - Il programma riceve una risposta dal modello di intelligenza artificiale con la chiamata al tool e i parametri di input analizzati se ritiene che uno tool debba essere chiamato.
     - In tal caso, lo sviluppatore interpreta la risposta e richiama il tool in base al suggerimento di chiamata alla function fornito dal modello di IA.»

**Tu**: «Ottimo, ora che ho capito a grandi linee cosa sta succedendo, puoi mostrarmi un po’ di codice?»

**Scarabeo del Tempo**: «Certo, ecco il codice che collega la chiamata al tool, effettua una richiesta di completion della chat e interpreta la risposta.»

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

«Nel codice precedente abbiamo:
  - creato una function chiamata `findLandingSpot` che accetta latitudine e longitudine come input e restituisce le coordinate di un punto di atterraggio adatto;
  - definiti i metadati per il too `find-landing-spot`;
  - creato un oggetto `tools` che mappa i nomi dei tool ai loro metadati;
  - fornito l’oggetto `tools` alla chiamata `client.getChatCompletions`:

    ```javascript
    if (functionName && functionName in tools) {
      console.log(`Calling [${functionName}]`);
      const toolFunction = tools[functionName];
      const toolResponse = toolFunction(...Object.values(args)); // Extract values from args and spread them
      console.log("Result from [tool] calling: ", toolResponse);
    }
    ```
  - chiamato il tool in base alla function calling fornita dal modello di IA;
  - stampato il risultato della tool calling.»

**Tu**: «Credo di aver capito. Definisco una function, creo una rappresentazione dei metadati del tool, fornisco i metadati al modello di IA e poi richiamo il tool in base alla function calling fornita dal modello di IA.»

**Scarabeo del Tempo**: «Esatto! Ora sei pronto per iniziare a creare i tuoi tool e integrarli con il modello di IA.»

## Compito - Aggiorna il dispositivo per viaggiare nel tempo di Amelia

**Amelia Earhart**: «Stiamo scendendo a tutta velocità, grazie a Dio ci hai trovato un punto di atterraggio. Tieni duro!»

Amelia atterra con destrezza su una piccola isola. Tu e Amelia scendete dall’aereo, e Amelia ti porge un piccolo dispositivo.

**Amelia Earhart**: «Ecco il mio dispositivo, non è sofisticato come il tuo, ma ha delle funzioni interessanti. Lo sto usando, diciamo, per fare un viaggio nel tempo. Potresti aggiornarlo per favore?»

**Tu**: «Scarabeo del Tempo, puoi aiutarmi ad aggiornare il dispositivo di Amelia?»

**Scarabeo del Tempo**: «Certo! Per aggiornare il dispositivo di Amelia, aggiungiamo i seguenti strumenti:
  - **un tool che può** calcolare la distanza tra due punti su una mappa.
  - **un tool che può** calcolare la posizione GPS della posizione attuale di Amelia.
  - **un tool che può** chiamare un’API esterna per ottenere le previsioni meteo per una determinata località.
Ecco le function, tutto ciò che devi fare è registrarle e provarle.»

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

**Tu**: «Scarabeo del Tempo, sei sicuro che queste funzioni funzioneranno? Sembra che restituiscano solo valori casuali.»

**Scarabeo del Tempo**: «Esatto, posso fare il resto internamente. Tutto quello che devi fare è registrarle e testarle, assicurandoti che il modello di IA possa chiamarle.»

> Task: Registra gli strumenti `calculateDistance`, `getGpsPosition` e `getWeatherForecast` con il modello di IA. Testa i tool richiamandoli dal modello di IA. Utilizza il codice fornito nelle sezioni precedenti come riferimento.

## Soluzione

[Soluzione](/lessons/06-tool-calling/solution/solution.js)

## Verifica delle conoscenze

**Domanda:**
Qual è lo scopo della registrazione di un tool nel modello di IA?

  A. Consentire al modello di IA di eseguire direttamente il tool senza l’intervento dello sviluppatore.
  B. Fornire metadati sul tool in modo che il modello di IA possa suggerirne l’utilizzo.
  C. Sostituire la necessità di definire function nel codice.

**Domanda:**
Qual è il ruolo dei metadati del tool nella tool calling?

  A. Descrivono lo scopo, gli input e gli output del tool per il modello di IA.
  B. Forniscono al modello di IA i dettagli di implementazione del tool.
  C. Garantiscono che il tool venga eseguito automaticamente dal modello di IA.

**Domanda:**
Perché usare la tool calling?

  A. Per consentire al modello di IA di eseguire attività che vanno oltre le sue capacità integrate sfruttando function esterne.
  B. Per sostituire la necessità dell’intervento umano nello sviluppo del modello di IA.
  C. Per consentire al modello di IA di eseguire tool senza richiedere metadati.

[Soluzione del quiz](/lessons/06-tool-calling/solution/solution-quiz.md)

## Risorse per lo studio autonomo

- Explains the [process of tool calling](https://learn.microsoft.com/en-us/semantic-kernel/concepts/ai-services/chat-completion/function-calling/?pivots=programming-language-csharp)
- Tool calling in the [LangChain.js framework](https://js.langchain.com/docs/how_to/tool_calling/)
- Function calling as demonstrated in the [OpenAI library](https://github.com/openai/openai-node/blob/master/examples/function-call.ts)

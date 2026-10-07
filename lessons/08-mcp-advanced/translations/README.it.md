# Lezione 8: Miglioramento dei client MCP coi Large Language Model

Nella lezione precedente, hai creato un server MCP e hai esplorato come aiuta a disaccoppiare la logica di un’applicazione di intelligenza artificiale dalle sue funzionalità. Abbiamo mostrato come aggiungere strumenti e risorse come funzionalità e come il server potesse essere accessibile tramite uno strumento di ispezione o un client personalizzato. Questo era solo l’inizio. In questo capitolo, faremo un ulteriore passo avanti integrando un Large Language Model (LLM) nel client, sbloccando un’esperienza utente più potente e intuitiva.

In questo capitolo imparerai a:
- potenziare il tuo client con un LLM;
- utilizzare il tuo client migliorato per convertire una risposta del server MCP in un tool;
- sfruttare il tuo client migliorato per creare una user experience più naturale.

## Configurazione

Se non l’hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi fare: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Guarda un breve video sul MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_Questo video illustra il Model Context Protocol._

*🎥 Clicca sull’immagine qui sopra per guardare un breve video sul MCP*


## Storia: “Hedwig ‘Hedy’ Lamarr”

> [!NOTE] 
> _La nostra storia finora. Sei un ingegnere meccanico della Londra del 1860. Stavi lavorando al tuo automa e hai ricevuto una lettera da Charles Babbage che ti ha portato in una biblioteca dove hai trovato un dispositivo per viaggiare nel tempo. Durante i tuoi viaggi nel tempo sei finito in molti luoghi della storia. Ora stai lavorando a stretto contatto con Ada Lovelace, con la sua villa come base operativa, ed è qui che la storia continua._
>
> Torna alla [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall’inizio e iniziare a usare l’IA generativa.

> [!NOTE]
> Anche se ti consigliamo di leggere la storia (è divertente!), [clicca qui](##interagisci-con-hedy-lamarr) se preferisci passare direttamente al contenuto tecnico.

Ancora una volta sei tornato alla villa di Ada. Questa volta Ada ti ha accolto al cancello principale.

**Ada Lovelace**: «Beh, com’è andata?»

**Tu**: «Bene, penso che siamo riusciti a far funzionare questa app. Ecco, guarda tu stessa», dici e passi il dispositivo ad Ada.

**Ada Lovelace**: Prende il dispositivo, lo esamina attentamente e borbotta tra sé e sé: «Mmm hm, ah capisco, sì, sì no, questo non va bene. Manca di una certa finezza.»

**Tu**: «Ci stavo pensando anch’io, dobbiamo poter digitare o parlare con lui, giusto?»

**Ada Lovelace**: «Bene, conosco proprio la persona giusta per aiutarci. Anzi, verrò con te questa volta, è passato troppo tempo dall’ultima volta che ci siamo visti. *Scarabeo del Tempo, Hollywood, per favore, 1940, residenza di Hedy Lamarr*.»

Tutto sfuma nel nero. Un vortice di colori ti attraversa e, pochi istanti dopo, la tua vista inizia a focalizzarsi. Vedi un uomo seduto accanto a un pianoforte, che parla animatamente con una donna dai capelli castano scuro e ricci. Entrambi gesticolano eccitati mentre parlano.

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedy-invention.jpeg)

La donna si volta verso Ada che era in piedi accanto a te per esclamare «Ada, sei tu, è passato troppo tempo.»

**Ada Lovelace**: «Carissima Hedwig, suppongo che tu stia lavorando alla tua ultima invenzione?»

**Hedy Lamarr**: «Sì, in effetti George e io pensiamo di aver scoperto qualcosa di interessante: il “salto di frequenza”, ma probabilmente non dovrei più dirlo, chissà chi sta ascoltando.»

**Ada Lovelace**: «Oh, intendi lui», indicando te, «è impegnato nella sua avventura.»

**Hedy Lamarr**: «Capisco, cosa posso fare per te?»

**Ada Lovelace**: «In realtà, abbiamo bisogno che questo dispositivo funzioni un po’ meglio. Avete qualche idea?»

**Hedy Lamarr**: Prende il dispositivo e lo osservò da diverse angolazioni. «Dici di aver già separato le funzionalità dalla parte di comunicazione?»

**Ada Lovelace**: «Sì, sì, l’abbiamo fatto.»

**Hedy Lamarr**: «Bene, allora renderei la parte relativa alla comunicazione un po’ più intelligente. Questo mi fa pensare a una conversazione che ho avuto con un cadetto della Marina mentre cercavo di vendere titoli di guerra. Credo si chiamasse Minsky. “Che aspetto ha l’intelligenza umana in una macchina?” era l’argomento. Ho la sensazione che un giorno farà qualcosa di grandioso in questo campo. Quindi sì, dategli più intelligenza.»

**Ada Lovelace**: «Bene, hai sentito la signora Lamarr, mettiti al lavoro.»

**Tu**: «Scarabeo del Tempo, come possiamo fare?»

**Scarabeo del Tempo**: «È possibile migliorare il client creato in precedenza integrando un Large Language Model o LLM.»

> Hedy Lamarr è stata una figura straordinaria, nota sia per la sua fama hollywoodiana che per i suoi straordinari contributi alla tecnologia.
>
> Tuttavia, oltre alla sua carriera di attrice, Lamarr è stata anche una brillante inventrice. Durante la seconda guerra mondiale, inventò insieme al compositore George Antheil un sistema di guida radio per i siluri Alleati. Questo sistema utilizzava la tecnologia a spettro diffuso e a salto di frequenza per impedire alle potenze dell’Asse di interferire con i segnali. Sebbene non fosse utilizzato durante la guerra, questa tecnologia divenne in seguito la base delle moderne comunicazioni wireless, tra cui Wi-Fi, Bluetooth e GPS.
>
> Il contributo di Lamarr alla tecnologia non fu pienamente riconosciuto durante la sua vita, ma oggi è celebrata come una pioniera nel settore. La sua storia è un affascinante mix di glamour e genialità, a dimostrazione che la vera innovazione può nascere dai luoghi più inaspettati.
> Per saperne di più su [Hedy Lamarr](https://en.wikipedia.org/wiki/Hedy_Lamarr) clicca qui e su [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky) clicca qui.

## Interagisci con Hedy Lamarr

Se vuoi interagire con Hedy, esegui la app [Personaggi](/app/README.md).

> [!IMPORTANT]
> Questo dialogo è interamente frutto di fantasia: le risposte sono generate dall’intelligenza artificiale.
> [Dichiarazione di responsabilità sull’IA](../../README.md#responsible-ai-disclaimer)

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedylamarr.jpeg)

**Passaggi**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante “Apri nel Browser”.
5. Chatta con Hedy.

Per una spiegazione più dettagliata della app, vedi [Interagisci con Dinocrate](/lessons/01-intro-to-genai/translations/README.it.md#interagisci-con-dinocrate).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l’[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## Aggiungere un Large Language Model a un client

**Scarabeo del Tempo**: «Come dicevo, parliamo di come creare un client che utilizzi un Large Language Model (LLM) per interagire con il server MCP. I vantaggi sono una migliore esperienza utente e la possibilità di utilizzare il linguaggio naturale per interagire con il server.

Ecco come funzionerebbe ad alto livello:
  1. Il client interagisce con il server MCP per richiedere informazioni sui tool e le risorse disponibili.
  2. Al momento del prompt, l’utente scrive un prompt in linguaggio naturale, che viene poi inviato all’LLM nel client.
  3. Il client determina quale tool o quale risorsa chiamare in base al prompt e agli strumenti e alle risorse disponibili.

Sembra fattibile, vero?»

**Tu**: «Sì, è vero! Ma come si fa?»

**Scarabeo del Tempo**: «Miglioriamo il client creato in precedenza, descrivendo le modifiche al codice in passaggi:

1. Effettuare una chiamata al server per richiedere tool e risorse disponibili.
2. Convertire la risposta di tool e risorse in uno schema di tool utilizzabile dall’LLM.
3. Istanziare il client OpenAI.
4. Effettuare una chiamata di completamento della chat a OpenAI, passando lo schema degli strumenti come parametro.
5. Determinare quale strumento chiamare in base alla risposta di OpenAI.
6. Chiamare lo strumento sul server utilizzando il client MCP.
7. Rispondere all’utente con il risultato.

Ecco tutti i passaggi nel codice:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

// create client instance
const transport = new StdioClientTransport({
  command: "node",
  args: ["server.js"]
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

await client.connect(transport);

// 1. make call to server, ask it for tools
const { tools } = await client.listTools();

// convert function
function toToolSchema(method, schema) {
  return {
    name: method,
    description: `This is a tool that does ${method}`,
    parameters: schema,
  };
}

// 2. convert the tools and resources response to a tools schema
const toolsForLLM = tools.map((tool) => {
  return toToolSchema(tool.method, tool.inputSchema);
});

// 3. instantiate openai client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
  temperature: 0.7,
});

// 4. make chat completion call to openai
const response = await openai.chat.completions.create({
  messages: [
    {
      role: "user",
      content: `I want to add 5 and 10. Please use the tool ${toolsForLLM}`,
    },
  ],
  functions: toolsForLLM,
  function_call: "auto",
});

// 5. figure out what tool to call based on the response from openai
const toolName = response.choices[0].message.function_call.name; // add
const args = response.choices[0].message.function_call.arguments; // { a: 5, b: 10 }

// 6. call the tool on the server
const result = await client.callTool({
  name: toolName,
  arguments: args,
});

// 7. respond to user
console.log(result); // 15
```

Nel codice precedente (concentrandoci sulle nostre aggiunte):
  - abbiamo creato una function `toToolSchema` che converte la risposta di tool e risorse in uno schema utilizzabile dall’LLM;
  - abbiamo chiesto al server i tool e le risorse disponibili;
  - abbiamo convertito la risposta di tool e risorse in uno schema utilizzabile dall’LLM;
  - abbiamo effettuato una chiamata di completion della chat alla nostra IA, passando i tool convertiti come parametro;
  - abbiamo capito quale tool chiamare in base alla risposta di OpenAI;
  - abbiamo chiamato il tool sul server utilizzando il client MCP;
  - abbiamo restituito il risultato all’utente.»

**Tu**: «Mi piace, è molto meglio! Posso usare il linguaggio naturale senza nemmeno sapere quali tool e risorse sono disponibili. Posso semplicemente chiedere all’IA di farlo per me.»

**Scarabeo del Tempo**: «Sono contento che ti piaccia. Va detto, però, che potresti voler decidere se mostrare solo una risposta degli strumenti o anche una risposta generica dall’LLM. Quindi, il tuo utente potrebbe trarre vantaggio dalla seguente strategia di risposta:
  - **solo tool** se la risposta dell’LLM è uno strumento, chiama lo strumento e restituisci il risultato.
  - **solo LLM** se la risposta dell’LLM non è uno strumento, restituisci la risposta dell’LLM “così com’è”.
  - **tool e LLM** se la risposta dell’LLM è uno strumento, chiama lo strumento ed effettua un’ulteriore chiamata all’LLM per ottenere la risposta generale. Restituisci sia il risultato dello strumento che la risposta dell’LLM.»

**Tu**: «Capisco. Qualcosa su cui riflettere. Ma è fantastico! Capisco quanto possa essere utile.»

## Assignment

**Ada Lovelace**: «Sembra che tu abbia apportato un notevole miglioramento. Per renderlo davvero utile, ho bisogno che tu crei un server e un client con le seguenti specifiche:
  - il server dovrebbe fornire i seguenti strumenti:
    - `characterDetails` con l’argomento `name`;
    - `place` con l’argomento `name`.
  - il client dovrebbe utilizzare un LLM.»

> [!TIP]
> Ad esempio, puoi dare al server la possibilità di recuperare informazioni da un’API web esterna, come Wikipedia:  
> `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
  
## Soluzione

[Soluzione](/lessons/08-mcp-advanced/solution/README.md)

## Verifica delle conoscenze

**Domanda:** Qual è il vantaggio di aggiungere un LLM al client?

A. È più facile da gestire.
B. Crea una conversazione più naturale tra l’utente e il server.
C. È meglio avere l’LLM sul server.

[Soluzione del quiz](/lessons/08-mcp-advanced/solution/solution-quiz.md)

## Summario

In questo capitolo hai imparato quanto segue:
- I client potenziati con un LLM offrono un’esperienza utente migliore.
- Le risposte da un server devono essere convertite in un formato che l’LLM possa comprendere come strumento.

## Risorse per lo studio autonomo

- [Building MCP Servers](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server/README.md)
- [Building a Client](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/02-client/README.md)
- [Building a Client with an LLM](https://github.com/microsoft/mcp-for-beginners/blob/main/03-GettingStarted/03-llm-client/README.md)

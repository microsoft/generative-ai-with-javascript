# Lezione 7: Model Context Protocol (MCP)

In questo capitolo imparerai a:
  - utilizzare il protocollo MCP (Model Context Protocol) per suddividere le funzionalità del server in un server e un client;
  - creare tool, risorse e prompt sul server;
  - utilizzare il server utilizzando sia lo strumento di ispezione che un client scritto.

## Configurazione

Se non l’hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi fare: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Guarda un breve video sul MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_Questo video illustra il Model Context Protocol._

*🎥 Clicca sull’immagine qui sopra per guardare un breve video sul MCP*

## Storia: “Scipione l’Africano”

> [!NOTE] 
> _La nostra storia finora. Sei un ingegnere meccanico della Londra del 1860. Stavi lavorando al tuo automa e hai ricevuto una lettera da Charles Babbage che ti ha portato in una biblioteca dove hai trovato un dispositivo per viaggiare nel tempo. Durante i tuoi viaggi nel tempo sei arrivato a Firenze, dove hai incontrato Leonardo Da Vinci. Sei anche stato nell’Impero azteco ed è qui che la storia continua._
>
> Torna alla [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall’inizio e iniziare a usare l’IA generativa.

> [!NOTE]
> Anche se ti consigliamo di leggere la storia (è divertente!), [clicca qui](#interagisci-con-scipione) se preferisci passare direttamente al contenuto tecnico.

_I nostri eroi, che hanno appena appreso dei tool e della “tool calling” durante il loro incontro con Amelia Earhart, stanno tornando alla villa di Ada Lovelace per discutere delle loro nuove conoscenze. Un lampo di luce avvolge i nostri eroi mentre lo scarabeo temporale li trasporta indietro nel presente di Ada. Si ritrovano nel seminterrato della villa di Ada Lovelace. Charles Babbage non è presente, ma Ada è lì ad aspettarli. È entusiasta di sapere del loro viaggio e delle conoscenze che hanno acquisito._

**Ada Lovelace**: «Bentornato! Spero che il tuo viaggio sia stato illuminante.»

**Tu**: «Lo è stato! L’incontro con la signora Earhart è stata un’esperienza davvero unica. Ci ha insegnato l’importanza dei tool e come usarli in modo efficace.»

**Ada Lovelace**: «Poche persone capiscono l’importanza dei tool meglio di Amelia. Immagino che tu abbia anche potenziato il suo Scarabeo del Tempo, vero?»

**Tu**: «Sì, l’abbiamo fatto! Quindi, qual è il prossimo punto all’ordine del giorno?»

**Ada Lovelace**: «La tool calling è sicuramente un concetto potente, che migliora il tuo dispositivo. Tuttavia, manca di una certa “finezza”, diciamo così. Dobbiamo imparare _come renderlo scalabile_, abbiamo bisogno di un protocollo. Conosco proprio la persona giusta per aiutarci in questo. Il suo nome è Scipione l’Africano, un grande stratega militare dell’antica Roma. Peccato che abbia dedicato tutto il suo tempo alla strategia militare, sono sicuro che sarebbe stato un ingegnere brillante. Vai.»

**Tu**: «Scipione l’Africano? Mi pare di ricordarlo dalle lezioni di storia.»

**Ada Lovelace**: «Bene allora, perché sei ancora qui? Il tempo è essenziale. Tic-tac…»

Il turbinio di luce ti avvolge di nuovo e ti ritrovi in ​​una grande stanza con un grande tavolo al centro. Le pareti sono decorate con mappe e strategie militari. Scipione l’Africano è in piedi al tavolo, immerso nei suoi pensieri. Alza lo sguardo quando entri. «Ada te misit/Ada ti ha mandato?»

![Scipione l’Africano](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/07-mcp/assets/scipio.png)

> Scipione l’Africano, noto anche come Publio Cornelio Scipione ll’Africano, fu un importante generale e statista romano vissuto dal 236 a.C. al 183 a.C. È noto soprattutto per il suo ruolo decisivo nella seconda guerra punica contro Cartagine e per la sua vittoria su Annibale nella battaglia di Zama nel 202 a.C.
> La sua vita e la sua carriera esemplificano le sue qualità di leadership, brillantezza strategica e resilienza. Il suo contributo alla sfera militare e politica di Roma lasciò un impatto duraturo sulll’Impero romano.

## Interagisci con Scipione

Se vuoi interagire con Scipione, avvia la app [Personaggi](/app/README.md).

> [!IMPORTANT]
> Questo dialogo è interamente frutto di fantasia: le risposte sono generate dall’intelligenza artificiale.
> [Dichiarazione di responsabilità sull’IA](../../README.md#responsible-ai-disclaimer)

![Scipione l’Africano](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/07-mcp/assets/scipio.png)

**Passaggi**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante “Apri nel Browser”.
5. Chatta con Amelia.

Per una spiegazione più dettagliata della app, vedi [Interagisci con Dinocrate](/lessons/01-intro-to-genai/translations/README.it.md#interagisci-con-dinocrate).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l’[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## La necessità di un Model Context Protocol (MCP)

**Scarabeo del Tempo**: «Il protocollo di cui parlava Ada si chiama Model Context Protocol (MCP). È un protocollo che consente di decentralizzare l’architettura dell’applicazione, rendendola più scalabile e resiliente, aggiungendo risorse su un server, o anche su più server, e scaricandole sul client. Lascio che sia Scipione a spiegarti il concetto.»

**Tu**: «Sì, ci ha mandato Ada. Ha detto che potevate aiutarci con un protocollo.»

**Scipione**: «Protocollo? Ho passato la vita a sviluppare strategie di battaglia. Suppongo che un protocollo sia come una strategia. Aiuta a organizzare e gestire le risorse in modo efficace e garantisce la comunicazione tra loro.

Parliamo di manovre di accerchiamento, infiltrazione e uso della cavalleria.»

**Tu**: «Ok, andiamo avanti?»

**Scipione**: «In battaglia, spesso utilizziamo manovre di accerchiamento per attaccare il nemico dai lati o dalle retrovie. Questo scompagina le sue formazioni e ci conferisce un vantaggio. Il motivo è che il nemico non è preparato a un attacco laterale e tende a concentrare tutta la sua attenzione sul fronte.»

**Tu**: «Mmm, immagino sia un po’ come avere unvapp che fa troppo lavoro in anticipo su un singolo server. Le manovre di aggiramento equivarrebbero a distribuire il carico su più server, giusto?»

**Scipione**: «Esatto! Distribuendo il carico, si riduce il rischio di un singolo punto di errore e si migliora la resilienza complessiva del sistema. Questo semplifica la gestione e l’utilizzo efficace delle risorse.»

## Model Context Protocol (MCP)

**Scarabeo del Tempo**: «Per aggiungere un ulteriore tassello al punto di Scipione, il Model Context Protocol (MCP) è un modo per decentralizzare l’architettura dell’applicazione. Permette di suddividere l’applicazione in componenti più piccoli e gestibili, che possono operare in modo indipendente. Ecco alcuni concetti importanti da tenere a mente:
  - **host MCP**: programmi come IDE, ad esempio GitHub Copilot in Visual Studio Code o Claude Desktop, che avviano una connessione al server o ai server;
  - **client MCP**: client di protocollo che mantengono connessioni 1:1 con i server MCP;
  - **server MCP**: programmi leggeri che espongono funzionalità specifiche tramite MCP;
  - **origini dati locali**: file, database e servizi sul computer a cui i server MCP possono accedere in modo sicuro;
  - **servizi remoti**: sistemi esterni disponibili su Internet (ad esempio, API) a cui i server MCP possono connettersi.

Ecco una rapida panoramica dell’architettura MCP:»

![Architettura del MCP](https://softchris.github.io/mcp-workshop/assets/images/diagram-791787b0cac57bc331c20e72b645d4f7.png)

## Componenti fondamentali del MCP

Per costruire un server, è necessario conoscere i componenti fondamentali, ovvero:
  - **Tool**: i tool sono strumenti che elaborano qualcosa per te: ricevono un input, eseguono un calcolo e producono un output. In genere si tratta di un calcolo, dell’inserimento di un ordine o di un’azione simile.
- **Risorse**: una risorsa è un dato statico, solitamente si tratta di impostazioni di applicazioni, schemi di database o altri file statici su un server, ad esempio.
- **Prompt**. i prompt, o template di prompt, sono come una ricetta che puoi riutilizzare. L’idea è che, utilizzando una ricetta di questo tipo, potresti inviarle dei parametri e inserirli in un LLM, ottenendo così qualcosa come, ad esempio, la generazione di una descrizione di prodotto.

### Alla scoperta di tool, risorse e suggerimenti

**Tu**: «E per quanto riguarda l’infiltrazione?»

**Scipione**: «L’infiltrazione consiste nell’utilizzare piccole unità per infiltrarsi nelle linee nemiche, in questo modo si scoprono maggiori informazioni sul nemico e si crea confusione.»

**Tu**: «Mi sembra che possiamo usare questo modo di pensare per scoprire di più sui nostri server, sui tool, i prompt e le risorse di cui dispongono.

Riassumendo, dovrei:
  - **Utilizzare manovre di fiancheggiamento** o, nel mio caso, suddividere le funzionalità in base alle funzionalità dell’app in diversi server MCP, in modo da poter distribuire i server in base all’area di utilizzo. In questo modo, è più facile scalare e gestire l’app. Questi server possono anche essere aggiornati indipendentemente l’uno dall’altro.
  - **Utilizzare l’infiltrazione** o, nel mio caso, capire cosa stanno facendo questi server, in termini di tool, prompt e risorse. In questo modo posso assicurarmi di interagire con il server giusto e di utilizzare gli strumenti giusti per il lavoro.»

**Tu**: «Scarabeo del Tempo, ho capito bene?»

**Scarabeo del Tempo**: «Sì, certo. Le strategie di Scipione possono essere applicate all’architettura della tua applicazione. Se vuoi, posso spiegarti le specifiche del Model Context Protocol (MCP) e come implementarlo nella tua applicazione.»

**Tu**: «Sì, grazie!»

**Scarabeo del Tempo**: «Bene, iniziamo creando un server»

## Creazione di un server MCP

**Scarabeo del Tempo**: «Per creare il tuo primo server MCP, hai bisogno di due librerie: `@modelcontextprotocol/sdk` e `zod`.
  - la libreria `@modelcontextprotocol/sdk` fornisce i necessari tool per creare e gestire i server MCP;
  - `zod` è una libreria di dichiarazione e convalida di schemi TypeScript-first che ti aiuta a definire e convalidare le strutture dati utilizzate nel tuo server MCP. 

```bash
npm install @modelcontextprotocol/sdk zod
```

Ecco un semplice esempio di come creare un server MCP utilizzando queste librerie:

```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
 
// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});
```

Il codice precedente esegue le seguenti operazioni:
  - importa le classi e le funzioni necessarie dalla libreria `@modelcontextprotocol/sdk`;
  - crea un’istanza del server. La classe `McpServer` viene utilizzata per creare il server e accetta un oggetto con il nome e la versione del server come parametri.»

**Tu**: «Questo non fa molto, giusto?»

**Scarabeo del Tempo**: «No, non ancora, ma possiamo aggiungergli risorse e tool. Un tool è qualcosa che può essere utilizzato per eseguire un’attività specifica, mentre una risorsa è qualcosa che può essere utilizzata per fornire dati o funzionalità al tool. Aggiungiamone alcuni qui sotto:

```typescript
server.tool("add",
   { a: z.number(), b: z.number() },
   async ({ a, b }) => ({
     content: [{ type: "text", text: String(a + b) }]
   })
 );
```

Nel codice precedente, abbiamo:
  - definito uno strumento denominato “add” che accetta due numeri come input e restituisce la loro somma come output;
  - descritto i parametri di input e la loro validazione tramite zod. La funzione `z.number()` viene utilizzata per validare i dati di input, assicurando che sia `a` che `b` siano numeri.
  - la funzione `async` viene utilizzata per eseguire l’addizione e restituire il risultato in un formato specifico.»

**Tu**: «Interessante, quindi il tool è come una function che può essere chiamata dal client MCP?»

**Scarabeo del Tempo**: «Esatto! Il client MCP può chiamare questo tool e passare i parametri richiesti. Aggiungiamo anche una risorsa al server:

```typescript
server.resource(
   "greeting",
   new ResourceTemplate("greeting://{name}", { list: undefined }),
   async (uri, { name }) => ({
     contents: [{
       uri: uri.href,
       text: `Hello, ${name}!`
     }]
   })
 );
```

In questo codice:
  - abbiamo definito una risorsa denominata “greeting” che accetta un nome come input e restituisce un messaggio di saluto;
  - abbiamo utilizzato un template di risorsa per definire come chiamare la risorsa `greeting://{name}`. Questo schema viene utilizzato per definire il formato URI della risorsa, che include un placeholder per il nome.
  - la funzione `async` viene utilizzata per generare il messaggio di saluto in base al nome fornito.»

**Tu**: «Quindi, la risorsa è come una fonte di dati: potrebbe essere un database, un file o persino un’API? Se si trattasse di un file, userei un URI `file://` come questo:»

```typescript
server.resource(
   "file",
   new ResourceTemplate("file://{path}", { list: undefined }),
   async (uri, { path }) => ({
     // do something with the file at path, e.g., read its contents
     contents: [{
       uri: uri.href,
       text: `File at ${path}`
     }]
   })
 );
```

**Scarabeo del Tempo**: «Sì, esatto! La risorsa può essere qualsiasi cosa fornisca dati o funzionalità al server MCP. È possibile definire risorse per file, database, API o qualsiasi altra origine dati si desideri utilizzare.

Ora, aggiungiamo un livello di trasporto al server in modo che possa comunicare con i client.

```typescript
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport); 
```

In questo codice, abbiamo:
  - creato un livello di trasporto utilizzando la classe `StdioServerTransport`, che consente al server di comunicare con i client tramite input e output standard e viene eseguito sulla macchina locale. Esistono anche altri trasporti come SSE e streaming HTTP che consentono l’esecuzione in remoto su un server, di cui parleremo più avanti.
  - chiamato il metodo `connect` per stabilire la connessione tra il server e il livello di trasporto.»

**Tu**: «Ok, ora che abbiamo un server, come possiamo eseguirlo e testarlo?»

## Eseguire e testare il server MCP

**Tu**: «Scipione, hai mai testato le tue tattiche?»

**Scipione**: «Certo! Testare è fondamentale in qualsiasi strategia. Dovresti sempre testare le tue tattiche prima di metterle in atto. Ricordo, infatti, una battaglia specifica in cui ho usato una nuova tattica e ha fallito miseramente: la Battaglia della Trebbia. Ho imparato la lezione e non ho mai più commesso quell’errore.»

**Tu**: «Quindi come faccio a testare il mio server MCP?»

**Scarabeo del Tempo**: «Puoi testare il tuo server MCP eseguendolo in un terminale eseguendo l’inspector in questo modo:

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

Qui sopra, utilizziamo il pacchetto `@modelcontextprotocol/inspector` per eseguire il server MCP. Forniamo l’argomento `node build/index.js` per specificare il punto di ingresso del server. Questo avvierà il server MCP e consentirà di interagire con esso tramite l’inspector.»

**Tu:** «E come interagisco con lui?»

**Scarabeo del Tempo:** «Questo avvia un server web sulla porta 6274. Puoi accedere all’inspector aprendo il tuo browser web e andando su `http://localhost:6274`. L’inspector fornisce un’interfaccia intuitiva per interagire con il tuo server MCP, consentendoti di testare gli strumenti e le risorse che hai definito.»

![User interface dell’inspector](https://softchris.github.io/mcp-workshop/assets/images/connect-7703c67645f368d51c7b24a5d635d6a0.png)

### -1- Connettiti al server

**Scarabeo del Tempo:** «Selezionando “Connect” dovresti vedere la finestra qui sotto:

![Connessione al server](https://softchris.github.io/mcp-workshop/assets/images/connected-7c3570d5d0a8659e27740d2950031cb3.png)

Dovrebbe indicare che sei connesso. Ora puoi interagire coi tool o le risorse successive.»

### -2- Elenca tool e risorse

**Scarabeo del Tempo:** «Successivamente, vogliamo elencare i tool e le risorse disponibili sul server. Puoi farlo selezionando “List Tool” per vedere quali strumenti sono disponibili:

![Elenco dei tool](https://softchris.github.io/mcp-workshop/assets/images/tools-listed-630aa49c9d7e4347108419fb83c409f6.png)

Ora dovresti vedere lo strumento “add” nell’elenco. Puoi anche elencare le risorse selezionando la scheda “Resources”.»

### -3- Esegui il tool

**Scarabeo del Tempo:** «Per eseguire lo strumento, seleziona lo strumento “add” dall’elenco. Inserisci i parametri nella finestra di dialogo che appare sul lato destro dello schermo. Ad esempio, puoi inserire `a=5` e `b=10` per sommare questi due numeri. Fai clic su “Run Tool” per eseguire lo strumento. Dovresti vedere il risultato nell’area di output sottostante. Il risultato dovrebbe essere `15`.»

![Esecuzione del tool](https://softchris.github.io/mcp-workshop/assets/images/ran-tool-271ecd5f84a457462e59789b579ee9d4.png)

**Scipione:** «Interessante, vorrei poter testare le mie strategie in questo modo. Sembra molto utile.»

**Tu:** «Esatto, davvero! Capisco che potrebbe essere utile per i test e il debug.»

## Crea un client

**Scarabeo del Tempo:** «È anche possibile creare un client che si connette al server MCP e interagisce con esso. Ecco un esempio di come creare un semplice client MCP utilizzando la libreria `@modelcontextprotocol/sdk`:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

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
```

Nel codice precedente, abbiamo:
  - creato un livello di trasporto utilizzando la classe `StdioClientTransport`, che consente al client di comunicare con il server MCP tramite input e output standard.
  - avviato una nuova istanza `Client` con un nome e una versione.
  - connesso il client al livello di trasporto utilizzando il metodo `connect`.»

**Tu:** «Lasciami indovinare, c’è molto altro che possiamo fare con il client?»

**Scarabeo del Tempo:** «Sì, ne parleremo più avanti. Il client MCP può essere utilizzato per interagire con il server, richiamare strumenti e accedere alle risorse.»

### Elenca e chiama tool e risorse

**Scarabeo del Tempo:** «In genere, ci sono due scenari da considerare: elencare tool e risorse e chiamarli. Ecco come fare:»

```typescript
// List prompts
const prompts = await client.listPrompts();

// List resources
const resources = await client.listResources();

// list tools
const tools = await client.listTools();
```

**Tu:**: «Fantastico, ora so quali sono le capacità del server. Ma come le chiamo?»

**Scarabeo del Tempo:** «Bene, lasciatemi approfondire un esempio specifico, prima i tool. Quindi si inizia chiedendo quali tool si possiedono, poi si memorizza la risposta e poi si chiama lo strumento desiderato. Ecco un esempio:

Quindi, quando si elencano i tool, si ottiene una risposta nel seguente formato:

```json
  
  {
    "name": "<tool name>",
    "description": "<description>".
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
  }
```

il che significa che se hai untool `add`, la tua risposta, che elenca gli strumenti, apparirà così:»

```json
{
    "name": "add",
    "description": "Adding two numbers".
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
}
```

**Tu:** «Ok, bene, credo che posso memorizzarlo in una variabile e poi chiamare il tool che voglio?»

**Scarabeo del Tempo:** «Esatto! Vediamo ora come può essere chiamato un tool:»

```typescript
// List tools
const { tools } = await client.listTools();

const addTool = tools[0]; // Assuming the first tool is "add"
const subtractTool = tools[1]; // Assuming the second tool is "subtract"

// Call a tool
const result = await client.callTool({
  name: addTool.name,
  arguments: {
    a: 5,
    b: 10
  }
});
```

**Tu:**: «Ok, ha senso. E per quanto riguarda le risorse?»

**Scarabeo del Tempo:** «Le risorse sono simili, ma è necessario fornire l’URI della risorsa e tutti i parametri richiesti. Ecco un esempio:»

```typescript
let resourceUri = "greeting://John"; // Replace with the actual resource URI

// call resource
// Read a resource
const name = "John Doe"; // Replace with the actual name

const resourceResult = await client.readResource({
  uri: `greeting:///${name}`,
});

console.log(resourceResult); // Hi John Doe!
```

**Tu:** «Lo capisco bene, anche se», stai pensando tra te e te, «scommetto che possiamo migliorare in qualche modo? Scarabeo del Tempo, possiamo migliorare, vero?»

**Scarabeo del Tempo:** «Sì, ma prima di tutto, rendiamo felice Scipione. Alla nostra prossima tappa dobbiamo fare due chiacchiere con la signorina Lamarr.»

## Compito - Creazione di un sistema di gestione dell'inventario e dei tool per Scipione

**Scipione:** «Sai, ho così tante pergamene e rotoli sparsi in giro. Mi servirebbe davvero uno strumento che mi aiuti a organizzarli. Ho anche questo abaco che uso per i calcoli. Puoi aiutarmi a creare uno strumento per gestire il mio inventario?

Ecco un inventario completo delle mie pergamene:
- pergamena delle tattiche;
- pergamena delle scorte alimentari.

Oh, ecco una pergamena delle tasse. Le tasse sono una cosa importante, l’Impero vuole la sua parte di tutto ciò che acquisiamo. Hai risolto questo problema nel tuo tempo? Non rispondere, non voglio saperlo.

L’abaco mi serve per supportare le seguenti operazioni:
- addizione: somma due numeri;
- sottrazione: sottrai un numero da un altro;
- moltiplicazione: moltiplica due numeri;
- divisione: dividi un numero per un altro.»

## Soluzione

[Soluzione](/lessons/07-mcp/solution/README.md)

## Verifica delle conoscenze

**Domanda:** Quali sono i diversi tipi di risorse che un server MCP può esporre?

A. Tool ed endpoint web.
B. Tool e risorse.
C. Tool, risorse e prompt.

**Domanda:** Quali sono alcuni modi per testare il tuo server MCP?

A. Inspector.
B. Un client MCP personalizzato.
C. Visual Studio Code.
D. cURL.
E. Tutti i precedenti.

[Soluzione del quiz](/lessons/07-mcp/solution/solution-quiz.md)

## Summario

In questo capitolo abbiamo appreso quanto segue:
- il Model Context Protocol (MCP) è un ottimo modo per trasferire funzionalità ai server invece di concentrarle tutte in un unico posto. Questo consente alle app di rimanere compatte e focalizzate. Il vantaggio aggiuntivo è che team diversi possono gestire anche server diversi. Grazie al fatto che MCP è un protocollo, chiunque desideri condividere funzionalità può farlo in un formato comune;
- abbiamo inoltre esaminato come utilizzare un server MCP utilizzando lo strumento inspector o un client scritto.

## Risorse per lo studio autonomo

- [Building MCP Servers](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server)

# Lezione 4: Output strutturato

In questo capitolo imparerai:
- che cos’è l’_output strutturato_ e come sfruttarlo in modo efficace;
- come estrarre informazioni dai prompt e incorporarle nell’output;
- a generare differenti tipi di formato dell’output, come ad esempio JSON, per un suo facile utilizzo da parte dei servizi.

## Configurazione

Se non l’hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi fare: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

È utile guardare di nuovo il video sul prompt engineering perché getta le basi per ciò che imparerai in questo capitolo.

[![Guarda un breve video sul prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_Questo video offre un’introduzione per migliorare le tue abilità di “prompting”, insegnandoti come dare all’IA istruzioni più chiare ed effettive per ottenere risultati migliori._

*🎥 Clicca sull’immagine qui sopra per guardare un breve video sul prompt engineering*

💼 Slide: [Prompt engineering](/videos/slides/02-prompt-engineering.pptx)

## Storia: “Dalla padella alla brace”

> [!NOTE]
> _La nostra storia finora: tu, un ingegnere meccanico del 1860, hai intrapreso un viaggio nel tempo con Leonardo da Vinci. Sei sfuggito ai soldati romani, o meglio, stai per sfuggirgli, e stai cercando disperatamente un modo per far atterrare la vite aerea in sicurezza._
>
> Vedi [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall’inizio e iniziare a usare l’IA generativa.

> [!NOTE]
> Anche se consigliamo di leggere la storia (è divertente!), [clicca qui](#interagisci-con-montezuma) se preferisci passare direttamente al contenuto tecnico.

Il vento ti sferza mentre tu e Leonardo da Vinci salite sulla sua vite aerea, con la struttura di legno che scricchiola sotto la tensione.

**Tu:** «Leonardo, dobbiamo trovare una via di uscita!» gridi sopra il fragore del vento.

**Leonardo:** «Mi fido della mia invenzione, ma abbiamo bisogno di qualcosa in più della fiducia per scappare da questi soldati.»

**Tu:** «Questa potrebbe essere la nostra unica chance», dici, premendo l’intricato meccanismo dello scarabeo. Una luce intensa vi avvolge entrambi e il mondo intorno a voi cambia e si deforma.

### L’Impero azteco

La luce intensa dello Scarabeo del Tempo svanisce e ti ritrovi alla base di un’imponente piramide di pietra. Guardandoti intorno, ti rendi conto di essere atterrato nel cuore dell’Impero azteco.

La vite aerea poggia goffamente su una grande pietra finemente intagliata, con incisioni che ricordano un calendario.

![Calendario azteco, Wikipedia](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/aztec.png)

_Calendario azteco, Wikipedia_
 
Leonardo da Vinci si fa avanti, con gli occhi spalancati per la meraviglia.

**Leonardo:** «Incredible», mormora, passando le dita sulle incisioni. «Ma spero che questo non abbia alcuna importanza.»

Prima che tu possa reagire, si avvicina un gruppo di soldati aztechi.

![Incontro con gli Aztechi](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/meeting.png)

**Capo Soldato:** «Chi siete e che cosa avete fatto?» chiede in nahuatl.

Fai un respiro profondo, cercando di calmare i nervi.

**Tu:** «Siamo viaggiatori provenienti da una terra lontana», inizi, sperando che la tua conoscenza delle lingue antiche ti sia utile. «Questa è una macchina volante, un dono degli dei per aiutarci a raggiungervi.»

Gli occhi del guerriero si spalancano per la sorpresa, ma lui rimane cauto.

**Capo Soldato:** «Verrete con noi a incontrare il sovrano Montezuma. Sarà lui a decidere il vostro destino.»

Una volta raggiunta la cima della piramide, si accede a una grande sala dove Montezuma, il sovrano dell’Impero azteco, siede su un trono ornato di oro e piume.

**Montezuma:** «Affermate di essere viaggiatori provenienti da una terra lontana», dice Montezuma, con voce calma ma autorevole. «E avete danneggiato il nostro sacro calendario. Come intendete rimediare?»

## Facciamo un gioco

**Leonardo:** «Veniamo in pace», dice, con voce ferma. «Cerchiamo conoscenza e comprensione. Permetteteci di dimostrarvi la potenza della nostra macchina e di condividere la nostra conoscenza con voi.»

**Montezuma:** «Benissimo. Propongo una partita a [Patolli](#patolli). Se vinco al meglio delle tre partite, mi darai il tuo dispositivo e mi spiegherai come funziona. Se vinci, sei libero di andare.»

![Giocando a Patolli](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/game.png)

La partita inizia e nella stanza cala il silenzio, a parte il rumore dei fagioli che rotolano e dei pezzi che si muovono sulla scacchiera.

Montezuma vince la prima partita, con evidente abilità ed esperienza. Leonardo studia attentamente la scacchiera, elaborando mentalmente strategie e probabilità.

La seconda partita è una lotta serrata, ma Leonardo riesce ad assicurarsi la vittoria, pareggiando il punteggio.

**Leonardo:** «Un’ultima partita», sussurra, «George (Scarabeo del Tempo), dobbiamo assolutamente vincerla, suggeriscimi le mosse giuste.»

**Scarabeo del Tempo:** «Molto bene, calcolo… ecco fatto…»

Con una mossa finale e decisiva, Leonardo vince la partita. La sala esplode in applausi e grida di gioia, gli Aztechi chiaramente impressionati dalla sua abilità e compostezza. Montezuma, sebbene deluso, annuisce in segno di rispetto.

**Montezuma:** «Hai vinto lealmente», dice Montezuma, con una nota di ammirazione nella voce. «Sei libero di andare e puoi tenere il tuo dispositivo. Ma sappi che sei sempre il benvenuto qui, se desideri tornare.»

**Scarabeo del Tempo:** «Non dirò niente se non lo fai tu, Leonardo.» 😉

### Patolli

> [!NOTE]
> Il Patolli è uno dei giochi più antichi conosciuti nelle Americhe, praticato già dalle culture mesoamericane precolombiane come gli Aztechi. È un mix di strategia e fortuna.
>
> **Come si gioca a Patolli**: 
> - **Tabellone e pedine**: Si gioca su un tabellone a forma di X con un blocco centrale e quattro bracci. I giocatori usano cinque fagioli neri come dadi, contrassegnati su un lato.
> - **Preparazione**: Ogni giocatore sceglie sei segnalini (perline) del proprio colore e li posiziona fuori dal tabellone, più le perline punti per il punteggio.
> - **Svolgimento del gioco**: Tira i fagioli per spostare i segnalini sul tabellone e tornare al punto di partenza. Un tiro di cinque muove di dieci caselle. Atterrare su determinate caselle può far guadagnare turni, perdere punti o catturare segnalini.
>
> **Coinvolgimento Azteco**: Ampiamente praticato da nobili e popolani, era uno dei preferiti alla corte di Montezuma. Oltre al divertimento, prevedeva scommesse ad alto rischio come coperte, pietre preziose o persino la libertà.

![Tabellone da Patolli](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/patolli.png)

_Patolli, Wikipedia_

## Interagisci con Montezuma

Se vuoi interagire con Montezuma, esegui la app [Personaggi](/app/README.md).

> [!IMPORTANT]
> Questo è interamente frutto di fantasia: le risposte sono generate dall’intelligenza artificiale.
> [Dichiarazione di responsabilità sull’IA](../../README.md#responsible-ai-disclaimer)

![Montezuma](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/montezuma.jpeg)

**Passaggi**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante "Open in Browser".
5. Chatta con Montezuma.

Per una spiegazione più dettagliata della app, vedi [Spiegazione dettagliata della app](/lessons/01-intro-to-genai/translations/README.it.md#interagisci-con-dinocrate).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l’[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## Output strutturato

**Scarabeo del Tempo:** «Vuoi sapere come ho sconfitto Montezuma?»

**Tu:** «Sssh! Non così forte, siamo ancora nell’Impero azteco!»

**Scarabeo del Tempo:** «Oh giusto, scusa, sì, quindi un output strutturato è così. Mi hai chiesto le mosse giuste e te le ho fornite in modo strutturato.»

L’output strutturato utilizza formati di dati specifici per organizzare le informazioni in modo chiaro. Formati comuni come JSON, XML e CSV semplificano l’elaborazione e l’utilizzo dei dati da parte dei servizi.

I modelli di intelligenza artificiale generativa possono generare dati in vari formati. Tuttavia, l’output di testo non strutturato può rendere difficile l’estrazione delle informazioni e la loro trasmissione ad altri servizi. L’output strutturato può essere di aiuto in questo senso.

**Tu:** «Beh, non sei intelligente?» 😉

**Scarabeo del Tempo:** «Faccio del mio meglio.» 😀

Un altro vantaggio, anche per i lettori umani, è che i dati strutturati sono più facili da leggere e comprendere quando seguono un formato familiare.

Esaminiamo alcuni esempi di input e vediamo come richiedere formati di output specifici può aiutare a estrarre informazioni che ne facilitano la comprensione e l’utilizzo.

**Tu:** «Ok, non è che abbiamo altri programmi, sentiamo.»

## Modellare l’output

**Scarabeo del Tempo:** «Cominciamo con un semplice esempio. Immagina di essere Leonardo da Vinci e di cercare idee per invenzioni utilizzando la tecnologia del XV secolo. Vuoi sapere di quali risorse hai bisogno e quanto impegno ci vorrebbe per realizzare ciascuna invenzione. Ecco come puoi richiedere queste informazioni.»

**Leonardo:** «Oh, mi piace questo gioco, fate tutti finta di essere me!»

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

**Leonardo:** «Sì, rubo proprio l’idea del mulino ad acqua, me la immagino già, un mulino in riva al fiume, che macina il grano fino a trasformarlo in farina, è perfetto! Mi piace questo aggeggio. Cos’altro mi viene in mente, piccolo aggeggio? Questo mi renderà meno dipendente da gente come Sforza.»

**Scarabeo del Tempo:** «Certo, se mai riuscissi a finire un progetto, Leonardo.» 😀

**Leonardo:** «Ehi, ci sto lavorando!»

**Scarabeo del Tempo:** «Vediamo come è possibile istruire il modello affinché presenti l’output in modo più strutturato.»

### Strutturare i prompt per ottenere risultati migliori

**Scarabeo del Tempo:** Puoi migliorare il prompt indicando al modello come desideri che sia strutturato l’output. Ad esempio, puoi richiedere un formato di tabella con le colonne di cui hai bisogno. Ecco come puoi modificare il prompt.

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

**Leonardo:** «Mi piace, mi farà sicuramente risparmiare un sacco di tempo.»

**Tu:** «Anche a me.»

### Presentazione di un template di output

Un altro modo per ottenere un output strutturato è presentare un template di output. Può essere in qualsiasi formato, dalle colonne al JSON, XML, CSV o Markdown.

> Prompt: Generate ideas for inventions that can be built using 15th-century technology. For each invention, specify the required resources and estimate the effort needed to construct it. Present the information using the following format (use markdown as output format):
> 
> Title: [Invention Name]
> Description: [Brief Explanation]
> Resources Needed: [List of Required Materials]
> Effort: [Estimated Difficulty or Labor Required]
Generate ideas for inventions I can build given 15th century technology, please let me know for each what resources I need and how much effort there would be to build each invention, for each idea present it with the following output template:

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

**Leonardo:** «Fantastico, ma chi è Jason?»

**Scarabeo del Tempo:** «JSON, Leonardo, JSON. È un formato strutturato, facile da utilizzare per servizi o applicazioni.»

**Leonardo:** «È quello che ho detto, Jason.»

**Scarabeo del Tempo:** «_Sigh_.»

Come potete vedere, l’output è strutturato secondo le specifiche del modello di output. Questo lo rende più facile da leggere e comprendere e crea anche un output ripetibile che può essere facilmente utilizzato da altri servizi o applicazioni.

Naturalmente, un servizio trae vantaggio da un output ancora più strutturato, come JSON, XML o CSV, quindi vediamo come richiederlo.

### Utilizzo di output strutturati con formati come JSON, XML o CSV

**Scarabeo del Tempo:** «Finora, hai visto come puoi controllare la struttura dell’output istruendo il modello nel prompt. Hai persino fornito un template di output. Approfondiamo ulteriormente questa idea e vediamo come può essere applicata a formati di output più strutturati come JSON e altri.»

Modifica il prompt di conseguenza per richiedere l’output JSON:

> **Prompt**: Generate ideas for inventions I can build given 15th century technology, please let me know for each what resources I need and how much effort there would be to build each invention, for each idea present in json format, include properties for title, description, resources, needed, effort
> 
> Example of the JSON output:
> [
>   {
>     "title": "",
>     "description": ".",
>     "resources_needed": "",
>     "effort": ""
>   }
> ]

```text
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

**Scarabeo del Tempo:** «Questo tipo di output strutturato può essere inviato a un altro servizio o applicazione in grado di utilizzare dati JSON.»

## Estrazione dei dati dai prompt

**Scarabeo del Tempo:** «Immagina di creare un chatbot che aiuti gli utenti a trovare informazioni sui viaggi da prenotare. Vuoi estrarre dettagli chiave dall’input dell’utente per fornire risposte pertinenti. Supponiamo di avere una descrizione come la seguente.»

> Type where you would like to go, when you want to travel, and your budget.

Che aspetto ha un prompt che estrae le informazioni?

> Prompt: Extract the following information from a user's prompt: location, when, budget, currency, respond with the extracted data in JSON format.
>
> User prompt: I want to go to Greece in June, my budget is 800 euro.


> Response:

```json
{
  "location": "Greece",
  "when": "June",
  "budget": 800,
  "currency": "euro"
}
```

**Leonardo:** «George (Scarabeo del Tempo) non smette mai di parlare, vero?»

**Tu:** «Vediamo se riesco a trovare l’interruttore di spegnimento.»

**Scarabeo del Tempo:** «Proviamo a fare lo stesso con un prompt simile, variando un po’ l’input dell’utente in modo da essere certi che il modello stia facendo la cosa giusta.»

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

Ciò che puoi fare come sviluppatore è creare un template:

```text
Extract the following information from a user's prompt: location, when, budget, currency, respond with the extracted data in JSON format, user prompt: {user_input}.
```

**Tu:** «Trovato, prendi questo George!»

**Scarabeo del Tempo:** «_Spegnimento_.»

**Leonardo:** «Finalmente pace e tranquillità.»

**Scarabeo del Tempo:** «_Avvio di emergenza_. Dove ero rimasto? Oh sì.»

**Scarabeo del Tempo:** «Per i chatbot, questa è una funzionalità molto potente in quanto consente di estrarre informazioni dall’input dell’utente. Cosa succede se l’utente chiede informazioni di ogni tipo? Puoi creare un modello in cui descrivere le competenze, le funzionalità del tuo chatbot e i parametri di cui ha bisogno. Ecco come fare.»

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

Proviamo i seguenti input utente:

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

Questa combinazione che consiste nella presentazione di competenze e parametri ed estrazione di dati dai prompt è anche nota come _chiamata di strumento_ o _chiamata di funzione_. Una risposta come questa dal tuo modello semplifica per te, in quanto sviluppatore, la comprensione delle esigenze dell’utente e il modo in cui richiamare una funzione corrispondente per soddisfare la sua richiesta.

**Tu:** «Informazioni molto utili, George!»

## Compito - Ripara la vite aerea

**Scarabeo del Tempo:** «Ho bisogno della vostra attenzione, abbiamo un problema. La vite aerea ha subito alcuni danni durante la fuga dai soldati romani e lo sbarco nell’Impero azteco. La macchina di Leonardo da Vinci è piuttosto sensibile e richiede un intervento molto specifico per essere riparata. Devi fornire le informazioni necessarie al tuo Scarabeo del Tempo (Assistente AI) per aiutarti a riparare la vite aerea.»

**Leonardo:** «Quindi sono riuscito a riparare il danno alla vite dell’antenna, ma ora è necessaria una sequenza di avvio: sinistra, sinistra, su, destra.»

**Tu:** «Sembra abbastanza facile, solo quel testo?»

**Leonardo:** «Sì, ma è speciale, deve essere specchiato, è così che scrivo tutti i miei testi. E ovviamente uso il cifrario di Cesare con uno shift di 3 perché sono italiano.» 😀

**Tu:** «Non potresti semplicemente scriverlo?»

**Leonardo:** «Potrei, ma sono curioso di vedere se tu e lo Scarabeo del Tempo riuscite a farlo.»

**Tu:** «Bene.»

**Istruzioni:** Scrivi un prompt che chieda la sequenza di avvio per la vite aerea; il testo deve essere specchiato e codificato con un cifrario di Cesare con uno shift di 3. Rispondi con il testo codificato.

Dai un’occhiata alla [app di esempio](/app/README.md) per iniziare a scrivere il codice. Contiene un progetto Node.js con tutte le dipendenze necessarie.

> NOTA: Se non hai ancora creato un Codespace, fallo ora perché ti servirà per far funzionare la comunicazione AI nell’app di esempio.
>
> Guarda la sezione _Option 1: Creating a **GitHub Codespace**_ del documento [Setup your environment](/docs/setup/README.md).

## Soluzione

[Soluzione](/lessons/04-structured-output/solution/solution.md)

## Sfida

Adotta l’esempio della prenotazione di un viaggio, fornendo competenze ed estraendo parametri per un dominio a tua scelta. Scrivi un prompt che richiede un input all’utente e poi estrai le informazioni necessarie per soddisfare la richiesta. Rispondi con i dati estratti in formato JSON con le colonne skill, parameters e extracted_data.

Determina inoltre la competenza in base all’input dell’utente.

## Sommario

In questo capitolo, hai imparato a conoscere l’output strutturato e come può essere utilizzato per presentare le informazioni in modo strutturato.

Hai esplorato diversi modi per modellare l’output, tra cui l’istruzione del modello nel prompt, la presentazione di un modello di output e l’utilizzo di formati come JSON, XML o CSV.

Inoltre, hai imparato come estrarre dati dai prompt e presentarli in un formato strutturato.

Sfruttando efficacemente l’output strutturato, puoi semplificare la comprensione e l’utilizzo delle informazioni generate dai modelli di IA generativa.

## Verifica delle conoscenze

**Domanda**: A cosa serve l’output strutturato? Seleziona tutte le risposte pertinenti.

A. A presentare le informazioni in modo strutturato.
B. A estrarre dati da prompt.
C. A generare testo non strutturato.

[Soluzione del quiz](/lessons/04-structured-output/solution/solution-quiz.md)

## Risorse per lo studio autonomo

- [Serie di video su JavaScript e IA generativa](https://aka.ms/genai-js)

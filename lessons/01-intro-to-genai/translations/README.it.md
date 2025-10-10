# Lezione 1: Introduzione all'IA generativa e agli LLM per sviluppatori JavaScript

In questo capitolo imparerai a:

- comprendere le basi dell'IA generativa e dei Large Language Model (LLM);
- identificare le potenziali applicazioni e limitazioni dei Large Language Model (LLM) nello sviluppo JavaScript;
- esplorare come l'IA generativa può migliorare l'esperienza utente nelle applicazioni JavaScript.

## Configurazione

Se non l'hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi farlo: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Guarda un breve video introduttivo sull'intelligenza artificiale generativa](https://img.youtube.com/vi/vLYtDgs_zx8/0.jpg)](https://www.youtube.com/watch?v=vLYtDgs_zx8&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=1)

_Questo video offre un'introduzione all'IA generativa con JavaScript_

💼 Slide: [Introduzione all'IA generativa](/videos/slides/00-intro.pptx)

## IA generativa

Probabilmente avrete già sentito parlare di strumenti come ChatGPT o AI generativa. Il concetto è semplice: si fornisce un prompt e un modello, spesso chiamato Large Language Model (LLM), genera un paragrafo o addirittura un'intera pagina di testo. Questo output può essere utilizzato per vari scopi, tra cui la scrittura creativa, rispondere a domande e il coding.

Inoltre, l'IA generativa si è evoluta in capacità multimodali, consentendo di fornire un'immagine o un video come input e ricevere una varietà di output. Questo progresso ha migliorato significativamente il flusso di lavoro di molte persone, non solo generando testo, ma anche riassumendo, traducendo e altro ancora.

*In poche parole, le interfacce in linguaggio naturale stanno diventando il nuovo standard per molte app e i tuoi utenti si aspettano di poterle usare.*

## Storia: "Un viaggio attraverso il tempo"

> [!NOTE] 
> Cominciamo con una panoramica della storia, una storia che collega il passato al futuro! Man mano che procederai con questo programma di studi, ti imbarcherai in un'avventura emozionante, viaggiando indietro nel tempo per collaborare con alcune delle menti più brillanti della storia. Insieme affronterete sfide ed esplorerete come l'IA generativa possa rivoluzionare le vostre applicazioni JavaScript.

> [!NOTE]  
> Sebbene consigliamo di leggere la storia (è divertente!), [clicca qui](#interagisci-con-dinocrate) se preferisci passare direttamente al contenuto tecnico.

Il tuo viaggio inizia nella Londra degli anni '60 dell'Ottocento, dove vestirai i panni di un abile meccanico. Attraverso una serie di avventure avvincenti, affinerai le tue abilità di intelligenza artificiale e sbloccherai soluzioni che trascendono il tempo.

### Nel vortice - Londra 1860

Nel cuore della Londra degli anni '60 dell'Ottocento, sei riconosciuto come uno dei meccanici più abili della tua epoca. La tua officina è nascosta in un vicolo stretto. Le pareti sono ricoperte da scaffali traboccanti di parti meccaniche, progetti e lavori lasciati a metà.

Il tuo banco da lavoro, il cuore della tua officina, è un disordine organizzato.

<div>
  <img width=600 src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/london.png" alt="Officina di Londra" />
</div>

_Al centro del banco giace il torso di un robot, una meraviglia ingegneristica che ha richiesto mesi di lavoro. La sua struttura in legno è finemente intagliata e ogni giuntura è stata meticolosamente progettata per garantire movimenti fluidi._

### Una lettera, per te?

All'improvviso, un colpo alla porta interrompe i tuoi pensieri. È raro ricevere visite a quest'ora. Ti asciughi le mani con uno straccio e ti avvicini alla porta, incuriosito.

Aprendo la porta, non trovi nessuno. Invece, il tuo sguardo è attratto da una busta sigillata sul pavimento. La raccogli e leggi:

_"Caro amico,_

_Ti invio questa lettera per aiutarti nei tuoi sforzi con l'automa. È fondamentale che tu continui questo lavoro. In allegato troverai una chiave della biblioteca. Ci vediamo lì oggi alle 15:00._

_Tuo,_

_Charles Babbage."_

### Andiamo in biblioteca

Charles Babbage, il grande matematico e inventore della macchina differenziale, vuole incontrarti. Prendi rapidamente il cappotto ed esci di casa.

Dopo una passeggiata di 20 minuti lungo il Tamigi, finalmente arrivi alla biblioteca dove trovi la porta leggermente aperta.

All'interno è buio e cupo, l'unica luce filtra attraverso le finestre sporche, proiettando ombre inquietanti sulle pareti.

**Tu:** «Permesso? Sig. Babbage?»

Mentre i tuoi occhi si abituano alla luce fioca, noti una figura in lontananza che ti saluta con la mano. Ti avvicini a lui, i tuoi passi riecheggiano sul pavimento di legno. La figura diventa più nitida e lo riconosci dalle foto sui giornali: è Charles Babbage.

![Biblioteca polverosa](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/library.png)

### Cos'è questo dispositivo?

Appena ti avvicini, un lampo accecante esplode e lui svanisce.

Sul pavimento è rimasto un piccolo dispositivo metallico che gira su se stesso. Lo raccogli: la sua superficie liscia e fredda emette un leggero ronzio. È diverso da qualsiasi cosa tu abbia mai visto, eppure ti sembra stranamente familiare; percepisci un senso di potere che emana da esso.

Assomiglia a un minuscolo scarafaggio, dal design intricato, con tre pulsanti: una freccia su, una freccia giù e un pulsante rosso luminoso. Dal retro spunta una piccola antenna che pulsa di energia.

Spinto dalla curiosità, le tue dita si avvicinano al pulsante rosso. Nel momento in cui lo premi, il mondo intorno a te brilla e i colori turbinano violentemente intorno a te.

Poi, il buio e la sensazione di cadere.

![Vortice temporale](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/vortex.png)

### Alessandria, 300 a.C.

Ti svegli, disorientato. Man mano che la tua vista si schiarisce, una città antica si dispiega davanti a te: frenetica, vivace e piena di vita.

Persone in toga si muovono per le strade, le loro voci si fondono in una sinfonia di dialetti antichi, l'aria è piena del profumo di spezie esotiche e del suono lontano dei mercanti che vendono le loro merci.

![Alessandria, 300 a.C.](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/alexandria.png)

**Tu:** «Sicuramente devo aver battuto la testa», pensi, chiudendo gli occhi e riaprendoli, ma la scena rimane immutata.

«Sono bloccato nel passato? Oserei premere di nuovo quel pulsante?» Prima che tu possa decidere, una figura ti si avvicina, salutandoti con la mano.

### Incontro con Dinocrate

Un anziano signore vestito con una toga ti saluta con la mano dai gradini del grande tempio. I suoi capelli bianchi e la barba riflettono la luce del sole, conferendogli un aspetto quasi etereo.

![Dinocrate che indossa una toga](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png)

**Dinocrate:** «Benvenuto, viaggiatore», dice calorosamente. «Sono Dinocrates, architetto di questa grande città. Il tuo arrivo era stato predetto.»

**Tu:** «Davvero? Beh, certo che sì. Sono qui per aiutare, credo.»

**Dinocrate:** «Sì, come dicevo, ti aspettavamo già da tempo. Abbiamo un compito che richiede le tue abilità uniche.»

**Dinocrate:** «Le nostre navi hanno difficoltà a navigare lungo la costa: dobbiamo costruire un faro. Ne sai qualcosa?»

**Tu:** «Sono un meccanico. Costruisco automi. Vediamo cosa posso fare.»

### Lo "Scarabeo del tempo"

Ti viene in mente un pensiero. «Il dispositivo può capirmi se gli parlo?»

**Tu:** «Dispositivo, riesci a capirmi?»

**Dispositivi:** «Certo. Che cosa ti serve?»

**Tu:** «Puoi aiutarmi a costruire un faro?»

**Dispositivo:** «Certo. Non sarà un problema.»

**Tu:** «Hai un nome?»

**Dispositivo:** «Sono lo Scarabeo del tempo. Il mio creatore mi chiama George, dice che è un bel nome per uno scarabeo.»

**Tu:** «Hai ragione: George è proprio un bel nome, infatti è stato il nome di mio padre.»

![Scarabeo del tempo](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/time-beetle.png)

_Dispositivo temporale, “George” lo scarabeo metallico_

> [!NOTE]
> Nel 300 a.C., Alessandria era una fiorente città fondata da Alessandro Magno nel 331 a.C. Divenne rapidamente una delle più grandi città del mondo ellenistico. Progettata dall'architetto capo di Alessandro, Dinocrate, divenne un importante porto e centro culturale.
>
> Alessandria era famosa per le sue imponenti costruzioni, tra cui il Faro, una delle sette meraviglie del mondo antico, e la leggendaria Biblioteca di Alessandria. La posizione strategica della città la rese un centro fondamentale per il commercio e lo scambio di conoscenze.
>
> Sotto il regno tolemaico, che seguì la morte di Alessandro, Alessandria divenne una delle città più prospere e influenti dell'epoca.

## Interagisci con Dinocrate

Se vuoi interagire con Dinocrate, esegui la app [Personaggi](/app/README.md). 

> [!IMPORTANT]
> Questo è interamente frutto di fantasia: le risposte sono generate dall'intelligenza artificiale.
> [Dichiarazione di responsabilità sull'IA](../../README.md#responsible-ai-disclaimer)

![Dinocrate che indossa una toga](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png)

**Step**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta visualizzato, seleziona il pulsante "Open in Browser".
5. Chatta con Dinocrate.

> [!NOTE]
 > Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l'[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

### Anteprima del codice

Sebbene ci sia ancora molto da trattare in questo programma di studi sull'IA generativa, diamo un'occhiata veloce al codice IA per iniziare a imparare a usare JavaScript con l'IA.

All'interno di `/app/app.js` troverai una funzione `app.post` che gestisce la funzionalità di AI generativa. È mostrata di seguito:

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

Ecco una sintesi passo-passo di ciò che fa la funzione:

1. **Estrae il messaggio dalla richiesta**: La funzione estrae il messaggio dal corpo della richiesta (req.body).
2. **Crea un array di prompt**: Costruisce una serie di messaggi, tra cui un messaggio di sistema e il messaggio di prompt dell'utente.
3. **Inizializza il client di OpenAI**: Un client OpenAI viene inizializzato con l'URL di base e la chiave API dalle variabili di ambiente. Per elaborare il prompt e restituire una risposta viene utilizzato un modello _gpt-4o-mini_ di [GitHub Models](https://github.com/marketplace/models).
4. **Invia il prompt a OpenAI**: La funzione registra il prompt e lo invia all'API di OpenAI per generare una completion.
5. **Gestione della risposta**: In caso di esito positivo, la funzione risponde con il prompt e la risposta della completion.
6. **Gestione degli errori**: Se si verifica un errore, risponde con uno stato 500 e il messaggio di errore.

> **Nota**: [GitHub Copilot](https://github.com/features/copilot) è stato utilizzato per generare questo riassunto del codice. L'IA generativa in azione!

### Cosa può fare l'IA generativa per me e per le mie app?

> [!NOTE]
> Probabilmente avrai già capito che lo Scarabeo del tempo funziona come un assistente AI con cui puoi interagire utilizzando il linguaggio naturale, scritto o parlato.

Man mano che la tua avventura ad Alessandria prende forma, inizi a intravedere le possibilità offerte dalla combinazione di creatività, ingegnosità e strumenti all'avanguardia per risolvere le sfide e trasformare il mondo che ti circonda.

**Tu:** «Dimmi di più sui fari», dici al tuo dispositivo.

**Scarabeo del tempo:** «Un faro è una torre dotata di una luce intensa nella parte superiore, situata vicino alla costa per guidare le navi in mare. La luce funge da ausilio alla navigazione, aiutando i marinai a evitare scogli e reef pericolosi e a raggiungere il porto in sicurezza.»

Dinocrate ascolta di nascosto la vostra conversazione e aggiunge:

**Dinocrate:** «Abbiamo bisogno di un faro che guidi le nostre navi in modo sicuro nel porto. Il mare può essere insidioso e molte navi sono andate perdute sugli scogli. Abbiamo bisogno di un faro che le guidi a casa.»

#### Aree di applicazione dell'IA generativa

**Tu:** «I fari sembrano sicuramente un argomento interessante, ma cos'altro può fare l'IA generativa per me e le mie app?»

**Scarabeo del tempo:** «Nel XXI secolo, l'IA generativa ha rivoluzionato molti settori, dall'assistenza sanitaria alla finanza, all'intrattenimento. Ecco alcuni esempi.

- **Chatbot**: un chatbot in grado di generare risposte simili a quelle umane alle domande degli utenti. Anziché una pagina statica di FAQ, gli utenti possono interagire con un chatbot che fornisce risposte dinamiche. Ciò rende l'esperienza utente più coinvolgente e meno frustrante.

- **Assistenti e agenti**: gli assistenti e gli agenti possono eseguire istruzioni più avanzate, come l'utilizzo di strumenti per richiamare API, eseguire codice, generare immagini e altro ancora. Gli agenti più avanzati possono perseguire obiettivi e svolgere compiti in modo autonomo.

- **Uno strumento per la creazione di contenuti**: uno strumento per generare post per blog e social media. Immagina di poter creare campagne in pochi minuti, anziché in ore, quando un sito di e-commerce organizza i saldi del Black Friday.

- **Completamento del codice**: uno strumento di completamento del codice in grado di generare frammenti di codice in base all'input dell'utente. Ciò può consentire agli sviluppatori di risparmiare molto tempo, soprattutto quando lavorano su attività ripetitive.

- **Traduzione**: tradurre testi tra lingue diverse con elevata precisione.

Come puoi vedere, questi miglioramenti possono aiutare sia il front-office che il back-office della tua app e della tua azienda.»

Ecco un esempio di "applicazione chatbot" in azione:

![Immagine di una app di chat](https://camo.githubusercontent.com/76f2ad7cd754a2de2b9957d2070448e130e5ba228084b9b4b128e3af9c9f5239/68747470733a2f2f6c6561726e2e6d6963726f736f66742e636f6d2f656e2d75732f73656d616e7469632d6b65726e656c2f6d656469612f636861742d636f70696c6f742d696e2d616374696f6e2e676966) 

**Tu:** «Affascinante, prenderò nota di andare nel XXI secolo per vedere come vengono utilizzati questi strumenti.»

### IA generativa ed ecosistema JavaScript

**Scarabeo del tempo:** «Un modo molto diffuso per sviluppare app nel XXI secolo è l'uso di JavaScript. Ogni linguaggio di programmazione è circondato da un ecosistema che comprende il linguaggio stesso, librerie e framework, supporto della comunità, IDE e strumenti. Nell'ecosistema di un linguaggio di programmazione, solitamente si parla dei seguenti elementi.»

| Elemento | Descrizione | 
|---|---| 
| Il linguaggio di programmazione stesso | Compresa la sua sintassi e le sue caratteristiche. |
| Librerie e framework    | Librerie disponibili per interagire con i modelli di IA generativa. |
| Comunità che supporta il linguaggio | La comunità è importante, soprattutto quando si cerca di imparare qualcosa di nuovo. La comunità che ruota attorno alle librerie e ai framework aiuta a decidere quali librerie utilizzare. Influisce anche sulla facilità con cui è possibile trovare aiuto quando ci si trova in difficoltà. |

**Tu:** «Interessante, credo di aver sentito parlare di programmazione. Non sono stati Ada Lovelace e Charles Babbage a sperimentarla?»

**Scarabeo del tempo:** «Sì, Ada Lovelace è stata la prima programmatrice di computer e Charles Babbage è stato l'inventore del motore differenziale, un computer meccanico. Sono stati pionieri nel campo dell'informatica, gettando le basi per l'era digitale.»

**Tu:** «Erano? Cosa intendi con “erano”? Ho appena ricevuto una lettera da Charles Babbage.»

**Scarabeo del tempo:** «Diciamo solo che ti trovi in una posizione privilegiata che ti permette di interagire con personaggi storici in un modo che pochi altri possono permettersi.»

### Ecosistema JavaScript

**Tu:** «Quindi, hai parlato di ecosistemi, sto solo prendendo appunti, ma che mi dici di JavaScript e in che modo è diverso dagli altri ecosistemi?»

**Scarabeo del tempo:** «JavaScript è uno dei linguaggi di programmazione più popolari al mondo nel XXI secolo. Ecco alcuni motivi della sua popolarità.»

| Motivo | Descrizione |
|-|-|
| Potenziale per lo sviluppo full-stack | JavaScript è uno dei pochi linguaggi che può essere utilizzato sia per lo sviluppo front-end che back-end. |
| Ricco ecosistema di librerie | JavaScript dispone di un vasto ecosistema di librerie, con framework come React, Angular, Vue e molti altri. Esiste NPM, il gestore di pacchetti, che è uno dei più grandi repository di pacchetti al mondo. |
| Forte supporto della comunità | JavaScript ha una comunità ampia e attiva, con molte risorse disponibili per l'apprendimento e lo sviluppo. Inoltre funziona semplicemente nel browser, il che è un enorme vantaggio. |
| IDE e strumenti | JavaScript dispone di una vasta gamma di IDE, quali Visual Studio Code, WebStorm e Atom. Questi IDE dispongono di estensioni sviluppate da aziende e dalla comunità che consentono di affrontare diversi aspetti dello sviluppo. |
| IA e JavaScript | JavaScript supporta lo sviluppo con librerie come TensorFlow.js, Brain.js, le API di OpenAI e altre ancora, consentendo agli sviluppatori di integrare il machine learning e l'IA generativa nelle applicazioni web e lato server. |

**Tu:** «Sono un sacco di motivi, sembra che dovrei puntare su JavaScript per i miei progetti futuri.»

**Scarabeo del tempo:** «Infatti, JavaScript è un linguaggio versatile, anche Python è un linguaggio popolare per lo sviluppo dell'IA.»

**Tu:** «Python? Cosa c'entrano i serpenti con la programmazione?»

**Scarabeo del tempo:** «Lasciamo questo argomento per un'altra volta, va bene?»

**Scarabeo del tempo:** «Ho spiegato sopra perché JavaScript e il suo ecosistema sono generalmente adatti, ma perché lo sono in modo specifico per l'IA generativa? La risposta è che si tratta di un linguaggio supportato da molti fornitori di servizi cloud e framework e strumenti di IA. Si ritiene inoltre che, sebbene Python possa essere la prima scelta per gli scenari di IA, molti sviluppatori stanno utilizzando JavaScript e Typescript.»

> **Lo sapevi?**  
> Il [62,5% degli sviluppatori dichiara di utilizzare JavaScript](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) e molti preferiscono [TypeScript](https://www.typescriptlang.org) per i nuovi progetti.

## Compito - Aiuta Dinocrate

Per utilizzare un Large Language Model (LLM) per aiutare Dinocrates con il faro di cui abbiamo parlato in precedenza nella nostra storia, useremo qualcosa chiamato prompt, ovvero una frase che descrive ciò che si desidera. È possibile specificare sia le informazioni necessarie sia il modo in cui si desidera che vengano presentate.

**Scarabeo del tempo:** «Cominciamo, utilizziamo un LLM per ricercare come costruire un faro per aiutare Dinocrate.»

**Scarabeo del tempo:**: «Dovrai fornire al LLM (cioè “me”) il contesto su come costruire, con quali strumenti e risorse dovrebbero essere disponibili ai tempi di Alessandria.»

**Tu:** «Ok, dimmi qualcosa di più sugli LLM.»

**Scarabeo del tempo:** «Gli LLM sono un tipo di modello di IA in grado di generare testi simili a quelli umani sulla base di un determinato prompt. Sono addestrati su enormi quantità di dati e possono generare testi coerenti, creativi e contestualmente pertinenti.»

**Scarabeo del tempo:** «Probabilmente vorrai farmi una domanda più precisa, così potrò darti una risposta più accurata, riguardo a, come dire… *coff* *coff* i fari, Alessandria, 300 a.C., Dinocrate, il Faro di Alessandria, ecc.»

**Tu:** «Capito, aggiungo più contesto al prompt e poi ti chiedo.»

**Scarabeo del tempo:** «Sì, sto aspettando…»

Visita [Microsoft Copilot](https://copilot.microsoft.com), [ChatGPT](https://chatgpt.com/) o un altro strumento di chatbot online per generare un piano per la costruzione del faro di Alessandria.
 
> [!TIP] 
> Prova a chiedere all'LLM di generare un piano che includa istruzioni passo-passo per la costruzione del faro. Hai bisogno di aiuto? Consulta la soluzione per ottenere assistenza.

## Soluzione

[Soluzione](/lessons/01-intro-to-genai/solution/solution.md)

### Verifica delle conoscenze

**Domanda:** Quali delle seguenti affermazioni relative all'IA generativa e a JavaScript sono vere?

A. JavaScript powered Generative AI apps can only generate text.
B. JavaScript can be used to build AI-powered applications, including chatbots, text generation tools, and more.
C. Python is the only language used for AI development.

A. Le app di IA generativa basate su JavaScript possono generare solo testo.
B. JavaScript può essere utilizzato per creare applicazioni basate sull'IA, tra cui chatbot, strumenti di generazione di testo e altro ancora.
C. Python è l'unico linguaggio utilizzato per lo sviluppo dell'IA.

[Soluzione del quiz](/lessons/01-intro-to-genai/solution/solution-quiz.md)

## Risorse per lo studio autonomo

- [Serie di video su JavaScript e IA generativa](https://aka.ms/genai-js)

# Lezione 3: Prompt Engineering

In questo capitolo imparerai:

- che cos'è il prompt engineering e come conoscerne le basi può aiutarti a ottenere risultati migliori;
- diverse tecniche di prompt engineering e come forniscono risultati migliori a seconda dello scenario;
- che cosa sono i meta prompt e come aiutano a restringere l'output, ad assicurare che sia accessibile e a fornire una migliore user experience.

## Configurazione

Se non l'hai ancora fatto, configura il tuo ambiente di sviluppo. Ecco come puoi farlo: [Configura il tuo ambiente](/docs/setup/README.md).

## Risorse correlate

[![Guarda un breve video sul prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_Questo video offre un'introduzione per migliorare le tue capacità di "prompting", insegnandoti come dare all'IA istruzioni più chiare ed effettive per ottenere risultati migliori._

*🎥 Clicca sull'immagine qui sopra per guardare un breve video sul engineering*

💼 Slide: [Prompt engineering](/videos/slides/02-prompt-engineering.pptx)

## Storia: "Biglietto di viaggio"

> [!NOTE] 
> La nostra storia finora: hai intrapreso un viaggio nel tempo con Leonardo da Vinci, esplorando le meraviglie del Rinascimento. Hai incontrato lo Scarabeo del Tempo, un misterioso dispositivo che ti permette di viaggiare nel tempo e nello spazio.
>
> Vedi [Lezione 1](/lessons/translations/01-intro-to-genai/README.it.md) se vuoi ripercorrere la storia dall'inizio e iniziare a usare l'IA generativa.

> [!NOTE] 
> Sebbene consigliamo di leggere la storia (è divertente!), [clicca qui](#interagisci-con-sforza) se preferisci passare direttamente al contenuto tecnico.

**Tu:** «Vediamo se riesco a tornare a casa.»

Prima che tu riesca a premere il pulsante, le porte dell'officina si spalancano con un fragore assordante. Un uomo, con le spalle larghe e vestito con abiti costosi, è in piedi sulla soglia, agita un pezzo di carta in aria, urlando:

!["Un arrabbiato Ludovico Sforza irrompe dalla porta](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png)

*Ludovico Sforza* 

**Sforza**: «Da Vinci, dov'è il mio dipinto?»

**Leonardo:** «È Sforza. Vuole che io finisca un dipinto: 'L'Ultima Cena.'»

**Tu:** «Non potresti semplicemente dirglielo?»

**Leonardo:** «Ho provato, ma non è un uomo paziente.»

Corri dietro a Leonardo, irrompendo dalla porta sul retro in un vicolo buio, dove trovi un cavallo e una carrozza ad aspettarti.

Leonardo afferra le redini e saltate entrambi sulla carrozza. Con un secco schiocco di frusta, il cavallo parte, galoppando per le strette vie di Firenze.

**Leonardo:** «Prova a premere quel marchingegno, si stanno avvicinando!»

**Tu:** «Ok, Scarabeo del Tempo, ascoltami attentamente. Ho bisogno di tornare al presente, a casa, ok?» Improvvisamente, la carrozza urta un dosso e lo Scarabeo del Tempo vola dalle tue manie atterra sul pavimento. Inizia a emettere un segnale acustico e annuncia, con una voce robotica: "Andare a Roma".

**Tu:** «No, non Roma, casa… casa…»

Un turbinio di colori avvolge la carrozza, il mondo intorno a te si dissolve in un caleidoscopio di luce.

## Fuga

Il turbinio di colori svanisce e ti ritrovi nella carrozza, che ora sfreccia lungo la via Appia a Roma e, con tuo grande stupore, ti ritrovi nel mezzo di una corsa di cavalli. I carri sfrecciano rombando, le ruote sollevano nuvole di polvere.

![Fuga da Roma](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/escape.png)

**Tu:** «Leonardo, where are we?»

**Leonardo:** «Sembra che siamo finiti nel mezzo di una corsa! Dobbiamo andarcene da qui!»

Ti aggrappi ai lati della carrozza mentre sbanda nel caos. I soldati romani a cavallo si stanno avvicinando, le loro armature scintillano alla luce del sole.

**Tu**: «Là! Verso il porto!»

Leonardo guida la carrozza verso l'uscita, le ruote slittano sul selciato. I soldati ti incalzano, le loro grida ti risuonano nelle orecchie.

**Leonardo:** «Dobbiamo seminarli! Cerca un posto dove nasconderci!»

Scruti le strette vie con il cuore che batte all'impazzata.

**Tu:** «Là! Un vicolo cieco!»

Leonardo svolta nel vicolo, la carrozza sobbalza mentre affronta la curva stretta. Salti fuori dalla carrozza e aiuti Leonardo a trascinare un enorme congegno dal retro. È la sua invenzione: la _vite aerea_.

**Leonardo:** «Presto, dobbiamo portarlo sul tetto!»

Entrambi vi sforzate sotto il peso del dispositivo. Il rumore dell'inseguimento dei soldati si fa più forte, i loro passi echeggiano sui muri. Raggiungete il tetto, ansimando e sudando.

**Leonardo:** «Aiutami a installarlo!»

Lavorate insieme, muovendo le mani con esperta precisione. Salite entrambi sul dispositivo, con il cuore che batte forte nel petto.

**Leonardo:** «Tieniti forte!»

Con un'ultima spinta, la vite aerea inizia a girare. Le pale catturano l'aria e si avverte un'improvvisa spinta. Il terreno si abbassa sotto i piedi mentre il dispositivo decolla, librandosi sopra i tetti di Roma.

**Tu:** «Ce l'abbiamo fatta, Leonardo! Stiamo volando!»

**Leonardo:** «Sì, ma dobbiamo trovare un posto sicuro dove atterrare.»

Ammiri la città, gli antichi edifici si estendono sotto di voi.

![In volo, guarda la città dall'alto con i piedi penzoloni](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/airborne.png)

## Interagisci con Sfroza

Se vuoi interagire con Sfroza, esegui la app [Personaggi](/app/README.md).

> [!IMPORTANT]
> Questo è interamente frutto di fantasia: le risposte sono generate dall'intelligenza artificiale.
> [Dichiarazione di responsabilità sull'IA](../../README.md#responsible-ai-disclaimer)

![Ludovico Sforza](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png)

**Passaggi**:

1. Avvia un [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript).
2. Passa a _/app_ nella root del repo.
3. Individua la console ed esegui `npm install` seguito da `npm start`.
4. Una volta comparso, seleziona il pulsante "Open in Browser".
5. Chatta con Sforza.

Per una spiegazione più dettagliata della app, vedi [Spiegazione dettagliata della app](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Se stai eseguendo il progetto in locale sul tuo computer, consulta la guida QuickStart per ottenere la configurazione di un token per l'[accesso personale a GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e sostituisci la chiave nel codice.

## Che cos'è il prompt engineering?

**Scarabeo del Tempo:** «Dobbiamo parlare di prompt engineering.»

**Tu:** «Dobbiamo proprio? Che cos'è?»

**Scarabeo del Tempo:** «Il prompt engineering, a dispetto del nome, non è qualcosa che riguardi la costruzione di ponti o strade, ma piuttosto riguarda la creazione di "prompt" per ottenere l'output desiderato da un modello di IA generativa.»

**Tu:** «Ok, ma perché è importante che io lo conosca?»

**Scarabeo del Tempo:** «Beh, tu vuoi far atterrare la vite aerea, giusto?»

**Tu:** «Sì, preferibilmente tutta intera. :-)»

**Scarabeo del Tempo:** «Lo immaginavo, adesso ascoltami! Il prompt engineering consiste nel creare i prompt giusti per ottenere l'output desiderato da un modello linguistico.»

**Scarabeo del Tempo:** «I Large Language Model hanno quelle che vengono chiamate _proprietà emergenti_, ovvero caratteristiche che non sono programmate esplicitamente nel modello, ma derivano dal modo in cui viene addestrato su grandi quantità di dati testuali. Studiando queste proprietà emergenti, è possibile trarre conclusioni e scoprire modelli che possono aiutare a ottenere risultati migliori dal modello.»

**Tu:** «Ok, quindi abbiamo scoperto che esistono dei pattern che possono aiutarci a ottenere risultati migliori dal modello. Ma come ci aiuta questo ad atterrare con la vite aerea?»

**Scarabeo del Tempo:** «Sì, esatto e… wow, non sei mica uno paziente, vero?»

**Tu:** «Beh, non lo saresti neanche tu se stessi volando sopra un congegno senza chiare istruzioni per l'atterraggio.»

**Scarabeo del Tempo:** «Sono proprio qui con te, lo sai, ma torniamo al punto.»

## Come il prompt engineering può aiutare gli sviluppatori di applicazioni

**Scarabeo del Tempo:** «Come professionista, essere in grado di creare prompt migliori è un'abilità che dovresti voler avere nel tuo bagaglio.»

Guardandolo dalla prospettiva di uno sviluppatore, puoi usare il prompt engineering per:

- **Ottenere risultati più accurati** dal tuo modello linguistico e in definitiva migliorare la user experience della tua applicazione.
- **Controllare l'output** del modello per assicurare che sia rilevante e appropriato per i tuoi utenti. Questo è particolarmente importante quando si ha a che fare con argomenti sensibili e anche per proteggere la tua brand reputation.
- **Formattare l'output** in un modo che sia facile da capire e consumare. Approfondiremo questo aspetto nel prossimo capitolo.

**Scarabeo del Tempo:** «Esploriamo le diverse tecniche e strategie che puoi utilizzare per creare prompt efficaci per il tuo modello linguistico.»

## Tecniche e strategie di prompt engineering

**Scarabeo del Tempo:** «Ecco alcune tecniche e strategie che puoi usare per creare prompt efficaci.»

- **Few-shot prompting**. Questa tecnica consiste nel fornire all'IA alcuni esempi per mostrare il tipo di risposta desiderata.
- **Chain-of-Thought prompting** Questa tecnica consiste nel fornire una sequenza di prompt per insegnare all'IA come risolvere un compito complesso passo dopo passo.
- **Meta-prompt**. Questa tecnica prevede l'aggiunta di dettagli o istruzioni extra per modellare l'output dell'IA in modo più preciso.
- **Maieutic prompting**. Questa tecnica prevede l'uso di domande guida per indirizzare l'IA verso una risposta specifica.

**Tu:** «Sembra interessante, suppongo che mi darai qualche esempio.»

**Scarabeo del Tempo:** «Sì, veniamo subito al dunque. Diamo un'occhiata ad alcuni esempi per ciascuna di queste tecniche, così da capire come funzionano nella pratica.»

### Few-shot prompting: Fornire esempi per guidare l'output dell'IA

Few-shot prompting forniscono a un modello di intelligenza artificiale alcuni esempi per orientare il suo output. Immagina di essere nella vite aerea e di chiedere informazioni sull'antica Roma. I prompt few-shot potrebbero apparire così.

> "Tell me about the Roman Colosseum." → "It’s a massive amphitheater."
>
> "What was life like in ancient Rome?" → "It was bustling and tough."

**Tu:** «Capisco! Questo aiuta l'IA a fare le cose per bene, anche quassù! ;)»

**Scarabeo del Tempo:** «Esattamente, è un metodo consolidato. Il prossimo!»

### Chain-of-Thought Prompting: Mostra il ragionamento passo dopo passo

**Scarabeo del Tempo:** «Questa tecnica guida l'IA mostrandole un ragionamento passo dopo passo per risolvere un problema. Immagina di far atterrare la vite aerea. Potresti spiegarlo così.»

- Sei a 100 metri di altezza.
- La gravità spinge a 9,8 m/s².
- Formula: altezza = ½ * g * t².
- Soluzione: t ≈ 4,5 secondi per atterare.

Il tuo prompt diventa:

> - 100 meters above ground
> - Gravity: 9.8 m/s²
> - How many seconds to land?

**Risposta: 4,5 secondi**

**Tu:** «È stato veloce, speriamo che i numeri tornino!»

**Scarabeo del Tempo:** «Insegna all'IA a ragionare passo dopo passo.»

**Tu:** «Quindi si tratta di scomporre i problemi per ottenere risposte precise?»

**Scarabeo del Tempo:** «Sì, perfetto per compiti complessi come un'app di tutoring di matematica!»

### Maieutic Prompting: Mettere in discussione l'output per verificarne l'accuratezza

**Scarabeo del Tempo:** «Questa tecnica utilizza domande per verificare l'accuratezza dell'output dell'IA. Si chiede di ogni passaggio per garantire un ragionamento coerente.»

**Tu:** «Quindi, mettere in discussione tutto quello che dice? Sembra divertente. ;)»

**Scarabeo del Tempo:** «Mettiamo alla prova l'atterraggio con la nostra vite aerea.»

- 100 metri di altezza
- Gravità: 9,8 m/s²
- Quanti secondi per atterrare? (Risposta: 4,5s)

Chiedi: "Why 4.5 seconds?"

> **Response:**
> - Height = 100m, initial vertical speed = 0 m/s, gravity = 9.8 m/s². 
> - Use: height = ½ * g * t².
> - Solve: 100 = ½ * 9.8 * t² → t ≈ 4.5s.

**Scarabeo del Tempo:** «Si tratta di verificare le risposte dell'IA con domande di follow-up.»

**Tu:** «Quindi, non fidarti, ma indaga con delle domande?»

**Scarabeo del Tempo:** «Esatto! Garantisce un ragionamento solido.»

## Meta Prompt: Aggiungere istruzioni extra per la precisione

**Scarabeo del Tempo:** «Il prossimo, meta prompt.»

**Tu:** «Uhm, un the prima?»

**Scarabeo del Tempo:** «_Sigh_. Aggiungono indicazioni ai prompt per un output migliore, ideali per le app sensibili e rivolte al cliente.»

Ecco un esempio:

> **Meta Prompt:** Use only Contoso Inc. products (basketballs, soccer balls, tennis rackets). Keep it accurate and user-friendly.
> **Prompt:** Best sports products for beginners?
> **Response:** Basketballs, soccer balls, and tennis rackets—perfect for coordination and agility.

Garantisce accuratezza e aderenza ai prodotti Contoso. Senza:

> **Prompt:** Best sports products for beginners?
> **Response:** Basketballs, soccer balls, tennis rackets, plus footballs—_not all Contoso items_.

**Tu:** «Pratico! Mantiene le risposte in carreggiata, come le leggi per il mio automa.»

**Scarabeo del Tempo:** «Lo sapresti, _"Frankenstein"_… ehm, niente!»

**Tu:** «Cosa?»

**Scarabeo del Tempo:** «Non importa.»

> *Frankenstein* di Mary Shelley: 1818, 42 anni prima del tuo viaggio nel tempo. [Leggi tutto](https://it.wikipedia.org/wiki/Mary_Shelley)

**Tu:** «Quindi, senza meta prompt è il caos?»

**Scarabeo del Tempo:** «Sì, otterresti risposte estranee al brand.»

**Tu:** «Capito, la precisione è importante!»

## Compito - Aiutiamo i nostri eroi a far atterrare la vite aerea

**Tu:** «Questa è la parte in cui mi mostri come far atterrare la vite aerea, giusto?»

**Scarabeo del Tempo:** «Sì, cominciamo. La collina si trova a circa 100 metri dalla nostra posizione attuale. Ecco come possiamo impostare il prompt.»

- Altezza attuale dal suolo: 100 metri
- Avanzamento a: 10 metri al secondo
- Gravità: 9,8 metri al secondo quadrato
- Vento ascendente a: 0,7 metri al secondo

**Leonardo:** «Il tuo gadget basato sull'IA può aiutarti a calcolare se ce la faremo o se dovremo fare un altro salto temporale?»

**Scarabeo del Tempo:** «Sì, certo che potrei. Comunque mi chiamo George, lo preferisco a gadget! In realtà, lascerò che siate voi due a capire come impostare il prompt. ☺️»

Crea una app che chieda:

- Altezza
- Velocità di avanzamento
- Gravità
- Vento ascendente
- Distanza dalla collina

Utilizza la tecnica chain-of-thought per arrivare a una risposta.

Ecco un progetto da cui partire [Progetto iniziale](/app/README.md).

## Soluzione

Crea una app in JavaScript che chieda i seguenti input: 

- Altezza attuale dal suolo
- Avanzamento a metri al secondo
- Gravità in metri al secondo quadrato
- Vento ascendente in metri al secondo
- Distanza dalla collina

Quindi utilizza l'LLM per incorporare questi input e sfruttare la tecnica di suggerimento della chain-of-thought per guidare il modello verso la risposta corretta.

[Soluzione](/lessons/03-prompt-engineering/solution/solution.md) 

## Verifica delle conoscenze

**Domanda:** What is prompt engineering? Select all that apply.

A. Prompt engineering is about building bridges and roads.
B. Prompt engineering is about crafting the right prompts to get the desired output from a language model.
C. Prompt engineering is about training a model to recognize patterns in data.

[Soluzione del quiz](/lessons/03-prompt-engineering/solution/solution-quiz.md)

## Risorse per lo studio autonomo

- [Prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering)
- [Prompt engineering fundamentals](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md?WT.mc_id=academic-105485-koreyst)
- [Advanced prompt engineering](https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts) 

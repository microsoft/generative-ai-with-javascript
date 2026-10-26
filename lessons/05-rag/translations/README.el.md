# Μάθημα 5: Μίλησε με τα δεδομένα σου με Ανάκτηση-Ενισχυμένη Γένεση (Retrieval-Augmented Generation, RAG)

Σε αυτό το κεφάλαιο θα μάθεις:

- Τα βασικά του Retrieval-Augmented Generation (RAG) (Ανάκτηση-Ενισχυμένη Γένεση) και πώς μπορεί να χρησιμοποιηθεί για να βελτιώσει τις απαντήσεις των generative AI models.
- Πώς να ενσωματώνεις εξωτερικές πηγές δεδομένων στην AI εφαρμογή σου.
- Πώς να αξιοποιείς τα δεδομένα σου για να βελτιώνεις τη συνάφεια και την ακρίβεια του περιεχομένου που δημιουργείται από AI.

## Ρύθμιση

Αν δεν το έχεις κάνει ήδη, ρύθμισε το περιβάλλον ανάπτυξής σου. Δες εδώ πώς μπορείς να το κάνεις: [Setup your environment](/docs/setup/README.md).

## Σχετικοί πόροι

[![Watch a short video about RAG](https://img.youtube.com/vi/xkFOmx5yxIA/0.jpg)](https://www.youtube.com/watch?v=xkFOmx5yxIA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=4)

_Αυτό το βίντεο εξηγεί το Retrieval Augmented Generation (RAG), μια μέθοδο που βοηθά την AI να χρησιμοποιεί το περιεχόμενό σου μαζί με τα δεδομένα εκπαίδευσής της για καλύτερα αποτελέσματα._

*🎥 Click on the image above to watch a short video about retrieval augmented generation, RAG*

💼 Slides: [Retrieval augmented generation, RAG](/videos/slides/03-rag.pptx)

## Αφήγηση - Genesis

> [!NOTE] 
> _Η ιστορία μας μέχρι τώρα. Είσαι ένας μηχανικός από το Λονδίνο της δεκαετίας του 1860. Δούλευες πάνω στο αυτόματό σου και έλαβες ένα γράμμα από τον Charles Babbage που τελικά σε οδήγησε σε μια βιβλιοθήκη όπου έπιασες στα χέρια σου μια συσκευή ταξιδιού στον χρόνο. Στα ταξίδια σου στον χρόνο βρέθηκες στη Φλωρεντία, όπου γνώρισες τον Leonardo Da Vinci. Πήγες επίσης στην Αυτοκρατορία των Αζτέκων και από εκεί συνεχίζεται η ιστορία._
>
> Δες το [Lesson 1](/lessons/01-intro-to-genai/README.md) αν θέλεις να παρακολουθήσεις την ιστορία από την αρχή. 

> [!NOTE] 
> Παρότι προτείνουμε να ακολουθήσεις την ιστορία (είναι διασκεδαστική!), [click here](#interact-with-ada-lovelace) αν προτιμάς να πας κατευθείαν στο τεχνικό περιεχόμενο.

**Εσύ**: "Leonardo, ήρθε η ώρα να φύγουμε," λες, πατώντας το κουμπί. Η συσκευή ζωντανεύει με βουητό και μια μηχανική φωνή αντηχεί: "It's time to go home, it's time for 'genesis'."

**Leonardo:** "Genesis? Che cosa significa?" ρωτά μπερδεμένος ο Leonardo. Πριν προλάβεις να απαντήσεις, ο κόσμος διαλύεται σε θολούρα από χρώματα και ήχους, καθώς ο ναός ξεθωριάζει και παρασύρεσαι μέσα στον χρόνο.

Προσγειώνεσαι στον κήπο· είναι αργά τη νύχτα, με πυκνή ομίχλη και απόκοσμα φώτα να τρεμοπαίζουν στο βάθος. Το αρχοντικό δεσπόζει μπροστά σου. Ο Leonardo κοιτά γύρω του με μάτια γεμάτα θαυμασμό.

![Old mansion shown in a deep fog](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/mansion.jpeg)


### Τρέχοντας να ξεφύγεις από τα σκυλιά

Ακούς γαβγίσματα και τον ήχο σκυλιών που τρέχουν προς το μέρος σου. Γυρνάς στον Leonardo, "Πρέπει να μπούμε μέσα, τώρα!"

![Running from the dogs](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/dogs.jpeg)

Καθώς φτάνετε στην πόρτα του αρχοντικού, εκείνη ανοίγει απότομα και ένα ζευγάρι βοηθών βγαίνει βιαστικά. Αφού σας εξετάσουν, σας κάνουν νόημα να τους ακολουθήσετε.

Βρίσκεσαι πρόσωπο με πρόσωπο με την Ada Lovelace, με τα μάτια της να λάμπουν από περιέργεια.

### Συνάντηση με την Ada και τον Charles

**Ada:** "Ah, it's about time you arrived," λέει ζεστά. "We need you to run an errand."

**Εσύ:** "About time", το λέτε συνέχεια αυτό. Ο Δεινοκράτης είπε το ίδιο, αλλά δεν είμαι σίγουρος τι εννοείτε;

**Ada:** Σσσ, δεν υπάρχει χρόνος γι’ αυτό τώρα, πρέπει να μιλήσουμε για τη συσκευή που κρατάς. Charles, εξήγησέ τους..

**Εσύ:** Μα..

![Ada Lovelace and Charles Babbage working on a device](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada.jpeg)

Ο Charles Babbage κάνει ένα βήμα μπροστά, εξετάζοντας το Time Beetle στο χέρι σου. "Αυτή η συσκευή είναι αξιοσημείωτη, αλλά είναι και λίγο ελαττωματική, έτσι δεν είναι; Το έχεις προσέξει, είμαι βέβαιος."

Ο Leonardo κουνά το κεφάλι. "Sì, έχει αρχίσει να συμπεριφέρεται παράξενα."

**Ada:** Η συσκευή δεν είναι ακόμη έτοιμη, πρέπει να της δώσουμε περισσότερες δυνατότητες. Πρέπει να την κάνουμε πιο έξυπνη, πιο συνειδητοποιημένη για τον κόσμο γύρω της. Η ιδέα είναι να μπορεί να ανακτά πληροφορίες από διαφορετικές χρονικές περιόδους και να τις χρησιμοποιεί για να δημιουργεί απαντήσεις που είναι ακριβείς και σχετικές. Μπορείς να βοηθήσεις σε αυτό;

**Εσύ:** Φυσικά, ακούγεται σαν να πρέπει να _ενισχύσουμε_ τις απαντήσεις της συσκευής με δεδομένα, βγάζει νόημα.

**Ada:** Ας μιλήσουμε για μια έννοια που θα ήθελα να ονομάσω RAG, ή Retrieval-Augmented Generation.

<a id="interact-with-ada-lovelace"></a>
## Αλληλεπίδρασε με την Ada Lovelace

Αν θέλεις να αλληλεπιδράσεις με την Ada, εκτέλεσε την εφαρμογή [Characters](/app/README.md). 

> [!IMPORTANT]
> Αυτό είναι εξ ολοκλήρου φανταστικό· οι απαντήσεις δημιουργούνται από AI.
> [Αποποίηση ευθύνης για Responsible AI](/README.md#responsible-ai-disclaimer)

![Ada Lovelace](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada-2.jpeg)

**Βήματα**:

1. Ξεκίνησε ένα [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Πήγαινε στο _/app_ στη ρίζα του αποθετηρίου.
3. Βρες την κονσόλα και εκτέλεσε `npm install` και μετά `npm start`.
4. Μόλις εμφανιστεί, επίλεξε το κουμπί "Open in Browser".
5. Συνομίλησε με την Ada.

Για μια πιο αναλυτική εξήγηση της εφαρμογής, δες το [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
>  Αν εκτελείς το project τοπικά στον υπολογιστή σου, δες τον οδηγό QuickStart για να ρυθμίσεις ένα token [GitHub personal access](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) και αντικατέστησε το κλειδί στον κώδικα.

## Γνωστές προκλήσεις με τα μεγάλα γλωσσικά μοντέλα, LLMs

**Ada:** Ας ξεκινήσουμε συζητώντας για την AI που θα χρησιμοποιήσουμε για να δώσουμε δύναμη στη συσκευή. Θα βασιστούμε σε “AI models” σε συνδυασμό με ένα σύστημα ανάκτησης δεδομένων για να βελτιώσουμε την ποιότητα των απαντήσεων.

Πρώτα, πρέπει να αντιμετωπίσεις ορισμένες προκλήσεις πριν μπεις στις λεπτομέρειες του RAG. Αυτά τα μοντέλα, εκπαιδευμένα σε τεράστιες ποσότητες κειμενικών δεδομένων, μπορούν να παράγουν σχετικές και σωστές απαντήσεις. Όμως, όπως κάθε πηγή δεδομένων, η έξοδός τους μπορεί να είναι ανακριβής, ελλιπής ή παραπλανητική για διάφορους λόγους.

- **Out-of-date sources:** Τα δεδομένα που χρησιμοποιήθηκαν για την εκπαίδευση του μοντέλου μπορεί να είναι παρωχημένα και να μην είναι πλέον ακριβή.
- **Wrong or inaccurate information:** Οι πηγές που χρησιμοποιήθηκαν για την εκπαίδευση του μοντέλου μπορεί να περιέχουν λανθασμένες ή παραπλανητικές πληροφορίες, όπως fake news ή μεροληπτικές απόψεις.
- **Non-authoritative sources:** Το μοντέλο μπορεί να μην μπορεί να ξεχωρίσει αξιόπιστες από μη αξιόπιστες πηγές στα δεδομένα εκπαίδευσής του, οδηγώντας σε μη αξιόπιστες πληροφορίες.

Αυτό κάνει δύσκολο να ξέρεις αν η πληροφορία που παράγει ένα LLM είναι σωστή ή όχι. Εκεί ακριβώς έρχεται το RAG.

**Εσύ:** Άρα πρέπει να βεβαιωθώ ότι η συσκευή μπορεί να δίνει ακριβείς πληροφορίες, ακόμη κι όταν δεν είναι σίγουρη για την απάντηση;

**Ada:** Ναι, αυτή είναι η ιδέα. Συνδυάζοντας τα πλεονεκτήματα των retrieval-based μεθόδων και των generative models, αποκτούμε ένα καλύτερο AI σύστημα.

## Retrieval-Augmented generation, βασικές έννοιες του RAG

**Ada:** Α, ναι, ώρα να μιλήσουμε ειδικά για το RAG. Ας ξεκινήσουμε με μερικά βασικά:

Το Retrieval-Augmented generation (RAG) είναι μια ισχυρή τεχνική που συνδυάζει τα πλεονεκτήματα δύο διαφορετικών προσεγγίσεων στην επεξεργασία φυσικής γλώσσας: retrieval-based methods και generative models. Αυτή η υβριδική προσέγγιση επιτρέπει τη δημιουργία απαντήσεων που είναι ταυτόχρονα σχετικές με τα συμφραζόμενα και πλούσιες σε περιεχόμενο, βοηθώντας να μετριαστούν ορισμένες από τις γνωστές προκλήσεις των LLMs.

Στον πυρήνα του, το RAG περιλαμβάνει δύο κύρια συστατικά: έναν **retriever** και έναν **generator**.

- **The retriever:** είναι υπεύθυνος για την εύρεση σχετικών πληροφοριών από εξωτερικές πηγές δεδομένων που μπορούν να χρησιμοποιηθούν για να βελτιώσουν τις απαντήσεις που παράγονται από AI, όπως μια μηχανή αναζήτησης. Αυτή η πληροφορία μπορεί να είναι σε μορφή κειμένου, εικόνων ή οποιουδήποτε άλλου τύπου δεδομένων που σχετίζεται με το πλαίσιο της συνομιλίας, αν και το κείμενο είναι ο πιο συνηθισμένος τύπος δεδομένων που χρησιμοποιείται.

- **The generator:** παίρνει τις ανακτημένες πληροφορίες και τις χρησιμοποιεί για να δημιουργήσει μια απάντηση που είναι σχετική με τα συμφραζόμενα και ενημερωτική.

Ακολουθεί ένα σχήμα που δείχνει πώς λειτουργεί ένα σύστημα RAG:

![Schema of a RAG system](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/rag.png)

1. **User input:** Ο χρήστης κάνει μια ερώτηση.
2. **Retriever:** Το retriever component αναζητά σχετικές πληροφορίες χρησιμοποιώντας μία ή περισσότερες knowledge bases.
3. **Augmented prompt:** Οι πληροφορίες που ανακτώνται συνδυάζονται με την ερώτηση του χρήστη και το context, ώστε να δημιουργηθεί ένα augmented prompt.
4. **Generator:** Το LLM χρησιμοποιεί το augmented prompt για να δημιουργήσει μια απάντηση.

Αυτός ο συνδυασμός επιτρέπει πιο ακριβείς και σχετικές απαντήσεις, χρησιμοποιώντας δεδομένα που παρέχεις εσύ αντί να βασίζεται μόνο στα δεδομένα εκπαίδευσης του μοντέλου.

**Ada:** Ερωτήσεις;

**Εσύ:** Άρα ο retriever βρίσκει την πληροφορία και ο generator τη χρησιμοποιεί για να δημιουργήσει την απάντηση;

**Ada:** Ακριβώς, αρχίζεις και το πιάνεις.

## Ενσωμάτωση εξωτερικών πηγών δεδομένων

**Ada:** Τώρα που καλύψαμε τα βασικά του RAG, ας μιλήσουμε για το πώς μπορείς να ενσωματώσεις εξωτερικές πηγές δεδομένων στην AI εφαρμογή σου.

Η ενσωμάτωση εξωτερικών πηγών δεδομένων στην AI εφαρμογή σου μπορεί να γίνει με διάφορους τρόπους, ανάλογα με τον τύπο των δεδομένων που θέλεις να χρησιμοποιήσεις και την πολυπλοκότητα του μηχανισμού ανάκτησης. Ακολουθούν μερικές συνηθισμένες μέθοδοι:

- **APIs:** Πολλές εξωτερικές πηγές δεδομένων παρέχουν APIs που σου επιτρέπουν να αποκτάς πρόσβαση στα δεδομένα τους προγραμματιστικά. Μπορείς να χρησιμοποιήσεις αυτά τα APIs για να ανακτάς πληροφορίες σε πραγματικό χρόνο και να τις αξιοποιείς για να βελτιώνεις τις απαντήσεις που δημιουργεί η AI.

- **Databases:** Αν έχεις μεγάλο όγκο δεδομένων που θέλεις να χρησιμοποιήσεις για ανάκτηση, μπορείς να τα αποθηκεύσεις σε μια βάση δεδομένων και να τα ερωτάς όταν χρειάζεται. Αυτό είναι χρήσιμο για structured data που πρέπει να είναι γρήγορα προσβάσιμα.

Αφού καταλήξεις σε μια μέθοδο ενσωμάτωσης εξωτερικών πηγών δεδομένων, ίσως χρειαστεί επίσης να σκεφτείς πώς θα κάνεις preprocess και format τα δεδομένα ώστε να μπορούν να χρησιμοποιηθούν εύκολα από το AI model. Αυτό μπορεί να περιλαμβάνει καθαρισμό των δεδομένων, μετατροπή τους σε κατάλληλη μορφή (όπως plain text ή Markdown) ή διαχωρισμό τους σε μικρότερα chunks για ευκολότερη ανάκτηση.

> [!NOTE]
> Όταν ενσωματώνεις εξωτερικές πηγές δεδομένων στην AI εφαρμογή σου, είναι σημαντικό να λαμβάνεις υπόψη τις επιπτώσεις στην ιδιωτικότητα και την ασφάλεια κατά την πρόσβαση και αποθήκευση δεδομένων. Βεβαιώσου ότι διαθέτεις τις απαραίτητες άδειες και προστασίες για να διαφυλάξεις τα δεδομένα και να συμμορφώνεσαι με τυχόν σχετικούς κανονισμούς.

Αν χρησιμοποιείς βάση δεδομένων, πρέπει επίσης να σκεφτείς πώς θέλεις να *αναζητάς τα δεδομένα σου* ώστε να ανακτάς την πιο σχετική πληροφορία. Αυτό μπορεί να γίνει με keyword search, full-text search ή πιο προχωρημένες τεχνικές όπως semantic search ή vector search, που μπορεί να απαιτούν ειδικό indexing. Θα καλύψουμε προχωρημένες τεχνικές αναζήτησης σε μελλοντικό μάθημα.

**Εσύ**: Μπορείς να εξηγήσεις όρους όπως API και Databases με όρους πιο κοντινούς στη δεκαετία του 1860;

**Ada**: Φυσικά, ένα API είναι σαν έναν αγγελιοφόρο που παραδίδει ένα μήνυμα από ένα μέρος σε ένα άλλο, και μια database είναι σαν μια βιβλιοθήκη όπου αποθηκεύεις όλα τα βιβλία σου.

**Εσύ**: Α, μάλιστα, τώρα βγάζει νόημα.

## Ενίσχυση του prompt

**Ada:** Είσαι ακόμη μαζί μου; Ωραία, ας περάσουμε στο επόμενο βήμα, ας προσπαθήσουμε να βελτιώσουμε το prompt που στέλνεται στο AI model.

**Ada:** Μόλις έχεις στήσει έναν τρόπο να τραβάς πληροφορίες από τα δεδομένα σου, μπορείς να τις προσθέσεις στο prompt του AI model. Απλώς ανακάτεψε τις ανακτημένες πληροφορίες μέσα στο input text μαζί με λίγο επιπλέον context ή καθοδήγηση για να κατευθύνεις την απάντηση της AI.

Για παράδειγμα, αν φτιάχνεις μια εφαρμογή που απαντά σε ερωτήσεις για αυτοκίνητα, θα μπορούσες να έχεις ένα prompt όπως το παρακάτω:

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

Παρέχοντας στο AI model επιπλέον context και πληροφορία, μπορείς να βοηθήσεις τη διαδικασία παραγωγής και να εξασφαλίσεις ότι οι απαντήσεις είναι ακριβείς και σχετικές με το θέμα.

> [!TIP]
> Πρόσεξε αυτό το μέρος του prompt: `If there's not enough data in provided sources, say that you don't know.`. Αυτό είναι σημαντικό για να αποφευχθεί η δημιουργία λανθασμένων πληροφοριών από την AI όταν δεν υπάρχουν αρκετά δεδομένα για να δοθεί αξιόπιστη απάντηση. Αυτή η τεχνική ονομάζεται *escape hatch* και είναι καλή πρακτική για να εξασφαλίζεις την ποιότητα του παραγόμενου περιεχομένου.

Το RAG μπορεί να θεωρηθεί προχωρημένη μορφή *prompt engineering*.

### Παράδειγμα κώδικα

**Ada:** Η εξάσκηση φέρνει την τελειότητα, οπότε ας εφαρμόσουμε όσα μάθαμε με ένα παράδειγμα. Θα ενσωματώσουμε ένα απλό retrieval system σε μια εφαρμογή JavaScript χρησιμοποιώντας ένα αρχείο [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) με δεδομένα υβριδικών αυτοκινήτων και έναν βασικό αλγόριθμο αναζήτησης για να τραβάμε σχετικές πληροφορίες με βάση την ερώτηση του χρήστη.

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

Μπορείς να βρεις αυτόν τον κώδικα στο αρχείο [`example/rag-cars.js`](/lessons/05-rag/example/rag-cars.js) μαζί με το αρχείο [`hybrid.csv`](/lessons/05-rag/example/hybrid.csv) που περιέχει τα δεδομένα που χρησιμοποιούνται για την ανάκτηση.

**Ada:** Μόλις εκτελέσεις αυτόν τον κώδικα, θα πρέπει να δεις τα δεδομένα που βρέθηκαν στο αρχείο CSV από τον retriever, μορφοποιημένα ως markdown table, και στη συνέχεια την απάντηση που δημιουργήθηκε από την AI στην ερώτηση. Δοκίμασε να αλλάξεις την ερώτηση για να δεις πώς αλλάζουν τα ανακτημένα δεδομένα και η απάντηση. Μπορείς επίσης να δοκιμάσεις ερωτήσεις για άσχετα θέματα ώστε να δεις πώς χειρίζεται το AI model τέτοιες περιπτώσεις.

```text
Example of the output:

Found 1 matches:
| Person | Time Period | Description |
|---|---|---|
| Leonardo Da Vinci | 15th century | Italian polymath known for his art and inventions. |
| Isaac Newton | 17th century | English mathematician and physicist who formulated the laws of motion and universal gravitation. |
```

**Εσύ:** Αυτό είναι εξαιρετικό, καταλαβαίνω πώς μπορεί να φανεί χρήσιμο όταν χρησιμοποιώ τη συσκευή, ή μάλλον πώς ήδη ήταν ή θα είναι χρήσιμο, το ταξίδι στον χρόνο είναι μπερδεμένο *sigh*.

**Ada:** Έλα τώρα, τα πας εξαιρετικά. Ας προχωρήσουμε στο επόμενο βήμα.

## Εργασία - Βοηθώντας την Ada και τον Charles

Έχοντας μάθει για το RAG, είσαι τώρα έτοιμος να βοηθήσεις την Ada και τον Charles με τη συσκευή τους. Ωστόσο, κοιτάζοντάς τη πιο προσεκτικά, σου φαίνεται γνώριμη.

**Εσύ:** Time Beetle, ξέρεις τι είναι αυτό;

**Time Beetle:** Φυσικά, είμαι εγώ, ή μάλλον θα είμαι. Μου λείπουν μερικά κομμάτια όμως. Τώρα που το σκέφτομαι, μου λείπουν πολλά κομμάτια, δεν έχω καν κέλυφος ακόμα.

**Ada:** Το Time Beetle είναι μια συσκευή που σου επιτρέπει να ταξιδεύεις στον χρόνο και τον χώρο, όταν βέβαια καταφέρουμε να τη βάλουμε να λειτουργήσει σωστά. Όπως έλεγα, πρέπει να της προσθέσουμε ένα νέο χαρακτηριστικό, ένα retrieval-augmented generation (RAG) module. Αυτό θα μας βοηθήσει να ανακτούμε πληροφορίες και το απαραίτητο context από διαφορετικές χρονικές περιόδους καθώς ταξιδεύεις. Θέλουμε να φροντίσουμε ώστε να αναφερόμαστε σε κάθε λογής πηγές, η Wikipedia είναι μια καλή αρχή.

**Εσύ:** Τι χρειάζεται να κάνω;

**Ada:** Ορίστε παράδειγμα κώδικα που ανακτά πληροφορίες κειμένου για τον Tim Berners-Lee από τη Wikipedia, ο Tim θα είναι πολύ σημαντικός μια μέρα.

```javascript
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee');
const data = await response.json();
const text = Object.values(data.query.pages)[0]?.extract;
```

**Εσύ:** Υποθέτω ότι δεν είμαι ο μόνος που έχει πάει στο μέλλον;

**Ada:** ...

## Λύση

[Solution](/lessons/05-rag/solution/rag-www.js)

## Έλεγχος γνώσεων

**Ερώτηση**: Ποιος είναι ο ρόλος του retriever σε ένα σύστημα RAG;

A. Ο retriever δημιουργεί απαντήσεις με βάση τα δεδομένα εισόδου.

B. Ο retriever δημιουργεί σχετικές πληροφορίες με βάση τα δεδομένα εκπαίδευσης του μοντέλου.

C. Ο retriever βρίσκει σχετικές πληροφορίες από εξωτερικές πηγές δεδομένων.

[Quiz solution](/lessons/05-rag/solution/solution-quiz.md)

## Πόροι για αυτομελέτη

- [Retrieval-Augmented Generation and Indexes](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
- **Sample apps**:
  * [Serverless AI Chat with RAG](https://github.com/Azure-Samples/serverless-chat-langchainjs/)
  * [Ask Youtube: A RAG-based Youtube Q&A API](https://github.com/Azure-Samples/langchainjs-quickstart-demo)
- [Full-length workshop: Create your own ChatGPT with RAG](https://moaw.dev/workshop/gh:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md)

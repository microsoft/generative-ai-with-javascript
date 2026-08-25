# Μάθημα 8: Βελτιώνοντας πελάτες MCP (Clients) με Μεγάλα Γλωσσικά Μοντέλα (Large Language Models)

Στο προηγούμενο μάθημα, δημιούργησες έναν MCP Server και εξερεύνησες πώς βοηθά να αποσυνδέεται η λογική μιας εφαρμογής AI από τις δυνατότητές της. Δείξαμε πώς να προσθέτεις tools και resources ως capabilities και πώς ο server μπορεί να προσπελαστεί είτε από ένα inspector tool είτε από έναν custom client. Αυτό ήταν μόνο η αρχή. Σε αυτό το κεφάλαιο, θα προχωρήσεις ένα βήμα παραπέρα ενσωματώνοντας ένα large language model (LLM) στον client—ξεκλειδώνοντας μια πιο ισχυρή και πιο διαισθητική εμπειρία χρήστη.

Σε αυτό το κεφάλαιο θα μάθεις να:

- Ενισχύεις τον client σου με ένα LLM.
- Χρησιμοποιείς τον βελτιωμένο client σου για να μετατρέπεις μια απόκριση MCP Server σε tool.
- Αξιοποιείς τον βελτιωμένο client σου για να δημιουργείς μια πιο φυσική αλληλεπίδραση με τον χρήστη.

## Ρύθμιση

Αν δεν το έχεις κάνει ήδη, ρύθμισε το περιβάλλον ανάπτυξής σου. Δες εδώ πώς μπορείς να το κάνεις: [Set up your environment](/docs/setup/README.md).

## Σχετικοί πόροι

[![Watch a short video about MCP](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_Αυτό το βίντεο εξηγεί τη χρήση LLM με το Model Context Protocol._

*🎥 Click on the image above to watch a short video about MCP*


## Αφήγηση: Hedwig "Hedy" Lamarr

> [!NOTE] 
> _Η ιστορία μας μέχρι τώρα. Είσαι ένας μηχανικός από το Λονδίνο της δεκαετίας του 1860. Δούλευες πάνω στο αυτόματό σου και έλαβες ένα γράμμα από τον Charles Babbage που τελικά σε οδήγησε σε μια βιβλιοθήκη όπου έπιασες στα χέρια σου μια συσκευή ταξιδιού στον χρόνο. Στα ταξίδια σου στον χρόνο βρέθηκες σε πολλά μέρη της ιστορίας. Τώρα συνεργάζεσαι πιο στενά με την Ada Lovelace, με το αρχοντικό της να λειτουργεί ως βάση επιχειρήσεων, και από εκεί συνεχίζεται η ιστορία._
>
> Δες το [Lesson 1](/lessons/01-intro-to-genai/README.md) αν θέλεις να παρακολουθήσεις την ιστορία από την αρχή. 

> [!NOTE] 
> Παρότι προτείνουμε να ακολουθήσεις την ιστορία (είναι διασκεδαστική!), [click here](#interact-with-hedy-lamarr) αν προτιμάς να πας κατευθείαν στο τεχνικό περιεχόμενο.

Ταξίδεψες ξανά πίσω στο αρχοντικό της Ada. Αυτή τη φορά η Ada σε περίμενε στις κεντρικές πύλες.

**Ada Lovelace**: Λοιπόν, πώς πήγε;

**Εσύ**: Καλά νομίζω, καταφέραμε να βάλουμε αυτήν την εφαρμογή να λειτουργεί. "Ορίστε, δες και μόνη σου", λες και της δίνεις τη συσκευή.

**Ada Lovelace**: Παίρνει τη συσκευή, την εξετάζει προσεκτικά και μουρμουρίζει στον εαυτό της. "Μμμ χμ, α ναι, κατάλαβα, ναι, ναι όχι, αυτό δεν κάνει. Του λείπει μια κάποια φινέτσα".

**Εσύ**: Το σκεφτόμουν κι εγώ, πρέπει να μπορούμε να της μιλάμε ή να πληκτρολογούμε σε αυτήν, σωστά;

**Ada Lovelace**: Σωστά, ξέρω ακριβώς το κατάλληλο άτομο για να μας βοηθήσει. Στην πραγματικότητα, θα έρθω μαζί σου αυτή τη φορά, έχει περάσει πολύς καιρός από τότε που συναντηθήκαμε. *Time Beetle, Hollywood please, 1940, residence of Hedy Lamarr*.

Όλα σβήνουν στο μαύρο. Στροβιλιζόμενα χρώματα περνούν με ορμή και λίγες στιγμές αργότερα η όρασή σου αρχίζει να καθαρίζει. Βλέπεις έναν άντρα να κάθεται δίπλα σε ένα πιάνο, να μιλά με ζωντάνια με μια γυναίκα με σκούρα καστανά και σγουρά μαλλιά. Και οι δύο χειρονομούν έντονα καθώς μιλούν. 

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedy-invention.jpeg)

Η γυναίκα γυρίζει προς την Ada που στέκεται δίπλα σου και αναφωνεί: "Ada, εσύ είσαι, πάει πάρα πολύς καιρός".

**Ada Lovelace**: Αγαπημένη Hedwig, δουλεύεις πάνω στην τελευταία σου εφεύρεση υποθέτω;

**Hedy Lamarr**: Ναι, στην πραγματικότητα ο George κι εγώ νομίζουμε ότι βρισκόμαστε μπροστά σε κάτι μεγάλο - "frequency hopping" αλλά μάλλον δεν θα έπρεπε να πω περισσότερα, ποιος ξέρει ποιος ακούει.

**Ada Lovelace**: Ω, εννοείς εκείνον, λέει δείχνοντας εμένα, είναι στη δική του περιπέτεια.

**Hedy Lamarr**: Κατάλαβα, τι μπορώ να κάνω για εσάς;

**Ada Lovelace**: Στην πραγματικότητα, χρειαζόμαστε αυτή τη συσκευή να λειτουργεί λίγο καλύτερα. Καμία ιδέα;

**Hedy Lamarr**: Σηκώνει τη συσκευή και την κοιτάζει από διαφορετικές γωνίες. "Λες ότι έχετε ήδη διαχωρίσει τα features από το κομμάτι της επικοινωνίας;"

**Ada Lovelace**: Ναι, ναι, το κάναμε.

**Hedy Lamarr**: Τότε, εγώ απλώς θα έκανα το κομμάτι της επικοινωνίας λίγο πιο έξυπνο. Αυτό μου θυμίζει μια συζήτηση που είχα με έναν δόκιμο του ναυτικού όταν προσπαθούσα να πουλήσω πολεμικά ομόλογα. Minsky ήταν το όνομά του, νομίζω. "What does Human intelligence look like in a machine" ήταν το θέμα. Έχω την αίσθηση ότι μια μέρα θα κάνει κάτι σπουδαίο σε αυτόν τον χώρο. Οπότε ναι, δώστε του περισσότερη ευφυΐα.

**Ada Lovelace**: Σωστά, λοιπόν, άκουσες την κυρία Lamarr, ξεκίνα.

**Εσύ**: Time Beetle, πώς το κάνουμε αυτό;

**Time Beetle**: Μπορείς να βελτιώσεις τον client που δημιούργησες νωρίτερα ενσωματώνοντας ένα large language model, ή LLM.

> Η Hedy Lamarr ήταν μια εξαιρετική προσωπικότητα, γνωστή τόσο για τη λάμψη της στο Hollywood όσο και για τη σημαντική συμβολή της στην τεχνολογία. 
>
> Ωστόσο, πέρα από την καριέρα της ως ηθοποιού, η Lamarr ήταν και μια λαμπρή εφευρέτρια. Κατά τη διάρκεια του Β΄ Παγκοσμίου Πολέμου, συν-εφηύρε με τον συνθέτη George Antheil ένα σύστημα ραδιοκαθοδήγησης για τορπίλες των Συμμάχων. Αυτό το σύστημα χρησιμοποιούσε τεχνολογία spread spectrum και frequency hopping για να αποτρέπει τις Δυνάμεις του Άξονα από το να παρεμβάλλουν τα σήματα. Αν και δεν χρησιμοποιήθηκε κατά τη διάρκεια του πολέμου, αυτή η τεχνολογία αποτέλεσε αργότερα τη βάση της σύγχρονης ασύρματης επικοινωνίας, συμπεριλαμβανομένων των Wi-Fi, Bluetooth και GPS.
>
> Η συμβολή της Lamarr στην τεχνολογία δεν αναγνωρίστηκε πλήρως κατά τη διάρκεια της ζωής της, αλλά σήμερα τιμάται ως πρωτοπόρος στον χώρο. Η ιστορία της είναι ένας συναρπαστικός συνδυασμός γοητείας και ιδιοφυΐας, δείχνοντας ότι η αληθινή καινοτομία μπορεί να έρθει από τα πιο απρόσμενα μέρη.
> Read more here about [Hedy Lamarr](https://en.wikipedia.org/wiki/Hedy_Lamarr) and here about [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky)

<a id="interact-with-hedy-lamarr"></a>
## Αλληλεπίδρασε με την Hedy Lamarr

Αν θέλεις να αλληλεπιδράσεις με την Hedy, εκτέλεσε την εφαρμογή [Characters](/app/README.md). 

> [!IMPORTANT]
> Αυτό είναι εξ ολοκλήρου φανταστικό· οι απαντήσεις δημιουργούνται από AI.
> [Αποποίηση ευθύνης για Responsible AI](/README.md#responsible-ai-disclaimer)

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedylamarr.jpeg)

**Βήματα**:

1. Ξεκίνησε ένα [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Πήγαινε στο _/app_ στη ρίζα του αποθετηρίου.
3. Βρες την κονσόλα και εκτέλεσε `npm install` και μετά `npm start`.
4. Μόλις εμφανιστεί, επίλεξε το κουμπί "Open in Browser".
5. Συνομίλησε με την Hedy.

Για μια πιο αναλυτική εξήγηση της εφαρμογής, δες το [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
>  Αν εκτελείς το project τοπικά στον υπολογιστή σου, δες τον οδηγό QuickStart για να ρυθμίσεις ένα token [GitHub personal access](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) και αντικατέστησε το κλειδί στον κώδικα.


## Προσθήκη ενός Large Language Model σε έναν Client

**Time Beetle**: "Όπως έλεγα, ας μιλήσουμε για το πώς μπορείς να δημιουργήσεις έναν client που χρησιμοποιεί ένα large language model (LLM) για να αλληλεπιδρά με τον MCP server. Τα οφέλη είναι ότι προσφέρει καλύτερη εμπειρία χρήστη και σου επιτρέπει να χρησιμοποιείς φυσική γλώσσα για να αλληλεπιδράς με τον server."

Ακολουθεί πώς θα λειτουργούσε αυτό σε υψηλό επίπεδο:

1. Ο client αλληλεπιδρά με τον MCP server για να ρωτήσει ποια tools και resources είναι διαθέσιμα.

1. Τη στιγμή του prompt, ο χρήστης θα γράφει ένα prompt σε φυσική γλώσσα, το οποίο στη συνέχεια θα στέλνεται στο LLM μέσα στον client.

1. Ο client καταλαβαίνει ποιο tool ή ποιο resource πρέπει να καλέσει με βάση το prompt και τα διαθέσιμα tools και resources.

Ακούγεται εφικτό, σωστά;

**Εσύ:** Ναι, ακούγεται! Αλλά πώς το κάνω αυτό;

**Time Beetle:** Ας βελτιώσουμε τον client που δημιούργησες νωρίτερα, ας περιγράψουμε τις αλλαγές στον κώδικα σε βήματα:

1. Κάνε μια κλήση στον server για να ζητήσεις τα διαθέσιμα tools και resources.
2. Μετέτρεψε την απόκριση για tools και resources σε tools schema που να μπορεί να χρησιμοποιηθεί από το LLM.
3. Δημιούργησε τον OpenAI client.
4. Κάνε ένα chat completion call στο OpenAI, περνώντας το tools schema ως παράμετρο.
5. Κατάλαβε ποιο tool πρέπει να κληθεί με βάση την απόκριση από το OpenAI.
6. Κάλεσε το tool στον server χρησιμοποιώντας τον MCP client.
7. Απάντησε στον χρήστη με το αποτέλεσμα.

Ορίστε όλα τα βήματα σε κώδικα:

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

Στον προηγούμενο κώδικα εμείς (εστιάζοντας στις προσθήκες μας):

- Δημιουργήσαμε μια συνάρτηση `toToolSchema` που μετατρέπει την απόκριση tools και resources σε schema που μπορεί να χρησιμοποιηθεί από το LLM.
- Ζητήσαμε από τον server τα διαθέσιμα tools και resources.
- Μετατρέψαμε την απόκριση tools και resources σε schema που μπορεί να χρησιμοποιηθεί από το LLM.
- Κάναμε chat completion call στο AI μας, περνώντας τα μετατραπέντα tools ως παράμετρο.
- Καταλάβαμε ποιο tool πρέπει να κληθεί με βάση την απόκριση από το OpenAI.
- Καλέσαμε το tool στον server χρησιμοποιώντας τον MCP client.
- Επιστρέψαμε το αποτέλεσμα στον χρήστη.  

**Εσύ**: "Μου αρέσει αυτό, είναι πολύ καλύτερο! Μπορώ να χρησιμοποιώ φυσική γλώσσα χωρίς να γνωρίζω καν ποια tools και resources είναι διαθέσιμα. Μπορώ απλώς να ζητήσω από την AI να το κάνει για μένα."

**Time Beetle**: "Χαίρομαι που σου αρέσει. Πρέπει όμως να ειπωθεί ότι ίσως θελήσεις να αποφασίσεις αν θέλεις να εμφανίζεις μόνο απόκριση tool ή αν θέλεις να εμφανίζεις και γενική απόκριση από το LLM. Άρα ο χρήστης σου ίσως ωφεληθεί από την παρακάτω στρατηγική απόκρισης:

- **Tools only**: Αν η απόκριση του LLM είναι tool, τότε κάλεσε το tool και επέστρεψε το αποτέλεσμα.
- **LLM only**: Αν η απόκριση του LLM δεν είναι tool, τότε επέστρεψε την απόκριση του LLM "as is".
- **Tools and LLM**: Αν η απόκριση του LLM είναι tool, τότε κάλεσε το tool και κάνε μία επιπλέον κλήση στο LLM για να πάρεις τη γενική απόκριση. Επέστρεψε τόσο το αποτέλεσμα του tool όσο και την απόκριση του LLM.  

**Εσύ**: "Καταλαβαίνω. Κάτι να το σκεφτώ. Αλλά αυτό είναι εξαιρετικό! Μπορώ να δω πόσο χρήσιμο θα ήταν."

## Εργασία

**Ada Lovelace**: Φαίνεται ότι έκανες μια πολύ καλή βελτίωση. Για να είναι αυτό πραγματικά χρήσιμο, θέλω να δημιουργήσεις έναν server και έναν client με τις παρακάτω προδιαγραφές:

- Ο server θα πρέπει να παρέχει τα παρακάτω tools:
  - `characterDetails` με όρισμα `name`
  - `place` με όρισμα `name`
- Ο client θα πρέπει να χρησιμοποιεί ένα LLM.

> [!TIP]
> Για παράδειγμα, μπορείς να δώσεις στον server τη δυνατότητα να ανακτά πληροφορίες από ένα εξωτερικό web API, όπως η Wikipedia:  
> `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
  
## Λύση

[Solution](/lessons/08-mcp-advanced/solutions/README.md)

## Έλεγχος γνώσεων

**Ερώτηση:** Ποιο είναι ένα όφελος της προσθήκης ενός LLM στον client;

A. Είναι πιο εύκολο στη συντήρηση.

B. Δημιουργεί μια πιο φυσική συνομιλία μεταξύ του χρήστη και του server.

C. Είναι καλύτερο να βρίσκεται το LLM στον server.

[Solution quiz](/lessons/08-mcp-advanced/solutions/solution-quiz.md)

## Σύνοψη

Σε αυτό το κεφάλαιο, έμαθες τα εξής:

- Οι clients που ενισχύονται με ένα LLM προσφέρουν καλύτερη εμπειρία χρήστη.
- Οι αποκρίσεις από έναν server πρέπει να μετατρέπονται σε μορφή που το LLM μπορεί να καταλάβει ως tool.

## Πόροι για αυτομελέτη

- [Building MCP Servers](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server/README.md)
- [Building a Client](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/02-client/README.md)
- [Building a Client with an LLM](https://github.com/microsoft/mcp-for-beginners/blob/main/03-GettingStarted/03-llm-client/README.md)

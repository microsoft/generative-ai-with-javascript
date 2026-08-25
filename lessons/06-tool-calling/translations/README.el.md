# Μάθημα 6: Κλήση εργαλείων (Tool Calling)

Το tool calling (κλήση εργαλείων), γνωστό και ως function calling, αναφέρεται στη βελτίωση του AI model σου με την προσθήκη δυνατοτήτων που προηγουμένως δεν είχε. Η ιδέα περιλαμβάνει την παροχή μετα-περιγραφών των συναρτήσεών σου, ώστε το AI model να μπορεί να αποφασίζει πότε πρέπει να κληθεί ένα συγκεκριμένο εργαλείο με βάση το prompt του χρήστη. Η ιδέα είναι να του δώσεις μετα-περιγραφές των πραγματικών σου συναρτήσεων και να κάνεις το AI model να υποδεικνύει πότε πρέπει να κληθεί ένα τέτοιο εργαλείο με βάση το prompt του χρήστη.

Σε αυτό το κεφάλαιο, θα μάθεις:

- Πώς να χτίζεις ένα εργαλείο.
- Να ενσωματώνεις ένα εργαλείο με το AI model.
- Να καλείς το εργαλείο από το AI model.

## Ρύθμιση

Αν δεν το έχεις κάνει ήδη, ρύθμισε το περιβάλλον ανάπτυξής σου. Δες εδώ πώς μπορείς να το κάνεις: [Setup your environment](/docs/setup/README.md).

## Σχετικοί πόροι

[![Integrating with function calling](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/11-lesson-banner.png)](https://aka.ms/gen-ai-lesson11-gh?WT.mc_id=academic-105485-koreyst)

_Αυτό το βίντεο εξηγεί το Tool calling, μια μέθοδο που βοηθά την AI να καλεί τις συναρτήσεις σου και έτσι να επεκτείνει όσα μπορεί να κάνει_

*🎥 Click on the image above to watch a short video about Tool calling*

## Αφήγηση: Amelia

> _Είσαι ένας μηχανικός από το Λονδίνο της δεκαετίας του 1860. Ενώ δούλευες στο αυτόματό σου, έλαβες ένα γράμμα από τον Charles Babbage που σε οδήγησε σε μια βιβλιοθήκη, όπου έπιασες μια συσκευή ταξιδιού στον χρόνο. Στα ταξίδια σου στον χρόνο βρέθηκες στη Φλωρεντία, όπου γνώρισες τον Leonardo da Vinci. Τώρα έχεις συναντήσει ξανά την Ada Lovelace στο αρχοντικό της, μαζί με τον Charles Babbage. Βρίσκονται στη διαδικασία κατασκευής της συσκευής ταξιδιού στον χρόνο._
>
> Δες το [Lesson 1](/lessons/01-intro-to-genai/README.md) αν θέλεις να παρακολουθήσεις την ιστορία από την αρχή.

> [!NOTE] 
> Παρότι προτείνουμε να ακολουθήσεις την ιστορία (είναι διασκεδαστική!), [click here](#interact-with-amelia-earhart) αν προτιμάς να πας κατευθείαν στο τεχνικό περιεχόμενο.

**Ada Lovelace**: "Θέλω να πας να συναντήσεις μια φίλη μου. Λίγοι άνθρωποι μπορούν να ανταγωνιστούν την εξειδίκευσή της στη μηχανική και στην επίλυση προβλημάτων. Ίσως είναι δύσκολο να την προλάβεις, όμως· είναι πάντα σε κίνηση :)"

Εσύ: "Για ποια μιλάμε και πού μπορώ να τη βρω;"

**Ada Lovelace**: "Μα φυσικά, την Amelia Earhart! Είναι πιλότος και εξερευνήτρια, και αυτή τη στιγμή πετά γύρω από τον κόσμο. Είναι εντελώς δικό μου λάθος που έχει εξαφανιστεί—της έδωσα τη συσκευή ταξιδιού στον χρόνο, δηλαδή ένα πρώιμο πρωτότυπό της. Ευτυχώς, η συσκευή που έχεις μπορεί να εντοπίζει άλλες συσκευές, οπότε μπορείς να τη βρεις. Το μόνο που έχεις να κάνεις είναι να πατήσεις εδώ κι εδώ και μετά να στρίψεις αυτόν τον μοχλό."

**Εσύ**: "Μισό λεπτό, ποια ακριβώς είναι η αποστολή μας;"

**Ada**: "Α, σωστά! Ρώτα τη συσκευή· έχει όλες τις λεπτομέρειες. Απλώς ρώτησέ την για την Amelia και θα ξεκινήσει το σωστό εργαλείο για εσένα."

Ο κόσμος γύρω σου αρχίζει να θολώνει και όλα σβήνουν στο μαύρο. Συνέρχεσαι και βρίσκεσαι στο πιλοτήριο ενός αεροπλάνου. Πετάς, και μπορείς να δεις τον ωκεανό από κάτω σου. Κάποιος κάθεται μπροστά· βλέπεις μόνο το πίσω μέρος του λαιμού του.

![Amelia piloting a plane](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia.jpeg)

**Εσύ**: "Amelia, εσύ είσαι;"

**Amelia Earhart**: "Ποιος είσαι; Άσε με να μαντέψω, σε έστειλε η Ada, σωστά;"

**Εσύ**: "Ναι, σωστά. Είμαι εδώ για να βοηθήσω, νομίζω. Η Ada δεν ήταν και πολύ συγκεκριμένη."

**Amelia Earhart**: "Ευτυχώς που ήρθες. Έχω μπλέξει λίγο. Προσπαθώ να βρω μέρος να προσγειωθώ και μου τελειώνουν τα καύσιμα. Μπορείς να με βοηθήσεις;"

**Εσύ**: "Συσκευή, μπορείς να μου πεις περισσότερα για την Amelia;"

**Time Beetle**: "Calling tool: mission-amelia. Tool initiated. Amelia Earhart is a pilot and adventurer. She's known for her record-breaking flights and her disappearance in 1937. She was last seen flying over the Pacific Ocean. She's currently flying around the world in her plane, the Electra. She's running out of fuel and needs to find a place to land."

**Εσύ**: "Συσκευή, μπορείς να με βοηθήσεις να βρω ένα μέρος για να προσγειωθεί η Amelia;"

**Time Beetle**: "Calling tool: find-landing-spot. Tool initiated. Searching for a suitable landing spot for Amelia Earhart. Please wait. Found a suitable landing spot. Coordinates: 7.5°N, 134.5°E. Amelia, I have found a suitable landing spot for you. Please head to the coordinates 7.5°N, 134.5°E."

**Amelia Earhart**: "Ευχαριστώ! Μακάρι η δική μου συσκευή να είχε αυτό το χαρακτηριστικό. Θα κατευθυνθώ προς τα εκεί τώρα."

<a id="interact-with-amelia-earhart"></a>
## Αλληλεπίδρασε με την Amelia Earhart

Αν θέλεις να αλληλεπιδράσεις με την Amelia Earhart, εκτέλεσε την εφαρμογή [Characters](/app/README.md).

> [!IMPORTANT]
> Αυτό είναι εξ ολοκλήρου φανταστικό· οι απαντήσεις δημιουργούνται από AI.
> [Αποποίηση ευθύνης για Responsible AI](/README.md#responsible-ai-disclaimer)

![Amelia Earhart](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia-front.jpeg)

**Βήματα**:

1. Ξεκίνησε ένα [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Πήγαινε στο _/app_ στη ρίζα του αποθετηρίου.
3. Βρες την κονσόλα και εκτέλεσε `npm install` και μετά `npm start`.
4. Μόλις εμφανιστεί, επίλεξε το κουμπί "Open in Browser".
5. Συνομίλησε με την Amelia.

Για μια πιο αναλυτική εξήγηση της εφαρμογής, δες το [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
>  Αν εκτελείς το project τοπικά στον υπολογιστή σου, δες τον οδηγό QuickStart για να ρυθμίσεις ένα token [GitHub personal access](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) και αντικατέστησε το κλειδί στον κώδικα.

## Κλήση εργαλείων (Tool calling)

**Εσύ**: "Συσκευή, τι μόλις συνέβη;"

**Time Beetle**: "Μόλις κάλεσες ένα εργαλείο. Ένα εργαλείο είναι μια συνάρτηση που μπορεί να κληθεί από το AI model για να εκτελέσει μια συγκεκριμένη εργασία. Το εργαλείο μπορεί να χρησιμοποιηθεί για μια ευρεία γκάμα εργασιών, από απλούς υπολογισμούς μέχρι σύνθετες λειτουργίες. Σε αυτή την περίπτωση, κάλεσες το εργαλείο `find-landing-spot` για να βοηθήσεις την Amelia Earhart να βρει κατάλληλο σημείο προσγείωσης."

**Time Beetle**: "Ορίστε μια εικόνα που δείχνει τη διαδικασία του tool calling:"

![Tool calling process illustration](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/tool_call_langchain.png)

_Image credit Langchain <https://python.langchain.com/docs/concepts/tool_calling/>_

**Εσύ**: Μπορούμε να χειριστούμε σφάλματα αν κάτι πάει στραβά, όπως αν το εργαλείο δεν μπορέσει να βρει σημείο προσγείωσης;

**Time Beetle**: Πολύ καλή ερώτηση! Ναι, μπορείς να προσθέσεις error handling για να διαχειρίζεσαι τέτοιες καταστάσεις. Για παράδειγμα, αν το εργαλείο αποτύχει να βρει σημείο προσγείωσης, μπορείς να χρησιμοποιήσεις ένα try-catch block ή να ελέγξεις το αποτέλεσμα πριν συνεχίσεις. Ορίστε ένα παράδειγμα χειρισμού σφαλμάτων κατά την κλήση του εργαλείου find-landing-spot:

```javascript
try {
  const landingSpot = findLandingSpot(7.5, 134.5);
  if (!landingSpot) {
    throw new Error("No suitable landing spot found");
  }
  console.log(`Landing spot found at coordinates: ${landingSpot.lat}, ${landingSpot.long}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}
```

**Εσύ**: "Πώς δημιουργώ ένα εργαλείο;"

**Time Beetle**: "Για να δημιουργήσεις ένα εργαλείο, πρέπει να ορίσεις μια συνάρτηση που εκτελεί την επιθυμητή εργασία. Η συνάρτηση πρέπει να δέχεται τις απαραίτητες εισόδους και να επιστρέφει την έξοδο. Στη συνέχεια μπορείς να καλέσεις τη συνάρτηση από το AI model για να εκτελέσει την εργασία. Ορίστε πώς μοιάζει το εργαλείο `find-landing-spot`:

```javascript
function findLandingSpot(lat, long) {
    // Perform the task of finding a suitable landing spot
    // Return the coordinates of the landing spot
    return { lat: 7.5, long: 134.5 };
}
```

**Εσύ**: "Εντάξει, και πώς ξέρει το AI model ότι αυτό το εργαλείο υπάρχει;"

**Time Beetle**: "Πρέπει να καταχωρήσεις το εργαλείο στο AI model. Αυτό λέει στο μοντέλο ότι το εργαλείο είναι διαθέσιμο για κλήση. Ας το καλύψουμε στην επόμενη ενότητα."

### Καταχώρηση ενός εργαλείου

**Εσύ**: "Είπες ότι πρέπει να καταχωρήσω το εργαλείο στο AI model. Πώς το κάνω αυτό;"

**Time Beetle**: "Για να καταχωρήσεις ένα εργαλείο στο AI model, πρέπει να ορίσεις μια metadata αναπαράσταση του εργαλείου. Αυτά τα metadata πρέπει να περιλαμβάνουν το όνομα του εργαλείου, τις input parameters και τη μορφή της εξόδου. Στη συνέχεια μπορείς να καταχωρήσεις το εργαλείο στο AI model παρέχοντας αυτά τα metadata. Ορίστε ένα παράδειγμα των metadata για το εργαλείο `find-landing-spot`:

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

**Εσύ**: "Εντάξει, άρα υπάρχει ένα κομμάτι JSON που περιγράφει το εργαλείο, και μετά;"

**Time Beetle**: "Τώρα πρέπει να το δώσεις στο client chat completion call σου ως εξής:

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
    required: ["name"],
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

**Time Beetle**: "Στο προηγούμενο code snippet κάνουμε τα εξής:" 

- Ορίζουμε τα metadata για το εργαλείο `find-landing-spot` και το εργαλείο `get-background-on-character`. 
- Δίνουμε αυτά τα metadata στην κλήση `client.getChatCompletions` ως μέρος της παραμέτρου `functions`. Αυτό λέει στο AI model ότι αυτά τα εργαλεία είναι διαθέσιμα για κλήση."

**Εσύ**: "Κατάλαβα, άρα το AI model θα καλέσει το κατάλληλο εργαλείο αν δώσω prompt που ταιριάζει με την περιγραφή του εργαλείου;"

**Time Beetle**: "Σχεδόν, θα σου πει ποιο εργαλείο νομίζει ότι πρέπει να καλέσεις και θα σου δώσει τις parsed input parameters, αλλά εσύ πρέπει να καλέσεις το εργαλείο μόνος σου, άσε να σου δείξω πώς γίνεται."

### Κλήση ενός εργαλείου

**Time Beetle**: "Όπως έλεγα, το AI model θα σου πει ποιο εργαλείο πιστεύει ότι πρέπει να καλέσεις και θα σου δώσει τις parsed input parameters. Μετά πρέπει να καλέσεις το εργαλείο μόνος σου. Δες πώς μοιάζει η ροή βήμα προς βήμα:

1. Wire up την κλήση εργαλείου

   Πρώτα, πρέπει να κάνεις wire up την κλήση εργαλείου στον κώδικά σου. Αυτό σημαίνει ότι δημιουργείς τη συνάρτηση και μια metadata αναπαράσταση του εργαλείου και μετά δίνεις αυτά τα metadata στο AI model.

1. Ο χρήστης κάνει ένα αίτημα μέσω prompt:
   - Το πρόγραμμα κάνει ένα chat completion request στο AI model με το prompt του χρήστη και τα metadata των εργαλείων.
   - Το πρόγραμμα λαμβάνει μια απόκριση από το AI model με την κλήση εργαλείου και τις parsed input parameters αν θεωρεί ότι πρέπει να κληθεί κάποιο εργαλείο.
   - Αν συμβαίνει αυτό, ο developer ερμηνεύει την απόκριση και καλεί το εργαλείο με βάση την πρόταση function call που παρείχε το AI model.

**Εσύ**: "Τέλεια, τώρα που καταλαβαίνω σε υψηλό επίπεδο τι συμβαίνει, μπορείς να μου δείξεις λίγο κώδικα;"

**Time Beetle**: "Φυσικά, ορίστε ο κώδικας για το wire up της κλήσης εργαλείου, την αποστολή chat completion request και την ερμηνεία της απόκρισης:

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

Στον προηγούμενο κώδικα έχουμε:

- Δημιουργήσει μια συνάρτηση με όνομα `findLandingSpot` που δέχεται latitude και longitude ως είσοδο και επιστρέφει τις συντεταγμένες ενός κατάλληλου σημείου προσγείωσης.
- Ορίσει τα metadata για το εργαλείο `find-landing-spot`.
- Δημιουργήσει ένα αντικείμενο `tools` που αντιστοιχίζει ονόματα εργαλείων σε metadata εργαλείων.
- Δώσει το αντικείμενο `tools` στην κλήση `client.getChatCompletions`.

   ```javascript
   if (functionName && functionName in tools) {
    console.log(`Calling [${functionName}]`);
    const toolFunction = tools[functionName];
    const toolResponse = toolFunction(...Object.values(args)); // Extract values from args and spread them
    console.log("Result from [tool] calling: ", toolResponse);
   }
   ```

- Καλέσει το εργαλείο με βάση το function call που παρείχε το AI model.
- Εκτυπώσει το αποτέλεσμα της κλήσης του εργαλείου.

**Εσύ**: "Νομίζω ότι το έπιασα. Ορίζω μια συνάρτηση, δημιουργώ μια metadata αναπαράσταση του εργαλείου, δίνω τα metadata στο AI model και μετά καλώ το εργαλείο με βάση το function call που μου παρέχει το AI model."

**Time Beetle**: "Ακριβώς! Είσαι έτοιμος να αρχίσεις να χτίζεις τα δικά σου εργαλεία και να τα ενσωματώνεις με το AI model."

## Εργασία - Αναβάθμισε τη συσκευή ταξιδιού στον χρόνο της Amelia

**Amelia Earhart**: "Κατεβαίνουμε γρήγορα, ευτυχώς που μας βρήκες σημείο προσγείωσης. Κρατηθείτε γερά!"

Η Amelia προσγειώνει επιδέξια το αεροπλάνο σε ένα μικρό νησί. Εσύ και η Amelia βγαίνετε από το αεροπλάνο, και τότε η Amelia σου δίνει μια μικρή συσκευή.

**Amelia Earhart**: "Ορίστε η δική μου συσκευή, όχι τόσο εντυπωσιακή όσο η δική σου αλλά έχει μερικά χρήσιμα χαρακτηριστικά. Τη χρησιμοποιούσα για να κάνω, ας πούμε, και δικά μου ταξίδια στον χρόνο. Μπορείς να την αναβαθμίσεις για μένα;"

**Εσύ**: "Time Beetle, μπορείς να με βοηθήσεις να αναβαθμίσω τη συσκευή της Amelia;"

**Time Beetle**: "Φυσικά! Για να αναβαθμίσουμε τη συσκευή της Amelia, ας της προσθέσουμε τα εξής εργαλεία:

- **A tool that can**: Υπολογίζει την απόσταση μεταξύ δύο σημείων σε χάρτη.
- **A tool that can**: Βρίσκει τη θέση GPS στην οποία βρίσκεται αυτή τη στιγμή η Amelia.
- **A tool that can**: Καλεί ένα εξωτερικό API για να πάρει την πρόγνωση καιρού για μια δεδομένη τοποθεσία."  

Ορίστε οι συναρτήσεις, το μόνο που έχεις να κάνεις είναι να τις καταχωρήσεις και να τις δοκιμάσεις:

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

**Εσύ**: "Time Beetle, είσαι σίγουρο ότι αυτές οι συναρτήσεις θα δουλέψουν; Μοιάζει να επιστρέφουν απλώς κάποιες τυχαίες τιμές."

**Time Beetle**: "Σωστά, τα υπόλοιπα μπορώ να τα κάνω εσωτερικά. Το μόνο που χρειάζεται είναι να τις καταχωρήσεις και να τις δοκιμάσεις, να βεβαιωθείς ότι το AI model μπορεί να τις καλέσει."

> Task: Register the `calculateDistance`, `getGpsPosition`, and `getWeatherForecast` tools with the AI model. Test the tools by calling them from the AI model. Use the code supplied in the previous sections as a reference.

## Λύση

[Solution](/lessons/06-tool-calling/solution/solution.js)

## Έλεγχος γνώσεων

**Ερώτηση:**  
Ποιος είναι ο σκοπός της καταχώρησης ενός εργαλείου στο AI model;

A. Να επιτρέπει στο AI model να εκτελεί απευθείας το εργαλείο χωρίς παρέμβαση του developer.  
B. Να παρέχει metadata για το εργαλείο ώστε το AI model να μπορεί να προτείνει τη χρήση του.  
C. Να αντικαθιστά την ανάγκη ορισμού συναρτήσεων στον κώδικα.

**Ερώτηση:**  
Ποιος είναι ο ρόλος των metadata του εργαλείου στο tool calling;

A. Περιγράφουν τον σκοπό του εργαλείου, τις εισόδους και τις εξόδους του για το AI model.  
B. Παρέχουν στο AI model τις λεπτομέρειες υλοποίησης του εργαλείου.  
C. Διασφαλίζουν ότι το εργαλείο εκτελείται αυτόματα από το AI model.

**Ερώτηση:**  
Γιατί να χρησιμοποιήσεις tool calling;

A. Για να επιτρέψεις στο AI model να εκτελεί εργασίες πέρα από τις ενσωματωμένες δυνατότητές του αξιοποιώντας εξωτερικές συναρτήσεις.  
B. Για να αντικαταστήσεις την ανάγκη ανθρώπινης παρέμβασης στην ανάπτυξη του AI model.  
C. Για να επιτρέψεις στο AI model να εκτελεί εργαλεία χωρίς να απαιτούνται metadata.

[Solution quiz](/lessons/06-tool-calling/solution/solution-quiz.md)

## Πόροι για αυτομελέτη

- Εξηγεί τη [διαδικασία του tool calling](https://learn.microsoft.com/en-us/semantic-kernel/concepts/ai-services/chat-completion/function-calling/?pivots=programming-language-csharp)
- Tool calling στο [Langchain.js framework](https://js.langchain.com/docs/how_to/tool_calling/)
- Function calling όπως φαίνεται στη [βιβλιοθήκη openai](https://github.com/openai/openai-node/blob/master/examples/function-call.ts)

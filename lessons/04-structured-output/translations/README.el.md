# Μάθημα 4: Δομημένη έξοδος (Structured Output)

Σε αυτό το κεφάλαιο θα μάθεις: 

- Τι είναι το structured output (δομημένη έξοδος) και πώς να το αξιοποιείς αποτελεσματικά.
- Πώς να εξάγεις πληροφορίες από prompts και να τις ενσωματώνεις στην έξοδο.
- Να δημιουργείς διαφορετικούς τύπους μορφών εξόδου, όπως JSON, ώστε να καταναλώνονται εύκολα από υπηρεσίες.

## Ρύθμιση

Αν δεν το έχεις κάνει ήδη, ρύθμισε το περιβάλλον ανάπτυξής σου. Δες εδώ πώς μπορείς να το κάνεις: [Setup your environment](/docs/setup/README.md).

## Σχετικοί πόροι

Αξίζει να ξαναδείς το βίντεο για το prompt engineering, καθώς θέτει τα θεμέλια για όσα θα μάθεις σε αυτό το κεφάλαιο.

[![Watch a short video about prompt engineering](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_Αυτό το βίντεο προσφέρει μια εισαγωγή στη βελτίωση των δεξιοτήτων σου στο "prompting", δείχνοντάς σου πώς να δίνεις πιο σαφείς και αποτελεσματικές οδηγίες στην AI για καλύτερα αποτελέσματα._

*🎥 Click on the image above to watch a short video about prompt engineering*

💼 Slides: [Prompt engineering](/videos/slides/02-prompt-engineering.pptx)

## Αφήγηση - Από τη Σκύλλα στη Χάρυβδη

> [!NOTE]
> _Η ιστορία μας μέχρι τώρα: Εσύ, ένας μηχανικός εκπαιδευμένος το 1860, ταξιδεύεις στον χρόνο μαζί με τον Leonardo da Vinci. Έχεις ξεφύγει από Ρωμαίους στρατιώτες — ή μάλλον βρίσκεσαι στη διαδικασία διαφυγής — και ψάχνεις απεγνωσμένα έναν τρόπο να προσγειώσεις με ασφάλεια την aerial screw_.
>
> Δες το [Lesson 1](/lessons/01-intro-to-genai/README.md) αν θέλεις να παρακολουθήσεις την ιστορία από την αρχή. 

> [!NOTE]
> Παρότι προτείνουμε να ακολουθήσεις την ιστορία (είναι διασκεδαστική!), [click here](#interact-with-montezuma) αν προτιμάς να πας κατευθείαν στο τεχνικό περιεχόμενο.

Ο άνεμος σε μαστιγώνει καθώς εσύ και ο Leonardo da Vinci ανεβαίνετε με την aerial screw του, ενώ το ξύλινο πλαίσιο τρίζει από την καταπόνηση.

**Εσύ:** "Leonardo, πρέπει να βρούμε τρόπο να βγούμε από αυτό!" φωνάζεις πάνω από τον βρυχηθμό του ανέμου.

**Leonardo:** "Έχω πίστη στην εφεύρεσή μου, αλλά για να ξεφύγουμε από αυτούς τους στρατιώτες χρειαζόμαστε κάτι περισσότερο από πίστη."

**Εσύ:** "Αυτή ίσως είναι η μοναδική μας ευκαιρία," λες, πατώντας τους περίτεχνους μηχανισμούς του beetle. Ένα λαμπρό φως τυλίγει και τους δυο σας, και ο κόσμος γύρω σας αλλάζει και παραμορφώνεται.

### Η Αυτοκρατορία των Αζτέκων

Το έντονο φως του Time Beetle σβήνει, και βρίσκεσαι στη βάση μιας τεράστιας πέτρινης πυραμίδας. Καθώς κοιτάς γύρω, συνειδητοποιείς ότι έχετε προσγειωθεί στην καρδιά της Αυτοκρατορίας των Αζτέκων.

Η aerial screw ακουμπά άβολα πάνω σε μια μεγάλη, περίτεχνα σκαλισμένη πέτρα, με σημάδια που μοιάζουν με ημερολόγιο.

![Aztec calendar, Wikipedia](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/aztec.png)

_Aztec calendar, Wikipedia_
 
Ο Leonardo da Vinci κάνει ένα βήμα μπροστά, με τα μάτια του ορθάνοιχτα από θαυμασμό.

**Leonardo:** "Απίστευτο," ψιθυρίζει, περνώντας τα δάχτυλά του πάνω από τα σκαλίσματα. "Αλλά ελπίζω αυτό να μην είχε καμία σημασία." 

Πριν προλάβεις να αντιδράσεις, μια ομάδα στρατιωτών των Αζτέκων πλησιάζει.

![Meeting with Aztecs](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/meeting.png)

**Αρχηγός στρατιωτών:** "Ποιοι είστε και τι έχετε κάνει;" απαιτεί στα Ναουάτλ.

Παίρνεις βαθιά ανάσα, προσπαθώντας να σταθεροποιήσεις τα νεύρα σου.

**Εσύ:** "Είμαστε ταξιδιώτες από μια μακρινή γη," αρχίζεις, ελπίζοντας ότι η γνώση σου στις αρχαίες γλώσσες θα αποδειχθεί χρήσιμη. "Αυτή είναι μια ιπτάμενη μηχανή, δώρο των θεών για να φτάσουμε σε εσάς.

Τα μάτια του πολεμιστή ανοίγουν από έκπληξη, αλλά παραμένει επιφυλακτικός.

**Αρχηγός στρατιωτών:** "Θα έρθετε μαζί μας για να συναντήσετε τον ηγεμόνα Montezuma. Εκείνος θα αποφασίσει τη μοίρα σας.

Φτάνοντας στην κορυφή της πυραμίδας, οδηγείστε σε μια μεγαλοπρεπή αίθουσα όπου ο Montezuma, ο ηγεμόνας της Αυτοκρατορίας των Αζτέκων, κάθεται σε θρόνο στολισμένο με χρυσό και φτερά.

**Montezuma:** "Ισχυρίζεστε ότι είστε ταξιδιώτες από μακρινή χώρα," λέει ο Montezuma, με ήρεμη αλλά επιβλητική φωνή. "Και έχετε προκαλέσει ζημιά στο ιερό μας ημερολόγιο. Πώς σκοπεύετε να επανορθώσετε;"

## Ας παίξουμε ένα παιχνίδι

**Leonardo:** "Ερχόμαστε ειρηνικά," λέει με σταθερή φωνή. "Αναζητούμε γνώση και κατανόηση. Επιτρέψτε μας να σας δείξουμε τη δύναμη της μηχανής μας και να μοιραστούμε τις γνώσεις μας μαζί σας." 

**Montezuma:** "Πολύ καλά. Προτείνω ένα παιχνίδι [Patolli](#patolli). Αν κερδίσω τις δύο από τις τρεις παρτίδες, θα μου δώσετε τη συσκευή σας και θα μου πείτε πώς λειτουργεί. Αν κερδίσετε εσείς, είστε ελεύθεροι να φύγετε."

![Playing a game of Patolli](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/game.png)

Το παιχνίδι αρχίζει και η αίθουσα βυθίζεται στη σιωπή, εκτός από τον ήχο των φασολιών που κυλούν και των πιονιών που κινούνται πάνω στο ταμπλό.

Ο Montezuma κερδίζει το πρώτο παιχνίδι, με την ικανότητα και την εμπειρία του να είναι εμφανείς. Ο Leonardo μελετά προσεκτικά το ταμπλό, με το μυαλό του να επεξεργάζεται στρατηγικές και πιθανότητες.

Το δεύτερο παιχνίδι είναι αμφίρροπο, αλλά ο Leonardo καταφέρνει να εξασφαλίσει τη νίκη, ισοφαρίζοντας το σκορ.

**Leonardo:** "Ένα ακόμη παιχνίδι," ψιθυρίζει, George (Time Beetle), πρέπει να κερδίσουμε αυτό, δώσε μου τις σωστές κινήσεις.

**Time Beetle:** Πολύ καλά, υπολογίζω... Ορίστε...

Με μια τελική, αποφασιστική κίνηση, ο Leonardo κερδίζει το παιχνίδι. Η αίθουσα ξεσπά σε επευφημίες και χειροκροτήματα, με τους Αζτέκους να έχουν ξεκάθαρα εντυπωσιαστεί από την ικανότητα και την ψυχραιμία του. Ο Montezuma, αν και απογοητευμένος, γνέφει με σεβασμό.

**Montezuma:** "Κερδίσατε δίκαια," λέει ο Montezuma, με τη φωνή του να κρύβει μια νότα θαυμασμού. "Είστε ελεύθεροι να φύγετε και μπορείτε να κρατήσετε τη συσκευή σας. Αλλά να ξέρετε ότι είστε πάντα ευπρόσδεκτοι εδώ, αν θελήσετε να επιστρέψετε." 

**Time Beetle:** Δεν θα πω τίποτα αν δεν πεις ούτε εσύ, Leonardo ;)

### Patolli

> [!NOTE]
> Το Patolli είναι ένα από τα αρχαιότερα γνωστά παιχνίδια στην Αμερική, που παιζόταν από προκολομβιανούς μεσοαμερικανικούς πολιτισμούς όπως οι Αζτέκοι. Είναι ένα μείγμα στρατηγικής και τύχης.
>
> **Πώς παίζεται το Patolli**: 
> - **Ταμπλό και πιόνια**: Παίζεται σε ταμπλό σε σχήμα Χ με κεντρικό τετράγωνο και τέσσερις βραχίονες. Οι παίκτες χρησιμοποιούν πέντε μαύρα φασόλια ως ζάρια, σημαδεμένα από τη μία πλευρά.
> - **Στήσιμο**: Κάθε παίκτης διαλέγει έξι δείκτες (χάντρες) του χρώματός του και τους τοποθετεί εκτός ταμπλό, μαζί με χάντρες πόντων για το σκορ.
> - **Gameplay**: Ρίχνεις τα φασόλια για να μετακινείς τους δείκτες γύρω από το ταμπλό και πίσω στην αρχή. Μια ρίψη πέντε προχωρά δέκα θέσεις. Η προσγείωση σε ορισμένα τετράγωνα μπορεί να δώσει έξτρα γύρους, να αφαιρέσει πόντους ή να αιχμαλωτίσει δείκτες.
>
> **Συμμετοχή των Αζτέκων**: Παιζόταν ευρέως από ευγενείς και απλούς ανθρώπους και ήταν αγαπημένο στην αυλή του Montezuma. Πέρα από τη διασκέδαση, συνδεόταν με στοιχήματα υψηλού ρίσκου, όπως κουβέρτες, πολύτιμοι λίθοι ή ακόμη και η ελευθερία.

![Patolli board](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/patolli.png)

_Patolli - Wikipedia_

<a id="interact-with-montezuma"></a>
## Αλληλεπίδρασε με τον Montezuma

Αν θέλεις να αλληλεπιδράσεις με τον Montezuma, εκτέλεσε την εφαρμογή [Characters](/app/README.md). 

> [!IMPORTANT]
> Αυτό είναι εξ ολοκλήρου φανταστικό· οι απαντήσεις δημιουργούνται από AI.
> [Αποποίηση ευθύνης για Responsible AI](/README.md#responsible-ai-disclaimer)

![Montezuma](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/montezuma.jpeg)

**Βήματα**:

1. Ξεκίνησε ένα [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Πήγαινε στο _/app_ στη ρίζα του αποθετηρίου.
3. Βρες την κονσόλα και εκτέλεσε `npm install` και μετά `npm start`.
4. Μόλις εμφανιστεί, επίλεξε το κουμπί "Open in Browser".
5. Συνομίλησε με τον Montezuma.

Για μια πιο αναλυτική εξήγηση της εφαρμογής, δες το [Detailed app explanation](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
>  Αν εκτελείς το project τοπικά στον υπολογιστή σου, δες τον οδηγό QuickStart για να ρυθμίσεις ένα token [GitHub personal access](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) και αντικατέστησε το κλειδί στον κώδικα.

## Δομημένη έξοδος (Structured Output)

**Time Beetle:** Θες να μάθεις πώς νίκησα τον Montezuma;

**Εσύ:** Σσσ, όχι τόσο δυνατά, είμαστε ακόμα στην Αυτοκρατορία των Αζτέκων.

**Time Beetle:** Α ναι, σωστά, συγγνώμη, λοιπόν έτσι έγινε, με structured output. Ζήτησες τις σωστές κινήσεις και εγώ στις έδωσα με δομημένο τρόπο.

Το structured output χρησιμοποιεί συγκεκριμένες μορφές δεδομένων για να οργανώνει καθαρά τις πληροφορίες. Συνηθισμένες μορφές όπως JSON, XML και CSV διευκολύνουν τις υπηρεσίες να επεξεργάζονται και να χρησιμοποιούν τα δεδομένα.

Τα generative AI models μπορούν να παράγουν δεδομένα σε διάφορες μορφές. Ωστόσο, η έξοδος αδόμητου κειμένου μπορεί να δυσκολέψει την εξαγωγή πληροφορίας και τη μεταβίβασή της σε άλλες υπηρεσίες. Το structured output μπορεί να βοηθήσει σε αυτό.

**Εσύ:** Ε, δεν είσαι και λίγο έξυπνο ;)

**Time Beetle:** Κάνω ό,τι μπορώ. :-)

Ένα ακόμη όφελος, ακόμη και για ανθρώπινους αναγνώστες, είναι ότι τα structured data είναι πιο εύκολα στην ανάγνωση και κατανόηση όταν ακολουθούν μια γνώριμη μορφή.

Ας δούμε μερικά παραδείγματα εισόδου και πώς το να ζητάς συγκεκριμένες μορφές εξόδου μπορεί να βοηθήσει στην εξαγωγή πληροφοριών, κάνοντάς τες πιο εύκολες στην κατανόηση και στην κατανάλωση.

**Εσύ:** Εντάξει, δεν είναι σαν να έχουμε κι άλλα σχέδια, ας ακούσουμε.

## Διαμορφώνοντας την έξοδο

**Time Beetle:** Ας ξεκινήσουμε με ένα απλό παράδειγμα. Φαντάσου ότι είσαι ο Leonardo da Vinci και προσπαθείς να σκεφτείς ιδέες για εφευρέσεις χρησιμοποιώντας τεχνολογία του 15ου αιώνα. Θέλεις να ξέρεις τι πόρους χρειάζεσαι και πόση προσπάθεια θα απαιτούσε η κατασκευή κάθε εφεύρεσης. Δες πώς μπορείς να ζητήσεις αυτές τις πληροφορίες:

**Leonardo:** Ω, μου αρέσει αυτό το παιχνίδι, όλοι ας προσποιηθούμε ότι είμαστε εγώ!

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
 - **Medium**: Involves precise metalworking and engraving. Requires knowledge of astronomy and mathematics to ensure accuracy.
 
 ### 3. Printing Press
 **Resources Needed**:
 - Wood for the press structure
 - Metal for movable type
 - Ink and paper

 **Effort**:
 - **High**: Building the press and creating movable type requires advanced carpentry and metalworking skills. Setting up the type and printing also involves meticulous work.

This is an OK looking response, every idea is structured in the same way, and it's easy to understand. What if you wanted it some other way though? For that, you can instruct how you want it in the text itself or even present an output template. Let's show each technique.
```

**Leonardo:** Ναι, εννοείται ότι θα κλέψω την ιδέα για τον νερόμυλο, το βλέπω ήδη μπροστά μου, ένας μύλος δίπλα στο ποτάμι να αλέθει σιτάρι σε αλεύρι, είναι τέλειο! Μου αρέσει αυτό το μαραφέτι. Τι άλλο σκέφτομαι, μικρό μου gizmo; Αυτό θα με κάνει λιγότερο εξαρτημένο από ανθρώπους σαν τον Sforza.

**Time Beetle:** Σίγουρα, αν κατάφερνες ποτέ να ολοκληρώσεις ένα project, Leonardo. :-)

**Leonardo:** Έι, προσπαθώ!

**Time Beetle:** Ας δούμε πώς μπορείς να δώσεις οδηγία στο μοντέλο να παρουσιάσει την έξοδο με πιο δομημένο τρόπο.

### Δόμησε τα prompts σου για καλύτερη έξοδο

**Time Beetle:** Μπορείς να βελτιώσεις το prompt σου λέγοντας στο μοντέλο πώς θέλεις να είναι δομημένη η έξοδος. Για παράδειγμα, μπορείς να ζητήσεις μορφή πίνακα με τις στήλες που χρειάζεσαι. Δες πώς μπορείς να τροποποιήσεις το prompt:

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

**Leonardo:** Μου αρέσει αυτό, θα μου εξοικονομήσει πολύ χρόνο σίγουρα.

**Εσύ:** Και σε μένα.

### Παρουσιάζοντας ένα output template

Ένας άλλος τρόπος για να πάρεις structured output είναι να παρουσιάσεις ένα output template. Μπορεί να είναι σε οποιαδήποτε μορφή, από στήλες μέχρι JSON, XML, CSV ή markdown.

> Prompt: Generate ideas for inventions that can be built using 15th-century technology. For each invention, specify the required resources and estimate the effort needed to construct it. Present the information using the following format (use markdown as output format):
> 
> Title: [Invention Name]
> Description: [Brief Explanation]
> Resources Needed: [List of Required Materials]
> Effort: [Estimated Difficulty or Labor Required]
> Generate ideas for inventions I can build given 15th century technology, please let me know for each what resources I need and how much effort there would be to build each invention, for each idea present it with the following output template:

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

**Leonardo:** Εξαιρετικό, αλλά ποιος είναι ο Jason;

**Time Beetle:** JSON, Leonardo, JSON. Είναι μια structured μορφή που καταναλώνεται εύκολα από υπηρεσίες ή εφαρμογές.

**Leonardo:** Αυτό είπα κι εγώ, Jason.

**Time Beetle:** _Sigh_.

Όπως βλέπεις, η έξοδος είναι δομημένη σύμφωνα με τις προδιαγραφές του output template. Αυτό την κάνει πιο εύκολη στην ανάγνωση και κατανόηση και επίσης δημιουργεί επαναλήψιμη έξοδο που μπορεί εύκολα να καταναλωθεί από άλλες υπηρεσίες ή εφαρμογές.

Φυσικά, μια υπηρεσία ωφελείται από ακόμη πιο structured output, όπως JSON, XML ή CSV, οπότε ας δούμε πώς μπορείς να το ζητήσεις.

### Χρήση structured output με μορφές όπως JSON, XML ή CSV

**Time Beetle:** Μέχρι τώρα είδες πώς μπορείς να ελέγξεις τη δομή της εξόδου δίνοντας οδηγίες στο prompt. Έχεις δώσει ακόμη και output template. Ας προχωρήσουμε την ιδέα ένα βήμα παραπέρα και ας δούμε πώς μπορεί να εφαρμοστεί σε πιο structured μορφές εξόδου όπως JSON και άλλες.

Τροποποίησε ανάλογα το prompt για να ζητήσεις έξοδο JSON:

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

**Time Beetle:** Αυτός ο τύπος structured output μπορεί να σταλεί σε άλλη υπηρεσία ή εφαρμογή που μπορεί να καταναλώσει δεδομένα JSON.

## Εξαγωγή δεδομένων από prompts

**Time Beetle:** Φαντάσου ότι χτίζεις ένα chatbot που βοηθά τους χρήστες να βρουν πληροφορίες για ταξίδια που θέλουν να κλείσουν. Θέλεις να εξάγεις βασικές λεπτομέρειες από την είσοδο του χρήστη για να παρέχεις σχετικές απαντήσεις. Ας πούμε ότι έχεις μια περιγραφή όπως η εξής: 

> Type where you would like to go, when you want to travel, and your budget.

Πώς μοιάζει ένα prompt που εξάγει αυτή την πληροφορία; 

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

**Leonardo:** Ο George (Time Beetle) δεν σταματά να μιλά ποτέ, έτσι;

**Εσύ:** Ας δούμε αν μπορώ να βρω τον διακόπτη απενεργοποίησης.

**Time Beetle:** Ας δοκιμάσουμε τώρα με ένα παρόμοιο prompt, ας αλλάξουμε λίγο την είσοδο του χρήστη για να είμαστε σίγουροι ότι το μοντέλο κάνει το σωστό.

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

Αυτό που μπορείς να κάνεις ως developer είναι να δημιουργήσεις ένα template:

```text
Extract the following information from a user's prompt: location, when, budget, currency, respond with the extracted data in JSON format, user prompt: {user_input}.
```

**Εσύ:** Το βρήκα, πάρε αυτό George!

**Time Beetle:** _Powering down_.

**Leonardo:** Επιτέλους, ησυχία.

**Time Beetle:** _Initiating emergency startup_. Πού ήμουν; Α, ναι.

**Time Beetle:** Για τα chatbots, αυτό είναι ένα πολύ ισχυρό χαρακτηριστικό, καθώς σου επιτρέπει να εξάγεις πληροφορίες από την είσοδο του χρήστη. Τι γίνεται αν ο χρήστης ζητήσει πολλά διαφορετικά πράγματα; Μπορείς να δημιουργήσεις ένα template όπου περιγράφεις δεξιότητες, πράγματα που μπορεί να κάνει το chatbot σου και ποιες παραμέτρους χρειάζεται. Δες πώς μπορείς να το κάνεις:

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

Ας δοκιμάσουμε τις παρακάτω εισόδους χρήστη:

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

Αυτός ο συνδυασμός παρουσίασης skills και parameters και εξαγωγής δεδομένων από prompts είναι επίσης γνωστός ως _tool calling_ ή _function calling_. Μια τέτοια απόκριση από το μοντέλο σου κάνει εύκολο για εσένα ως developer να καταλάβεις τι θέλει ο χρήστης και πώς να καλέσεις μια αντίστοιχη συνάρτηση για να ικανοποιήσεις το αίτημά του.

**Εσύ:** Πολύ χρήσιμες πληροφορίες, George!

## Εργασία - Επισκεύασε την aerial screw

**Time Beetle:** Χρειάζομαι την προσοχή και των δυο σας, έχουμε πρόβλημα. Η aerial screw έπαθε ζημιές κατά τη διαφυγή από τους Ρωμαίους στρατιώτες και την προσγείωση στην Αυτοκρατορία των Αζτέκων. Η μηχανή του Leonardo da Vinci είναι αρκετά ευαίσθητη και χρειάζεται πολύ συγκεκριμένη είσοδο για να επισκευαστεί. Πρέπει να δώσεις τις απαραίτητες πληροφορίες στο Time Beetle σου (AI Assistant) για να σε βοηθήσει να επισκευάσεις την aerial screw.

**Leonardo:** Κατάφερα να διορθώσω τη ζημιά στην aerial screw, αλλά τώρα χρειάζεται μια boot sequence: left, left, up, right.

**Εσύ:** Ακούγεται εύκολο, μόνο αυτό το κείμενο;

**Leonardo:** Ναι, αλλά είναι ιδιαίτερο, πρέπει να είναι καθρεφτισμένο, έτσι γράφω όλα τα κείμενά μου. Και φυσικά χρησιμοποιώ Caesar cipher με μετατόπιση 3 επειδή είμαι Ιταλός. :-)

**Εσύ:** Ναι, δεν θα μπορούσες απλώς να το πληκτρολογήσεις;

**Leonardo:** Θα μπορούσα, αλλά με ιντριγκάρει να δω αν εσύ και το Time Beetle μπορείτε να το κάνετε.

**Εσύ:** Καλά.

**Instruction:** Write a prompt that asks for the boot sequence for the aerial screw, the text should be mirrored and encoded with a Caesar cipher with a shift of 3. Respond with the encoded text.

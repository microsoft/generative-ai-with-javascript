# Ders 5: Geri Alma Destekli Üretim (RAG) ile Verilerinizle Konuşun

Bu bölümde öğrenecekleriniz:

- Geri Alma Destekli Üretim'in (RAG) temelleri ve üretken YZ modellerinin yanıtlarını nasıl geliştirmek için kullanılabileceği.
- Dış veri kaynaklarını YZ uygulamanıza nasıl entegre edeceğiniz.
- YZ tarafından oluşturulan içeriğin alaka ve doğruluğunu artırmak için verilerinizden nasıl yararlanacağınız.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![RAG hakkında kısa bir video izleyin](https://img.youtube.com/vi/xkFOmx5yxIA/0.jpg)](https://www.youtube.com/watch?v=xkFOmx5yxIA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=4)

_Bu video, YZ'nin eğitim verileriyle birlikte içeriğinizi kullanmasına yardımcı olan ve daha iyi sonuçlar sağlayan bir yöntem olan Geri Alma Destekli Üretim'i (RAG) açıklıyor._

*🎥 Geri alma destekli üretim hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*

💼 Slaytlar: [Geri alma destekli üretim, RAG](/videos/slides/03-rag.pptx)

## Hikaye - Başlangıç

> [!NOTE] 
> _Hikayemiz şimdiye kadar şöyle. Siz 1860'ların Londra'sından bir mekanikçisiniz. Otomat üzerinde çalışıyordunuz ve Charles Babbage'den bir mektup aldınız; bu mektup sizi bir kütüphaneye götürdü ve burada bir zaman yolculuğu cihazı aldınız. Zamandaki yolculuklarınız boyunca Floransa'ya ulaştınız ve burada Leonardo Da Vinci ile tanıştınız. Ayrıca Aztek İmparatorluğu'na gittiniz ve hikaye burada devam ediyor._
>
> Hikayenin başından itibaren takip etmek istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE] 
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-ada-lovelace).

**Siz**: "Leonardo, gitme zamanı," dediniz düğmeye basarak. Cihaz çalışmaya başladı ve mekanik bir ses yankılandı: "Eve gitme zamanı, 'başlangıç' zamanı."

**Leonardo:** "Başlangıç? Che cosa significa?" diye sordu Leonardo şaşkın bir ifadeyle. Yanıt vermeden önce dünya renk ve ses bulanıklığına dönüştü; tapınak soluklaşırken zamana çekildiniz.

Bahçeye iniş yapıyorsunuz; gece geç vakittir, yoğun sis var ve uzakta ürkütücü ışıklar titreşiyor. Malikane önünüzde beliriyor. Leonardo etrafa bakınıyor; gözleri hayranlıkla açılmış.

![Derin bir siste görünen eski malikane](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/mansion.jpeg)


### Köpeklerden Kaçış

Havlama sesi ve size doğru koşan köpeklerin sesi duyuluyor. Leonardo'ya dönüyorsunuz: "İçeri girmemiz lazım, hemen!"

![Köpeklerden kaçış](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/dogs.jpeg)

Malikanenin kapısına ulaştığınızda kapı açılıyor ve bir çift hizmetkar koşarak çıkıyor. Sizi süzdükten sonra takip etmenizi işaret ediyorlar.

Ada Lovelace ile yüz yüze geliyorsunuz; gözleri merakla parlıyor.

### Ada ve Charles ile Tanışmak

**Ada:** "Ah, sonunda geldiniz," diye sıcakça karşılıyor. "Bir iş yapmanızı istiyorum."

**Siz:** "Zamanında" diye sürekli söylüyorsunuz. Dinocrates da aynı şeyi söyledi ama ne demek istediğinizi tam olarak anlamıyorum?

**Ada:** Sus, bunun için vakit yok; elinizdeki cihaz hakkında konuşmamız gerekiyor. Charles, onları bilgilendir.

**Siz:** Ama...

![Ada Lovelace ve Charles Babbage bir cihaz üzerinde çalışıyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada.jpeg)

Charles Babbage öne çıkıyor; elinizdeki Zaman Böceği'ni inceliyor. "Bu cihaz olağanüstü, ama biraz arızalı, değil mi? Fark etmişsinizdir eminim."

Leonardo başını salladı: "Sì, garip davranıyordu."

**Ada:** Cihaz tam anlamıyla hazır değil; daha fazla yetenekle donatmamız gerekiyor. Daha akıllı, çevresinden daha fazla haberdar olmasını istiyoruz. Fikir, farklı dönemlerden bilgi alabilmek ve bunları doğru ve alakalı yanıtlar üretmek için kullanabilmek. Buna yardımcı olabilir misiniz?

**Siz:** Tabii, cihazın yanıtlarını verilerle _zenginleştirmemiz_ gerekiyor gibi görünüyor; mantıklı.

**Ada:** RAG veya Geri Alma Destekli Üretim adını vermek istediğim bir kavram hakkında konuşalım.

## Ada Lovelace ile etkileşim kurun

Ada ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Ada Lovelace](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/ada-2.jpeg)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Ada ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

## Büyük Dil Modelleri ile Bilinen Zorluklar

**Ada:** Cihazı güçlendirmek için kullanacağımız YZ'yi tartışarak başlayalım. Yanıt kalitesini artırmak için bir veri alma sistemiyle eşleştirilmiş "YZ modelleri"ne güveneceğiz.

Önce RAG ayrıntılarına dalmadan önce bazı zorlukları ele almanız gerekiyor. Geniş metin verileri üzerinde eğitilen bu modeller alakalı ve doğru yanıtlar üretebilir. Ancak herhangi bir veri kaynağı gibi çıktıları çeşitli faktörler nedeniyle hatalı, eksik veya yanıltıcı olabilir.

- **Güncel olmayan kaynaklar:** Modeli eğitmek için kullanılan veriler eski ve artık doğru olmayabilir.
- **Yanlış veya hatalı bilgi:** Modeli eğitmek için kullanılan kaynaklar, sahte haberler veya önyargılı görüşler gibi yanlış veya yanıltıcı bilgiler içerebilir.
- **Yetkili olmayan kaynaklar:** Model, eğitim verilerindeki yetkili ve yetkisiz kaynaklar arasında ayrım yapamayabilir; bu da güvenilmez bilgilere yol açar.

Bu durum, bir LLM tarafından oluşturulan bilginin doğru olup olmadığını anlamayı zorlaştırır. İşte burada RAG devreye giriyor.

**Siz:** Yani cihazın cevabından emin olmadığında bile doğru bilgi sağlayabildiğinden emin olmam gerekiyor?

**Ada:** Evet, fikir bu. Geri alma tabanlı yöntemlerin ve üretken modellerin güçlü yönlerini birleştirerek daha iyi bir YZ sistemi elde ediyoruz.

## Geri Alma Destekli Üretim, RAG Temel Kavramları

**Ada:** Ah evet, RAG'ı özellikle tartışma zamanı. Bazı temellerle başlayalım:

Geri Alma Destekli Üretim (RAG), doğal dil işlemede iki farklı yaklaşımın güçlü yönlerini birleştiren güçlü bir tekniktir: geri alma tabanlı yöntemler ve üretken modeller. Bu karma yaklaşım, hem bağlamsal olarak alakalı hem de içerik bakımından zengin yanıtların üretilmesine olanak tanır ve LLM'lerle ilgili bilinen bazı zorlukları gidermeye yardımcı olur.

RAG'ın özünde iki ana bileşen bulunur: bir **alıcı** ve bir **üretici**.

- **Alıcı:** YZ tarafından oluşturulan yanıtları geliştirmek için kullanılabilecek harici veri kaynaklarından alakalı bilgileri bulmaktan sorumludur; bir arama motoru gibi. Bu bilgiler metin, görüntü veya konuşmanın bağlamıyla ilgili herhangi bir veri türü olabilir; ancak metin en yaygın kullanılan veri türüdür.

- **Üretici:** Alınan bilgileri alır ve bağlamsal olarak alakalı ve bilgilendirici bir yanıt oluşturmak için kullanır.

İşte bir RAG sisteminin nasıl çalıştığını gösteren bir şema:

![Bir RAG sisteminin şeması](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/05-rag/assets/rag.png)

1. **Kullanıcı girdisi:** Kullanıcı bir soru sorar.
2. **Alıcı:** Alıcı bileşeni, bir veya daha fazla bilgi tabanı kullanarak alakalı bilgileri arar.
3. **Zenginleştirilmiş istem:** Alınan bilgiler, zenginleştirilmiş bir istem oluşturmak için kullanıcı sorusu ve bağlamla birleştirilir.
4. **Üretici:** LLM, yanıt oluşturmak için zenginleştirilmiş istemi kullanır.

Bu kombinasyon, modelin eğitim verilerine güvenmek yerine sağladığınız verileri kullanarak daha hassas ve alakalı yanıtlara olanak tanır.

**Ada:** Sorularınız var mı?

**Siz:** Yani alıcı bilgiyi bulur ve üretici bunu bir yanıt oluşturmak için kullanır?

**Ada:** Kesinlikle, kavramı kavramaya başlıyorsunuz.

## Harici Veri Kaynaklarını Entegre Etmek

**Ada:** RAG'ın temellerini ele aldığımıza göre, harici veri kaynaklarını YZ uygulamanıza nasıl entegre edebileceğinizi konuşalım.

Harici veri kaynaklarını YZ uygulamanıza entegre etmek, kullanmak istediğiniz veri türüne ve alma mekanizmasının karmaşıklığına bağlı olarak çeşitli şekillerde yapılabilir. İşte birkaç yaygın yöntem:

- **API'ler:** Birçok harici veri kaynağı, verilerine programatik olarak erişmenizi sağlayan API'ler sunar. Bu API'leri gerçek zamanlı olarak bilgi almak ve YZ tarafından oluşturulan yanıtları geliştirmek için kullanabilirsiniz.

- **Veritabanları:** Alma için kullanmak istediğiniz büyük miktarda veriniz varsa, bunu bir veritabanında saklayıp gerektiğinde sorgulayabilirsiniz. Bu, hızlı erişilmesi gereken yapılandırılmış veriler için faydalı olabilir.

Harici veri kaynaklarını entegre etme yöntemini belirledikten sonra, verilerin YZ modeli tarafından kolayca kullanılabilmesi için nasıl ön işleneceğini ve biçimlendirileceğini de düşünmeniz gerekebilir. Bu, verileri temizlemeyi, uygun bir biçime (düz metin veya Markdown gibi) dönüştürmeyi veya daha kolay alma için daha küçük parçalara bölmeyi içerebilir.

> [!NOTE]
> Harici veri kaynaklarını YZ uygulamanıza entegre ederken verilere erişme ve saklama konusundaki gizlilik ve güvenlik sonuçlarını göz önünde bulundurmak önemlidir. Verileri korumak ve ilgili düzenlemelere uymak için gerekli izinlere ve güvencelere sahip olduğunuzdan emin olun.

Bir veritabanı kullanıyorsanız, en alakalı bilgileri almak için verilerinizi nasıl *aramak istediğinizi* de düşünmek istersiniz. Bu, anahtar kelime araması, tam metin araması veya belirli dizin oluşturma gerektiren semantik arama veya vektör araması gibi daha gelişmiş tekniklerle yapılabilir.

**Siz**: API ve Veritabanları gibi terimleri daha 1860'lı yıllara uygun biçimde açıklayabilir misiniz?

**Ada**: Tabii ki, API bir yerden diğerine mesaj ileten bir ulak gibidir; veritabanı ise tüm kitaplarınızı sakladığınız kütüphane gibidir.

**Siz**: Ah, anlıyorum, bu mantıklı.

## İstemi Zenginleştirmek

**Ada:** Hâlâ benimle misiniz? İyi, bir sonraki adıma geçelim; YZ modeline gönderilen istemi iyileştirmeye çalışalım.

**Ada:** Verilerinizden bilgi çekmenin bir yolunu kurduktan sonra bunu YZ modelinin istemine ekleyebilirsiniz. Alınan bilgileri, YZ'nin yanıtını yönlendirmek için bazı ek bağlam veya rehberlikle birlikte giriş metnine karıştırmanız yeterlidir.

Örneğin, arabalar hakkındaki soruları yanıtlayan bir uygulama oluşturuyorsanız, şöyle bir istem kullanabilirsiniz:

```text

## Talimatlar
Arabalar hakkındaki soruları yalnızca aşağıdaki kaynakları kullanarak yanıtlayın.
Sağlanan kaynaklarda yeterli veri yoksa, bilmediğinizi söyleyin.
Kısa ve öz olun.

## Kaynaklar
<alınan bilgileri buraya ekleyin>

## Soru
<soruyu buraya ekleyin>
```

YZ modeline ek bağlam ve bilgi sağlayarak oluşturma sürecini yönlendirmeye ve yanıtların konu için doğru ve alakalı olmasını sağlamaya yardımcı olabilirsiniz.

> [!TIP]
> İstemin şu bölümüne dikkat edin: `Sağlanan kaynaklarda yeterli veri yoksa, bilmediğinizi söyleyin.` Bu, YZ'nin güvenilir yanıt vermek için yeterli veri bulunmadığında yanlış bilgi üretmesini önlemek için önemlidir. Bu teknik _kaçış yolu_ olarak adlandırılır ve oluşturulan içeriğin kalitesini sağlamak için iyi bir uygulamadır.

RAG, *istem mühendisliğinin* gelişmiş bir biçimi olarak düşünülebilir.

### Kod Örneği

**Ada:** Pratik mükemmelleştirmek içindir; bu nedenle öğrendiklerimizi bir örnekle uygulayalım. Kullanıcının sorusuna dayalı alakalı bilgileri çekmek için temel bir arama algoritması ve hibrit araba verisinin [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) dosyasını kullanan basit bir alma sistemi oluşturacağız.

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

console.log(`"${question}" için yanıt:`);

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0].delta.content ?? "");
}
```

Bu kodu [`example/rag-cars.js`](/lessons/05-rag/example/rag-cars.js) dosyasında ve alma için kullanılan verileri içeren [`hybrid.csv`](/lessons/05-rag/example/hybrid.csv) dosyasında bulabilirsiniz.

**Ada:** Bu kodu çalıştırdığınızda, alıcı tarafından CSV dosyasında bulunan verileri markdown tablosu olarak biçimlendirilmiş şekilde, ardından soruya YZ tarafından oluşturulmuş yanıtı görmelisiniz. Alınan verilerin ve yanıtın nasıl değiştiğini görmek için soruyu değiştirmeyi deneyin. Ayrıca ilgisiz konular hakkında sorular sormayı deneyerek YZ modelinin bunları nasıl ele aldığını görebilirsiniz.

```text
Çıktı örneği:

1 eşleşme bulundu:
| Kişi | Zaman Dilimi | Açıklama |
|---|---|---|
| Leonardo Da Vinci | 15. yüzyıl | Sanatı ve icatlarıyla tanınan İtalyan polimat. |
| Isaac Newton | 17. yüzyıl | Hareket yasalarını ve evrensel çekim yasasını formüle eden İngiliz matematikçi ve fizikçi. |
```

**Siz:** Bu harika; cihazı kullanırken bunun ne kadar faydalı olabileceğini görebiliyorum; ya da daha doğrusu, zaten ne kadar faydalı olduğunu veya olacağını; zaman yolculuğu kafa karıştırıcı *iç çekiş*.

**Ada:** Sakin olun, çok iyi gidiyorsunuz. Bir sonraki adıma geçelim.

## Ödev - Ada ve Charles'a Yardım Etmek

RAG hakkında öğrendiklerinizle artık Ada ve Charles'ın cihazına yardım etmeye hazırsınız. Ancak cihazı daha yakından incelerken tanıdık gelmeye başlıyor.

**Siz:** Zaman Böceği, bu ne?

**Zaman Böceği:** Tabii, bu benim ya da olacağım. Ama birkaç parçam eksik. Düşününce, pek çok parçam eksik; henüz bir kabuğum bile yok.

**Ada:** Zaman Böceği, düzgün çalışmasını sağladığımızda zamanda ve uzayda yolculuk etmenizi sağlayan bir cihazdır. Dediğim gibi, cihaza yeni bir özellik eklememiz gerekiyor: geri alma destekli üretim (RAG) modülü. Bu, seyahat ederken farklı zaman dilimlerinden bilgi ve gerekli bağlamı almamıza yardımcı olacak. Her türlü kaynağa başvurduğumuzdan emin olmak istiyoruz; Wikipedia iyi bir başlangıç.

**Siz:** Ne yapmamı istiyorsunuz?

**Ada:** İşte Wikipedia'dan Tim Berners-Lee hakkında metin bilgisi alan örnek kod; Tim bir gün çok önemli biri olacak.

```javascript
const response = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&redirects=true&explaintext&titles=Tim%20Berners-Lee');
const data = await response.json();
const text = Object.values(data.query.pages)[0]?.extract;
```

**Siz:** Sanırım geleceğe giden tek kişi ben değilim?

**Ada:** ...

## Çözüm

[Çözüm](/lessons/05-rag/solution/rag-www.js)

## Bilgi Kontrolü

**Soru**: RAG sisteminde alıcının rolü nedir?

A. Alıcı, girdi verilerine dayalı yanıtlar oluşturur.

B. Alıcı, modelin eğitim verilerine dayalı alakalı bilgiler oluşturur.

C. Alıcı, harici veri kaynaklarından alakalı bilgileri bulur.

[Sınav çözümü](/lessons/05-rag/solution/solution-quiz.md)

## Kendi Kendine Çalışma Kaynakları

- [Geri Alma Destekli Üretim ve Dizinler](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
- **Örnek uygulamalar**:
  * [RAG ile Sunucusuz YZ Sohbeti](https://github.com/Azure-Samples/serverless-chat-langchainjs/)
  * [Youtube'u Sor: RAG tabanlı Youtube Soru-Cevap API'si](https://github.com/Azure-Samples/langchainjs-quickstart-demo)
- [Tam uzunlukta atölye: RAG ile kendi ChatGPT'nizi oluşturun](https://moaw.dev/workshop/gh:azure-samples/azure-openai-rag-workshop/docs/workshop-qdrant.md)

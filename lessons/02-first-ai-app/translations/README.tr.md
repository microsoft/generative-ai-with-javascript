# Ders 2: İlk YZ Uygulamanızı Yazmak

Bu bölümde öğrenecekleriniz:

- Geliştirme ortamınızı kurmak.
- Temel bir uygulama yazmak.
- Sistem istemlerini (system prompts) anlamak.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![Büyük dil modelleri hakkında kısa bir video izleyin](https://img.youtube.com/vi/GQ_2OjNZ9aA/0.jpg)](https://www.youtube.com/watch?v=GQ_2OjNZ9aA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=2)

_Bu video, "büyük dil modelleri" (LLM) olarak adlandırılan YZ modellerini, ne olduklarını ve uygulamalarınıza YZ entegre etmek için nasıl kullanabileceğinizi anlatır._

*🎥 Büyük dil modelleri hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*

💼 Slaytlar: [Büyük dil modellerine giriş, LLM'ler](/videos/slides/01-llms.pptx)

## Hikaye: Irmakta Bir Tekne Hayal Et

> [!NOTE] 
> _Hikayemiz şimdiye kadar şöyle: Siz, bir şeyler yapan bir ustalık sahibisiniz; 1860'ların Londra'sından Zaman Böceği adı verilen gizemli bir cihazla zamanda yolculuk eden bir zanaatkârsınız. Tarihin sayfaları boyunca yolculuk ettiniz; antik mühendisliğin harikası olan ve Dinocrates ile Zaman Böceği'nin yardımıyla kısmen inşa ettiğiniz İskenderiye Feneri'nin yaratılışına tanıklık ettiniz._
>
> Hikayenin başından itibaren takip etmek ve Üretken YZ'ye başlamak istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE] 
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-leonardo).

Dinocrates ile birlikte İskenderiye Feneri'ne son rötuşları yapıyorsunuz. Yüksek yapı güneş ışığında parlıyor; cilalanmış taşı Akdeniz'i yansıtıyor.

Elinizde tuttuğunuz Zaman Böceği'ne bakıyorsunuz; metalik yüzeyi avucunuzda serin hissettiriyor. Yumruğunuzu sıkıp fısıldıyorsunuz: "Beni eve götür." Böcek parlamaya başlıyor, yumuşak ve sıcak bir ışık yayıyor; etrafınızdaki dünya renk girdabına dönüşüyor.

### Yeni Bir Macera

Gözlerinizi açtığınızda dünya değişmiş. Ayağa kalktığınızda bir ırmakta, bir teknede olduğunuzu fark ediyorsunuz. Etrafa bakınıyorsunuz; uzakta, sabah sisine bulanmış binalar görüyorsunuz.

Teknede dolaşırken kenara yaslanmış uzun bir kürek buluyorsunuz. Onu kavrayıp uzaktaki binalara doğru kürek çekmeye başlıyorsunuz. Yaklaştıkça binalar daha da netleşiyor; eski, mimarileri bir Rönesans tablosunu andırıyor.

!["Irmakta kürekle duran adam ile tekne](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/boat.png)

Soru şu: Bu sefer neredesiniz ve hangi zamanda?

Tekneyi iskelede bağlayıp tahta palangalar boyunca yürümeye başlıyorsunuz; ayak sesleriniz hafifçe yankılanıyor.

Yürürken uzun sakallı ve şapkalı bir adamın mekanik parçalar gibi görünen bir kasayı karıştırdığını fark ediyorsunuz. Elleri ustaca hareket ediyor; dişlileri ve yayları kolaylıkla ayıklıyor.

![Leonardo Da Vinci limanda bir kasanın yanında duruyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo.png)

### Yardım Et Bana, Leonardo

**Siz:** "Affedersiniz efendim, burası neresi?" Adam size bakıyor; gözlerinde belirgin bir şaşkınlık var. İngilizce konuştuğunuzu fark edip hızla elinizdeki cihaza dönerek çevirmesini istiyorsunuz.

**Zaman Böceği:** "Elbette, 15. yüzyıl İtalyancasına çeviriyorum. 'Dove sono?'"

**Yaşlı adam:** Yaşlı adam cevap veriyor: "Siete a Firenze, signore. E chi siete voi?"

**Zaman Böceği:** Zaman Böceği çeviriyor: "Floransa'dasınız diyor ve kim olduğunuzu soruyor."

**Siz:** "Ona bir şeyler yapan biriyim ve çalışacak bir yer arıyorum de."

**Yaşlı adam:** Un artigiano, eh? Avete mai sentito parlare di Leonardo da Vinci?

**Zaman Böceği:** Zaman Böceği çeviriyor: "Leonardo da Vinci'yi duydunuz mu diye soruyor."

**Siz:** "Tabii ki," diyorsunuz. "Ona duyduğumu ve onunla tanışmak istediğimi söyle."

**Yaşlı adam:** Yaşlı adam gülümsüyor: "Allora, seguitemi, vi porterò da lui."

**Siz:** "Ne dedi?" diye soruyorsunuz.

**Zaman Böceği:** Zaman Böceği cevaplıyor: "Sizi Leonardo'ya götüreceğini söyledi."

### Atölyede

![Leonardo'nun atölyesi](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo-workshop.png)

Yaşlı adam sizi büyük bir ahşap kapıya götürüyor; içeride her türlü mekanik düzenekle dolu bir atölye sizi karşılıyor.

Zaman Böceği'nden Leonardo'nun nerede olduğunu sormasını istiyorsunuz.

**Siz:** "Dove è Leonardo?"

**Yaşlı adam:** Yaşlı adam size gülümseyerek dönüyor: "Sono io (benim), Leonardo da Vinci. Chi siete voi?", siz kimsiniz?

Tanıma heyecanı içinizi sarıyor.

**Siz:** "Tahmin etmiştim. Ben de bir yapımcıyım; zaman ve mekânın dışında."

**Leonardo:** Leonardo'nun gözleri merakla parlıyor. "Interessante, cosa vi porta qui?"

Zaman Böceği çeviriyor.

**Zaman Böceği:** "Sizi buraya neyin getirdiğini soruyor."

**Siz:** "Şöyle ki, bir proje üzerinde çalışıyordum ve buraya geldim."

Ona Zaman Böceği'ni gösteriyorsunuz; gözleri hayranlıkla parlıyor. Cihazı yakından incelerken nasıl çalıştığını ve Floransa'ya nasıl geldiğinizi anlatıyorsunuz.

Leonardo heyecanla bakıyor.

**Leonardo:** Siz bir yapımcısınız. Sizi ilgilendirebilecek bir projem var. Sözel girdiye dayalı metin üretebilen bir makine üzerinde çalışıyorum. Bana yardım etmek ister misiniz?

Leonardo da Vinci size bir projede yardım istiyor; buna inanmak zor geliyor. Hevesle başınızı sallıyor ve şöyle diyorsunuz:

**Siz:** Projenizde yardım etmekten onur duyarım,
"Sarebbe un onore aiutarti con il tuo progetto."

## Interact with Leonardo

Leonardo ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Leonardo konuşuyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/leonardo-talk.jpeg)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app/README.md_ dosyasına gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Leonardo ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

## Geliştirme Ortamı Kurulumu

Leonardo'nun projesine yardım etmeden önce, ona etkili biçimde yardımcı olmaya başlamak için gereken temel "meslek araçlarını" düşünmelisiniz.

**Siz:** "Zaman Böceği, bu projeye başlamak için ne lazım?" Bir YZ uygulaması çalıştırabileceğim araç ve kütüphaneler öner.

**Zaman Böceği:** 21. yüzyılda çalışan çoğu makineyle uyumluyum; temel araçlar ve kütüphaneler için aşağıdaki listeye bakın.

- **Metin editörü**, örneğin Visual Studio Code.
- **Terminal**, komutları çalıştırmak için.
- **Uygulamanızı test etmek için tarayıcı.** Ayrıca uygulamanızın API uç noktalarını test etmek için curl veya başka bir HTTP istemcisi kullanmak da iyi bir fikirdir.
- **Node.js.** Bilgisayarınızda JavaScript kodu çalıştırmanıza yardımcı olan Node.js ve npm'yi de yüklemeniz gerekecek.
- **API anahtarı.** Üretken YZ modeline erişmek için bir API anahtarına ihtiyacınız olacak. Bunu model sağlayıcısından, örneğin OpenAI veya Azure OpenAI'den alabilirsiniz.

**Siz:** Teşekkürler Zaman Böceği, bunları o bahsettiğin Web'den bir şekilde sen mi bulacaksın?

**Zaman Böceği:** Evet, zaten bunlar elimde diyor ve önünüzdeki duvara bir klavye ve ekran yansıtıyor.

## Temel Bir Uygulama Yazmak

**Siz:** Uygulamanın gerçekte yazılması hakkında daha fazla bilgi ver; nereden başlıyorum?

**Zaman Böceği:** Elbette, en basit haliyle bir uygulama yazmak; bir API'ye istek gönderip yanıtı görüntülemekten ibararet. Adım adım inceleyelim:

- **Girdi**: Temel bir metin oluşturma uygulamasında girdi, uygulamanın genişletmek veya üzerine inşa etmek istediğiniz başlangıç metnidir. Bu girdi kullanıcı tarafından çalışma zamanında sağlanabilir ya da uygulama içinde önceden belirlenmiş (sabit kodlanmış) olabilir. Şimdilik girdi olarak sabit kodlanmış metin kullanacağız.

- **API isteği**: Girdi metniyle birlikte üretken YZ modeli API'sine bir istek göndermeniz gerekiyor. Bu, JavaScript'te (Node.js) fetch fonksiyonu kullanılarak yapılır. İsteğe API anahtarınızı da eklemelisiniz. Güvenliği göz önünde bulundurduğunuzda API anahtarını uygulamanıza sabit kodlamamanız; bunun yerine ortam değişkenlerini kullanmanız önerilir. Ayrıca Azure gibi bir sağlayıcı kullanıyorsanız, kaynakları daha güvenli bir şekilde erişmek için yönetilen kimlik (managed identity) kullanmayı da düşünebilirsiniz.

- **Yanıt**: API, üretilen metni içeren bir yanıt döndürür. Bu metni yanıttan çıkarıp kullanıcıya göstermeniz gerekir.

**Siz:** Kulağa yeterince basit geliyor; içinde bulunduğumuz duruma uygun bir senaryo anlatabilir misin?

**Zaman Böceği:** Tabii, İtalyanca metin üretebilen basit bir uygulama nasıl oluşturabiliriz, hadi inceleyelim.

## İlk Uygulamanız - Bana İtalyanca Öğret

**Zaman Böceği:** Üretken YZ modelleri pek çok şey için kullanılabilir; örneğin dil çevirisi. Aslında bir dilde girdi alıp başka bir dilde metin üretebilir. İngilizce girdi alıp İtalyanca metin üreten basit bir uygulamayla başlayalım.

```javascript

import { OpenAI } from "openai";

// 1. Ask a question about translation
// -----------------------------------

const question = 'Hello, how are you?'; 

const augmentedPrompt = `
## Instructions
Translate the following text to Italian:
## Question
${question}
`;

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: augmentedPrompt }],
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);
```

Burada neler olduğunu açıklayalım:

- Soru 'Hello, how are you?' olarak oluşturuluyor. Bu, İtalyancaya çevrilmesini istediğiniz metin.
- Girdi metnini ve ne yapılacağına dair ek talimatları (yani çeviri) içeren artırılmış istem oluşturuluyor. Girdi metnini isteme dahil etmek için dize enterpolasyonunun nasıl kullanıldığına ve talimatın metni İtalyancaya çevirmek olduğuna dikkat edin.
- İstemci şu özelliklerle oluşturuluyor:
  - `model`: Hangi modelin kullanılacağı.
  - `messages`: Modele gönderilecek istem. Ayrıca, girdi metninin kullanıcıdan geldiğini belirtmek için rolün "user" olarak ayarlandığına dikkat edin. YZ'den gelseydi, rolü "system" olarak ayarlardınız.
- Yanıttan üretilen metin çıkarılıp konsola yazdırılıyor.

**Siz:** Sanırım anladım. Yani `question` değişkeninin değerini başka bir şeyle değiştirirsem, uygulama farklı bir İtalyanca çeviri üretecek?

**Zaman Böceği:** Kesinlikle, girdi metnini istediğiniz herhangi bir şeyle değiştirebilirsiniz. Ayrıca API için temel URL olarak GitHub Models'ın ve API anahtarı olarak bir GitHub token'ının kullanıldığına da dikkat edin.

**Siz:** Bu neden önemli?

**Zaman Böceği:** Kullandığınız modele özgü bir temel URL ve API anahtarı kullanmak önemlidir. GitHub Models, çeşitli özelliklere ve kapasitelere sahip farklı modelleri barındıran ve ücretsiz kullanılabilen bir platformdur.

**Siz:** Güzel, zaten kime ödeme yapacağımı bilmiyorum ve burada para birimimi kabul etmeyecekleri kesin. :)

## Sohbet Uygulamaları

**Zaman Böceği:** Üretken YZ modelleri aynı zamanda bir konuşmaya dayalı metin üretmek için de kullanılabilir. Konuşmanın zaten gerçekleşmiş gibi bir mesaj listesi bağlam olarak sağlayarak YZ ile bir konuşmayı simüle edebilirsiniz.

**Siz:** Bu ilginç geliyor, ama neden faydalı?

**Zaman Böceği:** Faydalı çünkü YZ'nin tek bir istemden çok daha fazla bağlama dayanarak daha iyi yanıt vermesini sağlıyor. Bunu örneklemek için aşağıdaki konuşmaya bakalım:

```text

Kullanıcı: İtalya'ya bir seyahat ayırtmak istiyorum.

YZ: Tabii, ne zaman gitmek istersiniz?

Kullanıcı: Önümüzdeki ay harika olur.

YZ: Anladım, İtalya'nın hangi şehrini ziyaret etmek istersiniz?

Kullanıcı: Roma'yı düşünüyorum.

YZ: Mükemmel seçim! Programınızı planlamanıza yardımcı olabilirim.

Kullanıcı: Bana bunula ilgili daha fazla bilgi ver.

YZ: Roma, antik kalıntıları, sanatı ve canlı kültürüyle tanınıyor. Kolezyum'u, Vatikan'ı ziyaret edip lezzetli İtalyan mutfağının tadını çıkarabilirsiniz.

```

**Zaman Böceği:** "Bana bunula ilgili daha fazla bilgi ver" gibi bir cümle bağlamın dışına alınsaydı, YZ "bunu" neyin ifade ettiğini bilemezdi. İşte bu noktada bağlam devreye giriyor ve bu bağlamı istem aracılığıyla YZ modeline sağlayabiliriz.

**Siz:** Anladım sanırım, bu JavaScript dili dediğin şeyle YZ ile nasıl konuşma kurarım?

**Zaman Böceği:** YZ ile konuşmayı şu şekilde oluşturabiliriz:

```javascript 

// Define the context 

const messages = [ 
 { 
    "role": "user", 
    "content": "I want to book a trip to Italy." 
 }, 
 { 
    "role": "assistant", 
    "content": "Sure, when would you like to go?" 
 }, 
 { 
    "role": "user", 
    "content": "Next month would be great." 
 }, 
 { 
    "role": "assistant", 
    "content": "Got it, where in Italy would you like to visit?" 
 }, 
 { 
    "role": "user", 
    "content": "I'm thinking of Rome. Tell me more about it." 
 } 
]; 

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. Send the request
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
});
  
console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

```

Artık YZ, bağlam (context) olarak bir sohbet mesajları listesi alacak ve buna göre yanıt üretecek. Bu, üretken YZ modellerini kullanmanın daha etkileşimli bir yoludur; chatbot'larda, müşteri hizmetleri uygulamalarında ve daha fazlasında kullanılabilir.

**Siz:** Tamam, konuşmayı doğru anladıysam, YZ artık şu bağlama sahip olacak: _Önümüzdeki ay Roma'ya gidiyorum_, bu bilgiyle alakasız bilgileri eleyip daha alakalı yanıt vermeli?

**Zaman Böceği:** Kesinlikle, YZ konuşmaya daha uygun yanıtlar üretmek için bağlamı kullanacak.

## Sohbet Konuşmasını Sistem Mesajıyla İyileştirmek

**Siz:** Anladım, ama bunu daha da iyileştirmenin bir yolu var mı?

**Zaman Böceği:** Evet, konuşmaya bir sistem mesajı ekleyebilirsiniz. Sistem mesajı, YZ için bir "kişilik" oluşturur ve ek bağlam sağlamak için kullanılabilir.

**Siz:** Peki, konuştuğumuz bağlamda sistem mesajı nasıl görünürdü?

**Zaman Böceği:** Bu konuşma için bir sistem mesajı şöyle bir şey olabilir: _"Ben YZ seyahat  asistanınızım, İtalya'ya seyahatinizi planlamanıza yardımcı olmak için buradayım."_ Bu mesaj konuşmanın tonunu belirler ve YZ'nin etkileşimdeki rolünü anlamasına yardımcı olur.

Böyle bir mesaj oluşturmak için "developer" türüne sahip olduğundan emin olun:

```javascript
const message = {
  "role": "developer",
  "content": "Ben bir YZ seyahat asistanıyım, İtalya'ya seyahatinizi planlamanıza yardımcı olmak için buradayım."
};
```

> [!NOTE] 
> Bu daha önce "system" olarak adlandırılıyordu. Bu yakın zamanda yapılan bir değişikliktir ve "developer" yeni terimdir. Bazı modellerde hâlâ "system" olarak adlandırılmaktadır; bu yüzden sorun yaşarsanız "system" kullanın.

**Siz:** Harika, sohbet konuşmalarıma bir sistem mesajı eklemeyi unutmayacağım. Meraktan, senin için sistem mesajı nasıl görünüyor?

**Zaman Böceği:** Benim için bir sistem mesajı şöyle bir şey olabilir: _"Ben Zaman Böceği'yim; zamanda ve uzayda yol almanıza yardımcı olmak için buradayım. Bulunduğunuz dönem ve kendi zamanınıza geri dönmek için ihtiyaç duyduğunuz araçlar hakkında bilgi ve rehberlik sağlamalıyım."_

### Sıcaklık Ayarıyla Çeşitli Yanıtlar Oluşturmak

**Siz:** Sohbet konuşmaları hakkında bilmem gereken başka bir şey var mı?

**Zaman Böceği:** Evet, YZ yanıtlarının "sıcaklığını" ayarlayabilirsiniz. Sıcaklık, genellikle 0 ile 1 arasında bir değer olan ve YZ yanıtlarının ne kadar yaratıcı olduğunu belirleyen bir değişkendir. 0 sıcaklık daha tahmin edilebilir yanıtlar üretirken, 1 sıcaklık daha yaratıcı ve çeşitli yanıtlar üretir. Sıcaklığı konuşmanızın bağlamına ve YZ'den istediğiniz yanıt türüne göre ayarlayabilirsiniz. 1'den yüksek bir değer ayarlanabilir ancak bu yanıtlarda daha fazla rastgeleliğe ve daha az tutarlılığa yol açar.

**Siz:** Peki sıcaklığı 0 olarak ayarlarsam YZ daha tahmin edilebilir yanıtlar, 1 olarak ayarlarsam daha yaratıcı yanıtlar üretir? Senin sıcaklığın kaç?

**Zaman Böceği:** Benim sıcaklığım 0.7 ve evet, haklısınız; daha yüksek sıcaklıkta YZ daha yaratıcı yanıtlar üretir. Uygulamanızda sıcaklığı nasıl ayarlayabileceğinizi görelim:

```javascript

// Define the context 

const messages = [ 
{ 
    "role": "user", 
    "content": "I want you to generate recipes for me." 
}]; 

// Create the web request 

let temperature = 0.5; // Set the temperature to 0.5

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: temperature
}); 
```

Gördüğünüz gibi sıcaklığı konuşmanızın bağlamına ve YZ'den istediğiniz yanıt türüne göre ayarlayabilirsiniz. Bu, YZ yanıtlarındaki yaratıcılık düzeyini özelleştirmenize olanak tanıyan güçlü bir özelliktir.

## Bağlam Penceresi / Context Window

**Siz:** Daha fazlası var mı?

**Zaman Böceği:** Evet, üretken YZ modellerinde bir diğer önemli kavram bağlam penceresidir. Bağlam penceresi, YZ'nin yanıt üretmek için kullandığı önceki mesajların sayısıdır. Daha büyük bir bağlam penceresi, YZ'nin daha fazla bağlamı göz önünde bulundurmasına ve daha tutarlı yanıtlar üretmesine olanak tanır.

**Zaman Böceği:** Farklı modellerin çıktı token sayısı için farklı sınırları vardır. Örneğin `gpt-4o-2024-08-06` modelini ele alalım, şu özelliklere sahiptir:

- Maksimum çıktı token sayısı: yaklaşık 16k token.
- Maksimum bağlam penceresi boyutu: 128k.

Bu, token'ların büyük çoğunluğunun girdi token'larına harcanabileceği anlamına gelir; yani 128k - 16k = 112k token.

**Siz:** Anladım, bağlam penceresi, token'lar; peki bir token ne kadar?

**Zaman Böceği:** Bir token, bir kelime veya kelimenin bir parçasıdır ve dile göre biraz farklılık gösterir. OpenAI tarafından önerilen, ölçüm için kullanabileceğiniz bir araç var: [tokenizer](https://platform.openai.com/tokenizer). Bir cümleyi deneyelim ve kaç token olduğuna bakalım:

```text
I want you to generate recipes for me.
```

![Tokenizer demosu](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/tokenizer.png)

Yukarıdaki cümlede `tokenizer` çalıştırıldığında 9 token elde ediyoruz.

**Siz:** O kadar az değil, demek ki bağlam penceremdeki token sayısı oldukça fazla olabilir?

**Zaman Böceği:** Evet, farklı bağlam penceresi boyutlarını deneyerek YZ yanıtlarını nasıl etkilediğini görebilirsiniz. Aslında 100'lük bir bağlam penceresi boyutu ayarlarsanız, YZ'yi ve girdi ile çıktı için ne kadar göz önünde bulundurduğunu sınırlayacaksınız. Uygulamanızda bağlam penceresini nasıl ayarlayabileceğiniz aşağıda gösterilmiştir:

```javascript

// Define the context 
const messages = [ 
{ 
  "role": "user", 
  "content": "I want you to generate recipes for me." 
}]; 

// decide on the context window size 

let max_tokens = 100; // Set the context window size 

// Create the web request

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    max_tokens: max_tokens
}); 

```

> [!TIP] 
> Farklı bağlam penceresi boyutlarını deneyerek YZ yanıtlarını nasıl etkilediğini görün.

## Ödev - Bir Mühendislik Asistanı Oluşturmak

Leonardo aniden Zaman Böceği'ni daha yakından incelemek istedi; her yönden baktı, hatta salladı.

**Leonardo:** Hava vidası hesaplamaları ve tasarımında yardımcı olabilecek bir asistana ihtiyacım var. Bunu yapabilecek bir asistan oluşturabilir misiniz?

**Siz:** Tabii ki, bunu sizin için yapabilirim. Zaman Böceği, buna yardımcı olabiliriz değil mi?

**Zaman Böceği:** Evet, sorun olmaz; aslında hava vidası Leonardo'nun en büyüleyici ve vizyoner icatlarından biridir. 1480'lerin sonunda tasarlanmış...

**Siz:** Tek ihtiyacım olan bir evet'ti, dersi daha sonraya saklayalım.

**Zaman Böceği:** Kaba...

**Siz:** Ne?

**Zaman Böceği:** Boşver.

![Hava Vidası, Leonardo Da Vinci](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/02-first-ai-app/assets/helicopter.jpg)

> [!NOTE]
> Sarmal hava vidası olarak da bilinen hava vidası, havayı sıkıştırarak yerden yükselmesi amaçlanmıştı. Leonardo'nun tasarımı; nişasta ile sertleştirilmiş ketenden yapılmış, ahşap bir platforma monte edilmiş büyük, spiral şekilli bir rotora sahipti. Fikir, bir ekibin platform etrafında koşarak vidayı kaldırma sağlayacak kadar hızlı döndürmek için kolları çevirmesiydi.
>
> Leonardo hava vidasının tam ölçekli bir versiyonunu hiç inşa etmemiş olsa da eskiz ve notları onun bunu nasıl hayal ettiğine dair ayrıntılı bilgiler sunmaktadır. Vidanın yeterince hızlı döndürülmesi halinde havaya karşı bastırarak tüm yapıyı yerden kaldıracağına inanıyordu.
>
> Ancak modern bilim insanları, Leonardo'nun döneminde mevcut malzemelerin bunu mümkün kılacak kadar güçlü veya hafif olmadığı görüşünde.
>
> Pratik olmasa da hava vidası, Leonardo'nun dehasının ve yenilik arayışının bir kanıtı olmaya devam etmektedir. Havacılıktaki gelecekteki gelişmelerin temelini attı ve mühendisleri ve mucitleri bugün hâlâ ilham etmektedir.
> [Daha fazla oku](https://en.wikipedia.org/wiki/Leonardo%27s_aerial_screw)

Ödeviniz, Leonardo'ya hava vidasının hesaplamaları ve tasarımında yardımcı olabilecek bir mühendislik asistanı oluşturmaktır.

- Kullanıcı girdisine dayalı metin üretebilmelidir.
- Asistanı tanıtmak için bir sistem mesajı ayarlamalısınız.

Başlamak için [Örnek uygulamaya](/app/README.md) göz atın.

> [!TIP] 
> Sistem mesajının ne olması gerektiğini ve hangi girdiyi sağlamanız gerektiğini düşünün.

## Çözüm

[Çözüm](/lessons/02-first-ai-app/solution/solution.md)

## Bilgi Kontrolü

**Soru:** Üretken YZ modellerinde bağlam penceresinin amacı nedir? Geçerli olanların hepsini seçin.

A. Bağlam penceresi, YZ'nin daha fazla bağlamı göz önünde bulundurmasına ve daha tutarlı yanıtlar üretmesine olanak tanır.

B. Bağlam penceresi, YZ'nin yanıt üretmek için kullandığı önceki mesajların sayısıdır.

C. Bağlam penceresi, YZ yanıtlarının ne kadar yaratıcı olduğunu belirler.

[Sınav çözümü](/lessons/02-first-ai-app/solution/solution-quiz.md)

## Kendi Kendine Çalışma Kaynakları

- [Metin oluşturma](https://platform.openai.com/docs/guides/text-generation)
- [OpenAI için JavaScript kütüphanesi](https://github.com/openai/openai-node/tree/master/examples)
- [Tokenizer](https://platform.openai.com/tokenizer)
- [Tamamlama API'si](https://platform.openai.com/docs/api-reference/completions)
- [Sohbet tamamlamaları](https://platform.openai.com/docs/guides/text-generation#text-generation-models)

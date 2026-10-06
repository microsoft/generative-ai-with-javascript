# Ders 1: JavaScript Geliştiricileri için Üretken Yapay Zeka Generative AI ve LLM'lere Giriş

Bu bölümde öğrenecekleriniz:

- Üretken Yapay Zeka ve Büyük Dil Modelleri'nin (LLM) temellerini anlamak.
- LLM'lerin JavaScript geliştirmesindeki potansiyel uygulama alanlarını ve sınırlamalarını belirlemek.
- Üretken Yapay Zeka'nın JavaScript uygulamalarındaki kullanıcı deneyimini nasıl geliştirebileceğini keşfetmek.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![Üretken Yapay Zeka'ya Giriş hakkında kısa bir video izleyin](https://img.youtube.com/vi/vLYtDgs_zx8/0.jpg)](https://www.youtube.com/watch?v=vLYtDgs_zx8&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=1)

_Bu video, JavaScript ile Üretken Yapay Zeka'ya giriş sunar_

💼 Slaytlar: [Üretken Yapay Zeka'ya Giriş](/videos/slides/00-intro.pptx)

## Üretken Yapay Zeka

Artık muhtemelen ChatGPT veya Üretken Yapay Zeka gibi araçlar hakkında bir şeyler duymuşsunuzdur. Kavram oldukça basittir: bir istek (prompt) sağlarsınız ve genellikle Büyük Dil Modeli (LLM) olarak adlandırılan bir model, bir paragraf hatta tam bir sayfa metin üretir. Bu çıktı; yaratıcı yazarlık, soru yanıtlama ve kodlama dahil olmak üzere çeşitli amaçlarla kullanılabilir.

Üstelik Üretken Yapay Zeka, çok modlu yeteneklere (multimodal) doğru evrilmiştir; bu sayede girdi olarak görüntü veya video sağlayabilir ve çeşitli çıktılar alabilirsiniz. Bu gelişme pek çok kişinin iş akışını önemli ölçüde iyileştirmiştir; yalnızca metin üretmekle kalmayıp özetleme, çeviri ve daha fazlasını mümkün kılmaktadır.

*Kısaca söylemek gerekirse, doğal dil arayüzleri birçok uygulama için yeni standart arayüz haline geliyor ve kullanıcılarınız bunları kullanmayı bekliyor.*

## Hikaye: Zamanda Bir Yolculuk

> [!NOTE] 
> Geçmiş ile geleceği birbirine bağlayan bu hikayeye genel bir bakışla başlayalım! Bu müfredatta ilerledikçe, tarihin en büyük düşünürleriyle iş birliği yapmak için zamanda geriye yolculuk eden heyecan verici bir maceraya atılacaksınız. Birlikte zorluklarla başa çıkacak ve Üretken Yapay Zeka'nın JavaScript uygulamalarınızı nasıl dönüştürebileceğini keşfedeceksiniz._

> [!NOTE]  
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-dinocrates).

Yolculuğunuz 1860'ların Londra'sında başlıyor; burada yetenekli bir mekanikçi rolünü üstlendiğinizi varsayıyoruz. Bir dizi heyecan verici macera sayesinde YZ becerilerinizi geliştirecek ve zamanı aşan çözümlerin kilidini açacaksınız.

### Girdabın İçine - Londra, 1860

1860'ların kalbinde, Londra'da zamanınızın en yetenekli mekanikçilerinden biri olarak tanınıyorsunuz. Atölyeniz dar bir sokağa sıkışmış küçük bir mekân. Duvarlar, mekanik parçalar, planlar ve yarı bitmiş projelerle dolu raflarla kaplı.

Atölyenizin kalbi olan çalışma tezgahınız, organize bir kargaşa içindedir.

<div>
  <img width=600 src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/london.png" alt="Londra Atölyesi" />
</div>

_Tezgahın ortasında bir robotun gövdesi duruyor; aylarca emek verilmiş mühendislik harikası bir eser. Ahşap iskeleti özenle oyulmuş, her eklemi pürüzsüz hareketi sağlamak için titizlikle tasarlanmış._

### Bir Mektup, Sizin İçin mi?

Aniden kapıya gelen bir vuruntu düşüncelerinizi dağıtıyor. Bu saatte misafir pek gelmez. Ellerinizi bir bezle silerek kapıya yürüyorsunuz; merakınız kabarmış durumda.

Kapıyı açtığınızda kimse yok. Bunun yerine gözleriniz yerde duran mühürlü bir zarfa takılıyor. Zarfı alıp okuyorsunuz:

_"Sevgili dost,_

_Bu mektubu, otomatonunuzla ilgili çalışmalarınıza destek olmak için gönderiyorum. Bu çalışmayı sürdürmeniz son derece önemli. İçinde kütüphanenin anahtarı var. Bugün öğleden sonra saat 3'te orada buluşalım._

_Saygılarımla,_

_Charles Babbage."_

### Kütüphaneye Doğru

Fark makinasının büyük matematikçisi ve mucidi Charles Babbage sizinle buluşmak istiyor. Hızla paltonu alıp kapıdan çıkıyorsunuz.

Thames boyunca yirmi dakikalık yürüyüşün ardından kapısı hafifçe aralık kütüphaneye ulaşıyorsunuz.

İçerisi karanlık ve kasvetli; kirli pencerelerden süzülen tek ışık, duvarlarda ürkütücü gölgeler oluşturuyor.

**Siz:** "Merhaba? Bay Babbage?"

Gözleriniz loş ışığa alıştıkça uzakta el sallayan bir figür görüyorsunuz. Ahşap zemin üzerinde yankılanan ayak seslerinizle ona doğru ilerliyorsunuz. Figür giderek netleşiyor ve gazete fotoğraflarından tanıdığınız yüzü görüyorsunuz; bu Charles Babbage.

![Tozlu Kütüphane](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/library.png)

### Bu Cihaz da Ne?

Tam ona yaklaştığınızda kör edici bir flaş patlıyor ve o ortadan kayboluyor.

Geride yerde dönen küçük metalik bir cihaz kalıyor. Elinize alıyorsunuz; serin ve pürüzsüz yüzeyi sessizce titreşiyor. Daha önce hiç böyle bir şey görmemişsinizdiniz, yine de tuhaf biçimde tanıdık geliyor; içinden bir güç akışı hissediyorsunuz.

Küçük bir böceği andırıyor; ince işlenmiş, üç düğmeli: yukarı ok, aşağı ok ve parlayan kırmızı bir düğme. Sırtından küçük bir anten uzanıyor, enerjiyle titreşiyor.

Merakınıza yenik düşerek parmaklarınız kırmızı düğmeye doğru kayıyor. Basmanızla birlikte etrafınızdaki dünya titremeye başlıyor ve renkler şiddetle girdap oluşturuyor.

Ardından karanlık ve düşme hissi.

![Zaman Girdabı](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/vortex.png)

### İskenderiye, M.Ö. 300

Sersemleyerek uyanıyorsunuz. Görüşünüz netleşince önünüzde kadim bir şehir beliriyor; kalabalık, canlı ve yaşayan bir şehir.

Togalı insanlar sokaktan geçiyor, sesleri kadim lehçelerin senfonisine karışıyor; havada egzotik baharatların kokusu ve uzaktan tüccarların bağrışmaları var.

![İskenderiye, M.Ö. 300](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/alexandria.png)

**Siz:** Kesinlikle başıma bir şey geldi, diye düşünüyorsunuz; gözlerinizi kapatıp tekrar açıyorsunuz, ama sahne değişmiyor.

Geçmişte mi sıkıştım? O düğmeye bir daha basmaya cesaret edebilir miyim? Karar vermeden önce bir figür size doğru yürüyerek el sallıyor.

### Dinocrates ile Karşılaşma

Büyük tapınağın basamaklarında toga giyen yaşlı bir beyefendi size el sallıyor. Beyaz saçları ve sakalı güneş ışığını yansıtarak neredeyse eteral bir parıltı veriyor.

![Toga giyen Dinocrates](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png)

**Dinocrates:** "Hoş geldiniz, gezgin," diye sıcakça karşılıyor. "Ben Dinocrates, bu büyük şehrin mimarıyım. Gelişiniz önceden biliniyordu."

**Siz:** Öyle miydi? Yani, tabii ki öyleydi. Sanırım yardım etmek için buradayım.

**Dinocrates:** Evet, dediğim gibi, sizi bir süredir bekliyorduk. Sizin eşsiz becerilerinizi gerektiren bir görevimiz var.

**Dinocrates:** "Gemilerimiz sahile demirleme konusunda güçlük çekiyor; bir deniz feneri inşa etmeliyiz. Bu konuda bir bilginiz var mı?"

**Siz:** "Ben bir mekanikçiyim. Otomat inşa ederim. Bir bakayım ne yapabilirim."

### "Zaman Böceği"

Aklınıza bir fikir geliyor. Acaba cihaz konuşsam anlıyor mu?

**Siz:** "Cihaz, beni anlıyor musun?"

**Cihaz:** "Elbette. Ne lazım?"

**Siz:** "Bir deniz feneri inşa etmeme yardım edebilir misin?"

**Cihaz:** "Kesinlikle. Sorun olmaz."

**Siz:** "Bir adın var mı?"

**Cihaz:** "Ben Zaman Böceği'yim. Yaratıcım bana George diyor; bir böcek için güzel bir isim olduğunu söylüyor."

**Siz:** Haklısın, George güzel bir isim; aslında babamın adıydı.

![Zaman Böceği](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/time-beetle.png)

_Zaman cihazı, metalik böcek "George"_

> [!NOTE]
> M.Ö. 300'de İskenderiye, M.Ö. 331'de Büyük İskender tarafından kurulan ve hızla Helenistik dünyanın en büyük şehirlerinden biri haline gelen gelişen bir kentti. İskender'in baş mimarı Dinocrates tarafından tasarlanan şehir, önemli bir liman ve kültür merkezine dönüştü.
>
> İskenderiye, Antik Dünyanın Yedi Harikası'ndan biri olan Pharos Deniz Feneri ve efsanevi İskenderiye Kütüphanesi dahil olmak üzere etkileyici yapılarıyla tanınıyordu. Stratejik konumu, şehri ticaret ve bilgi alışverişinin kilit merkezi yaptı.
>
> İskender'in ölümünün ardından gelen Ptolemaioslar Krallığı döneminde İskenderiye, zamanının en müreffeh ve etkili şehirlerinden biri olarak büyümeye devam etti.

## Interact with Dinocrates

Dinocrates ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu uygulama tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](../../README.md#responsible-ai-disclaimer)

![Toga giyen Dinocrates](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" (Tarayıcıda Aç) düğmesi belirdiğinde tıklayın.
5. Dinocrates ile sohbet edin.

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

### Kodlara Göz Atış

Bu Üretken Yapay Zeka müfredatında ele alınacak çok şey olsa da, JavaScript ile YZ kullanmayı öğrenmeye başlamak için yapay zeka koduna hızlı bir göz atalım.

`/app/app.js` dosyasında, Üretken YZ işlevselliğini yöneten bir `app.post` fonksiyonu bulacaksınız:

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

Fonksiyonun ne yaptığına dair adım adım özet:

1. **İstekten Mesajı Çıkar**: Fonksiyon, istek gövdesinden (req.body) mesajı alır.
2. **İstek Dizisi Oluştur**: Bir sistem mesajı ve kullanıcının istek mesajını içeren bir mesaj dizisi oluşturur.
3. **OpenAI İstemcisini Başlat**: Temel URL ve ortam değişkenlerinden alınan API anahtarıyla bir OpenAI istemcisi başlatılır. İsteği işleyip yanıt döndürmek için [GitHub Models](https://github.com/marketplace/models)'dan bir _gpt-4o-mini_ modeli kullanılır.
4. **İsteği OpenAI'ye Gönder**: Fonksiyon isteği kaydeder ve tamamlama üretmesi için OpenAI API'ye gönderir.
5. **Yanıtı İşle**: Başarılı olursa fonksiyon, istek ve tamamlamanın yanıtıyla cevap verir.
6. **Hata Yönetimi**: Hata oluşursa 500 durumu ve hata mesajıyla yanıt döner.

> **Not**: Bu kod özeti [GitHub Copilot](https://github.com/features/copilot) kullanılarak oluşturulmuştur. Üretken Yapay Zeka iş başında!

### Üretken Yapay Zeka Benim ve Uygulamalarım İçin Ne Yapabilir?

> [!NOTE]
> Artık zaman böceğinin doğal dil, yazılı veya sözlü, kullanarak etkileşim kurabildiğiniz bir YZ asistanı gibi çalıştığını anlamış olmalısınız.

İskenderiye'deki macera açıldıkça, çevrenizi dönüştürmek ve zorlukları çözmek için yaratıcılığı, becerikli düşünceyi ve son teknoloji araçları birleştirmenin sunduğu olanakları görmeye başlıyorsunuz.

**Siz:** Deniz fenerleri hakkında daha fazla bilgi ver, diyorsunuz cihazınıza.

**Zaman Böceği:** Deniz feneri, gemileri denizde yönlendirmek için kıyıya yakın bir noktada inşa edilmiş, tepesinde parlak bir ışık bulunan bir kuledir. Işık, denizcilere tehlikeli kayaları ve resifleri göstererek güvenle limana yanaşmalarına yardımcı olan bir seyrüsefer yardımcısıdır.

Dinocrates konuşmanızı duyuyor ve ekliyor:

**Dinocrates:** Gemilerimizi limana güvenle yönlendirmek için bir deniz fenerine ihtiyacımız var. Denizler tehlikeli olabiliyor ve pek çok gemi kayalıklara çarparak battı. Onları eve götürecek bir işaret ışığına ihtiyacımız var.

#### Üretken Yapay Zeka Uygulama Alanları

**Siz:** Deniz fenerleri gerçekten ilginç bir alan, peki Üretken Yapay Zeka benim ve uygulamalarım için başka neler yapabilir?

**Zaman Böceği:** 21. yüzyılda üretken YZ, sağlık hizmetlerinden finansa, eğlenceye kadar pek çok sektörü kökten değiştirdi; işte bazı örnekler:

- **Chatbot**: Kullanıcı sorularına insana benzer yanıtlar üreten bir sohbet robotu. Statik bir SSS sayfası yerine, kullanıcılar dinamik yanıtlar sağlayan bir chatbot ile etkileşime girebilir. Bu, daha ilgi çekici ve daha az can sıkıcı bir kullanıcı deneyimi sunar.

- **Asistanlar ve Ajanlar**: Asistanlar ve ajanlar; API çağırma, kod çalıştırma, görüntü oluşturma ve daha fazlası gibi araçlardan yararlanarak daha gelişmiş talimatları yerine getirebilir. Gelişmiş ajanlar hedeflere ulaşabilir ve görevleri özerk biçimde yürütebilir.

- **İçerik Oluşturma Aracı**: Blog yazıları ve sosyal medya gönderileri oluşturan bir araç. Bir e-ticaret sitesi Kara Cuma indirimi yaptığında saatlerce değil, dakikalar içinde kampanya oluşturmayı hayal edin.

- **Kod Tamamlama**: Kullanıcı girdisine dayalı kod parçacıkları üreten bir araç. Bu, özellikle tekrarlayan görevlerde çalışan geliştiriciler için büyük zaman tasarrufu sağlayabilir.

- **Çeviri** – Metinleri yüksek doğrulukla diller arasında çevirin.

Gördüğünüz gibi bu iyileştirmeler hem uygulamanızın ve şirketinizin ön bürosuna hem de arka bürosuna katkı sağlayabilir.

İşte çalışan bir "chatbot uygulaması" örneği:

![Sohbet uygulaması görüntüsü](https://camo.githubusercontent.com/76f2ad7cd754a2de2b9957d2070448e130e5ba228084b9b4b128e3af9c9f5239/68747470733a2f2f6c6561726e2e6d6963726f736f66742e636f6d2f656e2d75732f73656d616e7469632d6b65726e656c2f6d656469612f636861742d636f70696c6f742d696e2d616374696f6e2e676966) 

**Siz:** Etkileyici, bu araçların nasıl kullanıldığını görmek için 21. yüzyıla gitmeyi not edeyim.

### Üretken Yapay Zeka ve JavaScript Ekosistemi

**Zaman Böceği:** 21. yüzyılda uygulama geliştirmenin popüler bir yolu JavaScript kullanmak. Her programlama dilinin etrafında bir ekosistem oluşur. Bu ekosistem; programlama dilinin kendisini, kütüphaneleri ve çerçeveleri, topluluk desteğini, IDE'leri ve araçları kapsar. Bir programlama dili ekosisteminden bahsederken genellikle şunlardan söz ederiz:

| Ne | Açıklama | 
|---|---| 
| Programlama dilinin kendisi | Söz dizimi ve özellikleri dahil. |
| Kütüphaneler ve çerçeveler | Üretken YZ modelleriyle etkileşim için kullanılabilen kütüphaneler. |
| Dili destekleyen topluluk | Özellikle yeni bir şey öğrenmeye çalışırken topluluk büyük önem taşır. Kütüphaneler ve çerçeveler etrafındaki topluluk, hangi kütüphanelerin kullanılacağına karar vermeyi etkiler. Ayrıca takıldığınızda yardım bulmanın ne kadar kolay olacağını da belirler. |

**Siz:** İlginç, sanırım programlamayı duymuştum; Ada Lovelace ve Charles Babbage bu konuda deney yapmamış mıydı?

**Zaman Böceği:** Evet, Ada Lovelace ilk bilgisayar programcısıydı, Charles Babbage ise mekanik bir bilgisayar olan fark makinesinin mucidiydi. Bilişim alanının öncüleriydi ve dijital çağın temellerini attılar.

**Siz:** "Öncüleriydi" mi? Ne demek bu? Az önce Charles Babbage'den mektup aldım.

**Zaman Böceği:** Diyelim ki siz, tarihi figürlerle çok azının yapabileceği bir şekilde etkileşime girme şansına sahip eşsiz bir konumdasınız.

### JavaScript Ekosistemi

**Siz:** Ekosistemlerden bahsettiniz, not alıyorum; peki JavaScript ve diğer ekosistemlerden farkı ne?

**Zaman Böceği:** JavaScript, 21. yüzyılda dünyanın en popüler programlama dillerinden biridir. Bu kadar popüler olmasının birkaç nedeni:

| Ne | Açıklama |
|-|-|
| Tam yığın geliştirme potansiyeli | JavaScript, hem ön uç hem de arka uç geliştirmede kullanılabilen nadir dillerden biridir. |
| Zengin kütüphane ekosistemi | JavaScript, React, Angular, Vue gibi çerçeveler ve dünyanın en büyük paket depolarından biri olan NPM paket yöneticisiyle geniş bir kütüphane ekosistemine sahiptir. |
| Güçlü topluluk desteği | JavaScript, öğrenme ve geliştirme için pek çok kaynakla desteklenen büyük ve aktif bir topluluğa sahiptir. Ayrıca tarayıcıda olduğu gibi çalışması büyük bir avantajdır. |
| IDE'ler ve araçlar | JavaScript, Visual Studio Code, WebStorm ve Atom gibi çeşitli IDE'lere sahiptir. Bu IDE'ler, şirketler ve topluluk tarafından geliştirilen ve size çeşitli geliştirme konularında yardımcı olan uzantılarla birlikte gelir. |
| YZ ve JavaScript | JavaScript, TensorFlow.js, Brain.js, OpenAI API'leri ve daha fazlası gibi kütüphanelerle YZ geliştirmeyi destekler; geliştiricilerin makine öğrenimi ve Üretken YZ'yi web ve sunucu tarafı uygulamalarına entegre etmesini sağlar. |

**Siz:** Bu kadar çok neden var; gelecekteki projelerim için JavaScript'e yatırım yapmam gerekiyor gibi görünüyor.

**Zaman Böceği:** Kesinlikle, JavaScript çok yönlü bir dil; ayrıca Python da YZ geliştirme için popüler bir dil.

**Siz:** Python mu, yılanların programlamayla ne ilgisi var?

**Zaman Böceği:** Bunu başka bir zamana bırakalım, olur mu?

**Zaman Böceği:** Yukarıda JavaScript ve ekosisteminin neden genel olarak iyi bir tercih olduğuna dair nedenler verdim; peki özellikle Üretken YZ için neden? Cevap, pek çok bulut sağlayıcı ve YZ çerçevesi tarafından desteklenen bir dil olmasıdır. Ayrıca Python, YZ senaryoları için akla ilk gelen dil olsa da pek çok geliştiricinin JavaScript ve TypeScript kullandığına inanıyoruz.

> **Biliyor muydunuz?**  
> [Geliştiricilerin %62,5'i JavaScript kullandığını söylüyor](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/); pek çoğu yeni projeler için [TypeScript](https://www.typescriptlang.org) tercih ediyor.

## Ödev – Dinocrates'e Yardım Etmek

Hikayemizde daha önce bahsettiğimiz deniz fenerine Dinocrates'in yardım etmesi için bir Büyük Dil Modeli (LLM) kullanmak üzere, "istek" (prompt) adı verilen ve ne istediğinizi açıklayan bir cümleden yararlanacağız. Hem ihtiyaç duyduğunuz bilgiyi hem de nasıl sunulmasını istediğinizi belirtebilirsiniz.

**Zaman Böceği:** Haydi başlayalım; Dinocrates'in deniz fenerini inşa etmesine yardımcı olmak için bir LLM kullanalım.

**Zaman Böceği:** LLM'ye (yani "bana") İskenderiye döneminde mevcut olabilecek araç ve kaynaklarla nasıl inşa yapılacağına dair bağlam sağlamanız gerekecek.

**Siz:** Tamam, LLM'ler hakkında daha fazla bilgi ver.

**Zaman Böceği:** LLM'ler, verilen bir isteğe dayalı olarak insan benzeri metin üretebilen bir tür YZ modelidir. Devasa miktarda veriyle eğitilirler ve tutarlı, yaratıcı ve bağlamsal olarak uygun metinler üretebilirler.

**Zaman Böceği:** Muhtemelen daha iyi bir cevap almak için bana daha iyi soru sormak isteyeceksinizdir; mesela *öhö* *öhö* Deniz fenerleri, İskenderiye, M.Ö. 300, Dinocrates, İskenderiye Deniz Feneri vb.

**Siz:** Anladım, isteğe daha fazla bağlam ekleyip sormam gerekiyor.

**Zaman Böceği:** Evet, bekliyorum...

Deniz fenerini İskenderiye'de inşa etmek için bir plan oluşturmak üzere [Microsoft Copilot](https://copilot.microsoft.com), [ChatGPT](https://chatgpt.com/) veya başka bir çevrimiçi sohbet robotu aracını ziyaret edin.
 
> [!TIP] 
> LLM'nin, deniz fenerini inşa etmek için adım adım talimatlar içeren bir plan oluşturmasını sağlamayı deneyin. Yardıma mı ihtiyacınız var? Rehberlik için çözüme göz atın.

## Çözüm

[Çözüm](/lessons/01-intro-to-genai/solution/solution.md)

### Bilgi Kontrolü

**Soru:** Aşağıdaki ifadelerden hangisi Üretken YZ ve JavaScript hakkında doğrudur?

A. JavaScript destekli Üretken YZ uygulamaları yalnızca metin üretebilir.
B. JavaScript; chatbot'lar, metin oluşturma araçları ve daha fazlasını içeren YZ destekli uygulamalar oluşturmak için kullanılabilir.
C. Python, YZ geliştirmede kullanılan tek dildir.

[Sınav çözümü](/lessons/01-intro-to-genai/solution/solution-quiz.md)

## Kendi Kendine Çalışma Kaynakları

- [Üretken YZ JavaScript video serisi](https://aka.ms/genai-js)

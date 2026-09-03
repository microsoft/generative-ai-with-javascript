# Ders 4: Yapılandırılmış Çıktı

Bu bölümde öğrenecekleriniz:

- _Yapılandırılmış çıktının_ ne olduğu ve nasıl etkili biçimde kullanılacağı.
- İstemlerden bilgilerin nasıl çıkarılacağı ve çıktıya nasıl dahil edileceği.
- Hizmetler tarafından kolayca tüketilmesi için JSON gibi farklı çıktı biçimlerinin nasıl oluşturulacağı.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

Bu bölümde öğreneceğinizin temelini oluşturduğu için istem mühendisliği videosunu yeniden izlemeniz faydalı olacaktır.

[![İstem mühendisliği hakkında kısa bir video izleyin](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_Bu video, YZ'ye daha net ve etkili talimatlar vererek daha iyi sonuçlar elde etmenizi öğreterek "istemleme" becerilerinizi geliştirmeye giriş sunuyor._

*🎥 İstem mühendisliği hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*

💼 Slaytlar: [İstem mühendisliği](/videos/slides/02-prompt-engineering.pptx)

## Hikaye - Tavadan Ateşe

> [!NOTE]
> _Hikayemiz şimdiye kadar şöyle: Siz, 1860'dan mekanik eğitimli bir mühendissiniz ve Leonardo da Vinci ile zaman yolculuğuna çıktınız. Romalı askerlerden kaçtınız; ya da daha doğrusu, kaçmaya çalışıyorsunuz ve hava vidasını güvenle indirmenin bir yolunu çaresizce arıyorsunuz._
>
> Hikayenin başından itibaren takip etmek istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE]
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-montezuma).

Siz ve Leonardo da Vinci, onun hava vidasıyla yükselirken rüzgar etrafınızda savuruyor; ahşap çerçeve baskı altında gıcırdıyor.

**Siz:** "Leonardo, buradan çıkmanın bir yolunu bulmamız lazım!" diye yüksek sesle haykırıyorsunuz rüzgârın uğultusunun üstünden.

**Leonardo:** "İcadıma güveniyorum, ama bu askerlerden kaçmak için inançtan fazlası lazım."

**Siz:** "Bu tek şansımız olabilir," diyorsunuz böceğin karmaşık mekanizmalarına basarken. Parlak bir ışık ikinizi de sarıyor ve etrafınızdaki dünya kayıp büküluyor.

### Aztek İmparatorluğu

Zaman Böceği'nin parlak ışığı söndüğünde kendinizi büyük bir taş piramidin dibinde buluyorsunuz. Etrafa bakındığınızda Aztek İmparatorluğu'nun kalbine indiğinizi anlıyorsunuz.

Hava vidası, takvim gibi görünen işaretlerle kaplı büyük, özenle oyulmuş bir taşın üzerine garip bir şekilde inmiş durumda.

![Aztek takvimi, Wikipedia](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/aztec.png)

_Aztek takvimi, Wikipedia_

Leonardo da Vinci öne çıkıyor; gözleri hayranlıkla açılmış.

**Leonardo:** "İnanılmaz," diye mırıldanıyor, parmaklarını oymalar üzerinde gezdirerek. "Ama umarım önemli bir şey değildi."

Tepki vermeden önce bir grup Aztek askeri yaklaşıyor.

![Azteklerle buluşma](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/meeting.png)

**Asker lideri:** "Siz kimsiniz ve ne yaptınız?" diye talep ediyor Nahuatl dilinde.

Derin bir nefes alıp sinirlerinizi toplamaya çalışıyorsunuz.

**Siz:** "Uzak bir ülkeden gelen gezginleriz," diye başlıyorsunuz, kadim dil bilginizin işinize yarayacağını umarak. "Bu bir uçan makine; sizi bulmamız için tanrılar tarafından gönderildi."

Savaşçının gözleri şaşkınlıkla açılıyor ama temkinli kalıyor.

**Asker lideri:** "Hükümdar Montezuma ile tanışmak için bizimle gelin. O sizin kaderinize karar verecek."

Piramidin tepesine ulaştığınızda Aztek İmparatorluğu'nun hükümdarı Montezuma'nın altın ve tüylerle süslenmiş bir tahtında oturduğu görkemli bir odaya götürülüyorsunuz.

**Montezuma:** "Uzak bir ülkeden gelen gezginler olduğunuzu iddia ediyorsunuz," diyor Montezuma; sesi sakin ama yetkili. "Ve kutsal takvimimize zarar verdiniz. Bunu nasıl telafi etmeyi düşünüyorsunuz?"

## Bir Oyun Oynayalım

**Leonardo:** "Barış içinde geldik," diyor; sesi kararlı. "Bilgi ve anlayış arıyoruz. Makinemizin gücünü gösterip bilgimizi sizinle paylaşmamıza izin verin."

**Montezuma:** "Pekâlâ. [Patolli](#patolli) oynayalım. En iyi iki oyundan birini kazanırsam cihazınızı vereceksiniz ve nasıl çalıştığını anlatacaksınız. Siz kazanırsanız, serbest gidebilirsiniz."

![Patolli oyunu oynanıyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/game.png)

Oyun başlıyor ve odada fasulyelerin yuvarlanması ve taşların tahta üzerinde hareket etmesi dışında sessizlik hakim.

Montezuma birinci oyunu kazanıyor; beceri ve deneyimi apaçık ortada. Leonardo tahtayı dikkatlice inceliyor; zihninde stratejiler ve olasılıklar üzerinde çalışıyor.

İkinci oyun çekişmeli geçiyor ama Leonardo berabere biten bir galibiyet sağlamayı başarıyor.

**Leonardo:** "Bir oyun daha," diye fısıldıyor, George (Zaman Böceği), bunu kazanmamız lazım, doğru hamleleri ver bana.

**Zaman Böceği:** Pekâlâ, hesaplanıyor... İşte hamleniz...

Son ve kararlı bir hamleyle Leonardo oyunu kazanıyor. Oda alkış ve tezahüratla çınlıyor; Aztekler onun becerisinden ve soğukkanlılığından açıkça etkilenmiş. Montezuma hayal kırıklığına rağmen saygıyla başını eğiyor.

**Montezuma:** "Adil biçimde kazandınız," diyor Montezuma; sesinde bir hayranlık tonu var. "Gidebilirsiniz ve cihazınızı saklayabilirsiniz. Ama bilin ki geri dönmek isterseniz burada her zaman memnuniyetle karşılanacaksınız."

**Zaman Böceği:** Siz söylemezseniz ben de söylemeyeceğim Leonardo ;)

### Patolli

> [!NOTE]
> Patolli, Amerika'nın bilinen en eski oyunlarından biridir; Aztekler gibi Kolomb öncesi Mezoamerika kültürleri tarafından oynanmıştır. Strateji ve şansın karışımıdır.
>
> **Patolli Nasıl Oynanır**:
> - **Tahta ve Parçalar**: X şeklindeki bir tahta üzerinde oynanır; merkez blok ve dört kol vardır. Oyuncular zar olarak beş siyah fasulye kullanır; bir yüzü işaretlidir.
> - **Kurulum**: Her oyuncu altı işaret parçası (boncuk) seçer ve bunları tahtanın dışına yerleştirir; ayrıca puanlama için puan boncukları alır.
> - **Oynanış**: Taşları tahta boyunca ve başa geri hareket ettirmek için fasulyeleri atın. Beş atışı on kare ilerletir. Belirli karelere düşmek sıra kazandırabilir, puan kaybettirebilir veya işaret parçalarını ele geçirebilir.
>
> **Aztek Katılımı**: Soylular ve sıradan halk tarafından yaygın biçimde oynanan oyun, Montezuma'nın sarayında en sevilen oyunlardan biriydi. Eğlencenin ötesinde, battaniye, değerli taşlar ve hatta özgürlük gibi yüksek riskli bahisler içeriyordu.

![Patolli tahtası](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/patolli.png)

_Patolli - Wikipedia_

## Interact with Montezuma

Montezuma ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Montezuma](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/04-structured-output/assets/montezuma.jpeg)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Montezuma ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

## Yapılandırılmış Çıktı

**Zaman Böceği:** Montezuma'yı nasıl yendim bilmek ister misiniz?

**Siz:** Ssşşt, çok yüksek sesle konuşma, hâlâ Aztek İmparatorluğu'ndayız.

**Zaman Böceği:** Oh doğru, özür dilerim, evet yapılandırılmış çıktı sayesinde. Doğru hamleleri istediniz, ben de size bunları yapılandırılmış bir şekilde verdim.

Yapılandırılmış çıktı, bilgileri açıkça düzenlemek için belirli veri biçimlerini kullanır. JSON, XML ve CSV gibi yaygın biçimler, hizmetlerin verileri işlemesini ve kullanmasını kolaylaştırır.

Üretken YZ modelleri verileri çeşitli biçimlerde çıktı olarak sunabilir. Ancak yapılandırılmamış metin çıktısı, bilgilerin çıkarılmasını ve diğer hizmetlere aktarılmasını zorlaştırabilir. Yapılandırılmış çıktı bu konuda yardımcı olabilir.

**Siz:** Ne kadar zekisinmiş ;)

**Zaman Böceği:** Elimden gelenin en iyisini yapmaya çalışıyorum. :-)

İnsan okuyucular için bile tanıdık bir biçimi takip ettiğinde yapılandırılmış verinin okunması ve anlaşılması daha kolaydır.

Birkaç örneğe bakalım ve belirli çıktı biçimleri istemenin bilgilerin çıkarılmasını nasıl kolaylaştırdığını görelim.

**Siz:** Tamam, başka planımız yok zaten, anlat bakalım.

## Çıktıyı Şekillendirmek

**Zaman Böceği:** Basit bir örnekle başlayalım. Leonardo da Vinci olduğunuzu hayal edin ve 15. yüzyıl teknolojisini kullanarak icatlar için fikirler geliştirmeye çalışıyorsunuz. Her icat için hangi kaynakların gerekli olduğunu ve inşa etmenin ne kadar çaba gerektireceğini bilmek istiyorsunuz. Bu bilgiyi şöyle isteyebilirsiniz:

**Leonardo:** Oh bu oyunu seviyorum, herkes benim gibi davransın!

> İstem: 15. yüzyıl teknolojisini kullanarak inşa edebileceğim icatlar için fikirler üret. Her icat için gerekli kaynakları belirt ve inşa etmek için gereken çabayı tahmin et.

```text
Sonuç:
Tabii! İşte 15. yüzyıl teknolojisini kullanarak inşa edebileceğiniz bazı ayrıntılı icat fikirleri; gerekli kaynaklar ve ilgili çaba miktarıyla birlikte:

### 1. Su Gücüyle Çalışan Değirmen
**Gerekli Kaynaklar**:
 - Su kaynağı (nehir veya dere)
 - Su çarkı ve değirmen yapısı için ahşap
 - Öğütme için taş
 - Dişliler ve eksenler için metal

 **Çaba**:
 - **Yüksek**: Su çarkını, değirmen yapısını ve öğütme mekanizmasını inşa etmek için önemli inşaat ve mühendislik becerileri gerektiriyor. Ayrıca sürekli su akışını sağlamanız gerekiyor.

 ### 2. Astrolab
 **Gerekli Kaynaklar**:
 - Plakalar ve bileşenler için pirinç veya diğer metaller
 - Oyma aletleri
 - Doğru ölçümler için matematiksel bilgi

 **Çaba**:
 - **Orta**: Hassas metal işçiliği ve oyma gerektirir. Doğruluğu sağlamak için astronomi ve matematik bilgisi gerekir.

 ### 3. Baskı Makinesi
 **Gerekli Kaynaklar**:
 - Baskı yapısı için ahşap
 - Hareketli tip için metal
 - Mürekkep ve kağıt

 **Çaba**:
 - **Yüksek**: Basımı ve hareketli tip oluşturmayı inşa etmek gelişmiş marangozluk ve metal işçiliği becerileri gerektiriyor.

Bu oldukça iyi görünen bir yanıt; her fikir aynı şekilde yapılandırılmış ve anlaşılması kolay. Ama farklı bir şekilde isteseydiniz? Bunun için metinde nasıl istediğinizi talimat olarak verebilir hatta bir çıktı şablonu sunabilirsiniz. Her tekniği gösterelim.
```

**Leonardo:** Evet, kesinlikle su gücüyle çalışan değirmen fikrini çalıyorum; nehir kenarında bir değirmen, tahılı una öğütüyor; mükemmel! Bu gadget'ı seviyorum. Başka ne düşünüyorum küçük gadget? Bu beni Sforza gibi insanlara olan bağımlılıktan kurtaracak.

**Zaman Böceği:** Tabii, bir projeyi hiç bitirebilirseniz, Leonardo. :-)

**Leonardo:** Hey, üzerinde çalışıyorum!

**Zaman Böceği:** Modeli çıktıyı daha yapılandırılmış bir şekilde sunmaya nasıl yönlendireceğinize bakalım.

### Daha İyi Çıktı İçin İsteminizi Yapılandırın

**Zaman Böceği:** İstemi, modele çıktının nasıl yapılandırılmasını istediğinizi söyleyerek geliştirebilirsiniz. Örneğin, ihtiyaç duyduğunuz sütunlarla tablo biçimi isteyebilirsiniz. İstemi şöyle değiştirebilirsiniz:

> İstem: 15. yüzyıl teknolojisini kullanarak inşa edilebilecek icat fikirleri üret. Her icat için gerekli kaynakları belirt ve inşa etmek için gereken çabayı tahmin et. Bilgileri şu sütunlarla tabloda sun: Başlık, Açıklama, Gerekli Kaynaklar ve Çaba.

```text
Sonuç:

| Başlık               | Açıklama                                                 | Gerekli Kaynaklar                                     | Çaba   |
|----------------------|----------------------------------------------------------|-------------------------------------------------------|--------|
| Su Gücüyle Değirmen  | Su çarkıyla çalışan, tahılı una öğüten değirmen.        | Su kaynağı, ahşap, taş, dişliler için metal            | Yüksek |
| Astrolab             | Zaman ve yıldız konumlarıyla ilgili problemleri çözen astronomik alet. | Pirinç, oyma aletleri, matematiksel bilgi | Orta   |
| Baskı Makinesi       | Elle kopyalamadan daha verimli metin çoğaltma basımı.   | Ahşap, hareketli tip için metal, mürekkep, kağıt      | Yüksek |

Bu sefer okunması ve anlaşılması daha kolay bir tablo elde ediyorsunuz.
```

**Leonardo:** Bunu seviyorum, kesinlikle çok zaman kazandıracak.

**Siz:** Ben de.

### Bir Çıktı Şablonu Sunmak

Yapılandırılmış çıktı elde etmenin bir diğer yolu da çıktı şablonu sunmaktır. Sütunlardan JSON, XML, CSV veya markdown'a kadar herhangi bir biçimde olabilir.

> İstem: 15. yüzyıl teknolojisini kullanarak inşa edilebilecek icat fikirleri üret. Her icat için gerekli kaynakları belirt ve inşa etmek için gereken çabayı tahmin et. Aşağıdaki biçimi kullanarak bilgileri sun (çıktı biçimi olarak markdown kullan):
>
> Başlık: [İcat Adı]
> Açıklama: [Kısa Açıklama]
> Gerekli Kaynaklar: [Gerekli Malzemelerin Listesi]
> Çaba: [Tahmini Zorluk veya Gerekli Emek]

```text

**Sonuç**:

 Tabii! İşte 15. yüzyıl teknolojisini kullanarak inşa edebileceğiniz bazı icat fikirleri; istenen biçimde:

 ### 1. Su Gücüyle Değirmen
 **Başlık**: Su Gücüyle Değirmen

 **Açıklama**: Su çarkıyla çalışan, tahılı una öğüten değirmen.

 **Gerekli Kaynaklar**: Su kaynağı, ahşap, taş, dişliler ve eksenler için metal.

 **Çaba**: Yüksek - Su çarkını, değirmen yapısını ve öğütme mekanizmasını inşa etmek için önemli inşaat ve mühendislik becerileri gerektiriyor.

 ### 2. Astrolab
 **Başlık**: Astrolab

 **Açıklama**: Zaman ve yıldız konumlarıyla ilgili problemleri çözen astronomik alet.

 **Gerekli Kaynaklar**: Pirinç, oyma aletleri, matematiksel bilgi.

 **Çaba**: Orta - Hassas metal işçiliği ve oyma gerektirir. Doğruluğu sağlamak için astronomi ve matematik bilgisi gerekir.

 ### 3. Baskı Makinesi
 **Başlık**: Baskı Makinesi

 **Açıklama**: Elle kopyalamadan daha verimli metin çoğaltma basımı.

 **Gerekli Kaynaklar**: Ahşap, hareketli tip için metal, mürekkep, kağıt.

 **Çaba**: Yüksek - Basımı ve hareketli tip oluşturmayı inşa etmek gelişmiş marangozluk ve metal işçiliği becerileri gerektiriyor.

 ### 4. Mekanik Saat
 **Başlık**: Mekanik Saat

 **Açıklama**: Zamanı tutmak için dişliler ve ağırlıklar kullanan saat.

 **Gerekli Kaynaklar**: Dişliler, yaylar, ağırlıklar için metal, muhafaza için ahşap, hassas aletler.

 **Çaba**: Çok Yüksek - Karmaşık metal işçiliği ve mekanik konusunda derin anlayış gerektiriyor.
```

**Leonardo:** Bu harika, ama Jason kim?

**Zaman Böceği:** JSON, Leonardo, JSON. Hizmetler veya uygulamalar tarafından kolayca tüketilabilen yapılandırılmış bir biçimdir.

**Leonardo:** Evet, aynen onu söyledim, Jason.

**Zaman Böceği:** _İç çekiş_.

Gördüğünüz gibi çıktı, çıktı şablonundaki özelliklere göre yapılandırılmıştır. Bu, okunmasını ve anlaşılmasını kolaylaştırır; ayrıca diğer hizmetler veya uygulamalar tarafından kolayca tüketilebilecek tekrarlanabilir çıktı oluşturur.

Elbette bir hizmet, JSON, XML veya CSV gibi daha yapılandırılmış çıktıdan yararlanır; bu nedenle bunları nasıl isteyebileceğinize bakalım.

### JSON, XML veya CSV Gibi Biçimlerle Yapılandırılmış Çıktı Kullanmak

**Zaman Böceği:** Şimdiye kadar modeli istemde yönlendirerek çıktı yapısını nasıl kontrol edebileceğinizi gördünüz. Hatta bir çıktı şablonu bile sundunuz. Bu fikri bir adım öteye taşıyarak JSON ve diğerleri gibi daha yapılandırılmış çıktı biçimlerine nasıl uygulanabileceğini görelim.

JSON çıktısı istemek için istemi uygun şekilde değiştirin:

> **İstem**: 15. yüzyıl teknolojisini kullanarak inşa edebileceğim icat fikirleri üret; her biri için hangi kaynaklara ihtiyaç duyduğumu ve her icadı inşa etmenin ne kadar çaba gerektireceğini belirt; her fikri json biçiminde sun; başlık, açıklama, gerekli_kaynaklar, çaba özellikleri ekle.
>
> JSON çıktı örneği:
> [
>   {
>     "title": "",
>     "description": ".",
>     "resources_needed": "",
>     "effort": ""
>   }
> ]

```text
> Yanıt:
Tabii! İşte 15. yüzyıl teknolojisini kullanarak inşa edebileceğiniz bazı icat fikirleri; JSON biçiminde:

```json
[
  {
    "title": "Su Gücüyle Değirmen",
    "description": "Su çarkıyla çalışan, tahılı una öğüten değirmen.",
    "resources_needed": "Su kaynağı, ahşap, taş, dişliler ve eksenler için metal",
    "effort": "Yüksek"
  },
  {
    "title": "Astrolab",
    "description": "Zaman ve yıldız konumlarıyla ilgili problemleri çözen astronomik alet.",
    "resources_needed": "Pirinç, oyma aletleri, matematiksel bilgi",
    "effort": "Orta"
  },
  {
    "title": "Baskı Makinesi",
    "description": "Elle kopyalamadan daha verimli metin çoğaltma basımı.",
    "resources_needed": "Ahşap, hareketli tip için metal, mürekkep, kağıt",
    "effort": "Yüksek"
  }
]
```

**Zaman Böceği:** Bu tür yapılandırılmış çıktı, JSON verilerini tüketebilen başka bir hizmet veya uygulamaya gönderilebilir.

## İstemlerden Veri Çıkarmak

**Zaman Böceği:** Kullanıcıların rezervasyon yapacakları seyahatler hakkında bilgi bulmasına yardımcı olan bir chatbot oluşturduğunuzu hayal edin. Alakalı yanıtlar sunmak için kullanıcının girdisinden temel ayrıntıları çıkarmak istiyorsunuz. Şöyle bir açıklama olduğunu varsayalım:

> Nereye gitmek istediğinizi, ne zaman seyahat etmek istediğinizi ve bütçenizi yazın.

Bilgileri çıkaran bir istem nasıl görünür?

> İstem: Bir kullanıcının isteminden şu bilgileri çıkar: konum, ne zaman, bütçe, para birimi; çıkarılan verileri JSON biçiminde yanıtla.
>
> Kullanıcı istemi: Haziran'da Yunanistan'a gitmek istiyorum, bütçem 800 euro.


> Yanıt:

```json
{
  "location": "Yunanistan",
  "when": "Haziran",
  "budget": 800,
  "currency": "euro"
}
```

**Leonardo:** George (Zaman Böceği) hiç durmuyor değil mi?

**Siz:** Kapatma düğmesini bulabilirsem...

**Zaman Böceği:** Benzer bir istemle bunu deneyelim; modelin doğru şeyi yapıp yapmadığından emin olmak için kullanıcı girdisini biraz değiştirelim.

> İstem: Bir kullanıcının isteminden şu bilgileri çıkar: konum, ne zaman, bütçe, para birimi. Çıkarılan verileri JSON biçiminde yanıtla. Kullanıcı istemi: ABD'ye gidiyorum, maksimum 1200 dolar, belki Ocak.
>
> Yanıt:

```json
{
  "location": "ABD",
  "when": "Ocak",
  "budget": 1200,
  "currency": "dolar"
}
```

Geliştirici olarak şöyle bir şablon oluşturabilirsiniz:

```text
Bir kullanıcının isteminden şu bilgileri çıkar: konum, ne zaman, bütçe, para birimi; çıkarılan verileri JSON biçiminde yanıtla; kullanıcı istemi: {user_input}.
```

**Siz:** Bulduk, al sana George!

**Zaman Böceği:** _Kapanıyor_.

**Leonardo:** Sonunda huzur ve sessizlik.

**Zaman Böceği:** _Acil durum başlatması başlatılıyor_. Neredeyim kaldım? Ah evet.

**Zaman Böceği:** Chatbot'lar için bu, kullanıcının girdisinden bilgi çıkarmanıza olanak tanıyan çok güçlü bir özelliktir. Peki kullanıcı her türlü şey isterse? Chatbot'unuzun sahip olduğu becerileri, yapabileceği şeyleri ve hangi parametrelere ihtiyaç duyduğunu açıkladığınız bir şablon oluşturabilirsiniz:

```text
İşte sahip olduğunuz bazı beceriler:

skill: book_trip
parameters: location, when, budget, currency

skill: find_hotel
parameters: location, check_in, check_out, budget

skill: order_food
parameters: cuisine, delivery_address, payment_method

Kullanıcının istemine göre hangi becerinin kullanılacağını belirleyin ve gerekli parametreleri çıkarın; çıkarılan verileri skill, parameters, extracted_data sütunlarıyla JSON biçiminde yanıtlayın.

{user_input}
```

Aşağıdaki kullanıcı girdilerini deneyelim:

> İstem: ABD'ye gidiyorum, maksimum 1200 dolar, belki Ocak.
> Sonuç:

```json
{
  "skill": "book_trip",
  "parameters": ["location", "when", "budget", "currency"],
  "extracted_data": {
    "location": "ABD",
    "when": "Ocak",
    "budget": 1200,
    "currency": "dolar"
  }
}
```

> İstem: New York'ta kalacak bir yer ayırtmak istiyorum.
> Sonuç:

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

Becerileri ve parametreleri sunma ile istemlerden veri çıkarma kombinasyonu _araç çağırma_ veya _fonksiyon çağırma_ olarak da bilinmektedir. Modelinizden bu tür bir yanıt, geliştirici olarak kullanıcının ne istediğini ve kullanıcının isteğini karşılamak için karşılık gelen bir fonksiyonu nasıl çağıracağınızı anlamanızı kolaylaştırır.

**Siz:** Çok kullanışlı bilgi, George!

## Ödev - Hava Vidasını Tamir Et

**Zaman Böceği:** İkinizin de dikkatini istiyorum; bir sorunumuz var. Hava vidası, Roma askerlerinden kaçış sırasında ve Aztek İmparatorluğu'na iniş sırasında hasar gördü. Leonardo da Vinci'nin makinesi oldukça hassastır ve tamir için çok belirli bir girdi gerektirir. Hava vidasını tamir etmenize yardımcı olmak için Zaman Böceği'nize (YZ Asistanı) gerekli bilgileri sağlamanız gerekiyor.

**Leonardo:** Hava vidasındaki hasarı tamir etmeyi başardım ama şimdi bir başlatma sırası gerekiyor: sol, sol, yukarı, sağ.

**Siz:** Kulağa yeterince kolay geliyor, sadece bu metin mi?

**Leonardo:** Evet, ama özel; aynalı olması lazım; tüm metinlerimi böyle yazarım. Ve tabii ki 3'lük bir kaydırmayla Sezar şifresi kullanıyorum çünkü İtalyanım. :-)

**Siz:** Peki neden kendiniz yazmıyorsunuz?

**Leonardo:** Yapabilirdim, ama siz ve Zaman Böceği'nin bunu yapıp yapamayacağını merak ediyorum.

**Siz:** Pekâlâ.

**Talimat:** Hava vidasının başlatma sırasını isteyen bir istem yazın; metin aynalı olmalı ve 3'lük bir kaydırmayla Sezar şifresiyle kodlanmalı. Kodlanmış metinle yanıtlayın.

Başlamak için [örnek uygulamaya](/app/README.md) bakın. İhtiyaç duyduğunuz tüm bağımlılıklarla birlikte bir Node.js projesi içeriyor.

> NOT: Henüz bir Codespace oluşturmadıysanız, lütfen şimdi yapın; örnek uygulamadaki YZ iletişiminin çalışması için buna ihtiyacınız olacak.
>
> [Ortamınızı Kurun](/docs/setup/README.md) belgesinin _Seçenek 1: GitHub Codespace Oluşturma_ bölümüne bakın.

## Çözüm

[Çözüm](/lessons/04-structured-output/solution/solution.md)

## Meydan Okuma

Seyahat rezervasyonu örneğini, beceriler sunmayı ve parametreler çıkarmayı kendi seçtiğiniz bir alana uyarlayın. Kullanıcı girdisi isteyen ve ardından kullanıcının talebini karşılamak için gerekli bilgileri çıkaran bir istem yazın. Çıkarılan verileri skill, parameters ve extracted_data sütunlarıyla JSON biçiminde yanıtlayın.

Ayrıca kullanıcının girdisine göre beceriyi belirleyin.

## Özet

Bu bölümde yapılandırılmış çıktı ve bunun bilgileri yapılandırılmış bir şekilde sunmak için nasıl kullanılabileceğini öğrendiniz.

Modeli istemde yönlendirmek, çıktı şablonu sunmak ve JSON, XML veya CSV gibi biçimleri kullanmak dahil olmak üzere çıktıyı şekillendirmenin farklı yollarını keşfettiniz.

Ayrıca istemlerden veri çıkarmayı ve bunları yapılandırılmış bir biçimde sunmayı öğrendiniz.

Yapılandırılmış çıktıdan etkili biçimde yararlanarak, Üretken YZ modelleri tarafından oluşturulan bilgilerin anlaşılmasını ve tüketilmesini kolaylaştırabilirsiniz.

## Bilgi Kontrolü

**Soru**: Yapılandırılmış çıktı ne için kullanılır? Geçerli olanların hepsini seçin.

A. Bilgileri yapılandırılmış bir şekilde sunmak.

B. İstemlerden veri çıkarmak.

C. Yapılandırılmamış metin üretmek.

[Sınav çözümü](/lessons/04-structured-output/solution/solution-quiz.md)

## Kendi Kendine Çalışma Kaynakları

- [JavaScript ile Üretken YZ video serisi](https://aka.ms/genai-js)

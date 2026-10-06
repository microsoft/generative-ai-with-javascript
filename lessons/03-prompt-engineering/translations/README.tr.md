# Ders 3: İstem Mühendisliği

Bu bölümde öğrenecekleriniz:

- İstem mühendisliğinin ne olduğu ve temellerini bilmenin daha iyi sonuçlar elde etmenize nasıl yardımcı olduğu.
- Farklı istem mühendisliği teknikleri ve bunların farklı senaryolarda daha iyi sonuçlar sağlamaya nasıl yardımcı olduğu.
- Meta istemlerin ne olduğu ve çıktıyı kısıtlamak, erişilebilirliği sağlamak ve daha iyi bir kullanıcı deneyimi sunmak için nasıl kullanıldığı.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![İstem mühendisliği hakkında kısa bir video izleyin](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_Bu video, YZ'ye daha net ve etkili talimatlar vererek daha iyi sonuçlar elde etmenizi öğreterek "istemleme" becerilerinizi geliştirmeye giriş sunuyor._

*🎥 İstem mühendisliği hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*

💼 Slaytlar: [İstem mühendisliği](/videos/slides/02-prompt-engineering.pptx)

## Hikaye: Yolculuk Bileti

> [!NOTE] 
> Şimdiye kadar Leonardo da Vinci ile zaman yolculuğu yaparak Rönesans'ın harikalarını keşfettiniz. Zamanda ve uzayda yolculuk etmenizi sağlayan gizemli bir cihaz olan Zaman Böceği ile karşılaştınız.
>
> Hikayenin başından itibaren takip etmek istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE] 
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-sforza).

**Siz:** Eve dönmeyi başarabilir miyim, deneyelim.

Düğmeye basmayı başarmadan önce atölye kapıları gürültülü bir patlamayla ardına kadar açılıyor. Kapı çerçevesinde geniş omuzlu ve pahalı kıyafetler giymiş bir adam duruyor; elinde bir kağıt sallıyor ve bağırıyor:

!["Öfkeli Ludovico Sforza kapıya giriyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png)

*Ludovico Sforza*

**Sforza**: Da Vinci, dov'è il mio dipinto? Tablom nerede?

**Leonardo:** Bu Sforza. Bir tablo, "Son Akşam Yemeği"ni tamamlamamı istiyor.

**Siz:** Bunu ona söyleyemez miydin?

**Leonardo:** Denedim ama o sabırsız bir adamdır.

Leonardo'nun peşinden koşarak arka kapıdan karanlık bir sokağa fırladığınızda sizi bekleyen bir at arabası görüyorsunuz.

Leonardo dizginleri kavradığında ikiz birlikte arabaya atlıyorsunuz. Kamçının keskin bir şaklamasıyla at harekete geçiyor; Floransa'nın dar sokaklarında dörtnala koşuyor.

**Leonardo:** O gadget'a bas, daha da yaklaşıyorlar!

**Siz:** "Tamam, Zaman Böceği, dikkatle dinle. Şimdiye, eve geri dönmem gerekiyor, tamam mı?" Birden araba bir tümsekten geçiyor ve Zaman Böceği elinizden fırlayıp yere düşüyor. Bip bip sesi çıkarmaya başlıyor ve robotik bir sesle "Roma'ya gidiliyor" diyor.

**Siz:** Hayır, Roma değil, ev... ev...

Renkler girdabı arabayı sarıyor; etrafınızdaki dünya ışığın kaleydoskopuna dönüşüyor.

## Kaçış

Renk girdabı kayboluyor ve kendinizi Roma'da Via Appia'da yarış içinde buluyorsunuz; şaşkınlıkla at yarışının tam ortasındasınız. Savaş arabaları gürülderek geçiyor; tekerlekleri toz bulutları kaldırıyor.

![Roma'dan Kaçış](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/escape.png)

**Siz:** Leonardo, neredeyiz?

**Leonardo:** Yarışın ortasındayız gibi görünüyor! Buradan çıkmamız lazım!

Araba kaosun içinde fırlayıp giderken arabanın kenarlarını sıkıca tutuyorsunuz. Romalı askerler atlarda yaklaşıyor; zırhları güneş ışığında parlıyor.

**Siz:** Oraya! Limana doğru git!

Leonardo arabayı çıkışa doğru yönlendiriyor; tekerlekler arnavut kaldırımlarında kayıyor. Askerler arkanızda; bağrışmaları kulaklarınızda yankılanıyor.

**Leonardo:** Onları kaybetmeliyiz! Saklanacak bir yer ara!

Kalp atışlarınız hızlanırken dar sokakları tarıyorsunuz.

**Siz:** Orada! Bir arka sokak!

Leonardo arabayı sokağa sokuyor; araba sıkı dönüşü aşarken sarsılıyor. Arabadan atlıyor ve Leonardo'nun arka taraftaki büyük bir cihazı sürüklemeye yardım ediyorsunuz. Bu onun icadı; _hava vidası_.

**Leonardo:** Çabuk, bunu çatıya çıkarmamız lazım!

İkiz birlikte cihazın ağırlığını taşımaya çabalıyorsunuz. Askerlerin takibinin sesi giderek yükseliyor; ayak sesleri duvarlarda yankılanıyor. Nefes nefese ve terleyerek çatıya ulaşıyorsunuz.

**Leonardo:** Kurmama yardım et!

Ustalıklı hassasiyetle birlikte çalışıyorsunuz. İkiz birlikte cihaza tırmanıyorsunuz; kalbiniz göğsünüzde çarpıyor.

**Leonardo:** Sıkı tutun!

Son bir itiş ile hava vidası dönmeye başlıyor. Kanatlar havayı yakalıyor ve ani bir kalkış hissediyorsunuz. Cihaz uçarken zemin altınızda uzaklaşıyor; Roma çatılarının üzerinde süzülüyorsunuz.

**Siz:** Başardık, Leonardo! Uçuyoruz!

**Leonardo:** Evet, ama güvenli bir yere inmemiz lazım.

Şehre bakıyorsunuz; antik binalar aşağınızda uzanıyor.

![Havada, ayakları sallanan biri şehre bakıyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/airborne.png)

## Sforza ile etkileşim kurun

Sforza ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Ludovico Sforza](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Sforza ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

## İstem Mühendisliği Nedir?

**Zaman Böceği:** İstem mühendisliği hakkında konuşmamız gerekiyor.

**Siz:** Öyle mi? Bu nedir ki?

**Zaman Böceği:** İstem mühendisliği, adına rağmen köprü veya yol inşaatıyla değil; Üretken bir YZ dil modelinden istenen çıktıyı elde etmek için doğru "istemleri" oluşturmakla ilgilidir.

**Siz:** Tamam, ama bunu neden bilmem gerektiği önemli?

**Zaman Böceği:** Peki, hava vidasını indirmek istiyorsun, değil mi?

**Siz:** Evet, tercihen bir parça halinde. :-)

**Zaman Böceği:** Öyle tahmin ettim ben de, şimdi kulak ver! İstem mühendisliği, bir dil modelinden istenen çıktıyı elde etmek için doğru istemleri oluşturmakla ilgilidir.

**Zaman Böceği:** Büyük dil modellerinin, modele açıkça programlanmamış ancak geniş metin verileri üzerindeki eğitim şeklinden ortaya çıkan özellikler olan _ortaya çıkan özellikler_ (emergent properties) adı verilen şeyleri vardır. Bu ortaya çıkan özellikleri inceleyerek, modelden daha iyi sonuçlar elde etmenize yardımcı olacak sonuçlar çıkarabilir ve kalıplar keşfedebilirsiniz.

**Siz:** Tamam, yani modelden daha iyi sonuçlar almamıza yardımcı olabilecek keşfettiğimiz kalıplar var. Ama bu hava vidasını indirmeme nasıl yardımcı olacak?

**Zaman Böceği:** Evet doğru, ve wow, siz de sabırsızmışsınız değil mi?

**Siz:** Peki ya siz de net iniş talimatları olmadan bir düzenekte uçsaydınız sabırsız olmazdınız mı?

**Zaman Böceği:** Ben de sizinle birlikteyim, biliyorsunuz, ama konuya dönelim.

## İstem Mühendisliğinin Uygulama Geliştiricilere Yardımı

**Zaman Böceği:** Bir uygulayıcı olarak, daha iyi bir istem oluşturabilmek araç kutunuzda bulundurmak isteyeceğiniz bir beceridir.

Geliştirici perspektifinden bakıldığında, istem mühendisliğini şunlar için kullanabilirsiniz:

- **Daha doğru sonuçlar** elde etmek ve nihayetinde uygulamanızın kullanıcı deneyimini iyileştirmek.

- **Modelin çıktısını kontrol etmek** ve bunun kullanıcılarınız için alakalı ve uygun olduğundan emin olmak. Bu, hassas konularla uğraşırken ve marka itibarınızı korumak için özellikle önemlidir.

- Çıktıyı **anlaması ve kullanması kolay bir şekilde biçimlendirmek**. Bu konuya bir sonraki bölümde daha ayrıntılı bakacağız.

**Zaman Böceği:** Dil modeliniz için etkili istemler oluşturmak amacıyla kullanabileceğiniz farklı teknikleri ve stratejileri inceleyelim.

## İstem Mühendisliği Teknikleri ve Stratejileri

**Zaman Böceği:** Etkili istemler oluşturmak için kullanabileceğiniz birkaç teknik ve strateji şunlardır:

- **Az-örnekli istemleme (Few-shot prompting).** Bu teknik, YZ'ye istediğiniz yanıt türünü göstermek için birkaç örnek vermeyi içerir.

- **Düşünce zinciri istemleme (Chain-of-thought prompting).** Bu teknik, YZ'ye adım adım karmaşık bir görevi nasıl çözeceğini öğretmek için bir dizi istem sunmayı içerir.

- **Meta istemler (Meta-prompts).** Bu teknik, YZ çıktısını daha hassas biçimlendirmek için ekstra ayrıntılar veya talimatlar eklemeyi içerir.

- **Maötik istemleme (Maieutic prompting).** Bu teknik, YZ'yi belirli bir yanıta yönlendirmek için rehber sorular kullanmayı içerir.

**Siz:** Bu ilginç geliyor, sanırım örnekler vereceksiniz?

**Zaman Böceği:** Evet, hemen gelecek. Pratikte nasıl çalıştıklarını anlamamız için bu tekniklerin her birine ilişkin örneklere bakalım.

### Az-Örnekli İstemleme: YZ Çıktısını Yönlendirmek İçin Örnekler Ver

Az-örnekli istemleme, bir YZ modeline çıktısını yönlendirmek için birkaç örnek verir. Antik Roma hakkında soru soran ve hava vidasında olduğunuzu hayal edin. Az-örnekli istemler şöyle görünebilir:

> "Bana Roma Kolezyumu hakkında bilgi ver." → "Devasa bir amfitiyatrdır."
>
> "Antik Roma'da hayat nasıldı?" → "Kalabalık ve zordu."

**Siz:** Anladım! Bu YZ'nin doğru anlamasına yardımcı oluyor, orada bile! ;)

**Zaman Böceği:** Kesinlikle, sağlam bir yöntem. Sıradaki!

### Düşünce Zinciri İstemleme: Adım Adım Akıl Yürütmeyi Göster

**Zaman Böceği:** Bu teknik, YZ'yi bir problemi çözmek için adım adım akıl yürütmeyi göstererek yönlendirir. Hava vidasını indirmeyi hayal edin. Şöyle parçalara bölebilirsiniz:
- 100 metre yüktesiniz.
- Yerçekimi 9,8 m/s² çekiyor.
- Formül: yükseklik = ½ * g * t².
- Çözüm: t ≈ 4,5 saniye iniş için.

İsteminiz şöyle olur:
> - Yerden 100 metre yüksekte
> - Yerçekimi: 9,8 m/s²
> - Kaç saniyede iner?

**Cevap: 4,5 saniye**

**Siz:** Bu hızlı; umarım sayılar tutarlı çıkar!

**Zaman Böceği:** YZ'ye adım adım düşünmeyi öğretir.

**Siz:** Yani doğru cevaplar için problemleri parçalara bölmekle mi ilgili?

**Zaman Böceği:** Evet, matematik öğretmeni uygulaması gibi karmaşık görevler için mükemmel!

### Maötik İstemleme: Doğruluğu Doğrulamak İçin Çıktıyı Sorgula

**Zaman Böceği:** Bu teknik, YZ çıktısının doğruluğunu kontrol etmek için sorular kullanır. Tutarlı akıl yürütmeyi sağlamak için her adımı sorgularsınız.

**Siz:** Yani söylediği her şeyi mi sorgulamak? Eğlenceli geliyor. ;)

**Zaman Böceği:** Hava vidasının inişini test edelim:
- 100 metre yüksekte
- Yerçekimi: 9,8 m/s²
- Kaç saniyede iner? (Cevap: 4,5 sn)

Sorun: "Neden 4,5 saniye?"

> **Yanıt:**
> - Yükseklik = 100m, başlangıç dikey hızı = 0 m/s, yerçekimi = 9,8 m/s².
> - Kullan: yükseklik = ½ * g * t².
> - Çöz: 100 = ½ * 9,8 * t² → t ≈ 4,5 sn.

**Zaman Böceği:** YZ yanıtlarını takip soruları ile doğrulmakla ilgilidir.

**Siz:** Yani güvenme, sorularla yokla?

**Zaman Böceği:** Kesinlikle! Sağlam akıl yürütmeyi garantiler.

## Meta İstemler: Hassasiyet İçin Ek Talimatlar Ekle

**Zaman Böceği:** Sırada meta istemler var.

**Siz:** Ah, önce çay olmaz mı?

**Zaman Böceği:** _İç çekiş_. Daha iyi çıktı için istemlere rehberlik ekler; hassas, müşteriye yönelik uygulamalar için harika.

İşte bir örnek:
> **Meta İstem:** Yalnızca Contoso Inc. ürünlerini (basketbol, futbol topu, tenis raketi) kullan. Doğru ve kullanıcı dostu tut.
> **İstem:** Başlangıç seviyesinde en iyi spor ürünleri nelerdir?
> **Yanıt:** Basketbol, futbol topu ve tenis raketi; koordinasyon ve çeviklik için mükemmel.

Doğruluğu sağlar ve Contoso ürünlerine bağlı kalır. Meta istem olmadan:
> **İstem:** Başlangıç seviyesinde en iyi spor ürünleri nelerdir?
> **Yanıt:** Basketbol, futbol topu, tenis raketi, artı futbol topu; _hepsi Contoso ürünü değil_.

**Siz:** Kullanışlı! Yanıtları doğru tutar; otomat için yasalarım gibi.

**Zaman Böceği:** Haklısın, _"Frankenstein"_; yoksa hiçbir şey!

**Siz:** Ne?

**Zaman Böceği:** Boş ver.

> Mary Shelley'in *Frankenstein*'ı; 1818, zaman yolculuklarınızdan 42 yıl önce. [Daha fazla oku](https://en.wikipedia.org/wiki/Mary_Shelley)

**Siz:** Yani meta istem olmadan kaos mu olur?

**Zaman Böceği:** Evet, marka dışı yanıtlar alırsınız.

**Siz:** Anladım, hassasiyet önemli!

## Ödev - Kahramanlarımızın Hava Vidasını İndirmesine Yardım Edelim

**Siz:** Bu, hava vidasını nasıl indireceğimi göstereceğin kısım, değil mi?

**Zaman Böceği:** Evet, hemen başlayalım. Tepe şu anda bulunduğumuz konumdan yaklaşık 100 metre uzakta. İstemi nasıl ayarlayabiliriz:

- Yerden mevcut yükseklik: 100 metre
- İleri hareket hızı: saniyede 10 metre
- Yerçekimi: saniyede kare başına 9,8 metre
- Yukarı doğru rüzgar: saniyede 0,7 metre

**Leonardo:** YZ gadget'ın, tepeden geçip geçemeyeceğimizi ya da başka bir zaman atlaması yapmamız gerekip gerekmediğini hesaplamaya yardımcı olabilir mi?

**Zaman Böceği:** Evet yapabilirim, adım da George bu arada, Gadget değil tercih ederim. Aslında istemi nasıl ayarlayacağınızı ikinize bırakıyorum. ☺️

Aşağıdakileri isteyen bir uygulama oluşturun:

- Yükseklik
- İleri hız
- Yerçekimi
- Yukarı doğru rüzgar
- Tepeye olan mesafe

Yanıta ulaşmak için düşünce zinciri tekniğini kullanın.

İşte bir başlangıç projesi: [Başlangıç projesi](/app/README.md).

## Çözüm

Aşağıdaki girdileri isteyen bir JavaScript uygulaması oluşturun:

- Yerden mevcut yükseklik
- Saniyede kaç metre ilerlediği
- Saniyede kare başına yerçekimi
- Saniyede yukarı doğru rüzgar
- Tepeye olan mesafe

Ardından bu girdileri birleştirmek ve modeli doğru yanıta yönlendirmek için düşünce zinciri istemleme tekniğini kullanarak LLM'yi kullanın.

[Çözüm](/lessons/03-prompt-engineering/solution/solution.md)

## Bilgi Kontrolü

**Soru:** İstem mühendisliği nedir? Geçerli olanların hepsini seçin.

A. İstem mühendisliği köprü ve yol inşaatıyla ilgilidir.

B. İstem mühendisliği, bir dil modelinden istenen çıktıyı elde etmek için doğru istemleri oluşturmakla ilgilidir.

C. İstem mühendisliği, bir modeli verideki kalıpları tanıyacak şekilde eğitmekle ilgilidir.

[Sınav çözümü](/lessons/03-prompt-engineering/solution/solution-quiz.md)

## Kendi Kendine Çalışma Kaynakları

- [İstem mühendisliği](https://en.wikipedia.org/wiki/Prompt_engineering)
- [İstem mühendisliği temelleri](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md?WT.mc_id=academic-105485-koreyst)
- [Gelişmiş istem mühendisliği](https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts)

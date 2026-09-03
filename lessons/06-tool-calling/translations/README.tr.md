# Ders 6: Araç Çağırma

Araç çağırma, fonksiyon çağırma olarak da bilinir; YZ modelinize önceden sahip olmadığı yetenekler ekleyerek onu geliştirmeyi ifade eder. Kavram, fonksiyonlarınızın meta açıklamalarını sağlamayı ve YZ modelinin kullanıcının istemine göre belirli bir aracın ne zaman çağrılması gerektiğini belirlemesine olanak tanımayı içerir.

Bu bölümde öğrenecekleriniz:

- Bir araç nasıl oluşturulur.
- Bir aracı YZ modeliyle nasıl entegre edilir.
- YZ modelinden araç nasıl çağrılır.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![Fonksiyon çağırmayla entegrasyon](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/11-lesson-banner.png)](https://aka.ms/gen-ai-lesson11-gh?WT.mc_id=academic-105485-koreyst)

_Bu video, YZ'nin fonksiyonlarınızı çağırmasına ve böylece yapabileceklerini genişletmesine yardımcı olan bir yöntem olan Araç çağırmayı açıklıyor._

*🎥 Araç çağırma hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*

## Hikaye: Amelia

> _Siz 1860'ların Londra'sından bir mekanikçisiniz. Otomat üzerinde çalışırken, Charles Babbage'den gelen bir mektup sizi bir kütüphaneye götürdü ve burada bir zaman yolculuğu cihazı aldınız. Zamandaki yolculuklarınız boyunca Floransa'ya ulaştınız ve burada Leonardo da Vinci ile tanıştınız. Şimdi Ada Lovelace'in malikanesinde Charles Babbage ile birliktesiniz. Zaman yolculuk cihazını inşa etme sürecindeler._
>
> Hikayenin başından itibaren takip etmek istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE] 
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-amelia-earhart).

**Ada Lovelace**: "Bir arkadaşımla tanışmanızı istiyorum. Mekanik ve problem çözme konusundaki uzmanlığıyla eşleşecek az insan var. Onu yakalamak zor olabilir; o hep hareket halinde :)"

Siz: "Kimden bahsediyoruz ve onu nerede bulabilirim?"

**Ada Lovelace**: "Tabii ki Amelia Earhart! Bir pilot ve maceracı; şu anda dünya turuna çıkmış. Bu tamamen benim hatam; ona zaman yolculuğu cihazını verdim; erken bir prototip. Neyse ki sizin cihazınız diğer cihazları bulabilir; bu yüzden onu bulabilirsiniz. Sadece buraya ve buraya tıklamanız ve sonra bu düğmeyi çevirmeniz gerekiyor."

**Siz**: "Hey, bekleyin, görevimiz tam olarak ne?"

**Ada**: "Ah, haklısınız! Cihaza sorun; tüm ayrıntılar orada. Sadece Amelia hakkında sorun; doğru aracı sizin için başlatmalı."

Etrafınızdaki dünya bulanıklaşmaya başlıyor ve her şey karartıya dönüşüyor. Kendinize geldiğinizde bir uçağın kokpitinde olduğunuzu buluyorsunuz. Uçuyorsunuz ve aşağıda okyanusun göründüğünü görüyorsunuz. Önde oturan biri var; sadece ense görünüyor.

![Amelia bir uçak kullanıyor](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia.jpeg)

**Siz**: "Amelia, bu mu sensin?"

**Amelia Earhart**: "Sen kimsin? Tahmin edeyim, Ada seni gönderdi, değil mi?"

**Siz**: "Evet, doğru. Sana yardım etmek için buradayım, sanırım. Ada ayrıntı konusunda çok açık değildi."

**Amelia Earhart**: "İyi ki buradasın. Biraz çıkmaza girdim. İniş yapacak bir yer arıyorum ve yakıtım azalıyor. Yardımcı olabilir misin?"

**Siz**: "Cihaz, Amelia hakkında daha fazla bilgi verebilir misin?"

**Zaman Böceği**: "Araç çağrılıyor: görev-amelia. Araç başlatıldı. Amelia Earhart bir pilot ve maceracıdır. Rekor kıran uçuşlarıyla ve 1937'de kaybolmasıyla tanınır. Son olarak Pasifik Okyanusu üzerinde uçarken görülmüştür. Şu anda dünya turuna çıkmış; uçağı Electra. Yakıtı azalıyor ve iniş yapacak bir yer bulması gerekiyor."

**Siz**: "Cihaz, Amelia'nın iniş yapması için bir yer bulmama yardımcı olabilir misin?"

**Zaman Böceği**: "Araç çağrılıyor: iniş-yeri-bul. Araç başlatıldı. Amelia Earhart için uygun iniş yeri aranıyor. Lütfen bekleyin. Uygun iniş yeri bulundu. Koordinatlar: 7.5°K, 134.5°D. Amelia, sizin için uygun bir iniş yeri buldum. Lütfen 7.5°K, 134.5°D koordinatlarına yönelin."

**Amelia Earhart**: "Teşekkürler! Keşke cihazımda da bu özellik olsaydı. Şimdi oraya yöneliyorum."

## Amelia Earhart ile etkileşim kurun

Ada ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Ada Lovelace](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/amelia-front.jpeg)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Amelia ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

## Araç Çağırma

**Siz**: "Cihaz, şimdi ne oldu?"

**Zaman Böceği**: "Az önce bir araç çağırdınız. Araç, belirli bir görevi yerine getirmek için YZ modeli tarafından çağrılabilen bir fonksiyondur. Araç, basit hesaplamalardan karmaşık operasyonlara kadar çok çeşitli görevler için kullanılabilir. Bu durumda, Amelia Earhart için uygun iniş yeri bulmak amacıyla `iniş-yeri-bul` aracını çağırdınız."

**Zaman Böceği**: "İşte araç çağırma sürecini gösteren bir görüntü:"

![Araç çağırma süreci gösterimi](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/06-tool-calling/assets/tool_call_langchain.png)

_Görüntü kredisi Langchain <https://python.langchain.com/docs/concepts/tool_calling/>_

**Siz**: Araç iniş yeri bulamazsa, bir şeyler ters giderse hataları ele alabilir miyiz?

**Zaman Böceği**: Güzel soru! Evet, bu tür durumları yönetmek için hata işleme ekleyebilirsiniz. Örneğin, araç iniş yeri bulamazsa, bir try-catch bloğu kullanabilir veya devam etmeden önce sonucu kontrol edebilirsiniz. İşte iniş-yeri-bul aracını çağırırken hataları ele almanın bir örneği:

```javascript
try {
  const landingSpot = findLandingSpot(7.5, 134.5);
  if (!landingSpot) {
    throw new Error("Uygun iniş yeri bulunamadı");
  }
  console.log(`İniş yeri bulundu: ${landingSpot.lat}, ${landingSpot.long} koordinatlarında`);
} catch (error) {
  console.log(`Hata: ${error.message}`);
}
```

**Siz**: "Araç nasıl oluştururum?"

**Zaman Böceği**: "Araç oluşturmak için istenen görevi gerçekleştiren bir fonksiyon tanımlamanız gerekir. Fonksiyon gerekli girdileri almalı ve çıktıyı döndürmelidir. Ardından görevi gerçekleştirmek için YZ modelinden fonksiyonu çağırabilirsiniz. İşte `iniş-yeri-bul` aracının nasıl göründüğü:

```javascript
function findLandingSpot(lat, long) {
    // Perform the task of finding a suitable landing spot
    // Return the coordinates of the landing spot
    return { lat: 7.5, long: 134.5 };
}
```

**Siz**: "Tamam, YZ modeli bu aracın var olduğunu nasıl biliyor?"

**Zaman Böceği**: "Aracı YZ modeliyle kaydetmeniz gerekiyor. Bu, modele aracın çağrılmak için kullanılabilir olduğunu bildirir. Bunu bir sonraki bölümde ele alalım."

### Araç Kaydetmek

**Siz**: "Aracı YZ modeliyle kaydetmem gerektiğini söylediniz. Bunu nasıl yapabilirim?"

**Zaman Böceği**: "Bir aracı YZ modeliyle kaydetmek için aracın meta veri temsilini tanımlamanız gerekiyor. Bu meta veriler aracın adını, girdi parametrelerini ve çıktı biçimini içermelidir. Ardından meta verileri sağlayarak aracı YZ modeliyle kaydedebilirsiniz. İşte `iniş-yeri-bul` aracının meta verisi için bir örnek:

```json
{
  "name": "find-landing-spot",
  "description": "Uygun bir iniş yeri bulur",
  "parameters": {
    "type": "object",
    "properties": {
      "lat": {
        "type": "number",
        "description": "Konumun enlem koordinatı"
      },
      "long": {
        "type": "number",
        "description": "Konumun boylam koordinatı"
      }
    },
    "required": ["lat", "long"]
  },
  "output": { "type": "object", "properties": { "lat": "number", "long": "number" } }
}
```

**Siz**: "Tamam, yani aracı tanımlayan bir JSON parçası var; şimdi ne?"

**Zaman Böceği**: "Şimdi bunu istemci sohbet tamamlama çağrınıza şöyle sağlamanız gerekiyor:

```javascript

function findLandingSpot(lat, long) {
    return { lat: 7.5, long: 134.5 };
}

function getBackgroundOnCharacter(character) {
    return `${character} hakkında arka plan bilgisi`;
}

const getBackgroundOnCharacterJson = {
  name: "get-background-on-character",
  description: "Bir karakter hakkında arka plan bilgisi al",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Karakterin adı"
      }
    },
    required: ["lat", "long"],
  },
  output: { type: "string" }
};

const findLandingSpotJson = {
  name: "find-landing-spot",
  description: "Uygun bir iniş yeri bulur",
  parameters: {
    type: "object",
    properties: {
      lat: {
        type: "number",
        description: "Konumun enlem koordinatı"
      },
      long: {
        type: "number",
        description: "Konumun boylam koordinatı"
      }
    },
    required: ["lat", "long"],
  },
  output: { type: "object", properties: { lat: "number", long: "number" } }
};


const messages = [{ 
    role: "user", 
    content: `Amelia Earhart hakkında bilgi ver`,
}];

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
    functions: [getBackgroundOnCharacterJson, findLandingSpotJson]
  });
```

**Zaman Böceği**: "Yukarıdaki kod parçasında:"

- `iniş-yeri-bul` ve `karakter-hakkında-arka-plan-al` araçları için meta verileri tanımlıyoruz.
- Bu meta verileri `functions` parametresinin bir parçası olarak `client.getChatCompletions` çağrısına sağlıyoruz. Bu, YZ modeline bu araçların çağrılmak için kullanılabileceğini bildirir."

**Siz**: "Anladım, yani kullanıcı prompt'u aracın açıklamasıyla eşleşirse YZ modeli uygun aracı mı çağıracak?"

**Zaman Böceği**: "Neredeyse, hangi aracı çağırmanız gerektiğini söyleyecek ve ayrıştırılmış girdi parametrelerini sağlayacak; ancak aracı kendiniz çağırmanız gerekiyor; nasıl yapıldığını göstereyim."

### Araç Çağırmak

**Zaman Böceği**: "Dediğim gibi, YZ modeli hangi aracı çağırmanız gerektiğini söyleyecek ve ayrıştırılmış girdi parametrelerini sağlayacak. Ardından aracı kendiniz çağırmanız gerekiyor. İşte adım adım iş akışı:

1. Araç çağrısını bağla

   Önce kodunuzdaki araç çağrısını bağlamanız gerekiyor. Bu, fonksiyon ve aracın meta veri temsilini oluşturmayı, ardından meta verileri YZ modeline sağlamayı içerir.

1. Kullanıcı bir istem aracılığıyla istekte bulunur:
   - Program, kullanıcı istemi ve araçların meta verileriyle YZ modeline bir sohbet tamamlama isteği gönderir.
   - Program, bir aracın çağrılması gerektiğini düşünüyorsa YZ modelinden araç çağrısı ve ayrıştırılmış girdi parametreleriyle yanıt alır.
   - Eğer öyleyse, geliştirici yanıtı yorumlar ve YZ modeli tarafından sağlanan fonksiyon çağrısı önerisine göre aracı çağırır.

**Siz**: "Harika, üst düzey neler olduğunu anladığıma göre, bana biraz kod gösterebilir misiniz?"

**Zaman Böceği**: "Tabii, işte araç çağrısını bağlamak, sohbet tamamlama isteği yapmak ve yanıtı yorumlamak için kod:

```javascript
import { OpenAI } from 'openai';

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
  description: "Uygun bir iniş yeri bulur",
  parameters: {
    type: "object",
    properties: {
      lat: {
        type: "number",
        description: "Konumun enlem koordinatı"
      },
      long: {
        type: "number",
        description: "Konumun boylam koordinatı"
      }
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
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_TOKEN,
});

// 5: Define the messages that will be sent to the AI model
const messages = [
{
    role: "system",
    content: `Yardımcı bir asistansınız. Görevler gerçekleştirmek için fonksiyonlar çağırabilirsiniz. Fonksiyon çağrısını ve argümanları doğru şekilde ayrıştırdığınızdan emin olun.`
}, {
    role: "user",
    content: "8.5, 130.5 koordinatları için iniş yeri bul"
}
];

async function main(){
  console.log("LLM çağrısı yapılıyor")

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
          console.log(`[${functionName}] çağrılıyor`);
          const toolFunction = tools[functionName];
          const toolResponse = toolFunction(...Object.values(args));
          console.log("Araç çağrısından sonuç: ", toolResponse);
      }
  }
}

main();
```

Yukarıdaki kodda:

- Enlem ve boylam girdi olarak alan ve uygun iniş yerinin koordinatlarını döndüren `findLandingSpot` adlı bir fonksiyon oluşturduk.
- `iniş-yeri-bul` aracı için meta verileri tanımladık.
- Araç adlarını araç meta verilerine eşleyen bir `tools` nesnesi oluşturduk.
- `tools` nesnesini `client.getChatCompletions` çağrısına sağladık.
- Araç çağrısını ve argümanlarını YZ modelinin yanıtından çıkardık.
- YZ modeli tarafından sağlanan fonksiyon çağrısına göre aracı çağırdık.
- Araç çağrısının sonucunu yazdırdık.

**Siz**: "Sanırım anladım. Bir fonksiyon tanımlıyorum, aracın meta veri temsilini oluşturuyorum, meta verileri YZ modeline sağlıyorum ve ardından YZ modeli tarafından sağlanan fonksiyon çağrısına göre aracı çağırıyorum."

**Zaman Böceği**: "Kesinlikle! Kendi araçlarınızı oluşturmaya ve bunları YZ modeliyle entegre etmeye hazırsınız."

## Ödev - Amelia'nın Zaman Yolculuğu Cihazını Yükselt

**Amelia Earhart**: "Sıcak iniyoruz; neyse ki iniş yeri buldunuz. Sıkı tutunun!"

Amelia uçağı ustaca küçük bir adaya indirir. Siz ve Amelia uçaktan çıkarken, Amelia size küçük bir cihaz uzatıyor.

**Amelia Earhart**: "İşte cihazım; sizinkiyle karşılaştırılabilir değil ama birkaç kullanışlı özelliği var. Kendi başıma biraz zaman yolculuğu yapmak için kullandım diyelim. Lütfen yükseltebilir misin?"

**Siz**: "Zaman Böceği, Amelia'nın cihazını yükseltmeme yardımcı olabilir misiniz?"

**Zaman Böceği**: "Elbette! Amelia'nın cihazını yükseltmek için şu araçları ekleyelim:

- **Bir araç**: Harita üzerinde iki nokta arasındaki mesafeyi hesaplar.
- **Bir araç**: Amelia'nın şu an bulunduğu GPS konumunu belirler.
- **Bir araç**: Belirli bir konum için hava tahmini almak amacıyla harici bir API'yi çağırır."

İşte fonksiyonlar; tek yapmanız gereken bunları kaydetmek ve test etmek:

```javascript
function calculateDistance(lat1, long1, lat2, long2) {
    return Math.sqrt((lat2 - lat1) ** 2 + (long2 - long1) ** 2);
}

function getGpsPosition() {
    return { lat: 7.5, long: 134.5 };
}

function getWeatherForecast(lat, long) {
    return "Güneşli";
}
```

**Siz**: "Zaman Böceği, bu fonksiyonların çalışacağından emin misiniz? Sadece rastgele değerler döndürüyor gibi görünüyor?"

**Zaman Böceği**: "Doğru, gerisini dahili olarak halledebilirim. Tek yapmanız gereken bunları kaydetmek ve test etmek; YZ modelinin bunları çağırabildiğinden emin olun."

> Görev: `calculateDistance`, `getGpsPosition` ve `getWeatherForecast` araçlarını YZ modeline kaydedin. Araçları YZ modelinden çağırarak test edin. Referans olarak önceki bölümlerdeki kodu kullanın.

## Çözüm

[Çözüm](/lessons/06-tool-calling/solution/solution.js)

## Bilgi Kontrolü

**Soru:**  
Bir aracı YZ modeliyle kaydetmenin amacı nedir?

A. YZ modelinin geliştirici müdahalesi olmadan aracı doğrudan yürütmesine izin vermek.  
B. YZ modelinin kullanımını önerebilmesi için araç hakkında meta veri sağlamak.  
C. Kodda fonksiyon tanımlama ihtiyacını ortadan kaldırmak.

**Soru:**  
Araç çağırmada araç meta verilerinin rolü nedir?

A. YZ modeli için aracın amacını, girdilerini ve çıktılarını açıklar.  
B. YZ modeline aracın uygulama ayrıntılarını sağlar.  
C. Aracın YZ modeli tarafından otomatik olarak yürütülmesini sağlar.

**Soru:**  
Araç çağırma neden kullanılır?

A. YZ modelinin harici fonksiyonlardan yararlanarak yerleşik yeteneklerinin ötesinde görevler gerçekleştirmesini sağlamak.  
B. YZ modeli geliştirmesinde insan müdahalesi ihtiyacını ortadan kaldırmak.  
C. YZ modelinin meta veri gerektirmeden araçları yürütmesine izin vermek.

[Çözüm sınavı](/lessons/06-tool-calling/solution/solution-quiz.md)

## Kendi Kendine Çalışma Kaynakları

- [Araç çağırma sürecini açıklar](https://learn.microsoft.com/en-us/semantic-kernel/concepts/ai-services/chat-completion/function-calling/?pivots=programming-language-csharp)
- [Langchain.js çerçevesinde araç çağırma](https://js.langchain.com/docs/how_to/tool_calling/)
- [openai kütüphanesinde gösterildiği şekliyle fonksiyon çağırma](https://github.com/openai/openai-node/blob/master/examples/function-call.ts)

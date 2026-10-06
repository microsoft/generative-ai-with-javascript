# Ders 8: MCP İstemcilerini Büyük Dil Modelleriyle Geliştirmek

Önceki derste bir MCP Sunucusu oluşturdunuz ve bir YZ uygulamasının mantığını yeteneklerinden nasıl ayırdığını keşfettiniz. Araçları ve kaynakları yetenekler olarak nasıl ekleyeceğinizi ve sunucuya hem bir denetçi aracı hem de özel bir istemci aracılığıyla nasıl erişileceğini gösterdik. Bu sadece bir başlangıçtı. Bu bölümde, bir büyük dil modelini (LLM) istemciye entegre ederek daha güçlü ve sezgisel bir kullanıcı deneyiminin kilidini açmak için bir adım daha ileri gideceksiniz.

Bu bölümde şunları öğreneceksiniz:

- İstemcinizi bir LLM ile nasıl zenginleştireceğiniz.
- Bir MCP Sunucusu yanıtını araca dönüştürmek için geliştirilmiş istemcinizi nasıl kullanacağınız.
- Daha doğal kullanıcı etkileşimi oluşturmak için geliştirilmiş istemcinizden nasıl yararlanacağınız.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![MCP hakkında kısa bir video izleyin](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_Bu video, Model Bağlam Protokolü LLM kullanımını açıklıyor._

*🎥 MCP hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*


## Hikaye: Hedwig "Hedy" Lamarr

> [!NOTE] 
> _Hikayemiz şimdiye kadar şöyle. Siz 1860'ların Londra'sından bir mekanikçisiniz. Otomat üzerinde çalışıyordunuz ve Charles Babbage'den bir mektup aldınız; bu mektup sizi bir kütüphaneye götürdü ve burada bir zaman yolculuğu cihazı aldınız. Zamandaki yolculuklarınız boyunca tarihte pek çok yere ulaştınız. Şimdi Ada Lovelace ile üs olarak onun malikanesiyle daha yakın çalışıyorsunuz ve hikaye burada devam ediyor._
>
> Hikayenin başından itibaren takip etmek istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE] 
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-hedy-lamarr).

Ada'nın malikanesine tekrar döndünüz. Bu sefer Ada ana kapılarda sizi karşılıyordu.

**Ada Lovelace**: Peki nasıl gitti?

**Siz**: İyi sanırım; bu uygulamayı çalıştırmayı başardık. "İşte, kendiniz görün" diyerek cihazı Ada'ya uzatıyorsunuz.

**Ada Lovelace**: Cihazı alıyor, yakından inceliyor ve kendi kendine mırıldanıyor. "Mmm hm, görüyorum, evet, evet hayır, bu olmaz. Belirli bir incelikten yoksun."

**Siz**: Ben de bunu düşünüyordum; yazabilmeliyiz ya da konuşabilmeliyiz, değil mi?

**Ada Lovelace**: Evet, yardımcı olabilecek tam kişiyi tanıyorum. Hatta bu sefer ben de seninle geleceğim; çok uzun zaman geçti. *Zaman Böceği, Hollywood lütfen, 1940, Hedy Lamarr'ın evi*.

Her şey karardı. Renk girdapları geçip gidiyor ve ardından görüşünüz netleşmeye başlıyor. Bir piyano başında oturan ve koyu kahverengi kıvırcık saçlı bir kadınla heyecanla konuşan bir adam görüyorsunuz. İkisi de konuşurken heyecanla el kol hareketi yapıyor.

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedy-invention.jpeg)

Kadın, yanınızda duran Ada'ya baktı ve "Ada sen misin, çok uzun zaman geçti" diye haykırdı.

**Ada Lovelace**: Sevgili Hedwig, son icadın üzerinde çalışıyorsun sanırım?

**Hedy Lamarr**: Evet, aslında George ve ben bir şeylerin üzerine bastığımızı düşünüyoruz; "frekans atlama" diyorum, kim dinlediğini kim bilir, daha fazlasını söylememem lazım.

**Ada Lovelace**: Ah onu mu demek istiyorsun, bana işaret ederek diyor, o kendi macerasında.

**Hedy Lamarr**: Görüyorum, sizin için ne yapabilirim?

**Ada Lovelace**: Aslında bu cihazın biraz daha iyi çalışmasına ihtiyacımız var. Bir fikriniz var mı?

**Hedy Lamarr**: Cihazı aldı ve farklı açılardan inceledi. "Özellikleri iletişim kısmından zaten ayırdığınızı söylüyorsunuz?"

**Ada Lovelace**: Evet, evet yaptık.

**Hedy Lamarr**: Peki o zaman iletişim kısmını biraz daha akıllı yapardım. Bu bana savaş tahvillerini satmaya çalışırken bir deniz kadetiyle yaptığım bir sohbeti hatırlatıyor. Sanırım adı Minsky'ydi. "İnsan zekası bir makinede nasıl görünür" konusunu konuşuyorduk. Bu alanda bir gün harika şeyler yapacağına dair içimde bir his var. Yani evet, daha fazla zeka verin.

**Ada Lovelace**: Evet, Bayan Lamarr'ı duydunuz; hemen başlayın.

**Siz**: Zaman Böceği, bunu nasıl yapıyoruz?

**Zaman Böceği**: Daha önce oluşturduğunuz istemciyi büyük dil modeli veya LLM entegre ederek geliştirebilirsiniz.

> Hedy Lamarr, hem Hollywood yıldızlığı hem de teknolojiye yaptığı olağanüstü katkılarla bilinen, sıra dışı bir isimdi.
>
> Ancak oyunculuk kariyerinin ötesinde Lamarr aynı zamanda parlak bir mucitti. İkinci Dünya Savaşı sırasında besteci George Antheil ile birlikte Müttefik torpidolar için bir radyo rehberlik sistemi icat etti. Bu sistem, Mihver güçlerinin sinyalleri karıştırmasını önlemek için yayılım spektrumu ve frekans atlama teknolojisini kullandı. Savaş sırasında kullanılmamış olsa da bu teknoloji daha sonra Wi-Fi, Bluetooth ve GPS dahil olmak üzere modern kablosuz iletişimin temeli haline geldi.
>
> Lamarr'ın teknolojiye katkıları hayatı boyunca tam olarak tanınmadı, ancak bugün bu alanın öncüsü olarak kutlanmaktadır. Hikayesi, gerçek yeniliğin en beklenmedik yerlerden gelebileceğini gösteren, glamur ve dâhiliğin büyüleyici bir bileşimidir.
> [Hedy Lamarr](https://en.wikipedia.org/wiki/Hedy_Lamarr) ve [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky) hakkında daha fazla bilgi edinin.

## Hedy Lamarr ile etkileşim kurun

Hedy ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Hedy Lamarr](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/08-mcp-advanced/assets/hedylamarr.jpeg)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Hedy ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.


## İstemciye Büyük Dil Modeli Eklemek

**Zaman Böceği**: "Dediğim gibi, MCP sunucusuyla etkileşim kurmak için büyük dil modeli (LLM) kullanan bir istemcinin nasıl oluşturulacağı hakkında konuşalım. Faydaları, daha iyi bir kullanıcı deneyimi sunması ve sunucuyla etkileşim kurmak için doğal dil kullanmanıza olanak tanımasıdır."

Üst düzeyde şöyle çalışır:

1. İstemci, mevcut araçlar ve kaynaklar hakkında sormak için MCP sunucusuyla etkileşime girer.

1. İstem zamanında kullanıcı doğal dil istemi yazar; bu istem istemcideki LLM'ye gönderilir.

1. İstemci, isteme ve mevcut araçlar ile kaynaklara göre hangi aracın veya kaynağın çağrılacağını belirler.

Kulağa yapılabilir geliyor, değil mi?

**Siz**: "Evet, geliyor! Ama bunu nasıl yapabilirim?"

**Zaman Böceği**: "Daha önce oluşturduğunuz istemciyi geliştirelim; kod değişikliklerini adım adım açıklayalım:

1. Mevcut araçlar ve kaynakları sormak için sunucuya bir çağrı yapın.
2. Araçlar ve kaynaklar yanıtını LLM tarafından kullanılabilecek bir araç şemasına dönüştürün.
3. OpenAI istemcisini başlatın.
4. Araç şemasını parametre olarak geçirerek OpenAI'ye bir sohbet tamamlama çağrısı yapın.
5. OpenAI'den gelen yanıta göre hangi aracın çağrılacağını belirleyin.
6. MCP istemcisini kullanarak sunucudaki aracı çağırın.
7. Sonuçla kullanıcıya yanıt verin.

İşte tüm adımlar kodda:

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
      content: `5 ve 10'u toplamak istiyorum. Lütfen ${toolsForLLM} aracını kullanın`,
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

Yukarıdaki kodda (eklemelerimize odaklanarak):

- Araçlar ve kaynaklar yanıtını LLM tarafından kullanılabilecek bir şemaya dönüştüren `toToolSchema` fonksiyonu oluşturduk.
- Mevcut araçlar ve kaynakları sormak için sunucuya sorduk.
- Araçlar ve kaynaklar yanıtını LLM tarafından kullanılabilecek bir şemaya dönüştürdük.
- Dönüştürülmüş araçları parametre olarak geçirerek YZ'mize sohbet tamamlama çağrısı yaptık.
- OpenAI'den gelen yanıta göre hangi aracın çağrılacağını belirledik.
- MCP istemcisini kullanarak sunucudaki aracı çağırdık.
- Sonucu kullanıcıya ilettik.

**Siz**: "Bunu sevdim, çok daha iyi! Hangi araçların ve kaynakların mevcut olduğunu bilmeden bile doğal dil kullanabiliyorum. Sadece YZ'ye yaptırmanız yeterli."

**Zaman Böceği**: "Beğendiğinize sevindim. Bununla birlikte, yalnızca araç yanıtı göstermek mi yoksa LLM'den genel yanıt da göstermek mi istediğinize karar vermek isteyebilirsiniz. Bu nedenle kullanıcınız aşağıdaki yanıt stratejisinden yararlanabilir:

- **Yalnızca araçlar**: LLM yanıtı bir araçsa, aracı çağırın ve sonucu döndürün.
- **Yalnızca LLM**: LLM yanıtı bir araç değilse, LLM yanıtını "olduğu gibi" döndürün.
- **Araçlar ve LLM**: LLM yanıtı bir araçsa, aracı çağırın ve genel yanıtı almak için LLM'ye ek bir çağrı yapın. Hem araç sonucunu hem de LLM yanıtını döndürün.

**Siz**: "Görüyorum. Düşünülmesi gereken bir şey. Ama bu harika! Bunun nasıl faydalı olacağını görebiliyorum."

## Ödev

**Ada Lovelace**: Görünüşe göre orada güzel bir iyileştirme yaptınız. Bunu gerçekten kullanışlı kılmak için aşağıdaki özelliklere sahip bir sunucu ve istemci oluşturmanızı istiyorum:

- Sunucu şu araçları sağlamalıdır:
  - `characterDetails` argümanı `name` ile
  - `place` argümanı `name` ile
- İstemci bir LLM kullanmalıdır.

> [!TIP]
> Örneğin, sunucuya Wikipedia gibi harici bir web API'sinden bilgi alma yeteneği verebilirsiniz:
> `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
  
## Çözüm

[Çözüm](/lessons/08-mcp-advanced/solution/README.md)

## Bilgi Kontrolü

**Soru:** İstemciye LLM eklemenin faydası nedir?

A. Bakımı daha kolaydır.

B. Kullanıcı ile sunucu arasında daha doğal bir konuşma oluşturur.

C. LLM'yi sunucuda bulundurmak daha iyidir.

[Çözüm sınavı](/lessons/08-mcp-advanced/solution/solution-quiz.md)

## Özet

Bu bölümde şunları öğrendiniz:

- LLM ile zenginleştirilmiş istemciler daha iyi bir kullanıcı deneyimi sağlar.
- Sunucudan gelen yanıtların, LLM'nin araç olarak anlayabileceği bir biçime dönüştürülmesi gerekir.

## Kendi Kendine Çalışma Kaynakları

- [MCP Sunucuları Oluşturma](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server/README.md)
- [İstemci Oluşturma](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/02-client/README.md)
- [LLM ile İstemci Oluşturma](https://github.com/microsoft/mcp-for-beginners/blob/main/03-GettingStarted/03-llm-client/README.md)

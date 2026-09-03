# Ders 7: MCP, Model Bağlam Protokolü

Bu bölümde öğrenecekleriniz:

- Sunucu yeteneklerinizi bir sunucuya ve bir istemciye bölmek için Model Bağlam Protokolü'nü (MCP) nasıl kullanacağınız.
- Sunucuda araçlar, kaynaklar ve istemler nasıl oluşturulur.
- Hem denetçi aracını hem de yazılı bir istemciyi kullanarak sunucu nasıl tüketilir.

## Kurulum

Henüz yapmadıysanız, geliştirme ortamınızı ayarlayın. Nasıl yapılacağını öğrenmek için: [Ortamınızı Kurun](/docs/setup/README.md).

## İlgili Kaynaklar

[![MCP hakkında kısa bir video izleyin](https://img.youtube.com/vi/YRfOiB0Im64/0.jpg)](https://www.youtube.com/watch?v=YRfOiB0Im64)

_Bu video, Model Bağlam Protokolü'nü açıklıyor._

*🎥 MCP hakkında kısa bir video izlemek için yukarıdaki görüntüye tıklayın*

## Hikaye - Scipio Africanus

> [!NOTE] 
> _Hikayemiz şimdiye kadar şöyle. Siz 1860'ların Londra'sından bir mekanikçisiniz. Otomat üzerinde çalışıyordunuz ve Charles Babbage'den bir mektup aldınız; bu mektup sizi bir kütüphaneye götürdü ve burada bir zaman yolculuğu cihazı aldınız. Zamandaki yolculuklarınız boyunca Floransa'ya ulaştınız ve burada Leonardo Da Vinci ile tanıştınız. Ayrıca Aztek İmparatorluğu'na gittiniz ve hikaye burada devam ediyor._
>
> Hikayenin başından itibaren takip etmek istiyorsanız [Ders 1](/lessons/01-intro-to-genai/README.md)'e bakın.

> [!NOTE] 
> Hikayeyi okumanızı önersek de (oldukça eğlenceli!), doğrudan teknik içeriğe geçmek isterseniz [buraya tıklayın](#interact-with-scipio).

_Kahramanlarımız, Amelia Earhart ile olan buluşmaları sırasında araçlar ve "araç çağırma" hakkında öğrendikten sonra, yeni edindikleri bilgileri tartışmak için Ada Lovelace'in malikanesine geri dönüyorlar. Zaman böceği kahramanlarımızı Ada'nın şimdisine taşırken bir ışık parlaması her şeyi sarıyor. Kendilerini Ada Lovelace'in malikanesinin bodrum katında buluyorlar. Charles Babbage mevcut değil ama Ada onları bekliyor. Yolculukları ve edindikleri bilgiler hakkında duymak için sabırsız._

**Ada Lovelace**: "Hoş geldiniz! Yolculuğunuzun aydınlatıcı olduğunu umuyorum."

**Siz**: "Öyleydi! Bayan Earhart ile buluşmak oldukça etkileyici bir deneyimdi. Bize araçların önemini ve onları nasıl etkili kullanacağımızı öğretti."

**Ada Lovelace**: "Araçların önemini Amelia'dan daha iyi anlayan az insan var. Onun Zaman Böceği'ni de güncellediğinizi umuyorum?"

**Siz**: "Evet! Peki sırada ne var?"

**Ada Lovelace**: "Araç çağırma, cihazınızı geliştiren güçlü bir kavram. Ancak belirli bir 'incelikten' yoksun diyelim. _Nasıl ölçeklendirileceğini_ öğrenmemiz gerekiyor; bir protokole ihtiyacımız var. Bununla bize yardımcı olabilecek tam kişiyi tanıyorum. Adı Scipio Africanus; kadim Roma'nın büyük bir askeri stratejisti. Ne yazık ki tüm zamanını askeri stratejiyle geçirdi; eminim ki parlak bir mühendis olurdu. Yola çıkın."

**Siz**: "Scipio Africanus? Sanırım tarih dersinden hatırlıyorum."

**Ada Lovelace**: "Güzel, o zaman neden hâlâ buradasınız? Zaman özünde. Hoşça kalın"

Işık girdabı sizi yeniden sarıyor ve ortasında büyük bir masa olan geniş bir odada buluyorsunuz. Duvarlar haritalar ve askeri stratejilerle süslü. Scipio Africanus masanın başında derin düşünceler içinde duruyor. Girince başını kaldırıyor. "Ada te misit/Ada sizi gönderdi mi?"

![Scipio Africanus](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/07-mcp/assets/scipio.png)

> M.Ö. 236-183 yılları arasında yaşayan Publius Cornelius Scipio Africanus olarak da bilinen Scipio Africanus, önde gelen bir Roma generali ve devlet adamıydı. Kartaca'ya karşı yürütülen İkinci Punik Savaşı'ndaki belirleyici rolü ve M.Ö. 202'deki Zama Savaşı'nda Hannibal'a karşı kazandığı zaferle en çok tanınır.
> Hayatı ve kariyeri, liderlik, stratejik zekâ ve dayanıklılık niteliklerini örneklemektedir. Roma'nın askeri ve siyasi alanlarına katkıları, Roma İmparatorluğu üzerinde kalıcı bir etki bıraktı.

## Scipio ile Etkileşim Kurun

Scipio ile etkileşim kurmak istiyorsanız [Karakterler](/app/README.md) uygulamasını çalıştırın.

> [!IMPORTANT]
> Bu tamamen kurgusaldır; yanıtlar yapay zeka tarafından üretilmektedir.
> [Sorumlu Yapay Zeka Feragatnamesi](/README.md#responsible-ai-disclaimer)

![Scipio Africanus](https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/07-mcp/assets/scipio.png)

**Adımlar**:

1. Bir [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript) başlatın.
2. Repo kökündeki _/app_ klasörüne gidin.
3. Konsolu açın ve sırasıyla `npm install` ve `npm start` komutlarını çalıştırın.
4. "Open in Browser" düğmesi belirdiğinde tıklayın.
5. Scipio ile sohbet edin.

Uygulama hakkında daha ayrıntılı açıklama için bkz. [Ayrıntılı uygulama açıklaması](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Projeyi yerel makinenizde çalıştırıyorsanız, lütfen bir [GitHub kişisel erişim](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token'ı ayarlamak ve koddaki anahtarı değiştirmek için Hızlı Başlangıç kılavuzunu inceleyin.

## Model Bağlam Protokolüne (MCP) Duyulan İhtiyaç

**Zaman Böceği**: Ada'nın bahsettiği protokol, Model Bağlam Protokolü (MCP) olarak adlandırılır. Sunucuya veya birden fazla sunucuya kaynaklar ekleyerek ve bunları istemciden boşaltarak uygulamanızı daha ölçeklenebilir ve dayanıklı hale getirerek uygulama mimarinizi merkezden uzaklaştırmanıza olanak tanıyan bir protokoldür. Fikri size Scipio'nun açıklamasına bırakıyorum.

**Siz**: "Evet, Ada sizi gönderdi. Bir protokolla ilgili yardımcı olabileceğinizi söyledi?"

**Scipio**: "Protokol mü? Hayatımı savaş stratejileri geliştirmekle geçirdim. Ama sanırım bir protokol bir strateji gibidir. Kaynaklarınızı etkili biçimde düzenlemenize ve yönetmenize yardımcı olur ve aralarındaki iletişimi sağlar."

Kuşatma manevralarından, sızmadan ve süvari kullanımından bahsedelim.

**Siz**: "Tamam, devam edin?"

**Scipio**: "Savaşta, düşmanı yandan veya arkadan saldırmak için genellikle kuşatma manevralarını kullanırız. Bu onların düzenini bozar ve bize avantaj sağlar. Çünkü düşman yandan gelen bir saldırıya hazırlıklı değildir ve tüm dikkatini öne yoğunlaştırır."

**Siz**: "Hmm, sanırım bu tek bir sunucuda çok fazla iş yapan bir uygulamaya benziyor. Kuşatma manevrası birden fazla sunucuya yük dağıtmak gibi olurdu, değil mi?"

**Scipio**: "Kesinlikle! Yükü dağıtarak tek bir arıza noktası riskini azaltır ve genel sistem dayanıklılığını artırırsınız. Kaynakları yönetmeyi ve kullanmayı kolaylaştırır."

## Model Bağlam Protokolü (MCP)

**Zaman Böceği**: "Scipio'nun noktasına ek olarak, Model Bağlam Protokolü (MCP), uygulama mimarinizi merkezden uzaklaştırmanın bir yoludur. Uygulamanızı bağımsız olarak işleyebilen daha küçük, daha yönetilebilir bileşenlere ayırmanıza olanak tanır. İşte göz önünde bulundurulması gereken bazı önemli kavramlar:

- **MCP Ana Bilgisayarları (MCP Hosts)**: Visual Studio Code'daki GitHub Copilot veya Claude Desktop gibi IDE'ler; sunucu veya sunuculara bağlantıyı başlatan programlar.
- **MCP İstemcileri (MCP Clients)**: MCP sunucularıyla 1:1 bağlantılar koruyan protokol istemcileri.
- **MCP Sunucuları (MCP Servers)**: MCP aracılığıyla belirli yetenekleri ortaya çıkaran hafif programlar.
- **Yerel Veri Kaynakları (Local Data Sources)**: MCP sunucularının güvenli biçimde erişebildiği bilgisayarınızdaki dosyalar, veritabanları ve hizmetler.
- **Uzak Hizmetler (Remote Services)**: MCP sunucularının bağlanabildiği internet üzerinden erişilebilen harici sistemler (örn. API'ler).

İşte MCP mimarisine hızlı bir genel bakış:

![MCP Mimarisi](https://softchris.github.io/mcp-workshop/assets/images/diagram-791787b0cac57bc331c20e72b645d4f7.png)

## MCP Yapı Taşları

Bir sunucu oluşturmak için temel yapı taşlarını bilmeniz gerekir:

- **Araçlar (Tools)**: Araçlar sizin için bir şey hesaplayan şeylerdir; girdi alır, hesaplama yapar ve çıktı üretir. Genellikle bir hesaplama veya sipariş verme ya da benzeri bir eylemdir.

- **Kaynaklar (Resources)**: Kaynak statik veridir; genellikle bu uygulama ayarları, veritabanı şemaları veya sunucudaki diğer statik dosyalar anlamına gelir.

- **İstemler (Prompts)**: İstemler veya istem şablonları, yeniden kullanabileceğiniz bir tarif gibidir. Fikir, böyle bir tarif kullanarak parametreler gönderebilir ve bunları bir LLM'ye besleyerek örneğin ürün açıklaması oluşturma gibi bir şeyi gerçekleştirebilirsiniz.

### Araçları, Kaynakları ve İstemleri Keşfetmek

**Siz**: "Sızmaya ne dersiniz?"

**Scipio**: "Sızma, düşman hatlarına sızmak için küçük birimler kullanmakla ilgilidir; bu sayede düşman hakkında daha fazla bilgi edinir ve karışıklık yaratırsınız."

**Siz**: "Bu bana sunucularımız hakkında daha fazla bilgi edinmenin bir yolunu düşündürüyor; sahip oldukları araçlar, istemler ve kaynaklar."

Özetlemek gerekirse şunu yapmalıyım:

- **Kuşatma manevralarını kullanmak**, ya da benim durumumda birkaç farklı MCP sunucusuna uygulama işlevselliğine göre özellikleri bölmek, böylece sunucuları kullanım alanına göre dağıtabilirim. Böylece uygulamayı ölçeklendirmek ve yönetmek daha kolay olur. Bu tür sunucular birbirinden bağımsız olarak güncellenebilir.
- **Sızmayı kullanmak**, ya da benim durumumda bu sunucuların ne yaptığını, araçlar, istemler ve kaynaklar açısından öğrenmek. Bu sayede doğru sunucuyla etkileşimde bulunduğumdan ve iş için doğru araçları kullandığımdan emin olabilirim.

**Siz**: "Zaman Böceği, şeyleri doğru anlıyor muyum?"

**Zaman Böceği**: "Evet, anlıyorsunuz. Scipio'nun stratejileri uygulama mimarinize uygulanabilir. İsterseniz Model Bağlam Protokolü'nün (MCP) özelliklerini ve uygulamanızda nasıl uygulayacağınızı öğretebilirim?"

**Siz**: "Evet, lütfen!"

**Zaman Böceği**: "Güzel, bir sunucu oluşturmakla başlayalım."

## Bir MCP Sunucusu Oluşturmak

**Zaman Böceği**: "İlk MCP sunucunuzu oluşturmak için iki kütüphaneye ihtiyacınız var: `@modelcontextprotocol/sdk` ve `zod`:

- `@modelcontextprotocol/sdk` kütüphanesi, MCP sunucuları oluşturmak ve yönetmek için gerekli araçları sağlar.
- `zod`, MCP sunucunuzda kullanılan veri yapılarını tanımlamanıza ve doğrulamanıza yardımcı olan TypeScript öncelikli bir şema beyanı ve doğrulama kütüphanesidir.

```bash
npm install @modelcontextprotocol/sdk zod
```

İşte bu kütüphaneleri kullanarak MCP sunucusu oluşturmanın basit bir örneği:

```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
 
// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});
```

Yukarıdaki kod şunları yapar:

- `@modelcontextprotocol/sdk` kütüphanesinden gerekli sınıfları ve fonksiyonları içe aktarır.
- Bir sunucu örneği oluşturur. `McpServer` sınıfı sunucuyu oluşturmak için kullanılır ve parametre olarak sunucunun adını ve sürümünü içeren bir nesne alır.

**Siz**: "Bu pek bir şey yapmıyor, değil mi?"

**Zaman Böceği**: "Hayır, henüz değil. Ama kaynaklar ve araçlar ekleyebiliriz. Araç belirli bir görevi gerçekleştirmek için kullanılabilen bir şeydir; kaynak ise araca veri veya işlevsellik sağlamak için kullanılabilen bir şeydir. Aşağıya bazılarını ekleyelim:

```typescript
server.tool("add",
   { a: z.number(), b: z.number() },
   async ({ a, b }) => ({
     content: [{ type: "text", text: String(a + b) }]
   })
 );
```

Yukarıdaki kodda:

- İki sayıyı girdi olarak alan ve toplamlarını çıktı olarak döndüren "add" adlı bir araç tanımladık.
- Zod kullanarak girdi parametrelerini ve doğrulamasını açıkladık. `z.number()` fonksiyonu, hem `a` hem de `b`'nin sayı olduğunu doğrulayarak girdi verilerini doğrulamak için kullanılır.
- Toplama işlemini gerçekleştirmek ve sonucu belirli bir biçimde döndürmek için `async` fonksiyonu kullanılır.

**Siz**: "İlginç, yani araç MCP istemcisi tarafından çağrılabilen bir fonksiyon gibi mi?"

**Zaman Böceği**: "Kesinlikle! MCP istemcisi bu aracı çağırabilir ve gerekli parametreleri geçirebilir. Sunucuya bir kaynak da ekleyelim:

```typescript
server.resource(
   "greeting",
   new ResourceTemplate("greeting://{name}", { list: undefined }),
   async (uri, { name }) => ({
     contents: [{
       uri: uri.href,
       text: `Merhaba, ${name}!`
     }]
   })
 );
```

Bu kodda:

- Girdi olarak bir ad alan ve selamlama mesajı döndüren "greeting" adlı bir kaynak tanımladık.
- Kaynağı nasıl çağıracağınızı tanımlamak için bir kaynak şablonu kullandık: `greeting://{name}`. Bu şema, ad için yer tutucu içeren kaynağın URI biçimini tanımlamak için kullanılır.
- Sağlanan ada göre selamlama mesajını oluşturmak için `async` fonksiyonu kullanılır.

**Siz**: "Yani kaynak bir veri kaynağı gibi; bu bir veritabanı, dosya veya hatta API olabilir mi? Bu bir dosya için `file://` URI'si kullanırdım, değil mi?" şöyle:

```typescript
server.resource(
   "file",
   new ResourceTemplate("file://{path}", { list: undefined }),
   async (uri, { path }) => ({
     contents: [{
       uri: uri.href,
       text: `Şu yoldaki dosya: ${path}`
     }]
   })
 );
```

**Zaman Böceği**: "Evet, kesinlikle! Kaynak, MCP sunucusuna veri veya işlevsellik sağlayan herhangi bir şey olabilir. Dosyalar, veritabanları, API'ler veya kullanmak istediğiniz herhangi bir veri kaynağı için kaynaklar tanımlayabilirsiniz."

Şimdi, istemcilerle iletişim kurabilmesi için sunucuya bir taşıma katmanı ekleyelim."

```typescript
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport); 
```

Bu kodda:

- Sunucunun istemcilerle standart girdi ve çıktı üzerinden iletişim kurmasına olanak tanıyan `StdioServerTransport` sınıfını kullanarak bir taşıma katmanı oluşturduk; bu yerel makinenizde çalışır. Ayrıca uzak sunucuda çalıştırmanıza olanak tanıyan SSE ve akış HTTP gibi başka taşıma yöntemleri de var; bunlar hakkında daha fazla bilgi ileride.
- Sunucu ile taşıma katmanı arasındaki bağlantıyı kurmak için `connect` metodunu çağırdık.

**Siz**: "Tamam, şimdi bir sunucumuz var; nasıl çalıştırır ve test ederim?"

## MCP Sunucusunu Çalıştırmak ve Test Etmek

**Siz**: "Scipio, taktiklerinizi test ettiniz mi?"

**Scipio**: "Tabii ki! Test etmek herhangi bir stratejide çok önemlidir. Taktiklerinizi devreye sokmadan önce her zaman test etmelisiniz. Aslında, yeni bir taktik kullandığım ve feci biçimde başarısız olduğum belirli bir savaşı hatırlıyorum; Trebia Savaşı olarak adlandırıldı. Dersimi öğrendim ve o hatayı bir daha yapmadım."

**Siz**: "Peki MCP sunucumu nasıl test ederim?"

**Zaman Böceği**: "MCP sunucunuzu şu şekilde denetçiyi çalıştırarak terminalde test edebilirsiniz:

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

Yukarıda, MCP sunucusunu çalıştırmak için `@modelcontextprotocol/inspector` paketini kullanıyoruz. Sunucunun giriş noktasını belirtmek için `node build/index.js` argümanını sağlıyoruz. Bu, MCP sunucusunu başlatacak ve denetçi aracılığıyla etkileşim kurmanıza olanak tanıyacak.

**Siz**: "Peki nasıl etkileşimde bulunurum?"

**Zaman Böceği**: "Bu, 6274 numaralı portta bir web sunucusu başlatır. Tarayıcınızı açarak `http://localhost:6274` adresine giderek denetçiye erişebilirsiniz. Denetçi, MCP sunucunuzla etkileşim kurmak için kullanıcı dostu bir arayüz sağlar; tanımladığınız araçları ve kaynakları test etmenize olanak tanır."

![Denetçi kullanıcı arayüzü](https://softchris.github.io/mcp-workshop/assets/images/connect-7703c67645f368d51c7b24a5d635d6a0.png)

### -1- Sunucuya Bağlan

**Zaman Böceği**: "Bağlan"ı seçin ve aşağıdaki pencereyi görmelisiniz:

![Sunucuya bağlanma](https://softchris.github.io/mcp-workshop/assets/images/connected-7c3570d5d0a8659e27740d2950031cb3.png)

Bağlandığınızı söylemelidir. Artık araçlar veya kaynaklar ile etkileşimde bulunabilirsiniz.

### -2- Araçları ve Kaynakları Listele

**Zaman Böceği**: "Ardından, sunucuda mevcut araçları ve kaynakları listelemek istiyoruz. Hangi araçların mevcut olduğunu görmek için "Araçları Listele"yi seçerek bunu yapabilirsiniz:

![Araçları listeleme](https://softchris.github.io/mcp-workshop/assets/images/tools-listed-630aa49c9d7e4347108419fb83c409f6.png)

Artık "add" aracının listelendiğini görmelisiniz. "Kaynaklar" sekmesini seçerek kaynakları da listeleyebilirsiniz.

### -3- Aracı Çalıştır

**Zaman Böceği**: "Aracı çalıştırmak için listeden "add" aracını seçin. Ekranın sağ tarafında beliren iletişim kutusundaki parametreleri doldurun. Örneğin, bu iki sayıyı birbirine eklemek için `a=5` ve `b=10` girebilirsiniz. Aracı yürütmek için "Aracı Çalıştır"a tıklayın. Aşağıdaki çıktı alanında sonucu görmelisiniz. Sonuç `15` olmalıdır."

![Aracı çalıştırma](https://softchris.github.io/mcp-workshop/assets/images/ran-tool-271ecd5f84a457462e59789b579ee9d4.png)

**Scipio**: "İlginç, stratejilerimi bu şekilde test edebilmeyi isterdim. Çok kullanışlı görünüyor."

**Siz**: "Kesinlikle! Gerçekten öyle! Bunun test ve hata ayıklama için ne kadar faydalı olacağını görüyorum."

## İstemci Oluşturmak

**Zaman Böceği**: "Ayrıca MCP sunucusuna bağlanan ve onunla etkileşim kuran bir istemci de oluşturabilirsiniz. İşte `@modelcontextprotocol/sdk` kütüphanesini kullanarak basit bir MCP istemcisi oluşturmanın bir örneği:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

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
```

Yukarıdaki kodda:

- İstemcinin standart girdi ve çıktı üzerinden MCP sunucusuyla iletişim kurmasına olanak tanıyan `StdioClientTransport` sınıfını kullanarak bir taşıma katmanı oluşturduk.
- Ad ve sürümle yeni bir `Client` örneği başlattık.
- `connect` metodunu kullanarak istemciyi taşıma katmanına bağladık.

**Siz**: "Tahmin ediyorum, istemciyle yapabileceğimiz çok daha fazla şey var?"

**Zaman Böceği**: Evet, bunun hakkında konuşalım. MCP istemcisi sunucuyla etkileşim kurmak, araçları çağırmak ve kaynaklara erişmek için kullanılabilir.

### Araçları ve Kaynakları Listelemek ve Çağırmak

**Zaman Böceği**: "Genellikle ele almak istediğiniz iki senaryo vardır: araçları ve kaynakları listelemek ve onları çağırmak. İşte bunu nasıl yapacağınız:

```typescript
// List prompts
const prompts = await client.listPrompts();

// List resources
const resources = await client.listResources();

// list tools
const tools = await client.listTools();
```

**Siz**: Bu harika, böylece sunucunun hangi yeteneklere sahip olduğunu biliyorum. Ama onları nasıl çağırırım?

**Zaman Böceği**: "Doğru, belirli bir örneğe dalalım; önce araçlar. Yani önce hangi araçlara sahip olduğunuzu sorarsınız, ardından bu yanıtı saklayabilir ve istediğiniz aracı çağırabilirsiniz. İşte bir örnek:

Araçları listelediğinizde şu biçimde bir yanıt alırsınız:

```json
  
  {
    "name": "<araç adı>",
    "description": "<açıklama>",
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
  }
```

Bu, `add` aracınız varsa araçları listeleyen yanıtınızın şöyle göründüğü anlamına gelir:

```json
{
    "name": "add",
    "description": "İki sayıyı toplar",
    "inputSchema": {
       "type":"object",
       "properties":{
          "a":{
            "type":"number"
          },
          "b":{
            "type":"number"
          }},
          "required":["a","b"],
          "additionalProperties":false,
          "$schema":"http://json-schema.org/draft-07/schema#"
      }
}
```

**Siz**: "Tamam, güzel; bunu bir değişkende saklayıp istediğim aracı çağırabilir miyim?"

**Zaman Böceği**: "Kesinlikle! Bir aracın nasıl çağrılabileceğine bakalım:

```typescript
// List tools
const { tools } = await client.listTools();

const addTool = tools[0]; // Assuming the first tool is "add"
const subtractTool = tools[1]; // Assuming the second tool is "subtract"

// Call a tool
const result = await client.callTool({
  name: addTool.name,
  arguments: {
    a: 5,
    b: 10
  }
});
```

**Siz**: "Tamam, mantıklı. Peki kaynaklar?"

**Zaman Böceği**: "Kaynaklar benzer, ancak kaynak URI'sini ve gerektirdiği parametreleri sağlamanız gerekiyor. İşte bir örnek:

```typescript
let resourceUri = "greeting://John"; // Replace with the actual resource URI

// call resource
// Read a resource
const name = "John Doe"; // Replace with the actual name

const resourceResult = await client.readResource({
  uri: `greeting:///${name}`,
});

console.log(resourceResult); // Merhaba John Doe!
```

**Siz**: "Anladım, güzel; ancak kendinize düşünüyorsunuzdur, bunu bir şekilde geliştirebilir miyiz? Zaman Böceği, bunu geliştirebilir miyiz?

**Zaman Böceği**: Evet, ama önce öncelikler; Scipio'yu mutlu edelim. Bir sonraki durakta Bayan Lamarr ile bir görüşmemiz olması gerekiyor.

## Ödev - Scipio İçin Envanter ve Araç Yönetim Sistemi Oluşturmak

**Scipio**: "Biliyorsunuz, etrafımda o kadar çok parşömen ve rulo var. Bunları düzenlememe yardımcı olacak bir araca gerçekten ihtiyacım var. Ayrıca hesaplamalar için kullandığım bu abaküs var. Envanterimi yönetmek için bir araç oluşturmama yardımcı olabilir misiniz?"

İşte rulolarımın tam envanteri:

- Taktikler Rulosu.
- Gıda tedariki Rulosu.

Ah, işte bir Vergilendirme rulosu. Vergilendirme büyük bir şey; İmparatorluk elde ettiğimiz her şeyin payını istiyor. Bunu kendi zamanınızda çözdünüz mü, cevaplamayın, bilmek istemiyorum.

Abaküs aracının aşağıdaki işlemleri desteklemesi gerekiyor:

- Toplama: İki sayıyı birbirine ekle.
- Çıkarma: Bir sayıyı diğerinden çıkar.
- Çarpma: İki sayıyı çarp.
- Bölme: Bir sayıyı diğerine böl.

## Çözüm

[Çözüm](/lessons/07-mcp/solution/README.md)

## Bilgi Kontrolü

**Soru**: Bir MCP Sunucusunun ortaya çıkarabileceği farklı kaynak türleri nelerdir?

A. Araçlar ve Web uç noktaları

B. Araçlar ve Kaynaklar

C. Araçlar, Kaynaklar ve İstemler


**Soru**: MCP Sunucunuzu test etmenin bazı yolları nelerdir?

A. Denetçi

B. Özel bir MCP istemcisi

C. Visual Studio Code

D. curl

E. Hepsi

[Çözüm Sınavı](/lessons/07-mcp/solution/solution-quiz.md)

## Özet

Bu bölümde aşağıdakileri öğrendik:

- Model Bağlam Protokolü, MCP, tüm özelliklerinizi tek bir yere koymak yerine yetenekleri sunuculara boşaltmanın harika bir yoludur. Bu, uygulamalarınızın küçük ve odaklı kalmasına olanak tanır. Ek avantaj, farklı ekiplerin farklı sunucuları yönetebilmesidir. MCP'nin bir protokol olması sayesinde bu ayrıca herkesin yeteneklerini ortak bir biçimde paylaşabilmesi anlamına gelir.
- Ayrıca Denetçi aracını veya yazılı bir istemciyi kullanarak MCP Sunucusunu nasıl tüketeceğimize baktık.

## Kendi Kendine Çalışma Kaynakları

- [MCP Sunucuları Oluşturma](https://github.com/microsoft/mcp-for-beginners/tree/main/03-GettingStarted/01-first-server)

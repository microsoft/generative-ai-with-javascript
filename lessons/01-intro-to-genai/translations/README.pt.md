# Lição 1: Introdução a IA Generativa e LLMs para desenvolvedores JavaScript

Nesse capítulo você aprenderá:

- Entender o básico da IA Generativa e dos Modelos de Linguagem de Grande Escala (Large Language Models - LLMs).
- Identificar aplicações potenciais e as limitações dos LLMs no desenvolvimento com JavaScript.
- Explorar como a IA Generativa pode melhorar a experiência do usuário em aplicações JavaScript.

## Setup

Caso não tenha feito, configure seu ambiente de desenvolvimento. Veja como você pode fazer isso: [Configurando seu ambiente de desenvolvimento](/docs/setup/README.md).

## Conteúdo complementar

[![Assista a um curto vídeo sobre introdução à IA Generativa](https://img.youtube.com/vi/vLYtDgs_zx8/0.jpg)](https://www.youtube.com/watch?v=vLYtDgs_zx8&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=1)

_Esse vídeo te dará uma introdução a IA Generativa com JavaScript_

💼 Apresentação de slides: [Introdução à IA Generativa](../../videos/slides/00-intro.pptx)

## Ia Generativa

A essa altura, você já ouvir falar de ferramentas como ChatGPT ou IA Generativa O conceito é simples: você escreve um prompt, e um modelo — muitas vezes chamado de Large Language Model (LLM) — gera um parágrafo ou até um mesmo uma página inteira de texto. Esse resultado pode ser usado para diversos fins, incluindo escrita criativa, responder perguntas, e escrever código.

Além disso, a IA Generativa evoluiu para capacidades multimodais, permitindo que você envie uma imagem ou vídeo e receba uma variadade de respostas. Esse avanço melhorou significativamente o fluxo de trabalho de muitas pessoas, não apenas gerando texto mas também criando resumos, traduções e muito mais.

*Simplesmente, interfaces em linguagem natural estão se tornando a interface padrão para muitos aplicativos — e seus usuários experam usa-lás.*

## Narrativa: uma viagem no tempo

> [!NOTE] 
> Vamos começar com uma visão geral da história — que conecta passado e futuro! Conforme você avaça nesse curriculo, você embarcará uma numa aventura emocionante, viajando de volta no tempo para colaborar com algumas das maiores mentes da história. Juntos, Juntos vocês enfrentarão desafios e irão explorara como a IA Generativa popde revolucionar suas aplicações JavaScript._

> [!NOTE]  
> Nós recomendados que você siga a história (é divertido!), mas [clique aqui](#interact-with-dinocrates) caso prefira pular direto para o conteúdo técnico.

Sua jornada começa na Londres de 1860, aonde você assume o papel de um habilidoso mecânico. Em uma série de aventuras emocionantes, você irá aperfeiçoar suas habilidades em IA e descobrirá soluções que trancendem o tempo.

### No redemoinho - Londres 1860

No coração da Londres de 1860, você é conhecido como um dos mecânicos mais habilidosos do seu tempo. Sua oficina fica escondida em um beco estreito. As paredes são forradas com prateleiras transbordando de peças mecânicas, plantas e projetos inacabados.

Sua bancada de trabalho, o coração da sua oficina, é uma bagunça organizada.

<div>
   <img src="./assets/london.png" alt="Oficina em Londres"width=300 >
</div>

_No centro do banco está o torso de um robô — uma maravilha da engenharia que consumiu meses de esforço. Sua estrutura de madeira é intrincadamente esculpida, cada junta meticulosamente projetada para movimento suave._

### Uma carta, para você?

De repente, uma batida na porta interrompe seus pensamentos. Visitantes a essa hora são raros. Limpando suas mãos num pano, curioso, você se aproxima da porta. 

Ao abrir-lá, você não encontra ninguém. Em vez disso, seus olhos são atraídos para um envelope lacrado no chão. Você o pega e lê:

_"Querido amigo,_

_Estou lhe enviando esta carta para ajudá-lo em seus esforços com o autômato. É fundamental que você continue esse trabalho. No envelope está a chave da biblioteca. Me encontre lá hoje às 15 horas_

_Atenciosamente,_

_Charles Babbage."_

### A caminho da biblioteca

Charles Babbage, o grande matemático e inventor da máquina diferencial, quer te conhecer. Rapidamente, você pega seu casaco e sai pela porta.

Depois de uma caminhada de 20 minutos ao longo do Tâmisa, você finalmente chega à biblioteca, onde encontra a porta ligeiramente aberta.

O interior é escuro e sombrio, com a única luz sendo filtrada pelas janelas sujas, lançando sombras sinistras nas paredes.

**Besouro do Tempo:** "Olá? Sr. Babbage?"

Quando seus olhos se ajustam à luz fraca, você percebe uma figura ao longe, acenando para você. Você caminha em direção a ele, seus passos ecoando no piso de madeira. A figura se torna mais clara e você o reconhece pelas fotos de jornal: é Charles Babbage.

<div>
   <img src="./assets/library.png" alt="Biblioteca empoeirada" width="300">
</div>

### Que dispositivo é esse?

No momento em que você se aproxima, um clarão ofuscante surge e ele desaparece.

Deixado para trás está um pequeno dispositivo metálico girando no chão. Você o pega, sua superfície fria e lisa zumbe suavemente. É diferente de tudo o que você já viu e, ainda assim, estranhamente familiar, você sente uma sensação de poder emanando dele.

Ele se assemelha a um pequeno besouro, com um design complexo e três botões: uma seta para cima, uma seta para baixo e um botão vermelho brilhante. Em sua parte traseira, uma pequena antena se estende, pulsando com energia.

Consumidos pela curiosidade, seus dedos se movem em direção ao botão vermelho. No momento em que você o pressiona, o mundo ao seu redor brilha e as cores giram violentamente ao seu redor.

Depois, escuridão e uma sensação de queda.

<div>
   <img src="./assets/vortex.png" alt="Time Vortex" width="300">
</div>

### Alexandria 300 a.C

Você acorda, desorientado. À medida que sua visão clareia, uma cidade antiga se revela diante de você - movimentada, vibrante e viva.

Pessoas em togas caminham pelas ruas, suas vozes se misturam em uma sinfonia de dialetos antigos, o ar se enche com o aroma de especiarias exóticas e com o som distante de comerciantes vendendo seus produtos.

<div>
   <img src="./assets/alexandria.png" alt="Alexandria 300 a.C" width="300">
</div>

**Besouro do Tempo:** Com certeza, devo ter batido a cabeça, você pensa, fechando os olhos e abrindo-os novamente, a cena permanece inalterada.

Estou preso no passado? Será que me atrevo a apertar esse botão novamente? Antes que você possa decidir, uma figura se aproxima de você, acenando.

### Conhecendo Dinocrates

Um senhor idoso vestindo uma toga acena para você dos degraus do grande templo. Seus cabelos e barba brancos captam a luz do sol, dando-lhe um brilho quase etéreo.

<div>
   <img src="./assets/dinocrates.png" alt="Dinocrates vestindo uma toga" width="300">
</div>

**Dinocrates:** "Bem-vindo, viajante," diz ele calorosamente. "Eu sou Dinocrates, arquiteto desta grande cidade. Sua chegada foi prevista."

**Você:** Foi? Digo, claro que foi. Estou aqui para ajudar, eu acho.

**Dinocrates:** Sim, como eu estava dizendo, você é esperado há algum tempo. Temos uma tarefa que requer suas habilidades exclusivas.

**Dinocrates:** "Nossos navios têm dificuldades para navegar pela costa - precisamos construir um farol. Você sabe alguma coisa sobre eles?"

**Você:** "Sou mecânico. Construo autômatos. Deixe-me ver o que posso fazer."

### O “Besouro do Tempo”

Um pensamento lhe ocorre. O dispositivo pode me entender se eu falar com ele?

**Você:** "Dispositivo, você consegue me entender?"

**Dispositivo:** "Claro. O que você precisa?"

**Você:** "Você pode me ajudar a construir um farol?"

**Dispositivo:** "Com certeza. Isso não será um problema."

**Você:** "Você tem um nome?"

**Dispositivo:** "Eu sou o Besouro do Tempo. Meu criador me chama de George; ele diz que é um bom nome para um besouro."

**Você:** Você tem razão, George é um bom nome, na verdade, era o nome do meu pai.

<div>
   <img src="./assets/time-beetle.png" alt="Time travel device resembling a metallic beetle" width="300">
</div>

_Dispositivo do tempo, “George”, o besouro metálico_

> [!NOTE]
> Em 300 a.C., Alexandria era uma cidade próspera fundada por Alexandre, o Grande, em 331 a.C. Rapidamente se tornou uma das maiores cidades do mundo helenístico. Projetada pelo arquiteto-chefe de Alexandre, Dinócrates, se tornou um importante porto e centro cultural.
>
> Alexandria era conhecida por suas estruturas impressionantes, incluindo o Pharos (farol), uma das Sete Maravilhas do Mundo Antigo, e a lendária Biblioteca de Alexandria. A localização estratégica da cidade fez dela um centro importante para o comércio e a troca de conhecimentos.
>
> Sob o Reino Ptolomaico, que se seguiu à morte de Alexandre, Alexandria cresceu e se tornou uma das cidades mais prósperas e influentes de sua época.

## Interaja com Dinocrates

Se você quiser interagir com o Dinocrates, execute o aplicativo [Characters](/app/README.md). 

> [!IMPORTANT]
> Isso é totalmente fictício; as respostas são geradas por IA.
> [Isenção de responsabilidade de IA](../../README.md#responsible-ai-disclaimer)

<div>
   <img src="./assets/dinocrates.png" alt="Dinocrates vestindo a toga" width="300">
</div>

**Passo a passo**:

1. Inicie o [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navegue até _/app_ na raiz no repositório.
3. Abra o console e execute `npm install` seguido de `npm start`. 
4. Quando ele aparecer, clique no botão "Abrir no navegador".
5. Converse com Dinocrates.

> [!NOTE]
 > Caso você esteja rodando o projeto localmente na sua máquina, por favor, revise o guia de início rápido para obter uma chave [GitHub de acesso pessoal](../../docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e substituição da chave no código.

### Espiada do código

Embora ainda haja muito mais a ser abordado neste currículo de IA generativa, vamos dar uma olhada rápida no código de IA para começar a aprender sobre o uso de JavaScript com IA.

Dentro do diretório `/app/app.js` você encontrará a função `app.post` que lida com a funcionalidade de IA Generativa. Veja a seguir:

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

Aqui está um resumo passo a passo do que a função faz:

1. **Extrair mensagem da requisição**: A função extrai a mensagem do corpo da requisição (req.body).
2. **Cria um array de Prompt**: Constrói um array de mensagens, incluindo uma mensagem do sistema e a mensagem de prompt do usuário.
3. **Inicializa o OpenAI Client**: Um OpenAI client é incializado com uma url base a uma API key das variáveis de ambiente. O modelo _gpt-4o-mini_ de [GitHub Models](https://github.com/marketplace/models) é usado para processar o prompt e retronar a resposta.
4. **Envia o Prompt para OpenAI**: A função registra o log do prompt e o envia para a API da OpenAI para gerar uma conclusão.
5. **Lidando ;com Resposta**: Se for bem-sucedida, a função responderá com o prompt e a resposta da conclusão.
6. **Lidando Erros**: Se ocorrer um erro, ele responderá com um status 500 e a mensagem de erro.

> **Note**: [GitHub Copilot](https://github.com/features/copilot) foi usado para gerar este resumo do código. IA generativa em ação!

### O que a IA generativa pode fazer por mim e pelos meus aplicativos?

> [!NOTE]
> Você provavelmente já percebeu que o besouro do tempo funciona como um assistente de IA com o qual você pode interagir usando linguagem natural, escrita ou falada.

À medida que sua aventura em Alexandria se desenrola, você começa a ver as possibilidades de combinar criatividade, engenhosidade e ferramentas de ponta para resolver desafios e transformar o mundo ao seu redor.

**Você:** Conte-me mais sobre faróis, você diz ao seu dispositivo.

**Besouro do Tempo:** Um farol é uma torre equipada com uma luz brilhante no topo, localizada perto da costa para guiar navios no mar. A luz serve como um auxílio à navegação, ajudando os marinheiros a evitar rochas e recifes de corais perigosos e a chegar ao porto com segurança.

Dinocrates ouve sua conversa e acrescenta:

**Dinocrates:** Precisamos de um farol para guiar nossos navios com segurança para o porto. Os mares podem ser traiçoeiros, e muitos navios se perderam nas rochas. Precisamos de um farol de luz para guiá-los para casa.

#### Áreas de aplicação da IA ​​generativa

**Você:** Faróis parecem ser uma área interessante, com certeza. O que mais a IA Generativa pode fazer por mim e meus aplicativos? 

**Besouro do Tempo:**. No século 21, a IA generativa revolucionou muitos setores, desde saúde até finanças e entretenimento. Aqui estão alguns exemplos:

- **Chatbot**: Um chatbot que pode gerar respostas semelhantes às humanas para consultas de usuários. Em vez de uma página de FAQ estática, os usuários podem interagir com um chatbot que fornece respostas dinâmicas. Isso torna a experiência do usuário mais envolvente e menos frustrante.

- **Assistentes e agentes** Assistentes e agentes podem executar instruções mais avançadas, como alavancar ferramentas para chamar APIs, executar código, gerar imagens e muito mais. Agentes avançados podem executar objetivos e executar tarefas de forma autônoma.

- **Uma ferramenta de criação de conteúdo**:. Uma ferramenta para gerar posts de blog e posts de mídia social. Imagine criar campanhas em minutos em vez de horas quando um site de e-commerce tem uma liquidação de black Friday.

- **Sugestão de código**: Uma ferramenta de sugestão de código que pode gerar trechos de código com base na entrada do usuário. Isso pode ser uma grande economia de tempo para desenvolvedores, especialmente ao trabalhar em tarefas repetitivas.

- **Tradução** – Traduza textos entre idiomas com alta precisão.

As you can see, these improvements can both help the front office and the back office of your app and company.

Aqui está um exemplo de um "aplicativo de chatbot" em ação:

![Imagem de um aplicativo de chatbot](https://camo.githubusercontent.com/76f2ad7cd754a2de2b9957d2070448e130e5ba228084b9b4b128e3af9c9f5239/68747470733a2f2f6c6561726e2e6d6963726f736f66742e636f6d2f656e2d75732f73656d616e7469632d6b65726e656c2f6d656469612f636861742d636f70696c6f742d696e2d616374696f6e2e676966) 

**Você:** Fascinante, vou anotar que vou ao século 21 para ver como essas ferramentas são usadas.

### IA generativa e o ecossistema JavaScript

**Besouro do Tempo:** Uma maneira popular de criar aplicativos no século 21 é usando JavaScript. Com cada linguagem de programação, há um ecossistema ao redor dela. Esse ecossistema inclui a linguagem de programação em si, bibliotecas e frameworks, suporte da comunidade e IDEs e ferramentas. Em um ecossistema de linguagem de programação, geralmente estamos falando sobre o seguinte:

| O que | Descrição | 
|---|---| 
| A linguagem de progração em si | Incluindo sua sintaxe e seus recursos. |
| Bibliotecas e frameworks    | Bibliotecas disponíveis para interagir com os modelos de IA generativos.                                                         | 
| Comunidade apoiando a linguagem| A comunidade importa, especialmente quando se tenta aprender algo novo. A comunidade em torno de bibliotecas e frameworks ajuda a decidir quais bibliotecas usar. Ela também afeta a facilidade de encontrar ajuda quando você está travado. | 

**Você:** Interessante, acho que já ouvi falar de programação. Ada Lovelace e Charles Babbage não fizeram experiências com isso?

**Besouro do Tempo:** Sim, Ada Lovelace foi a primeira programadora de computador, e Charles Babbage foi o inventor do mecanismo de diferença, um computador mecânico. Eles foram pioneiros no campo da computação, estabelecendo a fundação para a era digital.

**Você:** Eram? O que você quer dizer com eram? Acabei de receber uma carta de Charles Babbage.

**Besouro do Tempo:** Digamos que você está em uma posição única para interagir com figuras históricas de uma forma que poucos conseguem.

### Ecosistema JavaScript 

**Você:** Então, sobre ecossistemas, você falou, estou apenas tomando notas aqui, e sobre JavaScript e como ele é diferente de outros ecossistemas?

**Besouro do Tempo:** JavaScript é uma das linguagens de programação mais populares do mundo no século 21. Aqui estão algumas razões pelas quais ela é tão popular:

| O que | Descrição |
|-|-|
| Potencial para desenvolvimento full-stack | JavaScript é uma das poucas linguagens que podem ser usadas tanto para desenvolvimento front-end quanto back-end. |
| Rico ecossistema de bibliotecas | O JavaScript tem um vasto ecossistema de bibliotecas, com frameworks como React, Angular, Vue e mais. Há o NPM, o gerenciador de pacotes, que é um dos maiores repositórios de pacotes do mundo. |
| Forte apoio da comunidade | JavaScript tem uma comunidade grande e ativa, com muitos recursos disponíveis para aprendizado e desenvolvimento. Ele também funciona no navegador, o que é uma grande vantagem. |
| IDEs e ferramentas | O JavaScript tem uma variedade de IDEs disponíveis, como Visual Studio Code, WebStorm e Atom. Esses IDEs têm extensões criadas por empresas e pela comunidade, ajudando você com vários aspectos do desenvolvimento. |
| IA e JavaScript | O JavaScript oferece suporte ao desenvolvimento de IA com bibliotecas como TensorFlow.js, Brain.js, APIs da OpenAI e muito mais, permitindo que os desenvolvedores integrem aprendizado de máquina e IA generativa em aplicativos da web e do lado do servidor. |

**Você:** São muitos os motivos, parece que devo apostar em JavaScript para meus projetos futuros.

**Besouro do Tempo:** De fato, JavaScript é uma linguagem versátil e Python também é uma linguagem popular para desenvolvimento de IA.

**Você:** Python, o que cobras têm a ver com programação?

**Besouro do Tempo:** Vamos deixar isso para outra ocasião, certo?

**Besouro do Tempo:** Eu dei razões acima pelas quais JavaScript e seu ecossistema são uma boa opção em geral, mas por que especificamente para IA Generativa? A resposta é que é uma linguagem suportada por muitos fornecedores de nuvem e frameworks e ferramentas de IA. Também acreditamos que, embora Python possa ser o principal para cenários de IA, muitos desenvolvedores estão usando JavaScript e Typescript.

> **Você sabia?**  
> [62.5% dos desenvolvedores dizem que estão usando JavaScript](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) com muitos preferindo [TypeScript](https://www.typescriptlang.org) para novos projetos.

## Tarefa – Ajudando Dinocrates

Use um Large Language Model (LLM) para ajudar Dinocrates com o farol que mencionamos anteriormente em nossa história, usaremos algo chamado prompts, uma frase para descrever o que você quer. Você pode especificar tanto as informações que precisa quanto como quer que elas sejam apresentadas.

**Besouro do Tempo:** Vamos começar, vamos usar um LLM para pesquisar como você pode construir um farol para ajudar Dinocrates.

**Besouro do Tempo:**: Você precisará fornecer contexto ao modelo LLM (ou seja, "eu") sobre como construir, com quais ferramentas e recursos devem estar disponíveis nos tempos de Alexandria.

**Você:** Ok, conte-me mais sobre os LLMs..

**Besouro do Tempo:** LLMs são um tipo de modelo de IA que pode gerar texto semelhante ao humano com base em um prompt dado. Eles são treinados em grandes quantidades de dados e podem gerar texto coerente, criativo e contextualmente relevante.

**Besouro do Tempo:** Você provavelmente quer me perguntar de uma maneira melhor, para que eu possa lhe dar uma resposta melhor, sobre, você sabe *tosse* *tosse* Faróis, Alexandria, 300 a.C., Dinocrates, Farol de Alexandria, etc.

**Você:** Entendi, adicione mais contexto ao prompt e depois pergunte a você.

**Besouro do Tempo:** Sim, estou esperando...

Visite [Microsoft Copilot](https://copilot.microsoft.com), [ChatGPT](https://chatgpt.com/), ou outra ferramenta de chatbot online para gerar um plano para a construção do farol em Alexandria.
 
> DICA: Tente fazer com que o LLM gere um plano que inclua instruções passo a passo para construir o farol. Precisa de ajuda? Confira a solução para orientação.

## Solução

[Solução](./solution/solution.md)

### Verificação de conhecimento

**Pergunta:** Qual das seguintes afirmações sobre IA generativa e JavaScript é verdadeira?

A. Aplicativos de IA generativa com JavaScript só podem gerar texto.
B. O JavaScript pode ser usado para criar aplicativos com tecnologia de IA, incluindo chatbots, ferramentas de geração de texto e muito mais.
C. Python é a única linguagem usada para desenvolvimento de IA.

[Respostas do Quiz](./solution/solution-quiz.md)

## Recursos de autoestudo

- [Série de vídeos sobre JavaScript de IA generativa](https://genai-js)

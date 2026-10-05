# Lição 1: Introdução à IA Generativa e LLMs para Desenvolvedores JavaScript

Neste capítulo você vai aprender:

- Entender os fundamentos da IA Generativa e dos Grandes Modelos de Linguagem (LLMs).
- Identificar as potenciais aplicações e limitações dos LLMs no desenvolvimento JavaScript.
- Explorar como a IA Generativa pode melhorar as experiências dos usuários em aplicações JavaScript.

## Configuração

Se você ainda não configurou seu ambiente de desenvolvimento, veja como fazer: [Configure seu ambiente](/docs/setup/README.md).

## IA Generativa

Provavelmente você já ouviu falar de ferramentas como ChatGPT ou IA Generativa. O conceito é simples: você fornece um prompt, e um modelo—frequentemente chamado de Grande Modelo de Linguagem (LLM)—gera um parágrafo ou até mesmo uma página inteira de texto. Esta saída pode ser usada para diversos propósitos, incluindo escrita criativa, respostas a perguntas e codificação.

Além disso, a IA Generativa evoluiu para capacidades multimodais, permitindo que você forneça uma imagem ou vídeo como entrada e receba uma variedade de saídas. Este avanço melhorou significativamente o fluxo de trabalho de muitas pessoas—não apenas gerando texto, mas também resumindo, traduzindo e muito mais.

*Simplificando, interfaces de linguagem natural estão se tornando o novo padrão de interface para muitos aplicativos—e seus usuários esperam usá-las.*

## Narrativa: Uma jornada através do tempo

> [!NOTE] 
> Vamos começar com uma visão geral da história—uma que conecta o passado e o futuro! À medida que você avança neste currículo, embarcará em uma aventura emocionante, viajando de volta no tempo para colaborar com algumas das maiores mentes da história. Juntos, vocês enfrentarão desafios e explorarão como a IA Generativa pode revolucionar suas aplicações JavaScript.

> [!NOTE]  
> Embora recomendemos seguir a história (é divertido!), [clique aqui](#interaja-com-dinocrates) se preferir ir direto para o conteúdo técnico.

Sua jornada começa na Londres dos anos 1860, onde você assume o papel de um habilidoso mecânico. Através de uma série de aventuras emocionantes, você refinará suas habilidades de IA e encontrará soluções que transcendem o tempo.

### No coração da tempestade - Londres 1860

No coração da Londres de 1860, você é reconhecido como um dos mecânicos mais habilidosos de seu tempo. Sua oficina está escondida em um beco estreito. As paredes são revestidas com prateleiras transbordando de peças mecânicas, projetos e trabalhos inacabados.

Sua bancada de trabalho, o coração da sua oficina, é uma bagunça organizada.

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/london.png" alt="Oficina em Londres" width=300 >
</div>

_No centro da bancada está o torso de um robô—uma maravilha da engenharia que consumiu meses de esforço. Sua estrutura de madeira é intrincadamente esculpida, cada articulação meticulosamente projetada para movimentos suaves._

### Uma carta, para você?

De repente, uma batida na porta interrompe seus pensamentos. Visitantes a esta hora são raros. Limpando as mãos em um pano, você se aproxima da porta, com a curiosidade aguçada. 

Ao abri-la, não encontra ninguém. Em vez disso, seus olhos são atraídos para um envelope lacrado no chão. Você o pega e lê:

_"Caro amigo,_

_Estou lhe enviando esta carta para auxiliar em seus esforços com o autômato. É crucial que você continue este trabalho. Em anexo está uma chave para a biblioteca. Encontre-me lá às 15h hoje._

_Atenciosamente,_

_Charles Babbage."_

### Rumo à biblioteca

Charles Babbage, o grande matemático e inventor da máquina diferencial, quer se encontrar com você. Rapidamente, você pega seu casaco e sai porta afora.

Após uma caminhada de 20 minutos ao longo do Tâmisa, você finalmente chega à biblioteca onde encontra a porta ligeiramente aberta.

Está escuro e sombrio lá dentro, a única luz filtrando através das janelas empoeiradas, projetando sombras sinistras nas paredes.

**Você:** "Olá? Sr. Babbage?"

Conforme seus olhos se adaptam à luz fraca, você nota uma figura à distância, acenando para você. Você caminha em sua direção, seus passos ecoando no piso de madeira. A figura fica mais clara, e você a reconhece das fotos de jornal, é Charles Babbage.

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/library.png" alt="Biblioteca Empoeirada" width="300">
</div>

### O que é este dispositivo?

Assim que você se aproxima, um clarão ofuscante irrompe, e ele desaparece.

Deixado para trás está um pequeno dispositivo metálico girando no chão. Você o pega, sua superfície fria e lisa vibrando suavemente. Ele é diferente de tudo que você já viu, e ainda assim estranhamente familiar; você sente uma sensação de poder emanando dele.

Ele se assemelha a um pequeno besouro, intrincadamente desenhado, com três botões: uma seta para cima, uma seta para baixo e um botão vermelho brilhante. Das suas costas, uma pequena antena se estende, pulsando com energia.

Impulsionado pela curiosidade, seus dedos deslizam em direção ao botão vermelho. No momento em que você o pressiona, o mundo ao seu redor cintila, e as cores giram violentamente ao seu redor.

Então, escuridão, e uma sensação de queda.

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/vortex.png" alt="Vórtice do Tempo" width="300">
</div>

### Alexandria 300 a.C.

Você acorda, desorientado. À medida que sua visão se clareia, uma cidade antiga se desdobra diante de você—movimentada, vibrante e viva.

Pessoas em togas movimentam-se pelas ruas, suas vozes se mesclando em uma sinfonia de dialetos antigos, o ar preenchido com o aroma de especiarias exóticas e o som distante de mercadores anunciando suas mercadorias.

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/alexandria.png" alt="Alexandria 300 a.C." width="300">
</div>

**Você:** Certamente, devo ter batido a cabeça, você pensa, fechando os olhos e abrindo-os novamente, a cena permanece inalterada.

Estou preso no passado? Devo pressionar aquele botão novamente? Antes que você possa decidir, uma figura se aproxima de você, acenando.

### Encontrando Dinócrates

Um senhor idoso vestindo uma toga acena para você dos degraus do grande templo. Seu cabelo branco e barba capturam a luz do sol, dando-lhe um brilho quase etéreo.

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png" alt="Dinócrates vestindo uma toga" width="300">
</div>

**Dinócrates:** "Bem-vindo, viajante," ele diz calorosamente. "Eu sou Dinócrates, arquiteto desta grande cidade. Sua chegada foi prevista."

**Você:** Foi? Quero dizer, claro que foi. Estou aqui para ajudar, eu acho.

**Dinócrates:** Sim, como eu estava dizendo, você é esperado há algum tempo. Temos uma tarefa que requer suas habilidades únicas.

**Dinócrates:** "Nossos navios têm dificuldade em navegar pela costa—precisamos construir um farol. Você sabe algo sobre eles?"

**Você:** "Sou um mecânico. Construo autômatos. Deixe-me ver o que posso fazer."

### O "Besouro do Tempo"

Um pensamento lhe ocorre. O dispositivo pode me entender se eu falar com ele?

**Você:** "Dispositivo, você pode me entender?"

**Dispositivo:** "Claro. Do que você precisa?"

**Você:** "Você pode me ajudar a construir um farol?"

**Dispositivo:** "Certamente. Isso não será um problema."

**Você:** "Você tem um nome?"

**Dispositivo:** "Eu sou o Besouro do Tempo. Meu criador me chama de George; ele diz que é um bom nome para um besouro."

**Você:** Você está certo, George é um bom nome, era o nome do meu pai, na verdade.

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/time-beetle.png" alt="Dispositivo de viagem no tempo semelhante a um besouro metálico" width="300">
</div>

_Dispositivo de tempo, "George" o besouro metálico_

> [!NOTE]
> Em 300 a.C., Alexandria era uma cidade próspera fundada por Alexandre, o Grande, em 331 a.C. Rapidamente tornou-se uma das maiores cidades do mundo helenístico. Projetada pelo arquiteto-chefe de Alexandre, Dinócrates, tornou-se um importante porto e centro cultural.
>
> Alexandria era conhecida por suas estruturas impressionantes, incluindo o Farol (de Alexandria), uma das Sete Maravilhas do Mundo Antigo, e a lendária Biblioteca de Alexandria. A localização estratégica da cidade a tornou um centro-chave para comércio e troca de conhecimento.
>
> Sob o Reino Ptolemaico, que se seguiu à morte de Alexandre, Alexandria cresceu e se tornou uma das cidades mais prósperas e influentes de seu tempo.

## Interaja com Dinócrates

Se você quiser interagir com Dinócrates, execute o aplicativo [Characters](/app/README.md). 

> [!IMPORTANT]
> Isso é inteiramente fictício; as respostas são geradas por IA.
> [Aviso sobre IA Responsável](/README.md#responsible-ai-disclaimer)

<div>
   <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/01-intro-to-genai/assets/dinocrates.png" alt="Dinócrates vestindo uma toga" width="300">
</div>

**Passos**:

1. Inicie um [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navegue até _/app_ na raiz do repositório.
3. Localize o console e execute `npm ci` seguido de `npm start`.
4. Quando aparecer, selecione o botão "Open in Browser".
5. Converse com Dinócrates.

> [!NOTE]
> Configure `AI_ENDPOINT`, `AI_API_KEY` e `AI_MODEL` no arquivo `.env` na raiz do repositório, tanto localmente quanto no Codespaces. Consulte o [guia de configuração](/docs/setup/README.md#configure-environment-variables).

### Uma prévia do código

Embora ainda haja muito mais para abordar neste currículo de IA Generativa, vamos dar uma rápida olhada no código de IA para começar a aprender sobre o uso de JavaScript com IA.

Dentro de `/app/app.js` você encontrará uma função `app.post` que gerencia a funcionalidade de IA Generativa. Ela é mostrada a seguir:

```JavaScript
import express from 'express';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import { ChatRequestError, getChatRequest, handleBodyError } from './chat-request.js';
import { getModelConfig, loadEnvironment } from './model-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createApp(openai, model) {
  if (typeof model !== 'string' || !model.trim()) {
    throw new Error('A model name is required to create the chat app.');
  }
  const app = express();

  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.locals.delimiters = '{{ }}';

  app.post('/send', async (req, res) => {
    try {
      const { prompt, systemMessage } = getChatRequest(req.body);
      const completion = await openai.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: prompt }
        ]
      });

      const answer = completion?.choices?.[0]?.message?.content;
      if (typeof answer !== 'string' || !answer.trim()) {
        throw new Error('The model did not return an answer.');
      }
      res.json({ prompt, answer });
    } catch (error) {
      if (error instanceof ChatRequestError) {
        res.status(400).json({ message: error.message });
        return;
      }
      console.error(`Error: ${error.message}`);
      res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
    }
  });
  app.use(handleBodyError);

  return app;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  loadEnvironment();
  const port = process.env.PORT || 3000;
  const { baseURL, apiKey, model } = getModelConfig();
  const openai = new OpenAI({
    baseURL,
    apiKey,
    timeout: 60000
  });
  const app = createApp(openai, model);
  app.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
```

Aqui está um resumo passo a passo do que a função faz:

1. **Extrai a Mensagem da Requisição**: A função extrai a mensagem do corpo da requisição (req.body).
2. **Cria um Array de Prompt**: Constrói um array de mensagens, incluindo uma mensagem do sistema e a mensagem de prompt do usuário.
3. **Inicializa o Cliente OpenAI**: O endpoint, a chave de API e o nome da implantação vêm do seu recurso Microsoft Foundry. O código usa `AI_ENDPOINT`, `AI_API_KEY` e `AI_MODEL`.
4. **Envia o Prompt para a OpenAI**: A função registra o prompt e o envia para a API OpenAI para gerar uma conclusão.
5. **Trata a Resposta**: Se bem-sucedido, a função responde com o prompt e a resposta da conclusão.
6. **Tratamento de Erros**: Se ocorrer um erro, responde com um status 500 e a mensagem de erro.

> **Nota**: [GitHub Copilot](https://github.com/features/copilot) foi usado para gerar este resumo de código. IA Generativa em ação!

### O que a IA Generativa pode fazer por mim e meus aplicativos?

> [!NOTE]
> Você provavelmente já percebeu que o besouro do tempo funciona como um assistente de IA com o qual você pode interagir usando linguagem natural, escrita ou falada.

À medida que sua aventura em Alexandria se desenrola, você começa a ver as possibilidades de combinar criatividade, engenhosidade e ferramentas de ponta para resolver desafios e transformar o mundo ao seu redor.

**Você:** Conte-me mais sobre faróis, você diz ao seu dispositivo.

**Besouro do Tempo:** Um farol é uma torre equipada com uma luz brilhante no topo, localizada perto da costa para guiar navios no mar. A luz serve como um auxílio à navegação, ajudando os marinheiros a evitar rochas e recifes perigosos e chegar com segurança ao porto.

Dinócrates ouve sua conversa e acrescenta:

**Dinócrates:** Precisamos de um farol para guiar nossos navios com segurança para o porto. Os mares podem ser traiçoeiros, e muitos navios já foram perdidos nas rochas. Precisamos de um farol de luz para guiá-los para casa.

#### Áreas de aplicação da IA Generativa

**Você:** Faróis parecem uma área interessante com certeza, o que mais a IA Generativa pode fazer por mim e meus aplicativos?

**Besouro do Tempo:** No século 21, a IA generativa revolucionou muitas indústrias, da saúde às finanças e entretenimento, aqui estão alguns exemplos:

- **Chatbot**: Um chatbot que pode gerar respostas semelhantes às humanas para consultas de usuários. Em vez de uma página de FAQ estática, os usuários podem interagir com um chatbot que fornece respostas dinâmicas. Isso torna a experiência do usuário mais envolvente e menos frustrante.

- **Assistentes e Agentes** Assistentes e agentes podem executar instruções mais avançadas como acessar ferramentas para chamar APIs, executar código, gerar imagens e muito mais. Agentes avançados podem cumprir objetivos e executar tarefas de forma autônoma.

- **Uma ferramenta de criação de conteúdo**: Uma ferramenta para gerar posts de blog e publicações em redes sociais. Imagine criar campanhas em minutos em vez de horas quando um site de e-commerce tem uma promoção de Black Friday.

- **Autocompletar código**: Uma ferramenta de autocompletar código que pode gerar trechos de código com base na entrada do usuário. Isso pode ser uma economia enorme de tempo para os desenvolvedores, especialmente ao trabalhar em tarefas repetitivas.

- **Tradução** – Traduzir texto entre idiomas com alta precisão.

Como você pode ver, essas melhorias podem ajudar tanto o front office quanto o back office do seu aplicativo e empresa.

Aqui está um exemplo de um "aplicativo de chatbot" em ação:

![Aplicativo de chat do curso](/docs/images/character-chat.png)

**Você:** Fascinante, vou anotar para visitar o século 21 para ver como essas ferramentas são usadas.

### IA Generativa e o ecossistema JavaScript

**Besouro do Tempo:** Uma maneira popular de construir aplicativos no século 21 é usando JavaScript. Com cada linguagem de programação, há um ecossistema ao seu redor. Esse ecossistema inclui a própria linguagem de programação, bibliotecas e frameworks, suporte da comunidade, IDEs e ferramentas. Em um ecossistema de linguagem de programação, geralmente estamos falando sobre o seguinte:

| O quê | Descrição | 
|---|---| 
| A própria linguagem de programação | Incluindo sua sintaxe e recursos. |
| Bibliotecas e frameworks    | Bibliotecas disponíveis para interagir com os modelos de IA generativa. | 
| Comunidade que apoia a linguagem| A comunidade é importante, especialmente ao tentar aprender algo novo. A comunidade ao redor das bibliotecas e frameworks ajuda a decidir quais bibliotecas usar. Também afeta o quão fácil é encontrar ajuda quando você está bloqueado. | 

**Você:** Interessante, eu ouvi falar de programação, acho que Ada Lovelace e Charles Babbage não experimentaram isso?

**Besouro do Tempo:** Sim, Ada Lovelace foi a primeira programadora de computador, e Charles Babbage foi o inventor da máquina diferencial, um computador mecânico. Eles foram pioneiros no campo da computação, estabelecendo as bases para a era digital.

**Você:** Foram? O que você quer dizer com foram? Eu acabei de receber uma carta de Charles Babbage.

**Besouro do Tempo:** Digamos apenas que você está em uma posição única para interagir com figuras históricas de uma maneira que poucos outros podem.

### Ecossistema JavaScript

**Você:** Então ecossistemas, você disse, estou apenas anotando aqui, e quanto ao JavaScript e como ele é diferente de outros ecossistemas?

**Besouro do Tempo:** JavaScript é uma das linguagens de programação mais populares do mundo no século 21. Aqui estão algumas razões pelas quais é tão popular:

| O quê | Descrição |
|-|-|
| Potencial para desenvolvimento full-stack | JavaScript é uma das poucas linguagens que pode ser usada para desenvolvimento tanto front-end quanto back-end. |
| Rico ecossistema de bibliotecas | JavaScript tem um vasto ecossistema de bibliotecas, com frameworks como React, Angular, Vue e muito mais. Há o NPM, o gerenciador de pacotes, que é um dos maiores repositórios de pacotes do mundo. |
| Forte suporte da comunidade | JavaScript tem uma comunidade grande e ativa, com muitos recursos disponíveis para aprendizado e desenvolvimento. Também funciona diretamente no navegador, o que é uma grande vantagem. |
| IDEs e ferramentas | JavaScript tem uma variedade de IDEs disponíveis, como Visual Studio Code, WebStorm e Atom. Essas IDEs têm extensões construídas por empresas e pela comunidade ajudando você com vários aspectos do desenvolvimento. |
| IA e JavaScript | JavaScript suporta o desenvolvimento de IA com bibliotecas como TensorFlow.js, Brain.js, APIs da OpenAI e muito mais, permitindo que os desenvolvedores integrem aprendizado de máquina e IA Generativa em aplicações web e do lado do servidor. |

**Você:** São muitas razões, parece que devo apostar no JavaScript para meus projetos futuros.

**Besouro do Tempo:** De fato, JavaScript é uma linguagem versátil, Python também é uma linguagem popular para desenvolvimento de IA.

**Você:** Python, o que cobras têm a ver com programação?

**Besouro do Tempo:** Vamos deixar isso para outra ocasião, certo?

**Besouro do Tempo:** Eu dei razões acima sobre por que o JavaScript e seu ecossistema são uma boa opção em geral, mas por que especificamente para IA Generativa? A resposta é que é uma linguagem suportada por muitos fornecedores de nuvem e frameworks e ferramentas de IA. Também acreditamos que, embora o Python possa ser a primeira opção para cenários de IA, muitos desenvolvedores estão usando JavaScript e TypeScript.

> **Você sabia?**  
> [62,5% dos desenvolvedores dizem que estão usando JavaScript](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) com muitos preferindo [TypeScript](https://www.typescriptlang.org) para novos projetos.

## Tarefa – Ajudando Dinócrates 

Para usar um Grande Modelo de Linguagem (LLM) para ajudar Dinócrates com o farol que mencionamos anteriormente em nossa história, usaremos algo chamado prompts, uma frase para descrever o que você deseja. Você pode especificar tanto as informações que precisa quanto como deseja que sejam apresentadas.

**Besouro do Tempo:** Vamos começar, vamos usar um LLM para pesquisar como você pode construir um farol para ajudar Dinócrates.

**Besouro do Tempo:** Você precisará fornecer contexto ao LLM (ou seja, "eu") sobre como construir, com quais ferramentas e recursos deveriam estar disponíveis nos tempos de Alexandria.

**Você:** Ok, conte-me mais sobre LLMs.

**Besouro do Tempo:** LLMs são um tipo de modelo de IA que pode gerar texto semelhante ao humano baseado em um prompt fornecido. Eles são treinados em vastas quantidades de dados e podem gerar texto que é coerente, criativo e contextualmente relevante.

**Besouro do Tempo:** Você provavelmente quer me perguntar de uma maneira melhor, para que eu possa dar uma resposta melhor, sobre você sabe *tosse* *tosse* Faróis, Alexandria, 300 a.C., Dinócrates, Farol de Alexandria, etc.

**Você:** Entendi, adicionar mais contexto ao prompt e então perguntar a você.

**Besouro do Tempo:** Sim, estou esperando...

Visite [Microsoft Copilot](https://copilot.microsoft.com), [ChatGPT](https://chatgpt.com/), ou outra ferramenta de chatbot online para gerar um plano para construir o farol em Alexandria.
 
> [!TIP] 
> Tente fazer com que o LLM gere um plano que inclua instruções passo a passo para construir o farol. Precisa de ajuda? Confira a solução para orientação.

## Solução

[Solução](../solution/solution.md)

### Verificação de conhecimento

**Pergunta:** Qual das seguintes afirmações sobre IA Generativa e JavaScript é verdadeira?

A. Aplicativos de IA Generativa com JavaScript só podem gerar texto.
B. JavaScript pode ser usado para construir aplicações alimentadas por IA, incluindo chatbots, ferramentas de geração de texto e muito mais.
C. Python é a única linguagem usada para desenvolvimento de IA.

[Solução do quiz](../solution/solution-quiz.md)

## Recursos para auto-estudo

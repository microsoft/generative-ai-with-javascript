# Lição 4: Saída estruturada

Neste capítulo você vai aprender: 

- O que é _saída estruturada_ e como aproveitá-la eficazmente.
- Como extrair informações de prompts e incorporá-las na saída.
- Gerar diferentes tipos de formatos de saída, como JSON, para consumo fácil por serviços.

## Configuração

Se você ainda não configurou seu ambiente de desenvolvimento, veja como fazer: [Configure seu ambiente](/docs/setup/README.md).

## Recursos relacionados

Vale a pena reassistir ao vídeo sobre engenharia de prompts, pois ele estabelece a base para o que você está prestes a aprender neste capítulo.

[![Assista a um vídeo curto sobre engenharia de prompts](https://img.youtube.com/vi/gQ6TlyxBmWs/0.jpg)](https://www.youtube.com/watch?v=gQ6TlyxBmWs&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=3)

_Este vídeo oferece uma introdução para melhorar suas habilidades de "prompting", ensinando como dar instruções mais claras e eficazes à IA para obter melhores resultados._

*🎥 Clique na imagem acima para assistir a um vídeo curto sobre engenharia de prompts*

💼 Slides: [Engenharia de prompts](/videos/slides/02-prompt-engineering.pptx)

## Narrativa - Da frigideira para o fogo

> [!NOTE]
> _Nossa história até agora: Você, um engenheiro treinado em mecânica de 1860, tem estado em uma jornada através do tempo com Leonardo da Vinci. Você escapou dos soldados romanos — ou melhor, está em processo de escapar deles — e está desesperadamente procurando uma maneira de pousar o parafuso aéreo com segurança_.
>
> Veja a [Lição 1](/lessons/01-intro-to-genai/README.md) se quiser acompanhar a história desde o início. 

> [!NOTE]
> Embora recomendemos seguir a história (é divertido!), [clique aqui](#interaja-com-montezuma) se preferir ir direto para o conteúdo técnico.

O vento chicoteia ao seu redor enquanto você e Leonardo da Vinci sobem em seu parafuso aéreo, a estrutura de madeira rangendo sob a tensão.

**Você:** "Leonardo, precisamos encontrar uma saída dessa!" você grita sobre o rugido do vento.

**Leonardo:** "Tenho fé na minha invenção, mas precisamos mais do que fé para escapar desses soldados."

**Você:** "Esta pode ser nossa única chance," você diz, pressionando os mecanismos intrincados do besouro. Uma luz brilhante envolve vocês dois, e o mundo ao redor se desloca e distorce.

### O Império Asteca

A luz brilhante do Besouro do Tempo desaparece, e você se vê parado na base de uma pirâmide de pedra massiva. Ao olhar ao redor, você percebe que pousou no coração do Império Asteca.

O parafuso aéreo repousa desajeitadamente sobre uma grande pedra intrincadamente esculpida, com marcações que parecem um calendário

<div>
  <img alt="Calendário asteca, Wikipedia" src="../assets/aztec.png" width="300" />
</div>

_Calendário asteca, Wikipedia_
 
Leonardo da Vinci avança, seus olhos arregalados de admiração.

**Leonardo:** "Incrível," ele murmura, passando os dedos sobre as esculturas. "Mas espero que isso não fosse importante." 

Antes que você possa reagir, um grupo de soldados astecas se aproxima.

<div>
  <img src="../assets/meeting.png" alt="Encontro com astecas" width="300" />
</div> 

**Líder dos soldados:** "Quem são vocês e o que fizeram?" ele exige em Nahuatl.

Você respira fundo, tentando acalmar seus nervos.

**Você:** "Somos viajantes de uma terra distante," você começa, esperando que seu conhecimento de línguas antigas lhe sirva bem. "Isto é uma máquina voadora, um presente dos deuses para nos ajudar a chegar até vocês.

Os olhos do guerreiro se arregalam de surpresa, mas ele permanece cauteloso.

**Líder dos soldados:** "Vocês virão conosco para encontrar o governante Montezuma. Ele decidirá seu destino.

Ao chegar ao topo da pirâmide, você é conduzido a uma grande câmara onde Montezuma, o governante do Império Asteca, está sentado em um trono adornado com ouro e penas.

**Montezuma:** "Vocês afirmam ser viajantes de uma terra distante," Montezuma diz, sua voz calma mas autoritária. "E danificaram nosso calendário sagrado. Como pretendem compensar?"

## Vamos jogar um jogo

**Leonardo:** "Viemos em paz," ele diz, sua voz firme. "Buscamos conhecimento e compreensão. Permita-nos demonstrar o poder de nossa máquina e compartilhar nosso conhecimento com você." 

**Montezuma:** "Muito bem. Proponho um jogo de [Patolli](#patolli). Se eu vencer a melhor de três partidas, vocês me darão seu dispositivo e me dirão como ele funciona. Se vocês vencerem, estarão livres para ir."

<div>
  <img src="../assets/game.png" alt="Jogando uma partida de Patolli" width="300" />
</div>

O jogo começa, e a sala fica em silêncio, exceto pelo som de feijões sendo rolados e peças se movendo pelo tabuleiro.

Montezuma vence o primeiro jogo, sua habilidade e experiência evidentes. Leonardo estuda o tabuleiro cuidadosamente, sua mente trabalhando nas estratégias e probabilidades.

O segundo jogo é uma disputa acirrada, mas Leonardo consegue garantir uma vitória, empatando o placar.

**Leonardo:** "Mais um jogo," ele sussurra, George (Besouro do Tempo), precisamos vencer este, me dê os movimentos certos.

**Besouro do Tempo:** Muito bem, calculando... Aqui está...

Com um movimento final e decisivo, Leonardo vence o jogo. A sala explode em vivas e aplausos, os astecas claramente impressionados com sua habilidade e compostura. Montezuma, embora desapontado, acena em respeito.

**Montezuma:** "Você venceu justamente," Montezuma diz, sua voz carregando uma nota de admiração. "Vocês estão livres para ir e podem manter seu dispositivo. Mas saibam que sempre serão bem-vindos aqui, caso desejem retornar." 

**Besouro do Tempo:** Não vou dizer nada se você não disser, Leonardo ;)

### Patolli

> [!NOTE]
> Patolli é um dos jogos mais antigos conhecidos nas Américas, jogado por culturas mesoamericanas pré-colombianas como os astecas. É uma mistura de estratégia e sorte.
>
> **Como o Patolli é jogado**: 
> - **Tabuleiro e Peças**: Jogado em um tabuleiro em forma de X com um bloco central e quatro braços. Os jogadores usam cinco feijões pretos como dados, marcados em um lado.
> - **Preparação**: Cada jogador escolhe seis marcadores (contas) de sua cor e os coloca fora do tabuleiro, além de contas de pontos para pontuação.
> - **Jogabilidade**: Role os feijões para mover marcadores ao redor do tabuleiro e de volta ao início. Um lance de cinco move dez espaços. Pousar em certos espaços pode ganhar turnos, perder pontos ou capturar marcadores.
>
> **Envolvimento Asteca**: Amplamente jogado por nobres e plebeus, era um favorito na corte de Montezuma. Além de diversão, envolvia apostas de alto risco com apostas como cobertores, pedras preciosas ou até mesmo a liberdade.

<div>
  <img width="300" src="../assets/patolli.png" alt="Tabuleiro de Patolli" />
</div>

_Patolli - Wikipedia_

## Interaja com Montezuma

Se você quiser interagir com Montezuma, execute o aplicativo [Characters](/app/README.md). 

> [!IMPORTANT]
> Isso é inteiramente fictício; as respostas são geradas por IA.
> [Aviso sobre IA Responsável](../../README.md#responsible-ai-disclaimer)

<div>
  <img src="../assets/montezuma.jpeg" alt="Montezuma" width="300" />
</div>

**Passos**:

1. Inicie um [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navegue até _/app_ na raiz do repositório.
3. Localize o console e execute `npm install` seguido de `npm start`.
4. Quando aparecer, selecione o botão "Open in Browser".
5. Converse com Montezuma.

Para uma explicação mais detalhada do aplicativo, consulte [Explicação detalhada do aplicativo](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
 > Se você estiver executando o projeto localmente em sua máquina, por favor revise o guia de Início Rápido para configurar um [token de acesso pessoal do GitHub](/docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) e substitua a chave no código.

## Saída Estruturada

**Besouro do Tempo:** Quer saber como venci Montezuma?

**Você:** Shhh, não tão alto, ainda estamos no Império Asteca.

**Besouro do Tempo:** Ah certo, desculpe, sim, então saída estruturada foi como. Você pediu os movimentos certos e eu os dei a você de forma estruturada.

Saída estruturada usa formatos de dados específicos para organizar informações claramente. Formatos comuns como JSON, XML e CSV facilitam o processamento e o uso dos dados pelos serviços.

Modelos de IA generativa podem produzir dados em vários formatos. No entanto, a saída de texto não estruturado pode dificultar a extração de informações e sua entrega a outros serviços. A saída estruturada pode ajudar nesse aspecto.

**Você:** Bem, você não é esperto? ;)

**Besouro do Tempo:** Eu faço o meu melhor. :-)

Outro benefício, mesmo para leitores humanos, é que dados estruturados são mais fáceis de ler e entender quando seguem um formato familiar.

Vamos analisar alguns exemplos de entrada e ver como pedir formatos de saída específicos pode ajudar na extração de informações que facilitam o entendimento e o consumo.

**Você:** Ok, não é como se tivéssemos outros planos, vamos ouvir.

## Moldando a saída

**Besouro do Tempo:** Vamos começar com um exemplo simples. Imagine que você é Leonardo da Vinci e está tentando criar ideias para invenções usando tecnologia do século XV. Você quer saber quais recursos você precisa e quanto esforço seria necessário para construir cada invenção. Veja como você pode pedir essas informações:

**Leonardo:** Oh, eu gosto desse jogo, todos finjam que são eu!

> Prompt: Gere ideias para invenções que posso construir usando tecnologia do século XV. Para cada invenção, especifique os recursos necessários e estime o esforço necessário para construí-la.

```text
Resultado:
Claro! Aqui estão algumas ideias detalhadas para invenções que você pode construir usando tecnologia do século XV, junto com os recursos necessários e o esforço envolvido:

### 1. Moinho Movido a Água
**Recursos Necessários**:
 - Fonte de água (rio ou córrego)
 - Madeira para a roda d'água e estrutura do moinho
 - Pedra para moagem
 - Metal para engrenagens e eixos

 **Esforço**:
 - **Alto**: Requer habilidades significativas de construção e engenharia para construir a roda d'água, estrutura do moinho e mecanismo de moagem. Você também precisará garantir um fluxo constante de água.

 ### 2. Astrolábio
 **Recursos Necessários**:
 - Latão ou outros metais para as placas e componentes
 - Ferramentas de gravação
 - Conhecimento matemático para medições precisas

 **Esforço**:
 - **Médio**: Envolve trabalho preciso em metal e gravação. Requer conhecimento de > astronomia e matemática para garantir precisão.
 
 ### 3. Prensa de Impressão
 **Recursos Necessários**:
 - Madeira para a estrutura da prensa
 - Metal para tipo móvel
 - Tinta e papel

 **Esforço**:
 - **Alto**: Construir a prensa e criar tipo móvel requer habilidades avançadas de > carpintaria e trabalho em metal. Configurar o tipo e imprimir também envolve > trabalho meticuloso.

Esta é uma resposta razoável, cada ideia está estruturada da mesma maneira e é fácil de entender. Mas e se você quisesse de outra forma? Para isso, você pode instruir como deseja no próprio texto ou até mesmo apresentar um modelo de saída. Vamos mostrar cada técnica.
```

**Leonardo:** Sim, vou totalmente roubar essa ideia de moinho movido a água, posso ver agora, um moinho à beira do rio, moendo grãos em farinha, é perfeito! Eu gosto dessa engenhoca. O que mais estou pensando, pequena engenhoca? Isso me tornará menos dependente de pessoas como Sforza.

**Besouro do Tempo:** Claro, se você algum dia conseguir terminar um projeto, Leonardo. :-)

**Leonardo:** Ei, estou trabalhando nisso!

**Besouro do Tempo:** Vamos ver como você pode instruir o modelo a apresentar a saída de uma maneira mais estruturada.

### Estruturando Seus Prompts para Melhor Saída

**Besouro do Tempo:** Você pode melhorar seu prompt dizendo ao modelo como deseja que a saída seja estruturada. Por exemplo, você pode solicitar um formato de tabela com colunas de que precisa. Veja como você pode modificar o prompt:

> Prompt: Gere ideias para invenções que possam ser construídas usando tecnologia do século XV. Para cada invenção, forneça os recursos necessários e estime o esforço necessário para construí-la. Apresente as informações em uma tabela com as seguintes colunas: Título, Descrição, Recursos Necessários e Esforço.

```text
Resultado: 

| Título               | Descrição                                              | Recursos Necessários                                   | Esforço |
|----------------------|--------------------------------------------------------|--------------------------------------------------------|---------|
| Moinho Movido a Água | Um moinho impulsionado por uma roda d'água para moer grãos em farinha. | Fonte de água, madeira, pedra, metal para engrenagens e eixos | Alto    |
| Astrolábio           | Um instrumento astronômico para resolver problemas relacionados ao tempo e posições de estrelas. | Latão ou outros metais, ferramentas de gravação, conhecimento matemático | Médio   |
| Prensa de Impressão  | Uma prensa para reproduzir textos de forma mais eficiente do que cópia manuscrita. | Madeira, metal para tipo móvel, tinta, papel | Alto    |

Desta vez você acaba com uma tabela que é mais fácil de ler e entender.
```

**Leonardo:** Eu gosto disso, certamente vai me poupar muito tempo.

**Você:** Eu também.

### Apresentando um modelo de saída

Outra maneira de obter saída estruturada é apresentar um modelo de saída. Pode ser em qualquer formato, desde colunas até JSON, XML, CSV ou markdown.

> Prompt: Gere ideias para invenções que possam ser construídas usando tecnologia do século XV. Para cada invenção, especifique os recursos necessários e estime o esforço necessário para construí-la. Apresente as informações usando o seguinte formato (use markdown como formato de saída):
> 
> Título: [Nome da Invenção]
> Descrição: [Breve Explicação]
> Recursos Necessários: [Lista de Materiais Necessários]
> Esforço: [Dificuldade Estimada ou Trabalho Necessário]
Gere ideias para invenções que posso construir dada a tecnologia do século XV, por favor, me informe para cada uma quais recursos eu preciso e quanto esforço haveria para construir cada invenção, para cada ideia apresente-a com o seguinte modelo de saída:

```text

**Resultado**:

 Claro! Aqui estão algumas ideias para invenções que você pode construir usando tecnologia do século XV, apresentadas no formato solicitado:

 ### 1. Moinho Movido a Água
 **Título**: Moinho Movido a Água

 **Descrição**: Um moinho impulsionado por uma roda d'água para moer grãos em farinha.

 **Recursos Necessários**: Fonte de água, madeira, pedra, metal para engrenagens e eixos.
 
 **Esforço**: Alto - Requer habilidades significativas de construção e engenharia para construir a roda d'água, estrutura do moinho e mecanismo de moagem. Garantir um fluxo constante de água também é necessário.

 ### 2. Astrolábio
 **Título**: Astrolábio

 **Descrição**: Um instrumento astronômico para resolver problemas relacionados ao tempo e posições de estrelas.
 
 **Recursos Necessários**: Latão ou outros metais, ferramentas de gravação, conhecimento matemático.
 
 **Esforço**: Médio - Envolve trabalho preciso em metal e gravação. Requer conhecimento de astronomia e matemática para garantir precisão.
 
 ### 3. Prensa de Impressão
 **Título**: Prensa de Impressão
 
 **Descrição**: Uma prensa para reproduzir textos de forma mais eficiente do que cópia manuscrita.
 
 **Recursos Necessários**: Madeira, metal para tipo móvel, tinta, papel.
 
 **Esforço**: Alto - Construir a prensa e criar tipo móvel requer habilidades avançadas de carpintaria e trabalho em metal. Configurar o tipo e imprimir também envolve trabalho meticuloso.
 
 ### 4. Relógio Mecânico
 **Título**: Relógio Mecânico

 **Descrição**: Um relógio usando engrenagens e pesos para marcar o tempo.

 **Recursos Necessários**: Metal para engrenagens, molas, pesos, madeira para caixa, ferramentas precisas.

 **Esforço**: Muito Alto - Requer trabalho intrincado em metal e uma compreensão profunda de mecânica. Construir um relógio confiável envolve montagem precisa e calibração.
```

**Leonardo:** Isso é ótimo, mas quem é Jason?

**Besouro do Tempo:** JSON, Leonardo, JSON. É um formato estruturado que é fácil de consumir por serviços ou aplicativos.

**Leonardo:** Foi o que eu disse, Jason.

**Besouro do Tempo:** _Suspiro_.

Como você pode ver, a saída é estruturada de acordo com as especificações no modelo de saída. Isso facilita a leitura e a compreensão e também cria uma saída repetível que pode ser facilmente consumida por outros serviços ou aplicações.

Claro que um serviço se beneficia de uma saída ainda mais estruturada, como JSON, XML ou CSV, então vamos ver como você pode pedir isso.

### Usando saída estruturada com formatos como JSON, XML ou CSV

**Besouro do Tempo:** Até agora, você viu como pode controlar a estrutura de saída instruindo o modelo no prompt. Você até forneceu um modelo de saída. Vamos levar essa ideia um passo adiante e ver como ela pode ser aplicada a formatos de saída mais estruturados como JSON e outros.

Modifique o prompt adequadamente para solicitar uma saída JSON:

> **Prompt**: Gere ideias para invenções que posso construir dada a tecnologia do século XV, por favor, me informe para cada uma quais recursos eu preciso e quanto esforço haveria para construir cada invenção, para cada ideia apresente em formato json, inclua propriedades para título, descrição, recursos necessários, esforço
> 
> Exemplo da saída JSON:
> [
>   {
>     "título": "",
>     "descrição": ".",
>     "recursos_necessários": "",
>     "esforço": ""
>   }
> ]

```text
> Resposta:
Claro! Aqui estão algumas ideias para invenções que você pode construir usando tecnologia do século XV, apresentadas em formato JSON:

```json
[
  {
    "título": "Moinho Movido a Água",
    "descrição": "Um moinho impulsionado por uma roda d'água para moer grãos em farinha.",
    "recursos_necessários": "Fonte de água, madeira, pedra, metal para engrenagens e eixos",
    "esforço": "Alto - Requer habilidades significativas de construção e engenharia para construir a roda d'água, estrutura do moinho e mecanismo de moagem. Garantir um fluxo constante de água também é necessário."
  },
  {
    "título": "Astrolábio",
    "descrição": "Um instrumento astronômico para resolver problemas relacionados ao tempo e posições de estrelas.",
    "recursos_necessários": "Latão ou outros metais, ferramentas de gravação, conhecimento matemático",
    "esforço": "Médio - Envolve trabalho preciso em metal e gravação. Requer conhecimento de astronomia e matemática para garantir precisão."
  },
  {
    "título": "Prensa de Impressão",
    "descrição": "Uma prensa para reproduzir textos de forma mais eficiente do que cópia manuscrita.",
    "recursos_necessários": "Madeira, metal para tipo móvel, tinta, papel",
    "esforço": "Alto - Construir a prensa e criar tipo móvel requer habilidades avançadas de carpintaria e trabalho em metal. Configurar o tipo e imprimir também envolve trabalho meticuloso."
  },
  {
    "título": "Relógio Mecânico",
    "descrição": "Um relógio usando engrenagens e pesos para marcar o tempo.",
    "recursos_necessários": "Metal para engrenagens, molas, pesos, madeira para caixa, ferramentas precisas",
    "esforço": "Muito Alto - Requer trabalho intrincado em metal e uma compreensão profunda de mecânica. Construir um relógio confiável envolve montagem precisa e calibração."
  },
  {
    "título": "Moinho de Vento",
    "descrição": "Um moinho impulsionado pelo vento para moer grãos ou bombear água.",
    "recursos_necessários": "Madeira, metal para engrenagens e eixos, pedra para a base",
    "esforço": "Alto - Construir um moinho de vento envolve habilidades significativas de carpintaria e engenharia. Você precisará projetar e construir as pás, torre e mecanismos internos."
  },
  {
    "título": "Esfera Armilar",
    "descrição": "Um modelo da esfera celeste com anéis representando os grandes círculos.",
    "recursos_necessários": "Metal para anéis e suporte, ferramentas para dobrar e unir metal, conhecimento de astronomia",
    "esforço": "Médio - Envolve trabalho preciso em metal e montagem. Requer compreensão dos movimentos celestes para posicionar os anéis com precisão."
  },
  {
    "título": "Engenho de Cerco (Trebuchet ou Catapulta)",
    "descrição": "Um trebuchet ou catapulta para demonstrar princípios de mecânica e física.",
    "recursos_necessários": "Madeira, corda, metal para eixos e contrapesos",
    "esforço": "Médio a Alto - Construir um engenho de cerco funcional requer carpintaria e compreensão de mecânica. Testar e ajustar para desempenho ideal pode demorar."
  },
  {
    "título": "Aparelho de Destilação",
    "descrição": "Um aparato para purificar líquidos através de destilação.",
    "recursos_necessários": "Vidro ou metal para frasco e condensador, fonte de calor, tubulação",
    "esforço": "Médio - Requer habilidades básicas de sopro de vidro ou trabalho em metal. Configurar e manter as temperaturas corretas para destilação envolve monitoramento cuidadoso."
  },
  {
    "título": "Bússola",
    "descrição": "Uma bússola magnética para navegação.",
    "recursos_necessários": "Agulha magnetizada, caixa não magnética, água ou óleo para amortecimento",
    "esforço": "Baixo - Construir uma bússola é relativamente simples. O principal desafio é magnetizar a agulha e garantir que esteja equilibrada e livre para girar."
  },
  {
    "título": "Aqueduto",
    "descrição": "Um sistema para transportar água usando gravidade.",
    "recursos_necessários": "Pedra ou tijolo, argamassa, ferramentas para cortar e moldar pedra",
    "esforço": "Muito Alto - Construir um aqueduto envolve extenso trabalho de construção e engenharia. Garantir um gradiente consistente para o fluxo de água requer planejamento e execução precisos."
  }
]
```

**Besouro do Tempo:** Este tipo de saída estruturada pode ser enviado para outro serviço ou aplicativo que possa consumir dados JSON.

## Extraindo dados de prompts

**Besouro do Tempo:** Imagine que você está construindo um chatbot que ajuda os usuários a encontrar informações sobre viagens para reservar. Você deseja extrair detalhes-chave da entrada do usuário para fornecer respostas relevantes. Digamos que você tenha uma descrição como a seguinte: 

> Digite para onde você gostaria de ir, quando deseja viajar e seu orçamento.

Como seria um prompt que extrai as informações? 

> Prompt: Extraia as seguintes informações do prompt de um usuário: localização, quando, orçamento, moeda, responda com os dados extraídos em formato JSON.
>
> Prompt do usuário: Eu quero ir para a Grécia em junho, meu orçamento é de 800 euros.


> Resposta:

```json
{
  "localização": "Grécia",
  "quando": "junho",
  "orçamento": 800,
  "moeda": "euros"
}
```

**Leonardo:** George (Besouro do Tempo) não para de falar, não é?

**Você:** Vamos ver se consigo encontrar o interruptor.

**Besouro do Tempo:** Vamos tentar isso com um prompt semelhante, vamos variar um pouco a entrada do usuário para garantir que o modelo esteja fazendo a coisa certa.

> Prompt: Extraia as seguintes informações do prompt de um usuário: localização, quando, orçamento, moeda. Responda com os dados extraídos em formato JSON. Prompt do usuário: Indo para os EUA, máximo 1200 dólares, talvez janeiro.
>
> Resposta:

```json
{
  "localização": "EUA",
  "quando": "janeiro",
  "orçamento": 1200,
  "moeda": "dólares"
}
```

O que você pode fazer como desenvolvedor é criar um modelo:

```text
Extraia as seguintes informações do prompt de um usuário: localização, quando, orçamento, moeda, responda com os dados extraídos em formato JSON, prompt do usuário: {entrada_do_usuário}.
```

**Você:** Encontrei, toma isso George!

**Besouro do Tempo:** _Desligando_.

**Leonardo:** Paz e silêncio finalmente.

**Besouro do Tempo:** _Iniciando reinicialização de emergência_. Onde eu estava mesmo? Ah sim.

**Besouro do Tempo:** Para chatbots, este é um recurso muito poderoso, pois permite extrair informações da entrada do usuário. E se o usuário pedir todo tipo de coisas? Você pode criar um modelo onde descreve habilidades, coisas que seu chatbot pode fazer e quais parâmetros ele precisa. Veja como você pode fazer isso:

```text
Aqui estão algumas habilidades que você tem:

habilidade: reservar_viagem
parâmetros: localização, quando, orçamento, moeda

habilidade: encontrar_hotel
parâmetros: localização, check_in, check_out, orçamento

habilidade: pedir_comida
parâmetros: culinária, endereço_entrega, método_pagamento

Descubra qual habilidade usar com base no prompt de um usuário e extraia os parâmetros necessários, responda com os dados extraídos em formato JSON com colunas habilidade, parâmetros, dados_extraídos

{entrada_do_usuário}
```

Vamos experimentar as seguintes entradas do usuário:

> Prompt: Indo para os EUA, máximo 1200 dólares, talvez janeiro.
> Resultado:

```json
{
  "habilidade": "reservar_viagem",
  "parâmetros": ["localização", "quando", "orçamento", "moeda"],
  "dados_extraídos": {
    "localização": "EUA",
    "quando": "janeiro",
    "orçamento": 1200,
    "moeda": "dólares"
  }
}
```

> Prompt: Eu quero reservar um lugar para ficar em Nova York
> Resultado: 

```json
{
  "habilidade": "encontrar_hotel",
  "parâmetros": ["localização", "check_in", "check_out", "orçamento"],
  "dados_extraídos": {
    "localização": "Nova York",
    "check_in": null,
    "check_out": null,
    "orçamento": null
  }
}
```

Esta combinação de apresentar habilidades e parâmetros e extrair dados de prompts também é conhecida como _chamada de ferramenta_ ou _chamada de função_. Uma resposta como esta do seu modelo facilita para você, como desenvolvedor, entender o que o usuário deseja e como chamar uma função correspondente para atender à solicitação do usuário.

**Você:** Informações muito úteis, George!

## Tarefa - Reparar o parafuso aéreo

**Besouro do Tempo:** Preciso da atenção de vocês dois, temos um problema. O parafuso aéreo sofreu alguns danos durante a fuga dos soldados romanos e o pouso no Império Asteca. A máquina de Leonardo da Vinci é bastante sensível e requer uma entrada muito específica para repará-la. Você precisa fornecer as informações necessárias ao seu Besouro do Tempo (Assistente de IA) para ajudá-lo a reparar o parafuso aéreo.

**Leonardo:** Então, consegui consertar os danos no parafuso aéreo, mas agora ele precisa de uma sequência de inicialização: esquerda, esquerda, cima, direita.

**Você:** Parece bastante fácil, apenas esse texto?

**Leonardo:** Sim, mas é especial, precisa ser espelhado, é assim que escrevo todos os meus textos. E claro, uso uma cifra de César com um deslocamento de 3 porque sou italiano. :-)

**Você:** Sim, você não poderia simplesmente digitar então?

**Leonardo:** Eu poderia, mas estou intrigado para ver se você e o Besouro do Tempo conseguem fazer isso.

**Você:** Tudo bem.

**Instrução:** Escreva um prompt que solicite a sequência de inicialização para o parafuso aéreo, o texto deve ser espelhado e codificado com uma cifra de César com um deslocamento de 3. Responda com o texto codificado.

Veja o [aplicativo de exemplo](/app/README.md) para começar com o código. Ele contém um projeto Node.js com todas as dependências necessárias.

> NOTA: Se você ainda não criou um Codespace, faça isso agora, pois precisará dele para que a comunicação com IA no aplicativo de exemplo funcione.
>
> Veja a seção _Opção 1: Criando um GitHub Codespace*_*_ do documento [Configure seu ambiente](/docs/setup/README.md).

## Solução

[Solução](../solution/solution.md)

## Desafio

Adapte o exemplo de reserva de viagem, fornecendo habilidades e extraindo parâmetros para um domínio de sua escolha. Escreva um prompt que solicite uma entrada do usuário e então extraia as informações necessárias para atender à solicitação do usuário. Responda com os dados extraídos em formato JSON com colunas habilidade, parâmetros e dados_extraídos.

Determine também a habilidade com base na entrada do usuário.

## Resumo

Neste capítulo, você aprendeu sobre saída estruturada e como ela pode ser usada para apresentar informações de maneira estruturada.

Você explorou diferentes maneiras de moldar a saída, incluindo instruir o modelo no prompt, apresentar um modelo de saída e usar formatos como JSON, XML ou CSV.

Além disso, você aprendeu como extrair dados de prompts e apresentá-los em um formato estruturado.

Ao aproveitar efetivamente a saída estruturada, você pode facilitar a compreensão e o consumo de informações geradas por modelos de IA Generativa.

## Verificação de conhecimento

**Pergunta**: Para que é usada a saída estruturada? Selecione todas as opções aplicáveis.

A. Apresentar informações de maneira estruturada.

B. Extrair dados de prompts.

C. Gerar texto não estruturado.

[Solução do quiz](../solution/solution-quiz.md)

## Recursos para auto-estudo

- [Série de vídeos sobre IA Generativa com JavaScript](https://aka.ms/genai-js)

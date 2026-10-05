# Lição 3: Engenharia de prompts

Neste capítulo você vai aprender:

- O que é engenharia de prompts e como conhecer os fundamentos pode ajudar você a obter melhores resultados.
- Diferentes técnicas de engenharia de prompts e como elas podem ajudar a fornecer melhores resultados para diferentes cenários.
- O que são meta-prompts e como eles ajudarão a restringir a saída, garantir que seja acessível e proporcionar uma melhor experiência ao usuário.

## Configuração

Se você ainda não configurou seu ambiente de desenvolvimento, veja como fazer: [Configure seu ambiente](/docs/setup/README.md).

## Narrativa: Passagem para aventura

> [!NOTE] 
> Até agora, você esteve em uma jornada através do tempo com Leonardo da Vinci, explorando as maravilhas do Renascimento. Você encontrou o Besouro do Tempo, um dispositivo misterioso que permite viajar através do tempo e do espaço.
>
> Veja a [Lição 1](/lessons/01-intro-to-genai/README.md) se quiser acompanhar a história desde o início. 

> [!NOTE] 
> Embora recomendemos seguir a história (é divertido!), [clique aqui](#interaja-com-sforza) se preferir ir direto para o conteúdo técnico.

**Você:** Vamos ver se consigo voltar para casa. 

Antes que você consiga pressionar o botão, as portas da oficina se abrem com um estrondo. Um homem está na entrada, de ombros largos e vestido com roupas caras, ele agita um pedaço de papel no ar, gritando:

<div>
  <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png" alt="Um Ludovico Sforza furioso irrompendo pela porta" width="300">
</div>

*Ludovico Sforza* 

**Sforza**: Da Vinci, dov'è il mio dipinto? Onde está minha pintura?

**Leonardo:** É Sforza. Ele quer que eu termine uma pintura, 'A Última Ceia'.

**Você:** Você não poderia simplesmente dizer isso a ele?

**Leonardo:** Eu tentei, mas ele não é um homem paciente.

Você corre atrás de Leonardo, saindo pela porta dos fundos para um beco escuro, encontra um cavalo e uma carruagem esperando.

Leonardo pega as rédeas e vocês dois saltam para a carruagem. Com um estalo do chicote, o cavalo parte, galopando pelas ruas estreitas de Florença.

**Leonardo:** Tente pressionar aquela engenhoca, eles estão se aproximando!

**Você:** "Ok, Besouro do Tempo, escute com atenção. Preciso voltar ao presente, para casa, entendeu?" De repente, a carruagem passa por um solavanco e o Besouro do Tempo voa de sua mão e cai no chão. Ele começa a emitir bipes e anuncia com uma voz robótica: "Indo para Roma."

**Você:** Não, não Roma, home... casa...

Um turbilhão de cores envolve a carruagem, o mundo ao seu redor se dissolve em um caleidoscópio de luz.

## Fuga 

O turbilhão de cores desaparece, e você se encontra na carruagem, agora correndo pela Via Appia em Roma e, para seu espanto, está no meio de uma corrida de cavalos. Bigas trovejam passando, suas rodas levantando nuvens de poeira. 

<div>
  <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/escape.png" alt="Fuga de Roma" width="300">
</div>

**Você:** Leonardo, onde estamos? 

**Leonardo:** Parece que estamos no meio de uma corrida! Precisamos sair daqui! 

Você se agarra às laterais da carruagem enquanto ela atravessa o caos. Soldados romanos a cavalo estão se aproximando, suas armaduras brilhando sob a luz do sol. 

**Você**: Ali! Siga para o porto!

Leonardo dirige a carruagem em direção à saída, as rodas derrapando nas pedras. Os soldados estão em seu encalço, seus gritos ecoando em seus ouvidos. 

**Leonardo:** Precisamos despistá-los! Procure um lugar para se esconder!

Você examina as ruas estreitas, seu coração acelerado. 

**Você:** Ali! Um beco!

Leonardo entra no beco, a carruagem sacudindo ao fazer a curva apertada. Você salta da carruagem e ajuda Leonardo a arrastar um enorme dispositivo da parte de trás. É sua invenção—o _parafuso aéreo_.

**Leonardo:** Rápido, precisamos levar isso para o telhado!

Vocês dois se esforçam sob o peso do dispositivo. O som da perseguição dos soldados fica mais alto, seus passos ecoando nas paredes. Vocês chegam ao telhado, ofegantes e suados.

**Leonardo:** Ajude-me a montá-lo!

Vocês trabalham juntos, suas mãos se movendo com precisão treinada. Ambos sobem no dispositivo, seu coração batendo forte no peito.

**Leonardo:** Segure-se bem!

Com um impulso final, o parafuso aéreo começa a girar. As lâminas pegam o ar, e você sente uma súbita elevação. O chão se afasta abaixo de vocês enquanto o dispositivo decola, subindo acima dos telhados de Roma. 

**Você:** Conseguimos, Leonardo! Estamos voando!

**Leonardo:** Sim, mas precisamos encontrar um lugar seguro para pousar.

Você olha para a cidade; os edifícios antigos se estendem abaixo de você.

<div>
  <img src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/airborne.png" alt="No ar, olhando para a cidade com os pés pendurados" width="300">
</div>

## Interaja com Sforza

Se você quiser interagir com Sforza, execute o aplicativo [Characters](/app/README.md). 

> [!IMPORTANT]
> Isso é inteiramente fictício; as respostas são geradas por IA.
> [Aviso sobre IA Responsável](/README.md#responsible-ai-disclaimer)

<div >
  <img  src="https://raw.githubusercontent.com/microsoft/generative-ai-with-javascript/main/lessons/03-prompt-engineering/assets/ludovico.png" alt="Ludovico Sforza" width="300" >
</div>

**Passos**:

1. Inicie um [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. Navegue até _/app_ na raiz do repositório.
3. Localize o console e execute `npm ci` seguido de `npm start`.
4. Quando aparecer, selecione o botão "Open in Browser".
5. Converse com Sforza.

Para uma explicação mais detalhada do aplicativo, consulte [Explicação detalhada do aplicativo](/lessons/01-intro-to-genai/README.md#interact-with-dinocrates).

> [!NOTE]
> Configure `AI_ENDPOINT`, `AI_API_KEY` e `AI_MODEL` no arquivo `.env` na raiz do repositório, tanto localmente quanto no Codespaces. Consulte o [guia de configuração](/docs/setup/README.md#configure-environment-variables).

## O que é engenharia de prompts?

**Besouro do Tempo:** Precisamos falar sobre engenharia de prompts.

**Você:** Precisamos? O que é isso?

**Besouro do Tempo:** Engenharia de prompts, apesar do nome, não é sobre construir pontes ou estradas, mas sim sobre elaborar os "prompts" certos para obter a saída desejada de um modelo de linguagem de IA Generativa.

**Você:** Ok, mas por que é importante que eu saiba disso?

**Besouro do Tempo:** Bem, você quer pousar o parafuso aéreo, certo?

**Você:** Sim, de preferência em uma peça só. :-)

**Besouro do Tempo:** Foi o que pensei, agora preste atenção! Engenharia de prompts é sobre elaborar os prompts certos para obter a saída desejada de um modelo de linguagem.

**Besouro do Tempo:** Grandes modelos de linguagem têm o que chamamos de _propriedades emergentes_, que são características que não estão explicitamente programadas no modelo, mas surgem da maneira como ele é treinado em vastas quantidades de dados de texto. Ao estudar essas propriedades emergentes, você pode tirar conclusões e descobrir padrões que podem ajudá-lo a obter melhores resultados do modelo.

**Você:** Ok, então existem padrões que descobrimos que podem nos ajudar a obter melhores resultados do modelo. Mas como isso me ajuda a pousar o parafuso aéreo?

**Besouro do Tempo:** Sim, correto, e uau, você não é muito paciente, não é?

**Você:** Bem, você também não seria se estivesse voando em uma geringonça sem instruções claras de pouso.

**Besouro do Tempo:** Estou aqui com você, sabia? Mas vamos voltar ao ponto.

## Como a engenharia de prompts pode ajudar desenvolvedores de aplicativos

**Besouro do Tempo:** Como profissional, ser capaz de elaborar um prompt melhor é uma habilidade que você deseja ter em seu arsenal.

Olhando da perspectiva de um desenvolvedor, você pode usar a engenharia de prompts para:

- **Obter resultados mais precisos** do seu modelo de linguagem e, em última análise, melhorar a experiência do usuário do seu aplicativo.

- **Controlar a saída** do modelo para garantir que seja relevante e apropriada para seus usuários. Isso é especialmente importante ao lidar com tópicos sensíveis e também para proteger a reputação da sua marca.

- **Formatar a saída** de uma maneira que seja fácil de entender e consumir. Vamos analisar mais este aspecto no próximo capítulo.

**Besouro do Tempo:** Vamos explorar as diferentes técnicas e estratégias que você pode usar para elaborar prompts eficazes para seu modelo de linguagem.

## Técnicas e estratégias de engenharia de prompts

**Besouro do Tempo:** Aqui estão algumas técnicas e estratégias que você pode usar para elaborar prompts eficazes:

- **Prompting com poucos exemplos**. Esta técnica envolve dar à IA alguns exemplos para mostrar o tipo de resposta que você deseja.

- **Prompting de cadeia de pensamento**. Esta técnica envolve fornecer uma sequência de prompts para ensinar a IA como resolver uma tarefa complexa passo a passo.

- **Meta-prompts**. Esta técnica envolve adicionar detalhes ou instruções extras para moldar a saída da IA com mais precisão.

- **Prompting maiêutico**. Esta técnica envolve usar perguntas orientadoras para direcionar a IA para uma resposta específica.

**Você:** Isso parece interessante, suponho que você me dará alguns exemplos?

**Besouro do Tempo:** Sim, já vou mostrar. Vamos analisar exemplos para cada uma dessas técnicas para entender como funcionam na prática.

### Prompting com poucos exemplos: Dê exemplos para orientar a saída da IA

O prompting com poucos exemplos fornece a um modelo de IA alguns exemplos para orientar sua saída. Imagine que você está no parafuso aéreo perguntando sobre a Roma antiga. Prompts com poucos exemplos podem ser assim:

> "Fale-me sobre o Coliseu Romano." → "É um anfiteatro enorme."
>
> "Como era a vida na Roma antiga?" → "Era movimentada e difícil."

**Você:** Entendi! Isso ajuda a IA a acertar, mesmo aqui em cima! ;)

**Besouro do Tempo:** Exatamente, é um método sólido. Próximo!

### Prompting de Cadeia de Pensamento: Mostre raciocínio passo a passo

**Besouro do Tempo:** Esta técnica guia a IA mostrando um raciocínio passo a passo para resolver um problema. Imagine pousar o parafuso aéreo. Você poderia decompor assim:
- Você está a 100 metros de altura.
- A gravidade puxa a 9,8 m/s².
- Fórmula: altura = ½ * g * t².
- Resolva: t ≈ 4,5 segundos para pousar.

Seu prompt se torna:
> - 100 metros acima do solo  
> - Gravidade: 9,8 m/s²  
> - Quantos segundos para pousar?  

**Resposta: 4,5 segundos**

**Você:** Isso é rápido—espero que os números funcionem!

**Besouro do Tempo:** Isso ensina a IA a pensar passo a passo.

**Você:** Então é sobre decompor problemas para respostas precisas?

**Besouro do Tempo:** Sim, perfeito para tarefas complexas como um aplicativo de tutor de matemática!

### Prompting Maiêutico: Questione a saída para verificar a precisão

**Besouro do Tempo:** Esta técnica usa perguntas para verificar a precisão da saída da IA. Você pergunta sobre cada etapa para garantir um raciocínio consistente.

**Você:** Então, questionar tudo o que ela diz? Parece divertido. ;)  

**Besouro do Tempo:** Vamos testar nosso pouso do parafuso aéreo:
- 100 metros acima
- Gravidade: 9,8 m/s²
- Quantos segundos para pousar? (Resposta: 4,5s)

Pergunte: "Por que 4,5 segundos?"

> **Resposta:**
> - Altura = 100m, velocidade vertical inicial = 0 m/s, gravidade = 9,8 m/s². 
> - Use: altura = ½ * g * t².
> - Resolva: 100 = ½ * 9,8 * t² → t ≈ 4,5s.

**Besouro do Tempo:** Trata-se de verificar as respostas da IA com perguntas de acompanhamento.

**Você:** Então, não confie nela—investigue-a com perguntas?

**Besouro do Tempo:** Exatamente! Garante um raciocínio sólido.

## Meta Prompts: Adicione instruções extras para precisão

**Besouro do Tempo:** Em seguida, meta prompts.

**Você:** Ugh, chá primeiro?

**Besouro do Tempo:** _Suspiro_. Eles adicionam orientação aos prompts para melhor saída—ótimos para aplicativos sensíveis e voltados ao cliente.

Aqui está um exemplo:
> **Meta Prompt:** Use apenas produtos da Contoso Inc. (bolas de basquete, bolas de futebol, raquetes de tênis). Mantenha preciso e amigável ao usuário.
> **Prompt:** Melhores produtos esportivos para iniciantes?
> **Resposta:** Bolas de basquete, bolas de futebol e raquetes de tênis—perfeitas para coordenação e agilidade.

Isso garante precisão e se atém aos produtos da Contoso. Sem isso:
> **Prompt:** Melhores produtos esportivos para iniciantes?
> **Resposta:** Bolas de basquete, bolas de futebol, raquetes de tênis, além de bolas de futebol americano—_nem todos são itens da Contoso_.

**Você:** Útil! Mantém as respostas no caminho certo, como leis para meu autômato.

**Besouro do Tempo:** Você saberia, _"Frankenstein"_—er, nada!

**Você:** O quê?

**Besouro do Tempo:** Deixa pra lá.

> *Frankenstein* de Mary Shelley—1818, 42 anos antes de suas viagens no tempo. [Leia mais](https://en.wikipedia.org/wiki/Mary_Shelley)

**Você:** Então, sem meta prompt significa caos?

**Besouro do Tempo:** Sim, você obteria respostas fora da marca.

**Você:** Entendi, a precisão importa!

## Tarefa - Vamos ajudar nossos heróis a pousar o parafuso aéreo

**Você:** Esta é a parte em que você me mostra como pousar o parafuso aéreo, certo?

**Besouro do Tempo:** Sim, vamos a isso. A colina está aproximadamente a 100 metros de nossa posição atual. Veja como podemos configurar o prompt:

- Altura atual acima do solo: 100 metros
- Movendo-se para frente a: 10 metros por segundo
- Gravidade: 9,8 metros por segundo ao quadrado
- Vento para cima a: 0,7 metros por segundo

**Leonardo:** Sua engenhoca de IA pode ajudar no cálculo para ver se conseguiremos chegar ou se precisamos fazer outro salto temporal?

**Besouro do Tempo:** Sim, posso, mas meu nome é George, prefiro isso a Engenhoca. Na verdade, vou deixar que vocês dois descubram como configurar o prompt. ☺️

Construa um aplicativo que pergunte por:

- Altura
- Velocidade para frente
- Gravidade
- Vento para cima
- Distância até a colina

Use a técnica de cadeia de pensamento para chegar a uma resposta.

Aqui está um projeto inicial [Projeto inicial](/app/README.md).

## Solução

Construa um aplicativo em JavaScript que peça as seguintes entradas: 

- Altura atual acima do solo
- Movendo-se para frente a metros por segundo
- Gravidade em metros por segundo ao quadrado
- Vento para cima em metros por segundo 
- Distância até a colina 

Em seguida, use o LLM para incorporar essas entradas e aproveitar a técnica de prompting de cadeia de pensamento para guiar o modelo até a resposta correta.

[Solução](../solution/solution.md) 

## Verificação de conhecimento 

**Pergunta:** O que é engenharia de prompts? Selecione todas as opções aplicáveis.

A. Engenharia de prompts é sobre construir pontes e estradas.

B. Engenharia de prompts é sobre elaborar os prompts certos para obter a saída desejada de um modelo de linguagem.

C. Engenharia de prompts é sobre treinar um modelo para reconhecer padrões em dados.

[Solução do quiz](../solution/solution-quiz.md)

## Recursos para auto-estudo

- [Engenharia de prompts](https://en.wikipedia.org/wiki/Prompt_engineering)
- [Fundamentos de engenharia de prompts](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md?WT.mc_id=academic-105485-koreyst)
- [Engenharia de prompts avançada](https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts)

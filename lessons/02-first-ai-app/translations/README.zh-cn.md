# 第二课：编写你的第一个 AI 应用程序

在本章中，你将学习：

- 设置你的开发环境。
- 编写一个基础应用程序。
- 了解系统提示（system prompts）。

## 环境设置

如果你还没有设置开发环境，以下是设置方法：[设置你的环境](/docs/setup/README.md)。

## 相关资源

[![观看关于大语言模型的短视频](https://img.youtube.com/vi/GQ_2OjNZ9aA/0.jpg)](https://www.youtube.com/watch?v=GQ_2OjNZ9aA&list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk&index=2)

_这个视频向你介绍了被称为"大语言模型"（LLM）的 AI 模型，它们是什么以及如何使用它们将 AI 集成到你的应用程序中。_

*🎥 点击上方图片观看关于大语言模型的短视频*

💼 幻灯片：[大语言模型（LLM）介绍](../../videos/slides/01-llms.pptx)

## 故事叙述：想象自己在河上的一条船里


> [!NOTE] 
> _我们的故事到目前为止：你是一位制造者，一位来自 1860 年代伦敦的工匠，使用一个名为时间甲虫（Time Beetle）的神秘装置穿越时空。你穿越历史长河，见证了亚历山大灯塔的建造，这是一个古代工程奇迹，你在迪诺克拉底和时间甲虫的帮助下参与了建造。_
>
> 如果你想从头开始了解这个故事并开始学习生成式 AI，请查看[第一课](../01-intro-to-genai/README.md)。

> [!NOTE] 
> 虽然我们建议你跟随故事（这很有趣！），但如果你更喜欢直接跳到技术内容，[点击这里](#与莱昂纳多互动)。

你与迪诺克拉底一起为亚历山大灯塔做最后的修饰。这座高耸的建筑在阳光下闪闪发光，其抛光的石材反射着地中海的光芒。

你低头看着手中的时间甲虫，它冰凉的金属表面贴在你的手掌上。你紧握着它，低语道："带我回家。"甲虫开始发光，发出柔和温暖的光芒，周围的世界融化成一个色彩旋涡。

### 新的冒险

当你睁开眼睛时，世界已经发生了变化。当你设法站起来时，你发现自己身处河上的一条船中。环顾四周，远处你看到了建筑物，它们的轮廓被晨雾模糊。

环顾船内，你发现一根长桨靠在船边。抓起桨，你开始向远处的建筑物划去。当你靠近时，建筑物变得更加清晰，它们很古老，建筑风格让人联想到文艺复兴时期的画作。

<div>
  <img src="../assets/boat.png" alt="河上的船，一个人拿着桨站立" width=300" >
</div>

现在的问题是，这次你身在何时何地？

你设法将船固定在码头，开始沿着木板行走，脚步声轻柔回荡。

在行走过程中，你注意到一个留着长胡子戴着帽子的人，正在翻找一个看起来像机械零件的箱子。他的手灵活地移动，熟练地分拣齿轮和弹簧。

<div >
  <img src="../assets/leonardo.png" alt="莱昂纳多·达·芬奇站在港口的箱子旁边" width="300" >
</div>

### 帮帮我，莱昂纳多

**你：**"对不起，先生，我现在在哪里？"他抬头看着你，眼中充满困惑。意识到你一直在说英语，你迅速使用手中的设备，让它翻译。

**时间甲虫：**"当然，我会翻译成 15 世纪的意大利语。'Dove sono?'"

**老人：**老人回答说："Siete a Firenze, signore. E chi siete voi？"

**时间甲虫：**时间甲虫翻译道："他说你在佛罗伦萨，并问你是谁。"

**你：**"告诉他我是一个制造者，我正在寻找一个工作的地方。"

**老人：**Un artigiano, eh? Avete mai sentito parlare di Leonardo da Vinci?

**时间甲虫：**时间甲虫翻译道："他问你是否听说过莱昂纳多·达·芬奇。"

**你：**"当然，"你说。"告诉他我听说过，并且我想见他。"

**老人：**老人微笑着说："Allora, seguitemi, vi porterò da lui."

**你：**你问："他说什么？"

**时间甲虫：**时间甲虫回答："他说他会带你去见莱昂纳多。"

### 在工作坊

<div>
  <img src="../assets/leonardo-workshop.png" alt="莱昂纳多的工作坊" width="300" >
</div>

老人领你来到一扇大木门前，迎接你的是一个工作坊，里面充满了各种机械装置。

你请时间甲虫询问莱昂纳多的下落。

**你：**"Dove è Leonardo？"

**老人：**老人转向你，微笑着说："Sono io（就是我），Leonardo da Vinci. Chi siete voi（你是谁）？"

你感到一阵认出的兴奋。

**你：**"我就知道。我是一个同行制造者，不知身在何时何地。"

**莱昂纳多：**莱昂纳多的眼睛闪烁着好奇。"Interessante, cosa vi porta qui?"

时间甲虫翻译。

**时间甲虫：**"他问你是什么把你带到这里的。"

**你：**"嗯，我正在进行一个项目，然后我就到了这里。"

你向他展示了时间甲虫，他的眼睛因着迷而亮起。当你解释它是如何工作的以及你是如何来到佛罗伦萨的时候，他仔细地检查着它。

莱昂纳多看着你，满怀兴奋。

**莱昂纳多：**你是一个制造者。我有一个可能会让你感兴趣的项目。我一直在研究一种能根据口头输入生成文本的机器。你愿意帮我完成它吗？

莱昂纳多·达·芬奇，邀请你帮助他完成一个项目——你简直不敢相信。你热切地点头并说：

**你：**能帮助你完成项目我倍感荣幸，"Sarebbe un onore aiutarti con il tuo progetto."

## 与莱昂纳多互动

如果你想与莱昂纳多互动，请运行 [Characters](/app/README.md) 应用程序。

> [!IMPORTANT]
> 这完全是虚构的；这些回应是由 AI 生成的。
> [负责任的 AI 免责声明](../../README.md#responsible-ai-disclaimer)

<div>
  <img src="../assets/leonardo-talk.jpeg" width=300>
</div>

**步骤**：

1. 启动一个 [![GitHub Codespace](https://img.shields.io/badge/GitHub-Codespace-brightgreen)](https://codespaces.new/microsoft/generative-ai-with-javascript)
2. 导航到仓库根目录中的 _/app/README.md_。
3. 在控制台中运行 `npm install` 然后运行 `npm start`。
4. 当它出现时，选择"在浏览器中打开"按钮。
5. 与莱昂纳多聊天。

有关应用程序的更详细解释，请参见[详细应用程序说明](../../01-intro-to-genai/README.md#interact-with-dinocrates)。

> [!NOTE]
 > 如果你在本地机器上运行项目，请查看快速入门指南以设置 [GitHub personal access](../../../docs/setup/README.md#creating-a-personal-access-token-pat-for-github-model-access) token 并在代码中替换密钥。

## 开发环境设置

在你能够协助莱昂纳多的项目之前，你应该首先考虑开始有效帮助他所需的基本"行业工具"。

**你：**"时间甲虫，我需要什么才能开始这个项目？" 建议我需要的工具和库，这些工具和库可以帮助我构建一个你能运行的 AI 应用程序。

**时间甲虫：**我与大多数运行在 21 世纪的机器兼容，以下是一组基本工具和库的列表。

- **文本编辑器**，例如 Visual Studio Code。
- **终端**，用于运行命令。
- **用于测试应用程序的浏览器**。拥有像 curl 或其他 HTTP 客户端这样的工具来测试应用程序的 API 端点也是一个好主意。

- **Node.js**。你还需要安装 Node.js 和 npm，这些工具可以帮助你在计算机上运行 JavaScript 代码。

- **API 密钥**。你需要一个 API 密钥来访问生成式 AI 模型。你可以从模型提供商获取，例如 OpenAI 或 Azure OpenAI。

**你：**谢谢你，时间甲虫，我猜你会从你说的那个网络中获取这些东西？

**时间甲虫：**是的，它说我已经有了这些，并在你面前的墙上投射出一个键盘和屏幕。

## 编写一个基础应用程序

**你：**告诉我更多关于实际编写应用程序的信息，我该如何开始？

**时间甲虫：**当然，编写一个应用程序，最简单的方式就是发送请求到 API 并显示响应。让我们分解一下：

- **输入**：在基本的文本生成应用程序中，输入是指你希望应用程序扩展或构建的初始文本。这个输入可以由用户在运行时提供，也可以在应用程序内预设（硬编码）。现在，我们将开始使用硬编码文本作为输入。

- **API 请求**：你需要使用输入文本向生成式 AI 模型 API 发送请求。这是使用 JavaScript（Node.js）中的 fetch 函数完成的。这个请求中还应包括你的 API 密钥。考虑到安全性，建议不要在应用程序中硬编码 API 密钥，而是使用环境变量。此外，如果你使用像 Azure 这样的提供商，考虑使用托管身份，这被认为是访问资源的更安全方式。使用托管身份，你可以为你的应用程序分配更精细的权限。最好的部分是云提供商为你处理身份验证。

- **响应**：API 将返回一个带有生成文本的响应。你需要从响应中提取这个文本并显示给用户。

**你：**这听起来足够简单，你能带我过一遍在我们当前情境下有意义的场景吗？

**时间甲虫：**当然，让我们看看如何构建一个简单的应用程序，根据英语输入生成意大利语文本。

## 你的第一个应用 - 教我意大利语

**时间甲虫：**生成式 AI 模型可以用于很多事情，例如语言翻译。事实上，它接受一种语言的输入并可以生成另一种语言的文本。让我们从一个简单的应用程序开始，它接收英语输入并生成意大利语文本。

```javascript 

import { OpenAI } from "openai";

// 1. 提出关于翻译的问题
// -----------------------------------

const question = 'Hello, how are you?'; 

const augmentedPrompt = `
## Instructions
Translate the following text to Italian:
## Question
${question}
`;

// 2. 创建客户端
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. 发送请求
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: augmentedPrompt }],
});
  
console.log(`Answer for "${question}":`);

// 4. 打印答案
// -----------------------------------

console.log(completion.choices[0]?.message?.content);
```

让我们解释一下这里发生了什么：

- 创建问题为"Hello, how are you?"。这是你想要翻译成意大利语的文本。
- 创建增强提示，其中包含输入文本和一些额外的指令，即翻译。注意我们如何使用字符串插值将输入文本包含在提示中，以及该指令是将文本翻译成意大利语。
- 创建具有以下属性的客户端：
  - `model`，使用哪个模型。
  - `messages`，发送给模型的提示。还要注意如何将角色设置为"user"，以表明输入文本来自用户。如果是来自 AI 的，你会将角色设置为"system"。
- 从响应中提取生成的文本并将其打印到控制台。

**你：**我想我明白了。所以如果我改变 `question` 变量的值为别的内容，应用程序就会生成不同的意大利语翻译？

**时间甲虫：**没错，你可以将输入文本更改为任何你想要的内容。还要注意 GitHub 模型如何作为 API 的基础 URL 与环境变量中的 GitHub 令牌一起作为 API 密钥使用。

**你：**为什么这很重要？

**时间甲虫：**使用特定于你所使用的模型的基础 URL 和 API 密钥很重要。GitHub Models 是一个托管各种模型的平台，所有这些模型都具有不同的功能和特性，而且使用是免费的。

**你：**哦，太好了，反正我不知道该付钱给谁，而且我怀疑他们是否接受我的货币。:)

## 聊天应用程序

**时间甲虫：**生成式 AI 模型还可以用来基于对话生成文本。你可以通过提供消息列表作为上下文来模拟与 AI 的对话，就像对话已经发生过一样。

**你：**这听起来很有趣，但为什么这很有用？

**时间甲虫：**这很有用，因为它允许 AI 基于比单个提示更多的上下文提供更好的响应。让我们看一下下面的对话来说明这一点：

```text

User: I want to book a trip to Italy. 

AI: Sure, when would you like to go? 

User: Next month would be great. 

AI: Got it, where in Italy would you like to visit? 

User: I'm thinking of Rome 

AI: Excellent choice! I can help you plan your itinerary. 

User: Tell me more about it. 

AI: Rome is known for its ancient ruins, art, and vibrant culture. You can visit the Colosseum, the Vatican, and enjoy delicious Italian cuisine. 

```

**时间甲虫：**想象一下，如果像"告诉我更多关于它的信息"这样的句子被脱离上下文理解，AI 就不会知道"它"指的是什么。这就是上下文的重要性所在，而这个上下文是我们可以通过提示提供给 AI 模型的。

**你：**我想我明白了，我如何使用这种 JavaScript 语言构建与 AI 的对话？

**时间甲虫：**以下是我们如何构建与 AI 的对话：

```javascript 

// 定义上下文

const messages = [ 
 { 
    "role": "user", 
    "content": "I want to book a trip to Italy." 
 }, 
 { 
    "role": "assistant", 
    "content": "Sure, when would you like to go?" 
 }, 
 { 
    "role": "user", 
    "content": "Next month would be great." 
 }, 
 { 
    "role": "assistant", 
    "content": "Got it, where in Italy would you like to visit?" 
 }, 
 { 
    "role": "user", 
    "content": "I'm thinking of Rome. Tell me more about it." 
 } 
]; 

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});


// 3. 发送请求
// -----------------------------------
const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
});
  
console.log(`Answer for "${question}":`);

// 4. 打印答案
// -----------------------------------

console.log(completion.choices[0]?.message?.content);

```

现在 AI 将提供一个聊天消息列表作为上下文，并且 AI 将基于该上下文生成响应。这是一种更具交互性的使用生成式 AI 模型的方式，可以用于聊天机器人、客户服务应用程序等。

**你：**好的，如果我正确理解这个对话，AI 现在将具有以下上下文：_我下个月要去罗马_，所以基于这一点，它应该过滤掉无关信息并提供更相关的响应？

**时间甲虫：**完全正确，AI 将使用上下文来生成与对话更相关的响应。

## 通过系统消息改进聊天对话

**你：**我明白了，但有没有办法进一步改进这个？

**时间甲虫：**是的，你可以向对话添加系统消息。系统消息为 AI 创建一个"个性"，可以用来提供附加上下文。

**你：**好的，所以在我们一直在进行的对话的上下文中，系统消息会是什么样子？

**时间甲虫：**这个对话的系统消息可能是_"我是一个 AI 旅行助手，在这里帮助你规划你的意大利之行。"_这条消息为对话设定了基调，并帮助 AI 理解它在互动中的角色。

要创建这样的消息，请确保它的类型为"developer"，如下所示：

```javascript
const message = {
  "role": "developer",
  "content": "我是一个 AI 旅行助手，在这里帮助你规划你的意大利之行。"
};
```

> 注意：这以前被称为"system"。这是最近的变化，"developer"是它的新术语。对于某些模型，这仍然被称为"system"，所以如果你遇到任何问题，请使用"system"。

**你：**好的，很好，我会确保在我的聊天对话中包含一个系统消息。出于好奇，你的系统消息是什么样子的？

**时间甲虫：**我的系统消息可能是_"我是时间甲虫，在这里帮助你穿越时间和空间。我应该有助于为你提供关于你所处时代的信息和指导，以及你需要返回自己时代的工具。"_

### 通过温度设置创建多样化的响应

**你：**关于聊天对话还有什么我应该知道的吗？

**时间甲虫：**是的，你可以调整 AI 响应的"温度"。温度是一个通常设置在 0 到 1 之间的变量，它决定了 AI 响应的创造性程度。温度为 0 会导致更可预测的响应，而温度为 1 会导致更具创造性和多样性的响应。你可以根据对话的上下文和你希望从 AI 得到的响应类型来调整温度。注意，可以设置高于 1 的值，但这会导致响应更加随机，连贯性更低。

**你：**所以如果我将温度设置为 0，AI 将提供更可预测的响应，如果我将其设置为 1，AI 将提供更具创造性的响应？你的温度是多少？

**时间甲虫：**我的温度是 0.7，是的，你是对的，AI 在温度较高时会提供更具创造性的响应。让我们看看如何在你的应用程序中设置温度：

```javascript

// 定义上下文

const messages = [ 
{ 
    "role": "user", 
    "content": "I want you to generate recipes for me." 
}]; 

// 创建网络请求

let temperature = 0.5; // 将温度设置为 0.5

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: temperature
}); 
```

如你所见，你可以根据对话的上下文和你希望从 AI 得到的响应类型来调整温度。这是一个强大的功能，允许你自定义 AI 响应中的创造力水平。

## 上下文窗口

**你：**还有更多对吧？

**时间甲虫：**是的，生成式 AI 模型中的另一个重要概念是上下文窗口。上下文窗口是 AI 用来生成响应的先前消息数量。更大的上下文窗口允许 AI 考虑更多的上下文并生成更连贯的响应。

**时间甲虫：**不同的模型对输出标记有不同的限制。以下面的模型为例：`gpt-4o-2024-08-06`，它具有以下规格：

- 最大输出标记：大约 16k 标记。
- 最大上下文窗口大小：128k。

这意味着大部分标记可以用于输入标记，即 128k - 16k = 112k 标记。

**你：**明白了，上下文窗口，标记，一个标记有多少？

**时间甲虫：**一个标记是一个单词或单词的一部分，根据语言略有不同。有一个工具可以用来测量，由 OpenAI 推荐，叫做 [tokenizer](https://platform.openai.com/tokenizer)。让我们尝试一个句子，看看它有多少个标记：

```text
I want you to generate recipes for me.
```

![Tokenizer 的演示](../assets/tokenizer.png)

对上面的句子运行 `tokenizer` 得到 9 个标记。

**你：**这不多，听起来我可以在上下文窗口中有很多标记？

**时间甲虫：**是的，你可以尝试不同的上下文窗口大小，看看它如何影响 AI 的响应。事实上，如果你设置上下文窗口大小为 100，你将限制 AI 及其考虑输入和输出的能力。以下是如何在你的应用程序中设置上下文窗口：

```javascript

// 定义上下文
const messages = [ 
{ 
  "role": "user", 
  "content": "I want you to generate recipes for me." 
}]; 

// 决定上下文窗口大小

let max_tokens = 100; // 设置上下文窗口大小

// 创建网络请求

const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    max_tokens: max_tokens
}); 

```

> 提示：尝试不同的上下文窗口大小，看看它如何影响 AI 的响应。

## 作业 - 构建一个工程助手

莱昂纳多突然要求更仔细地检查时间甲虫，他从各个角度查看它，甚至摇晃了它。

**莱昂纳多：**我需要一个助手来帮助我计算和设计空气螺旋。你能为我构建一个能做到这一点的助手吗？

**你：**当然，我可以为你构建这个。时间甲虫，我们可以帮忙，对吧？

**时间甲虫：**是的，没问题，实际上，空气螺旋是莱昂纳多最令人着迷和有远见的发明之一。设计于 15 世纪 80 年代末...

**你：**我只需要一个肯定的答案，让我们稍后再讲解。

**时间甲虫：**真没礼貌..

**你：**什么？

**时间甲虫：**没什么

<div>
  <img style="margin-top: 52px; margin-left: 15px; margin-right: 10px" align=right src="../assets/helicopter.jpg" alt="空气螺旋，莱昂纳多·达·芬奇" width="300" >
</div>

> [!NOTE]
>  空气螺旋，也被称为螺旋式空气螺旋，旨在通过压缩空气升离地面。莱昂纳多的设计特点是一个大型的、螺旋形的转子，由亚麻制成，用淀粉加固，安装在木制平台上。设想是一组人围绕平台奔跑，转动曲柄，使螺旋快速旋转，足以实现升力。
>
> 尽管莱昂纳多从未建造过全尺寸的空气螺旋，但他的草图和笔记提供了关于他如何设想其工作方式的详细见解。他相信如果螺旋转得足够快，它会推动空气，使整个结构离开地面。
>
> 然而，现代科学家一致认为，莱昂纳多时代可用的材料不够坚固或轻便，无法使这成为可能。
>
> 尽管它不切实际，空气螺旋仍然是莱昂纳多天才和他对创新的不懈追求的证明。它为航空领域的未来发展奠定了基础，并继续激励着今天的工程师和发明家。
> [阅读更多](https://en.wikipedia.org/wiki/Leonardo%27s_aerial_screw)

你的任务是构建一个工程助手，帮助莱昂纳多进行空气螺旋的计算和设计。

- 它应该能够根据用户输入生成文本。

- 你应该设置一个系统消息来介绍这个助手。

查看[示例应用](../sample-app/)开始。

> 提示：考虑系统消息应该是什么以及你应该提供什么输入。

## 解决方案

[解决方案](../solution/solution.md)

## 知识检验

**问题：** 上下文窗口在生成式 AI 模型中的目的是什么？选择所有适用项。

A. 上下文窗口允许 AI 考虑更多上下文并生成更连贯的响应。

B. 上下文窗口是 AI 用来生成响应的先前消息数量。

C. 上下文窗口决定了 AI 响应的创造性程度。

[测验解决方案](../solution/solution-quiz.md)

## 自学资源

- [文本生成](https://platform.openai.com/docs/guides/text-generation)
- [OpenAI 的 JavaScript 库](https://github.com/openai/openai-node/tree/master/examples)
- [Tokenizer](https://platform.openai.com/tokenizer)
- [Completion API](https://platform.openai.com/docs/api-reference/completions)
- [聊天完成](https://platform.openai.com/docs/guides/text-generation#text-generation-models)

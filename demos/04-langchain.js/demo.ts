import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

type Joke = { joke: string };

const model = new ChatOpenAI({ model: "gpt-4o" });
const prompt = ChatPromptTemplate.fromTemplate("Tell me a joke about {topic}. Answer with valid JSON, containing one field: 'joke'");
const parser = new JsonOutputParser<Joke>();

const chain = prompt
  .pipe(model)
  .pipe(parser);

const { joke } = await chain.invoke({ topic: "bears" });
console.log(joke);

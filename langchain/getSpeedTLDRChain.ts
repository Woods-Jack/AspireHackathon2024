import { ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { getSpeedTLDRPrompt } from "./prompts/getSpeedTLDRTemplate";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";


export const getSpeedTLDRChain = (vectorStore: PineconeStore) => {
  console.log("Getting tldr chain");
  const model = new ChatOpenAI({
    temperature: 0.5,
    modelName: 'gpt-3.5-turbo-0613',
  });

  const GET_SPEED_TLDR_PROMPT = getSpeedTLDRPrompt;

  return RunnableSequence.from([
    {
      question: new RunnablePassthrough(),
    },
    GET_SPEED_TLDR_PROMPT,
    model,
  ]);
}
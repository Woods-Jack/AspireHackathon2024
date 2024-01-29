import { ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { PromptTemplate } from "@langchain/core/prompts";
import { condenseQuestionPrompt } from "./prompts/condenseQuestionTemplate";
import { getItineraryPrompt } from "./prompts/getItineraryTemplate";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { format } from "path";

interface ItineraryInput {
  budget: string;
  preferences: string;
  length_of_stay: string,
}

export const getItineraryChain = (vectorStore: PineconeStore) => {
  console.log("Getting itinerary chain");
  const model = new ChatOpenAI({
    temperature: 0.5,
    modelName: 'gpt-3.5-turbo',
  });

  const retriever = vectorStore.asRetriever();
  const CONDENSE_QUESTION_PROMPT = condenseQuestionPrompt;
  const GET_ITINERARY_PROMPT = getItineraryPrompt;

  return RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    GET_ITINERARY_PROMPT,
    model,
  ]);
}
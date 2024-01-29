import { AzureChatOpenAI, ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { PromptTemplate } from "@langchain/core/prompts";
import { condenseQuestionPrompt } from "./prompts/condenseQuestionTemplate";
import { getItineraryPrompt } from "./prompts/getItineraryTemplate";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { format } from "path";
import { JsonOutputFunctionsParser, StructuredOutputParser } from "langchain/output_parsers";
import { itinerarySchema } from "./outputSchemas/itinerary";
import zodToJsonSchema from "zod-to-json-schema";

interface ItineraryInput {
  budget: string;
  preferences: string;
  length_of_stay: string,
}

export const getItineraryChain = (vectorStore: PineconeStore) => {
  console.log("Getting itinerary chain");
  const model = new ChatOpenAI({
    temperature: 0.5,
    modelName: 'gpt-3.5-turbo-0613',
  });

  const retriever = vectorStore.asRetriever();
  const CONDENSE_QUESTION_PROMPT = condenseQuestionPrompt;
  const GET_ITINERARY_PROMPT = getItineraryPrompt;

  const functionCallingModel = model.bind({
    functions: [
      {
        name: "output_formatter",
        description: "Should always be used to properly format the output",
        parameters: zodToJsonSchema(itinerarySchema)
      },
    ],
    function_call: { name: 'output_formatter' }
  })

  const outputParser = new JsonOutputFunctionsParser();

  return RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    GET_ITINERARY_PROMPT,
    functionCallingModel,
    outputParser,
  ]);
}
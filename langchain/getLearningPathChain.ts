import { AzureChatOpenAI, ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { PromptTemplate } from "@langchain/core/prompts";
import { condenseQuestionPrompt } from "./prompts/condenseQuestionTemplate";
import { getLearningPathPrompt } from "./prompts/getLearningPathTemplate";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { format } from "path";
import { JsonOutputFunctionsParser, StructuredOutputParser } from "langchain/output_parsers";
import { learningPathSchema } from "./outputSchemas/learningPath";
import zodToJsonSchema from "zod-to-json-schema";


export const getLearningPathChain = (vectorStore: PineconeStore) => {
  console.log("Getting itinerary chain");
  const model = new ChatOpenAI({
    temperature: 0.7,
    modelName: 'gpt-3.5-turbo-0613',
  });

  const retriever = vectorStore.asRetriever(10);
  const GET_LEARNING_PATH_PROMPT = getLearningPathPrompt;
  console.log('prompt', getLearningPathPrompt)
  const functionCallingModel = model.bind({
    functions: [
      {
        name: "output_formatter",
        description: "Should always be used to properly format the output",
        parameters: zodToJsonSchema(learningPathSchema)
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
    GET_LEARNING_PATH_PROMPT,
    functionCallingModel,
    outputParser,
  ]);
}
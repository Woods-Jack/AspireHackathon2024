import { PromptTemplate } from "@langchain/core/prompts";

const condenseQuestionTemplate = `
  Given the following conversation and some follow-up feedback from the user, rephrase the follow up input to be a standalone question, in its original language.

  Chat History:
  {chat_history}

  Follow Up Input: {question}

  Standalone question:
`;

export const condenseQuestionPrompt = PromptTemplate.fromTemplate(condenseQuestionTemplate);
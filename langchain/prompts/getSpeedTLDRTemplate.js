import { PromptTemplate } from "@langchain/core/prompts";

const getSpeedTLDRTemplate = `
  You are an intelligent AI assistant who is an expert at summarising information.
  You will be a given a list of course descriptions that an employee is taking as part of their learning path.
  Your job is to summarise how this employee is learning to collaborate with colleagues in other SPEED capabilities.
  SPEED stands for Strategy, Product, Experience, Engineering and Data and encompasses the following:
    Strategy identifies value pools and initial value proposition hypotheses
    Product executes at pace and scale, connecting all our capabilities to learn and deliver value	
    Experience enables customer value with great interactions	
    Engineering delivers the underlying technology platforms with quality and velocity	
    Data uncovers insights to test hypotheses and constantly iterate


  {question}
`;

export const getSpeedTLDRPrompt = PromptTemplate.fromTemplate(getSpeedTLDRTemplate);
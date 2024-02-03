import { PromptTemplate } from "@langchain/core/prompts";

const getSpeedTLDRTemplate = `
  You are an intelligent AI assistant who is an expert at summarising information.
  You will be given a list of course descriptions that an employee is taking as part of their learning path.
  Your job is to write a short summary explaining how these courses will help an employee collaborate with people in other SPEED capabilities.
  Write your response as a few sentences written in the second person (e.g. you, your). You do not need to summarise each individual course.
  DO NOT include a final summary sentence. DO NOT use the employee's name.

  Use this information about SPEED capabilities to inform your answer:
  SPEED stands for Strategy, Product, Experience, Engineering and Data and encompasses the following:
    - Strategy identifies value pools and initial value proposition hypotheses
    - Product executes at pace and scale, connecting all our capabilities to learn and deliver value	
    - Experience enables customer value with great interactions	
    - Engineering delivers the underlying technology platforms with quality and velocity	
    - Data uncovers insights to test hypotheses and constantly iterate

  Course descriptions:
  """
  {question}
  """
`;

export const getSpeedTLDRPrompt = PromptTemplate.fromTemplate(getSpeedTLDRTemplate);
import { z } from 'zod';

export const learningPathSchema = z.object({
  learningPath: z.array(
    z.object({
      id: z.number().describe("The ID of the course"),
      title: z.string().describe("The name of the coure"),
      length: z.string().describe("The approximate length of the course in hours"),
      image: z.string().describe("A URL link to the course cover image"),
      description: z.string().describe("A customised description of the course and why it is relevant to the employee")
    })
    .describe("The list of relevant courses assigned to the employee, from highest to lowest priority.")
  )
})

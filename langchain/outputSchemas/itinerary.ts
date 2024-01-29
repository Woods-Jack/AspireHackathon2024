import { z } from 'zod';

export const itinerarySchema = z.object({
  title: z.string().describe("The title of the generated itinerary"),
  numberOfDays: z.string().describe("The number of days covered by the itinerary"),
  location: z.string().describe("The location that the itinerary is about"),
  activities: z
    .array(
      z.object({
        title: z.string().describe("The title of the activity"),
        length: z.string().describe("The number of hours required for this activity"),
        description: z.string().describe("A description of the activity")
      })
    )
    .describe("The activities chosen as part of the itinerary")
})

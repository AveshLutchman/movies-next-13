import { z } from 'zod';

/////////////////////////////////////////
// MOVIE AWARDS SCHEMA
/////////////////////////////////////////

export const MovieAwardsSchema = z.object({
  nominations: z.number().int(),
  text: z.string(),
  wins: z.number().int(),
})

export type MovieAwards = z.infer<typeof MovieAwardsSchema>

export default MovieAwardsSchema;

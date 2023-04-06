import { z } from 'zod';

/////////////////////////////////////////
// MOVIE TOMATOES CRITIC SCHEMA
/////////////////////////////////////////

export const MovieTomatoesCriticSchema = z.object({
  meter: z.number().int().nullable(),
  numReviews: z.number().int(),
  rating: z.number().nullable(),
})

export type MovieTomatoesCritic = z.infer<typeof MovieTomatoesCriticSchema>

export default MovieTomatoesCriticSchema;

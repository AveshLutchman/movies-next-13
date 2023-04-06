import { z } from 'zod';

/////////////////////////////////////////
// MOVIE TOMATOES SCHEMA
/////////////////////////////////////////

export const MovieTomatoesSchema = z.object({
  boxOffice: z.string().nullable(),
  consensus: z.string().nullable(),
  dvd: z.coerce.date().nullable(),
  fresh: z.number().int().nullable(),
  lastUpdated: z.coerce.date(),
  production: z.string().nullable(),
  rotten: z.number().int().nullable(),
  website: z.string().nullable(),
})

export type MovieTomatoes = z.infer<typeof MovieTomatoesSchema>

export default MovieTomatoesSchema;

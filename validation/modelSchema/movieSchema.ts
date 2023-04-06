import { z } from 'zod';
import { InputJsonValue } from './InputJsonValue';

/////////////////////////////////////////
// MOVIE SCHEMA
/////////////////////////////////////////

export const movieSchema = z.object({
  id: z.string(),
  cast: z.string().array(),
  countries: z.string().array(),
  directors: z.string().array(),
  fullplot: z.string().nullable(),
  genres: z.string().array(),
  languages: z.string().array(),
  lastupdated: z.string(),
  metacritic: z.number().int().nullable(),
  num_mflix_comments: z.number().int(),
  plot: z.string().nullable(),
  poster: z.string().nullable(),
  rated: z.string().nullable(),
  released: z.coerce.date().nullable(),
  runtime: z.number().int().nullable(),
  title: z.string(),
  type: z.string(),
  writers: z.string().array(),
  /**
   * Multiple data types found: String: 0.1%, Int: 99.9% out of 1000 sampled entries
   */
  year: InputJsonValue,
})

export type movie = z.infer<typeof movieSchema>

export default movieSchema;

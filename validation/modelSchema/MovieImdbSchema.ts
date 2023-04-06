import { z } from 'zod';
import { InputJsonValue } from "./InputJsonValue"

/////////////////////////////////////////
// MOVIE IMDB SCHEMA
/////////////////////////////////////////

export const MovieImdbSchema = z.object({
  id: z.number().int(),
  rating: InputJsonValue,
  votes: InputJsonValue,
})

export type MovieImdb = z.infer<typeof MovieImdbSchema>

export default MovieImdbSchema;

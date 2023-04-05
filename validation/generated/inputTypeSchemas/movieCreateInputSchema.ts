import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieAwardsCreateEnvelopeInputSchema } from './MovieAwardsCreateEnvelopeInputSchema';
import { MovieAwardsCreateInputSchema } from './MovieAwardsCreateInputSchema';
import { movieCreatecastInputSchema } from './movieCreatecastInputSchema';
import { movieCreatecountriesInputSchema } from './movieCreatecountriesInputSchema';
import { movieCreatedirectorsInputSchema } from './movieCreatedirectorsInputSchema';
import { movieCreategenresInputSchema } from './movieCreategenresInputSchema';
import { MovieImdbCreateEnvelopeInputSchema } from './MovieImdbCreateEnvelopeInputSchema';
import { MovieImdbCreateInputSchema } from './MovieImdbCreateInputSchema';
import { movieCreatelanguagesInputSchema } from './movieCreatelanguagesInputSchema';
import { MovieTomatoesNullableCreateEnvelopeInputSchema } from './MovieTomatoesNullableCreateEnvelopeInputSchema';
import { MovieTomatoesCreateInputSchema } from './MovieTomatoesCreateInputSchema';
import { movieCreatewritersInputSchema } from './movieCreatewritersInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const movieCreateInputSchema: z.ZodType<Prisma.movieCreateInput> = z.object({
  id: z.string().optional(),
  awards: z.union([ z.lazy(() => MovieAwardsCreateEnvelopeInputSchema),z.lazy(() => MovieAwardsCreateInputSchema) ]),
  cast: z.union([ z.lazy(() => movieCreatecastInputSchema),z.string().array() ]).optional(),
  countries: z.union([ z.lazy(() => movieCreatecountriesInputSchema),z.string().array() ]).optional(),
  directors: z.union([ z.lazy(() => movieCreatedirectorsInputSchema),z.string().array() ]).optional(),
  fullplot: z.string().optional().nullable(),
  genres: z.union([ z.lazy(() => movieCreategenresInputSchema),z.string().array() ]).optional(),
  imdb: z.union([ z.lazy(() => MovieImdbCreateEnvelopeInputSchema),z.lazy(() => MovieImdbCreateInputSchema) ]),
  languages: z.union([ z.lazy(() => movieCreatelanguagesInputSchema),z.string().array() ]).optional(),
  lastupdated: z.string(),
  metacritic: z.number().int().optional().nullable(),
  num_mflix_comments: z.number().int(),
  plot: z.string().optional().nullable(),
  poster: z.string().optional().nullable(),
  rated: z.string().optional().nullable(),
  released: z.coerce.date().optional().nullable(),
  runtime: z.number().int().optional().nullable(),
  title: z.string(),
  tomatoes: z.union([ z.lazy(() => MovieTomatoesNullableCreateEnvelopeInputSchema),z.lazy(() => MovieTomatoesCreateInputSchema) ]).optional().nullable(),
  type: z.string(),
  writers: z.union([ z.lazy(() => movieCreatewritersInputSchema),z.string().array() ]).optional(),
  year: InputJsonValue
}).strict();

export default movieCreateInputSchema;

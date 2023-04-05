import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieAwardsArgsSchema } from "../outputTypeSchemas/MovieAwardsArgsSchema"
import { MovieImdbArgsSchema } from "../outputTypeSchemas/MovieImdbArgsSchema"
import { MovieTomatoesArgsSchema } from "../outputTypeSchemas/MovieTomatoesArgsSchema"

export const movieSelectSchema: z.ZodType<Prisma.movieSelect> = z.object({
  id: z.boolean().optional(),
  awards: z.union([z.boolean(),z.lazy(() => MovieAwardsArgsSchema)]).optional(),
  cast: z.boolean().optional(),
  countries: z.boolean().optional(),
  directors: z.boolean().optional(),
  fullplot: z.boolean().optional(),
  genres: z.boolean().optional(),
  imdb: z.union([z.boolean(),z.lazy(() => MovieImdbArgsSchema)]).optional(),
  languages: z.boolean().optional(),
  lastupdated: z.boolean().optional(),
  metacritic: z.boolean().optional(),
  num_mflix_comments: z.boolean().optional(),
  plot: z.boolean().optional(),
  poster: z.boolean().optional(),
  rated: z.boolean().optional(),
  released: z.boolean().optional(),
  runtime: z.boolean().optional(),
  title: z.boolean().optional(),
  tomatoes: z.union([z.boolean(),z.lazy(() => MovieTomatoesArgsSchema)]).optional(),
  type: z.boolean().optional(),
  writers: z.boolean().optional(),
  year: z.boolean().optional(),
}).strict()

export default movieSelectSchema;

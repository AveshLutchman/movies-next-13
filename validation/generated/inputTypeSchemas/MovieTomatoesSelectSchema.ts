import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieTomatoesCriticArgsSchema } from "../outputTypeSchemas/MovieTomatoesCriticArgsSchema"
import { MovieTomatoesViewerArgsSchema } from "../outputTypeSchemas/MovieTomatoesViewerArgsSchema"

export const MovieTomatoesSelectSchema: z.ZodType<Prisma.MovieTomatoesSelect> = z.object({
  boxOffice: z.boolean().optional(),
  consensus: z.boolean().optional(),
  critic: z.union([z.boolean(),z.lazy(() => MovieTomatoesCriticArgsSchema)]).optional(),
  dvd: z.boolean().optional(),
  fresh: z.boolean().optional(),
  lastUpdated: z.boolean().optional(),
  production: z.boolean().optional(),
  rotten: z.boolean().optional(),
  viewer: z.union([z.boolean(),z.lazy(() => MovieTomatoesViewerArgsSchema)]).optional(),
  website: z.boolean().optional(),
}).strict()

export default MovieTomatoesSelectSchema;

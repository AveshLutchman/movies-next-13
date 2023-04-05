import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieTomatoesSelectSchema } from '../inputTypeSchemas/MovieTomatoesSelectSchema';
import { MovieTomatoesIncludeSchema } from '../inputTypeSchemas/MovieTomatoesIncludeSchema';

export const MovieTomatoesArgsSchema: z.ZodType<Prisma.MovieTomatoesArgs> = z.object({
  select: z.lazy(() => MovieTomatoesSelectSchema).optional(),
  include: z.lazy(() => MovieTomatoesIncludeSchema).optional(),
}).strict();

export default MovieTomatoesArgsSchema;

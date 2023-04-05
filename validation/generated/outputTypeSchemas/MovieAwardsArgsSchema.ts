import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieAwardsSelectSchema } from '../inputTypeSchemas/MovieAwardsSelectSchema';
import { MovieAwardsIncludeSchema } from '../inputTypeSchemas/MovieAwardsIncludeSchema';

export const MovieAwardsArgsSchema: z.ZodType<Prisma.MovieAwardsArgs> = z.object({
  select: z.lazy(() => MovieAwardsSelectSchema).optional(),
}).strict();

export default MovieAwardsArgsSchema;

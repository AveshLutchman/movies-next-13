import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieTomatoesCriticSelectSchema } from '../inputTypeSchemas/MovieTomatoesCriticSelectSchema';
import { MovieTomatoesCriticIncludeSchema } from '../inputTypeSchemas/MovieTomatoesCriticIncludeSchema';

export const MovieTomatoesCriticArgsSchema: z.ZodType<Prisma.MovieTomatoesCriticArgs> = z.object({
  select: z.lazy(() => MovieTomatoesCriticSelectSchema).optional(),
}).strict();

export default MovieTomatoesCriticArgsSchema;

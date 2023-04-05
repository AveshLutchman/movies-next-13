import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCriticCreateInputSchema } from './MovieTomatoesCriticCreateInputSchema';
import { MovieTomatoesCriticUpdateInputSchema } from './MovieTomatoesCriticUpdateInputSchema';

export const MovieTomatoesCriticUpsertInputSchema: z.ZodType<Prisma.MovieTomatoesCriticUpsertInput> = z.object({
  set: z.lazy(() => MovieTomatoesCriticCreateInputSchema).nullable(),
  update: z.lazy(() => MovieTomatoesCriticUpdateInputSchema)
}).strict();

export default MovieTomatoesCriticUpsertInputSchema;

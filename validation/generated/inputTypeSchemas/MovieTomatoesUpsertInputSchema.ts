import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCreateInputSchema } from './MovieTomatoesCreateInputSchema';
import { MovieTomatoesUpdateInputSchema } from './MovieTomatoesUpdateInputSchema';

export const MovieTomatoesUpsertInputSchema: z.ZodType<Prisma.MovieTomatoesUpsertInput> = z.object({
  set: z.lazy(() => MovieTomatoesCreateInputSchema).nullable(),
  update: z.lazy(() => MovieTomatoesUpdateInputSchema)
}).strict();

export default MovieTomatoesUpsertInputSchema;

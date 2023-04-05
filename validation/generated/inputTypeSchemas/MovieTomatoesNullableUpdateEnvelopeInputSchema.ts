import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCreateInputSchema } from './MovieTomatoesCreateInputSchema';
import { MovieTomatoesUpsertInputSchema } from './MovieTomatoesUpsertInputSchema';

export const MovieTomatoesNullableUpdateEnvelopeInputSchema: z.ZodType<Prisma.MovieTomatoesNullableUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieTomatoesCreateInputSchema).optional().nullable(),
  upsert: z.lazy(() => MovieTomatoesUpsertInputSchema).optional(),
  unset: z.boolean().optional()
}).strict();

export default MovieTomatoesNullableUpdateEnvelopeInputSchema;

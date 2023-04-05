import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCriticCreateInputSchema } from './MovieTomatoesCriticCreateInputSchema';
import { MovieTomatoesCriticUpsertInputSchema } from './MovieTomatoesCriticUpsertInputSchema';

export const MovieTomatoesCriticNullableUpdateEnvelopeInputSchema: z.ZodType<Prisma.MovieTomatoesCriticNullableUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieTomatoesCriticCreateInputSchema).optional().nullable(),
  upsert: z.lazy(() => MovieTomatoesCriticUpsertInputSchema).optional(),
  unset: z.boolean().optional()
}).strict();

export default MovieTomatoesCriticNullableUpdateEnvelopeInputSchema;

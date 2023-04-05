import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieAwardsCreateInputSchema } from './MovieAwardsCreateInputSchema';
import { MovieAwardsUpdateInputSchema } from './MovieAwardsUpdateInputSchema';

export const MovieAwardsUpdateEnvelopeInputSchema: z.ZodType<Prisma.MovieAwardsUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieAwardsCreateInputSchema).optional(),
  update: z.lazy(() => MovieAwardsUpdateInputSchema).optional()
}).strict();

export default MovieAwardsUpdateEnvelopeInputSchema;

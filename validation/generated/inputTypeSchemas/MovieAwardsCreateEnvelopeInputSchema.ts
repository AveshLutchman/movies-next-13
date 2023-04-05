import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieAwardsCreateInputSchema } from './MovieAwardsCreateInputSchema';

export const MovieAwardsCreateEnvelopeInputSchema: z.ZodType<Prisma.MovieAwardsCreateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieAwardsCreateInputSchema).optional()
}).strict();

export default MovieAwardsCreateEnvelopeInputSchema;

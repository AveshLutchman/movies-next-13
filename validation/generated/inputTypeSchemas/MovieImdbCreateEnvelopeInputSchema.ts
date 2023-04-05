import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieImdbCreateInputSchema } from './MovieImdbCreateInputSchema';

export const MovieImdbCreateEnvelopeInputSchema: z.ZodType<Prisma.MovieImdbCreateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieImdbCreateInputSchema).optional()
}).strict();

export default MovieImdbCreateEnvelopeInputSchema;

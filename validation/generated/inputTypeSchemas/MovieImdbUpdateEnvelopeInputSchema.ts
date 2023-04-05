import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieImdbCreateInputSchema } from './MovieImdbCreateInputSchema';
import { MovieImdbUpdateInputSchema } from './MovieImdbUpdateInputSchema';

export const MovieImdbUpdateEnvelopeInputSchema: z.ZodType<Prisma.MovieImdbUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieImdbCreateInputSchema).optional(),
  update: z.lazy(() => MovieImdbUpdateInputSchema).optional()
}).strict();

export default MovieImdbUpdateEnvelopeInputSchema;

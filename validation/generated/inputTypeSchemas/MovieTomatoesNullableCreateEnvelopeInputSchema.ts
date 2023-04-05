import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCreateInputSchema } from './MovieTomatoesCreateInputSchema';

export const MovieTomatoesNullableCreateEnvelopeInputSchema: z.ZodType<Prisma.MovieTomatoesNullableCreateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieTomatoesCreateInputSchema).optional().nullable()
}).strict();

export default MovieTomatoesNullableCreateEnvelopeInputSchema;

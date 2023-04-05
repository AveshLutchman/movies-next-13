import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesViewerCreateInputSchema } from './MovieTomatoesViewerCreateInputSchema';
import { MovieTomatoesViewerUpdateInputSchema } from './MovieTomatoesViewerUpdateInputSchema';

export const MovieTomatoesViewerUpdateEnvelopeInputSchema: z.ZodType<Prisma.MovieTomatoesViewerUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => MovieTomatoesViewerCreateInputSchema).optional(),
  update: z.lazy(() => MovieTomatoesViewerUpdateInputSchema).optional()
}).strict();

export default MovieTomatoesViewerUpdateEnvelopeInputSchema;

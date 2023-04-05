import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MovieTomatoesViewerObjectEqualityInputSchema: z.ZodType<Prisma.MovieTomatoesViewerObjectEqualityInput> = z.object({
  meter: z.number().optional().nullable(),
  numReviews: z.number(),
  rating: z.number()
}).strict();

export default MovieTomatoesViewerObjectEqualityInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MovieTomatoesViewerCreateInputSchema: z.ZodType<Prisma.MovieTomatoesViewerCreateInput> = z.object({
  meter: z.number().optional().nullable(),
  numReviews: z.number(),
  rating: z.number()
}).strict();

export default MovieTomatoesViewerCreateInputSchema;

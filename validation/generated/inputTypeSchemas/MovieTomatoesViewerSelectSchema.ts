import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MovieTomatoesViewerSelectSchema: z.ZodType<Prisma.MovieTomatoesViewerSelect> = z.object({
  meter: z.boolean().optional(),
  numReviews: z.boolean().optional(),
  rating: z.boolean().optional(),
}).strict()

export default MovieTomatoesViewerSelectSchema;

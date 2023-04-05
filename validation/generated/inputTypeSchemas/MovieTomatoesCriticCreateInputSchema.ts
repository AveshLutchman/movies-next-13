import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MovieTomatoesCriticCreateInputSchema: z.ZodType<Prisma.MovieTomatoesCriticCreateInput> = z.object({
  meter: z.number().optional().nullable(),
  numReviews: z.number(),
  rating: z.number().optional().nullable()
}).strict();

export default MovieTomatoesCriticCreateInputSchema;

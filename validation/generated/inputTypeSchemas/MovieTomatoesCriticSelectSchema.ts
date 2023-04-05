import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MovieTomatoesCriticSelectSchema: z.ZodType<Prisma.MovieTomatoesCriticSelect> = z.object({
  meter: z.boolean().optional(),
  numReviews: z.boolean().optional(),
  rating: z.boolean().optional(),
}).strict()

export default MovieTomatoesCriticSelectSchema;

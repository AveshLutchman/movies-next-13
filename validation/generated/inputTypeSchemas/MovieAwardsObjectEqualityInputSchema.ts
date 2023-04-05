import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MovieAwardsObjectEqualityInputSchema: z.ZodType<Prisma.MovieAwardsObjectEqualityInput> = z.object({
  nominations: z.number(),
  text: z.string(),
  wins: z.number()
}).strict();

export default MovieAwardsObjectEqualityInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const MovieAwardsCreateInputSchema: z.ZodType<Prisma.MovieAwardsCreateInput> = z.object({
  nominations: z.number(),
  text: z.string(),
  wins: z.number()
}).strict();

export default MovieAwardsCreateInputSchema;

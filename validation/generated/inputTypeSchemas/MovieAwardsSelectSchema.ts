import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MovieAwardsSelectSchema: z.ZodType<Prisma.MovieAwardsSelect> = z.object({
  nominations: z.boolean().optional(),
  text: z.boolean().optional(),
  wins: z.boolean().optional(),
}).strict()

export default MovieAwardsSelectSchema;

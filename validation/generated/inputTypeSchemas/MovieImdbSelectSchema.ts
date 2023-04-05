import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MovieImdbSelectSchema: z.ZodType<Prisma.MovieImdbSelect> = z.object({
  id: z.boolean().optional(),
  rating: z.boolean().optional(),
  votes: z.boolean().optional(),
}).strict()

export default MovieImdbSelectSchema;

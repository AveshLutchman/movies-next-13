import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieCreatedirectorsInputSchema: z.ZodType<Prisma.movieCreatedirectorsInput> = z.object({
  set: z.string().array()
}).strict();

export default movieCreatedirectorsInputSchema;

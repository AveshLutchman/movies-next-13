import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieUpdatedirectorsInputSchema: z.ZodType<Prisma.movieUpdatedirectorsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default movieUpdatedirectorsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieCreatewritersInputSchema: z.ZodType<Prisma.movieCreatewritersInput> = z.object({
  set: z.string().array()
}).strict();

export default movieCreatewritersInputSchema;

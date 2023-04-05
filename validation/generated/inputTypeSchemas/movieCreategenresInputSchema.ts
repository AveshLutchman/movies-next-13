import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieCreategenresInputSchema: z.ZodType<Prisma.movieCreategenresInput> = z.object({
  set: z.string().array()
}).strict();

export default movieCreategenresInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieCreatecastInputSchema: z.ZodType<Prisma.movieCreatecastInput> = z.object({
  set: z.string().array()
}).strict();

export default movieCreatecastInputSchema;

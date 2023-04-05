import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieCreatecountriesInputSchema: z.ZodType<Prisma.movieCreatecountriesInput> = z.object({
  set: z.string().array()
}).strict();

export default movieCreatecountriesInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieCreatelanguagesInputSchema: z.ZodType<Prisma.movieCreatelanguagesInput> = z.object({
  set: z.string().array()
}).strict();

export default movieCreatelanguagesInputSchema;

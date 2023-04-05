import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const movieWhereUniqueInputSchema: z.ZodType<Prisma.movieWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export default movieWhereUniqueInputSchema;

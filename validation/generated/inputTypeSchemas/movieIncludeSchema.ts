import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const movieIncludeSchema: z.ZodType<Prisma.movieInclude> = z.object({
}).strict()

export default movieIncludeSchema;

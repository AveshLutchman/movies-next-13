import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { movieSelectSchema } from '../inputTypeSchemas/movieSelectSchema';
import { movieIncludeSchema } from '../inputTypeSchemas/movieIncludeSchema';

export const movieArgsSchema: z.ZodType<Prisma.movieArgs> = z.object({
  select: z.lazy(() => movieSelectSchema).optional(),
  include: z.lazy(() => movieIncludeSchema).optional(),
}).strict();

export default movieArgsSchema;

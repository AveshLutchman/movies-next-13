import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { movieWhereInputSchema } from '../inputTypeSchemas/movieWhereInputSchema'

export const movieDeleteManyArgsSchema: z.ZodType<Prisma.movieDeleteManyArgs> = z.object({
  where: movieWhereInputSchema.optional(),
}).strict()

export default movieDeleteManyArgsSchema;

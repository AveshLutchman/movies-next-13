import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { movieUpdateManyMutationInputSchema } from '../inputTypeSchemas/movieUpdateManyMutationInputSchema'
import { movieUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/movieUncheckedUpdateManyInputSchema'
import { movieWhereInputSchema } from '../inputTypeSchemas/movieWhereInputSchema'

export const movieUpdateManyArgsSchema: z.ZodType<Prisma.movieUpdateManyArgs> = z.object({
  data: z.union([ movieUpdateManyMutationInputSchema,movieUncheckedUpdateManyInputSchema ]),
  where: movieWhereInputSchema.optional(),
}).strict()

export default movieUpdateManyArgsSchema;

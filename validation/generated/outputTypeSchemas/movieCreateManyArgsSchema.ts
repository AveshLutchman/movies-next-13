import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { movieCreateManyInputSchema } from '../inputTypeSchemas/movieCreateManyInputSchema'

export const movieCreateManyArgsSchema: z.ZodType<Prisma.movieCreateManyArgs> = z.object({
  data: z.union([ movieCreateManyInputSchema,movieCreateManyInputSchema.array() ]),
}).strict()

export default movieCreateManyArgsSchema;

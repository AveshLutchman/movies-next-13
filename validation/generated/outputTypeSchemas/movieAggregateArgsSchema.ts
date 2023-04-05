import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { movieWhereInputSchema } from '../inputTypeSchemas/movieWhereInputSchema'
import { movieOrderByWithRelationInputSchema } from '../inputTypeSchemas/movieOrderByWithRelationInputSchema'
import { movieWhereUniqueInputSchema } from '../inputTypeSchemas/movieWhereUniqueInputSchema'

export const movieAggregateArgsSchema: z.ZodType<Prisma.movieAggregateArgs> = z.object({
  where: movieWhereInputSchema.optional(),
  orderBy: z.union([ movieOrderByWithRelationInputSchema.array(),movieOrderByWithRelationInputSchema ]).optional(),
  cursor: movieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default movieAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { movieWhereInputSchema } from '../inputTypeSchemas/movieWhereInputSchema'
import { movieOrderByWithAggregationInputSchema } from '../inputTypeSchemas/movieOrderByWithAggregationInputSchema'
import { MovieScalarFieldEnumSchema } from '../inputTypeSchemas/MovieScalarFieldEnumSchema'
import { movieScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/movieScalarWhereWithAggregatesInputSchema'

export const movieGroupByArgsSchema: z.ZodType<Prisma.movieGroupByArgs> = z.object({
  where: movieWhereInputSchema.optional(),
  orderBy: z.union([ movieOrderByWithAggregationInputSchema.array(),movieOrderByWithAggregationInputSchema ]).optional(),
  by: MovieScalarFieldEnumSchema.array(),
  having: movieScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default movieGroupByArgsSchema;

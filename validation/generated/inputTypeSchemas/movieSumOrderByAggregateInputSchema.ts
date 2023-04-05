import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const movieSumOrderByAggregateInputSchema: z.ZodType<Prisma.movieSumOrderByAggregateInput> = z.object({
  metacritic: z.lazy(() => SortOrderSchema).optional(),
  num_mflix_comments: z.lazy(() => SortOrderSchema).optional(),
  runtime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default movieSumOrderByAggregateInputSchema;

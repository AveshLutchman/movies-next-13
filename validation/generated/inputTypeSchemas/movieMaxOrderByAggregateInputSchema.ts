import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const movieMaxOrderByAggregateInputSchema: z.ZodType<Prisma.movieMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullplot: z.lazy(() => SortOrderSchema).optional(),
  lastupdated: z.lazy(() => SortOrderSchema).optional(),
  metacritic: z.lazy(() => SortOrderSchema).optional(),
  num_mflix_comments: z.lazy(() => SortOrderSchema).optional(),
  plot: z.lazy(() => SortOrderSchema).optional(),
  poster: z.lazy(() => SortOrderSchema).optional(),
  rated: z.lazy(() => SortOrderSchema).optional(),
  released: z.lazy(() => SortOrderSchema).optional(),
  runtime: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default movieMaxOrderByAggregateInputSchema;

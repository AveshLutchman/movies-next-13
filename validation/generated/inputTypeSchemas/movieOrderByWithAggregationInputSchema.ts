import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { movieCountOrderByAggregateInputSchema } from './movieCountOrderByAggregateInputSchema';
import { movieAvgOrderByAggregateInputSchema } from './movieAvgOrderByAggregateInputSchema';
import { movieMaxOrderByAggregateInputSchema } from './movieMaxOrderByAggregateInputSchema';
import { movieMinOrderByAggregateInputSchema } from './movieMinOrderByAggregateInputSchema';
import { movieSumOrderByAggregateInputSchema } from './movieSumOrderByAggregateInputSchema';

export const movieOrderByWithAggregationInputSchema: z.ZodType<Prisma.movieOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cast: z.lazy(() => SortOrderSchema).optional(),
  countries: z.lazy(() => SortOrderSchema).optional(),
  directors: z.lazy(() => SortOrderSchema).optional(),
  fullplot: z.lazy(() => SortOrderSchema).optional(),
  genres: z.lazy(() => SortOrderSchema).optional(),
  languages: z.lazy(() => SortOrderSchema).optional(),
  lastupdated: z.lazy(() => SortOrderSchema).optional(),
  metacritic: z.lazy(() => SortOrderSchema).optional(),
  num_mflix_comments: z.lazy(() => SortOrderSchema).optional(),
  plot: z.lazy(() => SortOrderSchema).optional(),
  poster: z.lazy(() => SortOrderSchema).optional(),
  rated: z.lazy(() => SortOrderSchema).optional(),
  released: z.lazy(() => SortOrderSchema).optional(),
  runtime: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  writers: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => movieCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => movieAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => movieMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => movieMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => movieSumOrderByAggregateInputSchema).optional()
}).strict();

export default movieOrderByWithAggregationInputSchema;

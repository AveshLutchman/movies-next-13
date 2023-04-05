import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const movieCountOrderByAggregateInputSchema: z.ZodType<Prisma.movieCountOrderByAggregateInput> = z.object({
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
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default movieCountOrderByAggregateInputSchema;

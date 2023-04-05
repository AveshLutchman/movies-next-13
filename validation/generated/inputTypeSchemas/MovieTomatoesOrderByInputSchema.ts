import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MovieTomatoesCriticOrderByInputSchema } from './MovieTomatoesCriticOrderByInputSchema';
import { MovieTomatoesViewerOrderByInputSchema } from './MovieTomatoesViewerOrderByInputSchema';

export const MovieTomatoesOrderByInputSchema: z.ZodType<Prisma.MovieTomatoesOrderByInput> = z.object({
  boxOffice: z.lazy(() => SortOrderSchema).optional(),
  consensus: z.lazy(() => SortOrderSchema).optional(),
  critic: z.lazy(() => MovieTomatoesCriticOrderByInputSchema).optional(),
  dvd: z.lazy(() => SortOrderSchema).optional(),
  fresh: z.lazy(() => SortOrderSchema).optional(),
  lastUpdated: z.lazy(() => SortOrderSchema).optional(),
  production: z.lazy(() => SortOrderSchema).optional(),
  rotten: z.lazy(() => SortOrderSchema).optional(),
  viewer: z.lazy(() => MovieTomatoesViewerOrderByInputSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MovieTomatoesOrderByInputSchema;

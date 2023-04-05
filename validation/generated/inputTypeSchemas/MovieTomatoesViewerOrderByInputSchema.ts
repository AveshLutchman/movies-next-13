import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MovieTomatoesViewerOrderByInputSchema: z.ZodType<Prisma.MovieTomatoesViewerOrderByInput> = z.object({
  meter: z.lazy(() => SortOrderSchema).optional(),
  numReviews: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MovieTomatoesViewerOrderByInputSchema;

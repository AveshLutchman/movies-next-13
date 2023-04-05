import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MovieTomatoesCriticOrderByInputSchema: z.ZodType<Prisma.MovieTomatoesCriticOrderByInput> = z.object({
  meter: z.lazy(() => SortOrderSchema).optional(),
  numReviews: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MovieTomatoesCriticOrderByInputSchema;

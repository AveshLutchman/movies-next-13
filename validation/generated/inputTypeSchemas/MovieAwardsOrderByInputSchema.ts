import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MovieAwardsOrderByInputSchema: z.ZodType<Prisma.MovieAwardsOrderByInput> = z.object({
  nominations: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MovieAwardsOrderByInputSchema;

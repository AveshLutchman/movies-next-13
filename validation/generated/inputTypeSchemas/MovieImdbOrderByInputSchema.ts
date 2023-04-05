import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MovieImdbOrderByInputSchema: z.ZodType<Prisma.MovieImdbOrderByInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MovieImdbOrderByInputSchema;

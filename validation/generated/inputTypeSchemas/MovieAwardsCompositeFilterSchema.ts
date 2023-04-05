import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieAwardsObjectEqualityInputSchema } from './MovieAwardsObjectEqualityInputSchema';
import { MovieAwardsWhereInputSchema } from './MovieAwardsWhereInputSchema';

export const MovieAwardsCompositeFilterSchema: z.ZodType<Prisma.MovieAwardsCompositeFilter> = z.object({
  equals: z.lazy(() => MovieAwardsObjectEqualityInputSchema).optional(),
  is: z.lazy(() => MovieAwardsWhereInputSchema).optional(),
  isNot: z.lazy(() => MovieAwardsWhereInputSchema).optional()
}).strict();

export default MovieAwardsCompositeFilterSchema;

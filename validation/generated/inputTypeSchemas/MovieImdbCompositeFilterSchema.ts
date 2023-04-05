import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieImdbObjectEqualityInputSchema } from './MovieImdbObjectEqualityInputSchema';
import { MovieImdbWhereInputSchema } from './MovieImdbWhereInputSchema';

export const MovieImdbCompositeFilterSchema: z.ZodType<Prisma.MovieImdbCompositeFilter> = z.object({
  equals: z.lazy(() => MovieImdbObjectEqualityInputSchema).optional(),
  is: z.lazy(() => MovieImdbWhereInputSchema).optional(),
  isNot: z.lazy(() => MovieImdbWhereInputSchema).optional()
}).strict();

export default MovieImdbCompositeFilterSchema;

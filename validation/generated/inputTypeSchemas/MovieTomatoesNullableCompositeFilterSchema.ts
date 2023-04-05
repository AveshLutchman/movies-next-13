import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesObjectEqualityInputSchema } from './MovieTomatoesObjectEqualityInputSchema';
import { MovieTomatoesWhereInputSchema } from './MovieTomatoesWhereInputSchema';

export const MovieTomatoesNullableCompositeFilterSchema: z.ZodType<Prisma.MovieTomatoesNullableCompositeFilter> = z.object({
  equals: z.lazy(() => MovieTomatoesObjectEqualityInputSchema).optional().nullable(),
  is: z.lazy(() => MovieTomatoesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MovieTomatoesWhereInputSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export default MovieTomatoesNullableCompositeFilterSchema;

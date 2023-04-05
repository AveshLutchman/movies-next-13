import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCriticObjectEqualityInputSchema } from './MovieTomatoesCriticObjectEqualityInputSchema';
import { MovieTomatoesCriticWhereInputSchema } from './MovieTomatoesCriticWhereInputSchema';

export const MovieTomatoesCriticNullableCompositeFilterSchema: z.ZodType<Prisma.MovieTomatoesCriticNullableCompositeFilter> = z.object({
  equals: z.lazy(() => MovieTomatoesCriticObjectEqualityInputSchema).optional().nullable(),
  is: z.lazy(() => MovieTomatoesCriticWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MovieTomatoesCriticWhereInputSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export default MovieTomatoesCriticNullableCompositeFilterSchema;

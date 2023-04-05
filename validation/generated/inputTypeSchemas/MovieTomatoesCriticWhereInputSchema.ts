import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const MovieTomatoesCriticWhereInputSchema: z.ZodType<Prisma.MovieTomatoesCriticWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieTomatoesCriticWhereInputSchema),z.lazy(() => MovieTomatoesCriticWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieTomatoesCriticWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieTomatoesCriticWhereInputSchema),z.lazy(() => MovieTomatoesCriticWhereInputSchema).array() ]).optional(),
  meter: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  numReviews: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rating: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default MovieTomatoesCriticWhereInputSchema;

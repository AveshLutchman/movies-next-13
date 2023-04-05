import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';

export const MovieTomatoesViewerWhereInputSchema: z.ZodType<Prisma.MovieTomatoesViewerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieTomatoesViewerWhereInputSchema),z.lazy(() => MovieTomatoesViewerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieTomatoesViewerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieTomatoesViewerWhereInputSchema),z.lazy(() => MovieTomatoesViewerWhereInputSchema).array() ]).optional(),
  meter: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  numReviews: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
}).strict();

export default MovieTomatoesViewerWhereInputSchema;

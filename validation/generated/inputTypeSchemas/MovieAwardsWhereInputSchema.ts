import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const MovieAwardsWhereInputSchema: z.ZodType<Prisma.MovieAwardsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieAwardsWhereInputSchema),z.lazy(() => MovieAwardsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieAwardsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieAwardsWhereInputSchema),z.lazy(() => MovieAwardsWhereInputSchema).array() ]).optional(),
  nominations: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  wins: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default MovieAwardsWhereInputSchema;

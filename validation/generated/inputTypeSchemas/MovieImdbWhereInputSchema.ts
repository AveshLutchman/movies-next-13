import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';

export const MovieImdbWhereInputSchema: z.ZodType<Prisma.MovieImdbWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieImdbWhereInputSchema),z.lazy(() => MovieImdbWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieImdbWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieImdbWhereInputSchema),z.lazy(() => MovieImdbWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rating: z.lazy(() => JsonFilterSchema).optional(),
  votes: z.lazy(() => JsonFilterSchema).optional()
}).strict();

export default MovieImdbWhereInputSchema;

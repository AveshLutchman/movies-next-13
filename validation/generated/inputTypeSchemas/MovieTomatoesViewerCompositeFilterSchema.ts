import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesViewerObjectEqualityInputSchema } from './MovieTomatoesViewerObjectEqualityInputSchema';
import { MovieTomatoesViewerWhereInputSchema } from './MovieTomatoesViewerWhereInputSchema';

export const MovieTomatoesViewerCompositeFilterSchema: z.ZodType<Prisma.MovieTomatoesViewerCompositeFilter> = z.object({
  equals: z.lazy(() => MovieTomatoesViewerObjectEqualityInputSchema).optional(),
  is: z.lazy(() => MovieTomatoesViewerWhereInputSchema).optional(),
  isNot: z.lazy(() => MovieTomatoesViewerWhereInputSchema).optional()
}).strict();

export default MovieTomatoesViewerCompositeFilterSchema;

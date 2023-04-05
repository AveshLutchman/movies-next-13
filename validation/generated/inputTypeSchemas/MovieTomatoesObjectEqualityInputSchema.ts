import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCriticObjectEqualityInputSchema } from './MovieTomatoesCriticObjectEqualityInputSchema';
import { MovieTomatoesViewerObjectEqualityInputSchema } from './MovieTomatoesViewerObjectEqualityInputSchema';

export const MovieTomatoesObjectEqualityInputSchema: z.ZodType<Prisma.MovieTomatoesObjectEqualityInput> = z.object({
  boxOffice: z.string().optional().nullable(),
  consensus: z.string().optional().nullable(),
  critic: z.lazy(() => MovieTomatoesCriticObjectEqualityInputSchema).optional().nullable(),
  dvd: z.coerce.date().optional().nullable(),
  fresh: z.number().optional().nullable(),
  lastUpdated: z.coerce.date(),
  production: z.string().optional().nullable(),
  rotten: z.number().optional().nullable(),
  viewer: z.lazy(() => MovieTomatoesViewerObjectEqualityInputSchema),
  website: z.string().optional().nullable()
}).strict();

export default MovieTomatoesObjectEqualityInputSchema;

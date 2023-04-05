import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieTomatoesCriticCreateInputSchema } from './MovieTomatoesCriticCreateInputSchema';
import { MovieTomatoesViewerCreateInputSchema } from './MovieTomatoesViewerCreateInputSchema';

export const MovieTomatoesCreateInputSchema: z.ZodType<Prisma.MovieTomatoesCreateInput> = z.object({
  boxOffice: z.string().optional().nullable(),
  consensus: z.string().optional().nullable(),
  critic: z.lazy(() => MovieTomatoesCriticCreateInputSchema).optional().nullable(),
  dvd: z.coerce.date().optional().nullable(),
  fresh: z.number().optional().nullable(),
  lastUpdated: z.coerce.date(),
  production: z.string().optional().nullable(),
  rotten: z.number().optional().nullable(),
  viewer: z.lazy(() => MovieTomatoesViewerCreateInputSchema),
  website: z.string().optional().nullable()
}).strict();

export default MovieTomatoesCreateInputSchema;

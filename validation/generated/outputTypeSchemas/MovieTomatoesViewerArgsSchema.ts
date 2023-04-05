import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieTomatoesViewerSelectSchema } from '../inputTypeSchemas/MovieTomatoesViewerSelectSchema';
import { MovieTomatoesViewerIncludeSchema } from '../inputTypeSchemas/MovieTomatoesViewerIncludeSchema';

export const MovieTomatoesViewerArgsSchema: z.ZodType<Prisma.MovieTomatoesViewerArgs> = z.object({
  select: z.lazy(() => MovieTomatoesViewerSelectSchema).optional(),
}).strict();

export default MovieTomatoesViewerArgsSchema;

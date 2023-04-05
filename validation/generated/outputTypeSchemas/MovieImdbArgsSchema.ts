import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MovieImdbSelectSchema } from '../inputTypeSchemas/MovieImdbSelectSchema';
import { MovieImdbIncludeSchema } from '../inputTypeSchemas/MovieImdbIncludeSchema';

export const MovieImdbArgsSchema: z.ZodType<Prisma.MovieImdbArgs> = z.object({
  select: z.lazy(() => MovieImdbSelectSchema).optional(),
}).strict();

export default MovieImdbArgsSchema;

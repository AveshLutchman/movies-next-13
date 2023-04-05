import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MovieTomatoesIncludeSchema: z.ZodType<Prisma.MovieTomatoesInclude> = z.object({
}).strict()

export default MovieTomatoesIncludeSchema;

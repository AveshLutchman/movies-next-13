import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InputJsonValue } from './InputJsonValue';

export const MovieImdbCreateInputSchema: z.ZodType<Prisma.MovieImdbCreateInput> = z.object({
  id: z.number(),
  rating: InputJsonValue,
  votes: InputJsonValue
}).strict();

export default MovieImdbCreateInputSchema;

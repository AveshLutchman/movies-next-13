import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InputJsonValue } from './InputJsonValue';

export const MovieImdbObjectEqualityInputSchema: z.ZodType<Prisma.MovieImdbObjectEqualityInput> = z.object({
  id: z.number(),
  rating: InputJsonValue,
  votes: InputJsonValue
}).strict();

export default MovieImdbObjectEqualityInputSchema;

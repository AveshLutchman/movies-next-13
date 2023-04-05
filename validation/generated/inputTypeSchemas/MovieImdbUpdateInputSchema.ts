import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const MovieImdbUpdateInputSchema: z.ZodType<Prisma.MovieImdbUpdateInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ InputJsonValue,InputJsonValue ]).optional(),
  votes: z.union([ InputJsonValue,InputJsonValue ]).optional(),
}).strict();

export default MovieImdbUpdateInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InputJsonValue } from './InputJsonValue';

export const NestedJsonFilterSchema: z.ZodType<Prisma.NestedJsonFilter> = z.object({
  equals: InputJsonValue.optional(),
  not: InputJsonValue.optional()
}).strict();

export default NestedJsonFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InputJsonValue } from './InputJsonValue';

export const JsonFilterSchema: z.ZodType<Prisma.JsonFilter> = z.object({
  equals: InputJsonValue.optional(),
  not: InputJsonValue.optional()
}).strict();

export default JsonFilterSchema;

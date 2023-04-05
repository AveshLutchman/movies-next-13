import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { InputJsonValue } from './InputJsonValue';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedJsonFilterSchema } from './NestedJsonFilterSchema';

export const JsonWithAggregatesFilterSchema: z.ZodType<Prisma.JsonWithAggregatesFilter> = z.object({
  equals: InputJsonValue.optional(),
  not: InputJsonValue.optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonFilterSchema).optional()
}).strict();

export default JsonWithAggregatesFilterSchema;

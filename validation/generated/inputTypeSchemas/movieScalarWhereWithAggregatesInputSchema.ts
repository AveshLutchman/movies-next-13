import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';

export const movieScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.movieScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => movieScalarWhereWithAggregatesInputSchema),z.lazy(() => movieScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => movieScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => movieScalarWhereWithAggregatesInputSchema),z.lazy(() => movieScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cast: z.lazy(() => StringNullableListFilterSchema).optional(),
  countries: z.lazy(() => StringNullableListFilterSchema).optional(),
  directors: z.lazy(() => StringNullableListFilterSchema).optional(),
  fullplot: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  genres: z.lazy(() => StringNullableListFilterSchema).optional(),
  languages: z.lazy(() => StringNullableListFilterSchema).optional(),
  lastupdated: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  metacritic: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  num_mflix_comments: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  plot: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  poster: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rated: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  released: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  runtime: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  writers: z.lazy(() => StringNullableListFilterSchema).optional(),
  year: z.lazy(() => JsonWithAggregatesFilterSchema).optional()
}).strict();

export default movieScalarWhereWithAggregatesInputSchema;

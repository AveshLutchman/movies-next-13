import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { MovieTomatoesCriticNullableCompositeFilterSchema } from './MovieTomatoesCriticNullableCompositeFilterSchema';
import { MovieTomatoesCriticObjectEqualityInputSchema } from './MovieTomatoesCriticObjectEqualityInputSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MovieTomatoesViewerCompositeFilterSchema } from './MovieTomatoesViewerCompositeFilterSchema';
import { MovieTomatoesViewerObjectEqualityInputSchema } from './MovieTomatoesViewerObjectEqualityInputSchema';

export const MovieTomatoesWhereInputSchema: z.ZodType<Prisma.MovieTomatoesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieTomatoesWhereInputSchema),z.lazy(() => MovieTomatoesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieTomatoesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieTomatoesWhereInputSchema),z.lazy(() => MovieTomatoesWhereInputSchema).array() ]).optional(),
  boxOffice: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  consensus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  critic: z.union([ z.lazy(() => MovieTomatoesCriticNullableCompositeFilterSchema),z.lazy(() => MovieTomatoesCriticObjectEqualityInputSchema) ]).optional().nullable(),
  dvd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  fresh: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  lastUpdated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  production: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rotten: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  viewer: z.union([ z.lazy(() => MovieTomatoesViewerCompositeFilterSchema),z.lazy(() => MovieTomatoesViewerObjectEqualityInputSchema) ]).optional(),
  website: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default MovieTomatoesWhereInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { MovieAwardsCompositeFilterSchema } from './MovieAwardsCompositeFilterSchema';
import { MovieAwardsObjectEqualityInputSchema } from './MovieAwardsObjectEqualityInputSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { MovieImdbCompositeFilterSchema } from './MovieImdbCompositeFilterSchema';
import { MovieImdbObjectEqualityInputSchema } from './MovieImdbObjectEqualityInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { MovieTomatoesNullableCompositeFilterSchema } from './MovieTomatoesNullableCompositeFilterSchema';
import { MovieTomatoesObjectEqualityInputSchema } from './MovieTomatoesObjectEqualityInputSchema';
import { JsonFilterSchema } from './JsonFilterSchema';

export const movieWhereInputSchema: z.ZodType<Prisma.movieWhereInput> = z.object({
  AND: z.union([ z.lazy(() => movieWhereInputSchema),z.lazy(() => movieWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => movieWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => movieWhereInputSchema),z.lazy(() => movieWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  awards: z.union([ z.lazy(() => MovieAwardsCompositeFilterSchema),z.lazy(() => MovieAwardsObjectEqualityInputSchema) ]).optional(),
  cast: z.lazy(() => StringNullableListFilterSchema).optional(),
  countries: z.lazy(() => StringNullableListFilterSchema).optional(),
  directors: z.lazy(() => StringNullableListFilterSchema).optional(),
  fullplot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genres: z.lazy(() => StringNullableListFilterSchema).optional(),
  imdb: z.union([ z.lazy(() => MovieImdbCompositeFilterSchema),z.lazy(() => MovieImdbObjectEqualityInputSchema) ]).optional(),
  languages: z.lazy(() => StringNullableListFilterSchema).optional(),
  lastupdated: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  metacritic: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  num_mflix_comments: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  plot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  poster: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rated: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  released: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  runtime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tomatoes: z.union([ z.lazy(() => MovieTomatoesNullableCompositeFilterSchema),z.lazy(() => MovieTomatoesObjectEqualityInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  writers: z.lazy(() => StringNullableListFilterSchema).optional(),
  year: z.lazy(() => JsonFilterSchema).optional()
}).strict();

export default movieWhereInputSchema;

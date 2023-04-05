import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MovieAwardsUpdateEnvelopeInputSchema } from './MovieAwardsUpdateEnvelopeInputSchema';
import { MovieAwardsCreateInputSchema } from './MovieAwardsCreateInputSchema';
import { movieUpdatecastInputSchema } from './movieUpdatecastInputSchema';
import { movieUpdatecountriesInputSchema } from './movieUpdatecountriesInputSchema';
import { movieUpdatedirectorsInputSchema } from './movieUpdatedirectorsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { movieUpdategenresInputSchema } from './movieUpdategenresInputSchema';
import { MovieImdbUpdateEnvelopeInputSchema } from './MovieImdbUpdateEnvelopeInputSchema';
import { MovieImdbCreateInputSchema } from './MovieImdbCreateInputSchema';
import { movieUpdatelanguagesInputSchema } from './movieUpdatelanguagesInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { MovieTomatoesNullableUpdateEnvelopeInputSchema } from './MovieTomatoesNullableUpdateEnvelopeInputSchema';
import { MovieTomatoesCreateInputSchema } from './MovieTomatoesCreateInputSchema';
import { movieUpdatewritersInputSchema } from './movieUpdatewritersInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const movieUpdateInputSchema: z.ZodType<Prisma.movieUpdateInput> = z.object({
  awards: z.union([ z.lazy(() => MovieAwardsUpdateEnvelopeInputSchema),z.lazy(() => MovieAwardsCreateInputSchema) ]).optional(),
  cast: z.union([ z.lazy(() => movieUpdatecastInputSchema),z.string().array() ]).optional(),
  countries: z.union([ z.lazy(() => movieUpdatecountriesInputSchema),z.string().array() ]).optional(),
  directors: z.union([ z.lazy(() => movieUpdatedirectorsInputSchema),z.string().array() ]).optional(),
  fullplot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genres: z.union([ z.lazy(() => movieUpdategenresInputSchema),z.string().array() ]).optional(),
  imdb: z.union([ z.lazy(() => MovieImdbUpdateEnvelopeInputSchema),z.lazy(() => MovieImdbCreateInputSchema) ]).optional(),
  languages: z.union([ z.lazy(() => movieUpdatelanguagesInputSchema),z.string().array() ]).optional(),
  lastupdated: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  metacritic: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  num_mflix_comments: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rated: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  released: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tomatoes: z.union([ z.lazy(() => MovieTomatoesNullableUpdateEnvelopeInputSchema),z.lazy(() => MovieTomatoesCreateInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  writers: z.union([ z.lazy(() => movieUpdatewritersInputSchema),z.string().array() ]).optional(),
  year: z.union([ InputJsonValue,InputJsonValue ]).optional(),
}).strict();

export default movieUpdateInputSchema;

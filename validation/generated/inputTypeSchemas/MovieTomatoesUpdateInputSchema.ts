import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { MovieTomatoesCriticNullableUpdateEnvelopeInputSchema } from './MovieTomatoesCriticNullableUpdateEnvelopeInputSchema';
import { MovieTomatoesCriticCreateInputSchema } from './MovieTomatoesCriticCreateInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MovieTomatoesViewerUpdateEnvelopeInputSchema } from './MovieTomatoesViewerUpdateEnvelopeInputSchema';
import { MovieTomatoesViewerCreateInputSchema } from './MovieTomatoesViewerCreateInputSchema';

export const MovieTomatoesUpdateInputSchema: z.ZodType<Prisma.MovieTomatoesUpdateInput> = z.object({
  boxOffice: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consensus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  critic: z.union([ z.lazy(() => MovieTomatoesCriticNullableUpdateEnvelopeInputSchema),z.lazy(() => MovieTomatoesCriticCreateInputSchema) ]).optional().nullable(),
  dvd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fresh: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastUpdated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  production: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rotten: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  viewer: z.union([ z.lazy(() => MovieTomatoesViewerUpdateEnvelopeInputSchema),z.lazy(() => MovieTomatoesViewerCreateInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default MovieTomatoesUpdateInputSchema;

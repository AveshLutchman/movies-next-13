import { z } from 'zod';

/////////////////////////////////////////
// MOVIE TOMATOES VIEWER SCHEMA
/////////////////////////////////////////

export const MovieTomatoesViewerSchema = z.object({
  meter: z.number().int().nullable(),
  numReviews: z.number().int(),
  rating: z.number(),
})

export type MovieTomatoesViewer = z.infer<typeof MovieTomatoesViewerSchema>

export default MovieTomatoesViewerSchema;

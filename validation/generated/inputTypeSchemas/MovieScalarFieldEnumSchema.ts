import { z } from 'zod';

export const MovieScalarFieldEnumSchema = z.enum(['id','cast','countries','directors','fullplot','genres','languages','lastupdated','metacritic','num_mflix_comments','plot','poster','rated','released','runtime','title','type','writers','year']);

export default MovieScalarFieldEnumSchema;

import React from 'react'

import { prisma } from "~/server/db";
import MovieModal from "~/app/components/MovieModal";
import Movie from "~/app/components/Movie";


export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const movie = await prisma.movie.findFirst({ where: { id } });

  return (
    <MovieModal>
      {movie && <Movie movie={movie} />}
    </MovieModal>
  );
}

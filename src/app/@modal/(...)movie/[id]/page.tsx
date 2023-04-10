import React from 'react'

import { prisma } from "~/server/db";
import Modal from "~/app/components/MovieModal";
import Movie from "~/app/components/Movie";


export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // const movie = await prisma.movie.findFirst({ where: { id } });
  return <p id={`photo-modal-${params.id}`}>MODAL {params.id}</p>

  // return (
  //   <Modal>
  //     {movie && <Movie movie={movie} />}
  //   </Modal>
  // );
}

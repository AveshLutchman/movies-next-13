import { prisma } from "~/server/db";

export async function generateStaticParams() {
  const movies = await prisma.movie.findMany({
    select: { id: true },
    take: 100,
  });

  return movies.map((movie) => ({
    movie: movie.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params

  const movie = await prisma.movie.findFirst({where:{id}});

  return(
    <>
      <div>{movie?.title}</div>
      <div>{movie?.genres}</div>
      <div>{movie?.writers}</div>
      <div>{movie?.directors}</div>
      <div>{movie?.cast}</div>
    </>
  )
}

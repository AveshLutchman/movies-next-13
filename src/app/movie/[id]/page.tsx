import Image from "next/image";
import { prisma } from "~/server/db";
import styles from "./styles.module.css";
import MoviePlot from "~/app/components/MoviePlot";
import Movie from "~/app/components/Movie";

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
  const { id } = params;

  const movie = await prisma.movie.findFirst({ where: { id } });

  return (
    <>
      {movie && <Movie movie={movie} />}
    </>
  );
}

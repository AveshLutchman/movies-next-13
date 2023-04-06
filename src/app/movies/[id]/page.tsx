import Image from "next/image";
import { prisma } from "~/server/db";
import styles from "./styles.module.css";
import MoviePlot from "./MoviePlot";

export async function generateStaticParams() {
  const movies = await prisma.movie.findMany({
    select: { id: true },
    take: 100,
  });

  return movies.map((movie) => ({
    movie: movie.id,
  }));
}

const imageNotFound = "/image-not-found.svg";

const toUniqueArr = (arr: Array<string>) => [...new Set(arr)].join(", ")

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const movie = await prisma.movie.findFirst({ where: { id } });

  return (
    <>
      {movie &&
        <>
          <Image
            src={movie.poster || imageNotFound}
            alt={movie.title || ""}
            width={250}
            height={380}
            className="self-start rounded"
          />
          <aside className={styles.details}>
            <h3>
              {movie.title}
              <small>
                <div className="ml-2 badge badge-outline align-middle opacity-50">{movie.type}</div>
              </small>
            </h3>
            <h4>Genres:</h4> <span>{toUniqueArr(movie.genres)}</span>
            <h4>Writers:</h4> <span>{toUniqueArr(movie.writers)}</span>
            <h4>Directors:</h4> <span>{toUniqueArr(movie.directors)}</span>
            <h4>Cast:</h4> <span>{toUniqueArr(movie.cast)}</span>
            <MoviePlot plot={movie.fullplot} />
          </aside>
        </>
      }
    </>
  );
}

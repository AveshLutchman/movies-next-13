import type { movie } from "@prisma/client";
import Image from "next/image";
import styles from "./styles.module.css";
import MoviePlot from "./MoviePlot";

const imageNotFound = "/image-not-found.svg";
const toUniqueArr = (arr: Array<string>) => [...new Set(arr)].join(", ");

const Movie = ({ movie }: { movie: movie }) => {
  return (
    <>
      <Image
        src={movie.poster || imageNotFound}
        alt={movie.title || ""}
        width={250}
        height={380}
        className="self-start rounded mx-auto"
      />
      <aside className={styles.details}>
        <h3>
          {movie.title}
          <small>
            <div className="badge-outline badge ml-2 align-middle opacity-50">
              {movie.type}
            </div>
          </small>
        </h3>
        {movie.genres.length > 0 && (
          <>
            <h4>Genres:</h4> <span>{toUniqueArr(movie.genres)}</span>
          </>
        )}
        {movie.writers.length > 0 && (
          <>
            <h4>Writers:</h4> <span>{toUniqueArr(movie.writers)}</span>
          </>
        )}
        {movie.directors.length > 0 && (
          <>
            <h4>Directors:</h4> <span>{toUniqueArr(movie.directors)}</span>
          </>
        )}
        {movie.cast.length > 0 && (
          <>
            <h4>Cast:</h4> <span>{toUniqueArr(movie.cast)}</span>
          </>
        )}
        <MoviePlot plot={movie.fullplot} />
      </aside>
    </>
  );
};

export default Movie;

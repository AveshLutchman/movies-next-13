import { createStyles, rem } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  image:{
    backgroundColor: theme.colors.violet[8],
    borderRadius: rem(10),
    transition: 'opacity 0.25s linear 0.25s, filter 0.25s linear',

    '&:hover':{
      opacity: 0.4,
      filter: 'blur(10px)',
    }
  }
}));

const imageNotFound = "/image-not-found.svg";

type AlgoliaHit = {
  hit: {
    _id: {
      $oid: string;
    };
    title: string;
    type: string;
    plot: string;
    genres: Array<string>;
    cast: Array<string>;
    writers: Array<string>;
    year: number;
    poster: string;
    objectID: string;
    __position: number;
  };
};

export function MovieCardAlgolia({ hit }: AlgoliaHit) {
  const { classes } = useStyles();

  return (
    <Link href={`/movies/[id]`} as={`/movies/${hit._id.$oid}`}>
      <div className="card w-72 aspect-[4/5] bg-base-300 shadow-xl mt-10 hover:scale-105 transition-transform duration-150 ease-in-out">
        <figure>
          <Image src={hit.poster || imageNotFound} alt={hit.title} className={classes.image} fill/>
        </figure>

        <div className="card-body text-primary-content">
          <h2 className="card-title justify-between">
            {hit.title}
            <div className="badge-secondary badge">{hit.type}</div>
          </h2>
          <p>{hit.plot}</p>
          <div className="card-actions justify-end">
            {hit.genres && hit.genres.map(v=>
              <div className="badge-outline badge-accent badge" key={hit.title + v}>{v}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

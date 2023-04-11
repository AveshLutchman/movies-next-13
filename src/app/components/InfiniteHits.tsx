import { useIntersection } from "@mantine/hooks";
import { useEffect } from "react";
import { useInfiniteHits } from "react-instantsearch-hooks-web";
import MovieCardSkeleton from "./MovieCardSkeleton";

const InfiniteHits = ({
  hitComponent: HitComponent,
  ...props
}: {
  hitComponent: any;
}) => {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const { ref, entry } = useIntersection({
    threshold: 0.8,
  });

  useEffect(() => {
    if (entry?.isIntersecting && !isLastPage) {
      showMore();
    }

  }, [isLastPage, showMore, entry?.isIntersecting]);

  return (
    <div className="ais-InfiniteHits" >
      <ul className="ais-InfiniteHits-list grid grid-cols-1 place-items-center md:grid-cols-4">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-InfiniteHits-item">
            <HitComponent hit={hit} />
          </li>
        ))}
        {!isLastPage &&
          <>
            <MovieCardSkeleton ref={ref} />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </>
        }
      </ul>
    </div>
  );
};

export default InfiniteHits;

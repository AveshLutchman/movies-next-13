import { useIntersection } from '@mantine/hooks';
import { useEffect } from 'react';
import { useInfiniteHits } from 'react-instantsearch-hooks-web';

const InfiniteHits = ({ hitComponent: HitComponent, ...props }:{ hitComponent: any}) => {
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
    <div className="ais-InfiniteHits">
      <ul className="grid grid-cols-4 place-items-center xl:grid-cols-6 ais-InfiniteHits-list">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-InfiniteHits-item">
            <HitComponent hit={hit} />
          </li>
        ))}
        <li
          className="ais-InfiniteHits-sentinel"
          ref={ref}
          aria-hidden="true"
        />
      </ul>
    </div>
  );
}

export default InfiniteHits
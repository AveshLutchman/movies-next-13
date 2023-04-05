"use client";

import { Configure } from "react-instantsearch-hooks-web";
import { MovieCardAlgolia } from "./components/MovieCardAlgoliaHit";
import InfiniteHits from "./components/InfiniteHits";
import SearchBox from "./components/SearchBox";

export default function Page() {

  return (
    <main>
      <SearchBox  />
      <Configure
        hitsPerPage={16}
      />
      <InfiniteHits hitComponent={MovieCardAlgolia} />
    </main>
  );
}

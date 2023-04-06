"use client";

import algoliasearch from "algoliasearch/lite";
import type { ReactNode } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";

export const searchClient = algoliasearch(
  "P905BPKJUO",
  "7ed8bcf34564689309adf8e193f80f26"
);

const AlgoliaWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="movies_title_asc">
      {children}
    </InstantSearch>
  );
};

export default AlgoliaWrapper;

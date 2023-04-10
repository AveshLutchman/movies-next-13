"use client";

import {
  createElement,
  Fragment,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  autocomplete,
  getAlgoliaResults,
  type AutocompleteOptions,
  type Render,
} from "@algolia/autocomplete-js";
import type { BaseItem } from "@algolia/autocomplete-core";

import { createRedirectUrlPlugin } from "@algolia/autocomplete-plugin-redirect-url";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { searchClient } from "./AlgoliaWrapper";
import { render } from "react-dom";
import Link from "next/link";
import Image from "next/image";

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  className?: string;
};

type AlgoliaHit = {
  _id: {
    $oid: string;
  };
  title: string;
  plot: string;
  genres: Array<string>;
  cast: Array<string>;
  writers: Array<string>;
  year: number;
  poster: string;
};

const imageNotFound = "/image-not-found.svg";

export function Autocomplete({ className }: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const plugins = useMemo(() => {
    const recentSearches = createLocalStorageRecentSearchesPlugin({
      key: "instantsearch",
      limit: 3,
    });

    const redirect = createRedirectUrlPlugin();

    return [recentSearches, redirect];
  }, []);

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete<AlgoliaHit>({
      container: autocompleteContainer.current,
      plugins,
      placeholder: "Search",
			detachedMediaQuery: 'none',
      getSources({ query }) {
        return [
          {
            sourceId: "links-source",
            templates: {
              item({ item, components }) {
                return (
                  <Link 
                  href={`/movies/[id]`} 
                  as={`/movies/${item._id.$oid}`} 
                  className="flex h-24 items-center p-2">
                    <div className=" rounded w-16 h-20 p-0.5">
                      <Image
                        src={item.poster || imageNotFound}
                        alt={item.title}
                        width={80}
                        height={100}
                        priority
                        className="h-full"
                        quality={30}
                      />
                    </div>
                    <div className="ml-5">
                      <components.Highlight
                        hit={item}
                        attribute="title"
                        tagName="strong"
                      />
                    </div>
                  </Link>
                );
              },
            },
            getItemInputValue({ item }) {
              return item.title;
            },
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "movies",
                    query,
                    params: {
                      ruleContexts: ["enable-redirect-url"],
                      hitsPerPage: 10,
                    },
                  },
                ],
              });
            },
          },
        ];
      },
      renderer: { createElement, Fragment, render: render as Render },
    });

    return () => autocompleteInstance.destroy();
  }, [plugins]);

  return(
    <>
      <label className="label">
        <span className="label-text text-xl">Search movie</span>
      </label>
      <div className={className} ref={autocompleteContainer} />
    </>
  );
}

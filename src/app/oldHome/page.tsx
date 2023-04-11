"use client";

import { type ChangeEvent, useCallback, useEffect, useState, type KeyboardEvent } from "react";
import { type movie, movieSchema } from "validation/modelSchema";
import { createZodFetcher } from "zod-fetch";
import { MovieCard } from "../components/MovieCard";
import { useRouter, useSearchParams } from 'next/navigation';

const fetchWithZod = createZodFetcher();

export default function Page() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<movie[]>([])
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, [setQuery]);

  const handleEnterKey = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key !== 'Enter') return

    const params = new URLSearchParams(searchParams);
    params.set('query', query);

    const url = new URL(window.location.href)
    url.search = params.toString()

    router.push(url.toString())
  }, [router, query, searchParams]);

  useEffect(() => {
    const getMovies = (async() =>{
      const result = await fetchWithZod(movieSchema.array(), `http://localhost:3000/api/movies?${searchParams.toString()}`)

      setMovies(result)
      setQuery(searchParams.get('query') || '')
    })()
  }, [searchParams])

  return (
    <main>
      <div className="form-control mx-auto w-full max-w-xs">
        <label className="label">
          <span className="label-text">Search movie</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input w-full max-w-xs"
          value={query}
          onChange={handleQueryChange}
          onKeyUp={handleEnterKey}
        />
      </div>
      <section>
        <div className="grid grid-cols-4 xl:grid-cols-6 place-items-center">
          {movies && movies.map((v)=>{
            return(
              <MovieCard key={v.id} id={v.id} title={v.title} image={v.poster || ''} category={v.genres.at(0) || ''} />
            )
          })}
        </div>
      </section>
    </main>
  );
}

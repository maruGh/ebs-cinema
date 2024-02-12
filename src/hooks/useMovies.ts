import {useEffect, useState} from "react";
import { apiKey, movieType } from "../types";



function useMovies(query: string, callback:(x:null) => void){
  const [movies, setMovies] = useState<movieType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    if (query.length <= 2) {
      setError("");
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${query}&plot=full`,
          { signal: controller.signal }
        );
        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await response.json();
        if (!data.Search) throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (error: unknown) {
        if ((error as Error).name !== "AbortError")
          setError((error as Error).message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    callback?.(null);
    fetchMovies();

    return () => {
      controller.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {movies, loading, error}
}

export default useMovies
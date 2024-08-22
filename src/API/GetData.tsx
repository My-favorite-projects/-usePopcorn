import { KEY } from "../constant/constants";
import { useState, useEffect } from "react";

export default function useGetData(query) {
  const [dataSearch, setDataSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies!");

        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);

        setDataSearch(data.Search || []);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query) {
      fetchMovies();
    }
  }, [query]);

  return { dataSearch, isLoading };
}

import { KEY } from "../constant/constants";
import { useState, useEffect } from "react";

export default function GetData(apiCode: string, query: any) {
  const [dataSearch, setDataSearch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&${apiCode}=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies!");

        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);

        let detailedData = [];

        if (apiCode === "s") {
          const movies = data.Search;

          // Fetch detailed info for each movie
          for (const movie of movies) {
            const detailRes = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&i=${movie.imdbID}`
            );
            const detailData = await detailRes.json();
            detailedData.push(detailData);
          }

          setDataSearch(detailedData);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [apiCode, query]);

  return { dataSearch, isLoading };
}

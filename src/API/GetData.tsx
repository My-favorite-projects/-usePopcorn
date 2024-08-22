import { KEY } from "../constant/constants";
import { useState, useEffect } from "react";

export default function GetData(query) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
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
          console.log(data.Search);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
    },
    [query]
  );
}

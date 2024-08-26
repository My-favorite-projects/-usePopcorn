import { useEffect, useState } from "react";
import { KEY } from "../constant/constants";

export default function GetApi({ query }: { query: string }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchFilm() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { mode: "no-cors" }
          );
          if (!res.ok) throw new Error("error fetching movie");

          const data = await res.json();
          console.log(data);
          if (data.Response === "False") throw new Error("Movie not found...");

          // setMovies(data.Search);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchFilm();
    },
    [query]
  );

  useEffect(() => {
    async function fetchFilm() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { mode: "no-cors" }
        );
        if (!res.ok) throw new Error("Error fetching movie");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found...");
        setMovies(data.Search);

        console.log(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchFilm();
  }, [query]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
}

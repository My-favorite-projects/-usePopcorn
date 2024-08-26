import { KEY } from "../constant/constants";
import { useState, useEffect } from "react";

export default function GetData(apiCode, query) {
  const [dataSearch, setDataSearch] = useState([]);
  // const [dataSearch, setDataSearch] = useState(null);
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

        if (apiCode === "s") {
          setDataSearch(data.Search || []);
        } else {
          setDataSearch(data ? [data] : []);
        }

        // console.log(data);
        //   setDataSearch(data.Search);
        // } else {
        //   setDataSearch(data);
        // }

        console.log(data.Search);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (apiCode) {
      fetchMovies();
    }
  }, [apiCode, query]);

  return { dataSearch, isLoading };
}

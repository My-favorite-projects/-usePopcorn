import { useEffect, useState } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";

const KEY = "6c9f2c52";
const query = "darkfdsfsds";

export default function App() {
  const [cardDetails, setCardDetails] = useState(null);
  const [movieList, setMovieList] = useState([]);

  // * DONT EDIT THIS CODES MR JOKARI
  // for api test
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
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
  }, []);
  // for api test

  return (
    <>
      {cardDetails ? (
        <CardDetails
          setCardDetails={setCardDetails}
          cardDetails={cardDetails}
          setMovieList={setMovieList}
          movieList={movieList}
        />
      ) : (
        <LandingPage setCardDetails={setCardDetails} movieList={movieList} />
      )}
    </>
  );
}

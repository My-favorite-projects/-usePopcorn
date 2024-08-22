import { useEffect, useState } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";

const KEY = "6c9f2c52";
const query = "shrek";

export default function App() {
  const [cardDetails, setCardDetails] = useState(null);
  const [movieList, setMovieList] = useState([]);

  // * DONT EDIT THIS CODES MR JOKARI
  // for api test
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(function () {
  //   async function fetchMovies() {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
  //     );
  //     const data = await res.json().then((data) => console.log(data.Search));
  //     setIsLoading(false);
  //   }
  //   fetchMovies();
  // }, []);
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

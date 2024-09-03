import { useContext } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";
import { context } from "./API/context";

export default function App() {
  const { cardDetails, setCardDetails, movieList, setMovieList } =
    useContext(context);

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
        <LandingPage />
      )}
    </>
  );
}

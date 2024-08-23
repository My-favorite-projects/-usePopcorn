import { useState } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";

export default function App() {
  const [cardDetails, setCardDetails] = useState(null);
  const [movieList, setMovieList] = useState([]);

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

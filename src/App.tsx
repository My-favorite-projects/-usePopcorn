import { useState, useContext } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";
import GetData from "./API/GetData";

export default function App() {
  const [cardDetails, setCardDetails] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const { dataSearch: arrivalData, isLoading: arrivalLoading } = GetData(
    "s",
    "game"
  ); //Destructuring Assignment with Renaming
  const { dataSearch: horrorData, isLoading: horrorLoading } = GetData(
    "s",
    "mask"
  ); //Destructuring Assignment with Renaming

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
        <LandingPage
          arrivalData={arrivalData}
          arrivalLoading={arrivalLoading}
          horrorData={horrorData}
          horrorLoading={horrorLoading}
          setCardDetails={setCardDetails}
          movieList={movieList}
        />
      )}
    </>
  );
}

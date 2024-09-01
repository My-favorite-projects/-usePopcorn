import { useState } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";
import GetData from "./API/GetData";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cardDetails, setCardDetails] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const { dataSearch: searchTime, isLoading: searchTimeLoading } = GetData(
    "s",
    query
  ); //Destructuring Assignment with Renaming
  const { dataSearch: arrivalData, isLoading: arrivalLoading } = GetData(
    "s",
    "game"
  ); //Destructuring Assignment with Renaming
  const { dataSearch: horrorData, isLoading: horrorLoading } = GetData(
    "s",
    "funny"
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
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          query={query}
          setQuery={setQuery}
          searchTime={searchTime}
          searchTimeLoading={searchTimeLoading}
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

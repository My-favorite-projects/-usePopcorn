import { createContext, useState } from "react";
import GetData from "./GetData";

export const context = createContext(null);

function ContextApi({ children }: any) {
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
    <context.Provider
      value={{
        isOpen,
        setIsOpen,
        query,
        setQuery,
        cardDetails,
        setCardDetails,
        movieList,
        setMovieList,
        searchTime,
        searchTimeLoading,
        arrivalData,
        arrivalLoading,
        horrorData,
        horrorLoading,
      }}
    >
      {children}
    </context.Provider>
  );
}

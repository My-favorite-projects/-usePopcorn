import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Footer from "../../ComponentSections/Footer/Footer";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import TemplateSlider from "../../ComponentSections/Slider/TemplateSlider";
import GetData from "../../../API/GetData";
import SliderHero from "../../ComponentSections/Hero/SliderHero";

export default function LandingPage({ setCardDetails, movieList }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { dataSearch: arrivalData, isLoading: arrivalLoading } = GetData(
    "s",
    "game"
  ); //Destructuring Assignment with Renaming
  const { dataSearch: horrorData, isLoading: horrorLoading } = GetData(
    "s",
    "mask"
  ); //Destructuring Assignment with Renaming
  const { dataSearch: searchTime, isLoading: searchTimeLoading } = GetData(
    "s",
    { query }
  ); //Destructuring Assignment with Renaming

  return (
    <>
      <Box className={`w-full ${query.length < 2 ? "" : " mt-24"}`}>
        <Header query={query} setIsOpen={setIsOpen} setQuery={setQuery} />
        <WatchListDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          movieList={movieList}
        />
        {query.length < 2 && <SliderHero />}
      </Box>
      <Container className="min-w-full p-0">
        {query.length >= 2 ? (
          <TemplateSlider
            titleSec={`Movies related to '${query}'`}
            showCard={setCardDetails}
            movies={searchTime}
            query={query}
            isLoading={searchTimeLoading}
          />
        ) : null}
        <TemplateSlider
          titleSec="New Arrival"
          showCard={setCardDetails}
          movies={arrivalData ? arrivalData : []}
          query={query}
          isLoading={arrivalLoading}
        />
        <TemplateSlider
          titleSec="Funny Movies"
          showCard={setCardDetails}
          movies={horrorData ? horrorData : []}
          query={query}
          isLoading={horrorLoading}
        />
        <Footer />
      </Container>
    </>
  );
}

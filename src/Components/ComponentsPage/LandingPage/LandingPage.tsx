import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";
import Footer from "../../ComponentSections/Footer/Footer";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import TemplateSlider from "../../ComponentSections/Slider/TemplateSlider";
import { KEY } from "../../../constant/constants";

export default function LandingPage({ setCardDetails, movieList }: any) {
  const [isOpen, setIsOpen] = useState(false);

  // searchBar
  const [query, setQuery] = useState("");
  // * DONT EDIT THIS CODES MR JOKARI
  // for api test
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
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
    },
    [query]
  );
  // for api test

  return (
    <>
      <Box className="bg-hero w-full">
        <Header setIsOpen={setIsOpen} setQuery={setQuery} />
        <WatchListDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          movieList={movieList}
        />
        <Hero />
      </Box>
      <Container className="min-w-full p-0">
        <TemplateSlider titleSec="Featured Movie" showCard={setCardDetails} />
        <TemplateSlider titleSec="New Arrival" showCard={setCardDetails} />
        <Footer />
      </Container>
    </>
  );
}

import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";
import Footer from "../../ComponentSections/Footer/Footer";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import TemplateSlider from "../../ComponentSections/Slider/TemplateSlider";
import GetData from "../../../API/GetData";

export default function LandingPage({ setCardDetails, movieList }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { dataSearch, isLoading } = GetData(query);

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
        <TemplateSlider
          titleSec="Featured Movie"
          showCard={setCardDetails}
          movies={dataSearch}
        />
        <TemplateSlider
          titleSec="New Arrival"
          showCard={setCardDetails}
          movies={dataSearch}
        />
        <Footer />
      </Container>
    </>
  );
}

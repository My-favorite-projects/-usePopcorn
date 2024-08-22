import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";
import Footer from "../../ComponentSections/Footer/Footer";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import TemplateSlider from "../../ComponentSections/Slider/TemplateSlider";

export default function LandingPage({ setCardDetails, movieList }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box className="bg-hero w-full">
        <Header setIsOpen={setIsOpen} />
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

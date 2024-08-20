import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";
import Slider from "../../ComponentSections/Slider/Slider";
import Footer from "../../ComponentSections/Footer/Footer";
import StarScore from "../../ComponentsElement/StarScore";
import WatchListDrawer from "../../ComponentsElement/WatchList";

export default function LandingPage({ setCardDetails }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box className="bg-hero w-full">
        <Header setIsOpen={setIsOpen} />
        <WatchListDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
      </Box>
      <Container className="min-w-full p-0">
        <Slider sliderId="2" showCardDetails={setCardDetails} />
        <Slider sliderId="1" showCardDetails={setCardDetails} />
        <Footer />
      </Container>
    </>
  );
}

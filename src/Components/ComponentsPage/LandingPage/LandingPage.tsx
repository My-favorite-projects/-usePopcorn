import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";
import Slider from "../../ComponentSections/Slider/Slider";
import Footer from "../../ComponentSections/Footer/Footer";

export default function LandingPage(props: any) {
  return (
    <>
      <Container className="min-w-full p-0">
        <Box className="bg-hero w-full">
          <Header />
          <Hero />
        </Box>

        <Slider />

        <Footer />
      </Container>
    </>
  );
}

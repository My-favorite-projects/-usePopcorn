import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";
import Slider from "../../ComponentSections/Slider/Slider";
import Footer from "../../ComponentSections/Footer/Footer";
import StarScore from "../../ComponentsElement/StarScore";

export default function LandingPage(props: any) {
  return (
    <>
      <Box className="bg-hero w-full">
        <Header />
        <Hero />
      </Box>
      <Container className="min-w-full p-0">
<<<<<<< HEAD
        <Box className="bg-hero w-full">
          <Header />
          <Hero />
        </Box>

        <Slider />

=======
        <Slider />
        <Slider />

>>>>>>> 7c9e84a15adb4fe5d8a690be4000d90ad431ddff
        <Footer />
      </Container>
      {/* <StarScore lengthStar={3} /> */}
    </>
  );
}

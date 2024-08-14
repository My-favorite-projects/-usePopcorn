import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Hero from "../../ComponentSections/Hero/Hero";

export default function LandingPage(props: any) {
  return (
    <>
      <Container>
        <Box className="bg-hero">
          <Header />
          <Hero />
        </Box>
      </Container>
    </>
  );
}

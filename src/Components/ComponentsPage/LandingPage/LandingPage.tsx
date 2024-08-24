import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Footer from "../../ComponentSections/Footer/Footer";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import TemplateSlider from "../../ComponentSections/Slider/TemplateSlider";
import GetData from "../../../API/GetData";
import SliderHero from "../../ComponentSections/Hero/SliderHero";

export default function LandingPage({ setCardDetails, movieList }: any) {
  const [apiCode, setApiCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { dataSearch, isLoading } = GetData(apiCode, query);
  const { dataSearch: featuredData } = GetData("t", "Titanic"); //Destructuring Assignment with Renaming
  // const { dataSearch: arrivalData } = GetData("t", "American Horror Story"); //Destructuring Assignment with Renaming
  // const { dataSearch: horrorData } = GetData("t", "Captain Marvel"); //Destructuring Assignment with Renaming

  return (
    <>
      <Box className="w-full">
        <Header setIsOpen={setIsOpen} setQuery={setQuery} />
        <WatchListDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          movieList={movieList}
        />
        <SliderHero />
      </Box>
      <Container className="min-w-full p-0">
        <TemplateSlider
          titleSec="Featured Movie"
          showCard={setCardDetails}
          movies={featuredData ? [featuredData] : []}
        />
        {/* <TemplateSlider
          titleSec="New Arrival"
          showCard={setCardDetails}
          movies={arrivalData ? [arrivalData] : []}
        />
        <TemplateSlider
          titleSec="Horror Movie"
          showCard={setCardDetails}
          movies={horrorData ? [horrorData] : []}
        /> */}
        <Footer />
      </Container>
    </>
  );
}

import { Container, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import Footer from "../../ComponentSections/Footer/Footer";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import TemplateSlider from "../../ComponentSections/Slider/TemplateSlider";
import SliderHero from "../../ComponentSections/Hero/SliderHero";
import { context } from "../../../API/context";
import { useContext } from "react";

export default function LandingPage({}: any) {
  const {
    isOpen,
    setIsOpen,
    query,
    setQuery,
    searchTime,
    searchTimeLoading,
    setCardDetails,
    movieList,
    arrivalData,
    arrivalLoading,
    horrorData,
    horrorLoading,
  } = useContext(context);

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
            setCardDetails={setCardDetails}
            movies={searchTime ? searchTime : []}
            isLoading={searchTimeLoading}
            colorTit="primary"
          />
        ) : null}
        <TemplateSlider
          titleSec="New Arrival"
          setCardDetails={setCardDetails}
          movies={arrivalData ? arrivalData : []}
          isLoading={arrivalLoading}
          colorTit="dark"
        />
        <TemplateSlider
          titleSec="Funny Movies"
          setCardDetails={setCardDetails}
          movies={horrorData ? horrorData : []}
          isLoading={horrorLoading}
          colorTit="dark"
        />

        <Footer />
      </Container>
    </>
  );
}

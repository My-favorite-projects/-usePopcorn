import { useState } from "react";
import { Container, Button, Typography, Box, Link } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import StarScore from "../../ComponentsElement/StarScore";
import WatchListDrawer from "../../ComponentsElement/WatchList";
import { imdbWeb } from "../../../constant/constants";

export default function CardDetails({
  setCardDetails,
  cardDetails,
  setMovieList,
  score = 3,
  movieList,
}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const { img, tit, desc } = cardDetails;
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");

  function addCardToWatchList() {
    if (clicked) {
      return;
    }
    const info = {
      img: img,
      tit: tit,
      desc: desc,
      score: score,
    };

    setMovieList([...movieList, info]);
    setClicked(true);
  }

  return (
    <>
      <Container
        className="min-w-full min-h-dvh"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header
          setIsOpen={setIsOpen}
          showCardDetails={setCardDetails}
          setQuery={setQuery}
        />
        <WatchListDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          movieList={movieList}
        />
        <Box className="flex flex-col pl-14 mt-10 w-96">
          <Box className="mb-4">
            <Typography variant="h2" className="text-light ffb">
              {tit}
            </Typography>

            <Typography variant="body1" className="text-light ffR w-full">
              {desc}
            </Typography>
          </Box>

          <Box className="mb-4">
            <StarScore lengthStar={score} />
          </Box>

          <Button
            variant="contained"
            className="hoverBTN"
            sx={{ background: "#BE123C" }}
            onClick={addCardToWatchList}
          >
            {clicked ? (
              <Link
                className="ffb"
                href={imdbWeb}
                underline="none"
                variant="h6"
                sx={{ color: "#fff" }}
              >
                Watch Trailer
              </Link>
            ) : (
              <Typography className="ffb" variant="h6">
                Add to watch list
              </Typography>
            )}
          </Button>
        </Box>
      </Container>
    </>
  );
}

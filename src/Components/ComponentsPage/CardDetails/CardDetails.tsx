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
  movieList,
  score = cardDetails.movie.imdbRating * 10,
}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const { img, tit, desc, imdbID } = cardDetails;
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");

  function ScoreCalculation() {
    let info = 0;
    if (score < 20) {
      info = 1;
    } else if (score < 40) {
      info = 2;
    } else if (score < 60) {
      info = 3;
    } else if (score < 80) {
      info = 4;
    } else {
      info = 5;
    }
    return info;
  }

  function addCardToWatchList() {
    const isAlreadyInList = movieList.some(
      (movie: any) => movie.imdbID === imdbID
    );

    if (isAlreadyInList) {
      return;
    }
    if (clicked) {
      return;
    }
    const info = {
      img: img,
      tit: tit,
      desc: desc,
      imdbID: imdbID,
      score: ScoreCalculation(),
    };
    setMovieList([...movieList, info]);
    setClicked(true);
  }

  return (
    <>
      <Container
        className="min-w-full min-h-dvh mt-16 pt-1"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header
          setIsOpen={setIsOpen}
          setCardDetails={setCardDetails}
          setQuery={setQuery}
        />
        <WatchListDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          movieList={movieList}
        />
        <Box className="flex flex-col pl-14 mt-10">
          <Box className="mb-4">
            <Typography variant="h2" className="text-light ffb">
              {desc}
            </Typography>

            <Typography variant="body1" className="text-light ffR w-full">
              {tit}
            </Typography>
          </Box>

          <Box className="mb-4">
            <StarScore lengthStar={ScoreCalculation()} />
          </Box>

          <Button
            variant="contained"
            className="hoverBTN"
            sx={{ background: "#BE123C", width: 250 }}
            onClick={addCardToWatchList}
          >
            {clicked ? (
              <Link
                className="ffb"
                href={imdbWeb + imdbID}
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

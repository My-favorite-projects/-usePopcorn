import { useState } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import Header from "../../ComponentSections/Header/Header";
import TextValueCardDetails from "../../ComponentSections/TextValueCardDetails/TextValueCardDetails";
import StarScore from "../../ComponentsElement/StarScore";
import WatchListDrawer from "../../ComponentsElement/WatchList";

export default function CardDetails({ setCardDetails, cardDetails }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const { img, tit, desc } = cardDetails;

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
        <Header setIsOpen={setIsOpen} showCardDetails={setCardDetails} />
        <WatchListDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <Box className="flex flex-col pl-14 mt-10 w-96">
          <Box className="mb-4">
            <TextValueCardDetails movieName={tit} movieDesc={desc} />
          </Box>

          <Box className="mb-4">
            <StarScore lengthStar={4} />
          </Box>

          <Button
            variant="contained"
            className="hoverBTN"
            sx={{ background: "#BE123C" }}
            onClick={() => console.log("mahsa")}
          >
            <Typography className="text-light ffb" variant="h6">
              add to watch list
            </Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
}

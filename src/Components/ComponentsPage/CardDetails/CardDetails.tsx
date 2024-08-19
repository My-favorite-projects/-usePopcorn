import { Container, Button, Typography, Box } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Header from "../../ComponentSections/Header/Header";
import TextValueCardDetails from "../../ComponentSections/TextValueCardDetails/TextValueCardDetails";
import StarScore from "../../ComponentsElement/StarScore";
import { Margin } from "@mui/icons-material";

export default function CardDetails(props: any) {
  return (
    <>
      <Container
        className="min-w-full min-h-dvh"
        sx={{
          backgroundImage: `url(./public/images/Poster.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Box className="flex flex-col pl-14 mt-10 w-96">
          <Box className="mb-4">
            <TextValueCardDetails
              movieName="mehrdad"
              movieDesc="The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end."
            />
          </Box>

          <Box className="mb-4">
            <StarScore lengthStar={4} />
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{ background: "#BE123C", marginRight: "16px" }}
            >
              <PlayCircleIcon className="mr-2" />
              <Typography className="text-light ffb" variant="h6">
                Watch Now
              </Typography>
            </Button>

            <Button
              variant="outlined"
              className="hoverBTN"
              sx={{ border: "1px solid white" }}
            >
              <Typography className="text-light ffb" variant="h6">
                Trailer
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

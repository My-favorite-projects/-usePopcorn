import { Container, Button, Typography, Box } from "@mui/material";
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

          <Button
            variant="contained"
            className="hoverBTN"
            sx={{ background: "#BE123C" }}
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

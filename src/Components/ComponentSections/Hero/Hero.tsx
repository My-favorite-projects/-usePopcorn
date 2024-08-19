import { Container, Typography, Button, Box } from "@mui/material";
import ScoreMovie from "../../ComponentsElement/ScoreMovie.tsx";

export default function Hero() {
  return (
    <Container
      className="w-1/12 py-32 mb-10"
      sx={{ marginLeft: "4%", marginRight: "0" }}
    >
      <Box className="pb-4">
        <Typography variant="h3" className="ffb text-light">
          John Wick 3 :
        </Typography>

        <Typography variant="h3" className="ffb text-light">
          Parabellum
        </Typography>
      </Box>

      <Box className="w-3/12">
        <ScoreMovie size="14" score="30" colorScore="light" percentage="97" />
      </Box>

      <Typography variant="body2" className="text-light w-80 pb-4">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </Typography>

      <Button
        variant="contained"
        className="hoverBTN"
        sx={{ background: "#BE123C" }}
      >
        <Typography className="text-light ffb" variant="h6">
          add to watch list
        </Typography>
      </Button>
    </Container>
  );
}

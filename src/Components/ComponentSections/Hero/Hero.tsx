import { Container, Typography, Button } from "@mui/material";
import ScoreMovie from "../../ComponentsElement/scoreMovie.tsx";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Hero() {
  return (
    <Container className="w-11/12 m-auto">
      <Typography variant="h3" className="ffb text-light">
        John Wick 3 :
      </Typography>

      <Typography variant="h3" className="ffb text-light">
        Parabellum
      </Typography>
      <ScoreMovie size="14" score="30" colorScore="light" percentage="97" />

      <Typography variant="body2" className="text-light w-80">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </Typography>

      <Button variant="contained" sx={{ background: "#BE123C" }}>
        <PlayCircleIcon className="mr-2" />
        <Typography className="text-light ffb" variant="h6">
          Watch trailer
        </Typography>
      </Button>
    </Container>
  );
}

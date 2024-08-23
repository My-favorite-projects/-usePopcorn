import { Typography, Button, Box } from "@mui/material";
import ScoreMovie from "../../ComponentsElement/ScoreMovie.tsx";

export default function Hero({ desc, img, title }: any) {
  return (
    <Box
      className="w-full py-32 px-20"
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="w-4/12">
        <Box className="pb-4">
          <Typography variant="h3" className="ffb text-light">
            {title}
          </Typography>
        </Box>

        <Box className="py-2">
          <ScoreMovie size="14" score="30" colorScore="light" percentage="97" />
        </Box>

        <Typography variant="body2" className="text-light pb-4">
          {desc}
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
      </Box>
    </Box>
  );
}

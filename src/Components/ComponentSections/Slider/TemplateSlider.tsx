import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "./Slider";

export default function TemplateSlider({
  showCard,
  titleSec,
  movies,
  isLoading,
  colorTit,
}: any) {
  return (
    <Box className="w-11/12 m-auto mb-10 relative">
      <Box className="w-full flex py-6 justify-between">
        <Typography className={`ffb text-${colorTit}`} variant="h4">
          {titleSec}
        </Typography>
        <Button sx={{ color: "#BE123C", textTransform: "none", gap: 1 }}>
          <Typography>See more</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </Button>
      </Box>
      <Slider
        sliderId={titleSec.length}
        showCardDetails={showCard}
        movies={movies}
        isLoading={isLoading}
      />
    </Box>
  );
}

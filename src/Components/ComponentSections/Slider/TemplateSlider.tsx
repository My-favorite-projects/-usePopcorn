import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "./Slider";

export default function TemplateSlider({
  setCardDetails,
  titleSec,
  movies,
  isLoading,
  colorTit,
}: any) {
  return (
    <Box className="w-11/12 m-auto mb-10 relative">
      <Box className="w-full flex py-6 justify-between">
        <Typography className={`ffb text-${colorTit} title-sec`} variant="h4">
          {titleSec}
        </Typography>
        <Button sx={{ color: "#BE123C", textTransform: "none", gap: 1 }}>
          <Typography className="see-more">See more</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </Button>
      </Box>
      <Slider
        sliderId={titleSec.length}
        setCardDetails={setCardDetails}
        movies={movies}
        isLoading={isLoading}
      />
    </Box>
  );
}

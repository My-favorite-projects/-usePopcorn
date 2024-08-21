import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "./Slider";

export default function FeaturedMovie({ showCard, titleSec }: any) {
  return (
    <Box className="w-11/12 m-auto mb-10 relative">
      <Box className="w-full flex py-6 justify-between">
        <Typography className="ffb" sx={{}} variant="h4">
          {titleSec}
        </Typography>
        <Button sx={{ color: "#BE123C", textTransform: "none", gap: 1 }}>
          <Typography>See more</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </Button>
      </Box>
      <Slider sliderId={titleSec} showCardDetails={showCard} />
    </Box>
  );
}

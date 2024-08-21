import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import IMDb from "./ScoreMovie";

export default function Card() {
  return (
    <Box
      className="text-secondary"
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#fff",
      }}
    >
      <CardMedia
        component="img"
        height="370"
        image="./public/images/Poster.svg"
        alt="stranger things"
        className="cursor-pointer"
      />
      <Typography sx={{ fontSize: 12, fontWeight: 600 }} variant="h6">
        Title
      </Typography>
      <Typography
        className="text-dark"
        sx={{ fontSize: 18, fontWeight: 600 }}
        variant="h5"
      >
        Description
      </Typography>
      <IMDb
        colorScore="dark"
        percentage="97"
        score="88"
        size="12"
        weight="800"
      />
      <Typography variant="h6" sx={{ fontSize: 12, fontWeight: 600 }}>
        Action, Adventure, Horror
      </Typography>
    </Box>
  );
}

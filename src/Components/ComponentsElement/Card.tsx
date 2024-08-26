import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import IMDb from "./ScoreMovie";

export default function Card({ title, year, image, Metascore }: any) {
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
        image={image}
        alt="stranger things"
        className="cursor-pointer"
      />
      <Typography sx={{ fontSize: 12, fontWeight: 600 }} variant="h6">
        {year}
      </Typography>
      <Typography
        className="text-dark"
        sx={{ fontSize: 18, fontWeight: 600 }}
        variant="h5"
      >
        {title}
      </Typography>
      <IMDb
        colorScore="dark"
        percentage={Metascore}
        score={Metascore}
        size="12"
        weight="800"
      />
      <Typography variant="h6" sx={{ fontSize: 12, fontWeight: 600 }}>
        Action, Adventure, Horror
      </Typography>
    </Box>
  );
}

import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";

export default function Card() {
  return (
    <div>
      <Box
        sx={{
          width: 250,
          height: 490,
          bgcolor: "#fff",
        }}
      >
        <CardMedia
          component="img"
          height="370"
          width="250"
          image="./public/images/Poster.svg"
          alt="stranger things"
        />
        <Typography variant="span" component="h">
          USA, 2016 - Current
        </Typography>
      </Box>
    </div>
  );
}

import CardMedia from "@mui/material/CardMedia";
import { Box, Typography, Skeleton } from "@mui/material";
import IMDb from "./ScoreMovie";

export default function Card({
  title,
  year,
  image,
  Metascore,
  Genre,
  score,
  isLoading,
}: any) {
  return (
    <Box
      className="text-secondary"
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#fff",
      }}
    >
      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={250}
          height={300}
        />
      ) : (
        <CardMedia
          component="img"
          height="370"
          image={image}
          alt="stranger things"
          className="cursor-pointer"
        />
      )}

      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={60}
          height={10}
          className="my-1"
        />
      ) : (
        <Typography sx={{ fontSize: 12, fontWeight: 600 }} variant="h6">
          {year}
        </Typography>
      )}

      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={160}
          height={14}
          className="my-1"
        />
      ) : (
        <Typography
          className="text-dark"
          sx={{ fontSize: 18, fontWeight: 600 }}
          variant="h5"
        >
          {title}
        </Typography>
      )}

      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={200}
          height={12}
          className="my-1"
        />
      ) : (
        <IMDb
          colorScore="dark"
          percentage={Metascore}
          size="12"
          weight="800"
          score={score}
        />
      )}

      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={70}
          height={10}
          className="my-1"
        />
      ) : (
        <Typography variant="h6" sx={{ fontSize: 12, fontWeight: 600 }}>
          {Genre}
        </Typography>
      )}
    </Box>
  );
}

import { Typography, Box } from "@mui/material";

export default function TextValueCardDetails({ movieName, movieDesc }: any) {
  return (
    <>
      <Typography variant="h2" className="text-light ffb">
        {movieName}
      </Typography>

      <Typography variant="body1" className="text-light ffR w-full">
        {movieDesc}
      </Typography>
    </>
  );
}

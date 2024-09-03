import { Box, Typography } from "@mui/material";

export default function IMDb({
  percentage,
  size,
  weight,
  colorScore,
  score,
}: any) {
  return (
    <Box className="flex flex-wrap justify-between w-full">
      <Box className="flex justify-between items-center gap-2">
        <Box sx={{ background: "#E6B91E" }} className="rounded">
          <Typography
            variant="h6"
            sx={{ fontSize: `${size}px`, fontWeight: `${weight}` }}
            className="text-dark ffb  p-0.5 py-0.1"
          >
            IMDb
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "2vh" }}
            className={`text-${colorScore} ffr`}
          >
            {score * 10} / 100
          </Typography>
        </Box>
      </Box>
      {percentage === "N/A" ? (
        ""
      ) : (
        <Box className="flex justify-between items-center">
          <img src="./public/images/tomato.svg" alt="tomato" />

          <Typography className={`text-${colorScore} meta-score`} variant="h6">
            {percentage}%
          </Typography>
        </Box>
      )}
    </Box>
  );
}

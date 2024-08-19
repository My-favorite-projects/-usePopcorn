import { Box, Typography } from "@mui/material";

export default function IMDb(props: any) {
  return (
    <Box className="flex justify-between w-full">
      <Box className="flex justify-between w-28 items-center ">
        <Box sx={{ background: "#E6B91E" }} className="rounded">
          <Typography
            variant="h6"
            sx={{ fontSize: `${props.size}px`, fontWeight: `${props.weight}` }}
            className="text-dark ffb  p-0.5 py-0.1"
          >
            IMDb
          </Typography>
        </Box>

        <Box>
          <Typography className={`text-${props.colorScore} ffr`}>
            {props.score} / 100
          </Typography>
        </Box>
      </Box>
      <Box className="flex  justify-between items-center  w-16">
        <img src="./public/images/tomato.svg" alt="tomato" />

        <Typography className={`text-${props.colorScore}`} variant="h6">
          {props.percentage}%
        </Typography>
      </Box>
    </Box>
  );
}

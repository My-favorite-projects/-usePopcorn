import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function StarScore(props: any) {
  return (
    <Box>
      {Array.from({ length: 5 }, (_, i) =>
        i < props.lengthStar ? (
          <StarIcon key={i} className="text-yellow-400" />
        ) : (
          <StarBorderIcon key={i} className="text-yellow-400" />
        )
      )}
    </Box>
  );
}

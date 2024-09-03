import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Box,
  Typography,
  Button,
} from "@mui/material";
import StarScore from "./StarScore";
import { imdbWeb } from "../../constant/constants";

export default function WatchListDrawer({ isOpen, setIsOpen, movieList }: any) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List className="flex-col" sx={{ width: "50vw", gap: 1 }}>
        {movieList?.length > 0 ? (
          movieList.map((detail: any) => (
            <ListItem key={detail} className="flex justify-between w-full">
              <Box className="flex w-full justify-between drawer-card">
                <Box className="flex gap-3">
                  <CardMedia
                    sx={{ width: 50 }}
                    component="img"
                    image={detail.img}
                    alt={detail.tit}
                  />
                  <Box>
                    {/* for description */}
                    <Typography
                      className="font-bold"
                      sx={{ fontWeight: 600, fontSize: 18 }}
                      variant="h6"
                    >
                      {detail.tit}
                    </Typography>
                    {/* for title */}
                    <Typography
                      className="font-bold"
                      sx={{ fontWeight: 400, fontSize: 14 }}
                      variant="h6"
                    >
                      {detail.desc}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-end">
                  <Button
                    sx={{
                      bgcolor: "#BE123C",
                      ":hover": {
                        bgcolor: "#9f1239",
                      },
                    }}
                    variant="contained"
                    href={imdbWeb + detail.imdbID}
                  >
                    Watch Trailer
                  </Button>
                  <StarScore lengthStar={detail.score} />
                </Box>
              </Box>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText
              className="text-secondary outline-dotted rounded py-4 flex justify-center"
              primary="No movie has been selected"
            />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
}

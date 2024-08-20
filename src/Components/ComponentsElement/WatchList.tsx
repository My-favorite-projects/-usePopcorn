import { useState } from "react";
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

export default function WatchListDrawer({ isOpen, setIsOpen }) {
  const [movieList, setMovieList] = useState([]);

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List className="flex-col" sx={{ width: 600, gap: 1 }}>
        {movieList.length > 0 ? (
          movieList.map((detail) => (
            <ListItem key={detail} className="flex justify-between w-full">
              <Box className="flex w-full justify-between">
                <Box className="flex gap-3">
                  <CardMedia
                    sx={{ width: 50 }}
                    component="img"
                    image="./public/images/Poster.svg"
                    alt="stranger things"
                  />
                  <Box>
                    {/* for title */}
                    <Typography
                      className="font-bold"
                      sx={{ fontWeight: 600, fontSize: 18 }}
                      variant="h6"
                    >
                      {detail}
                    </Typography>
                    {/* for description */}
                    <Typography
                      className="font-bold"
                      sx={{ fontWeight: 400, fontSize: 14 }}
                      variant="h6"
                    >
                      {detail}
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
                  >
                    Watch
                  </Button>
                  <StarScore lengthStar={4} />
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
        <Button className="btn">click</Button>
      </List>
    </Drawer>
  );
}

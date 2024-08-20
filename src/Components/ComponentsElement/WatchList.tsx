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

export default function WatchListDrawer({
  isOpen,
  setIsOpen,
  isMovieSelected = true,
}) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List className="flex-col" sx={{ width: 600, gap: 1 }}>
        {isMovieSelected ? (
          [
            "Attack on titan",
            "Avengers: End game",
            "John Wick 3: Parabellum",
          ].map((detail) => (
            <ListItem className="flex  justify-between">
              <Box className="flex gap-3 w-full">
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
              <Box>
                <Button sx={{ bgcolor: "#BE123C" }} variant="contained">
                  Watch
                </Button>
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

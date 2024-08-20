// import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Box,
} from "@mui/material";

export default function WatchListDrawer({
  isOpen,
  setIsOpen,
  isMovieSelected = false,
}) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List
        className="flex-col h-full"
        sx={{ width: 600, display: "flex", gap: 1 }}
      >
        {isMovieSelected ? (
          <ListItem>
            <ListItemText
              className="text-secondary outline-dotted rounded py-4 flex justify-center"
              primary="No movie has been selected"
            />
          </ListItem>
        ) : (
          [
            "Attack on titan",
            "Avengers: End game",
            "John Wick 3: Parabellum John Wick 3: Parabellum ",
          ].map((detail) => (
            <ListItem className=" flex gap-3">
              <CardMedia
                sx={{ width: 50 }}
                component="img"
                image="./public/images/Poster.svg"
                alt="stranger things"
              />
              <Box>
                {/* for title */}
                <ListItemText primary={detail} />
                {/* for description */}
                <ListItemText primary={detail} />
              </Box>
            </ListItem>
          ))
        )}
      </List>
    </Drawer>
  );
}

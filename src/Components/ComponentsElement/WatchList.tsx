// import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function WatchListDrawer({
  isOpen,
  setIsOpen,
  isMovieSelected = true,
}) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List>
        {isMovieSelected ? (
          <ListItem>
            <ListItemText primary="No movie has been selected" />
          </ListItem>
        ) : (
          [
            "Attack on titan",
            "Avengers: End game",
            "John Wick 3: Parabellum John Wick 3: Parabellum ",
          ].map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))
        )}
      </List>
    </Drawer>
  );
}

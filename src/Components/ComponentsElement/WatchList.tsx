// import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function WatchListDrawer({ isOpen, setIsOpen }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List>
        {[
          "Attack on titan",
          "Avengers: End game",
          "John Wick 3: Parabellum John Wick 3: Parabellum ",
        ].map((text) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

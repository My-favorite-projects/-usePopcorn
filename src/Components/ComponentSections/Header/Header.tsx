import { Box, Typography, IconButton, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header({ setIsOpen }) {
  return (
    <header>
      <Box className="flex justify-between w-11/12 m-auto py-3">
        <Box className="flex items-center">
          <img src="./public/images/tv.png" alt="Logo" className="mr-2" />
          <Button>
            <Typography variant="h4" className="ffb text-light">
              MovieBox
            </Typography>
          </Button>
        </Box>

        <Box className="border border-2 rounded-md w-2/5 flex items-center">
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
            }}
            placeholder="What do you want to watch?"
            inputProps={{ "aria-label": "What do you want to watch?" }}
            className="w-full ffb text-8xl text-light"
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <Box className="flex items-center">
          <Button
            variant="text"
            size="small"
            sx={{ border: 2, borderColor: "white" }}
            onClick={() => setIsOpen(true)}
          >
            <Typography variant="h5" className="ffb text-light">
              Watch List
            </Typography>
          </Button>
        </Box>
      </Box>
    </header>
  );
}

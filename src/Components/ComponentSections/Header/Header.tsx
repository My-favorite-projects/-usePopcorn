import { Box, Typography, Button } from "@mui/material";
import { SearchBar } from "../../ComponentsElement/SearchBar";

export default function Header({ setIsOpen, showCardDetails }: any) {
  return (
    <header>
      <Box className="flex justify-between w-11/12 m-auto py-3">
        <Box className="flex items-center">
          <img src="./public/images/tv.png" alt="Logo" className="mr-2" />
          <Button onClick={() => showCardDetails(null)}>
            <Typography variant="h4" className="ffb text-light">
              MovieBox
            </Typography>
          </Button>
        </Box>

        <SearchBar />

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

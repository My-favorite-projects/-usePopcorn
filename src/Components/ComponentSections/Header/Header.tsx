import { Box, Typography, Button } from "@mui/material";
import { SearchBar } from "../../ComponentsElement/SearchBar";

export default function Header({ setIsOpen, showCardDetails, setQuery }: any) {
  return (
    <header>
      <Box className="flex justify-between w-11/12 m-auto py-3">
        <Box className="flex items-center">
          <img src="./public/images/tv.png" alt="Logo" className="mr-2" />
          <Button onClick={() => showCardDetails(null)}>
            <Typography variant="h4" className="ffb text-dark">
              MovieBox
            </Typography>
          </Button>
        </Box>

        <SearchBar setQuery={setQuery} />

        <Box className="flex items-center">
          <Button
            variant="text"
            size="small"
            sx={{ border: 2, borderColor: "#9CA3AF" }}
            onClick={() => setIsOpen(true)}
          >
            <Typography variant="h5" className="ffb text-secondary">
              Watch List
            </Typography>
          </Button>
        </Box>
      </Box>
    </header>
  );
}

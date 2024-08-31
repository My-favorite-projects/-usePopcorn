import { Box, Typography, Button } from "@mui/material";
import { SearchBar } from "../../ComponentsElement/SearchBar";

export default function Header({
  setIsOpen,
  showCardDetails,
  setQuery,
  query,
}: any) {
  return (
    <header
      style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}
      className={query < 2 ? "" : "bg-light"}
    >
      <Box className="flex justify-between w-11/12 m-auto py-3">
        <Box className="flex items-center">
          <Box
            component="img"
            src="./public/images/tv.png"
            alt="Logo"
            className="mr-2"
          />
          <Button onClick={() => showCardDetails(null)}>
            <Typography
              variant="h4"
              className={query < 2 ? "text-light ffb" : "text-dark ffb"}
            >
              MovieBox
            </Typography>
          </Button>
        </Box>

        <SearchBar setQuery={setQuery} query={query} />

        <Box className="flex items-center">
          <Button
            variant="text"
            size="small"
            sx={
              query < 2
                ? { border: 2, borderColor: "#fff" }
                : { border: 2, borderColor: "#000" }
            }
            onClick={() => setIsOpen(true)}
          >
            <Typography
              variant="h5"
              className={query < 2 ? "ffb text-light" : "ffb text-dark"}
            >
              Watch List
            </Typography>
          </Button>
        </Box>
      </Box>
    </header>
  );
}

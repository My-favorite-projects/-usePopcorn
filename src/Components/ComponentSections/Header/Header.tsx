import { Box, Typography, Button } from "@mui/material";
import { SearchBar } from "../../ComponentsElement/SearchBar";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({
  setIsOpen,
  setCardDetails,
  setQuery,
  query,
}: any) {
  return (
    <header
      style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}
      className={query < 2 ? "" : "bg-light"}
    >
      <Box className="flex justify-between w-11/12 m-auto py-3 cursor-pointer">
        <Box className="flex items-center" onClick={() => setCardDetails(null)}>
          <Box
            component="img"
            src="./public/images/tv.png"
            alt="Logo"
            className="mr-2 logo-icon"
          />
          <Button>
            <Typography
              variant="h4"
              className={
                query < 2
                  ? "text-light ffb logo-title"
                  : "text-dark ffb logo-title"
              }
            >
              MovieBox
            </Typography>
          </Button>
        </Box>

        <SearchBar setQuery={setQuery} query={query} />

        <Box className="flex items-center watch-btn">
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

        <Box
          onClick={() => setIsOpen(true)}
          className="watch-bumberger text-secondary px-4 mt-2 cursor-pointer"
        >
          <MenuIcon />
        </Box>
      </Box>
    </header>
  );
}

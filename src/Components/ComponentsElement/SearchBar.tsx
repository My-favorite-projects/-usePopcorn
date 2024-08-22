import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function SearchBar({ query, setQuery }: any) {
  return (
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
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

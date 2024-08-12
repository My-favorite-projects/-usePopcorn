import { Box, Typography, IconButton, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header(props: any) {
  return (
    <>
      <Box
        className="flex justify-between py-3"
        sx={{ backgroundColor: props.bg ? props.bg : null }}
      >
        <Box className="flex items-center">
          <img src="./public/images/tv.png" alt="Logo" className="mr-2" />
          <Button>
            <Typography
              variant="h4"
              className={`ffb ${props.bg ? "text-secondary" : "text-dark"}`}
            >
              MovieBox
            </Typography>
          </Button>
        </Box>

        <Box className="border border-2 rounded-md w-2/5 flex items-center">
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: props.bg ? "white" : "black",
            }}
            placeholder="What do you want to watch?"
            inputProps={{ "aria-label": "What do you want to watch?" }}
            className={`w-full ffb text-8xl`}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>

        <Box className="flex items-center">
          <Button
            variant="text"
            size="small"
            sx={{ border: 2, borderColor: props.bg ? "white" : "black" }}
          >
            <Typography
              variant="h5"
              className={`ffb ${props.bg ? "text-secondary" : "text-dark"}`}
            >
              Movie List
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

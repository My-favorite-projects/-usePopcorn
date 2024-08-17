import { Container, Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <Container className="text-center">
        <Box className="flex justify-between w-2/5 m-auto mb-4">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>

        <Box className="flex justify-between w-3/5 m-auto mb-4">
          <Typography variant="subtitle1">Conditions of Use</Typography>
          <Typography variant="subtitle1">Privacy & Policy</Typography>
          <Typography variant="subtitle1">Press Room</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" className="text-secondary pb-4">
            © 2021 MovieBox by Adriana Eka Prayudha
          </Typography>
        </Box>
      </Container>
    </>
  );
}

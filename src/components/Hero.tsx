import { Box } from "@mui/material";
import HeroBg from "../assets/login.jpg";
function Hero() {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${HeroBg})`,
        height: "80vh",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default Hero;

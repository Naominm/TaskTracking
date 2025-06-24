import { Box, Button, TextField } from "@mui/material";
import HeroBg from "../assets/login.jpg";
function Hero() {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${HeroBg})`,
        height: "80vh",
        backgroundSize: "cover",
        borderRadius: "0.5rem",
      }}
    >
      <Box
        component="form"
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          },
        }}
      >
        <TextField
          label="Task Title"
          variant="filled"
          sx={{ bgcolor: "#fff", borderRadius: "0.5rem", overflow: "hidden" }}
          fullWidth
        />
        <TextField
          label="Task Description"
          variant="filled"
          sx={{ bgcolor: "#fff", borderRadius: "0.5rem", overflow: "hidden" }}
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "var(--primary-color)" }}
        >
          Add todo
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;

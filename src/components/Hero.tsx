import useTaskStore from "../store/taskStore";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import HeroBg from "../assets/login.jpg";
function Hero() {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title || !description) return;

    addTask({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }
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
        onSubmit={handleSubmit}
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ bgcolor: "#fff", borderRadius: "0.5rem", overflow: "hidden" }}
          fullWidth
        />
        <TextField
          label="Task Description"
          variant="filled"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ bgcolor: "#fff", borderRadius: "0.5rem", overflow: "hidden" }}
          fullWidth
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "100%", backgroundColor: "var(--primary-color)" }}
        >
          Add todo
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;

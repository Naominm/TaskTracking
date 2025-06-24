import useTaskStore from "../store/taskStore";
import { Box, Button, Typography } from "@mui/material";
function TodoList() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <>
      {tasks.map((task, index) => (
        <Box
          key={index}
          component="div"
          sx={{
            width: "20%",
            mt: 5,
            backgroundColor: "#999",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            borderRadius: "1rem",
            pb: 2,
          }}
        >
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body2">{task.description}</Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--secondary-color)",
                fontSize: "0.5rem",
              }}
            >
              mark As Complete
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "crimson", fontSize: "0.5rem" }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default TodoList;

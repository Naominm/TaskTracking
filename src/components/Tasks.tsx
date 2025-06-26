import { Box } from "@mui/material";
import TodoList from "./TodoItem";

function TasksDisplay() {
  return (
    <Box
      component="div"
      sx={{
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        mx: 2,
      }}
    >
      <TodoList />
    </Box>
  );
}

export default TasksDisplay;

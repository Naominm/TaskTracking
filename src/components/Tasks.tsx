import { Box } from "@mui/material";
import TodoList from "./TodoItem";

function TasksDisplay() {
  return (
    <Box component="div" sx={{ width: "100%", display: "flex", gap: "2rem" }}>
      <TodoList />
    </Box>
  );
}

export default TasksDisplay;

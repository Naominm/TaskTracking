import useTaskStore from "../store/taskStore";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
function TodoList() {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleEdit = (task: {
    id: number;
    title: string;
    description: string;
  }) => {
    setEditTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };
  const handleSave = (id: number) => {
    updateTask(id, {
      title: editedTitle,
      description: editedDescription,
    });
    setEditTaskId(null);
  };
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
          {editTaskId === task.id ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </Box>
      ))}
    </>
  );
}

export default TodoList;

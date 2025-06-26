import useTaskStore from "../store/taskStore";
import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import { CiEdit } from "react-icons/ci";

import { useState } from "react";
function TodoList() {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleEdit = (task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
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
  const markAsCompleted = useTaskStore(function (state) {
    return state.markComplete;
  });
  const markAsIncomplete = useTaskStore(function (state) {
    return state.markIncomplete;
  });
  function handleMarkIncomplete(id: number) {
    markAsIncomplete(id);
  }
  function handleMarkComplete(id: number) {
    markAsCompleted(id);
  }
  return (
    <>
      {tasks.map((task, index) => (
        <Box
          key={index}
          component="div"
          sx={{
            width: { xs: "80%", md: "20%" },
            height: "auto",
            mt: 5,
            backgroundColor: "var(--card-bg)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            borderRadius: "1rem",
            pb: 2,
          }}
        >
          {editTaskId === task.id ? (
            <>
              <TextField
                label="Edit Title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                size="small"
                sx={{ mt: 5 }}
              />
              <TextField
                label="Edit Description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                size="small"
                multiline
              />
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button
                  variant="contained"
                  onClick={() => handleSave(task.id)}
                  sx={{ backgroundColor: "green", fontSize: "0.5rem" }}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setEditTaskId(null)}
                  sx={{ fontSize: "0.5rem" }}
                >
                  Cancel
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  pr: 1,
                  pt: 1,
                }}
              >
                <IconButton
                  sx={{
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    alignItems: "right",
                  }}
                  size="small"
                  onClick={() => handleEdit(task)}
                >
                  <CiEdit size={18} />
                </IconButton>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.description}
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--secondary-color)",
                    fontSize: "0.5rem",
                  }}
                  onClick={() =>
                    task.completed
                      ? handleMarkIncomplete(task.id)
                      : handleMarkComplete(task.id)
                  }
                >
                  {task.completed ? "mark As Incomplete" : "mark As Completed"}
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "crimson", fontSize: "0.5rem" }}
                  onClick={() => deleteTask(task.id)}
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

import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import TasksDisplay from "../components/Tasks";
function DashboardPage() {
  return (
    <Box component="div">
      <NavBar />
      <Hero />
      <TasksDisplay />
    </Box>
  );
}

export default DashboardPage;

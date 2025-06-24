import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function NavBar() {
    
  return (
    <Box component="div">
      <AppBar sx={{ backgroundColor: "var(--primary-color)" }}>
        <Toolbar>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", gap: "20rem" }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", textTransform: "uppercase" }}
            >
              Task Tracker
            </Typography>
            <Box
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "left",
              }}
            >
              <Button color="inherit">Home</Button>
              <Button color="inherit">Another page</Button>
            </Box>
            <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

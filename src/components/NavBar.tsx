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
import { Link } from "react-router-dom";
function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
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
                gap: "2rem",
                justifyContent: "left",
              }}
            >
              <Button color="inherit" component={Link} to="/dashboard">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/second">
                Second
              </Button>
            </Box>
            <IconButton
              onClick={handleMenuOpen}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Second</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

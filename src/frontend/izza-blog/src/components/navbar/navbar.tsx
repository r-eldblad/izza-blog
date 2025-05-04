import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

import { useNavigate } from "react-router-dom";
import { purple } from "@mui/material/colors";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ mb: 5, bgcolor: purple[300] }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={() => navigate("/")}>
            Hem
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Logga in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BedIcon from "@mui/icons-material/Bed";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 , p:0.02}}>
      <AppBar position="static" sx={{ backgroundColor: "#010052" }}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="bed icon"
            sx={{ mr: 2, color: "white" }}
          >
            <BedIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            Our-Home
          </Typography>
          <IconButton
            edge="start"
            aria-label="notifications icon"
            sx={{ mr: 2, color: "white" }}
          >
            <NotificationsActiveIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BedIcon from "@mui/icons-material/Bed";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HomeIcon from '@mui/icons-material/Home';
import { Container, Grid2 } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {

    const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#16325B" }}>
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="bed icon"
            onClick={() => navigate("/home")} 
            sx={{ mr: 1, color: "white" }}
          >
            <HomeIcon sx={{ fontSize: 50 }}   />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "white" , fontWeight: 500 ,fontFamily: "Roboto, sans-serif" }}
          >
            OUR-HOME
          </Typography>
          <IconButton
            edge="start"
            aria-label="notifications icon"
            sx={{ mr: 0, color: "white" }}
            onClick={(e) => 
              alert("จ่ายตังด้วยน้อง")}
          >
            <NotificationsActiveIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar;
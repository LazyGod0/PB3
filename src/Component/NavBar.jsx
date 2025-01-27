import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../Auth/useAuthForm";

function NavBar() {
  const {handleSignOut} = useAuth();
  return (
    <Box >
      <AppBar position="static" sx={{ backgroundColor: "#16325B" }}>
        
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                edge="start"
                aria-label="home icon"
                sx={{ color: "white" }}
              >
                <HomeIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <Typography variant="h6" sx={{ color: "white" }}>
                Our-Home
              </Typography>
            </Box>
            <Box>
            <IconButton
              edge="end"
              aria-label="notifications icon"
              sx={{ color: "white" }}
            >
              <NotificationsActiveIcon sx={{ fontSize: 32 }} />
            </IconButton>     
            <Button startIcon={<LogoutIcon sx={{color:'white',ml:'20px'}}/>} onClick={handleSignOut}>
              <Typography variant="body2" sx={{color:'white'}}>
                ออกจากระบบ
              </Typography>
            </Button>
            </Box>
          </Toolbar>
        
      </AppBar>
    </Box>
  );
}

export default NavBar;

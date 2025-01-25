import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/useAuthForm.jsx";

//Name of buttons in navbar
const pages = [];
//Items of menu in profile icon

const path = { Dashboard: "/home", Features: "/profile", Profile: "/profile" };

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  //To open the menu in profile picture
  const [anchorElUser, setAnchorElUser] = useState(null);

  const authForm = useAuth();

  const { handleSignOut, user } = useAuth();

  // Open user settings menu
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // // Close user settings menu
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // Navigate to pages or actions
  const navigatePage = (path) => {
    if (path === "Log Out") {
      handleSignOut();
    } else {
      navigate(path);
    }
  };

  return (
    <AppBar position="fixed" sx={{ height: "80px", width: "100%" }}>
      <Toolbar sx={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <Container
          maxWidth="xl"
          sx={{
            width: "750px",
            height: "100%",
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* <Box>
          <Box component={'div'} sx={{width:'50px',height:'50px',backgroundColor:'gray',borderRadius:'50%'}}></Box>
          </Box> */}
          <Box component={'div'} sx={{height:'100%',display:'flex',alignItems:'center',gap:'20px'}}> 
            <Avatar
              alt="User Avatar"
              src={"iconprofile.webp"}
              sx={{ width: "50px", height: "50px" }}
            />
            <Typography sx={{color:'black',fontSize:'25px'}}>สมชาย สายฟ้า</Typography>
          </Box>
          {/* Logo and Title */}
          {/* <ImageList
            cols={1}
            rowHeight={"auto"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ImageListItem key="Logo" sx={{ width: "80px", height: "80px" }}>
              <img src={`/Logo.png`} alt="Our Home" loading="lazy" />
            </ImageListItem>
          </ImageList> */}

          {/* Page Navigation */}
          <Box sx={{ flexGrow: 1, display: "flex", height: "100%" }}>
            {pages.map((page) => (
              <Button
                key={page}
                value={page}
                onClick={() => navigatePage(path[page])}
                sx={
                  location.pathname !== path[page]
                    ? {
                        width: "150px",
                        color: "black",
                        backgroundColor: "transparent",
                        transition: "all 0.3s ease-out",
                        "&:hover": {
                          backgroundColor: "rgb(255,212,158,0.2)",
                        },
                      }
                    : {
                        width: "150px",
                        height: "100%",
                        position: "relative",
                        padding: "10px 20px",
                        fontSize: "16px",
                        color: "black",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          width: "100%",
                          height: "5px",
                          backgroundColor: "black",
                          transform: "scaleX(1)",
                          transformOrigin: "bottom right",
                          transition: "all 0.3s ease-out",
                          borderRadius: "5px 5px 0px 0px",
                        },
                        "&:hover": {
                          backgroundColor: "rgb(255,212,158,0.2)",
                        },
                      }
                }
              >
                <Typography component="p">{page}</Typography>
              </Button>
            ))}
          </Box>

          {/* User Authentication & Menu */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={avatar ? avatar : "#"} />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser} // Use the element inside {} to be anchor
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted // Determine that this element still in DOM even though it is hidden
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)} //For open this component
              onClose={handleCloseUserMenu} //For close this component
            >
              {settings.map((setting) => (
                //React recommend to set key inside the item
                <MenuItem
                  key={setting}
                  value={setting}
                  onClick={
                    setting === "Log Out"
                      ? handleSignOut
                      : () => navigatePage(path[setting])
                  }
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;

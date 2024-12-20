import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.jsx';

//Name of buttons in navbar
const pages = ['Home', 'Features', 'Contact'];

//Items of menu in profile icon
const settings = ['Profile',  'Dashboard', 'Log Out'];

function NavBar() {

  //Use to navigate to the other page
  const navigate = useNavigate();

  //To open the menu in profile picture 
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  //To check if user log in or not
  const [user, setUser] = useState(null);

  // Open user settings menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Close user settings menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null); 
  };

  
  // Handle user logout
  const handleSignOut = async () => {
    await signOut(auth)
    navigate('/login'); // Redirect to login page after sign out
  };

  // Navigate to pages or actions
  const navigatePage = (event) => {
    //Current target is refer to the event which happended in current
    const value = event.currentTarget.value;
    if (value) {
      navigate(`/${value}`);
    }
  };

  // Handle menu item clicks
  const handleMenuClick = (setting) => {
    if (setting === 'Log Out') {
      handleSignOut();//For log out
    } 
    handleCloseUserMenu();
  };

  // Check for authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser) 
    });
    return () => unsubscribe();//To close listener of onAuthStateChanged
  }, []);

  return (
    <AppBar position="fixed" sx={{height: '64px'}}>
      <Container maxWidth="xl" sx={{ backgroundColor: 'white' }}>
        <Toolbar disableGutters>
          {/* Logo and Title */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#1976d2' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1976d2',
              textDecoration: 'none',
            }}
          >
            Review
          </Typography>

          {/* Page Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                value={page.toLowerCase()}
                onClick={navigatePage}
                sx={{ display: 'block', color: '#1976d2' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User Authentication & Menu */}
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src={user.photoURL || '/default-avatar.png'} />
                  </IconButton>
                </Tooltip>
                {/*Here is menu component */}
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser} // Use the element inside {} to be anchor
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted // Determine that this element still in DOM even though it is hidden
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}//For open this component
                  onClose={handleCloseUserMenu}//For close this component
                >
                  {settings.map((setting) => (
                    //React recommend to set key inside the item
                    <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                      <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box component="div" sx={{ display: 'flex', gap: '15px' }}>
                <Button
                  value="login"
                  onClick={navigatePage}
                  variant="contained"
                  sx={{ backgroundColor: '#1976d2' }}
                >
                  Login
                </Button>
                <Button value="register" onClick={navigatePage} variant="outlined">
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

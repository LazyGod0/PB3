import React, { useState } from 'react';
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
import { useAuth } from '../Auth/useAuthForm.jsx';
//Name of buttons in navbar
const pages = ['Dashboard', 'Features', 'Contact'];

//Items of menu in profile icon
const settings = ['Profile',  'Log Out'];

function NavBar() {
  const navigate = useNavigate();
  //To open the menu in profile picture 
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  const authForm = useAuth();

  const {user,handleSignOut} = authForm;
  
  // Open user settings menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Close user settings menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null); 
  };

  // Navigate to pages or actions
  const navigatePage = (event) => {
    //Current target is refer to the event which happended in current
    const value = event.currentTarget.value;
    if (value === 'Log In') {
      navigate(`/`);
    } else {
      navigate(`/${value}`);
    }
  };

  // Handle menu item clicks
  // const handleMenuClick = (setting) => {
  //   if (setting === 'Log Out') {
  //     handleSignOut();//For log out
  //   } 
  //   else {
  //     handleCloseUserMenu();
  //   }
  // };

  return  (
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
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src={ user? user.photoURL || '/default-avatar.png':'#'} />
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
                    <MenuItem key={setting} onClick={setting === 'Log Out' ? handleSignOut : handleCloseUserMenu}>
                      <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
        
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

import React from 'react'
import { useState } from 'react';
import { Box,IconButton,Avatar,Typography,Button } from '@mui/material'
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import user from '../Component/NavBar.jsx'
import {db} from '../firebase/firebase.jsx'
import { getDocs,doc } from 'firebase/firestore'; 

function Profile() {
  return (
    <>
      <Box component="div" 
      sx={{
        display:'flex',
        flexFlow:'column',
        gap:'20px',
        alignItems:'center'}}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="User Avatar" src={user.photoURL || '/default-avatar.png'} />
        </IconButton>
        <Box component='div' sx={{
        display:'flex',
        flexFlow:'column',
        gap:'20px',
        alignItems:'center'}}>
        <Typography variant ='p' component ='p' >Username:</Typography>
        <Typography variant ='p' component ='p' >Email:{user.email}</Typography>
        <Typography variant='p' component='p' >Description: "Not have description yet"</Typography>
        </Box>
        <Button variant='contained' sx={{backgroundColor:'yellow'}}>Edit Your Profile</Button>
      </Box>
      
      
    </>
  )
}

export default Profile
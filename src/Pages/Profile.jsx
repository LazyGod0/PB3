import React from "react";
import { Box, IconButton, Avatar, Typography, Button,styled } from "@mui/material";
import { useAuth } from "../Auth/useAuthForm.jsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function Profile() {
  const user = useAuth();
  const VisuallyHiddenInput = styled('input')({
   
  });
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexFlow: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
      </Box>
      <IconButton sx={{ p: 0 }}>
        <Avatar
          alt="User Avatar"
          src={user ? user.photoURL || "/default-avatar.png" : "#"}
          sx={{width:'100px',height:'100px',fontSize:'3rem'}}
        />
      </IconButton>
      
    </>
  );
}

export default Profile;

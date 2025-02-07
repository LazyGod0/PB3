import React from "react";
import { useAuth } from "../Auth/useAuthForm";
import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

const UserRoleRoutes = () => {
  const auth = useAuth();

  if (auth.loading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={70}/>
      </Box>
    );
  }
  if(!auth.user) {
    return <Navigate to ="/"/>
  }
  
  if(auth.userData) {
    if (auth.userData.role === "user") {
      return <Navigate to="/home" />;
    }
  }
  

  return <Outlet />;
};

export default UserRoleRoutes;

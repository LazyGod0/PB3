import React from "react";
import { useEffect } from "react";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'; // Import ReceiptLongIcon
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

function Payme() {
  const navigate = useNavigate();
  const { user, logOutState } = useAuth();
  useEffect(() => {
    if (logOutState && !user) {
      navigate("/");
    }
  }, [logOutState, user, navigate]);

  const handleWaterClick = () => {
    navigate('/hirmoney'); 
  };

  const handleElectricityClick = () => {
    navigate('/money'); 
  };

  return (
    <>
      <Box
        sx={{
          padding: "50px", 
          boxShadow: "0px 0px 10px black",
          width: "400px", 
          borderRadius: "20px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
        }}
      >
        <Button
          onClick={handleElectricityClick}
          sx={{
            width: '80%', 
            height: "80px", 
            boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: '20px', 
            color: "black",
          }}
        >
          <Box component="div" sx={{ width: "100%", height: "100%" }}>
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontFamily: "Kanit" }}
              >
                ประวัติการชำระเงิน
              </Typography>
              <ReceiptLongIcon sx={{ color: "#ffd49f", ml: "10px" }} />
            </Box>
          </Box>
        </Button>
        <Button
          onClick={handleWaterClick}
          sx={{
            width: '80%', 
            height: "80px", 
            boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
            borderRadius: "10px",
            padding: "10px",
            color: "black",
          }}
        >
          <Box component="div" sx={{ width: "100%", height: "100%" }}>
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontFamily: "Kanit" }}
              >
                ชำระเงิน
              </Typography>
              <WaterDropRoundedIcon sx={{ color: "#dee9ff", ml: "10px" }} />
            </Box>
          </Box>
        </Button>
      </Box>
    </>
  );
}

export default Payme;
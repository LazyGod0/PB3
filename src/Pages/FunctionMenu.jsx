import React, { useEffect } from "react";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  // Removed background color and kept only essential styling for layout.
  position: "fixed",
  top: 85,
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px",
  width: "500px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "transparent", // Removed background color to make it transparent.
  borderRadius: "10px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  minHeight: "60px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

function FunctionMenu() {
  const navigate = useNavigate();
  const { user, logOutState } = useAuth();

  useEffect(() => {
    if (logOutState && !user) {
      navigate("/");
    }
  }, [logOutState, user, navigate]);

  const handleRentClick = () => {
    navigate("/roomma");
  };

  const handleWaterClick = () => {
    navigate("/waternom");
  };

  const handleElectricityClick = () => {
    navigate("/fiser");
  };

  return (
    <div>
      <StyledBox>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyledButton onClick={handleRentClick}>
              <MapsHomeWorkRoundedIcon sx={{ fontSize: "2rem" }} />
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledButton onClick={handleWaterClick}>
              <WaterDropRoundedIcon sx={{ fontSize: "2rem" }} />
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledButton onClick={handleElectricityClick}>
              <FlashOnRoundedIcon sx={{ fontSize: "2rem" }} />
            </StyledButton>
          </Grid>
        </Grid>
      </StyledBox>
    </div>
  );
}
export default FunctionMenu;

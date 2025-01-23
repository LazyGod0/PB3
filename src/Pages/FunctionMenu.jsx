import React, { useEffect } from "react";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button} from "@mui/material";
import Grid from '@mui/material/Grid2';
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 100,
  left: "50%",
  transform: "translateX(-50%)",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  width: "750px",
  borderRadius: "20px",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
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
    <div position="static">
      <StyledBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "#ffd481", color: "black" }}
              onClick={handleRentClick}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapsHomeWorkRoundedIcon sx={{ fontSize: "3rem" }} />
                <StyledTypography
                  variant="h5"
                  component="h5"
                  sx={{ ml: "10px" }}
                >
                  ค่าเช่าห้อง
                </StyledTypography>
              </Box>
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "#ffd49f", color: "black" }}
              onClick={handleWaterClick}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WaterDropRoundedIcon sx={{ fontSize: "3rem" }} />
                <StyledTypography
                  variant="h5"
                  component="h5"
                  sx={{ ml: "10px" }}
                >
                  ค่าน้ำ
                </StyledTypography>
              </Box>
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "#dee9ff", color: "black" }}
              onClick={handleElectricityClick}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FlashOnRoundedIcon sx={{ fontSize: "3rem" }} />
                <StyledTypography
                  variant="h5"
                  component="h5"
                  sx={{ ml: "10px" }}
                >
                  ค่าไฟ
                </StyledTypography>
              </Box>
            </StyledButton>
          </Grid>
        </Grid>
      </StyledBox>
    </div>
  );
}
export default FunctionMenu;

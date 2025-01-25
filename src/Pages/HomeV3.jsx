import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import NavBar from "../Component/NavBar.jsx";
import PopUp from "../Component/PopUp.jsx";
import Sumramoney from "./Sumramoney.jsx";
import { useAuth } from "../Auth/useAuthForm.jsx";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  fontWeight: "bold",
}));

const MoveTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
}));

function Home() {
  const navigate = useNavigate();
  const { user, logOutState } = useAuth();
  const [open, setPopUp] = useState(false);

  const handleOpen = () => {
    setPopUp(true);
  };

  const handleClose = () => {
    setPopUp(false);
  };

  useEffect(() => {
    if (logOutState && !user) {
      navigate("/");
    }
  }, [logOutState, user, navigate]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ textAlign: "left", padding: "0 20px" }}>
        <StyledTypography variant="h4">
          ยินดีต้อนรับ ผู้เช่า {user?.email}
        </StyledTypography>
      </Box>
      <Box sx={{ flexDirection: "column", padding: "0 20px" }}>
        <NavBar />
        <br />
        <Box
          sx={{
            padding: "20px",
            boxShadow: "0px 0px 10px black",
            width: "100%",
            maxWidth: "750px",
            borderRadius: "20px",
            backgroundColor: "#ADD8E6",
            margin: "0 auto",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
            <MoveTypography variant="h5">
              บิลค่าใช้จ่าย ประจำเดือน มกราคม 2077
            </MoveTypography>
          </Box>

          {/* ค่าใช้จ่ายรวม */}
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "90px",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              marginBottom: "20px",
              position: "relative",
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              color: "black",
              backgroundColor: "white",
            }}
          >
            {/* ไอคอนซ้าย */}
            <AttachMoneyRoundedIcon
              sx={{ color: "#ffd700", fontSize: "2rem" }}
            />
            <StyledTypography
              variant="h5"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              ค่าใช้จ่ายรวม: ฿12,345
            </StyledTypography>
            <StyledTypography
              sx={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                fontSize: "12px",
                color: "#080160",
              }}
              onClick={handleOpen}
            >
              กดเพื่อรายละเอียด
            </StyledTypography>
          </Box>

          {/* รายการค่าใช้จ่าย */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {/* ค่าเช่าห้อง */}
            <Box
              sx={{
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "300px",
                textAlign: "center",
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
                backgroundColor: "white",
              }}
              onClick={handleOpen}
            >
              <StyledTypography variant="h6">ค่าเช่าห้อง</StyledTypography>
              <AttachMoneyRoundedIcon
                sx={{ color: "#ffd481", fontSize: "2rem", marginTop: "10px" }}
              />
            </Box>

            {/* ค่าน้ำ */}
            <Box
              sx={{
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "10px",
                textAlign: "center",
              }}
              onClick={handleOpen}
            >
              <StyledTypography variant="h6">ค่าน้ำ</StyledTypography>
              <AttachMoneyRoundedIcon
                sx={{ color: "#dee9ff", fontSize: "2rem", marginTop: "10px" }}
              />
            </Box>

            {/* ค่าไฟ */}
            <Box
              sx={{
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "10px",
                textAlign: "center",
              }}
              onClick={handleOpen}
            >
              <StyledTypography variant="h6">ค่าไฟ</StyledTypography>
              <AttachMoneyRoundedIcon
                sx={{ color: "#ffd49f", fontSize: "2rem", marginTop: "10px" }}
              />
            </Box>
          </Box>
        </Box>
        <br />
        <Sumramoney />
        <PopUp value="elec" handleClose={handleClose} open={open} />
      </Box>
    </div>
  );
}

export default Home;

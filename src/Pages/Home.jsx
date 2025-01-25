import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import NavBar from "../Component/NavBar.jsx";
import PopUp from "../Component/PopUp.jsx";
import Sumramoney from "./Sumramoney.jsx";
import { useAuth } from "../Auth/useAuthForm.jsx";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import HomeIcon from "@mui/icons-material/Home";
import WaterIcon from "@mui/icons-material/Water";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  fontWeight: "bold",
  color: "#080160",
}));

const MoveTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
}));

const TTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "left",
  color: "#080160",
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
      <Box sx={{ textAlign: "left", padding: "0 20px" }}>
        <TTypography variant="h4">
          ยินดีต้อนรับ ผู้เช่า {user?.email}
        </TTypography>
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
            height: "100%",
            boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
            borderRadius: "10px",
            padding: "10px",
            color: "black",
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
            {/* ค่าใช้จ่ายรวม text and icon */}
            <StyledTypography
              sx={{
                position: "absolute",
                left: "10px",
                top: "10px",
                fontSize: "20px",
                color: "080160",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center", // ใช้ flex สำหรับการจัดการ icon
              }}
            >
              ค่าใช้จ่ายรวม
              <AttachMoneyRoundedIcon
                sx={{ color: "#080160", fontSize: "2rem", marginLeft: "10px" }}
              />
            </StyledTypography>
            <StyledTypography
              variant="h5"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              xxxx:
            </StyledTypography>
            <StyledTypography
              sx={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                fontSize: "20px",
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
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "60px",
                color: "black",
                backgroundColor: "white",
                position: "relative",
              }}
              onClick={handleOpen}
            >
              <StyledTypography
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: "5px",
                  fontSize: "20px",
                  color: "#080160",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ค่าเช่าห้อง
                <HomeIcon
                  sx={{
                    fontSize: "2rem",
                    color: "#003366",
                    marginLeft: "10px",
                  }}
                />
              </StyledTypography>
            </Box>

            {/* ค่าน้ำ */}
            <Box
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
                backgroundColor: "white",
                position: "relative",
              }}
              onClick={handleOpen}
            >
              <StyledTypography
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: "10px",
                  fontSize: "20px",
                  color: "#080160",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ค่าน้ำ
                <WaterDropIcon
                  sx={{
                    fontSize: "3rem",
                    color: "#003366",
                    marginLeft: "10px",
                  }}
                />
              </StyledTypography>
              <StyledTypography
                variant="h5"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                xxxx:
              </StyledTypography>
              <StyledTypography
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  fontSize: "20px",
                  color: "#080160",
                }}
                onClick={handleOpen}
              >
                กดเพื่อรายละเอียด
              </StyledTypography>
            </Box>

            {/* ค่าไฟ */}
            <Box
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
                backgroundColor: "white",
                position: "relative",
              }}
              onClick={handleOpen}
            >
              <StyledTypography
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: "10px",
                  fontSize: "20px",
                  color: "#080160",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ค่าไฟ
                <WaterIcon
                  sx={{
                    fontSize: "2rem",
                    color: "#003366",
                    marginLeft: "10px",
                  }}
                />
              </StyledTypography>
              <StyledTypography
                variant="h5"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                xxxx:
              </StyledTypography>
              <StyledTypography
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  fontSize: "20px",
                  color: "#080160",
                  textAlign:"center",
                }}
                onClick={handleOpen}
              >
                กดเพื่อรายละเอียด
              </StyledTypography>
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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import NavBar from "../Component/NavBar.jsx";
import PopUp from "../Component/PopUp.jsx";
import SumraMoney from "../Component/Sumramoney.jsx";
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
  width: "750px",
}));


function Home() {
  const navigate = useNavigate();
  const { user, logOutState } = useAuth();
  const [open, setPopUp] = useState(false);
  const [value,setValue] = useState("");
  const [paymentData,setPayment] = useState({
    ePerUnit:0,
    eUnit:0,
    homeRent:0,
    wPerUnit:0,
    wUnit:0
  });

  useEffect(() => {
    console.log(user);
    if(user) {
      setPayment((prev) => ({
        ...prev,
        ePerUnit:parseFloat(user.electricBathPerUnit) || 0,
        eUnit:parseFloat(user.electricUnit) || 0,
        homeRent:parseFloat(user.homeRent) || 0,
        wPerUnit:parseFloat(user.waterBathPerUnit) || 0,
        wUnit:parseFloat(user.waterUnit)  || 0
      }))
    }
  },[user])
  const handleOpen = (e) => {
    setValue(e.currentTarget.value);
    console.log(value)
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
      <br />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "left", padding: "0 20px" }}>
          <TTypography variant="h5">
            ยินดีต้อนรับ ผู้เช่า {user?.email ? user.email : "สมชาย สายฟ้า"}
          </TTypography>
        </Box>
        <Box sx={{ flexDirection: "column", padding: "0 20px" }}>
          <NavBar />
          <br />
          <Box
            sx={{
              // padding: "20px",
              // boxShadow: "0px 0px 10px black",
              width: "100%",
              maxWidth: "750px",
              // borderRadius: "20px",
              backgroundColor: "#ADD8E6",
              margin: "0 auto",
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              color: "black",
              '.MuiButton-contained':{
                '&:hover' : {
                  backgroundColor:'rgba(150,200,210,1)'
                }
              }
            }}
          >
            <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
              <MoveTypography variant="h5">
                บิลค่าใช้จ่าย ประจำเดือน มกราคม 2077
              </MoveTypography>
            </Box>

            {/* ค่าใช้จ่ายรวม */}
            <Button
            variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                marginBottom: "20px",
                position: "relative",
                width: "100%",
                height: "150px",
                padding: "10px",
                borderRadius: "10px",
                color: "black",
                backgroundColor: "white",
              }}
              value={"total"}
              onClick={handleOpen}
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
                  alignItems: "center",
                }}
              >
                ค่าใช้จ่ายรวม
                <AttachMoneyRoundedIcon
                  sx={{
                    color: "#080160",
                    fontSize: "2rem",
                    marginLeft: "10px",
                  }}
                />
              </StyledTypography>
              <StyledTypography
                variant="h5"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                {(paymentData.homeRent+(paymentData.ePerUnit*paymentData.eUnit)+(paymentData.wPerUnit*paymentData.wUnit)).toLocaleString()}
              </StyledTypography>
              <StyledTypography
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  fontSize: "20px",
                  color: "#080160",
                }}
              >
                กดเพื่อรายละเอียด
              </StyledTypography>
            </Button>

            {/* รายการค่าใช้จ่าย */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
              }}
            >
              {/* ค่าเช่าห้อง */}
              <Button
              variant="contained"
                sx={{
                  height: "100%",
                  boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                  borderRadius: "10px",
                  padding: "75px",
                  color: "black",
                  backgroundColor: "white",
                  position: "relative",
                }}
                value={"home"}
                onClick={handleOpen}
              >
                <StyledTypography
                  variant="h5"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  {paymentData.homeRent.toLocaleString()}
                </StyledTypography>
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
                  ค่าเช่าห้อง
                  <HomeIcon
                    sx={{
                      fontSize: "2rem",
                      color: "#003366",
                      marginLeft: "10px",
                    }}
                  />
                </StyledTypography>
                <StyledTypography
                  sx={{
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                    fontSize: "15px",
                    color: "#080160",
                  }}
                >
                  กดเพื่อรายละเอียด
                </StyledTypography>
              </Button>

              {/* ค่าน้ำ */}
              <Button
              variant="contained"
                sx={{
                  height: "100%",
                  boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  position: "relative",
                }}
                value={"water"}
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
                      fontSize: "2rem",
                      color: "#003366",
                      marginLeft: "10px",
                    }}
                  />
                </StyledTypography>
                <br />
                <br />
                <br />
                <StyledTypography
                  variant="h5"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  {(paymentData.wUnit*paymentData.wPerUnit).toLocaleString()}
                </StyledTypography>
                <StyledTypography
                  sx={{
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                    fontSize: "15px",
                    color: "#080160",
                  }}
                >
                  กดเพื่อรายละเอียด
                </StyledTypography>
              </Button>

              {/* ค่าไฟas */}
              <Button
              variant="contained"
                sx={{
                  height: "100%",
                  boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  position: "relative",
                }}
                value={"elec"}
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
                <br />
                <br />
                <br />
                <StyledTypography
                  variant="h5"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  {(paymentData.ePerUnit*paymentData.eUnit).toLocaleString()}
                </StyledTypography>
                <StyledTypography
                  sx={{
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                    fontSize: "15px",
                    color: "#080160",
                    textAlign: "center",
                  }}
                >
                  กดเพื่อรายละเอียด
                </StyledTypography>
              </Button>
            </Box>
            <Box sx={{ pt: "25px" }}></Box>
          </Box>
          <br />
          <SumraMoney />
          <PopUp value={value} handleClose={handleClose} open={open} />
        </Box>
      </Box>
    </div>
  );
}

export default Home;
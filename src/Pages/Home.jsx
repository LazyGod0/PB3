import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import NavBar from "../Component/NavBar.jsx";
import PopUp from "../Component/PopUp.jsx";
import Sumramoney from "./Sumramoney.jsx";
import { useAuth } from "../Auth/useAuthForm.jsx";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import FunctionMenu from "./FunctionMenu.jsx";
import SearchIcon from "@mui/icons-material/Search";
import CreditCardIcon from '@mui/icons-material/CreditCard';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "IBM Plex Sans Thai, sans-serif",
  textAlign: "center",
  fontWeight: "bold",
  color: "#080160",
}));

const MoveTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "IBM Plex Sans Thai, sans-serif",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
}));

const TTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "IBM Plex Sans Thai, sans-serif",
  textAlign: "left",
  color: "#16325B",
  fontWeight: 700,
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
    wUnit:0,
    outstandingBalance:0
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
        wUnit:parseFloat(user.waterUnit)  || 0,
        outstandingBalance:parseFloat(user.outstandingBalance) || 0
      }))
    }
  },[user])

  const handleOpen = (e) => {
    setValue(e.target.value)
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
    <Box>
      <NavBar/>
    <Container>
      <Grid2 size={12}>
        <Grid2 size={12}>
          <Typography variant="h5" sx={{ color:'#16325B',fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700',ml:10,py:2}}>
                ยินดีต้อนรับ ผู้เช่า {user?.email}
            </Typography>
        </Grid2>
        <Grid2 size={12} sx={{ px:10 }}>
            <Box sx={{ width:'100%' , backgroundColor:'#78B7D0' , mx:0,p:1,borderRadius:5,px:15,py:5 }}>
                <Typography variant="h5" sx={{ color:'white',fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700',pb:3, textAlign:'center'}}>
                  บิลค่าใช้จ่าย ประจำเดือน มกราคม 2077
                </Typography>
                {/* ค่าใช้จ่ายรวม */}
                <Button
                    component="div"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      p:5,
                      boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                      marginBottom: "20px",
                      position: "relative",
                      height: "100%",
                      boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                      borderRadius: "10px",
                      color: "black",
                      backgroundColor: "white",
                      width: "100%",
                      backgroundColor: "#e7f5ff",
                    }}
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
                        sx={{ color: "#080160", fontSize: "2rem", marginLeft: "10px" }}
                      />
                    </StyledTypography>
                    <StyledTypography
                      variant="h5"
                      sx={{ flexGrow: 1, textAlign: "center" }}
                    >
                      {(paymentData.outstandingBalance+paymentData.homeRent+(paymentData.ePerUnit*paymentData.eUnit)+(paymentData.wPerUnit*paymentData.wUnit)).toLocaleString()}
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
                    component="div"
                    sx={{
                      height: "100%",
                      boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                      borderRadius: "10px",
                      padding: "50px",
                      color: "black",
                      backgroundColor: "white",
                      position: "relative",
                      backgroundColor: "#e7f5ff",
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
                      onClick={handleOpen}
                    >
                      กดเพื่อรายละเอียด
                    </StyledTypography>
                  </Button>

                  {/* ค่าน้ำ */}
                  <Button
                    component="div"
                    sx={{
                      height: "100%",
                      boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                      borderRadius: "10px",
                      padding: "10px",
                      color: "black",
                      backgroundColor: "white",
                      position: "relative",
                      backgroundColor: "#e7f5ff",
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
                      onClick={handleOpen}
                    >
                      กดเพื่อรายละเอียด
                    </StyledTypography>
                  </Button>

                  {/* ค่าไฟas */}
                  <Button
                    component="div"
                    sx={{
                      height: "100%",
                      boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                      borderRadius: "10px",
                      padding: "10px",
                      color: "black",
                      backgroundColor: "white",
                      position: "relative",
                      backgroundColor: "#e7f5ff",
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
                      <BoltIcon
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
            </Box>
        </Grid2>
        <Grid2 size={12}>
        <Box sx={{display:'flex',justifyContent:'center' , my:5}}>
                <Box sx={{ backgroundColor:'#16325B', px: 5,py:2,borderRadius:3,m:1 ,display:'flex' ,flexDirection:'column' ,alignItems:'center',cursor: "pointer",
                "&:hover": { backgroundColor: "#1B416A" }}} onClick={() => navigate("/his")}  >
                  <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'white'}} >
                    ประวัติการชำระเงิน
                  </Typography>
                  <SearchIcon sx={{color:'white',fontSize:30}}/>
                </Box>
                <Box sx={{ backgroundColor:'#16325B', px: 5,py:2,borderRadius:3,m:1,display:'flex' ,flexDirection:'column' ,alignItems:'center',cursor: "pointer",
                 "&:hover": { backgroundColor: "#1B416A" }}} onClick={() => navigate("/bill")}>
                  <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'white'}} >
                    ชำระเงิน
                  </Typography>
                  <CreditCardIcon sx={{color:'white',fontSize:30}}/>
                </Box>
            </Box>
        </Grid2>





        {/* <Box
          sx={{
            width: "100%",
            height: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Typography variant="h5" sx={{ color:'#16325B',fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>
            ยินดีต้อนรับ ผู้เช่า {user?.email}
          </Typography>
        </Box>
        <br />
        <br />
        <br />
        <Box
          sx={{
            width: "100%",
            maxWidth: "750px",
            backgroundColor: "#ADD8E6",
            margin: "0 auto",
            height: "100%",
            padding: "15px",
            color: "black",
            boxShadow: "0 0 5px green",
            borderRadius: "15px",
            backgroundColor: "#39acfe",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
            <MoveTypography variant="h5">
              บิลค่าใช้จ่าย ประจำเดือน มกราคม 2077
            </MoveTypography>
          </Box>

          
          <Button
            component="div"
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
              width: "100%",
              backgroundColor: "#e7f5ff",
            }}
            onClick={handleOpen}
          >
           
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
                sx={{ color: "#080160", fontSize: "2rem", marginLeft: "10px" }}
              />
            </StyledTypography>
            <StyledTypography
              variant="h5"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
               {(paymentData.outstandingBalance+paymentData.homeRent+(paymentData.ePerUnit*paymentData.eUnit)+(paymentData.wPerUnit*paymentData.wUnit)).toLocaleString()}
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

         
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
           
            <Button
              component="div"
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "75px",
                color: "black",
                backgroundColor: "white",
                position: "relative",
                backgroundColor: "#e7f5ff",
              }}
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
                onClick={handleOpen}
              >
                กดเพื่อรายละเอียด
              </StyledTypography>
            </Button>

            
            <Button
              component="div"
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
                backgroundColor: "white",
                position: "relative",
                backgroundColor: "#e7f5ff",
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
                onClick={handleOpen}
              >
                กดเพื่อรายละเอียด
              </StyledTypography>
            </Button>

            
            <Button
              component="div"
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
                backgroundColor: "white",
                position: "relative",
                backgroundColor: "#e7f5ff",
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
                <BoltIcon
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
        </Box>
        <br />
        <Sumramoney />
        <PopUp value="elec" handleClose={handleClose} open={open} /> */}
        <PopUp value={"elec"} handleClose={handleClose} open={open} /> 
      </Grid2>
    </Container>
    </Box>
  );
}

export default Home;

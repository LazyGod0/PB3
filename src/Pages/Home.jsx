import React from "react";
import NavBar from "../Component/NavBar.jsx";
import { useEffect } from "react";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';

function Home() {
  const navigate = useNavigate();
  const { user, logOutState } = useAuth();
  useEffect(() => {
    if (logOutState && !user) {
      navigate("/");
    }
  }, [logOutState, user, navigate]);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          padding: "20px",
          boxShadow: "0px 0px 10px black",
          width: "750px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ fontFamily: "Kanit" }}
        >
          ค่าใช้จ่าย
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "grid",
            gridTemplate: "auto/ repeat(2,1fr)",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Button
            sx={{
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              gridRow: "span 2",
              color:'black'
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
                  ค่าเช่าบ้านเดือนนี้
                </Typography>
                <MapsHomeWorkRoundedIcon
                  sx={{ color: "#ffd481", ml: "10px" }}
                />
              </Box>
            </Box>
          </Button>
          <Button
            sx={{
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              color: "black"
            }}
          >
            <Box component="div" sx={{ width: "100%", height: "100%" }}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center",width:'100%' }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ fontFamily: "Kanit" }}
                >
                  ค่าไฟเดือนนี้
                </Typography>
                <FlashOnRoundedIcon sx={{color: "#ffd49f", ml: "10px" }}/>
                <Typography component='p' sx={{justifySelf:'flex-end',width:'150px',textAlign:'end'}} >ใช้ไป x หน่วย</Typography>
              </Box>
            </Box>
          </Button>
          <Button
            sx={{
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              color: "black"
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
                  ค่าน้ำเดือนนี้
                </Typography>
                <WaterDropRoundedIcon
                  sx={{ color: "#dee9ff", ml: "10px" }}/>
                <Typography component='p' sx={{justifySelf:'flex-end',width:'150px',textAlign:'end'}} >ใช้ไป x หน่วย</Typography>
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Home;

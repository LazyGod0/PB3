import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar.jsx";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import PopUp from "../Component/PopUp.jsx";

function Home() {
  const location = useLocation();
  const { styleMap } = useAuth();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleClickOpen = (e) => {
    const selectedValue = e.currentTarget.getAttribute("value");
    setValue(selectedValue);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValue("");
  };

  const style = styleMap[location.pathname];
  return (
    <>
      <Box component="div" sx={style}>
        <NavBar />
        <Box
          sx={{
            mt: "100px",
            padding: "20px",
            boxShadow: "0px 0px 10px black",
            width: "750px",
            height: "auto",
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
              height: "30%",
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
                gridColumn: "span 2",
                color: "black",
              }}
              value="home"
              onClick={handleClickOpen}
            >
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80%",
                  }}
                >
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{ fontFamily: "Kanit" }}
                  >
                    0 บาท
                  </Typography>
                </Box>
                <Box sx={{ position: "absolute", bottom: 0 }}>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "Kanit",
                      fontSize: "14px",
                      color: "rgb(0,0,0,0.5)",
                    }}
                  >
                    คลิกเพื่อดูรายละเอียด
                  </Typography>
                </Box>
              </Box>
            </Button>
            <Button
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
              }}
              value="elec"
              onClick={handleClickOpen}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{display:'flex',alignItems:'center'}}>
                  <Typography variant="h5" sx={{ fontFamily: "Kanit" }}>
                    ค่าไฟเดือนนี้
                  </Typography>
                  <FlashOnRoundedIcon sx={{ color: "#ffd49f", ml: "10px" }} />
                </Box>
                <Typography>ใช้ไป 0 หน่วย</Typography>
                <Typography variant="h4" sx={{ fontFamily: "Kanit" }}>
                  0 บาท
                </Typography>
              </Box>
            </Button>
            <Button
              sx={{
                height: "100%",
                boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
                borderRadius: "10px",
                padding: "10px",
                color: "black",
              }}
              value="water"
              onClick={handleClickOpen}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{display:'flex',alignItems:'center'}}>
                  <Typography variant="h5" sx={{ fontFamily: "Kanit" }}>
                    ค่าน้ำเดือนนี้
                  </Typography>
                  <WaterDropRoundedIcon sx={{ color: "#dee9ff", ml: "10px" }} />
                </Box>
                <Typography>ใช้ไป 0 หน่วย</Typography>
                <Typography variant="h4" sx={{ fontFamily: "Kanit" }}>
                  0 บาท
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
        <Box
            component="div"
            sx={{
              width: "750px  ",
              height: "20%",
              display: "grid",
              gridTemplate: "repeat(1,1fr) / repeat(2,1fr)",
              gap: "15px",
            }}
          >
            <Box
              component="div"
              sx={{
                height: "100%",
                boxShadow: "0 0 5px black",
                borderRadius: "15px",
              }}
            >
              <Button sx={{ width: "100%", height: "100%", padding: "10px" }}>
                <Typography variant="h4" component="h4" sx={{ color: "black" }}>
                  ประวัติการชำระเงิน
                </Typography>
              </Button>
            </Box>
            <Box
              component="div"
              sx={{
                height: "100%",
                padding: "5px",
                boxShadow: "0 0 5px black",
                borderRadius: "15px",
              }}
            >
              <Button sx={{ width: "100%", height: "100%", padding: "10px" }}>
                <Typography variant="h4" component="h4" sx={{ color: "black" }}>
                  รายงาน
                </Typography>
              </Button>
            </Box>
          </Box>
        <PopUp open={open} handleClose={handleClose} value={value} />
      </Box>
    </>
  );
}

export default Home;

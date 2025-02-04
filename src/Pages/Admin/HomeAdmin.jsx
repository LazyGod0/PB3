import React, { useEffect,useState } from "react";
import NavBar from "../../Component/NavBar";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  Grid2,
} from "@mui/material";
import { useAuth } from "../../Auth/useAuthForm";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PaymentIcon from "@mui/icons-material/Payment";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LivingIcon from "@mui/icons-material/Living";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

function HomeAdmin() {
  const { userData,user } = useAuth();
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(user) {
  //     setLoading(true);
  //     if(userData) {
  //       setLoading(false)
  //     }
  //   } else {
  //     navigate('/');
  //   }
  // },[user,userData])
  return (
    <div>
      <NavBar />

      <Box
        sx={{
          mt: "10px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "750px",
            display: "flex",
            flexFlow: "column nowrap",
            gap: "15px",
            ".MuiButton-root": {
              width: "100%",
              height: "100%",
              display: "flex",
              flexFlow: "column nowrap",
              gap: "5px",
              color: "black",
            },
          }}
        >
          <Typography variant="h5">
            ยินดีต้อนรับ{" "}
            {loading? <CircularProgress/>:userData && userData.firstName !== "" && userData.lastName !== null
              ? userData.firstName + " " + userData.lastName
              : "John Doe"}
          </Typography>

          <Box
            sx={{
              height: "auto",
              padding: "15px",
              display: "flex",
              flexFlow: "column nowrap",
              gap:'5px',
              boxShadow: "0 0 10px gray",
            }}
          >
            <Typography align="left">เมนูหลัก</Typography>
            <Grid2
              container
              size={12}
              sx={{
                backgroundColor: "lightgray",
                ".MuiGrid2-root": {
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                },
              }}
            >
              <Grid2 size={3}>
                <Button>
                  <FlashOnIcon />
                  <Typography>สาณารณูปโภครายเดือน</Typography>
                </Button>
              </Grid2>
              <Grid2 size={3}>
                <Button>
                  <PaymentIcon />
                  <Typography>แก้ไขสถานะการชำระเงิน</Typography>
                </Button>
              </Grid2>
              <Grid2 size={3}>
                <Button>
                  <MapsHomeWorkIcon />
                  <Typography>ข้อมูลห้องพักภายในหอพัก</Typography>
                </Button>
              </Grid2>
              <Grid2 size={3}>
                <Button>
                  <PersonAddIcon />
                  <Typography>เพิ่มข้อมูลผู้เช่าเข้าสู่ระบบ</Typography>
                </Button>
              </Grid2>
            </Grid2>
          </Box>

          <Box
            sx={{
              height: "auto",
              padding: "15px",
              display: "flex",
              flexFlow: "column nowrap",
              gap:'5px',
              boxShadow: "0 0 10px gray",
            }}
          >
            <Typography>ข้อมูลห้องพักโดยรวม</Typography>
            <Grid2
              container
              size={12}
              sx={{
                backgroundColor: "lightgray",
                ".MuiGrid2-root": {
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                },
              }}
            >
              <Grid2 size={4}>
                <Button>
                  <Typography variant="h6">999 ห้อง</Typography>
                  <CheckCircleIcon />
                  <Typography>จำนวนห้องพักทั้งหมด</Typography>
                </Button>
              </Grid2>
              <Grid2 size={4}>
                <Button>
                  <Typography variant="h6">999 ห้อง</Typography>
                  <LivingIcon />
                  <Typography>จำนวนห้องพักที่เช่าอยู่</Typography>
                </Button>
              </Grid2>
              <Grid2 size={4}>
                <Button>
                  <Typography variant="h6">999 ห้อง</Typography>
                  <CancelIcon />
                  <Typography>จำนวนห้องพักที่ยังไม่ถูกเช่า</Typography>
                </Button>
              </Grid2>
            </Grid2>
          </Box>

          <Box
            sx={{
              height: "auto",
              padding: "15px",
              display: "flex",
              flexFlow: "column nowrap",
              gap:'5px',
              boxShadow: "0 0 10px gray",
            }}
          >
            <Typography>ข้อมูลการชำระเงินรายเดือน</Typography>
            <Grid2
              container
              size={12}
              sx={{
                backgroundColor: "lightgray",
                ".MuiGrid2-root": {
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                },
              }}
            >
              <Grid2 size={4}>
                <Button>
                  <Typography variant="h6">999 ห้อง</Typography>
                  <CheckCircleIcon />
                  <Typography>ชำระเงินเสร็จสิ้น</Typography>
                </Button>
              </Grid2>
              <Grid2 size={4}>
                <Button>
                  <Typography variant="h6">999 ห้อง</Typography>
                  <LivingIcon />
                  <Typography>ยังไม่ชำระ</Typography>
                </Button>
              </Grid2>
              <Grid2 size={4}>
                <Button>
                  <Typography variant="h6">999 ห้อง</Typography>
                  <CancelIcon />
                  <Typography>รออนุมัติ</Typography>
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HomeAdmin;

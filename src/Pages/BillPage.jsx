import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid2, TextField } from "@mui/material";
import { useState } from "react";
import NavBar from "../Component/NavBar";
import styled from "styled-components";
import { useEffect } from "react";
import { useAuth } from "../Auth/useAuthForm";
import { useLocation } from "react-router-dom";

function BillPage() {
  const location = useLocation();
  const { user, userData } = useAuth();
  // ดึงค่าที่ส่งมาจาก Home
  // const {userData} = useAuth()
  const [amount, setAmount] = useState("");
  const promptPayID = "0936124069"; // ใส่หมายเลข PromptPay ของคุณ

  // ฟังก์ชันสร้าง URL QR Code
  const generatePromptPayQR = (phoneNumber, amount) => {
    let formattedAmount = parseInt(amount);
    return `https://promptpay.io/${phoneNumber}/${formattedAmount}.png`;
  };

  const StyledImg = styled("img")(() => ({
    width: "150px",
    height: "150px",
  }));

  const TotalAM = (
    parseFloat(userData.eUnit * userData.ePerUnit) +
    parseFloat(userData.wUnit * userData.wPerUnit) +
    parseFloat(userData.homeRent)
  ).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  

  const QrImage = () => {
    return (
      <StyledImg
        src={generatePromptPayQR(promptPayID, amount)}
        alt=""
        value={amount}
      />
    );
  };
  useEffect(() => {
    console.log(userData)
    setAmount((
      parseFloat(userData.eUnit * userData.ePerUnit) +
      parseFloat(userData.wUnit * userData.wPerUnit) +
      parseFloat(userData.homeRent)
    ))
  },[])
  return (
    <Box>
      <NavBar />
      <Container
        sx={{
          mt: 4,
          p:0,
          width: "750px",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "left" }}>
          <Typography align="left" variant="h5" sx={{fontWeight:'bold'}}>
            ชำระบิลค่าใช้จ่าย เดือน มกรายน 2077
          </Typography>
        </Box>
        <Box
          sx={{
            p: "15px",
            width: "750px",
            backgroundColor: "#78B7D0",
            borderRadius: "20px",
            ".MuiTypography-root": {
              textAlign: "center",
            },
          }}
        >
          <Grid2
            container
            size={12}
            sx={{
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <Grid2
              container
              size={12}
              spacing={0}
              sx={{
                ".MuiGrid2-root": {
                  padding: "5px",
                },
              }}
            >
              <Grid2 size={6}>
                <Typography>ค่าใช้จ่ายรวม</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography>สถานะการชำระเงิน</Typography>
              </Grid2>
            </Grid2>
            <Grid2
              container
              size={12}
              sx={{
                ".MuiGrid2-root": {
                  padding: "5px",
                },
              }}
            >
              <Grid2 size={6}>
                <Typography variant="h5">{TotalAM.toLocaleString()} บาท</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography variant="h5">ยังไม่ชำระเงิน</Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: "20px",
              width: "750px",
              backgroundColor: "#78B7D0",
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              borderRadius: "20px",
              ".MuiTypography-root": {
                textAlign: "center",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "left",
                ".MuiTextField-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <Typography sx={{ color: "white" }}>
                QR CODE ชำระเงิน (PromptPay)
              </Typography>
            </Box>
            {/* <TextField
              sx={{ width: "150px" }}
              placeholder="กรอกจำนวนเงิน"
              type="number"
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            /> */}
            <QrImage />
            <Typography>
              สแกน QR เพื่อโอนเงินเข้าบัญชี <br />
              นาย สมชาย รักดี <br />
              เบอร์โทรศัพท์มือถือ xxx-xxx-xx89 <br />
              เลขที่บัญชี 0987xxxx2100 <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "25px",
                ".MuiButton-root": {
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                },
              }}
            >
              <Button sx={{ backgroundColor: "#16325B" }}>
                <Typography sx={{ color: "white" }}>
                  แนบหลักฐานชำระเงิน
                </Typography>
              </Button>
              <Button sx={{ backgroundColor: "white" }}>
                <Typography>แนบหลักฐานชำระเงิน</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default BillPage;


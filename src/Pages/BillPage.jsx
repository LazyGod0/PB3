import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container, Grid2 } from "@mui/material";
import { useState } from "react";
import NavBar from "../Component/NavBar";

function BillPage() {
  const [amount, setAmount] = useState("");
  const promptPayID = "0936124069"; // ใส่หมายเลข PromptPay ของคุณ

  // ฟังก์ชันสร้าง URL QR Code
  const generatePromptPayQR = (phoneNumber, amount) => {
    let formattedAmount = parseInt(amount);
    return `https://promptpay.io/${phoneNumber}/${formattedAmount}.png` ; 
  };
  return (
    <Box>
          <NavBar/>
    <Container>
        <Grid2 size={12} sx={{mt:4 , ml:4 , mb:4}}>
          <Typography variant="h5" sx={{ color:'#16325B',fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>
            ชำระบิลค่าใช้จ่าย เดือน มกราคม 2099
          </Typography>
        </Grid2>
        <Grid2 size={12} >
          <Box
            sx={{
             px: 12,
             mx:1,
             py: 4,
             backgroundColor: "#78B7D0",
             borderRadius:5
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box 
                sx={{ display: "flex", justifyContent: "center" ,py:2,px:0}}
              >
                <Box sx={{ backgroundColor:'#F2F3F4', width: "100%", p: 3,borderRadius:5,boxShadow:8}}>
                  <Box sx={{ display: "flex", justifyContent: "space-between",mx:'50px',py:1}}>
                    <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'#16325B'}}>
                          ค่าใช้จ่ายรวม
                    </Typography>
                    <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'#16325B'}}>
                      สถานะการชำระเงิน
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between",mx:'50px'}}>
                    <Typography variant="h4" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'#16325B'}}>
                      9999  บาท
                    </Typography>
                    <Typography variant="h4" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'#16325B'}}>
                      ยังไม่ชำระเงิน
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt :2,mb:0}}>
                <Box sx={{ backgroundColor:'#16325B', px: 5,py:2,borderRadius:3}}>
                  <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'white'}} >
                    ชำระเงิน
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2>
          <Box sx={{
             px: 3,
             mx:1,
             py: 0,
             mt: 2,
             backgroundColor: "#78B7D0",
             borderRadius:5
            }}>
              <Typography variant="h4" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'white',mt:1,pt:3
              }}>
              QR CODE ชำระเงิน (PromptPay)
              </Typography>
              <Box sx={{ backgroundColor: "#78B7D0", width: "100%", height: "600px", mt: "15px",    textAlign: "center", padding: 5 }}>
                <input
                  type="number"
                  placeholder="กรอกจำนวนเงิน"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ padding: 10, fontSize: 16 }}
                />
                <Box sx={{ mt: 3 }}>
                  <img src={generatePromptPayQR(promptPayID, amount)} alt=""  />
                  <Typography sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'white',mt:2
              }}>
                  สแกน QR เพื่อโอนเงินเข้าบัญชี <br/>
                  นาย สมชาย รักดี <br/>
                  เบอร์โทรศัพท์มือถือ xxx-xxx-xx89 <br/>
                  เลขที่บัญชี 0987xxxx2100 <br/>
                  </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <Box sx={{ backgroundColor:'#16325B', px: 5,py:2,borderRadius:3,m:1}}>
                  <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'white'}} >
                    แนบหลักฐานชำระเงิน
                  </Typography>
                </Box>
                <Box sx={{ backgroundColor:'white', px: 5,py:2,borderRadius:3,m:1}}>
                  <Typography variant="h5" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' , color:'#16325B'}} >
                    ยืนยันการชำระเงิน
                  </Typography>
                </Box>
                </Box>
              </Box>
          </Box>
        </Grid2>

    </Container>
    </Box>
  );
}
export default BillPage;


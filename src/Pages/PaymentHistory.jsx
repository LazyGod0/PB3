import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, AppBar, Toolbar, Box, Grid2 } from "@mui/material";
import NavBar from "../Component/NavBar";

const paymentData = [
  { date: "18 ม.ค. 2019", type: "ค่าสมัครสมาชิก", cost: "9999.00", status: "สำเร็จ", note: "-" },
  { date: "18 ม.ค. 2019", type: "ค่าสมัครสมาชิก", cost: "6999.00", status: "สำเร็จ", note: "-" },
  { date: "18 ม.ค. 2019", type: "ค่าสมัครสมาชิก", cost: "5999.00", status: "สำเร็จ", note: "-" },
  { date: "18 ม.ค. 2019", type: "ค่าสมัครสมาชิก", cost: "8999.00", status: "สำเร็จ", note: "-" },
];

const PaymentHistory = () => {
  return (
    <Box>
      <NavBar/>
      <Container>
        <Grid2 size={12} sx={{mt:4 , ml:4 , mb:4}}>
          <Typography variant="h5" sx={{ color:'#16325B',fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>
          ประวัติการชำระเงิน
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Box sx={{mx:3}}>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#16325B" }}>
                    <TableCell align="center" sx={{ color: "white",fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' }}>วันที่ชำระ</TableCell>
                    <TableCell align="center" sx={{ color: "white",fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' }}>ประเภท</TableCell>
                    <TableCell align="center" sx={{ color: "white",fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' }}>ค่าใช้จ่าย</TableCell>
                    <TableCell align="center" sx={{ color: "white",fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>สถานะ</TableCell>
                    <TableCell align="center" sx={{ color: "white",fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700' }}>หมายเหตุ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paymentData.map((row, index) => (
                    <TableRow key={index} sx={{ bgcolor: index % 2 === 0 ? "rgba(150,200,210,0.2)" : "white" }}>
                      <TableCell align="center" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>{row.date}</TableCell>
                      <TableCell align="center" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>{row.type}</TableCell>
                      <TableCell align="center" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>{row.cost}</TableCell>
                      <TableCell align="center" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>{row.status}</TableCell>
                      <TableCell align="center" sx={{fontFamily: "IBM Plex Sans Thai, sans-serif", fontWeight:'700'}}>{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
        </Grid2>





    {/* <Box sx={{ bgcolor: "#080160", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
      
      <AppBar position="static" sx={{ bgcolor: "#ffffff", color: "black", width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            OUR-HOME
          </Typography>
        </Toolbar>
      </AppBar>

      
      <Container maxWidth="md" sx={{ bgcolor: "rgba(150,200,210,1)", p: 3, borderRadius: 2, mt: 3, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          ประวัติการชำระเงิน
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#080160" }}>
                <TableCell align="center" sx={{ color: "white" }}>วันที่ชำระ</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>ประเภท</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>ค่าใช้จ่าย</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>สถานะ</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>หมายเหตุ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentData.map((row, index) => (
                <TableRow key={index} sx={{ bgcolor: index % 2 === 0 ? "rgba(150,200,210,0.2)" : "white" }}>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.cost}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box> */}

      </Container>        
    </Box>
  );
};

export default PaymentHistory;

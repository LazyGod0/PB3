import React from "react";
import {
  Typography,
  ImageListItem,
  ImageList,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { Link,useNavigate } from "react-router-dom";


function FirstPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box component="div" className="container">
        <ImageList  cols={1} rowHeight={'auto'} sx={{display:'flex',justifyContent:'center'}} >
          <ImageListItem key="Logo" sx={{width:'200px',height:'200px'}}>
            <img src={`/Logo.png`} alt="Our Home" loading="lazy"/>
          </ImageListItem>
        </ImageList>
        <Stack sx={{textAlign:'center'}} spacing={2}>
          <Stack className="intro" spacing={1}>
            <Typography
              variant="h4"
              component="h5"
              sx={{ fontFamily: "Kanit" }}
            >
              ยินดีต้อนรับสู่ Our-Home
            </Typography>
            <Typography component="p" sx={{ fontFamily: "Kanit" }}>
              เว็บไซต์สำหรับจัดการค่าใช้จ่ายในบ้านของคุณ
            </Typography>
          </Stack>
          <Button variant="contained" onClick={() => navigate('/login')}>เข้าสู่ระบบ</Button>
          <Typography component="p" sx={{ fontFamily: "Kanit" }}>
            ยังไม่มีบัญชีใช่หรือไม่? <Link to="/register">สมัครสมาชิก</Link>
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default FirstPage;

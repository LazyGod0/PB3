import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BoltIcon from "@mui/icons-material/Bolt";
import HistoryIcon from "@mui/icons-material/History";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  fontWeight: "bold",
  color:"blue"
}));

const MainBox = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#f0f8ff",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
}));

const CardBox = styled(Box)(({ theme }) => ({
  boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  borderRadius: "15px",
  backgroundColor: "white",
  padding: "10px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#003366",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Kanit",
  borderRadius: "10px",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#002244",
  },
}));

function HomeV2() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <MainBox>
        {/* Header */}
        <StyledTypography variant="h5">
          xxxx
        </StyledTypography>
        <StyledTypography variant="h6" sx={{ marginTop: "10px" }}>
          บิลค่าใช้จ่าย ประจำเดือน มกราคม 2077
        </StyledTypography>

        {/* ค่าใช้จ่ายรวม */}
        <Box
          sx={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#ADD8E6",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          }}
        >
          <StyledTypography variant="h5" sx={{ color: "#003366" }}>
            ค่าใช้จ่ายรวม: 9999.99 บาท
          </StyledTypography>
          <Button
            sx={{
              color: "#003366",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "underline",
            }}
          >
            คลิกเพื่อดูรายละเอียด
          </Button>
        </Box>

        {/* รายการค่าใช้จ่าย */}
        <Box
          sx={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          {/* ค่าเช่าห้อง */}
          <CardBox>
            <HomeIcon sx={{ fontSize: "3rem", color: "#003366" }} />
            <StyledTypography variant="h6">ค่าเช่าห้อง</StyledTypography>
            <StyledTypography variant="body1" sx={{ color: "#003366" }}>
              9999 บาท
            </StyledTypography>
            <Typography variant="body2" sx={{ color: "#003366" }}>
              คลิกเพื่อดูรายละเอียด
            </Typography>
          </CardBox>

          {/* ค่าน้ำ */}
          <CardBox>
            <WaterDropIcon sx={{ fontSize: "3rem", color: "#003366" }} />
            <StyledTypography variant="h6">ค่าน้ำ</StyledTypography>
            <StyledTypography variant="body1" sx={{ color: "#003366" }}>
              9999 บาท
            </StyledTypography>
            <Typography variant="body2" sx={{ color: "#003366" }}>
              คลิกเพื่อดูรายละเอียด
            </Typography>
          </CardBox>

          {/* ค่าไฟ */}
          <CardBox>
            <BoltIcon sx={{ fontSize: "3rem", color: "#003366" }} />
            <StyledTypography variant="h6">ค่าไฟ</StyledTypography>
            <StyledTypography variant="body1" sx={{ color: "#003366" }}>
              9999 บาท
            </StyledTypography>
            <Typography variant="body2" sx={{ color: "#003366" }}>
              คลิกเพื่อดูรายละเอียด
            </Typography>
          </CardBox>
        </Box>

        {/* ปุ่มล่าง */}
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomButton startIcon={<HistoryIcon />}>
            ประวัติการชำระเงิน
          </CustomButton>
          <CustomButton startIcon={<CreditCardIcon />}>ชำระเงิน</CustomButton>
        </Box>
      </MainBox>
    </Box>
  );
}

export default HomeV2;

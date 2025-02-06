import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useNavigate } from "react-router-dom";

const WhiteTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
}));

function PayAndHis() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "750px",
          height: "20%",
          display: "grid",
          gridTemplate: "repeat(1, 1fr) / repeat(2, 1fr)",
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
          <Button
            sx={{
              width: "100%",
              height: "100%",
              padding: "10px",
              backgroundColor: "#16325B",
            }}
            onClick={(e) => navigate('/his')}
          >
            <WhiteTypography
              variant="h5"
              component="h5"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              ประวัติการชำระเงิน
              <SearchIcon sx={{ fontSize: "2rem", color: "white" ,ml: "20px" }} />
            </WhiteTypography>
          </Button>
        </Box>
        <Box
          component="div"
          sx={{
            height: "100%",
            boxShadow: "0 0 5px black",
            borderRadius: "15px",
          }}
        >
          <Button
            sx={{
              width: "100%",
              height: "100%",
              padding: "8px",
              backgroundColor: "#16325B",
            }}
            onClick={(e) => navigate('/bill')}
          >
            <WhiteTypography
              variant="h5"
              component="h5"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              ชำระเงิน
              <CreditCardIcon sx={{ fontSize: "2rem", color: "white",ml: "20px" }} />
            </WhiteTypography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default PayAndHis;
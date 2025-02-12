import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const WhiteTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
}));

function Sumramoney() {
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "0px", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          backgroundColor: "#f0f0f0",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "750px",
            height: "50%",
            display: "grid",
            gridTemplate: "repeat(1, 1fr) / repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          <Box
            component="div"
            sx={{
              height: "125%",
              boxShadow: "0 0 5px black",
              borderRadius: "15px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "100%",
                padding: "10px",
                backgroundColor: "#080160",
              }}
            >
              <WhiteTypography
                variant="h5"
                component="h5"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                ประวัติการชำระเงิน
                <SearchIcon
                  sx={{ fontSize: "2rem", color: "white", ml: "20px" }}
                />
              </WhiteTypography>
            </Button>
          </Box>
          <Box
            component="div"
            sx={{
              height: "125%",
              boxShadow: "0 0 5px black",
              borderRadius: "15px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "100%",
                padding: "8px",
                backgroundColor: "#080160",
              }}
            >
              <WhiteTypography
                variant="h5"
                component="h5"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                ชำระเงิน
                <CreditCardIcon
                  sx={{ fontSize: "2rem", color: "white", ml: "20px" }}
                />
              </WhiteTypography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sumramoney;

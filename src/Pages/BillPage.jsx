import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import BedIcon from "@mui/icons-material/Bed";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Container } from "@mui/material";

function BillPage() {
 
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#010052" }}>
          <Toolbar>
            <IconButton
              size="40"
              edge="start"
              color="white"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
            >
              <BedIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              Our-Home
            </Typography>

            <IconButton
              size="40"
              edge="start"
              color="white"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
            >
              <NotificationsActiveIcon sx={{ color: "white", fontSize: 40 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Typography
          sx={{
            fontSize: "30px",
            paddingLeft: "150px",
            paddingTop: "70px",
            mb: "30px",
          }}
        >
          ชำระบิลค่าเช่า เดือน มกราคม 2024
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            padding: "30px",
            ml: "100px",
            mr: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1000px",
              backgroundColor: "#344CB7",
              padding: "30px",
            }}
          >
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              ค่าใช้จ่ายรวม <br /> 999999 บาท
            </Typography>
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              สถานะการชำระเงิน <br /> ยังไม่ชำระเงิน//
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default BillPage;

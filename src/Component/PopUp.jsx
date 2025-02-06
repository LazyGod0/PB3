import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Stack,
  Box,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";

function PopUp(props) {
  const theme = useTheme();

  const renderContent = () => {
    switch (props.value) {
      case "elec":
        return [
          { label: "เลขมิเตอร์เดือนก่อนหน้า", value: "99999.00 หน่วย" },
          { label: "เลขมิเตอร์เดือนปัจจุบัน", value: "99999.00 หน่วย" },
          { label: "ราคาต่อหน่วย", value: "99999.00 บาท" },
          { label: "ค่าใช้จ่ายสุทธิ", value: "99999.00 บาท" },
        ];
      case "water":
        return [
          { label: "เลขมิเตอร์เดือนก่อนหน้า", value: "99999.00 หน่วย" },
          { label: "เลขมิเตอร์เดือนปัจจุบัน", value: "99999.00 หน่วย" },
          { label: "ราคาต่อหน่วย", value: "99999.00 บาท" },
          { label: "ค่าใช้จ่ายสุทธิ", value: "99999.00 บาท" },
        ];
      case "home":
        return [
          { label: "ค่าเช่าประจำเดือน", value: "99999.00 บาท" },
          { label: "ค่าคงค้างชำระ", value: "99999.00 บาท" },
          { label: "ค่าใช้จ่ายเพิ่มเติม", value: "99999.00 บาท" },
          { label: "ค่าใช้จ่ายสุทธิ", value: "99999.00 บาท" },
        ];
      default:
        return [];
    }
  };

  return (
    <Dialog
      open={props.open}
      keepMounted
      onClose={props.handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "90%", sm: "40%" },
          maxWidth: "600px",
          height: "auto",
          maxHeight: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogTitle
        component="div"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">
          {props.value === "elec"
            ? "รายละเอียดการใช้งานไฟฟ้า"
            : props.value === "water"
            ? "รายละเอียดการใช้งานน้ำ"
            : "รายละเอียดค่าหอพัก"}
        </Typography>
      </DialogTitle>

      <DialogContent
        sx={{
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "calc(100vh - 150px)",
          overflowY: "auto",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h6">ประจำเดือน มกราคม 2077</Typography>
        </Box>

        <Stack spacing={2} sx={{ width: "100%" }}>
          {renderContent().map((item, index) => (
            <Grid2
              container
              spacing={2}
              key={index}
              sx={{
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Grid2 xs={6}>
                <Typography>{item.label}</Typography>
              </Grid2>
              <Grid2 xs={6} sx={{ textAlign: "right" }}>
                <Typography>{item.value}</Typography>
              </Grid2>
            </Grid2>
          ))}
        </Stack>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            textAlign: "center",
            color: "gray",
            width: "100%",
          }}
        >
          จด ณ วันที่ 99/99/9999
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default PopUp;
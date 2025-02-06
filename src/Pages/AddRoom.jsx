import React, { useState,useEffect } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Button,
  Container,
  Stack,
  MenuItem,
  Select,
  Typography,
  CircularProgress,
} from "@mui/material";
import NavBar from "../Component/NavBar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { db } from "../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

function AddRoom() {
  const [roomNumber, setRoomNumber] = useState("");
  const [rent, setRent] = useState("");
  const [roomType, setRoomType] = useState("ห้องปกติ");
  const [roomStatus, setRoomStatus] = useState("ว่าง");
  const [roomDetail, setRoomDetail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (roomType === "ห้องปกติ") {
      setRent(5000);
    } else if (roomType === "ห้องปรับอากาศ") {
      setRent(7000);
    }
  }, [roomType]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "Room", roomNumber);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        toast.error("ห้องนี้มีอยู่แล้วในระบบ", {
          position: 'top-center',
        });
      } else {
        await setDoc(docRef, {
          rent: parseInt(rent),
          roomNumber: parseInt(roomNumber),
          roomStatus: roomStatus,
          roomType: roomType,
          roomDetail: roomDetail,
        });
        toast.success("เพิ่มห้องสำเร็จ", {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด: " + error.message, {
        position: 'top-center',
      });
    } finally {
      setLoading(false);
      setRoomNumber(null)
      setRoomDetail("")
      setRoomType("ห้องปกติ")
      setRoomStatus(false)
      setRoomStatus("ว่าง")
    }
  };

  return (
    <>
      <ToastContainer style={{width:'40%'}}/>
      {loading ? (
        <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress size={70}/>
              </Box>
      ) : (
        <>
          <NavBar />
          <Container sx={{ mt: "25px" }}>
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Typography variant="h5" sx={{ width: "40%", textAlign: "left" }}>
                เพิ่มห้องพัก
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexFlow: "column nowrap",
                  width: "40%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                component={"form"}
                onSubmit={handleSubmit}
              >
                <FormControl fullWidth>
                  <InputLabel htmlFor="room-number">Room Number</InputLabel>
                  <OutlinedInput
                    id="room-number"
                    label="Room Number"
                    type="number"
                    onChange={(e) => setRoomNumber(e.target.value)}
                    value={roomNumber}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Room Status</InputLabel>
                  <Select
                    value={roomStatus}
                    onChange={(e) => setRoomStatus(e.target.value)}
                  >
                    <MenuItem value="ว่าง">ว่าง</MenuItem>
                    <MenuItem value="ไม่ว่าง">ไม่ว่าง</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Room Status</InputLabel>
                  <Select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  >
                    <MenuItem value="ห้องปกติ">ห้องปกติ</MenuItem>
                    <MenuItem value="ห้องปรับอากาศ">ห้องปรับอากาศ</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel htmlFor="rent">Rent</InputLabel>
                  <OutlinedInput
                    id="rent"
                    label="Rent"
                    value={rent}
                    disabled
                  />
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel htmlFor="room-detail">Room Detail</InputLabel>
                  <OutlinedInput
                    id="room-detail"
                    label="Room Detail"
                    multiline
                    maxRows={5}
                    onChange={(e) => setRoomDetail(e.target.value)}
                    value={roomDetail}
                  />
                </FormControl>

                <Button
                  startIcon={<AddCircleIcon />}
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  <Typography>เพิ่มข้อมูลห้อง</Typography>
                </Button>
              </Box>
            </Stack>
          </Container>
        </>
      )}
    </>
  );
}

export default AddRoom;

import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useAuth } from "../Auth/useAuthForm.jsx";
import NavBar from "../Component/NavBar.jsx";
import { db } from "../firebase/firebase.jsx";
import { getDoc, doc } from "firebase/firestore";

const getUserData = async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(db, "Users", uid);
    const userDoc = await getDoc(docRef);
    const userData = userDoc.data();
    return [userData.firstName, userData.lastName, userData.roomNumber];
  }
};
function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    roomNumber: 0,
  });

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        setLoading(true);
        const data = await getUserData(user);
        if (data) {
          const [firstName, lastName, roomNumber] = data;
          setUserData((prev) => ({
            ...prev,
            firstName,
            lastName,
            roomNumber,
          }));
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [user]);

  return (
    <>
      <NavBar />
      <Box
        component="div"
        sx={{
          padding: "10px",
          width: "60%",
          height: "60%",
          display: "grid",
          gridTemplate: "auto / repeat(2,1fr)",
          gap: "20px",
          alignItems: "center",
          boxShadow: "0px 0px 10px black",
          borderRadius: "15px",
        }}
      >
        <Box
          component="div"
          sx={{
            padding: "10px",
            width: "100%",
            height: "100%",
            boxShadow: "0px 0px 10px rgb(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <Avatar
            alt="User Avatar"
            src={user ? user.photoURL || "/default-avatar.png" : "#"}
            sx={{
              width: "80px",
              height: "80px",
              fontSize: "3rem",
              justifySelf: "center",
            }}
          />
        </Box>
        <Box
          component="div"
          sx={{
            padding: "10px",
            width: "100%",
            height: "100%",
            boxShadow: "0px 0px 10px rgb(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ justifySelf: "center" }}
          >
            ข้อมูลส่วนตัว
          </Typography>
          <Box
            component="div"
            sx={{
              padding: "10px",
              height: "80%",
              display: "flex",
              flexFlow: "column nowrap",
              gap: "20px",
            }}
          >
            <Typography>
              ชื่อ:{loading ? <CircularProgress /> : userData.firstName}
            </Typography>
            <Typography>
              นามสกุล:{loading ? <CircularProgress /> : userData.lastName}
            </Typography>
            <Typography>
              ห้อง:{loading ? <CircularProgress /> : userData.roomNumber}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;

import React, { useState, useEffect } from "react";
import { Box, Avatar, Typography, CircularProgress,Button,styled } from "@mui/material";
import { useAuth } from "../Auth/useAuthForm.jsx";
import NavBar from "../Component/NavBar.jsx";
import { db } from "../firebase/firebase.jsx";
import { getDoc, doc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';

function Profile() {
  const VisuallyHiddenInput = styled("input")({
    height: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 1,
  });

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const day = date.getDay().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getUserData = async (user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "Users", uid);
      const userDoc = await getDoc(docRef);
      const userData = userDoc.data();
      return [
        userData.firstName,
        userData.lastName,
        userData.roomNumber,
        userData.createdAt.seconds,
      ];
    }
  };

  const { user, styleMap, logOutState,avatar,handlePictureChange,saveProfilePic } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    roomNumber: 0,
    createdAt: "",
  });

  useEffect(() => {
    if (logOutState && !user) {
      navigate("/");
    }
    if (user) {
      const fetchUserData = async () => {
        setLoading(true);
        const data = await getUserData(user);
        if (data) {
          const [firstName, lastName, roomNumber, createdAt] = data;
          setUserData((prev) => ({
            ...prev,
            firstName,
            lastName,
            roomNumber,
            createdAt,
          }));
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [user,avatar]);

  const style = styleMap[location.pathname];
  return (
    <>
      <NavBar />
      <Box component="div" sx={style}>
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
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.5)",
              borderRadius: "10px",
              gap:'20px'
            }}
          >
            <Avatar
              alt="User Avatar"
              src={avatar? avatar:'#'}
              sx={{
                width: "100px",
                height: "100px",
                fontSize: "3rem",
                justifySelf: "center",
              }}
            />
            <Button
              component="label"
              variant="contained"
              startIcon={<UploadIcon/>}
            >
              Select Photo
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handlePictureChange(event)}
                multiple
              />
            </Button>
            <Button onClick={(event) => saveProfilePic(event,user)}>Upload</Button>
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
              <Box
                component="div"
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplate: "repeat(1,1fr) / repeat(2,1fr)",
                  gap: "20px",
                }}
              >
                <Typography>
                  ชื่อ:{loading ? <CircularProgress /> : userData.firstName}
                </Typography>
                <Typography>
                  นามสกุล:{loading ? <CircularProgress /> : userData.lastName}
                </Typography>
              </Box>
              <Typography>
                ห้อง:{loading ? <CircularProgress /> : userData.roomNumber}
              </Typography>
              <Typography>
                สร้างบัญชีเมื่อ:
                {loading ? (
                  <CircularProgress />
                ) : (
                  formatTime(userData.createdAt)
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;

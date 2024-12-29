import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar.jsx";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate,useLocation } from "react-router-dom";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.jsx";

const bill = async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(db, "Users", uid);
    const userDoc = await getDoc(docRef);
    const userData = userDoc.data();
    return [
      userData.homeRent,
      userData.electricBathPerUnit,
      userData.electricUnit,
      userData.waterBathPerUnit,
      userData.waterUnit,
    ];
  }
};

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOutState,styleMap } = useAuth();
  const [loading, setLoading] = useState(false);
  const [billingData, setBillingData] = useState({
    homeRent: 0,
    ePerUnit: 0,
    eUnit: 0,
    wPerUnit: 0,
    wUnit: 0,
  });

  useEffect(() => {
    if (logOutState && !user) {
      navigate("/");
    } else if (user) {
      const fetchBillingData = async () => {
        setLoading(true);
        const data = await bill(user);
        setLoading(false);
        const [homeRent, ePerUnit, eUnit, wPerUnit, wUnit] = data;
        setBillingData((prev) => ({
          ...prev,
          homeRent,
          ePerUnit,
          eUnit,
          wPerUnit,
          wUnit,
        }));
      };
      fetchBillingData();
    }
  }, [logOutState, user, navigate]);

  const style = styleMap[location.pathname];
  return (
    <>
    <Box component='div' sx={style}>
      <NavBar />
      <Box
        sx={{
          mt:'50px',
          padding: "20px",
          boxShadow: "0px 0px 10px black",
          width: "750px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ fontFamily: "Kanit" }}
        >
          ค่าใช้จ่าย
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "grid",
            gridTemplate: "auto/ repeat(2,1fr)",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Button
            sx={{
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              gridColumn: "span 2",
              color: "black",
              "&:hover": { backgroundColor: "rgb(255,212,158,0.2)" },
            }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ fontFamily: "Kanit" }}
                >
                  ค่าเช่าบ้านเดือนนี้
                </Typography>
                <MapsHomeWorkRoundedIcon
                  sx={{ color: "#ffd481", ml: "10px" }}
                />
              </Box>
              {/* กล่องสำหรับแสดงค่าหลัก */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80%", // ใช้ 80% ของความสูงกล่องหลัก
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ fontFamily: "Kanit" }}
                >
                  {loading ? <CircularProgress /> : billingData.homeRent} บาท
                </Typography>
              </Box>

              {/* กล่องสำหรับข้อความรายละเอียด */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0, // ตำแหน่งล่างสุดของกล่องหลัก
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Kanit",
                    fontSize: "14px",
                    color: "rgb(0,0,0,0.5)",
                  }}
                >
                  คลิกเพื่อดูรายละเอียด
                </Typography>
              </Box>
            </Box>
          </Button>
          <Button
            sx={{
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              color: "black",
              "&:hover": { backgroundColor: "rgb(255,212,158,0.2)" },
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
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "10%",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ fontFamily: "Kanit" }}
                >
                  ค่าไฟเดือนนี้
                </Typography>
                <FlashOnRoundedIcon sx={{ color: "#ffd49f", ml: "10px" }} />
                <Typography
                  component="p"
                  sx={{
                    justifySelf: "flex-end",
                    width: "150px",
                    textAlign: "end",
                  }}
                >
                  ใช้ไป {loading ? <CircularProgress /> : billingData.eUnit}{" "}
                  หน่วย
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80%",
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontFamily: "Kanit" }}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    billingData.ePerUnit * billingData.eUnit
                  )}{" "}
                  บาท
                </Typography>
              </Box>
              <Box component="div" sx={{ position: "absolute", bottom: 0 }}>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Kanit",
                    fontSize: "14px",
                    color: "rgb(0,0,0,0.5)",
                  }}
                >
                  คลิกเพื่อดูรายละเอียด
                </Typography>
              </Box>
            </Box>
          </Button>
          <Button
            sx={{
              height: "100%",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.6)",
              borderRadius: "10px",
              padding: "10px",
              color: "black",
              "&:hover": { backgroundColor: "rgb(255,212,158,0.2)" },
            }}
          >
            <Box
              component="div"
              sx={{
                padding: "10px ",
                width: "100%",
                height: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center", height: "10%" }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ fontFamily: "Kanit" }}
                >
                  ค่าน้ำเดือนนี้
                </Typography>
                <WaterDropRoundedIcon sx={{ color: "#dee9ff", ml: "10px" }} />
                <Typography
                  component="p"
                  sx={{
                    justifySelf: "flex-end",
                    width: "150px",
                    textAlign: "end",
                  }}
                >
                  ใช้ไป {loading ? <CircularProgress /> : billingData.wUnit}{" "}
                  หน่วย
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  alignContent: "center",
                  height: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontFamily: "Kanit" }}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    billingData.wPerUnit * billingData.wUnit
                  )}{" "}
                  บาท
                </Typography>
              </Box>
              <Box component="div" sx={{ position: "absolute", bottom: 0 }}>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Kanit",
                    fontSize: "14px",
                    color: "rgb(0,0,0,0.5)",
                  }}
                >
                  คลิกเพื่อดูรายละเอียด
                </Typography>
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width:'750px  ',
          height: "200px",
          display: "grid",
          gridTemplate: "repeat(1,1fr) / repeat(2,1fr)",
          gap:'15px'
        }}
      >
        <Button component="div" sx={{ height: "100%",padding:'5px',boxShadow:'0 0 5px black',borderRadius:'15px' }}>
          <Box sx={{width:'100%',height:'100%',padding:'10px'}}>
            <Typography variant="h4" component="h4" sx={{color:'black'}}>
              ประวัติการชำระเงิน
            </Typography>
          </Box>
        </Button>
        <Button component="div" sx={{ height: "100%",padding:'5px',boxShadow:'0 0 5px black',borderRadius:'15px' }}>
          <Box sx={{width:'100%',height:'100%',padding:'10px'}}>
            <Typography variant="h4" component="h4" sx={{color:'black'}}>
              รายงาน
            </Typography>
          </Box>
        </Button>
      </Box>
      </Box>
    </>
  );
}

export default Home;

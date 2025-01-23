import React from "react";
import "./auth.css";
import {
  Paper,
  Box,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  TextField,
  Checkbox,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Grid2 from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useAuth } from "../Auth/useAuthForm";

function Login() {
  const location = useLocation();
  const { styleMap, formData, toggleShowPassword, handleChange, handleSignIn,password } =
    useAuth();

  const style = styleMap[location.pathname];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="div" sx={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper
        elevation={8}
        sx={{
          padding: "10px",
          width: isMobile ? "90%" : "70%",
          maxWidth: "800px",
          borderRadius: "20px",
        }}
      >
        <Grid2 container spacing={2} sx={{ height: "100%",padding:'10px' }}>
          {isMobile ? (
            <Grid2 size={{xs:12}} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageList sx={{ width: "60%" }} cols={1}>
                <ImageListItem>
                  <img src="Food.webp" alt="Our Home" loading="lazy" style={{ borderRadius: "15px", width: "100%" }} />
                </ImageListItem>
              </ImageList>
            </Grid2>
          ) : (
            <Grid2
              size = {{xs:12,sm:6}}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ab47bc",
                borderRadius: "10px 0 0 10px",
                padding: "20px",
              }}
            >
              <ImageList sx={{ width: "70%" }} cols={1}>
                <ImageListItem>
                  <img src="Food.webp" alt="Our Home" loading="lazy" style={{ borderRadius: "15px", width: "100%" }} />
                </ImageListItem>
              </ImageList>
              <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    mt:'20px',
                    maxWidth: "270px",
                    fontSize: "12px",
                    lineHeight: "1.5",
                    color:'white'
                  }}
                >
                  Our Home เว็บไซต์สำหรับการจัดการค่าใช่จ่ายในหอพัก ครบจบในแพลตฟอร์มเดียว
                </Typography>
            </Grid2>
          )}
          <Grid2 size = {{xs:12,sm:6}} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <Box component="form" onSubmit={handleSignIn} sx={{ width: "100%", maxWidth: "400px" }}>
              <FormControl fullWidth sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <Typography variant="h4" align="center" fontWeight="bold">Welcome</Typography>
                <TextField variant="outlined" label="Username" name="userName" value={formData.userName} onChange={handleChange} required/>
                <TextField variant="outlined" label="Password" name="password" type={password ? "text" : "password"} value={formData.password} onChange={handleChange} required/>
                <FormControlLabel control={<Checkbox checked={password} onChange={toggleShowPassword} />} label="Show Password" />
                <Button variant="contained" sx={{backgroundColor: theme.palette.primary.dark,color:'white'}} type="submit" fullWidth>
                  <Typography variant="body2">Sign In</Typography>
                </Button>
              </FormControl>
            </Box>
            {!isMobile && <Diversity3Icon sx={{ fontSize: "5rem" }} color="secondary" />}
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
}
export default Login;

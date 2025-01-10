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
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useAuth } from "../Auth/useAuthForm";
function Login() {
  const location = useLocation();
  const { styleMap, formData, toggleShowPassword, handleChange, handleSignIn } =
    useAuth();

  const style = styleMap[location.pathname];
  return (
    <>
      <Box component="div" sx={style}>
        <Paper
          elevation={8}
          sx={{
            padding: "0",
            margin: "0",
            width: "70%",
            height: "70%",
            borderRadius: "20px",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid
              size={6}
              sx={{
                padding: "15px",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                backgroundColor: "#ab47bc",
                borderRadius: "20px 0 0 20px",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexFlow: "column",
                  gap: "20px",
                  width: "70%",
                  position: "absolute",
                }}
              >
                <ImageList sx={{ width: "70%", alignSelf: "center" }} cols={1}>
                  <ImageListItem>
                    <img
                      src="Food.webp"
                      alt={"Our Home"}
                      loading="lazy"
                      style={{ borderRadius: "15px" }}
                    />
                  </ImageListItem>
                </ImageList>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    padding: "5px",
                    borderRadius: "50px",
                    backgroundColor: "#ce93d8",
                  }}
                >
                  Our Home
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    maxWidth: "300px",
                    maxHeight: "170px",
                    fontSize: "12px",
                    lineHeight: "1.5",
                  }}
                >
                  Our Home เว็บไซต์สำหรับการจัดการค่าใช่จ่ายในหอพัก ครบจบในแพลตฟอร์มเดียว
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={6}
              sx={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                borderRadius: "0 20px 20px 0",
                height: "100%",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSignIn}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FormControl
                  sx={{
                    maxWidth: "400px",
                    width: "65%",
                    display: "flex",
                    flexFlow: "column nowrap",
                    gap: "20px",
                  }}
                >
                  <Typography variant="h4" align="center" fontFamily="sans-serif" sx={{fontWeight:'bold'}}>
                    Welcome
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="Username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                  <TextField
                    variant="outlined"
                    label="Password"
                    name="password"
                    type={formData.showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.showPassword}
                        onChange={toggleShowPassword}
                      />
                    }
                    label="Show Password"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColorolor: "#01037B" }}
                    type="submit"
                  >
                    <Typography variant="body2" >
                      Sign In
                    </Typography>
                  </Button>
                </FormControl>
              </Box>
              <Diversity3Icon sx={{ fontSize: "5rem" }} color="secondary" />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
export default Login;

import React, { useEffect, useState } from "react";
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
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";

function Login() {
  const location = useLocation();

  const { styleMap, handleSignIn, loading, user } = useAuth();

  const style = styleMap[location.pathname];
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  return (
    <>
    {loading && <CircularProgress/>}
      <Box
        component="div"
        sx={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            padding: "10px",
            width: isMobile ? "90%" : "70%",
            maxWidth: "800px",
            borderRadius: "20px",
          }}
        >
          <Grid2 container spacing={2} sx={{ height: "100%", padding: "10px" }}>
            {isMobile ? (
              <Grid2
                size={{ xs: 12 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ImageList sx={{ width: "60%" }} cols={1}>
                  <ImageListItem>
                    <img
                      src="logoverynew-Photoroom.png"
                      alt="Our Home"
                      loading="lazy"
                      style={{ borderRadius: "15px", width: "100%" }}
                    />
                  </ImageListItem>
                </ImageList>
              </Grid2>
            ) : (
              <Grid2
                size={{ xs: 12, sm: 6 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: "10px 0 0 10px",
                  padding: "20px",
                }}
              >
                <ImageList sx={{ width: "70%" }} cols={1}>
                  <ImageListItem>
                    <img
                      src="logoverynew-Photoroom.png"
                      alt="Our Home"
                      loading="lazy"
                      style={{ borderRadius: "15px", width: "100%" }}
                    />
                  </ImageListItem>
                </ImageList>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    mt: "20px",
                    maxWidth: "270px",
                    fontSize: "12px",
                    lineHeight: "1.5",
                    color: "white",
                  }}
                >
                  Our Home เว็บไซต์สำหรับการจัดการค่าใช่จ่ายในหอพัก
                  ครบจบในแพลตฟอร์มเดียว
                </Typography>
              </Grid2>
            )}
            <Grid2
              size={{ xs: 12, sm: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                component="form"
                onSubmit={(e) => handleSignIn(e, email, password)}
                sx={{ width: "100%", maxWidth: "400px" }}
              >
                <FormControl
                  fullWidth
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  <Typography variant="h4" align="center" fontWeight="bold">
                    Welcome
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                  <TextField
                    variant="outlined"
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showPassword}
                        onClick={toggleShowPassword}
                      />
                    }
                    label="Show Password"
                  />
                  <Button
                    variant="contained"
                    sx={{ color: "white" }}
                    color="secondary"
                    type="submit"
                    fullWidth
                  >
                    <Typography variant="body2">Sign In</Typography>
                  </Button>
                </FormControl>
              </Box>
              {!isMobile && (
                <Diversity3Icon sx={{ fontSize: "5rem" }} color="primary" />
              )}
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </>
  );
}
export default Login;

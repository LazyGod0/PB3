import React, { useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Link,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function InputForm({ title }) {
  const navigate = useNavigate();
  const {
    formData,
    handleChange,
    toggleShowPassword,
    handleSubmit,
    ToastContainer,
  } = useAuth();

  useEffect(() => {
    if (formData.state === "fail") {
      try {
        navigate(0);
      } catch (error) {
        console.error("Navigation failed:", error);
      }
    } else if (formData.state === "success") {
      navigate("/home");
    }
  }, [formData.state, navigate]);

  return (
    <>
      <ToastContainer position="top-center" />
      <Box
        component="form"
        onSubmit={(e) => handleSubmit(e, title)}
        className="auth-form"
      >
        <KeyboardBackspaceIcon
          onClick={(e)=>navigate(-1)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: "25px",
            padding: "5px",
            fontSize: "1.9rem",
            backgroundColor: "#6495ED",
            borderRadius: "50%",
            transition:'all 0.5s ease',
            '&:hover':{backgroundColor:"#649FFF",transform:'scale(1.1)'}
          }}
        />
        <Typography variant="h4" className="auth-title">
          {title}
        </Typography>
        <FormControl sx={{ width: "80%", display: "flex", gap: "15px" }}>
          {title === "Sign Up" && (
            <>
              <Box
                component="div"
                sx={{ width: "100%", display: "flex", gap: "10px" }}
              >
                <FormField
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="lastname"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Box>
              <FormField
                label="Room Number"
                name="roomNumber"
                type="text"
                value={formData.roomNumber}
                onChange={handleChange}
                required
              />
            </>
          )}

          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormField
            label="Password"
            name="password"
            type={formData.showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.showPassword}
                onChange={toggleShowPassword}
              />
            }
            label={
              <Typography sx={{ fontSize: "13px" }}>Show Password</Typography>
            }
          />
          {title === "Log In" && (
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "13px" }}>
              <Link
                href="/forgetpassword"
                underline="always"
                sx={{ marginLeft: "auto" }}
              >
                Forget Password
              </Link>
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          type="submit"
          className="submit"
          sx={{ width: "80%", borderRadius: "15px",transition:'all 0.5s ease','&:hover':{transform:'scale(1.05)'} }}
        >
          {title}
        </Button>
        {/* <Typography sx={{ fontSize: "13px" }}>
          {title === "Log In" ? (
            <>
              Don't have an account?{" "}
              <Link onClick={() => navigate("/register")} underline="hover" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link onClick={() => navigate("/login")} underline="hover" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                Log In
              </Link>
            </>
          )}
        </Typography> */}
      </Box>
    </>
  );
}

export default InputForm;

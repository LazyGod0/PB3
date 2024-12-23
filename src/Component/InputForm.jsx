import React, { useEffect } from "react";
import { Box, Button, Typography, Link, FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { useAuth } from "../Auth/useAuthForm.jsx";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField.jsx";

function InputForm({ title }) {
  const navigate = useNavigate();
  const { formData, handleChange, toggleShowPassword, handleSubmit, ToastContainer } = useAuth();

  useEffect(() => {
    if (formData.state === "fail") {
      try {
        navigate(0);
      } catch (error) {
        console.error("Navigation failed:", error);
      }
    }
    else if (formData.state === "success") {
      navigate('/home');
    }
  }, [formData.state, navigate]);



  return (
    <>
      <ToastContainer position="top-center" />
      <Box component="form" onSubmit={(e) => handleSubmit(e, title)} className="auth-form">
        <Typography variant="h4" className="auth-title">{title}</Typography>
        <FormControl sx={{ width: "80%", display: "flex", gap: "15px" }}>
          <FormField
            label="Username"
            name="userName"
            type="text"
            value={formData.userName}
            onChange={handleChange}
            required
          />
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
        <Box sx={{ display: "flex", flexFlow: 'row wrap', justifyContent: "space-between", alignItems: 'center', width: "80%" }}>
          <FormControlLabel
            control={<Checkbox checked={formData.showPassword} onChange={toggleShowPassword} />}
            label={<Typography sx={{ fontSize: "13px" }}>Show Password</Typography>}
          />
          {title === "Log In" && (
            <Typography sx={{ fontFamily: 'sans-serif', fontSize: '13px' }}>
              <Link href="/forgetpassword" underline="always" sx={{ marginLeft: "auto" }}>
                Forget Password
              </Link>
            </Typography>
          )}
        </Box>
        <Button variant="contained" type="submit" className="submit" sx={{ width: "80%", borderRadius: "15px" }}>
          {title}
        </Button>
        <Typography sx={{ fontSize: "13px" }}>
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
              <Link onClick={() => navigate("/")} underline="hover" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                Log In
              </Link>
            </>
          )}
        </Typography>
      </Box>
    </>
  );
}

export default InputForm;

import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Typography, TextField, Button, Box } from "@mui/material";

function ForgetPassword() {
  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset Password has been sent to your email!");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  const [email, setEmail] = useState("");

  return (
    <>
      <ToastContainer />
      <Box
        component="form"
        onSubmit={handleResetPassword}
        sx={{
          padding: "15px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 0 10px gray",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Send your email to reset password
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          gutterBottom
        >
          Please enter your registered email address below. We will send a link
          to reset your password. If you don’t see the email in your inbox,
          please check your spam or junk folder.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            id="verify-email"
            label="Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width:'140px',height:'56px',borderRadius: "5px", backgroundColor: "green" }}
          >
            Send Email
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ marginTop: "10px" }}
        >
          Need further assistance? Contact our support team at support@example.com.
        </Typography>
      </Box>
    </>
  );
}

export default ForgetPassword;

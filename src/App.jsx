import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { AuthProvider } from "./Auth/useAuthForm.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/kanit";
import FirstPage from "./Pages/FirstPage.jsx";
import FunctionMenu from "./Pages/FunctionMenu.jsx";
import Payme from "./Pages/Payme.jsx";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif", "Kanit"].join(","),
  },
});

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                <Route path="/register" Component={Register}></Route>
                <Route path="/" Component={FirstPage}></Route>
                <Route path="/login" Component={Login}></Route>
                <Route
                  path="/forgetpassword"
                  Component={ForgetPassword}
                ></Route>
                <Route path="/home" Component={Home}></Route>
                <Route path="/functioon" Component={FunctionMenu}></Route>
                <Route path="/payme" Component={Payme}></Route>
              </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

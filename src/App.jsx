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
import Sumramoney from "./Pages/Sumramoney.jsx";
import Darkmode from "./Pages/Darkmode.jsx";
import HomeV2 from "./Pages/HomeV2.jsx";
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
                <Route path="/sumra" Component={Sumramoney}></Route>
                <Route path="/navbarv2" Component={Darkmode}></Route>
                <Route path="/homev2" Component={HomeV2}></Route>
              </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

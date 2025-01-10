import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import Profile from "./Pages/Profile.jsx";
import Home from "./Pages/Home.jsx";
import BillPage from "./Pages/BillPage.jsx";
import "./App.css";
import { AuthProvider } from "./Auth/useAuthForm.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/kanit"; // This method uses the `@fontsource` package.
import FirstPage from "./Pages/FirstPage.jsx";

let theme = createTheme({
  typography: {
    fontFamily: ["Kanit,san-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ce93d8",
      dark: "#ab47bc",
    },
    secondary: {
      main: "#da34af",
      dark: "#982485",
    },
  },
});

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={FirstPage}></Route>
              <Route path="/login" Component={Login}></Route>
              <Route path="/forgetpassword" Component={ForgetPassword}></Route>
              <Route path="/home" Component={Home}></Route>
              <Route path="/profile" Component={Profile}></Route>
              <Route path="/bill" Component={BillPage}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

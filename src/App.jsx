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
import NavBar from "./Component/NavBar.jsx";
import { useLocation } from "react-router-dom";
import "@fontsource/kanit"; // This method uses the `@fontsource` package.
// import ProtectedRoutes from "./Component/ProtectedRoutes.jsx";
import PaymentHistory from "./Pages/PaymentHistory.jsx";
let theme = createTheme({
  typography: {
    fontFamily: ["Kanit,san-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#344CB7",
      dark: "#133E87",
    },
    secondary: {
      main: "#577BC1",
      
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" Component={Login}></Route>
              <Route path="/forgetpassword" Component={ForgetPassword}></Route>
              {/* <Route element={<ProtectedRoutes />}> */}
                <Route path="/home" Component={Home}></Route>
                <Route path="/profile" Component={Profile}></Route>
                <Route path="/bill" Component={BillPage}></Route>
              {/* </Route> */}
              <Route path="/his" Component={PaymentHistory}></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
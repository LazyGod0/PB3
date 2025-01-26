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
<<<<<<< HEAD
import "@fontsource/kanit";
import FirstPage from "./Pages/FirstPage.jsx";
import FunctionMenu from "./Pages/FunctionMenu.jsx";
import Payme from "./Pages/Payme.jsx";
const theme = createTheme({
=======
import "@fontsource/kanit"; // This method uses the `@fontsource` package.
// import ProtectedRoutes from "./Component/ProtectedRoutes.jsx";
let theme = createTheme({
>>>>>>> dev
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
<<<<<<< HEAD
                <Route path="/functioon" Component={FunctionMenu}></Route>
                <Route path="/payme" Component={Payme}></Route>
              </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
=======
                <Route path="/profile" Component={Profile}></Route>
                <Route path="/bill" Component={BillPage}></Route>
              {/* </Route> */}
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
>>>>>>> dev
    </>
  );
}

export default App;

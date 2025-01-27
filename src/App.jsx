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
import { useRoutes } from "react-router-dom";
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
  function AppRoutes() {
    let element = useRoutes([
      {
        path: "/",
        element: <Login/>},
        // children: [
          {
            path: "/home",
            element: <Home />,
          },
          { path: "/bill", element: <BillPage/> },
          { path:"/his",element:<PaymentHistory/>}
        // ],
      ,
    ]);
    return element
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes/>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import NavBar from "./Component/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import HomeAdmin from "./Pages/Admin/HomeAdmin.jsx";
import BillPage from "./Pages/BillPage.jsx";
import "./App.css";
import { AuthProvider } from "./Auth/useAuthForm.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import "@fontsource/kanit"; // This method uses the `@fontsource` package.
// import ProtectedRoutes from "./Component/ProtectedRoutes.jsx";
import PaymentHistory from "./Pages/PaymentHistory.jsx";
import UserRoutes from "./routes/user-routes.jsx";
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
      { path: "/homeadmin", element: <HomeAdmin /> },
      {
        path: "",
        element: <Login />,
      },
      {
        path: "",
        element: <UserRoutes />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          { path: "bill", element: <BillPage /> },
          { path: "his", element: <PaymentHistory /> },
        ],
      },
    ]);
    return element;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

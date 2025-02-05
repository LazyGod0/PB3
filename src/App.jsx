import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import NavBar from "./Component/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import HomeAdmin from "./Pages/HomeAdmin.jsx";
import BillPage from "./Pages/BillPage.jsx";
import "./App.css";
import { AuthProvider } from "./Auth/useAuthForm.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import "@fontsource/kanit"; // This method uses the `@fontsource` package.
// import ProtectedRoutes from "./Component/ProtectedRoutes.jsx";
import PaymentHistory from "./Pages/PaymentHistory.jsx";
import UserRoutes from "./routes/user-routes.jsx";
import AddRoom from "./Pages/AddRoom.jsx";

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
        path: "",
        element: <Login />,
      },
      {
        path: "",
        element: <UserRoutes />,
        children: [
          {path:'/addroom' , element: <AddRoom/>},
          { path: "/homeadmin", element: <HomeAdmin /> },
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

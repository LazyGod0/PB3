import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import FirstPage from "./Pages/FirstPage.jsx";
import Sumramoney from "./Pages/Sumramoney.jsx";
import HomeV2 from "./Pages/HomeV2.jsx";
import NavBar from "./Component/NavBar.jsx";
import Navv from "./Component/Navv.jsx";
import Home from "./Pages/Home.jsx";
import { AuthProvider } from "./Auth/useAuthForm.jsx";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
    typography: {
      fontFamily: ["sans-serif"].join(","),
    },
  });

const AppRoutes = () => {
  const element = useRoutes([
    { path: "", element: <FirstPage /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
    { path: "/home", element: <Home /> },
    { path: "/sumra", element: <Sumramoney /> },
    { path: "/navbar", element: <NavBar /> },
    { path: "/homev2", element: <HomeV2 /> },
    { path: "/navv", element: <Navv /> },
  ]);
  return element;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

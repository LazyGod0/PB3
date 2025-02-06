import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import NavBar from "./Component/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import HomeAdmin from "./Pages/HomeAdmin.jsx";
import BillPage from "./Pages/BillPage.jsx";
import "./App.css";
import { AuthProvider } from "./Auth/useAuthForm.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/kanit"; // This method uses the @fontsource package.
// import ProtectedRoutes from "./Component/ProtectedRoutes.jsx";
import PaymentHistory from "./Pages/PaymentHistory.jsx";
import UserRoutes from "./routes/user-routes.jsx";
import AddRoom from "./Pages/AddRoom.jsx";
import ShowRoom from "./Pages/ShowRoom.jsx";
import Logpop from "./Pages/Logpop.jsx";

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

const AppRoutes = () => {
  const element = useRoutes([
    // { path: "", element: <FirstPage /> },
    { path: "/", element: <Login /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
    { path: "/home", element: <Home /> },
    { path: "/sumra", element: <Sumramoney /> },
    { path: "/navbar", element: <NavBar /> },
    { path: "/homev2", element: <HomeV2 /> },
    { path: "/navv", element: <Navv /> },
    { path: "/his", element: <PaymentHistory /> },
    { path: "/bill", element: <BillPage /> },
    { path: "/logpop", element: <Logpop /> },
  ]);
  return element;
};

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
          { path: "/showroom", element: <ShowRoom/> },
          {path: "home", element: <Home />,},
          { path: "bill", element: <BillPage /> },
          { path: "his", element: <PaymentHistory /> },
          { path: "logpop", element: <Logpop /> },
        ],
      },
    ]);
    return element;
  }
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
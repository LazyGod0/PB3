import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import ForgetPassword from './Pages/ForgetPassword.jsx';
import './App.css'
import Home from './Pages/Home.jsx';
import { AuthProvider } from './Auth/useAuthForm.jsx';
import NavBar from './Component/NavBar.jsx';
// import GG from './Example/GG.jsx';

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={Register}></Route>
          <Route path='/'  Component={Login}></Route>
          <Route path='/forgetpassword' Component={ForgetPassword}></Route>
          <Route path='/home' Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
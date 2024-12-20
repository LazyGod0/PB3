import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import ForgetPassword from './Pages/ForgetPassword.jsx';
import './App.css'
import Home from './Pages/Home.jsx';
// import GG from './Example/GG.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={Register}></Route>
          <Route path='/login'  Component={Login}></Route>
          <Route path='/forgetpassword' Component={ForgetPassword}></Route>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
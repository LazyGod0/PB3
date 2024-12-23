import React from 'react'
import NavBar from '../Component/NavBar.jsx'
import { useEffect } from 'react';
import { useAuth } from '../Auth/useAuthForm.jsx';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const {user,logOutState} = useAuth();
  useEffect(() => {
    if (logOutState && !user) {
      navigate('/');
    } else {
      console.log("User is not log out");
    }
  }, [logOutState,user,
     navigate]);

  return (
    <>
      <NavBar />
    </>
  );
    
}

export default Home
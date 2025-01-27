import React from 'react'
import { useAuth } from '../Auth/useAuthForm'
import { Navigate, Outlet } from 'react-router-dom';

const UserRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default UserRoutes
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

function ProtectedRoute() {
  const { auth } = useContext(AuthContext);
  return auth.accessToken ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;

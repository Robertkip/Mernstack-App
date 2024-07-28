import React from 'react';
import { Navigate } from 'react-router-dom';
import token from "./Login";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = window.localStorage.getItem("Token") !== token;

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;

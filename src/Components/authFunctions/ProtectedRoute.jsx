import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
// wrap the ProtectedRoutes in this in the route page so that they can not be accessed without being logged in 
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // If the user is not authenticated, redirect to the login page
  if (!currentUser) {
    return <Navigate to="/home" replace />;
  }

  // if logged in, render the children (protected component)
  return children;
};

export default ProtectedRoute;

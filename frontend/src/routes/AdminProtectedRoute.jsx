import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtectedRoute = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (!isAuthenticated || (user && user.role !== "admin")) {
    // Redirect to the login page if not authenticated or not an admin
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;

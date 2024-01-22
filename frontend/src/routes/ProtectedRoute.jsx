import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import Loader from "../components/layout/Loader/Loader";

const ProtectedRoute = () => {
  const { loading, user } = useSelector((state) => state.user);

  // Assuming that your Redux state is the source of truth for authentication
  if (loading) {
    return <Loader />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

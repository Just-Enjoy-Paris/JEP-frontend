import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/user.context";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/log" />;
  }
  return children;
};

export default PrivateRoute;

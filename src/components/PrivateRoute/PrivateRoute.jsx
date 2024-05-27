import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/user.context";
import CustomerArea from "../../pages/customerArea/CustomerArea";

const PrivateRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
      return <CustomerArea />;
  };

export default PrivateRoute;
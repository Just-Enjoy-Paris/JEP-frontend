import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../context/user.context";
import NavLinks from "../NavLinks/NavLinks";
import logo from "../../img/logo.svg";

import "./header.css"

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className="header">
      {/* Navigation links */}
      <NavLinks />
      {/* logo */}
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      {/* Log button */}
      {isAuthenticated ? (
        // Si l'utilisateur est connecté, redirigez-le vers la page "customer area"
        <NavLink className="logButton" to="/client-area">
          <FaUserAlt className="logIcon" size={24} />
        </NavLink>
      ) : (
        // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
        <NavLink className="logButton" to="/log">
          <FaUserAlt className="logIcon" size={24} />
        </NavLink>
      )}
    </header>
  );
}

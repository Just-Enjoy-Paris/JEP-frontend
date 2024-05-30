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
        <NavLink className="logButton" to="/client-info">
          <FaUserAlt className="logIcon" size={24} />
        </NavLink>
      ) : (
        <NavLink className="logButton" to="/log">
          <FaUserAlt className="logIcon" size={24} />
        </NavLink>
      )}
    </header>
  );
}

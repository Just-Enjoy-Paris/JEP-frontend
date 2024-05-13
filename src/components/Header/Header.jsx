import { NavLink } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa"

import "./Header.css"
import NavLinks from "../NavLinks/NavLinks"
import logo from "../../img/logo.svg"

export default function Header() {
  return (
    <header className="header">
      {/* Navigation links */}
      <NavLinks />
      {/* logo */}
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      {/* log button */}
      <NavLink className="logButton" to="/Log">
        <FaUserAlt className="logIcon" />
      </NavLink>
    </header>
  )
}

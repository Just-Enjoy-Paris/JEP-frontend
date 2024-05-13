import { NavLink } from "react-router-dom"
import "./Footer.css"

import logo from "../../img/logo.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img className="logoFooter" src={logo} alt="logo" />
      </NavLink>
      <NavLink>Mentions Légales</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </footer>
  )
}

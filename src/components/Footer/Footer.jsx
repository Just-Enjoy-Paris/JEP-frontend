import { NavLink } from "react-router-dom"
import "./footer.css"

import logo from "../../img/logo.svg"

export default function Footer() {
  return (
    <footer>
      <NavLink to="/">
        <img className="logoFooter" src={logo} alt="logo" />
      </NavLink>
      <NavLink>Mentions Légales</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cookie-policy">Cookies</NavLink>
    </footer>
  )
}

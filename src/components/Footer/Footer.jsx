import { NavLink } from "react-router-dom"
import "./footer.css"

import logo from "../../img/logo.svg"

export default function Footer() {
  return (
    <footer>
      <NavLink to="/">
        <img className="logoFooter" src={logo} alt="logo JEP" />
      </NavLink>
      <div className="conditions">
        <NavLink to="/cgu" className="cgu">CGU</NavLink>
        <p>/</p>
        <NavLink to="/cgv" className="cgv">CGV</NavLink>
      </div>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cookie-policy">Cookies</NavLink>
    </footer>
  )
}

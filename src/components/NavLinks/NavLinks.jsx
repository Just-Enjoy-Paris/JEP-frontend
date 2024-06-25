import { NavLink } from "react-router-dom"
import { useState } from "react"

import "./navLinks.css"
import openMenu from "../../img/open.svg"
import closeMenu from "../../img/close.svg"

const NavLinks = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Menu toggle button */}
      <button
        className="dropdown-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      {/* Navigation links */}
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        {/* Home link */}
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Acceuil
        </NavLink>

        {/* Places link */}
        <NavLink to="/places" onClick={() => setIsMenuOpen(false)}>
          Lieux
        </NavLink>

        {/* About link */}
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          À propos
        </NavLink>

        {/* 
            <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>
              Evenements
            </NavLink>*/}

        {/* Contact link */}
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
        <NavLink to="/messagerie" onClick={() => setIsMenuOpen(false)}>
          Messaging
        </NavLink>
      </nav>
    </>
  )
}

export default NavLinks

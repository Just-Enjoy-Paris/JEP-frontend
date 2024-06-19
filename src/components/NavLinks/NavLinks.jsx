import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import Modal from "react-modal"
import "./navLinks.css"
import openMenu from "../../img/open.svg"
import closeMenu from "../../img/close.svg"

// Set the app element for accessibility purposes
Modal.setAppElement("#root")

const NavLinks = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsClosing(true)
        setTimeout(() => {
          setIsMenuOpen(false)
          setIsClosing(false) // Reset isClosing after closing
        }, 300) // Match this duration with the CSS animation duration
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMenuOpen])

  const openModal = () => {
    setIsMenuOpen(true)
    setIsClosing(false)
  }

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false) // Reset isClosing after closing
    }, 300) // Match this duration with the CSS animation duration
  }

  return (
    <>
      {/* Menu toggle button */}
      <button
        className="dropdown-toggle"
        onClick={isMenuOpen ? closeModal : openModal}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>

      {/* Modal for navigation links */}
      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeModal}
        contentLabel="Navigation Modal"
        className={`nav-modal ${isClosing ? "slide-out" : "slide-in"}`}
        overlayClassName="nav-overlay"
      >
        <nav className="nav-links">
          <NavLink to="/" onClick={closeModal}>
            Acceuil
          </NavLink>
          <NavLink to="/places" onClick={closeModal}>
            Lieux
          </NavLink>
          <NavLink to="/about" onClick={closeModal}>
            À propos
          </NavLink>
          <NavLink to="/contact" onClick={closeModal}>
            Contact
          </NavLink>
        </nav>
      </Modal>
    </>
  )
}

export default NavLinks

import "./header.css"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa"
import { AuthContext } from "../../../context/user.context"
import NavLinks from "../NavLinks/NavLinks"
import logo from "../../img/logo.svg"

export default function Header() {
  // Get authentication status and user information from AuthContext
  const { isAuthenticated, user } = useContext(AuthContext)

  return (
    <header className="header">
      {/* Render navigation links */}
      <NavLinks />

      {/* Logo link to home page */}
      <NavLink className="logo-container" to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>

      {/* Conditionally render user avatar or login icon based on authentication status */}
      {isAuthenticated && user ? (
        <NavLink className="logButton" to="/client-info">
          {user.account.avatar ? (
            // Display user's avatar if available
            <img
              className="avatar-icon"
              src={user.account.avatar}
              alt="user avatar"
            />
          ) : (
            // Display default user icon if avatar is not available
            <FaUserAlt className="logIcon" size={24} />
          )}
        </NavLink>
      ) : (
        // Display login icon if user is not authenticated
        <NavLink className="logButton" to="/log">
          <FaUserAlt className="logIcon" size={24} />
        </NavLink>
      )}
    </header>
  )
}

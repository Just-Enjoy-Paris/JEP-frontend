/* eslint-disable no-console */
import React, { useContext, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { CiUser } from "react-icons/ci"
import { CiHeart } from "react-icons/ci"
import { CiLogout } from "react-icons/ci"
import { AuthContext } from "../../../context/user.context"

import "./userInfo.css"

const UserInfo = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated, handleLogout } = useContext(AuthContext)

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/log")
    }
  }, [isAuthenticated, navigate])

  return !user ? (
    // Show loading message if user data is not available
    <div>Loading</div>
  ) : (
    // Display user information
    <section className="user-info-page">
      <h1 className="infoTitle">Bienvenue,</h1>
      <h3 className="user-name">{user.account.username}</h3>
      <div className="user-avatar">
        <img src={user.account.avatar} alt="user avatar" />
      </div>
      {/* Link to user favorites */}
      <NavLink to="/user-favorites" className="user-fav">
        <CiHeart size={30} />
        <p>Mes Favoris</p>
      </NavLink>
      {/* Link to user information */}
      <NavLink to="/client-area" className="user-info">
        <CiUser className="infoIcon" size={30} />
        <p>Mes informations</p>
      </NavLink>
      {/* Logout button */}
      <div className="client-logout">
        <CiLogout size={30} />
        <button
          onClick={() => {
            handleLogout()
            navigate("/")
          }}
        >
          Déconnexion
        </button>
      </div>
    </section>
  )
}

export default UserInfo

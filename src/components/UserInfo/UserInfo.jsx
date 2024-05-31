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

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/log")
    }
  }, [isAuthenticated, navigate])

  return !user ? (
    <div>Loading</div>
  ) : (
    <section className="user-info-page">
      <h1 className="infoTitle">Bienvenue,</h1>
      <h3 className="user-name">{user.account.username}</h3>
      <div className="user-avatar">
        <img src={user.account.avatar} alt="user avatar" />
      </div>
      <div className="user-fav">
        <CiHeart className="favIcon" size={30} />
        <p>Mes Favoris</p>
      </div>
      <NavLink to="/client-area" className="user-info">
        <CiUser className="infoIcon" size={30} />
        <p>Mes informations</p>
      </NavLink>
      <div className="client-logout">
        <CiLogout size={30} />
        <button onClick={handleLogout}>Déconnexion</button>
      </div>
    </section>
  )
}

export default UserInfo

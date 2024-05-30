/* eslint-disable no-console */
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../../../context/user.context";

import "./userInfo.css";

const UserInfo = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, handleLogout } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return !isAuthenticated ? ( navigate("/log") ) : (
    <div className="user-info-page">
      <h1 className="infoTitle">Bienvenue,</h1>
      <h3 className="user-name">{user.name}</h3>
      <div className="user-avatar">{user.avatar}</div>
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
    </div>
  );
}

export default UserInfo;

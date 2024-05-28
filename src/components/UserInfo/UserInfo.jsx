/* eslint-disable no-console */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../context/user.context";

import "./userInfo.css";

const UserInfo = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return !isAuthenticated ? ( navigate("/log") ) : (
    <div className="user-info-page">
      <h1 className="title">Bienvenue,</h1>
      <h3 className="user-name">{user.name}</h3>
      <div className="user-avatar">{user.avatar}</div>
      <div className="user-fav">
        <FaUserAlt className="favIcon" size={24} />
        <p>Favoris</p>
      </div>
      <div className="user-info">
        <FaUserAlt className="infoIcon" size={24} />
        <p>Mes informations</p>
      </div>

      <button>Log out</button>
    </div>
  );
}

export default UserInfo;

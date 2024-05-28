import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { AuthContext } from "../../../context/user.context";

import avatar1 from "../../assets/avatars/joker-svgrepo-com.svg";
import avatar2 from "../../assets/avatars/superhero-svgrepo-com.svg";

import "./userBoard.css";

const UserBoard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, update, setUpdate, handleLogout, user, setUser } =
    useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState(user?.avatar || "");
  const [newEmail, setNewEmail] = useState(user?.email || "");

  const avatars = [avatar1, avatar2];

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/updateprofile`,
        { email: newEmail, avatar: newAvatar, password: newPassword },
        { withCredentials: true }
      );
      setUser(response.data);
      setUpdate(!update);
    } catch (err) {
      console.log("Error updating user:", err);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/log");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="espace-client">
      <h1 className="title">Mes informations</h1>
      <form onSubmit={updateUser}>
        <label>
          Mettre à jour email:
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>

      <form onSubmit={updateUser}>
        <label>
          Mettre à jour le mot de passe:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>

      <div>
        <h2>Mettre à jour avatar</h2>
        <div className="avatarArea">
          {avatars.map((avatar) => (
            <img
              className={classNames("avatar", {
                selected: newAvatar === avatar,
              })}
              key={avatar}
              src={avatar}
              alt="avatar"
              onClick={() => setNewAvatar(avatar)}
            />
          ))}
        </div>
        <button onClick={updateUser}>Enregistrer</button>
      </div>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserBoard;

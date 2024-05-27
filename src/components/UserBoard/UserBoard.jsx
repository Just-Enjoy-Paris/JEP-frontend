import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import { AuthContext } from "../../../context/user.context"

import "./userBoard.css"

const UserBoard = () => {
  const navigate = useNavigate()
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const { user, updateEmail, updatePassword, updateAvatar } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const avatars = ["avatar1.png", "avatar2.png"]

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setPassword(user.password || "");
      setSelectedAvatar(user.avatar || "");
    }
  }, [user]);

  const handleEmailChange = async (e) => {
    e.preventDefault();
    try {
      await updateEmail(user.email);
      console.log("Email mis à jour avec succès");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'email:", error);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(user.password);
      console.log("Mot de passe mis à jour avec succès");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du mot de passe:", error);
    }
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleAvatarChange = async () => {
    try {
      await updateAvatar(selectedAvatar);
      console.log("Avatar mis à jour avec succès");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'avatar:", error);
    }
  };

  const handleLogout = () => {
    // Logic to handle logout
    navigate("/login");
  };

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="">
      <h1>Espace Client</h1>
      <form onSubmit={handleEmailChange}>
        <label>
          Changer Email:
          <input
            type="email"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
          />
        </label>
        <button type="submit">Mettre à jour Email</button>
      </form>

      <form onSubmit={handlePasswordChange}>
        <label>
          Changer Mot de Passe:
          <input
            type="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
        </label>
        <button type="submit">Mettre à jour Mot de Passe</button>
      </form>

      <div>
        <h2>Changer Avatar</h2>
        <div className="avatarArea">
          {avatars.map(avatar => (
            <img
              className={classNames("avatar", {
                selected: selectedAvatar === avatar
              })}
              key={avatar}
              src={avatar}
              alt="avatar"
              onClick={() => handleAvatarSelect(avatar)}
            />
          ))}
        </div>
        <button onClick={handleAvatarChange}>Enregistrer Avatar</button>
      </div>

      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}

export default UserBoard
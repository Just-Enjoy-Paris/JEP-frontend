import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import "./userBoard.css"

const UserBoard = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const [error, setError] = useState("")

  const avatars = ["avatar1.png", "avatar2.png"]

  const handleEmailChange = e => {
    e.preventDefault()
    // Logic to update email
    // ...
  }

  const handlePasswordChange = e => {
    e.preventDefault()
    // Logic to update password
    // ...
  }

  const handleAvatarSelect = avatar => {
    setSelectedAvatar(avatar)
  }

  const handleAvatarChange = () => {
    // Logique pour mettre à jour l'avatar
    console.log("Avatar sélectionné:", selectedAvatar)
  }

  const handleLogout = () => {
    // Logic to handle logout
    navigate("/login")
  }

  return (
    <div>
      <h1>Espace Client</h1>
      <form onSubmit={handleEmailChange}>
        <label>
          Changer Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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

      {error && <p>{error}</p>}

      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}

export default UserBoard

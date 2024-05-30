/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import { AuthContext } from "../../../context/user.context"

import "./userBoard.css"

const UserBoard = () => {
  const navigate = useNavigate()
  const { isAuthenticated, update, setUpdate } =
    useContext(AuthContext)
  const [newPassword, setNewPassword] = useState("")
  const [newAvatar, setNewAvatar] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const avatars = ["avatar1.png", "avatar2.png"]

  const updateUser = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/updateprofile`,
        { newEmail, newAvatar, newPassword },
        { withCredentials: true }
      )
      setUpdate(!update)
    } catch (err) {
      console.log("Error updating user:", err)
    }
  }
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/log")
    }
  })

  return (
    <div className="espace-client">
      <h1 className="boardTitle">Mes informations</h1>
      <form onSubmit={updateUser}>
        <label>
          Mettre à jour l'email:
          <input
            type="email"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
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
            onChange={e => setNewPassword(e.target.value)}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>

      <div>
        <h2 className="avatarTitle">Mettre à jour l'avatar</h2>
        <div className="avatarArea">
          {avatars.map(avatar => (
            <img
              className={classNames("avatar", {
                selected: newAvatar === avatar
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
    </div>
  )
}

export default UserBoard

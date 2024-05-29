/* eslint-disable no-console */
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../../context/user.context"

import "./userBoard.css"

const UserBoard = () => {
  const navigate = useNavigate()
  const { isAuthenticated, update, setUpdate, handleLogout, user, setUser } =
    useContext(AuthContext)
  const [newPassword, setNewPassword] = useState("")
  const [newAvatar, setNewAvatar] = useState(user?.avatar || "")
  const [newEmail, setNewEmail] = useState(user?.email || "")

  const updateUser = async e => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/updateprofile`,
        { email: newEmail, avatar: newAvatar, password: newPassword },
        { withCredentials: true }
      )
      setUser(response.data)
      setUpdate(!update)
    } catch (err) {
      console.log("Error updating user:", err)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/log")
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="espace-client">
      <h1 className="title">Mes informations</h1>
      <form onSubmit={updateUser}>
        <label>
          Mettre à jour email:
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

      <form onSubmit={updateUser}>
        <label htmlFor="newAvatar" className="avatarArea">
          Mettre à jour avatar
          <input
            type="file"
            value={newAvatar}
            onChange={e => setNewAvatar(e.target.value)}
          />
        </label>
        <button onClick={updateUser}>Enregistrer</button>
      </form>

      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default UserBoard

/* eslint-disable no-console */
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/user.context"

import "./userBoard.css"

const UserBoard = () => {
  const navigate = useNavigate()
  const { isAuthenticated, update, setUpdate, user } = useContext(AuthContext)
  const [newAvatar, setNewAvatar] = useState(null)
  const [newEmail, setNewEmail] = useState(null)

  const updateUser = async e => {
    e.preventDefault()
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/updateprofile`,
        { email: newEmail, avatar: newAvatar },
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
  }, [isAuthenticated, navigate])

  return (
    <div className="espace-client">
      <h1 className="title">Mes informations</h1>
      <form onSubmit={updateUser}>
        <label>
          Email
          <input
            type="email"
            placeholder={user.email}
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
          />
        </label>

        <label htmlFor="newAvatar" className="avatarArea">
          Avatar
          <input
            type="file"
            value={newAvatar}
            onChange={e => setNewAvatar(e.target.value)}
          />
        </label>
        <button onClick={updateUser}>Enregistrer</button>
      </form>
    </div>
  )
}

export default UserBoard

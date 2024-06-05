/* eslint-disable no-console */
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/user.context"
import "./userBoard.css"

const UserBoard = () => {
  const navigate = useNavigate()
  const { isAuthenticated, update, setUpdate, user } = useContext(AuthContext)
  const [newEmail, setNewEmail] = useState("")
  const [file, setFile] = useState(null)

  const updateUser = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("newEmail", newEmail)

    if (file) {
      formData.append("newAvatar", file)
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/updateprofile`,
        formData,
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
    <section className="userBoard">
      <h1 className="title">Mes informations</h1>
      <form onSubmit={updateUser}>
        <div>
          <label>
            Email
            <input
              type="email"
              placeholder={user ? user.email : "email"}
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="newAvatar" className="avatarArea">
            Avatar
            {/* à retirer aprés ajout du loader */}
            {user && (
              <div className="userBoardAvatar">
                <img src={user.account.avatar} alt="user avatar" />
              </div>
            )}
            {file && (
              <div className="previewAvatar">
                <img src={URL.createObjectURL(file)} alt="New avatar" />
              </div>
            )}
            <input
              type="file"
              onChange={e => {
                setFile(e.target.files[0])
              }}
            />
          </label>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </section>
  )
}

export default UserBoard

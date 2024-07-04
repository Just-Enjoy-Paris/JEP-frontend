/* eslint-disable no-console */
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/user.context"
import "./userBoard.css"
import Button from "../Button/Button"

const UserBoard = () => {
  const navigate = useNavigate()
  const { isAuthenticated, setUser, user } = useContext(AuthContext)
  const [newEmail, setNewEmail] = useState("")
  const [file, setFile] = useState(null)

  // Function to handle user profile update
  const updateUser = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("newEmail", newEmail)
    formData.append("newAvatar", file)

    try {
      // Send update request to server
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/updateprofile`,
        formData,
        { withCredentials: true }
      )
      console.log(res.data.user)
      setUser(res.data.user)
    } catch (err) {
      console.log("Error updating user:", err)
    }
  }

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/log")
    }
  }, [isAuthenticated, navigate])

  return (
    <section className="userBoard">
      <h1 className="userBoardTitle">Mes informations</h1>
      <form onSubmit={updateUser}>
        <div>
          <label htmlFor="newAvatar" className="avatarArea">
            {/* Display user's current avatar or preview new avatar */}
            {user && (
              <div className="userBoardAvatar">
                <img
                  className="avatar"
                  src={user.account.avatar}
                  alt="user avatar"
                />
              </div>
            )}
            {file && (
              <div className="previewAvatar">
                <img
                  className="avatar"
                  src={URL.createObjectURL(file)}
                  alt="New avatar"
                />
              </div>
            )}
            {/* File input for avatar upload */}
            <input
              type="file"
              className="avatarChoice"
              onChange={e => {
                setFile(e.target.files[0])
              }}
            />
          </label>
        </div>
        <div className="userInfo">
          <label>
            {/* Input field for updating email */}
            <input
              type="email"
              placeholder={user ? user.email : "email"}
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
            />
          </label>
          {/* Display username */}
          <p>{user.account.username}</p>
        </div>
        {/* Submit button */}
        <Button name="Enregistrer" className="saveBtn" type="submit" />
      </form>
    </section>
  )
}

export default UserBoard

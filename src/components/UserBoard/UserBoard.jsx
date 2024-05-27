/* eslint-disable no-console */
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { AuthContext } from "../../../context/user.context";

import "./userBoard.css";

const UserBoard = () => {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const { user, updateEmail, updatePassword, updateAvatar, isAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const avatars = ["avatar1.png", "avatar2.png"];

  useEffect(() => {
    if (user) {
      setEmail(user.email || "")
      setPassword(user.password || "")
      setSelectedAvatar(user.avatar || "")
    }
  }, [user]);

  const handleEmailChange = async (e) => {
    e.preventDefault()
    try {
      await updateEmail(email)
      console.log("Email updated successfully")
    } catch (error) {
      console.error("Error updating email:", error)
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(password); 
      console.log("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const handleAvatarChange = async () => {
    try {
      await updateAvatar(selectedAvatar);
      console.log("Avatar updated successfully");
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  const handleLogout = () => {
    navigate("/log");
  };

  useEffect(async () => {
    if (isAuthenticated) {
      navigate("/client-area");
    }
  }, [isAuthenticated]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <form onSubmit={handleEmailChange}>
        <label>
          Change Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Update Email</button>
      </form>

      <form onSubmit={handlePasswordChange}>
        <label>
          Change Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Update Password</button>
      </form>

      <div>
        <h2>Change Avatar</h2>
        <div className="avatarArea">
          {avatars.map(avatar => (
            <img
              className={classNames("avatar", {
                selected: selectedAvatar === avatar
              })}
              key={avatar}
              src={avatar}
              alt="avatar"
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
        <button onClick={handleAvatarChange}>Save Avatar</button>
      </div>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default UserBoard;

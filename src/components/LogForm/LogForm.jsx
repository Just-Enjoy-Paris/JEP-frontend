/* eslint-disable no-console */
import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import "./logForm.css"
import axios from "axios"
import Button from "../Button/Button"
import { AuthContext } from "../../../context/user.context"

const LoginForm = () => {
  // Declare state variables for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // Get setIsAuthenticated from AuthContext
  const { setIsAuthenticated } = useContext(AuthContext)

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    // Process form submission
    try {
      // Send login request to server
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { email, password },
        { withCredentials: true }
      )
      // Set authentication status
      setIsAuthenticated(true)
      // Navigate to client info page on successful login
      if (response.status === 200) {
        navigate("/client-info")
      }
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    // Create login form
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Connexion</h1>
      <p className="createAccount">
        pas encore inscrit? <NavLink to="/signup">Créer un compte</NavLink>
      </p>
      <div className="login-field">
        {/* Email input field */}
        <label htmlFor="email" className="login-label">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="login-field">
        {/* Password input field */}
        <label htmlFor="password" className="login-label">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="logOption">
        <div>
          {/* Remember me checkbox */}
          <input type="checkbox" />
          <label htmlFor="rememberMe">Se souvenir de moi</label>
        </div>
        <a href="#">mot de passe oublié?</a>
      </div>
      {/* Submit button */}
      <Button name="Se connecter" className="login-button" type="submit" />
    </form>
  )
}

export default LoginForm

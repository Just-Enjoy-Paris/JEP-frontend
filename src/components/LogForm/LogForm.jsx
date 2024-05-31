/* eslint-disable no-console */
import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import "./logForm.css"
import axios from "axios"
import { AuthContext } from "../../../context/user.context"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { setIsAuthenticated } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    // Traitement de la soumission du formulaire
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { email, password },
        { withCredentials: true }
      )
      setIsAuthenticated(true)
      if (response.status === 200) {
        navigate("/client-info")
      }

      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Connexion</h1>
      <p>
        pas encore inscrit? <NavLink to="/signup">créer un compte</NavLink>
      </p>
      <div className="login-field">
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
          <input type="checkbox" />
          <label htmlFor="rememberMe">Se souvenir de moi</label>
        </div>
        <a href="#">mot de passe oublié?</a>
      </div>
      <button className="login-button" type="submit">
        Se connecter
      </button>
    </form>
  )
}

export default LoginForm

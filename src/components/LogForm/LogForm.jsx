import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./LogForm.css"
import axios from "axios"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    // Traitement de la soumission du formulaire
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { email: email, password: password },
        { withCredentials: true }
      )
      setIsAuthenticated(true)
      setUser(response)
      // eslint-disable-next-line no-console
      console.log(response)
    } catch (error) {
      // eslint-disable-next-line no-console, no-undef
      console.log(response)
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

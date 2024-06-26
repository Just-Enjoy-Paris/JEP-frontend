import axios from "axios"
import { useEffect, createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/fetchuser`,
          {
            withCredentials: true
          }
        )
        setIsAuthenticated(true)
        setUser(res.data.userData)
        setUpdate(true)
        // eslint-disable-next-line no-console
        console.log(res.data.userData)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("Error loading, no User found")
      }
    }
    fetchuser()
  }, [update, isAuthenticated])

  // Function to handle user logout
  const handleLogout = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true
    })
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        setIsAuthenticated,
        isAuthenticated,
        user,
        setUser,
        update,
        setUpdate,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

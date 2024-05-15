import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/refresh`, {
          withCredentials: true
        })
        setUser(res.data)
        setIsAuthenticated(true)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("Error loading user")
      }
    }

    if (update || !isAuthenticated) {
      // Fetch user if update is true or user is not authenticated
      fetchUser()
    }
  }, [update, isAuthenticated]) // Only trigger useEffect when update or isAuthenticated changes

  return (
    <AuthContext.Provider
      value={{
        setIsAuthenticated,
        isAuthenticated,
        user,
        setUser,
        update,
        setUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

import axios from "axios"
import { useEffect, createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState()
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
        setUser(res.data)
        setUpdate(true)
        // eslint-disable-next-line no-console
        console.log(res.data)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("Error loading, no User found")
      }
    }
    fetchuser()
  }, [update, isAuthenticated])

  const updateUser = async (updatedFields) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/updateuser`,
        updatedFields,
        { withCredentials: true }
      );
      setUser(res.data);
    } catch (err) {
      console.log("Error updating user:", err)
    }
  };

  const updateEmail = async (newEmail) => {
    await updateUser({ email: newEmail })
  };

  const updatePassword = async (newPassword) => {
    await updateUser({ password: newPassword })
  };

  const updateAvatar = async (newAvatar) => {
    await updateUser({ avatar: newAvatar })
  };

  return (
    <AuthContext.Provider
      value={{
        setIsAuthenticated,
        isAuthenticated,
        user,
        setUser,
        update,
        setUpdate,
        updateEmail,
        updatePassword,
        updateAvatar
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

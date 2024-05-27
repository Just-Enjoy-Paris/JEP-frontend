import { useContext, useEffect } from "react"
import LoginForm from "../../components/LogForm/LogForm"
import { AuthContext } from "../../../context/user.context"
import { useNavigate } from "react-router-dom"

export default function Log() {
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/client-area")
    }
  }, [isAuthenticated])

  return (
    <>
      <LoginForm />
    </>
  )
}

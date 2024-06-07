/* eslint-disable no-console */
import "./addFav.css"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../../context/user.context"

import { CiHeart } from "react-icons/ci"
import axios from "axios"
import toast from "react-hot-toast"

const AddFav = ({ place }) => {
  const { user, setUser, isAuthenticated } = useContext(AuthContext)

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (user && user.account.favPlaces.includes(place._id)) {
      setIsActive(true)
    }
  }, [user, place._id])

  const handleClick = async e => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAuthenticated) {
      return toast(
        <p className="p-toast">Connectez vous pour ajouter un favori</p>
      )
    }
    if (isActive) {
      await rmFavorites(place._id)
    } else {
      await addFavorites(place._id)
    }
    setIsActive(!isActive)
  }

  const addFavorites = async id => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/addFav`,
        { id },
        { withCredentials: true }
      )
      console.log("Favorite added successfully")
      setUser(prevUser => ({
        ...prevUser,
        account: {
          ...prevUser.account,
          favPlaces: [...prevUser.account.favPlaces, id]
        }
      }))
    } catch (error) {
      console.error("Error adding to favorites:", error)
    }
  }

  const rmFavorites = async id => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/rmFav`,
        { id },
        { withCredentials: true }
      )
      console.log("Favorite removed successfully")
      setUser(prevUser => ({
        ...prevUser,
        account: {
          ...prevUser.account,
          favPlaces: prevUser.account.favPlaces.filter(favId => favId !== id)
        }
      }))
    } catch (error) {
      console.error("Error removing from favorites:", error)
    }
  }

  return (
    <CiHeart
      onClick={handleClick}
      className={`favoriteIcon ${isActive ? "active" : ""}`}
      size={30}
    />
  )
}

export default AddFav

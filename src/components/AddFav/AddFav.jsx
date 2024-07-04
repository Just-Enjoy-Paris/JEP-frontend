/* eslint-disable no-console */
import "./addFav.css"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../../context/user.context"
import axios from "axios"
import toast from "react-hot-toast"
import favheartr from "../../img/FAV/favRed.svg"
import favheartw from "../../img/FAV/favWhite.svg"

const AddFav = ({ place }) => {
  const { user, setUser, isAuthenticated } = useContext(AuthContext)

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Check if the place is already in the user's favorites
    if (user && user.account.favPlaces.includes(place._id)) {
      setIsActive(true)
    }
  }, [user, place._id])

  const handleClick = async e => {
    e.preventDefault()
    e.stopPropagation()
    // If the user is not authenticated, show a toast notification
    if (!isAuthenticated) {
      return toast(
        <p className="p-toast">Connectez vous pour ajouter un favori</p>
      )
    }
    // Toggle the favorite status
    if (isActive) {
      await rmFavorites(place._id)
    } else {
      await addFavorites(place._id)
    }
    setIsActive(!isActive)
  }

  // Function to add a place to the user's favorites
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

  // Function to remove a place from the user's favorites
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
    <div onClick={handleClick} className="favoriteIconWrapper">
      {isActive ? (
        <img
          src={favheartr}
          alt="Active Favorite Icon" 
          className="favoriteIcon active iconAnim" />
      ) : (
        <img 
          src={favheartw} 
          alt="Inactive Favorite Icon" 
          className="favoriteIcon iconAnim" />
      )}
    </div>
  )
}

export default AddFav

/* eslint-disable no-console */
import "./placeCard.css"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../../context/user.context"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import CategoryIcon from "../IconCategory/IconCategory"
import { CiHeart } from "react-icons/ci"
import axios from "axios"

const PlaceCard = ({ place, isLast }) => {
  const { user } = useContext(AuthContext)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  const [isActive, setIsActive] = useState(false)
  const [id, setId] = useState("")

  const variants = {
    hidden: { y: "15vw", opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  useEffect(() => {
    if (id && isActive) {
      const alreadyFavorited = user.account.favPlaces.includes(id)
      if (alreadyFavorited) {
        rmFavorites(id)
      } else {
        addFavorites(id)
      }
    }
  }, [id, isActive, user.account.favPlaces])

  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    setIsActive(!isActive)
    setId(place._id)
  }

  const addFavorites = async id => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/addFav`,
        { id },
        { withCredentials: true }
      )
      console.log("Favorite added successfully")
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
    } catch (error) {
      console.error("Error removing from favorites:", error)
    }
  }

  return (
    <Link
      to={`/place/${place._id}`}
      className={`placesCard ${isLast ? "lastCard" : ""}`}
    >
      <motion.div
        className="cardFlex"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="card">
          <div className="card-content">
            <CategoryIcon
              category={place.properties.category}
              className="cardIcon"
            />
            <div>
              <h1>{place.properties.name}</h1>
              <p>
                {place.properties.address.split(",")[0]} <br />
                {place.properties.address.split(",")[1]}
              </p>
            </div>
          </div>
          <div className="favorite">
            <div className="favoriteButton">
              <div className="favoriteIcon">
                <CiHeart
                  onClick={handleClick}
                  className={`favoriteIcon ${isActive ? "active" : ""}`}
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PlaceCard

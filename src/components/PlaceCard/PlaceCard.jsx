import "./placeCard.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import CategoryIcon from "../IconCategory/IconCategory"
import { CiHeart } from "react-icons/ci"
import axios from "axios"

const PlaceCard = ({ place, isLast }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  const [isActive, setIsActive] = useState(false)
  const [favoriteIds, setFavoriteIds] = useState([])

  const variants = {
    hidden: { y: "15vw", opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    const newIsActive = !isActive
    setIsActive(!isActive)
    if (newIsActive) {
      // Add the place ID to favorites
      setFavoriteIds([...favoriteIds, place._id])
    } else {
      // Remove the place ID from favorites
      setFavoriteIds(favoriteIds.filter(id => id !== place._id))
    }
  }

  const saveFavorites = async favorites => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/addFav`, { favoriteIds: favorites })
      console.log("Favorites saved successfully")
    } catch (error) {
      console.error("Error saving favorites:", error)
    }
  }

  // Save favorites each time the favoriteIds state changes
  useEffect(() => {
    saveFavorites(favoriteIds)
  }, [favoriteIds])

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
            <button className="favoriteButton" onClick={handleClick}>
              <div className="favoriteIcon">
                <CiHeart
                  className={`favoriteIcon ${isActive ? "active" : ""}`}
                  size={30}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PlaceCard

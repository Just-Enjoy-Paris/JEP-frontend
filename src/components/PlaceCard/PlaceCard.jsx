/* eslint-disable no-console */
import "./placeCard.css"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import AddFav from "../AddFav/AddFav"

const PlaceCard = ({ place, isLast }) => {
  // Use the useInView hook to detect when the element is in view
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  // Define animation variants for the card
  const variants = {
    hidden: { x: "15vw", opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    // Link to the place's detail page
    <Link
      to={`/place/${place._id}`}
      className={`placesCard ${isLast ? "lastCard" : ""}`}
    >
      {/* Motion div to animate the card */}
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
            {/* Display the place picture */}
            <img
              src={place.properties.picture}
              alt={`${place.properties.name} photo`}
            />
            <div>
              {/* Display place name and address */}
              <h1>{place.properties.name}</h1>
              <p>{place.properties.address}</p>
            </div>
          </div>
          <div className="fav">
            {/* Add to favorites component */}
            <AddFav place={place} />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PlaceCard

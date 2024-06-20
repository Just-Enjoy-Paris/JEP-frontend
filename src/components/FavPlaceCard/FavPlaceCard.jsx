import "./favPlaceCard.css"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import CategoryIcon from "../IconCategory/IconCategory"
import AddFav from "../AddFav/AddFav"

const FavPlaceCard = ({ place, isLast }) => {
  // Use the useInView hook to detect when the element is in view
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  // Define animation variants for the card
  const variants = {
    hidden: { y: "15vw", opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    // Link to the place's detail page
    <Link
      to={`/place/${place._id}`}
      className={`favPlacesCard ${isLast ? "lastCard" : ""}`}
    >
      {/* Motion div to animate the card */}
      <motion.div
        className="favCardFlex"
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="favCard">
          <div className="favCard-content">
            {/* Display category icon */}
            <CategoryIcon
              category={place.properties.category}
              className="cardIcon"
            />
            <div>
              {/* Display place name and address */}
              <h1>{place.properties.name}</h1>
              <p>
                {place.properties.address.split(",")[0]} <br />
                {place.properties.address.split(",")[1]}
              </p>
            </div>
          </div>
          {/* Add to favorites button */}
          <AddFav place={place} />
        </div>
      </motion.div>
    </Link>
  )
}

export default FavPlaceCard

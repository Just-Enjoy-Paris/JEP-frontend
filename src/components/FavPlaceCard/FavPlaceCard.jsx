import "./favPlaceCard.css"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import CategoryIcon from "../IconCategory/IconCategory"
import AddFav from "../AddFav/AddFav"

const FavPlaceCard = ({ place, isLast }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  const variants = {
    hidden: { y: "15vw", opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <Link
      to={`/place/${place._id}`}
      className={`favPlacesCard ${isLast ? "lastCard" : ""}`}
    >
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
          <AddFav place={place} />
        </div>
      </motion.div>
    </Link>
  )
}

export default FavPlaceCard

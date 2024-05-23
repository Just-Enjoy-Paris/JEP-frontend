import "./placeCard.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CategoryIcon from "../IconCategory/IconCategory";

const PlaceCard = ({ place, isLast }) => {
  const [ref, InView] = useInView({
    treshold: 0.5,
    triggerOnce: true,
  })

  const variants = {
    hidden: { y: "15vw", opacity: 0 },
    visible: { y: 0, opacity: 1 },  
  }; 
  
  return (
    <Link to={`/lieux/${place._id}`} className={`placesCard ${isLast ? "lastCard" : ""}`}>   
      <motion.div className="cardFlex"
        ref={ref}        
        variants={variants}
        initial="hidden"
        animate={InView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        <div className="card">
          <CategoryIcon category={place.category} className="cardIcon" />
          <div>
            <h1>{place.name}</h1>
            <p>
              {place.address.split(",")[0]} <br />
              {place.address.split(",")[1]}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PlaceCard

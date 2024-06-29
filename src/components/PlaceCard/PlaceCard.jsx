/* eslint-disable no-console */
import "./placeCard.css"
import { Link } from "react-router-dom"
import AddFav from "../AddFav/AddFav"

const PlaceCard = ({ place, isLast }) => {

  return (
    // Link to the place's detail page
    <Link
      to={`/place/${place._id}`}
      className={`placesCard ${isLast ? "lastCard" : ""}`}
    >
      {/* Motion div to animate the card */}
      <div>
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
      </div>
    </Link>
  )
}

export default PlaceCard

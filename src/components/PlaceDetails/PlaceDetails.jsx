import "./placeDetails.css"
import { CiHeart } from "react-icons/ci"
import Rating from "../Rating/Rating"

export default function PlacesDetails({ place, placeId }) {
  return (
    <div className="placeContent">
      <img
        className="placePicture"
        src={place.picture}
        alt={`Photo de ${place.name}`}
      />
      <div className="placeLocation">
        <div className="favorite">
          <h1>{place.name}</h1>
          <button className="favoriteButton">
            <div className="favoriteFlex">
              <CiHeart size={30} />
            </div>
          </button>
        </div>
        <p className="placeAddress">{place.address}</p>
        <div className="ratingFlex">
          <Rating placeId={placeId} />
          <div className="placeCategories">
            {place.category.map((category, index) => (
              <div className="category" key={index}>
                {category}
              </div>
            ))}
          </div>
        </div>
        <p className="placeDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non nibh dignissim, fermentum nibh id, finibus magna. Duis id ipsum ac
          augue vestibulum faucibus. Cras nec euismod odio. Cras fermentum felis
          a magna venenatis, eget suscipit orci maximus.
        </p>
      </div>
    </div>
  )
}

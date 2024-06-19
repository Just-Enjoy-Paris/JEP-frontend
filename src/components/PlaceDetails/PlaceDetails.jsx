import "./placeDetails.css"
import AddFav from "../AddFav/AddFav"
import Rating from "../Rating/Rating"
import Opinion from "../Opinion/Opinion"

export default function PlacesDetails({ place }) {
  return (
    <section className="placeContent">
      {/* Display the place picture */}
      <img
        className="placePicture"
        src={place.properties.picture}
        alt={`Photo de ${place.properties.name}`}
      />
      <div className="placeLocation">
        <div className="favorite">
          {/* Display the place name */}
          <h1>{place.properties.name}</h1>
          <div className="favoriteFlex">
            {/* Add to favorites component */}
            <AddFav place={place} />
          </div>
        </div>
        {/* Display the place address */}
        <p className="placeAddress">{place.properties.address}</p>
        <div className="ratingFlex">
          {/* Rating component */}
          <Rating placeId={place._id} rate={place.properties.rate} />
          <div className="placeCategories">
            {/* Display the place categories */}
            {place.properties.category.map((category, index) => (
              <div className="category" key={index}>
                {category}
              </div>
            ))}
          </div>
        </div>
        {/* Display the place description */}
        <p className="placeDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non nibh dignissim, fermentum nibh id, finibus magna. Duis id ipsum ac
          augue vestibulum faucibus. Cras nec euismod odio. Cras fermentum felis
          a magna venenatis, eget suscipit orci maximus.
        </p>
        {/* Opinion component */}
        <Opinion place={place} />
      </div>
    </section>
  )
}

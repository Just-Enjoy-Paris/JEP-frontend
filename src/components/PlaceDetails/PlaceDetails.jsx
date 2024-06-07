import AddFav from "../AddFav/AddFav"
import "./placeDetails.css"

export default function PlacesDetails({ place }) {
  return (
    <section className="placeContent">
      <img
        className="placePicture"
        src={place.properties.picture}
        alt={`Photo de ${place.properties.name}`}
      />
      <div className="placeLocation">
        <div className="favorite">
          <h1>{place.properties.name}</h1>
          <div className="favoriteFlex">
            <AddFav place={place} />
          </div>
        </div>
        <p className="placeAddress">{place.properties.address}</p>
        <div className="placeCategories">
          {place.properties.category.map((category, index) => (
            <div className="category" key={index}>
              {category}
            </div>
          ))}
        </div>
        <p className="placeDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non nibh dignissim, fermentum nibh id, finibus magna. Duis id ipsum ac
          augue vestibulum faucibus. Cras nec euismod odio. Cras fermentum felis
          a magna venenatis, eget suscipit orci maximus.
        </p>
      </div>
    </section>
  )
}

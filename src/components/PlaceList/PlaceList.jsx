import "./placeList.css"
import places from "../../data/places.geo.json"
import PlaceCard from "../PlaceCard/PlaceCard"

export default function PlaceList() {
  return (
    <section className="placeList">
      <h1 className="placeListTitle">Lieux</h1>
      {places.map((place, index) => (
        <PlaceCard
          place={place.properties}



          key={place._id}

          isLast={index === places.length - 1}
        />
      ))}
    </section>
  )
}

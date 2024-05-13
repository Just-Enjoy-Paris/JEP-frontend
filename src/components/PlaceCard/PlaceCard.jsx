import "./PlaceCard.css"
import { Link } from "react-router-dom"

import CategoryIcon from "../IconCategory/IconCategory"

export default function PlaceCard({ place, isLast }) {
  return (
    <Link
      to={`/lieux/${place._id.$oid}`}
      className={`card ${isLast ? "lastCard" : ""}`}
    >
      <CategoryIcon category={place.category} className="cardIcon" />
      <div className="cardFlex">
        <h1>{place.name}</h1>
        <p>
          {place.address.split(",")[0]} <br />
          {place.address.split(",")[1]}
        </p>
      </div>
    </Link>
  )
}

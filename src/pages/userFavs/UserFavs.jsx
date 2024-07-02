import "./userFavs.css"
import { useContext } from "react"
import { AuthContext } from "../../../context/user.context"
import { DataContext } from "../../../context/data.context"
import FavPlaceCard from "../../components/FavPlaceCard/FavPlaceCard"

const UserFavs = () => {
  const { user } = useContext(AuthContext)
  const { places } = useContext(DataContext)
  const favPlaces = places.filter(place =>
    user.account.favPlaces.includes(place._id)
  )
  return (
    <main>
      <section className="userfav-title">
        <h1>Mes lieux favoris</h1>
      </section>
      <section className="favplaces-section">
        <div className="sectionFav-title">
          <h2>Mes lieux</h2>
          {favPlaces.length > 0 ? (
            favPlaces.map((place, index) => (
              <FavPlaceCard
                place={place}
                isLast={index === favPlaces.length - 1}
                key={place._id}
              />
            ))
          ) : (
            <div className="emptyFav">
              <p>Vous n&apos;avez pas encore de favoris</p>
            </div>
          )}
        </div>
      </section>
      <section className="favtourist-section">
        <div className="sectionFav-title">
          <h2>Mes lieux touristiques</h2>
          <div className="emptyFav">
            <p>Vous n&apos;avez pas encore de favoris</p>
          </div>
        </div>
      </section>
      <section className="favgardens-section">
        <div className="sectionFav-title">
          <h2>Mes parcs</h2>
          <div className="emptyFav">
            <p>Vous n&apos;avez pas encore de favoris</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserFavs

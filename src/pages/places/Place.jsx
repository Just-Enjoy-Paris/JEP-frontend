import { useEffect, useContext } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { DataContext } from "../../../context/data.context"
import PlacesDetails from "../../components/PlaceDetails/PlaceDetails"

export default function Places() {
  const { places } = useContext(DataContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const place = places.find(place => place._id === id)

  useEffect(() => {
    if (!place) {
      navigate("/404")
    }
  }, [place, navigate])

  return (
    <main>
      <NavLink to="/places" className="return">
        <MdKeyboardArrowLeft size={35} />
        <h1>Lieux</h1>
      </NavLink>
      <section>
        <PlacesDetails place={place} />
      </section>
    </main>
  )
}

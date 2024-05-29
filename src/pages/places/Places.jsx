import "./places.css"
import PlaceList from "../../components/PlaceList/PlaceList"
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Places() {
  return (
    <main className="placesPage">
      <h1 className="placeListTitle">Lieux</h1>
      <SearchBar />
      <section className="placeList">
        <PlaceList />
      </section>
    </main>
  )
}

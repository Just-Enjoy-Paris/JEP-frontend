import PlaceList from "../../components/PlaceList/PlaceList"
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Places() {
  return (
    <main>
      <section className="placeList">
        <h1 className="placeListTitle">Lieux</h1>
        <SearchBar />
        <PlaceList />
      </section>
    </main>
  )
}

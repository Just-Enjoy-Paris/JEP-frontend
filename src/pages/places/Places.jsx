import "./places.css"
import PlaceList from "../../components/PlaceList/PlaceList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useState } from "react"

export default function Places() {
  const [searchResult, setSearchResult] = useState(null)

  return (
    <main className="placesPage">
      <h1 className="placeListTitle">Lieux</h1>
      <SearchBar setSearchResult={setSearchResult} />
      <section className="placeList">
        <PlaceList searchResult={searchResult} />
      </section>
    </main>
  )
}

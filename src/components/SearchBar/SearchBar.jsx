import { useContext } from "react"
import deburr from "lodash.deburr";
import "./searchBar.css"
import { DataContext } from "../../../context/data.context"
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const { places, search, setSearch, setSearchResult } = useContext(DataContext)

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  const handleSearchClick = (event) => {
    event.preventDefault();
    const deburredSearch = deburr(search).toLowerCase();
    const regex = new RegExp(deburredSearch, "i");
    const filteredPlaces = places.filter((place) => {
      const deburredPlaceName = deburr(place.properties.name).toLowerCase();
      return regex.test(deburredPlaceName);
    });
    setSearchResult(filteredPlaces);
  };  

  return (
    <div className="searchBar">
      <input
        className="input-search"
        type="search"
        placeholder="Rechercher un lieu"
        value={search === null ? "" : search}
        onChange={handleSearchChange}
      />
      <button className="btn-search" onClick={handleSearchClick}>
        <FaSearch size={24} />
      </button>
    </div>
  )
}

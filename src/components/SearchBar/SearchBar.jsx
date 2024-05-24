import { useContext, useRef, useState } from "react"
import deburr from "lodash.deburr"
import "./searchBar.css"
import { DataContext } from "../../../context/data.context"
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const { places, search, setSearch, setSearchResult } = useContext(DataContext)
  const [suggestions, setSuggestions] = useState([])

  const inputRef = useRef(null)

  const findPlaces = ({ type }) => {
    const deburredSearch = deburr(search).toLowerCase()
    const regex = new RegExp(deburredSearch, "i")
    const filteredPlaces = places.filter(place => {
      const deburredPlaceName = deburr(place.properties.name).toLowerCase()
      return regex.test(deburredPlaceName)
    })
    if (type === "search") {
      setSearchResult(filteredPlaces)
    } else if (type === "suggestion") {
      setSuggestions(filteredPlaces)
    }
  }

  const handleSearchChange = event => {
    setSearch(event.target.value)
    findPlaces({ type: "suggestion" })
    if (event.target.value === "") {
      setSearchResult(null)
      setSuggestions([])
      inputRef.current.blur()
    }
  }

  const handleSearchClick = event => {
    event.preventDefault()
    setSuggestions([])
    findPlaces({ type: "search" })
  }
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      findPlaces({ type: "search" })
      setSuggestions([])
      inputRef.current.blur()
    }
  }

  return (
    <div className="searchBar">
      <input
        ref={inputRef}
        className="input-search"
        type="search"
        placeholder="Rechercher un lieu"
        value={search === null ? "" : search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-search" onClick={handleSearchClick}>
        <FaSearch size={24} />
      </button>
      {suggestions.length > 0 && (
        <ul className="autocomplete-results">
          {suggestions.map(place => (
            <li
              key={place._id}
              onClick={() => {
                setSearch(place.properties.name)
                findPlaces({ type: "suggestion" })
                setSuggestions([])
              }}
            >
              {place.properties.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

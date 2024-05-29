import "./searchBar.css"
import { useContext, useRef, useState } from "react"
import deburr from "lodash.deburr"
import { DataContext } from "../../../context/data.context"
import { FaSearch } from "react-icons/fa"
import FilterDropdown from "../FilterDropdown/FilterDropdown"

export default function SearchBar() {
  const { places, search, setSearch, setSearchResult } = useContext(DataContext)
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)

  const findPlaces = ({ type }) => {
    const deburredSearch = deburr(search).toLowerCase()
    const regex = new RegExp(deburredSearch, "i")
    const filteredPlaces = places.filter(place => {
      const deburredPlaceName = deburr(place.properties.name).toLowerCase()
      console.log(deburredPlaceName)
      return regex.test(deburredPlaceName)
    })

    if (type === "search") {
      setSearchResult(filteredPlaces)
      setSuggestions([])
    } else if (type === "suggestion") {
      setSuggestions(filteredPlaces)
    }
  }

  const handleSearchChange = event => {
    const newSearchValue = event.target.value
    setSearch(newSearchValue)
    if (newSearchValue === "") {
      setSearchResult(null)
      setSuggestions([])
    } else {
      findPlaces({ type: "suggestion" })
    }
  }

  const handleSearchClick = event => {
    event.preventDefault()
    findPlaces({ type: "search" })
    setSuggestions([])
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
      <FilterDropdown />
      <input
        ref={inputRef}
        className="input-search"
        type="search"
        placeholder="Rechercher un lieu"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-search" onClick={handleSearchClick}>
        <FaSearch size={24} />
      </button>
      {suggestions.length > 0 && (
        <ul className="autocomplete-results">
          {suggestions.map(suggestion => (
            <li
              key={suggestion._id}
              onClick={() => {
                setSearch(suggestion.properties.name)
                findPlaces({ type: "search" })
              }}
            >
              {suggestion.properties.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

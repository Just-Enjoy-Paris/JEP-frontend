import "./searchBar.css"
import { useContext, useRef, useState } from "react"
import deburr from "lodash.deburr"
import { DataContext } from "../../../context/data.context"
import { FaSearch } from "react-icons/fa"
import FilterDropdown from "../FilterDropdown/FilterDropdown"

export default function SearchBar({
  setSearchResult,
  setSelectedCategories,
  selectedCategories
}) {
  const { places } = useContext(DataContext)
  const [suggestions, setSuggestions] = useState([])
  const [search, setSearch] = useState("")
  const inputRef = useRef(null)

  const findPlaces = () => {
    const deburredSearch = deburr(search).toLowerCase()
    const regex = new RegExp(deburredSearch, "i")

    const filteredPlaces = places.filter(place => {
      const deburredPlaceName = deburr(place.properties.name).toLowerCase()
      return regex.test(deburredPlaceName)
    })
    setSearchResult(filteredPlaces)
    setSuggestions([])
  }

  const handleSearchChange = event => {
    const inputValue = event.target.value
    setSearch(inputValue)
    if (inputValue) {
      const deburredInput = deburr(inputValue).toLowerCase()
      const regex = new RegExp(deburredInput, "i")
      const filteredSuggestions = places
        .filter(place => {
          const deburredPlaceName = deburr(place.properties.name).toLowerCase()
          return regex.test(deburredPlaceName)
        })
        .slice(0, 10)
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
      setSearchResult(places)
    }
  }

  const handleSearchClick = event => {
    event.preventDefault()
    findPlaces()
    setSuggestions([])
  }

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      findPlaces()
      setSuggestions([])
      inputRef.current.blur()
    }
  }

  const handleSuggestionClick = suggestion => {
    setSearch(suggestion.properties.name)
    setSuggestions([])
  }

  return (
    <div className="searchBar">
      <FilterDropdown
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
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
                handleSuggestionClick(suggestion)
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

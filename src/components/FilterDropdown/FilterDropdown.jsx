import "./filterDropdown.css"
import { VscSettings } from "react-icons/vsc"
import Filter from "../Filter/Filter"
import { useState } from "react"

const FilterDropdown = () => {
  // État pour suivre si le menu est ouvert ou fermé
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="filter-dropdown">
      {/* Bouton de bascule du menu */}
      <button
        className="filter-dropdown-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="filterMenu">
          <VscSettings className="openFilter" size={30} />
        </div>
      </button>

      {/* Affichage conditionnel des filtres */}
      {isMenuOpen && (
        <div className={`filterLinks ${isMenuOpen ? "open" : "closed"}`}>
          <Filter />
        </div>
      )}
    </div>
  )
}

export default FilterDropdown

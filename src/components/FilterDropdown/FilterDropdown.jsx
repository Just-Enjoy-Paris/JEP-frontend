import "./filterDropdown.css"
import { useContext, useState } from "react"
import { VscSettings } from "react-icons/vsc"
import Filter from "../Filter/Filter"
import { DataContext } from "../../../context/data.context"

const FilterDropdown = () => {
  const { setSelectedCategories } = useContext(DataContext)
  // État pour suivre si le menu est ouvert ou fermé
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCategoryChange = category => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(cat => cat !== category)
      } else {
        return [...prevCategories, category]
      }
    })
  }

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
          <Filter onCategoryChange={handleCategoryChange} />
        </div>
      )}
    </div>
  )
}

export default FilterDropdown

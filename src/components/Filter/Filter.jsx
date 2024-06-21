import { useContext } from "react"
import "./filter.css"
import { DataContext } from "../../../context/data.context"

export default function Filter() {
  // Get categories, selectedCategories, and setSelectedCategories from DataContext
  const { categories, selectedCategories, setSelectedCategories } =
    useContext(DataContext)

  // Handle the change of category selection
  const handleCategoryChange = category => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        // If the category is already selected, remove it from the selected categories
        return prevCategories.filter(cat => cat !== category)
      } else {
        // If the category is not selected, add it to the selected categories
        return [...prevCategories, category]
      }
    })
  }

  return (
    <div className="filter">
      {categories.map((category, index) => (
        <div className="checkbox-wrapper" key={category}>
          {/* Checkbox input to toggle category selection */}
          <input
            className="toggle"
            id={`cbx-${index}`}
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          {/* Label for the checkbox */}
          <label htmlFor={`cbx-${index}`} className="cb">
            {category}
          </label>
        </div>
      ))}
    </div>
  )
}

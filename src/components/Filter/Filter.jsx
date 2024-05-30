import { useContext } from "react"
import "./filter.css"
import { DataContext } from "../../../context/data.context"

export default function Filter() {
  const { categories, selectedCategories, setSelectedCategories } =
    useContext(DataContext)

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
    <div className="filter">
      {categories.map((category, index) => (
        <div className="checkbox-wrapper" key={category}>
          <input
            className="toggle"
            id={`cbx-${index}`}
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          <label htmlFor={`cbx-${index}`} className="cb">
            {category}
          </label>
        </div>
      ))}
    </div>
  )
}

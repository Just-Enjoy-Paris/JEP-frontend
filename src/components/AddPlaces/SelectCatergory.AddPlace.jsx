import { useContext } from "react"
import { DataContext } from "../../../context/data.context"

const SelectCategoryAddPlace = ({ closeCategoryModal, setCategory }) => {
  const { categories } = useContext(DataContext)

  const handleClick = category => {
    setCategory(category)
    closeCategoryModal()
  }

  return (
    <div className="catModalSelect">
      {categories.map(category => (
        <div
          key={category}
          className="catModalAdd"
          onClick={() => handleClick(category)} // Corrected line
        >
          <p>{category}</p>
        </div>
      ))}
    </div>
  )
}

export default SelectCategoryAddPlace

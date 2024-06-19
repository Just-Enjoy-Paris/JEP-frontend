import "./filterDropdown.css"
import { VscSettings } from "react-icons/vsc"
import Filter from "../Filter/Filter"
import { useState } from "react"
import Modal from "react-modal"
import CloseModal from "../../img/close.svg"

const FilterDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const openModal = () => {
    setIsMenuOpen(true)
    setIsClosing(false)
  }

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 300) 
  }

  return (
    <div className="filter-dropdown">
      <button className="filter-dropdown-toggle" onClick={openModal}>
        <div className="filterMenu">
          <VscSettings className="openFilter" size={30} />
        </div>
      </button>

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeModal}
        contentLabel="Filter Modal"
        className={`modal ${isClosing ? "slide-out" : "slide-in"}`}
        overlayClassName="overlay"
      >
        <button className="closeModal" onClick={closeModal}>
          <img src={CloseModal}/>
        </button>
        <Filter />
      </Modal>
    </div>
  )
}

export default FilterDropdown

/* eslint-disable no-console */
import "./addPlaces.css"
import { useState } from "react"
import GenerateUniqueId from "../../utils/UniqueId"
import toast from "react-hot-toast"
import axios from "axios"
import Modal from "react-modal"
import SelectCategoryAddPlace from "./SelectCatergory.AddPlace"
import Button from "../Button/Button"

const PlaceForm = () => {
  const type = "Point"
  const [coordinates, setCoordinates] = useState("")
  const [name, setName] = useState("")
  const [picture, setPicture] = useState(null)
  const [address, setAddress] = useState("")
  const [category, setCategory] = useState("bar")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [website, setWebsite] = useState("")
  const [description, setDescription] = useState("")
  const id_JEP = GenerateUniqueId()
  const [isOpen, setIsOpen] = useState(false)

  const openCategoryModal = () => {
    setIsOpen(true)
  }

  const closeCategoryModal = () => {
    setIsOpen(false)
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#365286"
    },
    overlay: {
      backgroundColor: "none"
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("geometry[type]", type)
    formData.append("geometry[coordinates]", coordinates.split(",").map(Number))
    formData.append("properties[name]", name)
    formData.append("properties[picture]", picture)
    formData.append("properties[address]", address)
    formData.append("properties[category]", category)
    formData.append("properties[social_network][facebook]", facebook)
    formData.append("properties[social_network][instagram]", instagram)
    formData.append("properties[website]", website)
    formData.append("properties[description]", description)
    formData.append("id_JEP", id_JEP)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-places`,
        formData,
        { withCredentials: true }
      )

      if (response.status === 201) {
        toast.success("Place created successfully")
      } else {
        toast.error("Error creating place")
      }
    } catch (error) {
      toast.error("Error creating place", error)
    }
  }

  return (
    <form className="addPlaceForm" onSubmit={handleSubmit}>
      <div className="coordinatesAddPlace">
        <label>Coordinates:</label>
        <input
          type="text"
          value={coordinates}
          onChange={e => setCoordinates(e.target.value)}
          placeholder="2.374536....., 48.8570339...."
          required
        />
      </div>
      <div className="nameAddPlace">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="pictureAddPlace">
        <label>Picture:</label>
        <input
          type="file"
          onChange={e => setPicture(e.target.files[0])}
          required
        />
      </div>
      <div className="addressAddPlace">
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="categoryAddPlace">
        <label>Category: {category}</label>
        <button type="button" onClick={openCategoryModal}>
          <div className="filterMenu">
            <p>Choose category</p>
          </div>
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeCategoryModal}
          contentLabel="SelectCategoryAddPlace"
          style={customStyles}
        >
          <button className="closeModal" onClick={closeCategoryModal}>
            Close
          </button>
          <SelectCategoryAddPlace
            closeCategoryModal={closeCategoryModal}
            setCategory={setCategory}
          />
        </Modal>
      </div>
      <div className="facebookAddPlace">
        <label>Facebook URL:</label>
        <input
          type="text"
          value={facebook}
          onChange={e => setFacebook(e.target.value)}
          placeholder="Facebook URL"
        />
      </div>
      <div className="instagramAddPlace">
        <label>Instagram URL:</label>
        <input
          type="text"
          value={instagram}
          onChange={e => setInstagram(e.target.value)}
          placeholder="Instagram URL"
        />
      </div>
      <div className="websiteAddPlace">
        <label>Website:</label>
        <input
          type="text"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </div>
      <div className="descriptionAddPlace">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <Button name="Create Place" type="submit" />
    </form>
  )
}

export default PlaceForm

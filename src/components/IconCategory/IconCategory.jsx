import { LuCroissant } from "react-icons/lu"
import { IoRestaurantOutline } from "react-icons/io5"
import { GiDelicatePerfume } from "react-icons/gi"
import { MdOutlineHotel } from "react-icons/md"
import { IoDiamond } from "react-icons/io5"
import { GiPorcelainVase } from "react-icons/gi"
import { IoBeer } from "react-icons/io5"
import { FaCross } from "react-icons/fa"
import { FaCoffee } from "react-icons/fa"
import { TfiGallery } from "react-icons/tfi"
import { FaPrint } from "react-icons/fa"
import { GiTombstone } from "react-icons/gi"
import { IoBookSharp } from "react-icons/io5"
import { BiBaguette } from "react-icons/bi"
import { MdLocalGroceryStore } from "react-icons/md"
import { GiClothes } from "react-icons/gi"
import { CiSettings } from "react-icons/ci";

const categoryIcons = {
  Pâtisserie: LuCroissant,
  Restaurant: IoRestaurantOutline,
  Bijouterie: IoDiamond,
  Bar: IoBeer,
  Pub: IoBeer,
  Eglise: FaCross,
  Cimetière: GiTombstone,
  "Galerie d'arts": TfiGallery,
  Hotel: MdOutlineHotel,
  "Service d'impression 3D": FaPrint,
  Parfumerie: GiDelicatePerfume,
  Librairie: IoBookSharp,
  Boulangerie: BiBaguette,
  Café: FaCoffee,
  Porcelaine: GiPorcelainVase,
  Primeur: MdLocalGroceryStore,
  Vetements: GiClothes
}

function CategoryIcon({ category }) {
  // Vérifiez si la catégorie est une chaîne de caractères ou un tableau
  const categoryToUse = Array.isArray(category) ? category[0] : category

  // Vérifiez si la catégorie existe dans l'objet categoryIcons
  const IconComponent = categoryIcons[categoryToUse]

  if (IconComponent) {
    // Si la catégorie a une icône, affichez l'icône
    return <IconComponent size="2em" />
  } else {
    // Sinon, affichez un message d'erreur ou un espace réservé
    return <CiSettings size="2em"/>
  }
}

export default CategoryIcon

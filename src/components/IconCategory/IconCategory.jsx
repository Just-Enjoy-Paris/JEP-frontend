import { GiCakeSlice } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi"
import { MdHotel } from "react-icons/md";
import { IoDiamond } from "react-icons/io5"
import { GiPorcelainVase } from "react-icons/gi"
import { IoBeer } from "react-icons/io5"
import { FaCross } from "react-icons/fa"
import { FaCoffee } from "react-icons/fa"
import { TfiGallery } from "react-icons/tfi"
import { FaPrint } from "react-icons/fa"
import { GiTombstone } from "react-icons/gi"
import { IoBookSharp } from "react-icons/io5"
import { BiSolidBaguette } from "react-icons/bi";
import { MdLocalGroceryStore } from "react-icons/md"
import { GiClothes } from "react-icons/gi"
import { CiSettings } from "react-icons/ci";
import { TbFishChristianity } from "react-icons/tb";
import { GiTeapot } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { TbMilkshake } from "react-icons/tb";
import { FiScissors } from "react-icons/fi";
import { FaIceCream } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { FaCannabis } from "react-icons/fa";
import { BsFillHouseHeartFill } from "react-icons/bs";

const categoryIcons = {
  Pâtisserie: GiCakeSlice,
  Restaurant: IoRestaurant,
  Bijouterie: IoDiamond,
  Bar: IoBeer,
  Pub: IoBeer,
  Eglise: FaCross,
  Cimetière: GiTombstone,
  "Galerie d'art": TfiGallery,
  Hotel: MdHotel,
  "Service d'impression 3D": FaPrint,
  Parfumerie: GiDelicatePerfume,
  Librairie: IoBookSharp,
  Boulangerie: BiSolidBaguette,
  Café: FaCoffee,
  "Boutique de Porcelaine": GiPorcelainVase,
  Primeur: MdLocalGroceryStore,
  "Boutique de vêtements": GiClothes,
  "Boutique d'objets religieux": TbFishChristianity, 
  "Salon de the": GiTeapot,
  "Fast food": IoFastFood,
  "Bubble tea": TbMilkshake,
  "Salon de coiffure": FiScissors,
  "Marchand de glaces": FaIceCream,
  "Vente et réparation de cycles": FaBicycle,
  "Boutique de CBD": FaCannabis,
  "Association": BsFillHouseHeartFill
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

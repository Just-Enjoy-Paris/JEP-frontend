import { NavLink } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./customerArea.css"

import UserBoard from "../../components/UserBoard/UserBoard"

export default function CustomerArea() {
    return (
      <div className="customerArea">
        <NavLink to="/client-info" className="returnInfo">
            <MdKeyboardArrowLeft size={35}/>
        </NavLink>
        <UserBoard />
      </div>
    )
  }
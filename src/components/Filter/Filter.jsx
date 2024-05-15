import "./Filter.css"
import { VscSettings } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

export default function Filter() {
    return(
        <section className="filterBar">
            <div className="filterMenu">
                <VscSettings  size={24} />
            </div>
            <div className="searchBar">
                <FaSearch className="searchIcon" size={16}/>
            </div>
        </section>
    )
}
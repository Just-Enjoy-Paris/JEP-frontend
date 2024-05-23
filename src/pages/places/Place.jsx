import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import placeData from "../../data/JEP-Data.places.json";
import PlacesDetails from "../../components/PlaceDetails/PlaceDetails";

export default function Places() {
  const navigate = useNavigate();
  const { id } = useParams();
  const place = placeData.find((place) => place._id.$oid === id);

  useEffect(() => {
    if (!place) {
      navigate("/404");
    }
  }, [place, navigate]);

  if (!place) {
    return null;
  }

  return (
    <div className="places">
        <NavLink to="/places" className="return">
            <MdKeyboardArrowLeft size={35}/>
            <h1>Lieux</h1>
        </NavLink>
            
      <div className="placesWidth" key={place._id.$oid}>
        <PlacesDetails place={place.properties} />
      </div>
    </div>
  );
}

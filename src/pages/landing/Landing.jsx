//import { useState, useEffect } from "react"
//import AdPopup from "../../components/AdPopup/AdPopup"
import Map from "../../components/Map/Map"

export default function Landing() {
{/* const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const lastPopupTime = localStorage.getItem("lastPopupTime");
    if (!lastPopupTime) {
      // Si aucun horodatage n'est enregistré, affichez le pop-up
      setShowPopup(true);
    } else {
      const hourInMilliseconds = 60 * 60 * 1000;
      const currentTime = new Date().getTime();
      if (currentTime - parseInt(lastPopupTime) >= hourInMilliseconds) {
        setShowPopup(true);
      }
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("lastPopupTime", new Date().getTime().toString());
  };
*/}
  return (
    <main>
      {/*{showPopup && <AdPopup onClose={handleClose} />}*/}
      <Map />
    </main>
  )
}

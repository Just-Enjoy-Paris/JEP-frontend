import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Map from "../../components/Map/Map"
//import EventPreview from "../../components/EventPreview/EventPreview";
import PlaceList from "../../components/PlaceList/PlaceList"

export default function Landing() {
  return (
    <>
      <Header />
      <Map />
      {/*<EventPreview />*/}
      <PlaceList />
      <Footer />
    </>
  )
}

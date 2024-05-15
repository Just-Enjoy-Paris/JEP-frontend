import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Map from "../../components/Map/Map"
//import EventPreview from "../../components/EventPreview/EventPreview";
//import PlaceList from "../../components/PlaceList/PlaceList"
import Filter from "../../components/Filter/Filter"

export default function Landing() {
  return (
    <>
      <Header />
      <Filter />
      <Map />
      {/*<EventPreview />*/}
      {/*<PlaceList />*/}
      <Footer />
    </>
  )
}

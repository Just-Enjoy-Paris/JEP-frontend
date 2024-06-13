import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext } from "react"

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Landing from "./pages/landing/Landing.jsx"
import Log from "./pages/log/Log.jsx"
import About from "./pages/about/About.jsx"
import Places from "./pages/places/Places.jsx"
import Events from "./pages/events/Events.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Error from "./pages/error/Error.jsx"
import Signup from "./pages/signup/Signup.jsx"
import Place from "./pages/places/Place.jsx"
import CustomerUpdate from "./pages/customerUpdate/CustomerUpdate.jsx"
import CustomerInfo from "./pages/customerInfo/CustomerInfo.jsx"
import UserFavs from "./pages/userFavs/UserFavs.jsx"
import Loader from "./pages/loader/Loader.jsx"
import { DataContext } from "../context/data.context.jsx"
import { Toaster } from "react-hot-toast"

function App() {
  const { showLoader } = useContext(DataContext)

  return (
    <>
      {showLoader ? (
        // Show loader until initial route is loaded
        <Loader />
      ) : (
        <>
          <Router>
            <Toaster />
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/log" element={<Log />} />
              <Route path="/client-area" element={<CustomerUpdate />} />
              <Route path="/client-info" element={<CustomerInfo />} />
              <Route path="/user-favorites" element={<UserFavs />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/places" element={<Places />} />
              <Route path="/place/:id" element={<Place />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Error />} />
              <Route path="/loader" element={<Loader />} />
            </Routes>
            <Footer />
          </Router>
        </>
      )}
    </>
  )
}
export default App

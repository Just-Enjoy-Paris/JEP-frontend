import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
//import Footer from "./components/Footer/Footer.jsx"
import Landing from "./pages/landing/Landing.jsx"
import Log from "./pages/log/Log.jsx"
import About from "./pages/about/About.jsx"
import Places from "./pages/places/Places.jsx"
import Events from "./pages/events/Events.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Error from "./pages/error/Error.jsx"

import Signup from "./pages/signup/Signup.jsx"

import { AuthProvider } from "../context/user.context.jsx"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/log" element={<Log />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/*<Footer />*/}
      </AuthProvider>
    </Router>
  )
}

export default App

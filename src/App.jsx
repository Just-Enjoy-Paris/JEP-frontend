import "./App.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Landing from "./pages/landing/Landing.jsx"
import Log from "./pages/log/Log.jsx"
import About from "./pages/about/About.jsx"
import Places from "./pages/places/Places.jsx"
import Events from "./pages/events/Events.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Error from "./pages/error/Error.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/log" element={<Log />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Places />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App

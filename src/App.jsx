import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Homepage from "./components/pages/Homepage"
import AboutUs from './components/pages/AboutUs';
import ContactPage from './components/pages/ContactPage';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </>

  )
}

export default App

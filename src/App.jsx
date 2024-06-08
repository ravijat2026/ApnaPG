import React from "react"
import './App.css'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Popular from "./Components/Popular"
import Contact from "./Components/Contact"
import NewsLetter from "./Components/NewsLetter"
import Footer from "./Components/Footer"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Contact/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App

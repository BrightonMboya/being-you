import React from 'react'
import About from './components/About/About'
import HeroSection from './components/Hero-Section/HeroSection'
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <About />
    </React.Fragment>
  )
}

export default App

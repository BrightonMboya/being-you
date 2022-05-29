import React from "react";
import NavBar from './Components/Navbar/NavBar';
import HeroSection from "./Components/Hero-Section/HeroSection";
import About from "./Components/About/About"

function App() {
  return (
    <React.Fragment>
     <NavBar/>
     <HeroSection/>
     <About/>
    </React.Fragment>
  );
}

export default App;

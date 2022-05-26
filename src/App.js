import React from "react";
import About from "./Components/About/About";
import HeroSection from "./Components/Hero-Section/HeroSection";
import NavBar from "./Components/Navbar/NavBar";

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

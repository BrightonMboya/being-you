import React from "react";
import NavBar from './Components/Navbar/NavBar';
import HeroSection from "./Components/Hero-Section/HeroSection";
import About from "./Components/About/About"
import Explore from "./Components/Podcast/Explore";
import Podcast from "./Components/Podcast/Podcast";

function App() {
  return (
    <React.Fragment>
     <NavBar/>
     <HeroSection/>
     <About/>
     <Explore/>
     <Podcast/>
     <Blogs/>
    </React.Fragment>
  );
}

export default App;

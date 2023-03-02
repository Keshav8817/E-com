import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";


function Header(){
    return(
      <>
      <div className="container">
         <Navbar />
        <HeroSection />
      </div>
     
    </> 
    )
}

export default Header
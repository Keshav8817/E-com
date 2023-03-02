import React from "react";
import Brands from "./Components/Brands";
import FeaturedCate from "./Components/FeaturedCate";
import FeaturedPro from "./Components/FeaturedPro";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OfferSection from "./Components/OfferSection";
import "./Home.css";


function Home (){
    return (
    <>
   
    <Header />
    <FeaturedCate />
    <FeaturedPro />
    <OfferSection/>
    <Brands />
    <Footer />
  
    </>
    )
    
}
export default Home
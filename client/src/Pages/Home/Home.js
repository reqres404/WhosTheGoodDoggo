import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import OurServices from "../../components/OurServices/OurServices";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <OurServices />
      <Gallery />
    </div>
  );
};

export default Home;

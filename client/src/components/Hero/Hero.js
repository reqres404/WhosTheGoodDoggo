import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero.css";
import dog1 from "../../assets/dog1.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={9000}
        showStatus={false}
      >
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2>Hero Title Example</h2>
            <p>Hero Title Description</p>
            <a href="/read-more">Read More</a>
          </div>
          <div className="carousel-image">
            <img src={dog1} alt="Image 1" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2>Hero Title Example</h2>
            <p>Hero Title Description</p>
            <a href="/read-more">Read More</a>
          </div>
          <div className="carousel-image">
            <img src={dog1} alt="Image 2" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2>Hero Title Example</h2>
            <p>Hero Title Description</p>
            <a href="/read-more">Read More</a>
          </div>
          <div className="carousel-image">
            <img src={dog1} alt="Image 3" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;

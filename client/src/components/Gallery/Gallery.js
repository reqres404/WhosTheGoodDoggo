import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <p>Take a look at these beautiful dogs</p>
      <div className="row">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </div>
      <div className="row">
        <img src="image4.jpg" alt="Image 4" />
        <img src="image5.jpg" alt="Image 5" />
        <img src="image6.jpg" alt="Image 6" />
      </div>
    </div>
  );
};

export default Gallery;

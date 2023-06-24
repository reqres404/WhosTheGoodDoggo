import { React, useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
    const [dogs, setDogs] = useState([]);
    const [loading,setLoading] = useState(true)
    let imageArray


    useEffect(() => {
      fetch("/api/dogs")
        .then((response) => response.json())
        .then((data) => {
          setDogs(data);
          setLoading(false);
        });
    }, []);
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <p>Take a look at these good bois!</p>
            {!loading&&
            <div>
            <div className="row">
                <img className="galleryImage" src={dogs[0].image} alt="dog1" />
                <img className="galleryImage" src={dogs[1].image} alt="dog2" />
                <img className="galleryImage" src={dogs[2].image} alt="dog3" />
            </div>
            <div className="row">
                <img className="galleryImage" src={dogs[3].image} alt="dog4" />
                <img className="galleryImage" src={dogs[4].image}alt="dog5" />
                <img className="galleryImage" src={dogs[5].image} alt="dog6" />
            </div>
            </div>}
   
        </div>
    );
};

export default Gallery;

import { useEffect, useState } from "react";
import "./Hero.css"

const Hero = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
      fetch('/api/dogs')
        .then(response => response.json())
        .then(data => setDogs(data));
    }, []);

    const getDog = () => {
        console.log(dogs.map(dog => dog.name))
    }

    return (
        <div>
            <h1>Data:</h1>
            {dogs.map(dog => (
                <h1 key={dog._id}>{dog.name}</h1>
            ))}
            <button onClick={getDog}>get Dogs</button>
        </div>
    );
};

export default Hero;
import { useEffect, useState } from "react";
import "./TestPage.css"

const TestPage = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
      fetch('/api/dogs')
        .then(response => response.json())
        .then(data => setDogs(data));
    }, []);

    const getDog = () => {
        console.log(dogs.map(dog => dog.name))
    }
    const imageStyle = {
        width:'30vw',
        height: '40vh',
        borderRadius:'15%',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="testSection" >
            <h1>Data:</h1>
            {dogs.map(dog => (
                <div key={dog._id}>
                <h3>{dog.name}</h3>
                <p> Age : {dog.age}</p>
                <p> Address : {dog.address}</p>
                
                <img src={dog.image} alt="dog" style={imageStyle}></img>
                </div>
            ))}
            <button onClick={getDog}>get Dogs</button>
        </div>
    );
};

export default TestPage;
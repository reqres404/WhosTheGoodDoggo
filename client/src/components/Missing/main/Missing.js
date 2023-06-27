import { useEffect, useState } from "react";

const Missing = () => {
    const [dogs, setDogs] = useState([]);
    

    const imageStyle = {
        width:'30vw',
        height: '40vh',
        borderRadius:'15%',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
    }
    useEffect(() => {
        fetch("http://localhost:4000/api/dogs")
            .then((response) => response.json())
            .then((data) => setDogs(data))
            .then(console.log(dogs))
            
    }, []);
    return (
        <div>
            <h1>Missing Dogs</h1>
            {dogs.map((dog) => (
                <div key={dog._id}>
                    <h3>{dog.name}</h3>
                    <p> Age : {dog.age}</p>
                    <p> Address : {dog.address}</p>
                    <img src={dog.image} alt="dog" style={imageStyle}></img>

                </div>
            ))}
        </div>
    );
};
export default Missing;

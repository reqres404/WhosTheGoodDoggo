import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Card.css"
// Get all dogs
// filter through ID
// show that dog
const Card = () => {
    const [cardData, setCardData] = useState([]);
    const { id } = useParams();
    const imageStyle = {
        width: "30vw",
        height: "40vh",
        borderRadius: "15%",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    };
    useEffect(() => {
        fetch("/api/dogs")
            .then((response) => response.json())
            .then((data) => data.filter((dog)=>dog._id===id))
            .then((dogData)=>setCardData(dogData))
    }, [id]);

    return (

        <div className="card">
            {cardData.map((dog) => (
                <div key={dog._id}>
                    <img
                        style={imageStyle}
                        src={dog.image}
                        alt="Dog_Image"
                    ></img>
                    <h2>Name : {dog.name}</h2>
                    <h2>Age : {dog.age}</h2>
                    <h2>Vaccinated : {dog.vaccinated}</h2>
                    <h2>Gender : {dog.gender}</h2>
                    <h2>Breed : {dog.breed}</h2>
                    <h2>Neutered : {dog.neutered}</h2>
                    <h2>Tickel Spot : {dog.tickelSpot}</h2>
                    <h2>Address : {dog.address}</h2>
                    
                    
                </div>
            ))}

            
        </div>
    );
};
export default Card;

// {dogs.map(dog => (
//     <div key={dog._id}>
//     <h3>{dog.name}</h3>
//     <p> Age : {dog.age}</p>
//     <p> Address : {dog.address}</p>

//     <img src={dog.image} alt="dog" style={imageStyle}></img>
//     <button onClick={()=>handleDelete(dog._id)}> delete </button>
//     </div>

// ))}

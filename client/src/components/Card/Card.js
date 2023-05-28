import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <div>
            {cardData.map((dog) => (
                <div key={dog._id}>
                    <h2>{dog.name}</h2>
                    <h2>{dog.age}</h2>
                    <h2>{dog.address}</h2>
                    <img
                        style={imageStyle}
                        src={dog.image}
                        alt="Dog_Image"
                    ></img>
                    <h2>{dog.name}</h2>
                </div>
            ))}

            <h1>This is card component</h1>
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

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";
// Get all dogs
// filter through ID
// show that dog
const Card = () => {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/dogs")
      .then((response) => response.json())
      .then((data) => data.find((dog) => dog._id === id))
      .then((dogData) => setCardData(dogData))
      .catch((error) => {
        console.error("Error fetching dog data:", error);
      });
  }, [id]);

  // Render loading state if cardData is null
  if (cardData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">
      <div className="dog-image">
        <img className = "cardImage" src={cardData.image} alt="Dog" />
      </div>
      <div className="card-content">
        <div className="field">
          <label htmlFor="name">Name:</label>
          <div className="value-box">{cardData.name}</div>
        </div>

        <div className="field">
          <label htmlFor="age">Age:</label>
          <div className="value-box">{cardData.age}</div>
        </div>

        <div className="field">
          <label htmlFor="vaccinated">Vaccinated:</label>
          <div className="value-box">{cardData.vaccinated ? "Yes" : "No"}</div>
        </div>

        <div className="field">
          <label htmlFor="gender">Gender:</label>
          <div className="value-box">{cardData.gender}</div>
        </div>

        <div className="field">
          <label htmlFor="breed">Breed:</label>
          <div className="value-box">{cardData.breed}</div>
        </div>

        <div className="field">
          <label htmlFor="neutered">Neutered:</label>
          <div className="value-box">{cardData.neutered ? "Yes" : "No"}</div>
        </div>

        <div className="field">
          <label htmlFor="tickelSpot">Tickel Spot:</label>
          <div className="value-box">{cardData.tickelSpot}</div>
        </div>

        <div className="field">
          <label htmlFor="address">Address:</label>
          <div className="value-box">{cardData.address}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//     return (
//       <div className="card">
//         {cardData === null ? (
//           <p>Loading...</p>
//         ) : (
//           <div key={cardData._id}>
//             <img style={imageStyle} src={cardData.image} alt="Dog_Image" />
//             <h2>Name: {cardData.name}</h2>
//             <h2>Age: {cardData.age}</h2>
//             <h2>Vaccinated: {cardData.vaccinated}</h2>
//             <h2>Gender: {cardData.gender}</h2>
//             <h2>Breed: {cardData.breed}</h2>
//             <h2>Neutered: {cardData.neutered}</h2>
//             <h2>Tickel Spot: {cardData.tickelSpot}</h2>
//             <h2>Address: {cardData.address}</h2>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default Card;

// {dogs.map(dog => (
//     <div key={dog._id}>
//     <h3>{dog.name}</h3>
//     <p> Age : {dog.age}</p>
//     <p> Address : {dog.address}</p>

//     <img src={dog.image} alt="dog" style={imageStyle}></img>
//     <button onClick={()=>handleDelete(dog._id)}> delete </button>
//     </div>

// ))}

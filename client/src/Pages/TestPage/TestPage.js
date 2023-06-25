import { useEffect, useState } from "react";
import "./TestPage.css"

const TestPage = () => {
    const [dogs, setDogs] = useState([]);


    const getDog = () => {
        console.log(dogs.map(dog => dog.name))
    }
    const imageStyle = {
        width:'30vw',
        height: '40vh',
        borderRadius:'15%',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)'
    }
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:4000/api/dogs/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            // Remove the deleted dog from the current dogs state
            setDogs((prevDogs) => prevDogs.filter((dog) => dog._id !== id));
          })
          .catch((error) => {
            console.error("Error deleting dog:", error);
          });
      };
    useEffect(() => {
        fetch('http://localhost:4000/api/dogs')
          .then(response => response.json())
          .then(data => setDogs(data));
      }, []);
    return (
        <div className="testSection" >
            <h1>Data:</h1>
            {dogs.map(dog => (
                <div key={dog._id}>
                <h3>{dog.name}</h3>
                <p> Age : {dog.age}</p>
                <p> Address : {dog.address}</p>
                
                <img src={dog.image} alt="dog" style={imageStyle}></img>
                <button onClick={()=>handleDelete(dog._id)}> delete </button>
                </div>

            ))}
            <button onClick={getDog}>get Dogs</button>
        </div>
    );
};

export default TestPage;
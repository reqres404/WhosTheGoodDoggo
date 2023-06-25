import GenerateQR from "../QRCode/GenerateQR";
import pawWhite from "../../assets/paw.png";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [neutered, setNeutered] = useState("");
  const [breed, setBreed] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [tickelSpot, setTickelSpot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name !== "" &&
      age !== "" &&
      weight !== "" &&
      address !== "" &&
      neutered !== "" &&
      gender !== "" &&
      breed !== "" &&
      tickelSpot !== "" &&
      image != null
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);
      formData.append("weight", weight);
      formData.append("gender", gender);
      formData.append("neutered", neutered);
      formData.append("breed", breed);
      formData.append("vaccinated", vaccinated);
      formData.append("tickelSpot", tickelSpot);
      formData.append("address", address);
      formData.append("image", image);

      fetch("http://localhost:4000/api/dogs", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setValue(`http://localhost:3000/card/${data._id}`);
          setName("");
          setAge("");
          setWeight("");
          setGender("");
          setNeutered("");
          setTickelSpot("");
          setBreed("");
          setAddress("");
          setImage(null);
          setSubmitted(true);
          const fileInput = document.getElementById("file-input");
          fileInput.value = null;
        })
        .catch((e) => {
          console.error("Error: ", e);
        });
    }
  };
  return (
    <div className="add-dog">
      <div className="add-dog-header">
        <img style={{color:"white"}}src={pawWhite} alt="Dog Icon" className="dog-icon" />
        <h1 style={{color:"white"}}>ADD A DOG</h1>
      </div>
      {!submitted && (
        <form className="add-dog-form" onSubmit={handleSubmit}>
          {/* <label>Name</label> */}
          <input
            type="String"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* <label>Age</label> */}
          <input
            type="Number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              const newAge = parseInt(e.target.value);
              if (newAge >= 0) {
                setAge(newAge.toString());
              }
            }}
          />
          {/* <label>Weight</label> */}
          <input
            type="Number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => {
              const newWeight = parseInt(e.target.value);
              if (newWeight >= 0) {
                setWeight(newWeight.toString());
              }
            }}
          />
          {/* <label>Gender</label> */}
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/* <label>Neutered</label> */}
          <select
            value={neutered}
            onChange={(e) => {
              setNeutered(e.target.value);
            }}
          >
            <option value="">Neutered</option>
            <option value="Yes">Yes, Neutered</option>
            <option value="No">No, Not Neutered</option>
          </select>

          {/* <label>Breed</label> */}

          <select
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option value="">Breed</option>
            <option value="Indian Pariah Dog">Indian Pariah Dog</option>
            <option value="Labrador Retriever">Labrador Retriever</option>
            <option value="German Shepherd">German Shepherd</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Beagle">Beagle</option>
            <option value="Pug">Pug</option>
            <option value="Rottweiler">Rottweiler</option>
            <option value="Indian Mastiff (Bully Kutta)">
              Indian Mastiff (Bully Kutta)
            </option>
            <option value="Rajapalayam">Rajapalayam</option>
            <option value="Indian Spitz">Indian Spitz</option>
            <option value="Shih Tzu">Shih Tzu</option>
            <option value="Other">Other</option>
          </select>

          {/* <label>Vaccinated</label> */}
          <select
            value={vaccinated}
            onChange={(e) => {
              setVaccinated(e.target.value);
            }}
          >
            <option value="">Vaccinated</option>
            <option value="Yes">Yes, Vaccinated</option>
            <option value="No">No, Not Vaccinated</option>
          </select>

          {/* <label>Tickel Spot</label> */}
          <input
            type="String"
            placeholder="Tickel Spot"
            value={tickelSpot}
            onChange={(e) => {
              setTickelSpot(e.target.value);
            }}
          />
          {/* <label>Address</label> */}
          <input
            type="String"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <label>Upload an Image</label>
          <div className="file-input-container">
            <label htmlFor="file-input" className="file-input-label">
              <div className="browse-button">Browse...</div>
            </label>
            <span className="file-input-text">
              {image ? `File selected: ${image.name}` : "No file selected"}
            </span>

            <input
              type="file"
              id="file-input"
              placeholder="Dog Image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {value !== "" && <GenerateQR value={value} />}
    </div>
  );
};
export default Form;

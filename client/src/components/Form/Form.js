import GenerateQR from "../QRCode/GenerateQR";
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
            neutered!==""&&
            gender!==""&&
            breed!==""&&
            tickelSpot!==""&&
            image != null
        ) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("age", age);
            formData.append("weight", weight);
            formData.append("gender", gender);
            formData.append("neutered",neutered);
            formData.append("breed", breed);
            formData.append("vaccinated",vaccinated);
            formData.append("tickelSpot", tickelSpot);
            formData.append("address", address);
            formData.append("image", image);

            fetch("api/dogs", {
                method: "POST",
                body: formData,
            })
                
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setValue(`http://localhost:3000/card/${data._id}`);
                    setName("");
                    setAge("");
                    setWeight("");
                    setGender("")
                    setNeutered("")
                    setTickelSpot("")
                    setBreed("")
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
            {!submitted && (
                <form className="add-dog-form" onSubmit={handleSubmit}>
                    <h1>Add a Dog</h1>
                    <label>Name</label>
                    <input
                        type="String"
                        placeholder="Enter Name of Dog"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label>Age</label>
                    <input
                        type="Number"
                        placeholder="Enter Age of Dog"
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    />
                    <label>Weight</label>
                    <input
                        type="Number"
                        placeholder="Enter Weight of Dog"
                        value={weight}
                        onChange={(e) => {
                            setWeight(e.target.value);
                        }}
                    />
                    <label>Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>Neutered</label>
                    <select
                        value={neutered}
                        onChange={(e) => {
                            setNeutered(e.target.value);
                        }}
                    >
                        <option value="">Is the Doggo Neutered</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <label>Breed</label>

                    <select
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                    >
                        <option value="">Select Breed</option>
                        <option value="Indian Pariah Dog">
                            Indian Pariah Dog
                        </option>
                        <option value="Labrador Retriever">
                            Labrador Retriever
                        </option>
                        <option value="German Shepherd">German Shepherd</option>
                        <option value="Golden Retriever">
                            Golden Retriever
                        </option>
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

                    <label>Vaccinated</label>
                    <select
                        value={vaccinated}
                        onChange={(e) => {
                            setVaccinated(e.target.value);
                        }}
                    >
                        <option value="">Is the dog vaccinated</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <label>Tickel Spot</label>
                    <input
                        type="String"
                        placeholder="Where does the doggo liked to be scratched"
                        value={tickelSpot}
                        onChange={(e) => {
                            setTickelSpot(e.target.value);
                        }}
                    />
                    <label>Address</label>
                    <input
                        type="String"
                        placeholder="Enter Address of Dog"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                    />
                    <label>Upload Image</label>
                    <input
                        type="file"
                        id="file-input"
                        placeholder="Dog Image"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
            {value !== "" && <GenerateQR value={value} />}
        </div>
    );
};
export default Form;

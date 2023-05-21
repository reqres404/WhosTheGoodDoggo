import "./Form.css";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            name !== "" &&
            age !== "" &&
            weight !== "" &&
            address !== "" &&
            image != null
        ) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("age", age);
            formData.append("weight", weight);
            formData.append("address", address);
            formData.append("image", image);

            fetch("api/dogs", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success: ", data);
                    setName("");
                    setAge("");
                    setWeight("");
                    setAddress("");
                    setImage(null);

                    const fileInput = document.getElementById('file-input');
                    fileInput.value = null;
                })
                .catch((e) => {
                    console.error("Error: ", e);
                });
        }
    };
    return (
        <div className="add-dog">
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
        </div>
    );
};
export default Form;

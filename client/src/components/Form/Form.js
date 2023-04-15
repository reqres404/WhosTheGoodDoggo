import "./Form.css";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [age,setAge] = useState("")
    const [weight,setWeight] = useState("")
    const [address,setAddress] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== "" && age !== "" && weight !== "" && address !== ""){
            const dog = {name,age,weight,address}
            fetch('api/dogs',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(dog)
            })
            .then(response=>response.json())
            .then(data =>{
                console.log("Success: ",data)
                setName("");
                setAge("");
                setWeight("");
                setAddress("");
            })
            .catch((e)=>{
                console.error('Error: ',e)
            })
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
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <label>Age</label>
                <input
                    type="Number"
                    placeholder="Enter Age of Dog"
                    value={age}
                    onChange={(e)=>{setAge(e.target.value)}}
                />
                <label>Weight</label>
                <input
                    type="Number"
                    placeholder="Enter Weight of Dog"
                    value={weight}
                    onChange={(e)=>{setWeight(e.target.value)}}
                />
                <label>Address</label>
                <input
                    type="String"
                    placeholder="Enter Address of Dog"
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};
export default Form;

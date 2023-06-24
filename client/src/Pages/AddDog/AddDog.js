import { useState } from "react";
import Form from "../../components/Form/Form";
import "./AddDog.css";

const AddDog = () => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState("");
    const[pass,setPass] = useState("")

    const checkAuth = () => {
        if (user === "admin" && pass==="admin") {
            setAuth(true);
        }
    
    };
    return (
      <div>
        <div className="auth-div">
            {!auth && (
                <div >
                    <form className="auth" onSubmit={checkAuth}>
                        
                        <input
                            className="username"
                            placeholder="Enter Username"
                            type="Text"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}  
                        />
                        
                        <input
                            className="username"
                            placeholder="Enter Password"
                            type="password"
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}  
                        />
                        <button className="submitBtn"type="submit">Submit</button>
                    </form>
                </div>
            )}
            {auth && <Form />}
        </div>
        </div>
    );
};
export default AddDog;

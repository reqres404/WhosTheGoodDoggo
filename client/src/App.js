import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import TestPage from "./Pages/TestPage/TestPage";
import AddDog from "./Pages/AddDog/AddDog";
import ScanDog from "./Pages/ScanDog/ScanDog";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Missing from "./components/Missing/main/Missing";

function App() {
    return (
        <div>
            <section>
            <Navbar/>
            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adddog" element={<AddDog />} />
                <Route path="scandog" element={<ScanDog />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/card/:id" element={<Card/>} />
                <Route path="/missing" element={<Missing/>} />

            </Routes>
        </div>
    );
}

export default App;

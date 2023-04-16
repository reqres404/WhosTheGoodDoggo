import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import TestPage from "./Pages/TestPage/TestPage";
import AddDog from "./Pages/AddDog/AddDog";
import ScanDog from "./Pages/ScanDog/ScanDog";
import Navbar from "./components/Navbar/Navbar";

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
            </Routes>
        </div>
    );
}

export default App;

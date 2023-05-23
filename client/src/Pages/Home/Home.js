import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
        <h1> Home </h1>
      <Hero />

      <div className="button-container">
        <Link to="/AddDog">
          <button>Add dog</button>
        </Link>
        <Link to="/ScanDog">
          <button>Scan dog</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

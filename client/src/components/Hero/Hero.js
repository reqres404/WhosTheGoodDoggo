import "./Hero.css"
import dog1 from "../../assets/dog1.jpg"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="left-sec">
                <h1>Wondering Who's the <span>Good Doggo?</span></h1>
                <h2>Well wonder no more...
                Just <span>Scan</span> and <span>Know!</span>
                </h2>
                <button>Know More</button>
            </div>
            <div className="right-sec">
                <img src={dog1}/>
            </div>
        </div>
    );
};
export default Hero;

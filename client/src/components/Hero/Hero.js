import "./Hero.css"
import dog1 from "../../assets/dog1.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <section className="hero row container">
                <div>
                    <h1>Are you wondering...</h1>
                    <h1>Who's the good doggo</h1>
                    <p>Well wonder no more just scan the tag and get to know doggo around you?</p>
                    <a href="#project">Our Project</a>
                </div>
                <div className="row">
                    <img src={dog1} alt="heroImage"/>
                </div>
            </section>
            
        </div>
    );
};
export default Hero;

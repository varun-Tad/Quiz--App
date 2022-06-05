import { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/hero-image.svg";
import img2 from "../../assets/coding.jpeg";
import img3 from "../../assets/music.jpeg";

import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let navigate = useNavigate();

  const exploreBtnHandler = () => {
    navigate("/Browse");
  };

  return (
    <div className="homePage">
      <Navbar />
      <section className="hero-section">
        <div className="hero-text-container">
          <h1 className="hero-text">Go ahead! Take the quiz!</h1>
          <button onClick={exploreBtnHandler}>Explore</button>
        </div>
        <div className="hero-image">
          <img src={img1} alt="hero" />
        </div>
      </section>
      <main className="main-section">
        <div data-aos="fade-right" data-aos-duration="1500">
          <h1>Some popular Quizes !</h1>
        </div>

        <div className="popular-section">
          <div
            className="popular-one"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="popular-section-heading popular-section-headingOne">
              Coding
            </h2>
            <Link to="/Browse">
              <div className="background-image">
                <img src={img2} alt="programming" />
              </div>
            </Link>
          </div>
          <div
            className="popular-two"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="popular-section-heading popular-section-headingTwo">
              Music
            </h2>
            <Link to="/Browse">
              <div className="background-image">
                <img src={img3} alt="programming" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;

import Navbar from "../Navigation/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/hero-image.svg";
import "./Homepage.css";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // Need to creat a dev branch
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="hero-text-container">
          <h1 className="hero-text">Go ahead! Take the quiz!</h1>
          <button>Browse Quiz</button>
        </div>
        <div className="hero-image">
          <img src={img} alt="hero" />
        </div>
      </section>
      <main className="main-section">
        <div data-aos="fade-right">
          <h1>Some popular Quizes !</h1>
        </div>

        <div>
          <div data-aos="fade-left"></div>
          <div data-aos="fade-up-right"></div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;

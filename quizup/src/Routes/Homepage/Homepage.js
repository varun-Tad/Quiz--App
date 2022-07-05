import { useContext, useEffect, useRef } from "react";
import Navbar from "../Navigation/Navbar";
import { ImBullhorn } from "react-icons/im";
import { AiOutlineToTop } from "react-icons/ai";
import img1 from "../../assets/hero-image.svg";
import img2 from "../../assets/coding.jpeg";
import img3 from "../../assets/music.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";
import { UserContext } from "../../Contexts/user.context";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { currentUser } = useContext(UserContext);

  let navigate = useNavigate();
  const rulesRef = useRef(null);
  const topRef = useRef(null);
  const exploreBtnHandler = () => {
    if (currentUser) {
      navigate("/Browse");
    } else {
      navigate("/Login");
    }
  };

  const rulesHandler = () => {
    rulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const topHandler = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homePage" ref={topRef}>
      <Navbar />
      <section className="hero-section">
        <div className="hero-text-container">
          <h1 className="hero-text">Go ahead! Take the quiz!</h1>
          <div className="hero-btns">
            <button className="btn-text" onClick={exploreBtnHandler}>
              Explore
            </button>
            <button className="btn-text" onClick={rulesHandler}>
              Rules
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={img1} alt="hero" />
        </div>
      </section>
      <main className="main-section">
        <div data-aos="fade-right" data-aos-duration="1500">
          <h1 className="main-section-h1">Some popular Quizes !</h1>
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

      <section>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="rules-heading"
        >
          <h1 className="rules-heading">Rules</h1>
        </div>
        <div className="rules-section">
          <div className="rule">
            <ImBullhorn />
            <p>Total Number of questions: 5</p>
          </div>
          <div className="rule">
            <ImBullhorn />
            <p>
              Correct answer will give you{" "}
              <span style={{ color: "green" }}>+2 points</span>
            </p>
          </div>
          <div className="rule">
            <ImBullhorn />
            <p>
              Incorrect answer and you lose{" "}
              <span style={{ color: "red" }}>-1 points</span>
            </p>
          </div>
          <div className="rule">
            <ImBullhorn />
            <p>Get all questions right and you earn double the points ! </p>
          </div>
          <div className="playBtn-quiz">
            <button className="rules-section-btn " onClick={exploreBtnHandler}>
              Jump in !
            </button>
          </div>
        </div>
      </section>
      <div ref={rulesRef}></div>
      <div className="top-arrow">
        <AiOutlineToTop onClick={topHandler} />
      </div>
    </div>
  );
};

export default Homepage;

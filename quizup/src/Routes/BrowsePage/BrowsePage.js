import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../../assets/coding.jpeg";
import img3 from "../../assets/music.jpeg";
import img4 from "../../assets/sports.jpeg";

import "./BrowsePage.css";

const BrowsePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="BrowsePage">
      <Navbar />

      <main className="explore-section">
        <h1 className="explore-heading">Explore</h1>
        <div className="explore-options-section">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="explore-one"
          >
            <h2 className="explore-section-heading explore-section-headingOne">
              Coding
            </h2>
            <Link to="/BrowseCoding">
              <div className="background-image">
                <img src={img2} alt="programming" />
              </div>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="explore-two"
          >
            <h2 className="explore-section-heading explore-section-headingTwo">
              Music
            </h2>
            <Link to="/BrowseMusic">
              <div className="background-image">
                <img src={img3} alt="Music" />
              </div>
            </Link>
          </div>
        </div>
        <div className="explore-three">
          <h2 className="explore-section-heading explore-section-headingThree">
            Sports
          </h2>
          <Link to="/BrowseSports">
            <div className="background-image">
              <img src={img4} alt="Sports" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BrowsePage;

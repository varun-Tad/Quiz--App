import img9 from "../../assets/Tennis.svg";
import img10 from "../../assets/Basketball.svg";

import Navbar from "../Navigation/Navbar";
import "./BrowseSports.css";

const BrowseSports = () => {
  return (
    <div>
      <Navbar />
      <section className="BrowseSport-section">
        <div className="sportOne-quiz">
          <div className="image-top">
            <img src={img9} alt="sport" />
          </div>
          <div className="text-bottom">
            <h3>Time to put your Tennis Knowledge to the test ! Hop in !</h3>
            <button className="play-btn">Play →</button>
          </div>
        </div>
        <div className="sportTwo-quiz">
          <div className="image-top">
            <img src={img10} alt="Sport" />
          </div>
          <div className="text-bottom">
            <h3>
              Time to put your Basketball Knowledge to the test ! Dribble your
              way in !
            </h3>
            <button className="play-btn">Play →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseSports;

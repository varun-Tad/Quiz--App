import Navbar from "../Navigation/Navbar";
import img5 from "../../assets/React-image.svg";
import img6 from "../../assets/Js-image.svg";
import "./BrowseCoding.css";

const BrowseCoding = () => {
  return (
    <div>
      <Navbar />
      <section className="BrowseCoding-section">
        <div className="react-quiz">
          <div className="image-top">
            <img src={img5} alt="react" />
          </div>
          <div className="text-bottom">
            <h3>
              Take this quiz on React to find out how much you know or don't
              know.
            </h3>
            <button className="play-btn">Play →</button>
          </div>
        </div>
        <div className="js-quiz">
          <div className="image-top">
            <img src={img6} alt="react" />
          </div>
          <div className="text-bottom">
            <h3>
              Take this quiz on JavaScript to find out how much you know or
              don't know.
            </h3>
            <button className="play-btn">Play →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseCoding;

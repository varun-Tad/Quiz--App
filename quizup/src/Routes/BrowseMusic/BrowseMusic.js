import Navbar from "../Navigation/Navbar";
import img7 from "../../assets/MusicOne.svg";
import img8 from "../../assets/MusicTwo.svg";

import "./BrowseMusic.css";
import { useNavigate } from "react-router-dom";

const BrowseMusic = () => {
  let navigate = useNavigate();
  const PopMusicNavHandler = () => {
    navigate("/PopMusicQuiz");
  };

  return (
    <div>
      <Navbar />
      <section className="BrowseMusic-section">
        <div className="musicOne-quiz">
          <div className="image-top">
            <img src={img7} alt="music" />
          </div>
          <div className="text-bottom">
            <h3>
              Let's see how good you are with Bollywood Music. Hop in and take
              the quiz now !
            </h3>
            <button className="play-btn">Play →</button>
          </div>
        </div>
        <div className="musicTwo-quiz">
          <div className="image-top">
            <img src={img8} alt="music" />
          </div>
          <div className="text-bottom">
            <h3>
              Let's see how good you are with some English Pop Music.Hop in and
              take the quiz now !
            </h3>
            <button className="play-btn" onClick={PopMusicNavHandler}>
              Play →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseMusic;

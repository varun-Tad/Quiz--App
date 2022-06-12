import { Routes, Route } from "react-router-dom";

import "./App.css";
import BrowseCoding from "./Routes/BrowseCoding/BrowseCoding";
import BrowseMusic from "./Routes/BrowseMusic/BrowseMusic";
import PopMusicQuiz from "./Routes/BrowseMusic/PopMusicQuiz/PopMusicQuiz";
import BrowsePage from "./Routes/BrowsePage/BrowsePage";
import BasketBallQuiz from "./Routes/BrowseSports/BasketballQuiz/BasketBallQuiz";
import BrowseSports from "./Routes/BrowseSports/BrowseSports";
import TennisQuiz from "./Routes/BrowseSports/TennisQuiz/TennisQuiz";

import TennisQuizRes from "./Routes/BrowseSports/TennisQuiz/TennisQuizRes";
import Homepage from "./Routes/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Browse" element={<BrowsePage />} />
        <Route path="/BrowseCoding" element={<BrowseCoding />} />
        <Route path="/BrowseMusic" element={<BrowseMusic />} />
        <Route path="/BrowseSports" element={<BrowseSports />} />
        <Route path="/TennisQuiz" element={<TennisQuiz />} />
        <Route path="/BasketBallQuiz" element={<BasketBallQuiz />} />
        <Route path="/TennisQuizRes" element={<TennisQuizRes />} />
        <Route path="/PopMusicQuiz" element={<PopMusicQuiz />} />
      </Routes>
    </div>
  );
}

export default App;

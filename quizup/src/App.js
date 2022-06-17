import { Routes, Route } from "react-router-dom";

import "./App.css";
import BrowseCoding from "./Routes/BrowseCoding/BrowseCoding";
import JavascriptQuiz from "./Routes/BrowseCoding/JavascriptQuiz/JavascriptQuiz";
import JavascriptQuizRes from "./Routes/BrowseCoding/JavascriptQuiz/JavascriptQuizRes";
import ReactQuiz from "./Routes/BrowseCoding/ReactQuiz/ReactQuiz";
import ReactQuizRes from "./Routes/BrowseCoding/ReactQuiz/ReactQuizRes";
import BolMusicQuiz from "./Routes/BrowseMusic/BolMusicQuiz/BolMusicQuiz";
import BolMusicQuizRes from "./Routes/BrowseMusic/BolMusicQuiz/BolMusicQuizRes";
import BrowseMusic from "./Routes/BrowseMusic/BrowseMusic";
import PopMusicQuiz from "./Routes/BrowseMusic/PopMusicQuiz/PopMusicQuiz";
import PopMusicQuizRes from "./Routes/BrowseMusic/PopMusicQuiz/PopMusicQuizRes";
import BrowsePage from "./Routes/BrowsePage/BrowsePage";
import BasketBallQuiz from "./Routes/BrowseSports/BasketballQuiz/BasketBallQuiz";
import BasketBallQuizRes from "./Routes/BrowseSports/BasketballQuiz/BasketBallQuizRes";
import BrowseSports from "./Routes/BrowseSports/BrowseSports";
import TennisQuiz from "./Routes/BrowseSports/TennisQuiz/TennisQuiz";

import TennisQuizRes from "./Routes/BrowseSports/TennisQuiz/TennisQuizRes";
import Homepage from "./Routes/Homepage/Homepage";
import Login from "./Routes/Login/Login";
import SignUp from "./Routes/SignUp/SignUp";

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
        <Route path="/BasketBallQuizRes" element={<BasketBallQuizRes />} />
        <Route path="/TennisQuizRes" element={<TennisQuizRes />} />
        <Route path="/PopMusicQuiz" element={<PopMusicQuiz />} />
        <Route path="/PopMusicQuizRes" element={<PopMusicQuizRes />} />
        <Route path="/BolMusicQuiz" element={<BolMusicQuiz />} />
        <Route path="/BolMusicQuizRes" element={<BolMusicQuizRes />} />
        <Route path="/JavascriptQuiz" element={<JavascriptQuiz />} />
        <Route path="/JavascriptQuizRes" element={<JavascriptQuizRes />} />
        <Route path="/ReactQuiz" element={<ReactQuiz />} />
        <Route path="/ReactQuizRes" element={<ReactQuizRes />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

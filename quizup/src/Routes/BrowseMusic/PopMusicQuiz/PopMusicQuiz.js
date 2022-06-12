import Navbar from "../../Navigation/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePopMusic } from "../../../Contexts/PopMusicContext";
import "./PopMusicQuiz.css";

const PopMusicQuiz = () => {
  let navigate = useNavigate();
  const { PopMusicData, setPopMusicData, score, setScore } = usePopMusic();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const resultsHandler = () => {
    navigate("/TennisQuizRes");
  };

  const clickHandler = (ele, selectedAnswer) => {
    if (selectedAnswer === ele.correctAnswer) {
      const newScore = score + 2;
      setScore(newScore);
    } else if (selectedAnswer !== ele.correctAnswer) {
      const newScore = score - 1;
      setScore(newScore);
    }

    const newPopMusicData = PopMusicData.map((item) =>
      item.id === ele.id
        ? { ...item, selectedAnswer: selectedAnswer, questionStatus: true }
        : item
    );
    setPopMusicData(newPopMusicData);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < PopMusicData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="PopMusic-quiz-container">
      <Navbar />

      {showScore ? (
        <div className="results-section">
          <div>Your Score is {score}</div>
          <div>Head over to results page</div>
          <button onClick={resultsHandler}>Results &#8594;</button>
        </div>
      ) : (
        <>
          <div className="score-question">
            <p>
              Question:{" "}
              <span className="actual-score">{currentQuestion + 1}</span>/
              {PopMusicData.length}
            </p>
            <p style={{ color: score < 0 ? "red" : "green" }}>Score: {score}</p>
          </div>
          <div className="question-container">
            <div className="question-text">
              {currentQuestion + 1}. {PopMusicData[currentQuestion].question}
            </div>
            <div>
              {
                <div className="options">
                  <button
                    onClick={() =>
                      clickHandler(
                        PopMusicData[currentQuestion],
                        PopMusicData[currentQuestion].optionOne
                      )
                    }
                  >
                    {PopMusicData[currentQuestion].optionOne}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        PopMusicData[currentQuestion],
                        PopMusicData[currentQuestion].optionTwo
                      )
                    }
                  >
                    {PopMusicData[currentQuestion].optionTwo}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        PopMusicData[currentQuestion],
                        PopMusicData[currentQuestion].optionThree
                      )
                    }
                  >
                    {PopMusicData[currentQuestion].optionThree}
                  </button>
                </div>
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopMusicQuiz;

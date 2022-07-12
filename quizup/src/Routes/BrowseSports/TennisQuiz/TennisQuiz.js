import Navbar from "../../Navigation/Navbar";
import { useState, useEffect } from "react";
import { useTennis } from "../../../Contexts/TennisContext";
import "../../../Routes/Quiz.css";
import { useNavigate } from "react-router-dom";
const TennisQuiz = () => {
  let navigate = useNavigate();
  const { TennisData, setTennisData, score, setScore } = useTennis();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    localStorage.setItem("cuQue", currentQuestion);
  });

  useEffect(() => {
    const cq = localStorage.getItem("cuQue");
    if (cq) setScore(+cq);
  });

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

    const newCurrentTennisData = TennisData.map((item) =>
      item.id === ele.id
        ? { ...item, selectedAnswer: selectedAnswer, questionStatus: true }
        : item
    );
    setTennisData(newCurrentTennisData);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < TennisData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <Navbar />

      {showScore ? (
        <div className="results-section">
          <div>Your Score is {score}</div>
          <div>Head over to results page to find the correct answers</div>
          <button onClick={resultsHandler}>Results &#8594;</button>
        </div>
      ) : (
        <>
          <div className="score-question">
            <p>
              Question:{" "}
              <span className="actual-score">{currentQuestion + 1}</span>/
              {TennisData.length}
            </p>
            <p style={{ color: score < 0 ? "red" : "green" }}>Score: {score}</p>
          </div>
          <div className="question-container">
            <div className="question-text">
              {currentQuestion + 1}. {TennisData[currentQuestion].question}
            </div>
            <div>
              {
                <div className="options">
                  <button
                    onClick={() =>
                      clickHandler(
                        TennisData[currentQuestion],
                        TennisData[currentQuestion].optionOne
                      )
                    }
                  >
                    {TennisData[currentQuestion].optionOne}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        TennisData[currentQuestion],
                        TennisData[currentQuestion].optionTwo
                      )
                    }
                  >
                    {TennisData[currentQuestion].optionTwo}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        TennisData[currentQuestion],
                        TennisData[currentQuestion].optionThree
                      )
                    }
                  >
                    {TennisData[currentQuestion].optionThree}
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

export default TennisQuiz;

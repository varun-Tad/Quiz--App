import Navbar from "../../Navigation/Navbar";
import { useState } from "react";
import "../../../Routes/Quiz.css";
import { useNavigate } from "react-router-dom";
import { useBasketBall } from "../../../Contexts/BasketBallContext";
const BasketBallQuiz = () => {
  let navigate = useNavigate();
  const { BasketBallData, setBasketBallData, score, setScore } =
    useBasketBall();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const resultsHandler = () => {
    navigate("/BasketBallQuizRes");
  };

  const clickHandler = (ele, selectedAnswer) => {
    if (selectedAnswer === ele.correctAnswer) {
      const newScore = score + 2;
      setScore(newScore);
    } else if (selectedAnswer !== ele.correctAnswer) {
      const newScore = score - 1;
      setScore(newScore);
    }

    const newCurrentBasketBallData = BasketBallData.map((item) =>
      item.id === ele.id
        ? { ...item, selectedAnswer: selectedAnswer, questionStatus: true }
        : item
    );
    setBasketBallData(newCurrentBasketBallData);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < BasketBallData.length) {
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
              {BasketBallData.length}
            </p>
            <p style={{ color: score < 0 ? "red" : "green" }}>Score: {score}</p>
          </div>
          <div className="question-container">
            <div className="question-text">
              {currentQuestion + 1}. {BasketBallData[currentQuestion].question}
            </div>
            <div>
              {
                <div className="options">
                  <button
                    onClick={() =>
                      clickHandler(
                        BasketBallData[currentQuestion],
                        BasketBallData[currentQuestion].optionOne
                      )
                    }
                  >
                    {BasketBallData[currentQuestion].optionOne}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        BasketBallData[currentQuestion],
                        BasketBallData[currentQuestion].optionTwo
                      )
                    }
                  >
                    {BasketBallData[currentQuestion].optionTwo}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        BasketBallData[currentQuestion],
                        BasketBallData[currentQuestion].optionThree
                      )
                    }
                  >
                    {BasketBallData[currentQuestion].optionThree}
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

export default BasketBallQuiz;

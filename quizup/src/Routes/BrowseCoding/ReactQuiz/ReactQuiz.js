import Navbar from "../../Navigation/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReact } from "../../../Contexts/ReactContext";
import "../../../Routes/Quiz.css";

const ReactQuiz = () => {
  let navigate = useNavigate();
  const { ReactData, setReactData, score, setScore } = useReact();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const resultsHandler = () => {
    navigate("/ReactQuizRes");
  };

  const clickHandler = (ele, selectedAnswer) => {
    if (selectedAnswer === ele.correctAnswer) {
      const newScore = score + 2;
      setScore(newScore);
    } else if (selectedAnswer !== ele.correctAnswer) {
      const newScore = score - 1;
      setScore(newScore);
    }

    const newReactData = ReactData.map((item) =>
      item.id === ele.id
        ? { ...item, selectedAnswer: selectedAnswer, questionStatus: true }
        : item
    );
    setReactData(newReactData);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < ReactData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {" "}
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
              {ReactData.length}
            </p>
            <p style={{ color: score < 0 ? "red" : "green" }}>Score: {score}</p>
          </div>
          <div className="question-container">
            <div className="question-text">
              {currentQuestion + 1}. {ReactData[currentQuestion].question}
            </div>
            <div>
              {
                <div className="options">
                  <button
                    onClick={() =>
                      clickHandler(
                        ReactData[currentQuestion],
                        ReactData[currentQuestion].optionOne
                      )
                    }
                  >
                    {ReactData[currentQuestion].optionOne}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        ReactData[currentQuestion],
                        ReactData[currentQuestion].optionTwo
                      )
                    }
                  >
                    {ReactData[currentQuestion].optionTwo}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        ReactData[currentQuestion],
                        ReactData[currentQuestion].optionThree
                      )
                    }
                  >
                    {ReactData[currentQuestion].optionThree}
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

export default ReactQuiz;

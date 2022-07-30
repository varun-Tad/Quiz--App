import Navbar from "../../Navigation/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJavascript } from "../../../Contexts/JavascriptContext";
import "../../../Routes/Quiz.css";

const JavascriptQuiz = () => {
  let navigate = useNavigate();
  const { JsData, setJavascriptData, score, setScore } = useJavascript();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const resultsHandler = () => {
    navigate("/JavascriptQuizRes");
  };

  const clickHandler = (ele, selectedAnswer) => {
    if (selectedAnswer === ele.correctAnswer) {
      const newScore = score + 2;
      setScore(newScore);
    } else if (selectedAnswer !== ele.correctAnswer) {
      const newScore = score - 1;
      setScore(newScore);
    }

    const newJavascriptData = JsData.map((item) =>
      item.id === ele.id
        ? { ...item, selectedAnswer: selectedAnswer, questionStatus: true }
        : item
    );
    setJavascriptData(newJavascriptData);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < JsData.length) {
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
            <p class="question-number">
              Question:{" "}
              <span className="actual-score">{currentQuestion + 1}</span>/
              {JsData.length}
            </p>
          </div>
          <div className="question-container">
            <div className="question-text">
              {currentQuestion + 1}. {JsData[currentQuestion].question}
            </div>
            <div>
              {
                <div className="options">
                  <button
                    onClick={() =>
                      clickHandler(
                        JsData[currentQuestion],
                        JsData[currentQuestion].optionOne
                      )
                    }
                  >
                    {JsData[currentQuestion].optionOne}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        JsData[currentQuestion],
                        JsData[currentQuestion].optionTwo
                      )
                    }
                  >
                    {JsData[currentQuestion].optionTwo}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        JsData[currentQuestion],
                        JsData[currentQuestion].optionThree
                      )
                    }
                  >
                    {JsData[currentQuestion].optionThree}
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

export default JavascriptQuiz;

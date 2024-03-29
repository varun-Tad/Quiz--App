import Navbar from "../../Navigation/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBolMusic } from "../../../Contexts/BolMusicContext";
import "../../../Routes/Quiz.css";

const BolMusicQuiz = () => {
  let navigate = useNavigate();
  const { BolMusicData, setBolMusicData, score, setScore } = useBolMusic();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const resultsHandler = () => {
    navigate("/BolMusicQuizRes");
  };

  const clickHandler = (ele, selectedAnswer) => {
    if (selectedAnswer === ele.correctAnswer) {
      const newScore = score + 2;
      setScore(newScore);
    } else if (selectedAnswer !== ele.correctAnswer) {
      const newScore = score - 1;
      setScore(newScore);
    }

    const newBolMusicData = BolMusicData.map((item) =>
      item.id === ele.id
        ? { ...item, selectedAnswer: selectedAnswer, questionStatus: true }
        : item
    );
    setBolMusicData(newBolMusicData);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < BolMusicData.length) {
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
              {BolMusicData.length}
            </p>
          </div>
          <div className="question-container">
            <div className="question-text">
              {currentQuestion + 1}. {BolMusicData[currentQuestion].question}
            </div>
            <div>
              {
                <div className="options">
                  <button
                    onClick={() =>
                      clickHandler(
                        BolMusicData[currentQuestion],
                        BolMusicData[currentQuestion].optionOne
                      )
                    }
                  >
                    {BolMusicData[currentQuestion].optionOne}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        BolMusicData[currentQuestion],
                        BolMusicData[currentQuestion].optionTwo
                      )
                    }
                  >
                    {BolMusicData[currentQuestion].optionTwo}
                  </button>
                  <button
                    onClick={() =>
                      clickHandler(
                        BolMusicData[currentQuestion],
                        BolMusicData[currentQuestion].optionThree
                      )
                    }
                  >
                    {BolMusicData[currentQuestion].optionThree}
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

export default BolMusicQuiz;

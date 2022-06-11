import Navbar from "../../Navigation/Navbar";
import TennisQuizData from "./TennisQuiz.data";
import "./TennisQuiz.css";
import { useState } from "react";
const TennisQuiz = () => {
  const [currentTennisData, setCurrentTennisData] = useState(TennisQuizData);
  const quizHandler = (ele, selectedOption) => {
    ele.selectedAnswer = selectedOption;
    console.log(ele);
    console.log(selectedOption);
    console.log(currentTennisData);
  };

  return (
    <div className="Tennis-quiz-container">
      <Navbar />
      <h1 className="quiz-heading">Quiz</h1>
      {TennisQuizData.map((ele) => (
        <div key={ele.id} className="question-options">
          <div className="questions">
            <span>{ele.id}. </span>
            {ele.question}
          </div>
          <div className="options">
            <button onClick={() => quizHandler(ele, ele.optionOne)}>
              {ele.optionOne}
            </button>
            <button onClick={() => quizHandler(ele, ele.optionTwo)}>
              {ele.optionTwo}
            </button>
            <button onClick={() => quizHandler(ele, ele.optionThree)}>
              {ele.optionThree}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TennisQuiz;

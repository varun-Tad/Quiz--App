import Navbar from "../../Navigation/Navbar";
import { useJavascript } from "../../../Contexts/JavascriptContext";
import "../../../Routes/Results.css";
import { useNavigate } from "react-router-dom";

const JavascriptQuizRes = () => {
  const { JsData, score } = useJavascript();
  let navigate = useNavigate();
  const goToMenuHandler = () => {
    navigate("/Browse");
  };
  return (
    <div>
      <Navbar />
      <div className="results-container">
        <h2 className="result-heading">Results</h2>
        <p className="final-score">Final Score : {score}/10</p>
        {JsData.map((ele) => {
          return (
            <div key={ele.id} className="question-options">
              {ele.selectedAnswer === ele.correctAnswer ? (
                <div className="points green-points">+2</div>
              ) : (
                <div className=" points red-points ">-1</div>
              )}
              <div className="question-text">{ele.question}</div>
              <div className="option-btns">
                <button
                  style={{
                    backgroundColor:
                      ele.optionOne === ele.correctAnswer ? "green" : "",
                  }}
                >
                  {ele.optionOne}
                </button>
                <button
                  style={{
                    backgroundColor:
                      ele.optionTwo === ele.correctAnswer ? "green" : "",
                  }}
                >
                  {ele.optionTwo}
                </button>
                <button
                  style={{
                    backgroundColor:
                      ele.optionThree === ele.correctAnswer ? "green" : "",
                  }}
                >
                  {ele.optionThree}
                </button>
              </div>
              <div
                style={{
                  color:
                    ele.selectedAnswer === ele.correctAnswer ? "green" : "red",
                }}
                className="selected-answer"
              >
                You answered : {ele.selectedAnswer}
              </div>
            </div>
          );
        })}
      </div>
      <button className="goBack-btn" onClick={goToMenuHandler}>
        Back to menu page
      </button>
    </div>
  );
};

export default JavascriptQuizRes;

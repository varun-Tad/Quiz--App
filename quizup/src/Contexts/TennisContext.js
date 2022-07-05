import { createContext, useContext, useEffect, useState } from "react";
import TennisQuizData from "../Routes/BrowseSports/TennisQuiz/TennisQuiz.data";

const TennisContext = createContext();

const TennisProvider = ({ children }) => {
  const [TennisData, setTennisData] = useState(TennisQuizData);

  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.setItem("TennisData", JSON.stringify(TennisData));
  }, [TennisData]);

  useEffect(() => {
    const TennisData = JSON.parse(localStorage.getItem("TennisData"));
    if (TennisData) {
      setTennisData(TennisData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score) {
      setScore(score);
    }
  }, []);

  return (
    <TennisContext.Provider
      value={{ TennisData, setTennisData, score, setScore }}
    >
      {children}
    </TennisContext.Provider>
  );
};

const useTennis = () => useContext(TennisContext);

export { useTennis, TennisProvider, TennisContext };

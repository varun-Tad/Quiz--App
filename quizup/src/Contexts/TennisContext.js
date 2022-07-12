import { createContext, useContext, useEffect, useState } from "react";
import TennisQuizData from "../Routes/BrowseSports/TennisQuiz/TennisQuiz.data";

const TennisContext = createContext();

const TennisProvider = ({ children }) => {
  const [TennisData, setTennisData] = useState(TennisQuizData);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("TennisData");
    if (data !== null) setTennisData(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("TennisData", JSON.stringify(TennisData));
  });

  useEffect(() => {
    const sco = localStorage.getItem("score");
    if (sco !== null) setScore(+sco);
  });

  useEffect(() => {
    localStorage.setItem("score", score);
  });

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

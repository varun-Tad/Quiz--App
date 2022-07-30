import { createContext, useContext, useState } from "react";
import TennisQuizData from "../Routes/BrowseSports/TennisQuiz/TennisQuiz.data";

const TennisContext = createContext();

const TennisProvider = ({ children }) => {
  const [TennisData, setTennisData] = useState(TennisQuizData);
  const [score, setScore] = useState(0);

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

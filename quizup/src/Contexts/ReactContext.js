import { createContext, useContext, useState } from "react";
import ReactQuizData from "../Routes/BrowseCoding/ReactQuiz/ReactQuiz.data";

const ReactContext = createContext();

const ReactProvider = ({ children }) => {
  const [ReactData, setReactData] = useState(ReactQuizData);
  const [score, setScore] = useState(0);

  return (
    <ReactContext.Provider value={{ ReactData, setReactData, score, setScore }}>
      {children}
    </ReactContext.Provider>
  );
};

const useReact = () => useContext(ReactContext);

export { useReact, ReactProvider, ReactContext };

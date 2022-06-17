import { createContext, useContext, useState } from "react";
import JavascriptQuizData from "../Routes/BrowseCoding/JavascriptQuiz/JavascriptQuiz.data";

const JavascriptContext = createContext();

const JavascriptProvider = ({ children }) => {
  const [JsData, setJavascriptData] = useState(JavascriptQuizData);

  const [score, setScore] = useState(0);

  return (
    <JavascriptContext.Provider
      value={{ JsData, setJavascriptData, score, setScore }}
    >
      {children}
    </JavascriptContext.Provider>
  );
};

const useJavascript = () => useContext(JavascriptContext);

export { useJavascript, JavascriptProvider, JavascriptContext };

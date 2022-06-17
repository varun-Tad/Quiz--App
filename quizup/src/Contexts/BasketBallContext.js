import { createContext, useContext, useState } from "react";
import BasketballQuizData from "../Routes/BrowseSports/BasketballQuiz/BasketBallQuiz.data";

const BasketBallContext = createContext();

const BasketBallProvider = ({ children }) => {
  const [BasketBallData, setBasketBallData] = useState(BasketballQuizData);
  const [score, setScore] = useState(0);

  return (
    <BasketBallContext.Provider
      value={{ BasketBallData, setBasketBallData, score, setScore }}
    >
      {children}
    </BasketBallContext.Provider>
  );
};

const useBasketBall = () => useContext(BasketBallContext);

export { useBasketBall, BasketBallProvider, BasketBallContext };

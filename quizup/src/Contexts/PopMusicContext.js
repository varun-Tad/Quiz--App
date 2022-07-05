import { createContext, useContext, useState } from "react";
import PopMusicQuizData from "../Routes/BrowseMusic/PopMusicQuiz/PopMusicQuiz.data";

const PopMusicContext = createContext(PopMusicQuizData);

const PopMusicProvider = ({ children }) => {
  const [PopMusicData, setPopMusicData] = useState(PopMusicQuizData);
  const [score, setScore] = useState(0);
  return (
    <PopMusicContext.Provider
      value={{ PopMusicData, setPopMusicData, score, setScore }}
    >
      {children}
    </PopMusicContext.Provider>
  );
};

const usePopMusic = () => useContext(PopMusicContext);

export { usePopMusic, PopMusicProvider, PopMusicContext, useContext };

import { createContext, useContext, useState } from "react";
import BolMusicQuizData from "../Routes/BrowseMusic/BolMusicQuiz/BolMusicQuiz.data";

const BolMusicContext = createContext();

const BolMusicProvider = ({ children }) => {
  const [BolMusicData, setBolMusicData] = useState(BolMusicQuizData);

  const [score, setScore] = useState(0);

  return (
    <BolMusicContext.Provider
      value={{ BolMusicData, setBolMusicData, score, setScore }}
    >
      {children}
    </BolMusicContext.Provider>
  );
};

const useBolMusic = () => useContext(BolMusicContext);

export { useBolMusic, BolMusicProvider, BolMusicContext };

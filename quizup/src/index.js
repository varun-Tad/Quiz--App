import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { TennisProvider } from "./Contexts/TennisContext";
import { BasketBallProvider } from "./Contexts/BasketBallContext";
import { PopMusicProvider } from "./Contexts/PopMusicContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <PopMusicProvider>
        <BasketBallProvider>
          <TennisProvider>
            <App />
          </TennisProvider>
        </BasketBallProvider>
      </PopMusicProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

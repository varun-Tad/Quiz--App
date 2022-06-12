import Navbar from "../../Navigation/Navbar";
import { useState } from "react";
import { useTennis } from "../../../Contexts/TennisContext";
import "./TennisQuizRes.css";

const TennisQuizRes = () => {
  const { TennisData, setTennisData, score, setScore } = useTennis();
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default TennisQuizRes;

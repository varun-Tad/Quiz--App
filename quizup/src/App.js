import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Routes/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;

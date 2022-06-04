import { Routes, Route } from "react-router-dom";

import "./App.css";
import BrowseCoding from "./Routes/BrowseCoding/BrowseCoding";
import BrowseMusic from "./Routes/BrowseMusic/BrowseMusic";
import BrowsePage from "./Routes/BrowsePage/BrowsePage";
import BrowseSports from "./Routes/BrowseSports/BrowseSports";
import Homepage from "./Routes/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Browse" element={<BrowsePage />} />
        <Route path="/BrowseCoding" element={<BrowseCoding />} />
        <Route path="/BrowseMusic" element={<BrowseMusic />} />
        <Route path="/BrowseSports" element={<BrowseSports />} />
      </Routes>
    </div>
  );
}

export default App;

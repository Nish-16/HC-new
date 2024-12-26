import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./assets/pages/Content/Content"; // Ensure correct path
import Home from "./assets/pages/Home/Home";

function App() {
  return (
    <div id="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/content" element={<Content />} /> {/* Content Page */}
          <Route path="/" element={<Content />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

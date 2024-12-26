import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./assets/pages/Content/Content"; // Ensure correct path

function App() {
  return (
    <div id="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/content" element={<Content />} /> {/* Content Page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

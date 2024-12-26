import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./assets/pages/home/home";
// import Contact from "./assets/Pages/Contact";
// import Registration from "./assets/Pages/Registration";

function App() {
  return (
    <div id="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Home Page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

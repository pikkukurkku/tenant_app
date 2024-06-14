import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Name from "./pages/Name";
import "./App.css";

function App() {
  return (
    <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/name" element={<Name />} />
   </Routes>
  );
}

export default App;

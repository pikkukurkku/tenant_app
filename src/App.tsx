
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Email from "./pages/Email";
import Phone from "./pages/Phone";
import Salary from "./pages/Salary";
import Summary from "./pages/Summary";



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<Name />} />
        <Route path="/email" element={<Email />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
  );
}

export default App;

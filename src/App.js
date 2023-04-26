import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/NavBar/Navbar";
import NavigationBar from "./components/NavigationBar";
import AgeCalculator from "./components/AgeCalculator";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<AgeCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

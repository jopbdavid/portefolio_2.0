import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import "./index.css";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

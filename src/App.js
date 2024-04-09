import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import "./index.css";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";

function App() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const postHeight = () => {
      const bodyHeight = document.documentElement.scrollHeight;
      window.parent.postMessage({ frameHeight: bodyHeight }, "*");
    };
    postHeight();
  }, [height]);

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

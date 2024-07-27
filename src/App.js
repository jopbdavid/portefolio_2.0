import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import "./index.css";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      console.log(height);
      window.parent.postMessage({ frameHeight: height }, "*");
    };

    sendHeight();
  }, []);
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

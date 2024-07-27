import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import "./index.css";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      console.log(height);
      window.parent.postMessage({ frameHeight: height }, "*"); // Consider specifying the parent's origin here
    };

    // Send initial height
    sendHeight();

    const handleMessage = (event) => {
      if (event.data.action === "resize") {
        console.log("Resize message received", event.data.newSize);
        // If needed, adjust your content here, but typically you'd let CSS handle responsiveness
        // After adjusting, or immediately if no adjustments are needed:
        sendHeight();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [window.location.pathname]);
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

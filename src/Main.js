import React from "react";

import { links, social, skills } from "./data";
import { Link } from "react-router-dom";
import hand from "./img/Emoji_u1f44b.svg";
import Github from "./components/Github";
import Skills from "./components/Skills";
import Picture from "./components/Picture";

const Main = () => {
  return (
    <section className="section main">
      <Picture />
      <div className="skills-center">
        <div className="intro">
          <h2>
            Hey! I'm João.
            <span className="waving-hand">
              <img src={hand} />
            </span>
          </h2>
          <p>
            I am a fresh off the boat front-end developer. Eager to get myself
            working! Check my <Link to="/About">about</Link> page and get to
            know me.
          </p>
        </div>
        <Skills />

        <Github />
      </div>
    </section>
  );
};

export default Main;

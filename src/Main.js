import React from "react";
import logo from "./img/IMG_2769.JPG";
import { links, social, skills } from "./data";
import { Link } from "react-router-dom";
import hand from "./img/Emoji_u1f44b.svg";

const Main = () => {
  return (
    <section className="section main">
      <div className="title-logo">
        <div className="img-container">
          <img src={logo} alt="" className="person-img" />
        </div>
        <div className="underline"></div>
      </div>
      <div className="skills-center">
        {/* {btn container} */}
        <div className="skills-btn-container"></div>
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

        <article className="skill-info">
          <h3>SKILLS</h3>
          <aside className="skills">
            {skills.map((skill) => {
              const { id, name, icon } = skill;
              return <li key={id}>{icon}</li>;
            })}
          </aside>

          <p className="skill-date">{}</p>
          <h3>
            <div className="skill-desc">
              <p>{}</p>
            </div>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default Main;

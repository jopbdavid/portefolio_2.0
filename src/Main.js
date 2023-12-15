import React from "react";

import { links, social, skills } from "./data";
import { Link } from "react-router-dom";

import hand from "./img/Emoji_u1f44b.svg";
import Github from "./components/Github";
import Skills from "./components/Skills";
import Picture from "./components/Picture";
import styled from "styled-components";
import Cv from "./components/Cv";

const Main = () => {
  return (
    <Wrapper>
      <Picture />
      <div>
        <div className="intro">
          <h2>
            Hey! I'm João.
            <span className="waving-hand inline-block">
              <img src={hand} className="ml-6" alt="waving hand" />
            </span>
          </h2>
          <p className="ml-12 font-semibold font-aperture2">
            Self-taught Full-Stack Developer.{" "}
          </p>
          <p className="ml-20">
            Relentless curiosity for technology and a commitment to lifelong
            learning. I've honed my skills and expertise through self-directed
            study and hands-on experience! Check my{" "}
            <Link to="/About" className="font-bold hover:underline">
              about
            </Link>{" "}
            page and get to know me.
          </p>
        </div>
        <Skills />
        <Cv />
        <Github />
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.section`
  /* .intro {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: left;
    font-style: italic;
    width: 60%;
    margin-left: 2rem;

    padding-bottom: 1rem;
  }
  .waving-hand img {
    width: 35px;
    height: 35px;
  } */

  .intro {
    font-size: 1rem; // smaller font size for mobile
    line-height: 1.4rem;
    text-align: left;
    font-style: italic;
    width: 90%; // full width for mobile
    margin-left: 1.5rem; // smaller margin for mobile
    padding-bottom: 1rem;
  }

  .waving-hand img {
    width: 25px; // smaller size for mobile
    height: 25px;
  }

  // Medium devices (tablets)
  @media (min-width: 641px) {
    .intro {
      font-size: 1.2rem;
      line-height: 1.6rem;
      width: 80%;
      margin-left: 1.5rem;
    }

    .waving-hand img {
      width: 30px;
      height: 30px;
    }
  }

  // Large devices (desktops)
  @media (min-width: 769px) {
    .intro {
      font-size: 1.5rem;
      line-height: 2rem;
      width: 60%;
      margin-left: 2rem;
    }

    .waving-hand img {
      width: 35px;
      height: 35px;
    }
  }

  // Extra large devices (large desktops)
  @media (min-width: 1025px) {
    .intro {
      font-size: 1.8rem;
      line-height: 2.4rem;
      width: 60%;
      margin-left: 2rem;
    }
  }
`;

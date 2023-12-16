import React from "react";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

import ProjectCarousel from "./components/ProjectCarousel";

const Projects = () => {
  return (
    <Wrapper>
      <div className="project-section">
        <h2>&lt; Projects &gt;</h2>
        <p>Blowing my mind to smithereens with some experiments.</p>
        <div className="underline"></div>
        <div className="project-container">
          {projects.map((project) => {
            return <ProjectCarousel {...project} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  .project-section {
    margin-top: 3rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media screen and (max-width: 768px) {
    .project-section {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  .project-section h2 {
    letter-spacing: 2px;
    text-align: center;
    color: var(--clr-primary-3);
    @media screen and (max-width: 375px) {
      letter-spacing: 1px;
      font-size: 1.5rem;
    }
  }
  .project-section p {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.25rem;
    @media screen and (max-width: 375px) {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
  .project-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .underline {
    width: 60%; // Adjust for mobile
    height: 0.15rem;
    background: #ffbd46;
    position: absolute; // Position relative to the section

    left: 50%; // Center horizontally
    transform: translateX(-50%); // Ensure it's centered
  }
`;

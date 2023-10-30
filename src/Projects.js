import React from "react";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";

import ProjectCarousel from "./components/ProjectCarousel";

const Projects = () => {
  return (
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
  );
};

export default Projects;

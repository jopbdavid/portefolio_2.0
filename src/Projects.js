import React from "react";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="project-section">
      <div className="project-container">
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

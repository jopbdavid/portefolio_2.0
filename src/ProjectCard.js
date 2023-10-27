import React, { useState } from "react";

const ProjectCard = (project) => {
  const { id, name, description, img, url } = project;
  const [showDetails, setShowDetails] = useState(false);
  const handleEnter = () => {
    setShowDetails(true);
    console.log("trigger");
  };
  const handleLeave = () => {
    setShowDetails(false);
  };
  return (
    <div
      className="project"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        src={img}
        className={`project-img ${showDetails ? "hidden" : null}`}
        alt={name}
      />

      <div className={`project-details ${showDetails ? "show" : null}`}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

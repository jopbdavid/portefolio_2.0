import React, { useState } from "react";
import styled from "styled-components";

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

const Wrapper = styled.section`
  .project {
    /* padding: 2rem 0 4rem; */
    border-radius: var(--radius);
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  .project-img {
    width: 300px;
    height: 300px;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
    image-rendering: optimizeQuality;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
  .hidden {
    opacity: 0;
    transform: scale(1);
  }

  .show {
    opacity: 0.7;
  }
  .project:hover .project-details {
    opacity: 0.7;
  }
  .project-details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--clr-grey-10);

    text-align: left;
    border-radius: var(--radius);
    transition: opacity 0.5s ease-in-out;
  }

  .project-details h3 {
    margin-left: 2rem;
    font-style: italic;
    color: var(--clr-primary-1);
    font-weight: 900;
  }

  .project-details p {
    margin-top: 2rem;
    margin-left: 2rem;
    font-size: 1rem;
    color: var(--clr-grey-1);
    font-weight: 700;
  }

  .project-details button {
    display: inline-block;
    /* padding: 10px 20px;
  background-color: #fff;
  color: #000; */
    text-decoration: none;

    transition: background-color 0.5s ease;
  }

  .project-details button:hover {
    background-color: #000;
    color: #fff;
  }
`;

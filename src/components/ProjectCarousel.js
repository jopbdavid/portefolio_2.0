import React from "react";
import { projects } from "../data";
import { useState } from "react";
import styled from "styled-components";

const ProjectCarousel = ({ id, name, description, img, url, skills }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleEnter = () => {
    setShowDetails(true);
    console.log("trigger");
  };
  const handleLeave = () => {
    setShowDetails(false);
  };
  return (
    <Wrapper img={img} className="container">
      <div className="mockup-browser border border-base-800 my-10 container2">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">{url}</div>
        </div>
        <div
          className="flex justify-center px-4 py-16 border-t border-base-300 img"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className={`project-details ${showDetails ? "show" : null}`}>
            <h2>{name}</h2>

            <p>{description}</p>
            <span className="flex flex-row mx-auto justify-evenly w-2/3 text-3xl my-2">
              {skills.map((skill) => {
                return skill;
              })}
            </span>
            <button className="btn">
              <a href={url}>View project</a>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .project-section {
    margin-top: 3rem;
    margin-left: 10rem;
    margin-right: 10rem;
  }
  @media screen and (max-width: 992px) {
    .project-section {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  .project-section h2 {
    letter-spacing: 2px;

    text-align: center;
    color: var(--clr-primary-3);
  }
  .project-section p {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.25rem;
  }

  .project {
    /* padding: 2rem 0 4rem; */
    border-radius: var(--radius);
    position: relative;
    overflow: hidden;
  }

  .img {
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    .img {
      padding: 0;

      object-fit: cover;
      height: 150px;
    }
    .container {
      width: 100% !important;
    }
    .container2 {
      width: 100% !important;
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
      object-fit: contain;
    }
  }
  .hidden {
    opacity: 0;
    transform: scale(1);
  }

  .project-details {
    position: absolute;
    margin-left: 25%;
    margin-top: 10%;
    width: 50%;
    height: 75%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 800;

    background-color: var(--clr-grey-9);

    text-align: left;
    border-radius: var(--radius);
    transition: opacity 0.5s ease-in-out;
    @media screen and (max-width: 768px) {
      justify-content: space-evenly;
      width: 100%;
      margin-left: 0;
      height: 100%;
    }
  }

  .show {
    opacity: 0.9;
  }
  .project:hover .project-details {
    opacity: 0.9;
  }

  .project-details h2 {
    margin-left: 2rem;
    font-style: italic;
    color: #ffbd46;
    font-weight: 900;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 10%;
    }
  }

  .project-details p {
    margin-top: 2rem;
    margin-left: 2rem;
    font-size: 1rem;
    color: var(--clr-grey-1);
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      margin-left: 0;
      font-weight: 300;
      margin-top: 0;
    }
  }

  .project-details button {
    display: inline-block;
    /* padding: 10px 20px;
  background-color: #fff;
  color: #000; */
    text-decoration: none;

    transition: background-color 0.5s ease;
    @media screen and (max-width: 768px) {
      display: block;
      font-size: 0.75rem;
      font-weight: 300;
      width: 80%;
      margin-bottom: -10%;
      padding: 0;
    }
  }

  .project-details button:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default ProjectCarousel;

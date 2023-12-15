import React from "react";
import { skills } from "../data";
import styled from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <article className="skill-info">
        <h3>SKILLS</h3>
        <aside className="skills">
          {skills.map((skill) => {
            const { id, name, icon } = skill;
            return <li key={id}>{icon}</li>;
          })}
        </aside>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  // Adjusting for mobile first
  margin: 0;
  padding: 1rem;

  .skill-info .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; // Center items for smaller screens
    padding-top: 0.5rem;
    background: #ffbd46; // Ensure background color is applied
    border-radius: var(--radius);
    border: 1.5px solid;
    width: 100%; // Adjust width as needed
  }

  .skills li {
    list-style-type: none;
    margin: 0.5rem; // Add some space around each skill
  }

  .skill-info h3 {
    font-weight: 400;
    margin: 0;
    text-align: center; // Center heading for mobile
    font-size: 1.2rem; // Smaller font size for mobile
  }

  .skill-icon {
    color: var(--clr-primary-5);
  }

  // Media queries for larger screens
  @media (min-width: 576px) {
    .skill-info {
      margin-left: 2rem;
    }
    .skill-info h3 {
      text-align: left;
      margin-left: 1rem;
      font-size: 1.5rem; // Adjust font size for larger screens
    }
    .skills {
      width: 90%;
      justify-content: flex-start; // Align items to start for larger screens
    }
  }
  @media (min-width: 992px) {
    margin-left: 15%;
    .skill-info {
      margin-left: 4rem;
    }
  }
  @media (min-width: 1280px) {
    margin-left: 25%;
    .skill-info {
      margin-left: 8rem;
      max-width: 60%;
    }
    .skill-info h3 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export default Skills;

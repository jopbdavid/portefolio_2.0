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

        <p className="skill-date">{}</p>
        <h3>
          <div className="skill-desc">
            <p>{}</p>
          </div>
        </h3>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-left: 35%;
  .skills-center {
    width: 80vw;
    margin-top: 2rem;
    max-width: var(--max-width);
  }
  .skills-btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .skills {
    border-radius: var(--radius);

    background: #ffbd46;
    border: 1.5px solid;
    display: flex;
    width: 90%;
    padding-top: 0.5rem;
    justify-content: space-evenly;
  }

  .skills li {
    list-style-type: none;
  }

  .skill-info {
    margin-left: 8rem;
  }

  .skill-info h3 {
    font-weight: 300;
    margin-left: 20rem;
    font-style: italic;
  }

  .skill-date {
    letter-spacing: var(--spacing);
  }
  .skill-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .skill-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
  .skill-icon {
    color: var(--clr-primary-5);
  }
  @media (min-width: 992px) {
    .skill-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .skill-btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Skills;

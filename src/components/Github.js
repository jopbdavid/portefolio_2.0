import React from "react";
import styled from "styled-components";
// import github from "../../public/github.jpg";
import { DiGithubFull } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";

const Github = () => {
  return (
    <Wrapper>
      <div
        className="hero"
        style={{
          backgroundImage: `url(/github.jpg)`,
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h3>
              <DiGithubFull
                size={80}
                style={{ display: "inline", color: "#ffbd46" }}
              />
              <DiGithubBadge
                size={80}
                style={{ display: "inline", color: "#ffbd46" }}
              />
            </h3>

            <p>
              Feel free to explore my repositories, fork projects, or get in
              touch if you'd like to collaborate on any exciting projects. I'm
              always eager to learn and contribute to the development community.
            </p>
            <button className="btn">
              <a href="https://github.com/jopbdavid">Gheck Me Out!</a>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-9);
  }
  padding: 5 rem 0;
  margin-bottom: 5rem;
  background: #ffbd46;
  margin-left: 0;
  margin-right: 0;
  width: 100%;

  p {
    font-size: 1.25rem;
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-grey-10);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: #ffbd46;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #ffbd46;
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }

  .git {
    background-color: #ffbd46;
    color: var(--clr-primary-1);
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  /* @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  } */
`;
export default Github;

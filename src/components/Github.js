import React from "react";
import styled from "styled-components";

import { DiGithubFull } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";

const Github = () => {
  return (
    <Wrapper>
      <div
        className="hero-image"
        // style={{
        //   backgroundImage: `url(/github.jpg)`,
        //   backgroundSize: "60%",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="hero-overlay bg-opacity-60">
          <div className="hero-content text-center text-neutral-content">
            <div>
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
                always eager to learn and contribute to the development
                community.
              </p>
              <button className="btn ">
                <a href="https://github.com/jopbdavid">Gheck Me Out!</a>
              </button>
            </div>
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

  .hero-image {
    background-image: url(/github.jpg);
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
      background-size: contain;
    }
  }

  @media (max-width: 375px) {
    .btn {
      width: 100%;
      margin-top: 1rem;
    }
    .hero {
      background-size: 5rem;
    }
  }
`;
export default Github;

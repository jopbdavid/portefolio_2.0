import React from "react";
import { social } from "./data";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      {/* <div className="footer"> */}
      <h4>
        Let's Connect!
        <span> . </span>
      </h4>

      <ul className="social-icons">
        {social.map((item, index) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <Link to={url}>{icon}</Link>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </Foot>
  );
};

const Foot = styled.footer`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  box-shadow: var(--light-shadow);
  span {
    color: var(--clr-primary-5);
    font-size: 3rem;
    font-weight: bold;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 20rem;
  }
  h4 {
    color: var(--clr-white);
    font-weight: 400;
    font-size: 1.25rem;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }

  .social-icons {
    display: flex;
    margin-top: 1.25rem;
  }
  .social-icons a {
    margin: 5rem;

    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .social-icons a:hover {
    color: var(--clr-primary-9);
  }
`;
export default Footer;

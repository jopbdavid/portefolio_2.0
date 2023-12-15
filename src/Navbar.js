import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "./img/jd_logo.png";
import styled from "styled-components";

import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <Wrapper showLinks={showLinks}>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <div className="icon">
              <img src={logo} alt="icon" />
            </div>
            <h1 className="nav-name">
              <Link to="/">
                <a style={{ fontFamily: "headingNow" }}>
                  <span className="first-l">J</span>OÃO
                  <span className="first-l">D</span>AVID
                </a>
              </Link>
            </h1>

            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
            <div
              className={`links-container ${showLinks ? "show-links" : ""}`}
              ref={linksContainerRef}
            >
              <ul className="links" ref={linksRef}>
                {links.map((link, index) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <Link to={url}>
                        <a>{text}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  nav {
    background: var(--clr-white);
    box-shadow: var(--light-shadow);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-name a {
    text-decoration: none !important;
    color: #ffbd46;
    display: flex; /* To center the title */
    justify-content: center; /* Center the title */
    align-items: center; /* Center the title */
    font-family: "headingNow";
    letter-spacing: 0.1rem; /* Adjust letter spacing */
    font-size: 1.5rem; /* Adjust font size */
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon img {
    width: 40px; // Smaller size for mobile
    height: 40px; // Keep it round
    border-radius: 50%;
  }
  .nav-toggle {
    display: none;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  .logo {
    height: 40px;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .links a {
    font-family: "headingNow";
    text-transform: capitalize;
    color: inherit;
    display: inline-block;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 0.75rem;
    transition: var(--mainTransition);
  }

  .links a:hover {
    transform: scale(1.1);
  }

  .links-container {
    transition: var(--transition);

    overflow: hidden;
    max-height: ${(props) =>
      props.showLinks ? "250px" : "0"}; // Controlled by showLinks
  }
  .show-container {
    height: 10rem;
  }
  .first-l {
    font-family: "headingNow";
    font-size: 2rem;
    color: #000;
  }

  @media screen and (min-width: 700px) {
    .nav-header {
      display: flex; /* Hide header on large screens */
    }

    .nav-name a {
      font-size: 2.5rem; /* Adjust font size for larger screens */
      letter-spacing: 0.7rem; /* Adjust letter spacing for larger screens */
    }
    .first-l {
      font-size: 4rem; /* Adjust font size for larger screens */
    }

    .nav-toggle {
      display: none; /* Hide hamburger menu on large screens */
    }
    .links-container {
      /* height: auto !important; Ensure links are always visible */
      overflow: visible;
      display: flex;
      margin-left: -3rem;
    }
    .links {
      flex-direction: row;
    }

    .links a {
      margin: 0 0.25rem; /* Spacing between links */
      font-size: 1rem; /* Adjust font size for larger screens */
    }
    .icon img {
      width: 100px; // Increase size for larger screens
      height: 100px; // Keep it round
    }
  }

  @media screen and (min-width: 1024px) {
    .links-container {
      /* height: auto !important; Ensure links are always visible */
      overflow: visible;
      display: flex;

      margin-right: 2.5rem;
    }
    .links {
      flex-direction: row;
    }

    .links a {
      margin: 0 0.5rem; /* Spacing between links */
      font-size: 1.25rem; /* Adjust font size for larger screens */
    }
    .nav-name {
      font-size: 1.5rem; // Smaller font size for the title on mobile
      margin-left: 5rem;
    }
  }

  @media screen and (max-width: 700px) {
    .nav-name {
      font-size: 1.2rem; // Smaller font size for the title on mobile
    }

    .nav-toggle {
      display: block; /* Show hamburger menu on small screens */
    }
    .nav-header {
      justify-content: space-between;
    }
    .show-links {
      height: 250px; /* Adjust as needed */
      /* Other styles for the expanded state */
    }
    .links a {
      font-size: 0.75rem; /* Smaller font size for nav links on smaller screens */
    }
  }
`;

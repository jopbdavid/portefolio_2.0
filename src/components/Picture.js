import React from "react";
import styled from "styled-components";
import logo from "../img/IMG_2282.JPG";

const Picture = () => {
  return (
    <Wrapper>
      <div className="title-logo">
        <div />
        <div className="img-container">
          <img src={logo} alt="profile picture" className="person-img" />
        </div>
        <div className="underline"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-left: 0; // Set to 0 for mobile first
  text-align: center; // Center content on mobile
  position: relative; // Position relative for the underline

  .underline {
    width: 60%; // Adjust for mobile
    height: 0.25rem;
    background: #ffbd46;
    position: absolute; // Position relative to the section
    bottom: -1rem; // Adjust the position below the image
    left: 50%; // Center horizontally
    transform: translateX(-50%); // Ensure it's centered
  }

  .person-img {
    width: 95%; // Full width of the container
    height: 100%; // Keep aspect ratio
    object-fit: cover;
    border-radius: 50%;
    position: relative; // Positioned relative to the container
    z-index: 2; // Ensure it's above the ::before pseudo-element
  }

  .img-container::before {
    content: "";
    width: 110%; // Slightly larger for the displacement effect
    height: 110%;
    background: #ffbd46;
    position: absolute;
    top: -5%; // Adjust for displacement
    left: -10%;
    border-radius: 50%;
    z-index: 1; // Place it behind the image
  }

  .img-container {
    position: relative;
    width: 200px; // Set a fixed size for mobile
    height: 200px; // Keep it a square for a perfect circle
    border-radius: 50%;
    margin: 1rem auto; // Center the container with margin
    overflow: hidden; // Hide overflowing parts of the image
  }

  .title-logo {
    padding-top: 3px;
  }

  .first-l {
    font-size: 4.5rem;
    color: var(--clr-grey-7);
  }

  @media (min-width: 576px) {
    margin-left: 20%; // Adjust as per the layout
    .underline {
      margin-right: 0;
    }
    .img-container {
      width: 250px; // Increase size for larger screens
      height: 250px;
    }
  }

  @media (min-width: 768px) {
    margin-left: 5rem; // Adjust as per the layout
    margin-bottom: 3rem;
    .underline {
      width: 35%; // Adjust for tablet

      bottom: -1rem;
    }
    .img-container {
      width: 300px; // Original size
      height: 300px; // Maintain aspect ratio
    }
  }

  @media (min-width: 992px) {
    .img-container {
      width: 350px;
      height: 350px;
    }
    .underline {
      bottom: -2.5rem;
    }
  }
`;

export default Picture;

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
  margin-left: 35%;
  .underline {
    width: 15rem;
    height: 0.25rem;
    margin-left: 2rem;
    background: #ffbd46;
  }

  .person-img {
    width: 95%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: #ffbd46;
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
  .img-container {
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 50%;
    margin: 0;
    margin-bottom: 1.25rem;
    /* margin-left: 35%; */
  }
  .title-logo {
    padding-top: 3px;
  }

  .first-l {
    font-size: 4.5rem;
    color: var(--clr-grey-7);
  }
`;

export default Picture;

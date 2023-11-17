import React from "react";
import cv from "../img/cv.png";

const Cv = () => {
  return (
    <>
      <div className="mb-20 w-full h-16 flex justify-center items-center">
        <a
          href="./assets/FullStackJB_CV_2023.pdf"
          download="jb_cv_2023.pdf"
          className="btn flex justify-center items-center"
        >
          Download My CV
          <img src={cv} alt="cvIcon" className="w-8 h-8 mr-2" />
        </a>
      </div>
    </>
  );
};

export default Cv;

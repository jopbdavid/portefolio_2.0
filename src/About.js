import React from "react";
import { useState } from "react";
import { experience } from "./data";
import { FaAngleDoubleRight, FaIndustry } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { MdJavascript } from "react-icons/md";

const About = () => {
  const [jobs, setJobs] = useState(experience);
  const [value, setValue] = useState(0);

  const { id, company, title, dates, duties } = jobs[value];
  return (
    <>
      <div className="about">
        <h2>Get to know me</h2>
        <div className="underline"></div>
        <h3>Born and raised in the beautiful seaside country of Portugal </h3>
        <div>
          <p>
            <span className="about-year">The year: 2023</span> Decided to switch
            lanes and learn some coding with the aim of starting a career in
            <b> Frontend Development</b>.
          </p>
          <p>
            I'm open to
            <b> Job Opportunities where I can contribute, learn and grow</b>. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        <div className="education">
          <h3>&lt; Education &gt;</h3>
          <div className="education-container">
            <div className="education-one">
              <h4>Biochemistry</h4>
              <p>First academic endeavor was in the field of science</p>
              <MdScience size={40} />
            </div>
            <div className="education-one">
              <h4>Industrial Engineering</h4>
              <p>Lean and manufacturing optimization | Project Management</p>
              <FaIndustry size={30} />
            </div>
            <div className="education-one">
              <h4>Front-end Engineer</h4>
              <p>Scrum master | Codecademy</p>
              <MdJavascript size={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="title-experience ">
          <h3>&lt; Experience &gt;</h3>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.title}
              </button>
            ))}
          </div>

          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            <h3>
              {duties.map((duty, index) => (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              ))}
            </h3>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import { useState } from "react";
import { experience } from "./data";
import { FaAngleDoubleRight, FaIndustry } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { MdJavascript } from "react-icons/md";
import FE from "./img/fe.png";
import BE from "./img/be.png";
import DB from "./img/db.png";
import learner from "./img/learner.png";
import styled from "styled-components";
import certOne from "./img/codecademyCerti.png";
import certTwo from "./img/PSMI.png";
import certThree from "./img/udemyNodeJS.png";
import certFour from "./img/webDevBootcamp.png";
import certFive from "./img/fullStackEng.png";

const About = () => {
  const [jobs, setJobs] = useState(experience);
  const [value, setValue] = useState(0);

  const { id, company, title, dates, duties } = jobs[value];
  return (
    <Wrapper>
      <div className="about">
        <h2>Get to know me</h2>
        <div className="underline"></div>
        <h3>
          &lt; Born and raised in the beautiful seaside country of Portugal &gt;
        </h3>
        <div>
          <p>
            <span className="about-year">The year: 2023</span> Decided to switch
            lanes and learn some coding with the aim of starting a career in
            <b> Web Development</b>.
          </p>
          <p>
            I'm open to
            <b> Job / Projects where I can contribute, learn and grow</b>. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        {/* <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"> */}
        <h3>
          <span className="relative inline-block">
            &lt;What to expect from me?&gt;
          </span>
        </h3>

        <div className="grid gap-4 row-gap-5 w-full grid-cols-2">
          <div className="flex flex-col  p-3 border border-gray-600 rounded shadow-md border-opacity-10">
            <div className="w-16 h-16 mb-4">
              <img src={FE} alt="front end icon" />
            </div>
            <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
              Front-End Wizard
            </h4>
            <div className="flex flex-col text-sm mt-2">
              <p className="flex flex-row">
                <FaAngleDoubleRight size={12} className="mr-2 mt-1" />
                Strong command of HTML, CSS, and JavaScript
              </p>

              <p className="flex flex-row ">
                <FaAngleDoubleRight size={12} className="mr-2 mt-1" />
                Experienced in creating responsive and intuitive user interfaces
              </p>

              <p className="flex flex-row">
                <FaAngleDoubleRight size={12} className="mr-2 mt-1" />I love
                turning ideas into beautiful, functional websites
              </p>
            </div>
          </div>
          <div className="flex flex-col  p-3 border border-gray-600 rounded shadow-md border-opacity-10">
            <div className="w-16 h-16 mb-4">
              <img src={BE} alt="back-end icon" />
            </div>
            <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
              Back-End Maestro
            </h4>
            <div className="flex flex-col text-sm mt-2">
              <p className="flex flex-row">
                <FaAngleDoubleRight size={15} className="mr-2 mt-1" />
                Well-versed in a range of technologies and frameworks, including
                Node.js and express.
              </p>
            </div>
          </div>
          <div className="flex flex-col  p-3 border border-gray-600 rounded shadow-md border-opacity-10">
            <div className="w-16 h-16 mb-4">
              <img src={DB} alt="database icon" />
            </div>

            <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
              Database nerd
            </h4>
            <div className="flex flex-col  text-sm mt-2">
              <p className="flex flex-row">
                <FaAngleDoubleRight size={15} className="mr-2 mt-1" />
                Hands-on experience with various database systems, including
                MongoDB, Airtable and PostgreSQL.
              </p>
            </div>
          </div>
          <div className="flex flex-col  p-3 border border-gray-600 rounded shadow-md border-opacity-10">
            <div>
              <div className="w-16 h-16 mb-4">
                <img src={learner} alt="learning icon" />
              </div>
              <h4 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
                Fanatic learner
              </h4>
              <div className="flex flex-col justify-evenly text-sm mt-2">
                <p className="flex flex-row">
                  <FaAngleDoubleRight size={15} className="mr-2 mt-1" />
                  In the ever-evolving world of technology, I am committed to
                  staying up-to-date with the latest trends and tools.
                </p>
                <p className="flex flex-row">
                  <FaAngleDoubleRight size={15} className=" mr-2 mt-1" />
                  Constantly learning, experimenting, and expanding my skill set
                  to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="w-[100%] edu">
          <div className="experience">
            <h3>&lt; Education | Certification &gt;</h3>
          </div>

          <div className="education-top ">
            <h3 className="pt-6">Full-Stack Engineer</h3>
            <h4>Scrum Master Org | Codecademy | Udemy</h4>
            <div className="flex flex-row w-1/5 justify-center align-middle mx-auto">
              <img
                src={certOne}
                className="px-2 hover:scale-150"
                alt="certFE"
              />
              <img
                src={certFive}
                className="px-2 hover:scale-150"
                alt="certFS"
              />
              <img
                src={certTwo}
                className="px-2 hover:scale-150"
                alt="certPSM"
              />
              <img
                src={certFour}
                className="px-2 hover:scale-150"
                alt="certWebDev"
              />
              <img
                src={certThree}
                className="px-2 hover:scale-150"
                alt="certNode"
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-10 edu">
            <div className="education-one">
              <h3>Biochemistry</h3>
              <h4>First academic endeavor was in the field of science</h4>
              <MdScience size={50} className="mx-auto" />
            </div>
            <div className="education-one">
              <h3>Industrial Engineering</h3>
              <h4>Lean and manufacturing optimization | Project Management</h4>
              <FaIndustry size={40} className="mx-auto" />
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

          <article className="job-info flex flex-col">
            <h3 className="text-left">{title}</h3>
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
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  .about {
    margin-top: 3rem;
    margin-left: 15rem;
    margin-right: 15rem;
  }
  @media screen and (max-width: 992px) {
    .about {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  .about h2 {
    text-transform: uppercase;
    text-align: center;
    text-shadow: var(--light-shadow);
  }
  .about h3 {
    text-align: center;
    margin-top: 2rem;
    font-style: italic;
    color: var(--clr-grey-6);
    font-size: 1.25rem;
  }

  .about-year {
    text-shadow: var(--light-shadow);
    font-style: italic;
    font-weight: bold;
  }
  .education h3 {
    letter-spacing: 2px;
    color: var(--clr-primary-3);
    font-size: 1.5rem;
  }

  .education-one {
    background-color: var(--clr-grey-9);
    box-shadow: var(--light-shadow);
    transition: var(--mainTransition);
    text-align: center;

    border-radius: var(--radius);
    padding-top: 1rem;
  }
  .education-top {
    background-color: var(--clr-grey-9);
    box-shadow: var(--light-shadow);
    transition: var(--mainTransition);
    text-align: center;
    width: 100%;
    padding-bottom: 1rem;

    border-radius: var(--radius);
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 992px) {
    .education-one {
      height: 300px;
    }
  }

  .education-one:hover {
    transition: var(--transition);
    transform: scale(1.2);
  }
  .education-top:hover {
    transition: var(--transition);
    transform: scale(1.2);
  }
  .title-experience {
    margin-bottom: 4rem;
    text-align: center;
    margin-top: 5rem;
  }

  .experience {
    margin-bottom: 2rem;
    margin-left: 0;
    margin-right: 0;
  }

  .experience h3 {
    letter-spacing: 2px;
    color: var(--clr-primary-3);
    font-size: 1.5rem;
  }

  .jobs-center {
    width: 100vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
  }
  .job-btn:hover {
    color: #ffbd46;
    box-shadow: 0 2px #ffbd46;
  }
  .active-btn {
    color: #ffbd46;
    box-shadow: 0 2px #ffbd46;
  }

  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .job-date {
    letter-spacing: var(--spacing);
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
    font-size: x-small;
    width: 450px;
  }
  .job-icon {
    color: #ffbd46;
  }
  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 100vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
    .job-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 #ffbd46;
    }
    .job-btn:hover {
      box-shadow: -2px 0 #ffbd46;
    }
  }

  @media screen and (max-width: 375px) {
    .edu {
      display: grid;
      grid-template-columns: 1fr;
    }
    .experience {
      padding-bottom: 0;
    }
    .education-one {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    .job-btn {
      margin: 0.5rem 0;
    }
    .btn-container {
      margin: 0.5rem;
    }
    .title-experience {
      margin-bottom: 1rem;
    }
    .job-desc p {
      width: 90%;
    }
  }
`;

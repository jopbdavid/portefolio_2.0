import React from "react";
import {
  FaBehance,
  FaCss3,
  FaFacebook,
  FaHtml5,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaInstagram,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import cookie from "./img/cookie_project.jpg";
import meet from "./img/MeetCreator.jpg";
import school from "./img/class_management.jpg";
import unsplash from "./img/unsplash.jpg";
import pokedex from "./img/pokedex.jpg";
import jobsAPI from "./img/jobsAPI.jpg";
import jobsApp from "./img/jobsApp.jpg";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.instagram.com/joaopdavid/",
    icon: <FaInstagram size={30} />,
  },
  {
    id: 2,
    url: "https://twitter.com/JooPedr39494131",
    icon: <FaTwitter size={30} />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/jo%C3%A3o-david-888391144/",
    icon: <FaLinkedin size={30} />,
  },
  {
    id: 4,
    url: "https://github.com/jopbdavid",
    icon: <FaGithub size={30} />,
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 size={50} />,
  },
  {
    id: 2,
    name: "CSS5",
    icon: <FaCss3 size={50} />,
  },
  {
    id: 3,
    name: "JS",
    icon: <SiJavascript size={50} />,
  },
  {
    id: 4,
    name: "TS",
    icon: <SiTypescript size={50} />,
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact size={50} />,
  },
  {
    id: 6,
    name: "Github",
    icon: <AiFillGithub size={50} />,
  },
  {
    id: 7,
    name: "Node.js",
    icon: <FaNode size={50} />,
  },
  {
    id: 8,
    name: "Mongodb",
    icon: <SiMongodb size={50} />,
  },
];

export const experience = [
  {
    id: 1,
    company: "Simoldes Plastic Division",
    title: "Mold Project Manager",
    dates: "2016 - 2021",
    duties: [
      "Over 1000 hours of mold tryout experience.",
      "Proud member of the team that brought to you Peugeot 2008 (2019) / DS3 Crossback (2018) / DS7 Crossback (2018) / Renault Kangoo (2021)",
      "Range of technical and industrial skills which allows for quality support and solutions in the fields of Plastic part design, Themoplastic Injection and Tooling manufacturing.",
    ],
  },
  {
    id: 2,
    company: "OLI",
    title: "Maintenance Manager",
    dates: "2021 - 2022",
    duties: [
      "part of the team bringing the best hydraulically sustainable and inclusive bathroom solutions. A hotel in Cuba, an Israeli hospital, a school in Spain, a football stadium in Qatar, a boat Hotel in Peru or a restaurant in Italy, OLI's Flushing cisterns can be found in bathrooms all over the world!",
      "One year of Tool Maintenance leading a team of technicians focused on performing preventive maintenance and implementing tool improvements.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Cookie Dilemma",
    description: "Yeah, i've a cookie problem",
    img: cookie,
    url: "https://cookiedilema.netlify.app",
  },
  {
    id: 2,
    name: "Meet The Creator",
    description:
      "My personal playlist creator experiment, to get my workout juices flowing. Based on the codecademy project.",
    img: meet,
    url: "https://meet-creator.netlify.app",
  },
  {
    id: 3,
    name: "Class Management",
    description:
      "My attempt to save a dear family member from the excruciating pain of managing those little devils at school",
    img: school,
    url: "http://class-management-jp.netlify.app",
  },
  {
    id: 4,
    name: "Unsplash search",
    description:
      "Simple Unsplash API app to search for images of delicacies and whet my appetite. Credits to: John Smilga :)  ",
    img: unsplash,
    url: "https://unsplash-img-search.netlify.app/",
  },
  {
    id: 5,
    name: "Homemade Pokedex",
    description: "Gotta code 'em all!",
    img: pokedex,
    url: "https://homemade-pokedex.netlify.app/",
  },
  {
    id: 6,
    name: "JobsApp",
    description: "My first Full-stack integration, based on the Jobs API.",
    img: jobsApp,
    url: "https://jobsapp-tut.onrender.com/landing",
  },
  {
    id: 7,
    name: "Jobs API",
    description: "First Back-end experiment",
    img: jobsAPI,
    url: "https://temp-jobs-api-w1nb.onrender.com",
  },
];

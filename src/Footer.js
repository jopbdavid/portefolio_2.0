import React from "react";
import { social } from "./data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        Let's Connect
        <span className="bullet"> . </span>
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
    </div>
  );
};

export default Footer;

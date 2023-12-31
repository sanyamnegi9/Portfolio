import React from "react";
import "../styles/Header.scss";
import modelImg from "../assets/model.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="home">
      <div className="content">
        <p className="hello">Hello,</p>
        <p className="intro">
          I'm <span className="name">Sanyam</span>
          <br />
          Web Developer
        </p>
        <p className="header-desc">
          Aspiring React developer with a passion for crafting dynamic and
          user-centric interfaces. Eager to learn and contribute to projects
        </p>
        <button
          className="btn hire-btn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sanyamnegi/", "_blank")
          }
        >
          <FontAwesomeIcon icon={faBriefcase} className="hire-img" />
          Hire me
        </button>
      </div>
      <img src={modelImg} alt="profile" className="model-img" />
    </div>
  );
};

export default Header;

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
        <span className="hello">Hello,</span>
        <span className="intro">
          I'm <span className="name">Sanyam</span>
          <br />
          Web Developer
        </span>
        <p className="header-desc">
          I am a skilled and passionate web developer with experience in
          creating visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn hire-btn">
            <FontAwesomeIcon icon={faBriefcase} className="hire-img"/>
            Hire me
          </button>
        </Link>
      </div>
      <img src={modelImg} alt="profile" className="model-img" />
    </div>
  );
};

export default Header;
